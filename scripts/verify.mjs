import { chromium } from "playwright";
import { mkdirSync } from "fs";

const outDir = "verify-screenshots";
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const browser = await chromium.launch();
const errors = [];

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${vp.name}] ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`[${vp.name}] pageerror: ${err.message}`));
  page.on("response", (res) => {
    if (res.status() >= 400) errors.push(`[${vp.name}] ${res.status()} ${res.url()}`);
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.screenshot({ path: `${outDir}/${vp.name}-01-intro.png` });

  // Dismiss intro
  const ctaButton = page.getByRole("button", { name: /découvrir notre histoire/i });
  await ctaButton.click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${outDir}/${vp.name}-02-hero.png` });

  for (const [id, label] of [
    ["notre-histoire", "story"],
    ["rsvp", "rsvp"],
    ["hebergement", "accommodation"],
    ["dress-code", "dresscode"],
    ["jour-j", "dayof"],
    ["traditions", "traditions"],
    ["localisation", "location"],
    ["informations", "practical"],
  ]) {
    await page.evaluate((elId) => {
      document.getElementById(elId)?.scrollIntoView();
    }, id);
    await page.waitForTimeout(1600);
    await page.screenshot({ path: `${outDir}/${vp.name}-03-${label}.png` });
  }

  // check body horizontal overflow
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth - document.documentElement.clientWidth;
  });
  if (overflow > 1) {
    errors.push(`[${vp.name}] horizontal overflow detected: ${overflow}px`);
  }

  await context.close();
}

await browser.close();

console.log("Console/page errors:", errors.length ? errors : "none");
console.log("Screenshots saved in", outDir);
