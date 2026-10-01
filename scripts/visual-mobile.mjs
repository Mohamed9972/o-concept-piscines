// Mobile visual check (390px): contact + devis + home bottom (no sticky bar).
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://127.0.0.1:3105";
const OUT = process.env.OUT || "C:/Users/Alpha/AppData/Local/Temp/opencode";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const browser = await chromium.launch({ executablePath: EDGE, args: ["--no-sandbox", "--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("pageerror", (e) => errors.push("PAGEERROR: " + String(e).slice(0, 200)));

async function shot(name, url, selector) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch((e) => console.log("NAV:", e.message.slice(0, 150)));
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 200) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
    document.querySelectorAll("main img[loading='lazy']").forEach((img) => { img.loading = "eager"; });
    await new Promise((r) => setTimeout(r, 2000));
  });
  if (selector) await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: "start" }), selector);
  else await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(1000);
  const sticky = await page.evaluate(() => !!document.querySelector(".sticky-cta"));
  await page.screenshot({ path: `${OUT}/${name}` });
  console.log("SHOT:", name, "sticky-cta-present:", sticky);
}

await shot("m-contact.png", `${BASE}/contact`, ".cards3");
await shot("m-devis.png", `${BASE}/devis`, "main .section");
await shot("m-home-mid.png", `${BASE}/`, null);
console.log("ERRORS:", errors.length ? errors : "none");
await browser.close();
