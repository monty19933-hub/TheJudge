import { cp, mkdir, rm } from "node:fs/promises";

const webDir = new URL("../www/", import.meta.url);
const projectRoot = new URL("../", import.meta.url);

const entries = [
  "assets",
  "src",
  "index.html",
  "manifest.webmanifest",
  "styles.css",
  "sw.js"
];

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });

for (const entry of entries) {
  await cp(new URL(entry, projectRoot), new URL(entry, webDir), { recursive: true });
}
