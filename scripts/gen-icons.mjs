// Rasterizes public/favicon.svg into the PWA icon set using Playwright.
// Run via `npm run icons` after editing the crane SVG.
import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("public/favicon.svg", "utf8");
const OUT = "public";
const sizes = [
  ["pwa-192x192.png", 192],
  ["pwa-512x512.png", 512],
  ["pwa-maskable-512x512.png", 512],
  ["apple-touch-icon-180x180.png", 180],
];

const browser = await chromium.launch();
for (const [name, size] of sizes) {
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
  await page.setContent(
    `<style>*{margin:0;padding:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`,
  );
  await page.screenshot({ path: `${OUT}/${name}` });
  await page.close();
  console.log(`  ${name} (${size}px)`);
}
await browser.close();
console.log("icons written to public/");
