import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

async function exists(path) {
  try {
    await readdir(path);
    return true;
  } catch {
    return false;
  }
}

async function listFiles(dir, predicate = () => true) {
  if (!(await exists(dir))) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(path, predicate)));
    } else if (predicate(path)) {
      files.push(path);
    }
  }
  return files;
}

function stripFrontmatter(text) {
  if (!text.startsWith("---")) return text;
  const end = text.indexOf("\n---", 3);
  return end === -1 ? text : text.slice(end + 4).trim();
}

function parseFrontmatter(text) {
  if (!text.startsWith("---")) return {};
  const end = text.indexOf("\n---", 3);
  if (end === -1) return {};
  const block = text.slice(3, end).trim();
  const data = {};
  let currentKey = "";
  for (const line of block.split(/\r?\n/)) {
    const listMatch = line.match(/^\s*-\s*(.*)$/);
    if (listMatch && currentKey) {
      data[currentKey] = Array.isArray(data[currentKey]) ? data[currentKey] : [];
      data[currentKey].push(listMatch[1].replace(/^"|"$/g, ""));
      continue;
    }
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    currentKey = match[1];
    const value = match[2].trim();
    data[currentKey] = value ? value.replace(/^"|"$/g, "") : [];
  }
  return data;
}

function listField(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return String(value)
    .replace(/^\[|\]$/g, "")
    .split(/[,|]/)
    .map((item) => item.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);
}

function firstHeading(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function firstParagraph(markdown) {
  const body = stripFrontmatter(markdown)
    .replace(/^# .+$/m, "")
    .split(/\r?\n\r?\n/)
    .map((item) => item.replace(/\s+/g, " ").trim())
    .find((item) => item && !item.startsWith("```") && !item.startsWith("- "));
  return body || "";
}

function englishSummary(markdown) {
  const match = markdown.match(/## English Summary\s+([\s\S]+?)(?:\n## |\n# |$)/i);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function markdownToHtml(markdown) {
  const lines = stripFrontmatter(markdown).split(/\r?\n/);
  const html = [];
  let listOpen = false;
  let codeOpen = false;
  let codeLines = [];

  const closeList = () => {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (codeOpen) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        codeOpen = false;
      } else {
        closeList();
        codeOpen = true;
      }
      continue;
    }

    if (codeOpen) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      closeList();
      continue;
    }

    if (line.startsWith("# ")) {
      closeList();
      html.push(`<h3>${inlineMarkdown(line.slice(2))}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      closeList();
      html.push(`<h4>${inlineMarkdown(line.slice(3))}</h4>`);
      continue;
    }

    if (line.startsWith("### ")) {
      closeList();
      html.push(`<h5>${inlineMarkdown(line.slice(4))}</h5>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(line.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  closeList();
  return html.join("\n");
}

function statusFromSkillPath(path) {
  if (path.includes(`${join("content", "sandbox-skills")}`)) return "sandbox";
  return "approved";
}

function riskFromText(text, status) {
  const frontmatter = parseFrontmatter(text);
  if (frontmatter.risk) return frontmatter.risk;
  if (/token|api key|shell|npm|npx|upload|delete|刪除|上傳/i.test(text)) return "medium";
  return status === "sandbox" ? "medium" : "low";
}

function slugFromPath(path) {
  return path
    .replace(/\\/g, "/")
    .split("/")
    .filter(Boolean)
    .at(-2) || path.split(/[\\/]/).pop()?.replace(/\.[^.]+$/, "") || "item";
}

async function handbookData() {
  const files = (await listFiles(join("content", "handbook"), (path) => path.endsWith(".md"))).sort();
  return Promise.all(
    files.map(async (file) => {
      const markdown = await readFile(file, "utf8");
      const base = file.split(/[\\/]/).pop()?.replace(/\.md$/, "") || "";
      const index = base.match(/^(\d+)/)?.[1] || "";
      const title = firstHeading(markdown, base.replace(/^\d+-?/, ""));
      return {
        index,
        title,
        summary: firstParagraph(markdown).slice(0, 120),
        englishSummary: englishSummary(markdown),
        html: markdownToHtml(markdown),
        path: relative(process.cwd(), file).replace(/\\/g, "/")
      };
    })
  );
}

async function skillData() {
  const files = [
    ...(await listFiles(join("content", "skills"), (path) => path.endsWith("SKILL.md"))),
    ...(await listFiles(join("content", "sandbox-skills"), (path) => path.endsWith("SKILL.md")))
  ].sort();
  return Promise.all(
    files.map(async (file) => {
      const markdown = await readFile(file, "utf8");
      const frontmatter = parseFrontmatter(markdown);
      const status = frontmatter.status || statusFromSkillPath(file);
      return {
        name: frontmatter.name || slugFromPath(file),
        author: status === "approved" ? "VEGO" : "Sandbox",
        category: status === "approved" ? "VEGO Skill" : "Sandbox Skill",
        description: frontmatter.description || firstParagraph(markdown).slice(0, 120),
        status,
        risk: riskFromText(markdown, status),
        url: "",
        path: relative(process.cwd(), file).replace(/\\/g, "/")
      };
    })
  );
}

async function articleData() {
  const files = (await listFiles(join("content", "articles"), (path) => path.endsWith(".md") && !path.endsWith("README.md"))).sort().reverse();
  return Promise.all(
    files.map(async (file) => {
      const markdown = await readFile(file, "utf8");
      const frontmatter = parseFrontmatter(markdown);
      return {
        id: file.replace(/\\/g, "/"),
        title: frontmatter.title || firstHeading(markdown, "Untitled article"),
        source: frontmatter.source || "",
        url: frontmatter.url || "",
        category: frontmatter.category || listField(frontmatter.ai_layer)[0] || "Knowledge",
        logisticsLine: listField(frontmatter.logistics_line),
        aiLayer: listField(frontmatter.ai_layer),
        vegoPriority: frontmatter.vego_priority || "D",
        status: frontmatter.status || "sandbox",
        reviewOwner: frontmatter.review_owner || "",
        language: frontmatter.language || "",
        summaryZh: frontmatter.summary_zh || "",
        summaryEn: frontmatter.summary_en || "",
        vegoUseCase: listField(frontmatter.vego_use_case),
        tags: listField(frontmatter.tags),
        riskLevel: frontmatter.risk_level || riskFromText(markdown, frontmatter.status || "sandbox"),
        body: stripFrontmatter(markdown).slice(0, 1200),
        path: relative(process.cwd(), file).replace(/\\/g, "/")
      };
    })
  );
}

async function sourceData() {
  const files = (await listFiles(join("content", "sources"), (path) => path.endsWith(".md") && !path.endsWith("README.md"))).sort().reverse();
  return Promise.all(
    files.map(async (file) => {
      const markdown = await readFile(file, "utf8");
      const frontmatter = parseFrontmatter(markdown);
      return {
        id: file.replace(/\\/g, "/"),
        title: frontmatter.title || firstHeading(markdown, "Untitled source"),
        type: frontmatter.type || "source",
        url: frontmatter.url || "",
        status: frontmatter.status || "sandbox",
        risk: frontmatter.risk || "medium",
        body: stripFrontmatter(markdown).slice(0, 1200),
        path: relative(process.cwd(), file).replace(/\\/g, "/")
      };
    })
  );
}

const data = {
  generatedAt: new Date().toISOString(),
  handbook: await handbookData(),
  skills: await skillData(),
  articles: await articleData(),
  sources: await sourceData(),
  sandboxSkills: (await skillData()).filter((skill) => skill.status === "sandbox")
};

await writeFile(
  join("web", "data.js"),
  `window.VEGO_DATA = ${JSON.stringify(data, null, 2)};\n`,
  "utf8"
);

console.log(
  `Generated web/data.js: ${data.handbook.length} handbook chapters, ${data.skills.length} skills, ${data.articles.length} articles, ${data.sources.length} sources.`
);
