const chapters = [
  ["00", "目錄與使用方式", "如何查找知識、套用 Skill、提交外部來源與審核更新。", "How to use the handbook, Skill Vault, and review flow."],
  ["01", "一頁總覽：學習定位", "從物流經營者角度成為 AI 系統產品主。", "Position AI coding as operator-led system building."],
  ["02", "重要名詞速查表", "AI、Agent、軟體工程與物流科技名詞速查。", "Glossary for AI, agents, engineering, and logistics tech."],
  ["03", "Prompt 學習指南", "使用 Goal + Context + Constraints + Done when 降低錯誤率。", "Reusable prompt patterns for reliable coding work."],
  ["04", "Skill 設計", "把物流經驗變成 AI 可重複執行的 SOP。", "Convert operating know-how into reusable skills."],
  ["05", "系統架構與 Base Code", "先設計資料流、狀態流與驗收，再生成程式。", "Design data flow and acceptance criteria before code."],
  ["06", "AI Coding Agent 工具雷達", "建立工具比較機制，不迷信單一工具。", "Track and evaluate coding agents with repeatable criteria."],
  ["07", "物流 AI 專案優先順序", "先做小而賺錢、可驗收、能累積資料的系統。", "Prioritize useful, testable, data-building logistics systems."],
  ["08", "90 天學習與實作路線圖", "每週固定節奏，持續產出小成果。", "A practical 90-day learning and implementation roadmap."],
  ["09", "AI Coding 安全與驗收清單", "sandbox、branch、測試、PR review 與最小權限。", "Safety and acceptance checklist for AI-generated code."],
  ["10", "可複製模板", "AGENTS、PR Review、Architecture、Eval、操作卡。", "Copy-ready templates for projects and reviews."],
  ["11", "參考來源與後續追蹤", "每週追蹤官方文件、工具更新與 Skill repo。", "Weekly source tracking and update workflow."]
];

const skills = [
  ["prompt-quality-review", "VEGO", "Prompt / Coding", "檢查 Goal、Context、Constraints、Done when 是否完整。", "approved", "low", ""],
  ["pressure-test-before-done", "VEGO", "Verification", "每段 coding 後自動要求 typecheck、build、壓力測試與錯誤修復。", "approved", "low", ""],
  ["customer-friendly-ui-review", "VEGO", "Frontend", "檢查網頁是否客戶友好、手機端可用、錯誤狀態不 crash。", "approved", "low", ""],
  ["logistics-exception-management", "VEGO", "Logistics Ops", "處理延誤、拒收、地址錯誤、貨損與客服草稿。", "approved", "low", ""],
  ["architecture-review", "VEGO", "Architecture", "新項目開工前審查資料流、狀態流、API、權限、測試與風險。", "approved", "low", ""],
  ["base-code-generator", "VEGO", "Project Starter", "根據業務流程生成 base code 任務拆分與檔案結構。", "approved", "low", ""],
  ["ai-tool-comparison-eval", "VEGO", "Tool Radar", "比較 AI Coding Agent、外部 Skill、工具或模型是否值得納入寶典。", "approved", "low", ""],
  ["pr-review-logistics", "VEGO", "Code Review", "以物流流程、客戶體驗、資料安全與驗收標準審查 PR。", "approved", "low", ""],
  ["external-skill-converter", "VEGO", "Skill Ops", "把外部 Skill 轉成繁中主體、英文摘要、測試案例與安全限制。", "sandbox", "medium", ""],
  ["ljg-skills", "李繼剛", "中文創作與認知", "寫作、思考、閱讀、認知卡片與概念拆解工具箱。", "external", "medium", "https://github.com/lijigang/ljg-skills"],
  ["huashu-skills", "花叔", "內容生產", "從選題、PPT、審校、社媒轉寫到素材庫的內容工廠。", "external", "medium", "https://github.com/alchaincyf/huashu-skills"],
  ["canghe-skills", "蒼何", "發布與素材", "下載素材、生成配圖、公众号文章提取、Markdown 格式化。", "external", "medium", "https://github.com/freestylefly/canghe-skills"],
  ["kangarooking-skills", "袋鼠帝", "自動化", "起號 SOP、書稿配圖、多 Agent 圖片生成、Twitter 監控。", "external", "medium", "https://github.com/kangarooking/kangarooking-skills"],
  ["Auto-WeChat-Writing", "冷逸", "寫作工具", "本地 Web 應用，一句話生成公众号正文、標題、摘要與封面。", "external", "high", "https://github.com/lengyi2030/Auto-wechat-writing"],
  ["khazix-writer", "卡茲克", "深度寫作", "公众号長文四層自檢：事實、邏輯、AI 腔、節奏。", "external", "medium", "https://github.com/KKKKhazix/khazix-skills"],
  ["hv-analysis", "卡茲克", "深度研究", "橫縱分析法，沿時間線與競品維度做研究報告。", "external", "medium", "https://github.com/KKKKhazix/khazix-skills"],
  ["soul.skill", "廢墟里", "隱性知識", "從素材中提取人格信號與知識體系，需注意授權與隱私。", "external", "high", "https://github.com/larashero3-dotcom/soul.skill"],
  ["any2html", "半大熊貓", "設計配圖", "把文字提煉成 Tailwind CSS 靜態 HTML 信息卡片。", "external", "medium", "https://github.com/blockpanda/any2html"],
  ["info-card-designer", "向陽喬木", "設計配圖", "文字或網頁一鍵生成雜誌風 HTML 信息卡片。", "external", "medium", "https://github.com/joeseesun/qiaomu-info-card-designer"],
  ["guizang-ppt-skill", "歸藏", "PPT / 展示", "生成電子雜誌風單文件 HTML 橫向翻頁簡報。", "external", "medium", "https://github.com/op7418/guizang-ppt-skill"],
  ["impeccable", "pbakaus", "Frontend Design", "AI 設計反模式詞典，避免一眼 AI 的前端設計。", "external", "low", "https://github.com/pbakaus/impeccable"],
  ["tacit-mining", "小互", "隱性知識", "用結構化對話提取創作 DNA、品味、選題直覺。", "external", "medium", "https://github.com/xiaohuailabs/tacit-mining"],
  ["obsidian-skills", "kepano", "知識管理", "讓 AI 正確處理 Obsidian wiki links、frontmatter、Canvas。", "external", "low", "https://github.com/kepano/obsidian-skills"],
  ["csv-data-summarizer", "coffee", "資料分析", "自動識別 CSV 欄位、統計、異常值與圖表摘要。", "external", "medium", "https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill"],
  ["translate-book", "deusyu", "翻譯", "PDF、DOCX、EPUB 整本書並行翻譯與術語表一致性。", "external", "medium", "https://github.com/deusyu/translate-book"],
  ["slavingia-skills", "Sahil Lavingia", "創業", "極簡創業十件套：社群、驗證、MVP、定價、增長。", "external", "low", "https://github.com/slavingia/skills"],
  ["opc-skills", "ReScienceLab", "獨立開發", "需求挖掘、SEO/GEO、域名、Logo、Product Hunt、知識歸檔。", "external", "medium", "https://github.com/ReScienceLab/opc-skills"],
  ["mattpocock-skills", "Matt Pocock", "工程化 Coding", "需求、架構、測試、實作、review、文檔的工程流程。", "external", "low", "https://github.com/mattpocock/skills"],
  ["superpowers-zh", "jnMetaCode", "中文 AI 編程", "AI 編程超能力中文版，含中文 code review、Gitee/Coding 工作流。", "external", "medium", "https://github.com/jnMetaCode/superpowers-zh"]
].map(([name, author, category, description, status, risk, url]) => ({
  name,
  author,
  category,
  description,
  status,
  risk,
  url
}));

const reviewQueue = [
  {
    title: "20 個寶藏 Skills 文章",
    source: "沃垠AI / 2026-05-02",
    stage: "已抽取",
    risk: "medium",
    action: "下一步：逐 repo 讀取 README、license、SKILL.md，生成安全掃描報告。",
    count: "20 skills"
  },
  {
    title: "VEGO 自建壓力測試 Skill",
    source: "Internal",
    stage: "可批准",
    risk: "low",
    action: "下一步：套用到所有新 project 的完成前驗收流程。",
    count: "1 skill"
  },
  {
    title: "外部 Skill 轉換器",
    source: "Internal Sandbox",
    stage: "待測試",
    risk: "medium",
    action: "下一步：用 3 個 GitHub Skill repo 做轉換測試。",
    count: "workflow"
  },
  {
    title: "每週自動更新流程",
    source: "Automation SOP",
    stage: "待接 GitHub Actions",
    risk: "medium",
    action: "下一步：建立 schedule workflow，但只生成 preview，不自動合併。",
    count: "weekly"
  },
  {
    title: "Netlify Preview 發布",
    source: "netlify.toml",
    stage: "已準備",
    risk: "low",
    action: "下一步：你建立 GitHub repo 後連接 Netlify。",
    count: "deploy"
  },
  {
    title: "正式寶典升級規則",
    source: "Sandbox Review",
    stage: "已建立",
    risk: "low",
    action: "下一步：每次批准時更新 approved-skills.yaml 與 CHANGELOG。",
    count: "policy"
  }
];

const ARTICLE_STORAGE_KEY = "vegoAiCodingArticles";
let currentDraft = "";

const statusLabel = {
  approved: "正式可用",
  sandbox: "Sandbox",
  external: "外部待轉換"
};

const riskLabel = {
  low: "低風險",
  medium: "中風險",
  high: "高風險"
};

function renderChapters() {
  const grid = document.querySelector("#handbookGrid");
  grid.innerHTML = chapters
    .map(
      ([index, title, zh, en]) => `
        <article class="chapter-card">
          <span class="chapter-index">${index}</span>
          <h3>${title}</h3>
          <p>${zh}</p>
          <p class="summary">${en}</p>
        </article>
      `
    )
    .join("");
}

function renderCategoryOptions() {
  const select = document.querySelector("#categoryFilter");
  const categories = [...new Set(skills.map((skill) => skill.category))].sort((a, b) =>
    a.localeCompare(b, "zh-Hant")
  );
  select.insertAdjacentHTML(
    "beforeend",
    categories.map((category) => `<option value="${category}">${category}</option>`).join("")
  );
}

function renderSkills() {
  const query = document.querySelector("#skillSearch").value.trim().toLowerCase();
  const category = document.querySelector("#categoryFilter").value;
  const status = document.querySelector("#statusFilter").value;
  const grid = document.querySelector("#skillGrid");

  const visible = skills.filter((skill) => {
    const haystack = `${skill.name} ${skill.author} ${skill.category} ${skill.description}`.toLowerCase();
    return (
      (!query || haystack.includes(query)) &&
      (category === "all" || skill.category === category) &&
      (status === "all" || skill.status === status)
    );
  });

  grid.innerHTML =
    visible
      .map(
        (skill) => `
          <article class="skill-card">
            <span class="tag">${skill.category}</span>
            <span class="status ${skill.status}">${statusLabel[skill.status]}</span>
            <span class="risk ${skill.risk}">${riskLabel[skill.risk]}</span>
            <h3>${skill.name}</h3>
            <p><strong>${skill.author}</strong> · ${skill.description}</p>
            ${skill.url ? `<a href="${skill.url}" target="_blank" rel="noreferrer">查看來源</a>` : ""}
          </article>
        `
      )
      .join("") || `<p>沒有符合條件的 Skill。</p>`;
}

function renderReviewQueue() {
  const grid = document.querySelector("#reviewQueue");
  grid.innerHTML = reviewQueue
    .map(
      (item) => `
        <article class="queue-card">
          <div class="queue-meta">
            <span class="tag">${item.stage}</span>
            <span class="risk ${item.risk}">${riskLabel[item.risk]}</span>
            <span class="status">${item.count}</span>
          </div>
          <h4>${item.title}</h4>
          <p><strong>${item.source}</strong></p>
          <p>${item.action}</p>
        </article>
      `
    )
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadArticles() {
  try {
    return JSON.parse(localStorage.getItem(ARTICLE_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveArticles(articles) {
  localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(articles));
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
  return [...new Set(matches.map((item) => item.trim()))].slice(0, 12);
}

function extractSkillCandidates(text) {
  const candidates = new Set();
  const codeMatches = text.match(/[a-zA-Z0-9_.-]+(?:-skill|-skills|\.skill)/g) || [];
  codeMatches.forEach((item) => candidates.add(item));

  const npxMatches = text.match(/--skill\s+([A-Za-z0-9_.-]+)/g) || [];
  npxMatches.forEach((item) => candidates.add(item.replace("--skill", "").trim()));

  const namedLines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d{1,2}[.、]\s?/.test(line))
    .map((line) => line.replace(/^\d{1,2}[.、]\s?/, "").split(/[—\-：:]/)[0].trim())
    .filter((line) => line.length >= 3 && line.length <= 80);
  namedLines.forEach((item) => candidates.add(item));

  return [...candidates].slice(0, 24);
}

function analyzeArticle(article) {
  const githubUrls = extractGithubUrls(article.body);
  const installCommands = extractInstallCommands(article.body);
  const skillCandidates = extractSkillCandidates(article.body);
  const risk = installCommands.length > 0 ? "medium" : githubUrls.length > 0 ? "medium" : "low";
  return { githubUrls, installCommands, skillCandidates, risk };
}

function createSkillDraft(article, analysis) {
  const skillName = `article-${slugify(article.title)}`;
  const candidates = analysis.skillCandidates.length
    ? analysis.skillCandidates.map((item) => `- ${item}`).join("\n")
    : "- 尚未抽取到明確 Skill 名稱，需人工閱讀後補充。";
  const repos = analysis.githubUrls.length
    ? analysis.githubUrls.map((item) => `- ${item}`).join("\n")
    : "- 尚未抽取到 GitHub repo。";
  const commands = analysis.installCommands.length
    ? analysis.installCommands.map((item) => `- \`${item}\``).join("\n")
    : "- 未看到安裝命令。";

  return `---\nname: ${skillName}\ndescription: 從文章「${article.title}」抽取的 AI Coding Skill 線索，先放入 VEGO Sandbox Review。\nstatus: sandbox\nsource: ${article.source || "user-submitted article"}\nrisk: ${analysis.risk}\n---\n\n# ${article.title}\n\n## 來源\n\n${article.source || "使用者手動提交"}\n\n## Skill 候選\n\n${candidates}\n\n## GitHub 來源\n\n${repos}\n\n## 安裝命令線索\n\n${commands}\n\n## VEGO 轉換建議\n\n1. 先只讀檢查 README、SKILL.md、license、package metadata。\n2. 不自動執行文章或 repo 裡的任何 shell command。\n3. 把適合 VEGO 的流程改寫成繁中主體、英文摘要、輸入、輸出、測試案例與安全限制。\n4. 通過人工批准後才移入正式 Skill Vault。\n\n## 安全審核清單\n\n- [ ] 是否需要 token、API key、登入狀態？\n- [ ] 是否會讀取或上傳本地文件？\n- [ ] 是否會刪除、覆蓋或批量修改資料？\n- [ ] 是否包含外部腳本或 npm package？\n- [ ] license 是否允許典藏與改寫？\n\n## English Summary\n\nUser-submitted article converted into a sandbox review draft for possible VEGO skill creation.\n`;
}

function renderArticleAnalysis(article, analysis) {
  const box = document.querySelector("#articleAnalysis");
  box.innerHTML = `
    <p><strong>${escapeHtml(article.title)}</strong></p>
    <p>風險初判：<span class="risk ${analysis.risk}">${riskLabel[analysis.risk]}</span></p>
    <p>GitHub 來源：${analysis.githubUrls.length} 個；Skill 候選：${analysis.skillCandidates.length} 個；安裝命令：${analysis.installCommands.length} 條。</p>
    <ul>
      ${analysis.skillCandidates.slice(0, 8).map((item) => `<li>${escapeHtml(item)}</li>`).join("") || "<li>尚未抽取到 Skill 候選。</li>"}
    </ul>
  `;
}

function renderArticleLibrary() {
  const grid = document.querySelector("#articleLibrary");
  const articles = loadArticles();
  if (!articles.length) {
    grid.innerHTML = `<article class="article-card"><h4>尚未收藏文章</h4><p>貼上文章或上傳 .txt/.md 後，這裡會出現閱讀與 Skill 轉換隊列。</p></article>`;
    return;
  }

  grid.innerHTML = articles
    .map((article) => {
      const analysis = analyzeArticle(article);
      return `
        <article class="article-card">
          <div>
            <span class="tag">${escapeHtml(article.status)}</span>
            <span class="risk ${analysis.risk}">${riskLabel[analysis.risk]}</span>
            <span class="status">${analysis.skillCandidates.length} candidates</span>
          </div>
          <h4>${escapeHtml(article.title)}</h4>
          <p>${escapeHtml(article.source || "未填來源")}</p>
          <p>${escapeHtml(article.body.slice(0, 130))}${article.body.length > 130 ? "..." : ""}</p>
          <div class="article-actions">
            <button class="button" type="button" data-article-draft="${article.id}">生成草稿</button>
            <button class="button" type="button" data-article-delete="${article.id}">移除</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function setDraft(article) {
  const analysis = analyzeArticle(article);
  currentDraft = createSkillDraft(article, analysis);
  document.querySelector("#skillDraftPreview").textContent = currentDraft;
  document.querySelector("#downloadDraft").disabled = false;
  renderArticleAnalysis(article, analysis);
}

function downloadDraft() {
  if (!currentDraft) return;
  const blob = new Blob([currentDraft], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(document.querySelector("#articleTitle").value || "sandbox-skill-draft")}.md`;
  link.click();
  URL.revokeObjectURL(url);
}

function clearArticleForm() {
  document.querySelector("#articleTitle").value = "";
  document.querySelector("#articleSource").value = "";
  document.querySelector("#articleBody").value = "";
  document.querySelector("#articleFile").value = "";
}

async function handleArticleFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  document.querySelector("#articleBody").value = text;
  if (!document.querySelector("#articleTitle").value) {
    document.querySelector("#articleTitle").value = file.name.replace(/\.(txt|md|markdown)$/i, "");
  }
}

function handleArticleSubmit(event) {
  event.preventDefault();
  const title = document.querySelector("#articleTitle").value.trim();
  const source = document.querySelector("#articleSource").value.trim();
  const body = document.querySelector("#articleBody").value.trim();
  if (!body) {
    document.querySelector("#articleAnalysis").innerHTML = `<p>請先貼上文章內容或上傳 .txt/.md 檔案。</p>`;
    return;
  }

  const article = {
    id: `article-${Date.now()}`,
    title: title || body.split(/\r?\n/).find(Boolean)?.slice(0, 60) || "未命名文章",
    source,
    body,
    status: "sandbox",
    createdAt: new Date().toISOString()
  };

  const articles = [article, ...loadArticles()].slice(0, 50);
  saveArticles(articles);
  setDraft(article);
  renderArticleLibrary();
}

renderChapters();
renderCategoryOptions();
renderSkills();
renderReviewQueue();
renderArticleLibrary();

document.querySelector("#skillSearch").addEventListener("input", renderSkills);
document.querySelector("#categoryFilter").addEventListener("change", renderSkills);
document.querySelector("#statusFilter").addEventListener("change", renderSkills);
document.querySelector("#articleForm").addEventListener("submit", handleArticleSubmit);
document.querySelector("#articleFile").addEventListener("change", handleArticleFile);
document.querySelector("#clearArticleForm").addEventListener("click", clearArticleForm);
document.querySelector("#downloadDraft").addEventListener("click", downloadDraft);
document.querySelector("#articleLibrary").addEventListener("click", (event) => {
  const draftId = event.target.getAttribute("data-article-draft");
  const deleteId = event.target.getAttribute("data-article-delete");
  if (draftId) {
    const article = loadArticles().find((item) => item.id === draftId);
    if (article) setDraft(article);
  }
  if (deleteId) {
    saveArticles(loadArticles().filter((item) => item.id !== deleteId));
    renderArticleLibrary();
  }
});
