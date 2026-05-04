import { access } from "node:fs/promises";

const requiredFiles = ["web/index.html", "web/styles.css", "web/app.js"];

await Promise.all(requiredFiles.map((file) => access(file)));
console.log("Build complete: static site is ready in web/.");
