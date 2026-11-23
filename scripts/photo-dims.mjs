// Writes src/photo-dims.json: width/height of every thumbnail so the page can reserve space (no layout shift).
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "node:fs";

const ROOT = "src/assets";
const out = {};
const files = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = `${dir}/${name}`;
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith("-sm.webp")) files.push(p);
  }
}
walk(ROOT);

for (const p of files) {
  const m = await sharp(p).metadata();
  const key = p.slice(ROOT.length + 1, -"-sm.webp".length);
  out[key] = [m.width, m.height];
}
writeFileSync("src/photo-dims.json", JSON.stringify(out));
console.log(Object.keys(out).length, "photos measured");
