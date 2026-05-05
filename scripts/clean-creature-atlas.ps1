param(
  [string]$Atlas = "assets/art/enemy-encounter-atlas.png",
  [string]$Output = $Atlas,
  [int]$Columns = 10,
  [int]$Rows = 6,
  [int[]]$RealmRows = @(0, 1, 2, 3, 4, 5),
  [int]$AlphaThreshold = 12,
  [int]$MinKeepPixels = 220,
  [int]$NearKeepPixels = 90,
  [double]$NearDistance = 95,
  [int]$BrightKeepPixels = 55,
  [double]$BrightThreshold = 130,
  [switch]$AuditOnly
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$source = @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class CreatureAtlasCleaner
{
    private sealed class Component
    {
        public readonly List<int> Pixels = new List<int>();
        public int Count;
        public int MinX = int.MaxValue;
        public int MinY = int.MaxValue;
        public int MaxX = -1;
        public int MaxY = -1;
        public double SumX;
        public double SumY;
        public double SumBrightness;
        public int MaxAlpha;
        public double CenterX { get { return SumX / Math.Max(1, Count); } }
        public double CenterY { get { return SumY / Math.Max(1, Count); } }
        public double AvgBrightness { get { return SumBrightness / Math.Max(1, Count); } }
    }

    public static string Clean(
        string atlasPath,
        string outputPath,
        int columns,
        int rows,
        int[] realmRows,
        int alphaThreshold,
        int minKeepPixels,
        int nearKeepPixels,
        double nearDistance,
        int brightKeepPixels,
        double brightThreshold,
        bool auditOnly)
    {
        using (var bitmap = new Bitmap(atlasPath))
        {
            var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
            var data = bitmap.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            var stride = data.Stride;
            var bytes = Math.Abs(stride) * bitmap.Height;
            var buffer = new byte[bytes];
            Marshal.Copy(data.Scan0, buffer, 0, bytes);

            int cellW = bitmap.Width / columns;
            int cellH = bitmap.Height / rows;
            var report = new List<string>();

            foreach (var row in realmRows)
            {
                if (row < 0 || row >= rows) continue;
                for (int col = 0; col < columns; col++)
                {
                    var components = FindComponents(buffer, stride, col * cellW, row * cellH, cellW, cellH, alphaThreshold);
                    if (components.Count == 0)
                    {
                        report.Add(String.Format("row {0} col {1}: empty", row, col));
                        continue;
                    }

                    components.Sort((a, b) => b.Count.CompareTo(a.Count));
                    var main = components[0];
                    int removedComponents = 0;
                    int removedPixels = 0;

                    for (int i = 1; i < components.Count; i++)
                    {
                        var component = components[i];
                        double dx = component.CenterX - main.CenterX;
                        double dy = component.CenterY - main.CenterY;
                        double distance = Math.Sqrt(dx * dx + dy * dy);
                        bool keep =
                            component.Count >= minKeepPixels ||
                            (component.Count >= nearKeepPixels && distance <= nearDistance) ||
                            (component.Count >= brightKeepPixels && component.AvgBrightness >= brightThreshold);

                        if (keep) continue;

                        removedComponents++;
                        removedPixels += component.Count;

                        if (!auditOnly)
                        {
                            foreach (int local in component.Pixels)
                            {
                                int x = local % cellW;
                                int y = local / cellW;
                                int offset = (row * cellH + y) * stride + (col * cellW + x) * 4;
                                buffer[offset + 3] = 0;
                                buffer[offset + 2] = 0;
                                buffer[offset + 1] = 0;
                                buffer[offset + 0] = 0;
                            }
                        }
                    }

                    report.Add(String.Format(
                        "row {0} col {1}: components={2}, removed={3}, pixels={4}, main={5}px",
                        row,
                        col,
                        components.Count,
                        removedComponents,
                        removedPixels,
                        main.Count));
                }
            }

            if (!auditOnly)
            {
                Marshal.Copy(buffer, 0, data.Scan0, bytes);
            }

            bitmap.UnlockBits(data);

            if (!auditOnly)
            {
                bitmap.Save(outputPath, ImageFormat.Png);
            }

            return String.Join(Environment.NewLine, report);
        }
    }

    private static List<Component> FindComponents(byte[] buffer, int stride, int originX, int originY, int width, int height, int alphaThreshold)
    {
        var visited = new bool[width * height];
        var components = new List<Component>();
        int[] queue = new int[width * height];
        int[] dx = new int[] { -1, 1, 0, 0, -1, -1, 1, 1 };
        int[] dy = new int[] { 0, 0, -1, 1, -1, 1, -1, 1 };

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int start = y * width + x;
                if (visited[start] || !IsVisible(buffer, stride, originX + x, originY + y, alphaThreshold)) continue;

                var component = new Component();
                int head = 0;
                int tail = 0;
                queue[tail++] = start;
                visited[start] = true;

                while (head < tail)
                {
                    int local = queue[head++];
                    int px = local % width;
                    int py = local / width;
                    int offset = (originY + py) * stride + (originX + px) * 4;
                    int b = buffer[offset + 0];
                    int g = buffer[offset + 1];
                    int r = buffer[offset + 2];
                    int a = buffer[offset + 3];

                    component.Pixels.Add(local);
                    component.Count++;
                    component.SumX += px;
                    component.SumY += py;
                    component.SumBrightness += (r + g + b) / 3.0;
                    component.MaxAlpha = Math.Max(component.MaxAlpha, a);
                    component.MinX = Math.Min(component.MinX, px);
                    component.MinY = Math.Min(component.MinY, py);
                    component.MaxX = Math.Max(component.MaxX, px);
                    component.MaxY = Math.Max(component.MaxY, py);

                    for (int i = 0; i < dx.Length; i++)
                    {
                        int nx = px + dx[i];
                        int ny = py + dy[i];
                        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
                        int next = ny * width + nx;
                        if (visited[next] || !IsVisible(buffer, stride, originX + nx, originY + ny, alphaThreshold)) continue;
                        visited[next] = true;
                        queue[tail++] = next;
                    }
                }

                components.Add(component);
            }
        }

        return components;
    }

    private static bool IsVisible(byte[] buffer, int stride, int x, int y, int alphaThreshold)
    {
        int offset = y * stride + x * 4;
        return buffer[offset + 3] > alphaThreshold;
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies System.Drawing

$atlasPath = (Resolve-Path -LiteralPath $Atlas).Path
$outputPath = if ([System.IO.Path]::IsPathRooted($Output)) { $Output } else { Join-Path (Get-Location) $Output }
$sameOutputPath = [System.IO.Path]::GetFullPath($atlasPath).Equals([System.IO.Path]::GetFullPath($outputPath), [System.StringComparison]::OrdinalIgnoreCase)
$cleanOutputPath = if ($sameOutputPath -and -not $AuditOnly) { "$outputPath.tmp.png" } else { $outputPath }
$outputDir = [System.IO.Path]::GetDirectoryName($outputPath)
if ($outputDir -and -not (Test-Path -LiteralPath $outputDir)) {
  New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$report = [CreatureAtlasCleaner]::Clean(
  $atlasPath,
  $cleanOutputPath,
  $Columns,
  $Rows,
  $RealmRows,
  $AlphaThreshold,
  $MinKeepPixels,
  $NearKeepPixels,
  $NearDistance,
  $BrightKeepPixels,
  $BrightThreshold,
  [bool]$AuditOnly
)

if ($sameOutputPath -and -not $AuditOnly) {
  Move-Item -LiteralPath $cleanOutputPath -Destination $outputPath -Force
}

$report
