import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { content } from "../src/content.mjs";
import { renderPage } from "../src/template.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");

await mkdir(join(output, "assets"), { recursive: true });
await writeFile(join(output, "index.html"), renderPage(content), "utf8");
await writeFile(join(output, "styles.css"), await readFile(join(root, "src/styles.css"), "utf8"), "utf8");
await copyFile(join(root, "src/assets/yunseo-portrait.webp"), join(output, "assets/yunseo-portrait.webp"));
console.log(`Built ${join(output, "index.html")}`);
