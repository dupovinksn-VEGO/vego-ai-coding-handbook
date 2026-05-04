const ARTICLE_STORAGE_KEY = "vegoAiCodingArticles";
let currentDraft = "";

const externalSkills = [
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

const generatedSkills = (window.VEGO_DATA?.skills || []).map((skill) => ({
  name: skill.name,
  author: skill.author,
  category: skill.category,
  description: skill.description,
  status: skill.status,
  risk: skill.risk,
  url: ""
}));

const skillByName = new Map();
[...generatedSkills, ...externalSkills].forEach((skill) => skillByName.set(skill.name, skill));
const siteSkills = [...skillByName.values()];

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
  }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderChapters() {
  const chapters = window.VEGO_DATA?.handbook || [];
  const grid = document.querySelector("#handbookGrid");
  grid.innerHTML = chapters
    .map(
      (chapter) => `
        <article class="chapter-card">
          <span class="chapter-index">${chapter.index}</span>
          <h3>${chapter.title}</h3>
          <p>${chapter.summary}</p>
          <p class="summary">${chapter.englishSummary || ""}</p>
          <button class="button" type="button" data-chapter-index="${chapter.index}">閱讀章節</button>
        </article>
      `
    )
    .join("");
}

function openChapter(index) {
  const chapter = (window.VEGO_DATA?.handbook || []).find((item) => item.index === index);
  if (!chapter) return;
  document.querySelector("#chapterReaderTitle").textContent = `${chapter.index} ${chapter.title}`;
  document.querySelector("#chapterReaderBody").innerHTML = chapter.html;
  document.querySelector("#chapterReader").hidden = false;
  document.querySelector("#chapterReader").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCategoryOptions() {
  const select = document.querySelector("#categoryFilter");
  const categories = [...new Set(siteSkills.map((skill) => skill.category))].sort((a, b) =>
    a.localeCompare(b, "zh-Hant")
  );
  select.insertAdjacentHTML(
    "beforeend",
    categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")
  );
}

function renderSkills() {
  const query = document.querySelector("#skillSearch").value.trim().toLowerCase();
  const category = document.querySelector("#categoryFilter").value;
  const status = document.querySelector("#statusFilter").value;
  const grid = document.querySelector("#skillGrid");
  const visible = siteSkills.filter((skill) => {
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
            <span class="tag">${escapeHtml(skill.category)}</span>
            <span class="status ${skill.status}">${statusLabel[skill.status]}</span>
            <span class="risk ${skill.risk}">${riskLabel[skill.risk]}</span>
            <h3>${escapeHtml(skill.name)}</h3>
            <p><strong>${escapeHtml(skill.author)}</strong> · ${escapeHtml(skill.description)}</p>
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

function loadRepoArticles() {
  return (window.VEGO_DATA?.articles || []).map((article) => ({
    id: article.id,
    title: article.title,
    source: article.source,
    body: article.body,
    status: article.status || "repo",
    readonly: true
  }));
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
  (text.match(/[a-zA-Z0-9_.-]+(?:-skill|-skills|\.skill)/g) || []).forEach((item) => candidates.add(item));
  (text.match(/--skill\s+([A-Za-z0-9_.-]+)/g) || []).forEach((item) =>
    candidates.add(item.replace("--skill", "").trim())
  );
  text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d{1,2}[.、]\s?/.test(line))
    .map((line) => line.replace(/^\d{1,2}[.、]\s?/, "").split(/[—\-：:]/)[0].trim())
    .filter((line) => line.length >= 3 && line.length <= 80)
    .forEach((item) => candidates.add(item));
  return [...candidates].slice(0, 24);
}

function analyzeArticle(article) {
  const githubUrls = extractGithubUrls(article.body);
  const installCommands = extractInstallCommands(article.body);
  const skillCandidates = extractSkillCandidates(article.body);
  const risk = installCommands.length > 0 || githubUrls.length > 0 ? "medium" : "low";
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

  return `---\nname: ${skillName}\ndescription: 從文章「${article.title}」抽取的 AI Coding Skill 線索，先放入 VEGO Sandbox Review。\nstatus: sandbox\nsource: ${article.source || "user-submitted article"}\nrisk: ${analysis.risk}\n---\n\n# ${article.title}\n\n## Skill 候選\n\n${candidates}\n\n## GitHub 來源\n\n${repos}\n\n## 安裝命令線索\n\n${commands}\n\n## VEGO 轉換建議\n\n1. 只讀檢查 README、SKILL.md、license、package metadata。\n2. 不自動執行文章或 repo 裡的任何 shell command。\n3. 改寫成繁中主體、英文摘要、輸入、輸出、測試案例與安全限制。\n4. 通過人工批准後才移入正式 Skill Vault。\n\n## English Summary\n\nUser-submitted article converted into a sandbox review draft for possible VEGO skill creation.\n`;
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

function setDraft(article) {
  const analysis = analyzeArticle(article);
  currentDraft = createSkillDraft(article, analysis);
  document.querySelector("#skillDraftPreview").textContent = currentDraft;
  document.querySelector("#downloadDraft").disabled = false;
  renderArticleAnalysis(article, analysis);
}

function renderArticleLibrary() {
  const grid = document.querySelector("#articleLibrary");
  const articles = [...loadArticles(), ...loadRepoArticles()];
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
            ${article.readonly ? "" : `<button class="button" type="button" data-article-delete="${article.id}">移除</button>`}
          </div>
        </article>
      `;
    })
    .join("");
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
  saveArticles([article, ...loadArticles()].slice(0, 50));
  setDraft(article);
  renderArticleLibrary();
}

renderChapters();
renderCategoryOptions();
renderSkills();
renderReviewQueue();
renderArticleLibrary();

document.querySelector("#handbookGrid").addEventListener("click", (event) => {
  const index = event.target.getAttribute("data-chapter-index");
  if (index) openChapter(index);
});
document.querySelector("#closeChapterReader").addEventListener("click", () => {
  document.querySelector("#chapterReader").hidden = true;
});
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
    const article = [...loadArticles(), ...loadRepoArticles()].find((item) => item.id === draftId);
    if (article) setDraft(article);
  }
  if (deleteId) {
    saveArticles(loadArticles().filter((item) => item.id !== deleteId));
    renderArticleLibrary();
  }
});
