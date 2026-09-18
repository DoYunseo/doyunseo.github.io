import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { content } from "../src/content.mjs";
import { renderPage } from "../src/template.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");
const analyticsId = process.env.GA_MEASUREMENT_ID?.trim() || content.analyticsId || "";

if (analyticsId && !/^G-[A-Z0-9]+$/.test(analyticsId)) {
  throw new Error("GA_MEASUREMENT_ID must be a GA4 measurement ID such as G-XXXXXXXXXX");
}

await mkdir(join(output, "assets"), { recursive: true });
await writeFile(join(output, "index.html"), renderPage(content, { analyticsId }), "utf8");
await writeFile(join(output, "styles.css"), await readFile(join(root, "src/styles.css"), "utf8"), "utf8");
await copyFile(join(root, "src/analytics.js"), join(output, "analytics.js"));
for (const asset of [
  "yunseo-portrait.webp",
  "pneumatic-haptic-glove-chi2026.pdf",
  "gaze-conditioned-grasp-ksc2025.pdf",
  "crossgaussian-uist-adjunct-2025.pdf",
]) {
  await copyFile(join(root, "src/assets", asset), join(output, "assets", asset));
}
console.log(`Built ${join(output, "index.html")}`);
