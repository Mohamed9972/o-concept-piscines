// Visual check: viewport screenshots at key sections (what users really see).
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://127.0.0.1:3104";
const OUT = process.env.OUT || "C:/Users/Alpha/AppData/Local/Temp/opencode";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const browser = await chromium.launch({ executablePath: EDGE, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 200)); });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + String(e).slice(0, 200)));

async function settle() {
  // Slow scroll so IO reveals + clip animations + lazy images all complete,
  // then force any remaining lazy images (settled human-visit state).
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 150) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)); }
  });
  await page.evaluate(async () => {
    document.querySelectorAll("main img[loading='lazy']").forEach((img) => { img.loading = "eager"; });
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 2500));
  });
}

async function shot(name, url, selector) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch((e) => console.log("NAV:", e.message.slice(0, 150)));
  await settle();
  if (selector) await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: "start" }), selector);
  else await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/${name}` });
  console.log("SHOT:", name);
}

await shot("s-home-hero.png", `${BASE}/`, null);
await shot("s-home-work.png", `${BASE}/`, ".work-ed");
await shot("s-home-svc.png", `${BASE}/`, ".svc-rows");
await shot("s-real-hero.png", `${BASE}/realisations`, null);
await shot("s-real-feature.png", `${BASE}/realisations`, ".feature-block");
await shot("s-svc-rows.png", `${BASE}/services`, "main .section");
console.log("CONSOLE-ERRORS:", errors.length ? errors : "none");
await browser.close();
