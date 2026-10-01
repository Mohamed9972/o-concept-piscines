// DOM diagnostics: reveal states + image load states per page.
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://127.0.0.1:3104";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const browser = await chromium.launch({ executablePath: EDGE, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

async function diag(url) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  // Slow continuous-ish scroll so every element intersects at a rendered frame
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 150) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 2500));
  });
  const report = await page.evaluate(() => {
    const reveals = [...document.querySelectorAll(".reveal")];
    const hidden = reveals.filter((el) => !el.classList.contains("in")).map((el) => ({
      cls: el.className.slice(0, 80),
      top: Math.round(el.getBoundingClientRect().top + window.scrollY),
      op: getComputedStyle(el).opacity,
    }));
    const imgs = [...document.querySelectorAll("main img")].map((img) => ({
      alt: (img.alt || "").slice(0, 50),
      loaded: img.complete && img.naturalWidth > 0,
      w: img.naturalWidth,
    }));
    return { reveals: reveals.length, hidden, imgs, broken: imgs.filter((i) => !i.loaded) };
  });
  console.log("URL:", url);
  console.log("  reveals:", report.reveals, "hidden:", JSON.stringify(report.hidden));
  console.log("  imgs:", report.imgs.length, "broken:", JSON.stringify(report.broken));
}

await diag(`${BASE}/`);
await diag(`${BASE}/realisations`);
await diag(`${BASE}/services`);
await browser.close();
