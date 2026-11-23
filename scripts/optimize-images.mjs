// One-off: converts raw JPG/PNG photos in src/assets to optimized WebP (full + -sm thumbnail).
// Usage: node scripts/optimize-images.mjs   (originals are removed afterwards with git rm)
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join, extname, basename, dirname } from "node:path";

const ROOT = "src/assets";
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(jpe?g|png)$/i.test(f)) files.push(p);
  }
})(ROOT);

let before = 0, after = 0;
for (const p of files) {
  const base = join(dirname(p), basename(p, extname(p)).replace(/[^a-zA-Z0-9_-]/g, "_"));
  const src = sharp(p).rotate();
  const isLogo = /logo/i.test(p);
  before += statSync(p).size;
  const full = await src.clone().resize({ width: isLogo ? 600 : 1600, withoutEnlargement: true }).webp({ quality: 76 }).toFile(base + ".webp");
  after += full.size;
  if (!isLogo) {
    const sm = await src.clone().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 70 }).toFile(base + "-sm.webp");
    after += sm.size;
  }
  console.log(p, "->", (full.size / 1024) | 0, "KB");
}
console.log(`\nTotal ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
