import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (item.startsWith("--")) {
      const key = item.slice(2);
      args[key] = argv[index + 1] && !argv[index + 1].startsWith("--") ? argv[index + 1] : "true";
      if (args[key] !== "true") index += 1;
    }
  }
  return args;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(value) {
  return String(value || "source")
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72) || "source";
}

const args = parseArgs(process.argv.slice(2));
const title = args.title || args.url || "";
const type = args.type || "system";
const url = args.url || "";
const goal = args.goal || "";

if (!title) {
  console.error('Usage: npm run import:source -- --title "Name" --type "system" --url "https://..." --goal "What to absorb"');
  process.exit(1);
}

const slug = `${today()}-${slugify(title)}`;
const risk = type === "system" || type === "ebook" || type === "github" ? "medium" : "low";
const markdown = `---\ntitle: "${title.replaceAll('"', '\\"')}"\ntype: ${type}\nurl: "${url.replaceAll('"', '\\"')}"\nstatus: sandbox\nrisk: ${risk}\ncreated_at: ${new Date().toISOString()}\n---\n\n# ${title}\n\n## 來源類型\n\n${type}\n\n## URL / 位置\n\n${url || "未填"}\n\n## VEGO 吸收目標\n\n${goal || "待補充"}\n\n## 可吸收內容\n\n- 可複用流程\n- UI / API / debug pattern\n- prompt 或 Skill 線索\n- 安全與驗收規則\n- 可轉成 VEGO 寶典的摘要與方法論\n\n## 邊界\n\n- 外部電子書與訂閱內容只保存連結、摘要、短摘錄與自己的方法論改寫。\n- 不繞過 DRM、paywall 或授權限制。\n- 不自動執行外部 repo 或系統中的命令。\n- 對自有系統先做 read-only 吸收，不修改原系統。\n\n## 下一步\n\n1. 建立來源摘要。\n2. 抽取可轉 Skill 的 SOP。\n3. 生成 Sandbox Skill 草稿。\n4. 人工批准後進正式 Skill Vault。\n\n## English Summary\n\nSandbox source card for turning an external source or VEGO-owned system into reviewed handbook knowledge and reusable skills.\n`;

await mkdir("content/sources", { recursive: true });
const outputPath = join("content", "sources", `${slug}.md`);
await writeFile(outputPath, markdown, "utf8");
console.log(`Source saved: ${outputPath}`);
