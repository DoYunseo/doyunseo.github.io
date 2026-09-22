import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { content } from "../src/content.mjs";
import { renderPage } from "../src/template.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");
const analyticsId = process.env.GA_MEASUREMENT_ID?.trim() || content.analyticsId || "";
const [styles, analyticsScript, footerSceneScript] = await Promise.all([
  readFile(join(root, "src/styles.css"), "utf8"),
  readFile(join(root, "src/analytics.js"), "utf8"),
  readFile(join(root, "src/footer-scene.js"), "utf8"),
]);
const assetVersion = createHash("sha256")
  .update(styles)
  .update(analyticsScript)
  .update(footerSceneScript)
  .digest("hex")
  .slice(0, 10);

if (analyticsId && !/^G-[A-Z0-9]+$/.test(analyticsId)) {
  throw new Error("GA_MEASUREMENT_ID must be a GA4 measurement ID such as G-XXXXXXXXXX");
}

await mkdir(join(output, "assets"), { recursive: true });
await writeFile(join(output, "index.html"), renderPage(content, { analyticsId, assetVersion }), "utf8");
await writeFile(join(output, "styles.css"), styles, "utf8");
await writeFile(join(output, "analytics.js"), analyticsScript, "utf8");
await writeFile(join(output, "footer-scene.js"), footerSceneScript, "utf8");
for (const asset of [
  "yunseo-portrait.webp",
  "pneumatic-haptic-glove-chi2026.pdf",
  "gaze-conditioned-grasp-ksc2025.pdf",
  "crossgaussian-uist-adjunct-2025.pdf",
]) {
  await copyFile(join(root, "src/assets", asset), join(output, "assets", asset));
}
console.log(`Built ${join(output, "index.html")}`);
