param(
  [Parameter(Mandatory = $true)]
  [string]$Source,
  [Parameter(Mandatory = $true)]
  [string]$Atlas,
  [Parameter(Mandatory = $true)]
  [int]$RealmRow,
  [string]$Output = $Atlas,
  [int]$Columns = 5,
  [int]$Rows = 2,
  [int]$AtlasColumns = 10,
  [int]$AtlasRows = 6,
  [int]$Padding = 24,
  [switch]$AggressiveChroma
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

function Test-ChromaPixel([int]$r, [int]$g, [int]$b) {
  $magentaBias = $r + $b - (2 * $g)
  if ($AggressiveChroma) {
    return ($r -gt 115 -and $b -gt 80 -and $r -gt ($g + 32) -and $b -gt ($g + 32) -and $magentaBias -gt 120)
  }
  return ($r -gt 135 -and $b -gt 115 -and $g -lt 150 -and $magentaBias -gt 145 -and [Math]::Abs($r - $b) -lt 145)
}

function Get-VisibleBounds([System.Drawing.Bitmap]$bitmap) {
  $minX = $bitmap.Width
  $minY = $bitmap.Height
  $maxX = -1
  $maxY = -1

  for ($y = 0; $y -lt $bitmap.Height; $y += 1) {
    for ($x = 0; $x -lt $bitmap.Width; $x += 1) {
      $pixel = $bitmap.GetPixel($x, $y)
      if ($pixel.A -le 16) { continue }
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }

  if ($maxX -lt 0) {
    return [System.Drawing.Rectangle]::FromLTRB(0, 0, $bitmap.Width, $bitmap.Height)
  }

  return [System.Drawing.Rectangle]::FromLTRB($minX, $minY, $maxX + 1, $maxY + 1)
}

function Copy-CleanCell(
  [System.Drawing.Bitmap]$sourceBitmap,
  [System.Drawing.Rectangle]$sourceRect
) {
  $cell = New-Object System.Drawing.Bitmap($sourceRect.Width, $sourceRect.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

  for ($y = 0; $y -lt $sourceRect.Height; $y += 1) {
    for ($x = 0; $x -lt $sourceRect.Width; $x += 1) {
      $pixel = $sourceBitmap.GetPixel($sourceRect.X + $x, $sourceRect.Y + $y)
      if (Test-ChromaPixel $pixel.R $pixel.G $pixel.B) {
        $cell.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
      } else {
        $cell.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $pixel.R, $pixel.G, $pixel.B))
      }
    }
  }

  return $cell
}

$sourcePath = (Resolve-Path -LiteralPath $Source).Path
$atlasPath = (Resolve-Path -LiteralPath $Atlas).Path
$outputPath = if ([System.IO.Path]::IsPathRooted($Output)) { $Output } else { Join-Path (Get-Location) $Output }

$sourceBitmap = [System.Drawing.Bitmap]::FromFile($sourcePath)
$atlasBitmap = [System.Drawing.Bitmap]::FromFile($atlasPath)
$resultBitmap = New-Object System.Drawing.Bitmap($atlasBitmap.Width, $atlasBitmap.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($resultBitmap)
$graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
$graphics.DrawImage($atlasBitmap, 0, 0, $atlasBitmap.Width, $atlasBitmap.Height)
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$cellW = [int]($atlasBitmap.Width / [double]$AtlasColumns)
$cellH = [int]($atlasBitmap.Height / [double]$AtlasRows)
$targetY = [int]($RealmRow * $cellH)
$transparentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(0, 0, 0, 0))

for ($i = 0; $i -lt ($Columns * $Rows); $i += 1) {
  $sourceCol = [int]($i % $Columns)
  $sourceRow = [int][Math]::Floor($i / [double]$Columns)
  $destCol = [int]$i
  $destRect = [System.Drawing.Rectangle]::new([int]($destCol * $cellW), $targetY, $cellW, $cellH)
  $srcX1 = [int][Math]::Floor($sourceCol * $sourceBitmap.Width / [double]$Columns)
  $srcY1 = [int][Math]::Floor($sourceRow * $sourceBitmap.Height / [double]$Rows)
  $srcX2 = [int][Math]::Floor(($sourceCol + 1) * $sourceBitmap.Width / [double]$Columns)
  $srcY2 = [int][Math]::Floor(($sourceRow + 1) * $sourceBitmap.Height / [double]$Rows)
  $srcX2 = [Math]::Min($sourceBitmap.Width, $srcX2)
  $srcY2 = [Math]::Min($sourceBitmap.Height, $srcY2)
  $srcRect = [System.Drawing.Rectangle]::new($srcX1, $srcY1, [Math]::Max(1, $srcX2 - $srcX1), [Math]::Max(1, $srcY2 - $srcY1))

  $graphics.FillRectangle($transparentBrush, $destRect)

  $cleanCell = Copy-CleanCell -sourceBitmap $sourceBitmap -sourceRect $srcRect
  $bounds = Get-VisibleBounds $cleanCell
  $fitW = $cellW - ($Padding * 2)
  $fitH = $cellH - ($Padding * 2)
  $scale = [Math]::Min($fitW / [double]$bounds.Width, $fitH / [double]$bounds.Height)
  $drawW = [int][Math]::Round($bounds.Width * $scale)
  $drawH = [int][Math]::Round($bounds.Height * $scale)
  $drawX = $destRect.X + [int][Math]::Round(($cellW - $drawW) / 2)
  $drawY = $destRect.Y + $cellH - $Padding - $drawH
  $drawRect = [System.Drawing.Rectangle]::new($drawX, $drawY, $drawW, $drawH)

  $graphics.DrawImage($cleanCell, $drawRect, $bounds, [System.Drawing.GraphicsUnit]::Pixel)
  $cleanCell.Dispose()
}

$transparentBrush.Dispose()
$graphics.Dispose()
$atlasBitmap.Dispose()
$sourceBitmap.Dispose()

$directory = [System.IO.Path]::GetDirectoryName($outputPath)
if ($directory -and -not (Test-Path -LiteralPath $directory)) {
  New-Item -ItemType Directory -Path $directory | Out-Null
}

$resultBitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$resultBitmap.Dispose()

Write-Output "Imported $($Columns * $Rows) creatures into row $RealmRow at $outputPath"
