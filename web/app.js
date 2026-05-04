const ARTICLE_STORAGE_KEY = "vegoAiCodingArticles";
const SOURCE_STORAGE_KEY = "vegoIntelligenceSources";
let currentDraft = "";
let currentSourceDraft = "";
let currentChapterIndex = "";
let activeUtterance = null;

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
  const chapters = window.VEGO_DATA?.handbook || [];
  const chapter = chapters.find((item) => item.index === index);
  if (!chapter) return;
  stopSpeech(false);
  currentChapterIndex = index;
  const position = chapters.findIndex((item) => item.index === index) + 1;
  document.querySelector("#chapterReaderTitle").textContent = `${chapter.index} ${chapter.title}`;
  document.querySelector("#chapterReaderProgress").textContent = `第 ${position} / ${chapters.length} 章 · 電子書閱讀模式`;
  document.querySelector("#chapterReaderBody").innerHTML = chapter.html;
  document.querySelector("#chapterReader").hidden = false;
  document.querySelector("#chapterReader").scrollIntoView({ behavior: "smooth", block: "start" });
}

function navigateChapter(direction) {
  const chapters = window.VEGO_DATA?.handbook || [];
  const current = chapters.findIndex((item) => item.index === currentChapterIndex);
  if (current === -1) return;
  const next = current + direction;
  if (next < 0 || next >= chapters.length) return;
  openChapter(chapters[next].index);
}

function speechSupported() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function setVoiceStatus(message) {
  const status = document.querySelector("#voiceStatus");
  if (status) status.textContent = message;
}

function chapterSpeechText() {
  const title = document.querySelector("#chapterReaderTitle")?.textContent || "";
  const body = document.querySelector("#chapterReaderBody")?.innerText || "";
  return `${title}\n\n${body}`.replace(/\s+/g, " ").trim();
}

function preferredVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return (
    voices.find((voice) => /zh-TW|zh-HK|zh/i.test(voice.lang)) ||
    voices.find((voice) => /en/i.test(voice.lang)) ||
    voices[0] ||
    null
  );
}

function readCurrentChapter() {
  if (!speechSupported()) {
    setVoiceStatus("這個瀏覽器暫時不支援語音朗讀，建議改用 Chrome、Edge 或手機瀏覽器。");
    return;
  }
  const text = chapterSpeechText();
  if (!text) {
    setVoiceStatus("請先打開一個寶典章節，再開始朗讀。");
    return;
  }
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    setVoiceStatus("已繼續朗讀。");
    return;
  }
  window.speechSynthesis.cancel();
  activeUtterance = new SpeechSynthesisUtterance(text.slice(0, 18000));
  activeUtterance.lang = "zh-TW";
  activeUtterance.rate = Number(document.querySelector("#speechRate")?.value || 1);
  activeUtterance.pitch = 1;
  const voice = preferredVoice();
  if (voice) activeUtterance.voice = voice;
  activeUtterance.onstart = () => setVoiceStatus("正在朗讀本章。");
  activeUtterance.onend = () => setVoiceStatus("本章朗讀完成。");
  activeUtterance.onerror = () => setVoiceStatus("朗讀中斷，請再按一次朗讀。");
  window.speechSynthesis.speak(activeUtterance);
}

function pauseSpeech() {
  if (!speechSupported()) return;
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    setVoiceStatus("已暫停朗讀。");
  }
}

function stopSpeech(showStatus = true) {
  if (!speechSupported()) return;
  window.speechSynthesis.cancel();
  activeUtterance = null;
  if (showStatus) setVoiceStatus("已停止朗讀。");
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

function loadSources() {
  try {
    return JSON.parse(localStorage.getItem(SOURCE_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function loadRepoSources() {
  return (window.VEGO_DATA?.sources || []).map((source) => ({
    id: source.id,
    title: source.title,
    type: source.type,
    url: source.url,
    goal: source.body,
    readonly: true
  }));
}

function saveSources(sources) {
  localStorage.setItem(SOURCE_STORAGE_KEY, JSON.stringify(sources));
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

function createSourceDraft(source) {
  const risk =
    source.type === "ebook"
      ? "medium"
      : source.type === "system"
        ? "medium"
        : source.type === "github"
          ? "medium"
          : "low";
  return `---\ntitle: ${source.title}\ntype: ${source.type}\nurl: ${source.url || "not-provided"}\nstatus: sandbox\nrisk: ${risk}\n---\n\n# ${source.title}\n\n## 來源類型\n\n${source.type}\n\n## URL / 位置\n\n${source.url || "未填"}\n\n## VEGO 吸收目標\n\n${source.goal || "待補充"}\n\n## 可吸收內容\n\n- 可複用流程\n- UI / API / debug pattern\n- prompt 或 Skill 線索\n- 安全與驗收規則\n- 可轉成 VEGO 寶典的摘要與方法論\n\n## 邊界\n\n- 外部電子書與訂閱內容只保存連結、摘要、短摘錄與自己的方法論改寫。\n- 不繞過 DRM、paywall 或授權限制。\n- 不自動執行外部 repo 或系統中的命令。\n- 對你自己的系統先做 read-only 吸收，不修改原系統。\n\n## 下一步\n\n1. 建立來源摘要。\n2. 抽取可轉 Skill 的 SOP。\n3. 生成 Sandbox Skill 草稿。\n4. 人工批准後進正式 Skill Vault。\n\n## English Summary\n\nSandbox source card for turning an external source or VEGO-owned system into reviewed handbook knowledge and reusable skills.\n`;
}

function setSourceDraft(source) {
  currentSourceDraft = createSourceDraft(source);
  document.querySelector("#sourceDraftPreview").textContent = currentSourceDraft;
  document.querySelector("#downloadSourceDraft").disabled = false;
}

function renderSourceLibrary() {
  const grid = document.querySelector("#sourceLibrary");
  const sources = [...loadSources(), ...loadRepoSources()];
  if (!sources.length) {
    grid.innerHTML = `<article class="article-card"><h4>尚未建立來源</h4><p>登記電子書、訂閱文章、GitHub repo 或你自己的系統 URL 後，這裡會形成智庫吸收隊列。</p></article>`;
    return;
  }
  grid.innerHTML = sources
    .map(
      (source) => `
        <article class="article-card">
          <div>
            <span class="tag">${escapeHtml(source.type)}</span>
            <span class="status">sandbox</span>
          </div>
          <h4>${escapeHtml(source.title)}</h4>
          <p>${escapeHtml(source.url || "未填 URL")}</p>
          <p>${escapeHtml((source.goal || "").slice(0, 140))}${(source.goal || "").length > 140 ? "..." : ""}</p>
          <div class="article-actions">
            <button class="button" type="button" data-source-draft="${source.id}">生成來源卡</button>
            ${source.readonly ? "" : `<button class="button" type="button" data-source-delete="${source.id}">移除</button>`}
          </div>
        </article>
      `
    )
    .join("");
}

function clearSourceForm() {
  document.querySelector("#sourceTitle").value = "";
  document.querySelector("#sourceType").value = "system";
  document.querySelector("#sourceUrl").value = "";
  document.querySelector("#sourceGoal").value = "";
}

function handleSourceSubmit(event) {
  event.preventDefault();
  const title = document.querySelector("#sourceTitle").value.trim();
  const type = document.querySelector("#sourceType").value;
  const url = document.querySelector("#sourceUrl").value.trim();
  const goal = document.querySelector("#sourceGoal").value.trim();
  if (!title && !url) {
    document.querySelector("#sourceDraftPreview").textContent = "請至少填寫來源名稱或 URL。";
    return;
  }
  const source = {
    id: `source-${Date.now()}`,
    title: title || url,
    type,
    url,
    goal,
    createdAt: new Date().toISOString()
  };
  saveSources([source, ...loadSources()].slice(0, 50));
  setSourceDraft(source);
  renderSourceLibrary();
}

function downloadSourceDraft() {
  if (!currentSourceDraft) return;
  const blob = new Blob([currentSourceDraft], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(document.querySelector("#sourceTitle").value || "intelligence-source")}.md`;
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
renderSourceLibrary();

document.querySelector("#handbookGrid").addEventListener("click", (event) => {
  const index = event.target.getAttribute("data-chapter-index");
  if (index) openChapter(index);
});
document.querySelector("#closeChapterReader").addEventListener("click", () => {
  stopSpeech(false);
  document.querySelector("#chapterReader").hidden = true;
});
document.querySelector("#readChapter").addEventListener("click", readCurrentChapter);
document.querySelector("#pauseSpeech").addEventListener("click", pauseSpeech);
document.querySelector("#stopSpeech").addEventListener("click", () => stopSpeech(true));
document.querySelector("#speechRate").addEventListener("change", () => {
  if (speechSupported() && window.speechSynthesis.speaking) {
    readCurrentChapter();
  }
});
document.querySelector("#prevChapter").addEventListener("click", () => navigateChapter(-1));
document.querySelector("#nextChapter").addEventListener("click", () => navigateChapter(1));
document.querySelector("#skillSearch").addEventListener("input", renderSkills);
document.querySelector("#categoryFilter").addEventListener("change", renderSkills);
document.querySelector("#statusFilter").addEventListener("change", renderSkills);
document.querySelector("#articleForm").addEventListener("submit", handleArticleSubmit);
document.querySelector("#articleFile").addEventListener("change", handleArticleFile);
document.querySelector("#clearArticleForm").addEventListener("click", clearArticleForm);
document.querySelector("#downloadDraft").addEventListener("click", downloadDraft);
document.querySelector("#sourceForm").addEventListener("submit", handleSourceSubmit);
document.querySelector("#clearSourceForm").addEventListener("click", clearSourceForm);
document.querySelector("#downloadSourceDraft").addEventListener("click", downloadSourceDraft);
document.querySelector("#sourceLibrary").addEventListener("click", (event) => {
  const draftId = event.target.getAttribute("data-source-draft");
  const deleteId = event.target.getAttribute("data-source-delete");
  if (draftId) {
    const source = [...loadSources(), ...loadRepoSources()].find((item) => item.id === draftId);
    if (source) setSourceDraft(source);
  }
  if (deleteId) {
    saveSources(loadSources().filter((item) => item.id !== deleteId));
    renderSourceLibrary();
  }
});
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
