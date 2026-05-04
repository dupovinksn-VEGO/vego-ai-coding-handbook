import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (item.startsWith("--")) {
      args[item.slice(2)] = argv[index + 1] && !argv[index + 1].startsWith("--") ? argv[index + 1] : "true";
      if (args[item.slice(2)] !== "true") index += 1;
    }
  }
  return args;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(value) {
  return String(value || "article")
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72) || "article";
}

function extractGithubUrls(text) {
  const matches = text.match(/https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/g) || [];
  return [...new Set(matches)];
}

function extractInstallCommands(text) {
  const matches = text.match(/npx\s+[^\n\r]+/g) || [];
  return [...new Set(matches.map((item) => item.trim()))].slice(0, 20);
}

function extractSkillCandidates(text) {
  const candidates = new Set();
  const codeMatches = text.match(/[a-zA-Z0-9_.-]+(?:-skill|-skills|\.skill)/g) || [];
  codeMatches.forEach((item) => candidates.add(item));

  const npxMatches = text.match(/--skill\s+([A-Za-z0-9_.-]+)/g) || [];
  npxMatches.forEach((item) => candidates.add(item.replace("--skill", "").trim()));

  const numberedLines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d{1,2}[.、]\s?/.test(line))
    .map((line) => line.replace(/^\d{1,2}[.、]\s?/, "").split(/[—\-：:]/)[0].trim())
    .filter((line) => line.length >= 3 && line.length <= 80);
  numberedLines.forEach((item) => candidates.add(item));

  return [...candidates].slice(0, 40);
}

function yamlList(items, fallback) {
  if (!items.length) return `- ${fallback}`;
  return items.map((item) => `- ${item}`).join("\n");
}

function createArticleMarkdown({ title, source, body, githubUrls, installCommands, skillCandidates }) {
  return `---\ntitle: "${title.replaceAll('"', '\\"')}"\nsource: "${source.replaceAll('"', '\\"')}"\nstatus: sandbox\ncollected_at: ${new Date().toISOString()}\ngithub_sources: ${githubUrls.length}\nskill_candidates: ${skillCandidates.length}\n---\n\n# ${title}\n\n## 來源\n\n${source || "未填來源"}\n\n## 系統抽取摘要\n\n- GitHub 來源數：${githubUrls.length}\n- 安裝命令數：${installCommands.length}\n- Skill 候選數：${skillCandidates.length}\n\n## GitHub 來源\n\n${yamlList(githubUrls, "尚未抽取到 GitHub repo。")}\n\n## Skill 候選\n\n${yamlList(skillCandidates, "尚未抽取到明確 Skill 名稱。")}\n\n## 安裝命令線索\n\n${installCommands.length ? installCommands.map((item) => `- \`${item}\``).join("\n") : "- 未看到安裝命令。"}\n\n## 原文\n\n${body}\n`;
}

function createSkillDraft({ skillName, title, source, githubUrls, installCommands, skillCandidates }) {
  return `---\nname: ${skillName}\ndescription: 從文章「${title}」抽取的 AI Coding Skill 線索，先放入 VEGO Sandbox Review。\nstatus: sandbox\nsource: ${source || "user-submitted article"}\nrisk: ${installCommands.length ? "medium" : "low"}\n---\n\n# ${title}\n\n## Skill 候選\n\n${yamlList(skillCandidates, "尚未抽取到明確 Skill 名稱，需人工閱讀後補充。")}\n\n## GitHub 來源\n\n${yamlList(githubUrls, "尚未抽取到 GitHub repo。")}\n\n## 安裝命令線索\n\n${installCommands.length ? installCommands.map((item) => `- \`${item}\``).join("\n") : "- 未看到安裝命令。"}\n\n## VEGO 轉換建議\n\n1. 只讀檢查 README、SKILL.md、license、package metadata。\n2. 不自動執行文章或 repo 裡的任何 shell command。\n3. 改寫成繁中主體、英文摘要、輸入、輸出、測試案例與安全限制。\n4. 通過人工批准後才移入正式 Skill Vault。\n\n## 安全審核清單\n\n- [ ] 是否需要 token、API key、登入狀態？\n- [ ] 是否會讀取或上傳本地文件？\n- [ ] 是否會刪除、覆蓋或批量修改資料？\n- [ ] 是否包含外部腳本或 npm package？\n- [ ] license 是否允許典藏與改寫？\n\n## English Summary\n\nUser-submitted article converted into a sandbox review draft for possible VEGO skill creation.\n`;
}

const args = parseArgs(process.argv.slice(2));

if (!args.file) {
  console.error('Usage: npm run import:article -- --file "article.md" --title "Title" --source "URL or source"');
  process.exit(1);
}

const fileText = await readFile(args.file, "utf8");
const inferredTitle = basename(args.file, extname(args.file));
const title = args.title || inferredTitle;
const source = args.source || "";
const slug = `${today()}-${slugify(title)}`;
const skillName = `article-${slugify(title)}`;
const githubUrls = extractGithubUrls(fileText);
const installCommands = extractInstallCommands(fileText);
const skillCandidates = extractSkillCandidates(fileText);

await mkdir("content/articles", { recursive: true });
await mkdir(join("content/sandbox-skills", slug), { recursive: true });

const articlePath = join("content/articles", `${slug}.md`);
const skillPath = join("content/sandbox-skills", slug, "SKILL.md");

await writeFile(
  articlePath,
  createArticleMarkdown({ title, source, body: fileText, githubUrls, installCommands, skillCandidates }),
  "utf8"
);
await writeFile(
  skillPath,
  createSkillDraft({ skillName, title, source, githubUrls, installCommands, skillCandidates }),
  "utf8"
);

console.log(`Article saved: ${articlePath}`);
console.log(`Sandbox skill draft saved: ${skillPath}`);
console.log(`Extracted ${githubUrls.length} GitHub sources, ${installCommands.length} install commands, ${skillCandidates.length} skill candidates.`);
