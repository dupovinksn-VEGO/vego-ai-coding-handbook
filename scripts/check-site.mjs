import { readFile } from "node:fs/promises";

const checks = [
  ["web/index.html", ["VEGO AI Coding 寶典", "Sandbox Review", "English summary", "審核駕駛艙", "chapterReader", "智庫工具"]],
  ["web/index.html", ["AI Coding 文章搜集區", "articleForm", "skillDraftPreview"]],
  ["web/index.html", ["sourceForm", "sourceDraftPreview", "downloadSourceDraft"]],
  ["web/styles.css", ["@media (max-width: 920px)", "grid-template-columns", "border-radius: 8px", "queue-grid", "collector-layout", "chapter-reader"]],
  ["web/data.js", ["window.VEGO_DATA", "handbook", "skills", "articles", "sources", "sandboxSkills", "\"html\"", "logistics-exception-management", "external-skill-converter", "智庫工具與外部電子書"]],
  ["web/app.js", ["externalSkills", "const reviewQueue", "ARTICLE_STORAGE_KEY", "SOURCE_STORAGE_KEY", "createSkillDraft", "createSourceDraft", "openChapter", "navigateChapter", "superpowers-zh"]]
];

let failed = false;

for (const [file, needles] of checks) {
  const text = await readFile(file, "utf8");
  for (const needle of needles) {
    if (!text.includes(needle)) {
      console.error(`Missing "${needle}" in ${file}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log("Site check passed: required content, responsive CSS, and Skill data found.");
