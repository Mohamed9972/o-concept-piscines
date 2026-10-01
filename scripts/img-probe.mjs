// Probe why home WorkShowcase images never fetch.
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://127.0.0.1:3104";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const browser = await chromium.launch({ executablePath: EDGE, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
await page.goto(`${BASE}/`, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});

const before = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll(".work-ed img")];
  return imgs.map((img) => {
    const r = img.getBoundingClientRect();
    return {
      alt: img.alt.slice(0, 30),
      loading: img.loading,
      complete: img.complete, w: img.naturalWidth,
      src: (img.currentSrc || img.src).slice(-60),
      rect: `${Math.round(r.width)}x${Math.round(r.height)}@y${Math.round(r.top)}`,
      display: getComputedStyle(img).display,
    };
  });
});
console.log("BEFORE:", JSON.stringify(before, null, 1));

// Force: scroll into view + eager, wait, recheck
await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll(".work-ed img")];
  for (const img of imgs) { img.loading = "eager"; img.scrollIntoView({ block: "center" }); await new Promise((r) => setTimeout(r, 1500)); }
});
const after = await page.evaluate(() =>
  [...document.querySelectorAll(".work-ed img")].map((img) => ({ alt: img.alt.slice(0, 30), complete: img.complete, w: img.naturalWidth }))
);
console.log("AFTER:", JSON.stringify(after));
await browser.close();
