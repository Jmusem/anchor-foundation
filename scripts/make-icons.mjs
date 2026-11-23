// One-off: builds favicons, PWA icons and the social share image (og-image.jpg) into /public.
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const logo = "src/assets/logo_anchor.webp"; // 600x342, transparent

// Icon mark: white "A" with a red heart on a navy tile (the full logo is too detailed for 32px).
const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#0a1a4f"/><path d="M118 410 L256 104 L394 410" fill="none" stroke="#fff" stroke-width="46" stroke-linecap="round" stroke-linejoin="round"/><path d="M256 372 C196 332 186 284 222 272 C244 266 256 286 256 286 C256 286 268 266 290 272 C326 284 316 332 256 372Z" fill="#e5242b"/></svg>');
const square = async (size) => sharp(svg).resize(size, size).png();

for (const [name, size] of [["icon-512.png", 512], ["icon-192.png", 192], ["apple-touch-icon.png", 180], ["favicon-48.png", 48], ["favicon-32.png", 32]]) {
  await (await square(size)).toFile(`public/${name}`);
}
// favicon.ico = PNG-in-ICO (supported by every modern browser)
const png = await (await square(48)).toBuffer();
const ico = Buffer.alloc(22);
ico.writeUInt16LE(0, 0); ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4);
ico.writeUInt8(48, 6); ico.writeUInt8(48, 7); ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12);
ico.writeUInt32LE(png.length, 14); ico.writeUInt32LE(22, 18);
writeFileSync("public/favicon.ico", Buffer.concat([ico, png]));

// Open Graph / WhatsApp / Facebook share image 1200x630
const bg = await sharp("src/assets/homevisit1.webp").resize(1200, 630, { fit: "cover", position: "attention" }).toBuffer();
const logoCard = await sharp(logo).resize({ width: 300 }).toBuffer();
const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0a1a4f" stop-opacity=".95"/><stop offset=".6" stop-color="#0a1a4f" stop-opacity=".78"/><stop offset="1" stop-color="#0a1a4f" stop-opacity=".35"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="70" y="56" width="340" height="206" rx="24" fill="#fff"/>
  <text x="70" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="800" fill="#fff">Empowering communities</text>
  <text x="70" y="480" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="800" fill="#ff8a8e">across Kenya</text>
  <text x="70" y="555" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="600" fill="#cdd6ff" letter-spacing="3">MINDSET  ·  EQUIPPING  ·  EMPOWERMENT</text>
</svg>`);
await sharp(bg).composite([{ input: overlay }, { input: logoCard, left: 90, top: 74 }]).jpeg({ quality: 82, mozjpeg: true }).toFile("public/og-image.jpg");
console.log("icons + og-image written");
