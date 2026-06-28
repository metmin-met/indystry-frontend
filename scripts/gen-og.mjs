// Generiert das site-weite OG-Share-Bild public/og.png (1200×630) aus einem SVG via sharp.
// Einmalig/bei Bedarf:  node scripts/gen-og.mjs public/og.png   (aus dem frontend/-Verzeichnis)
import sharp from "sharp";
import { writeFileSync } from "node:fs";
const W = 1200, H = 630;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="1" stop-color="#16203a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#6366f1"/>
  <text x="84" y="150" font-family="DejaVu Sans, sans-serif" font-size="30" font-weight="600" letter-spacing="2" fill="#8aa0c6">INDUSTRIE 4.0 · SELBST GEHOSTET · SOUVERÄN</text>
  <text x="80" y="300" font-family="DejaVu Sans, sans-serif" font-size="120" font-weight="700" fill="#ffffff">Indystry<tspan fill="#6f7d9c" font-weight="500">.works</tspan></text>
  <text x="84" y="402" font-family="DejaVu Sans, sans-serif" font-size="46" font-weight="700" fill="#c7d2fe">Build on open source.</text>
  <text x="84" y="464" font-family="DejaVu Sans, sans-serif" font-size="46" font-weight="700" fill="#c7d2fe">Build on our knowledge.</text>
  <text x="84" y="562" font-family="DejaVu Sans, sans-serif" font-size="28" font-weight="400" fill="#8aa0c6">Vom Sensor bis zur Auswertung — auf deinem eigenen Stack.</text>
</svg>`;
const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(process.argv[2] || "public/og.png", png);
console.log("og.png geschrieben:", png.length, "bytes");
