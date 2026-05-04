window.VEGO_DATA = {
  "generatedAt": "2026-05-04T22:47:45.524Z",
  "handbook": [
    {
      "index": "00",
      "title": "目錄與使用方式",
      "summary": "VEGO AI Coding 寶典是一套給 VEGO 新項目、內部工具、物流系統與客戶可見頁面使用的 AI Coding 操作系統。",
      "englishSummary": "This handbook is VEGO's AI coding operating system: knowledge base, reusable skills, and sandbox review workflow.",
      "html": "<h3>目錄與使用方式</h3>\n<p>VEGO AI Coding 寶典是一套給 VEGO 新項目、內部工具、物流系統與客戶可見頁面使用的 AI Coding 操作系統。</p>\n<p>它包含三層：</p>\n<ul>\n<li>知識庫：理解 AI Coding、Prompt、Skill、Base Code、驗收與安全邊界。</li>\n<li>Skill Vault：把可重複使用的工作方法做成 <code>.md Skill</code>，方便新項目套用。</li>\n<li>Sandbox Review：外部文章、GitHub repo、Skill 寶藏先進審核區，再決定是否轉正式工具。</li>\n</ul>\n<h4>使用路線</h4>\n<ul>\n<li>新項目前，先讀第 1、3、5、9 章。</li>\n<li>寫 prompt 前，使用 <code>prompt-quality-review</code>。</li>\n<li>開始 coding 前，使用 <code>architecture-review</code> 或 <code>base-code-generator</code>。</li>\n<li>做完一段 coding 後，使用 <code>pressure-test-before-done</code>。</li>\n<li>客戶可見頁面完成後，使用 <code>customer-friendly-ui-review</code>。</li>\n<li>看到外部文章或工具時，先放入文章搜集區，再生成 Sandbox Skill 草稿。</li>\n</ul>\n<h4>升級規則</h4>\n<p>任何新知識、新 Skill、新工具都先進 Sandbox。只有通過安全審核、測試案例與 VEGO 適用性確認後，才進正式寶典。</p>\n<h4>English Summary</h4>\n<p>This handbook is VEGO&#039;s AI coding operating system: knowledge base, reusable skills, and sandbox review workflow.</p>",
      "path": "content/handbook/00-目錄與使用方式.md"
    },
    {
      "index": "01",
      "title": "一頁總覽：學習定位",
      "summary": "VEGO 的 AI Coding 學習定位不是重新走傳統工程師路線，而是把物流經營者的判斷力轉成 AI 可執行的產品規格、流程、資料模型與驗收標準。",
      "englishSummary": "The VEGO operator becomes an AI system product owner, converting logistics expertise into specs, skills, and acceptance criteria.",
      "html": "<h3>一頁總覽：學習定位</h3>\n<p>VEGO 的 AI Coding 學習定位不是重新走傳統工程師路線，而是把物流經營者的判斷力轉成 AI 可執行的產品規格、流程、資料模型與驗收標準。</p>\n<h4>你要成為的角色</h4>\n<ul>\n<li>AI 系統產品主：定義問題、流程、資料、成功標準。</li>\n<li>業務流程設計者：知道哪一步最常卡、哪個 handoff 最貴。</li>\n<li>驗收負責人：要求測試、build、頁面檢查與錯誤處理。</li>\n<li>Skill 迭代者：把一次成功的方法做成可重複套用的工具。</li>\n</ul>\n<h4>三個月內最該建立的能力</h4>\n<ul>\n<li>寫出清楚 prompt。</li>\n<li>看懂 AI 產出的架構與風險。</li>\n<li>用測試和 smoke test 驗收，不靠感覺。</li>\n<li>把重複任務沉澱成 Skill。</li>\n<li>建立外部工具和文章的 sandbox 審核流程。</li>\n</ul>\n<h4>先不要學什麼</h4>\n<ul>\n<li>不需要先背完整前端框架。</li>\n<li>不需要從零手寫所有程式。</li>\n<li>不需要追每個新 AI 工具。</li>\n<li>不要一開始就接 production database。</li>\n</ul>\n<h4>English Summary</h4>\n<p>The VEGO operator becomes an AI system product owner, converting logistics expertise into specs, skills, and acceptance criteria.</p>",
      "path": "content/handbook/01-一頁總覽-學習定位.md"
    },
    {
      "index": "02",
      "title": "重要名詞速查表",
      "summary": "## AI 與 Agent",
      "englishSummary": "A shared glossary helps operators define, review, and validate AI coding work with fewer misunderstandings.",
      "html": "<h3>重要名詞速查表</h3>\n<h4>AI 與 Agent</h4>\n<ul>\n<li>Agent：能讀上下文、規劃、執行工具、驗證結果的 AI 工作單元。</li>\n<li>Prompt：一次性工作說明。</li>\n<li>Skill：可重複使用的 SOP、規則、範例與工具調用方式。</li>\n<li>Evals：用案例測量 AI 輸出品質的測試集。</li>\n<li>Sandbox：外部內容進正式系統前的安全審核區。</li>\n</ul>\n<h4>軟體工程</h4>\n<ul>\n<li>Base Code：新項目的基礎架構與可運行骨架。</li>\n<li>Smoke Test：快速確認主要流程沒有壞掉。</li>\n<li>Typecheck：檢查型別與程式結構是否正確。</li>\n<li>Build：確認網站或系統能成功打包。</li>\n<li>PR Review：合併前找 bug、風險、缺測試與架構問題。</li>\n</ul>\n<h4>物流科技</h4>\n<ul>\n<li>PL：Packing List。</li>\n<li>CI：Commercial Invoice。</li>\n<li>Devanning：拆櫃/入倉作業。</li>\n<li>Dispatch：出貨派送流程。</li>\n<li>Exception：異常，例如延誤、拒收、地址錯誤、貨損。</li>\n<li>Handoff：流程交接點，常是系統最容易壞的地方。</li>\n</ul>\n<h4>English Summary</h4>\n<p>A shared glossary helps operators define, review, and validate AI coding work with fewer misunderstandings.</p>",
      "path": "content/handbook/02-重要名詞速查表.md"
    },
    {
      "index": "03",
      "title": "Prompt 學習指南",
      "summary": "好 Prompt 是 AI Coding 的工作說明書，也是降低錯誤率的第一道防線。",
      "englishSummary": "Reliable AI coding prompts must include goal, context, constraints, and concrete completion criteria.",
      "html": "<h3>Prompt 學習指南</h3>\n<p>好 Prompt 是 AI Coding 的工作說明書，也是降低錯誤率的第一道防線。</p>\n<h4>VEGO Prompt 公式</h4>\n<pre><code>Goal + Context + Constraints + Done when</code></pre>\n<h4>Goal</h4>\n<p>Goal 要描述業務結果，不只描述技術動作。</p>\n<p>不夠好：</p>\n<pre><code>幫我做一個頁面。</code></pre>\n<p>較好：</p>\n<pre><code>建立物流異常追蹤頁，讓客服能看到延誤、拒收、地址錯誤、貨損案件，並快速產生待人工確認的客戶回覆草稿。</code></pre>\n<h4>Context</h4>\n<p>Context 要交代現有系統、業務規則、資料欄位與目前問題。</p>\n<p>VEGO 常用 context：</p>\n<ul>\n<li>使用者角色：客服、倉庫、dispatch、billing、broker、manager。</li>\n<li>業務流程：PL、pre-alert、devanning、dispatch、invoice、customs review。</li>\n<li>資料欄位：shipment id、container、customer、ETA、status、exception type、owner。</li>\n<li>現有路徑：頁面、API、資料表、測試檔。</li>\n<li>錯誤症狀：哪一步卡住、誰看不到、哪個 handoff 不順。</li>\n</ul>\n<h4>Constraints</h4>\n<p>Constraints 是防止 AI 亂改的護欄。</p>\n<ul>\n<li>不改 production database。</li>\n<li>不刪除資料。</li>\n<li>不改無關檔案。</li>\n<li>不把客戶敏感資料寫進 code 或 log。</li>\n<li>外部 API 先 mock，流程穩定後再接真系統。</li>\n<li>客戶可見訊息不可承諾賠償或保證到貨。</li>\n</ul>\n<h4>Done when</h4>\n<p>Done when 要能驗證，不要寫成感覺。</p>\n<p>好的 Done when：</p>\n<ul>\n<li><code>npm run check</code> 通過。</li>\n<li><code>npm run build</code> 通過。</li>\n<li>主要頁面手機版不重疊。</li>\n<li>錯誤、空資料、loading 狀態都有畫面。</li>\n<li>新增的狀態轉換有測試。</li>\n<li>最終回覆說明改了哪些檔案、怎麼驗證、剩餘風險。</li>\n</ul>\n<h4>VEGO 標準 Prompt 模板</h4>\n<pre><code>Goal:\n請完成 [業務結果]，讓 [角色] 可以 [動作]，並避免 [主要風險]。\n\nContext:\n- 現有 repo / 路徑：\n- 相關流程：\n- 相關資料欄位：\n- 目前症狀：\n- 參考文件：\n\nConstraints:\n- 不要改無關檔案。\n- 不要碰 production secret / production database。\n- 客戶可見訊息需保守，不承諾賠償或保證結果。\n- 每完成一段 coding 必須自己驗證。\n\nDone when:\n- 跑過：\n- 頁面 / API 驗證：\n- 錯誤狀態驗證：\n- 最終說明：</code></pre>\n<h4>Debug Prompt 模板</h4>\n<pre><code>請先不要猜。請用 systematic debugging 方式：\n1. 重現問題。\n2. 找到最小失敗案例。\n3. 區分資料問題、流程狀態問題、UI 顯示問題、API contract 問題。\n4. 提出最小修復。\n5. 跑驗證。</code></pre>\n<h4>English Summary</h4>\n<p>Reliable AI coding prompts must include goal, context, constraints, and concrete completion criteria.</p>",
      "path": "content/handbook/03-Prompt學習指南.md"
    },
    {
      "index": "04",
      "title": "Skill 設計",
      "summary": "Prompt 是一次性指令；Skill 是可重複使用的 SOP。VEGO 的核心不是收藏很多 Skill，而是把真正能提高交付品質的流程變成可測、可審核、可套用的 Skill。",
      "englishSummary": "Skills turn repeatable operating knowledge into reusable instructions, tests, and safety boundaries.",
      "html": "<h3>Skill 設計</h3>\n<p>Prompt 是一次性指令；Skill 是可重複使用的 SOP。VEGO 的核心不是收藏很多 Skill，而是把真正能提高交付品質的流程變成可測、可審核、可套用的 Skill。</p>\n<h4>什麼任務適合做成 Skill</h4>\n<ul>\n<li>每週或每月重複做的任務。</li>\n<li>有固定檢查清單的任務。</li>\n<li>容易因人而異造成品質不穩的任務。</li>\n<li>需要安全邊界與驗收規則的任務。</li>\n<li>新項目經常會重複踩坑的任務。</li>\n</ul>\n<h4>一個 VEGO Skill 必須回答五個問題</h4>\n<ul>\n<li>什麼時候使用？</li>\n<li>需要什麼輸入？</li>\n<li>應該產出什麼？</li>\n<li>有哪些安全限制？</li>\n<li>怎麼驗證它真的有用？</li>\n</ul>\n<h4>SKILL.md 標準骨架</h4>\n<pre><code>---\nname: skill-name\ndescription: 什麼情境下必須使用這個 Skill。\n---\n\n# Skill Name\n\n## 使用時機\n\n描述觸發條件。\n\n## 輸入\n\n- 必要資料\n- 可選資料\n- 不應提供的敏感資料\n\n## 流程\n\n1. 讀上下文。\n2. 找到核心問題。\n3. 產出草稿或方案。\n4. 驗證。\n\n## 輸出\n\n- 交付物\n- 檔案位置\n- 風險提醒\n\n## 安全限制\n\n- 不做什麼\n- 何時需要人工確認\n\n## 測試案例\n\n- 案例 1\n- 案例 2</code></pre>\n<h4>VEGO 優先建立的 Skills</h4>\n<ul>\n<li><code>prompt-quality-review</code></li>\n<li><code>architecture-review</code></li>\n<li><code>base-code-generator</code></li>\n<li><code>pressure-test-before-done</code></li>\n<li><code>customer-friendly-ui-review</code></li>\n<li><code>logistics-exception-management</code></li>\n<li><code>external-skill-converter</code></li>\n</ul>\n<h4>外部 Skill 轉 VEGO Skill 規則</h4>\n<p>外部 Skill 不能原封不動進正式庫。必須先：</p>\n<ul>\n<li>保存來源與作者。</li>\n<li>檢查 license。</li>\n<li>標記 shell、npm、網路請求、token、上傳、刪除風險。</li>\n<li>改寫成 VEGO 用語與繁中說明。</li>\n<li>補上英文摘要。</li>\n<li>加入測試案例。</li>\n<li>經過 Sandbox Review。</li>\n</ul>\n<h4>English Summary</h4>\n<p>Skills turn repeatable operating knowledge into reusable instructions, tests, and safety boundaries.</p>",
      "path": "content/handbook/04-Skill設計.md"
    },
    {
      "index": "05",
      "title": "系統架構與 Base Code",
      "summary": "Base Code 的目的不是一次寫出完整系統，而是建立一個新項目能穩定長大的骨架。對物流系統來說，資料流和狀態流比漂亮畫面更重要。",
      "englishSummary": "Good base code starts from data flow, traceable state changes, mock adapters, and acceptance tests.",
      "html": "<h3>系統架構與 Base Code</h3>\n<p>Base Code 的目的不是一次寫出完整系統，而是建立一個新項目能穩定長大的骨架。對物流系統來說，資料流和狀態流比漂亮畫面更重要。</p>\n<h4>VEGO Base Code 原則</h4>\n<ul>\n<li>先設計資料模型，不先追漂亮畫面。</li>\n<li>每個狀態轉換都要能追蹤：誰改、何時改、為什麼改。</li>\n<li>外部 API 先用 mock adapter，流程穩定後再接真系統。</li>\n<li>不讓 AI 直接連正式資料庫。</li>\n<li>關鍵規則必須有測試。</li>\n</ul>\n<h4>Logistics Exception MVP</h4>\n<p>核心資料流：</p>\n<pre><code>shipment -&gt; exception -&gt; severity -&gt; action plan -&gt; customer draft -&gt; review -&gt; close</code></pre>\n<h4>Base Code 應該先有的模組</h4>\n<pre><code>app/\n  dashboard/\n  exceptions/\n  customers/\n  settings/\n\ncomponents/\n  status-badge\n  error-state\n  empty-state\n  audit-timeline\n\nlib/\n  domain/\n    exception-severity\n    status-transition\n    customer-message-policy\n  adapters/\n    mock-tms\n    mock-wms\n  validation/\n  audit-log/\n\ntests/\n  domain/\n  api/\n  smoke/</code></pre>\n<h4>狀態流設計</h4>\n<p>物流系統最容易壞在狀態不清楚。每個狀態都要定義：</p>\n<ul>\n<li>狀態名稱。</li>\n<li>誰可以改。</li>\n<li>從哪些狀態可以進來。</li>\n<li>可以轉去哪裡。</li>\n<li>需要哪些資料。</li>\n<li>是否會通知客戶。</li>\n<li>是否會影響 billing、dispatch、inventory、customs。</li>\n</ul>\n<p>範例：</p>\n<pre><code>NEW -&gt; TRIAGED -&gt; WAITING_INTERNAL -&gt; CUSTOMER_DRAFT_READY -&gt; CUSTOMER_SENT -&gt; CLOSED</code></pre>\n<h4>API 合約範例</h4>\n<pre><code>GET /api/exceptions\nPOST /api/exceptions/:id/triage\nPOST /api/exceptions/:id/customer-draft\nPOST /api/exceptions/:id/close</code></pre>\n<p>每個 API 都要有：</p>\n<ul>\n<li>success response。</li>\n<li>validation error。</li>\n<li>permission error。</li>\n<li>not found。</li>\n<li>audit log。</li>\n</ul>\n<h4>Base Code 驗收清單</h4>\n<ul>\n<li>可以本地啟動。</li>\n<li>有 mock data。</li>\n<li>沒有 production secret。</li>\n<li>有 loading / empty / error state。</li>\n<li>有至少一條完整 happy path。</li>\n<li>有至少一條 missing data path。</li>\n<li>有 build / check 指令。</li>\n<li>README 說清楚怎麼跑。</li>\n</ul>\n<h4>English Summary</h4>\n<p>Good base code starts from data flow, traceable state changes, mock adapters, and acceptance tests.</p>",
      "path": "content/handbook/05-系統架構與BaseCode.md"
    },
    {
      "index": "06",
      "title": "AI Coding Agent 工具雷達",
      "summary": "AI Coding 工具更新很快，不要迷信單一工具。VEGO 應該建立自己的工具比較機制。",
      "englishSummary": "Tool selection should be scored by workflow reliability, verification ability, integrations, and safety boundaries.",
      "html": "<h3>AI Coding Agent 工具雷達</h3>\n<p>AI Coding 工具更新很快，不要迷信單一工具。VEGO 應該建立自己的工具比較機制。</p>\n<h4>判斷清單</h4>\n<ul>\n<li>能否讀懂整個 codebase？</li>\n<li>能否先研究與規劃，再實作？</li>\n<li>能否建立 branch、產出 diff、開 PR？</li>\n<li>能否執行測試、lint、build？</li>\n<li>能否說明改動、原因與風險？</li>\n<li>能否整合 GitHub、資料庫、文件、MCP、企業工具？</li>\n<li>能否設定權限與安全邊界？</li>\n<li>能否用 evals 比較品質？</li>\n</ul>\n<h4>VEGO 評分方式</h4>\n<p>每個工具用 1 到 5 分評估：</p>\n<ul>\n<li>規劃品質。</li>\n<li>程式可靠度。</li>\n<li>驗證能力。</li>\n<li>前端客戶體驗。</li>\n<li>權限與安全。</li>\n<li>文件與可維護性。</li>\n<li>成本與速度。</li>\n</ul>\n<h4>不該納入正式流程的情況</h4>\n<ul>\n<li>不能跑測試。</li>\n<li>不能說明 diff。</li>\n<li>需要過多權限。</li>\n<li>會自動執行外部腳本。</li>\n<li>會把資料傳給不明第三方。</li>\n</ul>\n<h4>English Summary</h4>\n<p>Tool selection should be scored by workflow reliability, verification ability, integrations, and safety boundaries.</p>",
      "path": "content/handbook/06-AI-Coding-Agent工具雷達.md"
    },
    {
      "index": "07",
      "title": "物流 AI 專案優先順序",
      "summary": "先做小而賺錢、可驗收、能累積資料的系統。",
      "englishSummary": "Start with small, valuable, testable logistics systems that accumulate reusable operational data.",
      "html": "<h3>物流 AI 專案優先順序</h3>\n<p>先做小而賺錢、可驗收、能累積資料的系統。</p>\n<h4>第一個 MVP</h4>\n<p>出貨異常追蹤 + 客服草稿。</p>\n<p>原因：</p>\n<ul>\n<li>資料容易取得。</li>\n<li>流程容易理解。</li>\n<li>價值明確。</li>\n<li>員工馬上能用。</li>\n<li>可以累積後續 AI 分析資料。</li>\n</ul>\n<h4>優先項目</h4>\n<ul>\n<li>出貨異常追蹤。</li>\n<li>客戶 SOP 摘要與提醒。</li>\n<li>報價規則檢查。</li>\n<li>文件缺失檢查。</li>\n<li>客戶週報自動草稿。</li>\n<li>Customs / broker review packet。</li>\n</ul>\n<h4>排序原則</h4>\n<ul>\n<li>是否每天都有人用？</li>\n<li>是否能節省人工時間？</li>\n<li>是否容易驗收？</li>\n<li>是否能累積乾淨資料？</li>\n<li>是否風險可控？</li>\n</ul>\n<h4>English Summary</h4>\n<p>Start with small, valuable, testable logistics systems that accumulate reusable operational data.</p>",
      "path": "content/handbook/07-物流AI專案優先順序.md"
    },
    {
      "index": "08",
      "title": "90 天學習與實作路線圖",
      "summary": "每天 30 到 45 分鐘，重點是持續產出小成果。",
      "englishSummary": "The roadmap turns weekly learning into reusable prompts, skills, and operational systems.",
      "html": "<h3>90 天學習與實作路線圖</h3>\n<p>每天 30 到 45 分鐘，重點是持續產出小成果。</p>\n<h4>每週節奏</h4>\n<ul>\n<li>週一：選一個流程痛點。</li>\n<li>週二：寫 Prompt 與驗收條件。</li>\n<li>週三：讓 Agent 產生方案與 base code。</li>\n<li>週四：測試、debug、修流程。</li>\n<li>週五：整理成 Skill 或模板。</li>\n</ul>\n<h4>30 天目標</h4>\n<ul>\n<li>能寫清楚 Goal + Context + Constraints + Done when。</li>\n<li>能要求 AI 先讀 repo、再規劃、再實作。</li>\n<li>能看懂基本 diff。</li>\n<li>能跑 check/build。</li>\n</ul>\n<h4>60 天目標</h4>\n<ul>\n<li>建立 3 到 5 個 VEGO Skills。</li>\n<li>建立文章搜集與外部 Skill sandbox。</li>\n<li>有第一個可部署小工具。</li>\n</ul>\n<h4>90 天目標</h4>\n<ul>\n<li>形成固定 AI Coding workflow。</li>\n<li>新項目能用 base code + Skill 快速啟動。</li>\n<li>每週更新寶典與工具雷達。</li>\n</ul>\n<h4>English Summary</h4>\n<p>The roadmap turns weekly learning into reusable prompts, skills, and operational systems.</p>",
      "path": "content/handbook/08-90天學習與實作路線圖.md"
    },
    {
      "index": "09",
      "title": "AI Coding 安全與驗收清單",
      "summary": "讓 AI 幫忙，但不能讓 AI 失控。VEGO 的原則是：可以快，但不能用客戶資料、正式系統與不可追蹤變更去換速度。",
      "englishSummary": "AI coding must stay inside reviewed, testable, least-privilege workflows before production release.",
      "html": "<h3>AI Coding 安全與驗收清單</h3>\n<p>讓 AI 幫忙，但不能讓 AI 失控。VEGO 的原則是：可以快，但不能用客戶資料、正式系統與不可追蹤變更去換速度。</p>\n<h4>十條安全底線</h4>\n<ul>\n<li>先在 sandbox、branch 或 worktree 裡修改。</li>\n<li>不把 production database 密碼、客戶密碼、金流密鑰貼給 AI。</li>\n<li>所有 AI 改動都要經過 review。</li>\n<li>上線前必須跑測試與 build。</li>\n<li>schema 改動要有 migration 與 rollback plan。</li>\n<li>客戶可見訊息要人工確認。</li>\n<li>關鍵業務規則要寫成測試。</li>\n<li>刪除重要資料前要人工確認與備份。</li>\n<li>每次改動要有 Git commit / PR 紀錄。</li>\n<li>Agent 權限採最小權限原則。</li>\n</ul>\n<h4>高風險動作</h4>\n<p>以下動作必須人工確認：</p>\n<ul>\n<li>刪除資料。</li>\n<li>修改權限。</li>\n<li>上傳文件或客戶資料。</li>\n<li>發送 email、Slack、客戶訊息。</li>\n<li>建立 API key、OAuth app、long-lived token。</li>\n<li>執行外部 repo 提供的 shell script。</li>\n<li>安裝未知 package。</li>\n<li>改 production env。</li>\n</ul>\n<h4>前端驗收</h4>\n<p>客戶會看到的頁面必須檢查：</p>\n<ul>\n<li>手機版不重疊。</li>\n<li>按鈕文字不溢出。</li>\n<li>loading、empty、error state 完整。</li>\n<li>表單錯誤有明確提示。</li>\n<li>網路失敗不 crash。</li>\n<li>客戶可見文字不過度承諾。</li>\n<li>主要操作在首屏或清楚入口中。</li>\n</ul>\n<h4>後端驗收</h4>\n<ul>\n<li>API 權限檢查。</li>\n<li>validation error。</li>\n<li>audit log。</li>\n<li>idempotency 或重複提交處理。</li>\n<li>rate limit 或 abuse control。</li>\n<li>migration 與 rollback plan。</li>\n<li>mock 與 production adapter 分離。</li>\n</ul>\n<h4>完成前驗證話術</h4>\n<p>Agent 最終回覆必須包含：</p>\n<ul>\n<li>改了什麼。</li>\n<li>跑了什麼命令。</li>\n<li>命令結果。</li>\n<li>尚未驗證的部分。</li>\n<li>剩餘風險。</li>\n</ul>\n<p>不接受：</p>\n<ul>\n<li>「應該可以」。</li>\n<li>「看起來沒問題」。</li>\n<li>「我認為已修好」。</li>\n<li>沒有命令輸出的完成聲明。</li>\n</ul>\n<h4>English Summary</h4>\n<p>AI coding must stay inside reviewed, testable, least-privilege workflows before production release.</p>",
      "path": "content/handbook/09-AI-Coding安全與驗收清單.md"
    },
    {
      "index": "10",
      "title": "可複製模板",
      "summary": "把這些模板貼進 Codex 或新項目文件中使用。",
      "englishSummary": "Copy-ready templates help VEGO start new projects with clear review and architecture standards.",
      "html": "<h3>可複製模板</h3>\n<p>把這些模板貼進 Codex 或新項目文件中使用。</p>\n<h4>PR Review Prompt</h4>\n<pre><code>請以物流系統與客戶體驗角度 review 這次改動。\n優先找 bug、資料風險、權限漏洞、未驗證流程與客戶可見錯誤。\n請列出文件/行號、風險等級、建議修法與需要補的測試。</code></pre>\n<h4>Architecture Prompt</h4>\n<pre><code>請先不要寫程式。請根據以下物流流程設計資料模型、狀態流、API、權限、錯誤處理與驗收測試。\nDone when: 產出可由 Agent 實作的分階段任務清單。</code></pre>\n<h4>Tool Comparison Prompt</h4>\n<pre><code>請比較以下 AI Coding 工具或 Skill：\n1. 是否能讀整個 repo？\n2. 是否能規劃、實作、測試？\n3. 是否會要求過高權限？\n4. 是否能生成可 review 的 diff？\n5. 是否適合 VEGO logistics workflow？</code></pre>\n<h4>完成前檢查 Prompt</h4>\n<pre><code>請在宣稱完成前重新跑驗證：\n- check/build/test 指令\n- 主要頁面 smoke test\n- 手機版布局\n- 空資料與錯誤狀態\n- 最終列出改動、驗證結果、剩餘風險</code></pre>\n<h4>English Summary</h4>\n<p>Copy-ready templates help VEGO start new projects with clear review and architecture standards.</p>",
      "path": "content/handbook/10-可複製模板.md"
    },
    {
      "index": "11",
      "title": "參考來源與後續追蹤",
      "summary": "AI Coding 工具更新很快，VEGO 寶典採取每週更新節奏。",
      "englishSummary": "The handbook should refresh weekly through reviewable source tracking and sandbox previews.",
      "html": "<h3>參考來源與後續追蹤</h3>\n<p>AI Coding 工具更新很快，VEGO 寶典採取每週更新節奏。</p>\n<h4>每週檢查</h4>\n<ul>\n<li>OpenAI / Codex docs 與 changelog。</li>\n<li>Claude Code docs / changelog。</li>\n<li>GitHub Copilot agent docs。</li>\n<li>Vercel / Netlify / Cloudflare AI tooling。</li>\n<li>已收藏外部 Skill repo。</li>\n<li>使用者提交的新文章或 URL。</li>\n</ul>\n<h4>每週輸出</h4>\n<ul>\n<li><code>weekly-update-report.md</code></li>\n<li>新增文章摘要。</li>\n<li>新增 Sandbox Skill 草稿。</li>\n<li>值得升級正式 Skill 的候選清單。</li>\n<li>風險提醒。</li>\n</ul>\n<h4>升級原則</h4>\n<p>只更新已確認的內容。外部文章、工具、repo 先進 Sandbox，不直接進正式寶典。</p>\n<h4>English Summary</h4>\n<p>The handbook should refresh weekly through reviewable source tracking and sandbox previews.</p>",
      "path": "content/handbook/11-參考來源與後續追蹤.md"
    },
    {
      "index": "12",
      "title": "AI Coding 文章搜集區",
      "summary": "文章搜集區用來收藏使用者不定時補充的 AI Coding 文章、工具介紹、GitHub Skill 清單與外部方法論。",
      "englishSummary": "The article collector stores user-submitted AI coding articles and converts them into reviewable sandbox skill drafts.",
      "html": "<h3>AI Coding 文章搜集區</h3>\n<p>文章搜集區用來收藏使用者不定時補充的 AI Coding 文章、工具介紹、GitHub Skill 清單與外部方法論。</p>\n<h4>工作方式</h4>\n<ul>\n<li>使用者貼文章全文或上傳 <code>.txt/.md</code>。</li>\n<li>系統先保存在 Sandbox Article Library。</li>\n<li>自動抽取 GitHub repo、安裝命令、Skill 候選名稱。</li>\n<li>生成 Sandbox Skill 草稿。</li>\n<li>人工閱讀與批准後，才轉入正式 Skill Vault。</li>\n</ul>\n<h4>文章進入知識庫的三種結果</h4>\n<h5>只收藏</h5>\n<p>文章有參考價值，但暫時不適合轉成 Skill。保留在 <code>content/articles/</code>，未來閱讀。</p>\n<h5>轉 Sandbox Skill</h5>\n<p>文章中有可執行的方法、流程、檢查表或工具清單。先生成 <code>content/sandbox-skills/&lt;slug&gt;/SKILL.md</code>。</p>\n<h5>升級正式 Skill</h5>\n<p>經過安全審核與測試案例後，移入 <code>content/skills/&lt;skill-name&gt;/SKILL.md</code>。</p>\n<h4>文章評分表</h4>\n<ul>\n<li>和 AI Coding 是否直接相關？</li>\n<li>是否有可重複流程？</li>\n<li>是否能幫 VEGO 新項目少踩坑？</li>\n<li>是否涉及安裝、執行、上傳、登入或 token？</li>\n<li>是否有 license 或來源風險？</li>\n<li>是否能改寫成繁中 SOP？</li>\n</ul>\n<h4>文章轉 Skill 的最低標準</h4>\n<ul>\n<li>有明確使用場景。</li>\n<li>有輸入與輸出。</li>\n<li>有安全限制。</li>\n<li>有 2 個以上測試案例。</li>\n<li>有英文摘要。</li>\n<li>不依賴未審核外部腳本。</li>\n</ul>\n<h4>安全邊界</h4>\n<ul>\n<li>不自動執行文章中的命令。</li>\n<li>不自動安裝外部 repo。</li>\n<li>不自動啟用外部 Skill。</li>\n<li>不把文章內容傳給第三方服務，除非使用者明確批准。</li>\n</ul>\n<h4>English Summary</h4>\n<p>The article collector stores user-submitted AI coding articles and converts them into reviewable sandbox skill drafts.</p>",
      "path": "content/handbook/12-AI-Coding文章搜集區.md"
    },
    {
      "index": "13",
      "title": "智庫工具與外部電子書",
      "summary": "VEGO AI Coding 寶典最重要的能力之一，是把外部知識和自己創建的系統轉化成可複用的知識、SOP 和 Skill。",
      "englishSummary": "The intelligence hub links external books, subscribed content, and VEGO-owned systems into a reviewable pipeline for handbook knowledge and reusable skills.",
      "html": "<h3>智庫工具與外部電子書</h3>\n<p>VEGO AI Coding 寶典最重要的能力之一，是把外部知識和自己創建的系統轉化成可複用的知識、SOP 和 Skill。</p>\n<h4>外部電子書可以怎麼接入</h4>\n<p>可以：</p>\n<ul>\n<li>保存電子書或訂閱內容的連結。</li>\n<li>保存自己的閱讀筆記。</li>\n<li>保存短摘錄，用於定位重點。</li>\n<li>把內容改寫成自己的理解、方法論、檢查表。</li>\n<li>轉成 VEGO Skill 草稿。</li>\n</ul>\n<p>不可以：</p>\n<ul>\n<li>繞過 DRM 或 paywall。</li>\n<li>整本搬運到寶典。</li>\n<li>把未授權內容公開發布。</li>\n<li>將受限內容自動分享給第三方。</li>\n</ul>\n<h4>自有系統如何注入寶典</h4>\n<p>你可以把自己建立的系統 URL 放入智庫來源隊列，讓寶典記錄：</p>\n<ul>\n<li>這個系統解決什麼問題。</li>\n<li>哪些頁面、流程、錯誤處理值得學習。</li>\n<li>哪些 UI / API / data model pattern 可以轉成 Skill。</li>\n<li>哪些經驗可以反哺新項目 base code。</li>\n</ul>\n<p>第一階段只做 read-only 吸收，不修改原系統。</p>\n<h4>智庫吸收流程</h4>\n<ul>\n<li>建立來源卡。</li>\n<li>標記來源類型：system、ebook、article、github、docs。</li>\n<li>寫明吸收目標。</li>\n<li>生成摘要與方法論。</li>\n<li>抽取 Skill 候選。</li>\n<li>進 Sandbox Review。</li>\n<li>批准後升級為正式寶典內容或正式 Skill。</li>\n</ul>\n<h4>English Summary</h4>\n<p>The intelligence hub links external books, subscribed content, and VEGO-owned systems into a reviewable pipeline for handbook knowledge and reusable skills.</p>",
      "path": "content/handbook/13-智庫工具與外部電子書.md"
    },
    {
      "index": "14",
      "title": "物流與供應鏈智庫",
      "summary": "VEGO AI Coding 寶典要逐步從工具手冊升級成物流與供應鏈智庫。這個智庫的核心不是收藏資料，而是把物流營運中的流程、例外、判斷標準、系統模式與客戶 SOP 轉化成可搜尋、可審核、可套用的知識與 Skill。",
      "englishSummary": "VEGO's intelligence hub should grow into a logistics and supply-chain knowledge system that converts operating workflows, exceptions, compliance rules, and customer SOPs into searchable knowledge and reusable skills.",
      "html": "<h3>物流與供應鏈智庫</h3>\n<p>VEGO AI Coding 寶典要逐步從工具手冊升級成物流與供應鏈智庫。這個智庫的核心不是收藏資料，而是把物流營運中的流程、例外、判斷標準、系統模式與客戶 SOP 轉化成可搜尋、可審核、可套用的知識與 Skill。</p>\n<h4>領域分類</h4>\n<h5>Inbound</h5>\n<ul>\n<li>pre-alert</li>\n<li>PL / CI</li>\n<li>container</li>\n<li>devanning</li>\n<li>receiving</li>\n<li>inbound discrepancy</li>\n</ul>\n<p>重點：不能只看 parser 是否成功，還要看 downstream workflow 是否真的進入可操作狀態。</p>\n<h5>Warehouse</h5>\n<ul>\n<li>SKU</li>\n<li>inventory status</li>\n<li>lot / pallet / location</li>\n<li>putaway</li>\n<li>cycle count</li>\n<li>allocation</li>\n</ul>\n<p>重點：planning inventory 與可出貨庫存必須分清楚。PREVIEW 類狀態只能用於規劃，不能直接進出貨 allocation。</p>\n<h5>Outbound</h5>\n<ul>\n<li>order release</li>\n<li>pick / pack</li>\n<li>dispatch</li>\n<li>BOL</li>\n<li>POD</li>\n<li>carrier handoff</li>\n</ul>\n<p>重點：每個 handoff 都要留下狀態、責任人、時間與可驗證文件。</p>\n<h5>Customs</h5>\n<ul>\n<li>HTS</li>\n<li>broker review</li>\n<li>PL -&gt; CI</li>\n<li>regular cargo</li>\n<li>express / small parcel</li>\n<li>MCI / HAWB</li>\n</ul>\n<p>重點：regular cargo 與 express/small-parcel 是雙軌並行，不是互相替代。關務輸出要保持 broker-facing 文件正常可用。</p>\n<h5>Customer Operations</h5>\n<ul>\n<li>customer SOP</li>\n<li>exception management</li>\n<li>escalation rule</li>\n<li>customer draft</li>\n<li>service level</li>\n</ul>\n<p>重點：客戶可見訊息要保守、可審核，不承諾賠償或保證到貨。</p>\n<h5>Finance</h5>\n<ul>\n<li>quote lookup</li>\n<li>accessorial fee</li>\n<li>invoice gate</li>\n<li>billing exception</li>\n<li>rate rule</li>\n</ul>\n<p>重點：費用與 invoice send gate 必須可追蹤，不能因資料稀疏造成 crash。</p>\n<h4>知識入庫標準</h4>\n<p>一條物流知識要進入寶典，至少要包含：</p>\n<ul>\n<li>適用流程。</li>\n<li>觸發條件。</li>\n<li>需要的資料欄位。</li>\n<li>正常處理方式。</li>\n<li>常見錯誤。</li>\n<li>系統驗收方式。</li>\n<li>是否能轉成 Skill。</li>\n</ul>\n<h4>物流知識轉 Skill 的例子</h4>\n<pre><code>PL parsed but workflow blocked\n  -&gt; 分析 container status\n  -&gt; 分析 devanning sheet state\n  -&gt; 檢查 pre-dispatch snapshot\n  -&gt; 檢查 DM 是否能 review\n  -&gt; 產生 repair / handoff report</code></pre>\n<p>這類流程可以轉成 <code>pl-workflow-handoff-review</code> Skill。</p>\n<h4>English Summary</h4>\n<p>VEGO&#039;s intelligence hub should grow into a logistics and supply-chain knowledge system that converts operating workflows, exceptions, compliance rules, and customer SOPs into searchable knowledge and reusable skills.</p>",
      "path": "content/handbook/14-物流與供應鏈智庫.md"
    },
    {
      "index": "15",
      "title": "物流 AGI 領域架構",
      "summary": "VEGO 智庫要從「AI Coding 寶典」繼續深化成物流、供應鏈、自動化與智能體的作戰地圖。這個架構的重點不是追逐名詞，而是把每個領域的資料、判斷、流程、責任邊界與驗收方式整理清楚，讓未來的 AI 自動化、機器人智能體與物流 AGI 都",
      "englishSummary": "VEGO's logistics intelligence system should separate knowledge, automation, agents, robotics, control-tower orchestration, and human safety gates. This allows the handbook to evolve toward logistics AGI without losing traceability, compliance, or operational accountability.",
      "html": "<h3>物流 AGI 領域架構</h3>\n<p>VEGO 智庫要從「AI Coding 寶典」繼續深化成物流、供應鏈、自動化與智能體的作戰地圖。這個架構的重點不是追逐名詞，而是把每個領域的資料、判斷、流程、責任邊界與驗收方式整理清楚，讓未來的 AI 自動化、機器人智能體與物流 AGI 都能在可控範圍內逐步落地。</p>\n<h4>領域分層</h4>\n<h5>1. 知識層</h5>\n<ul>\n<li>來源：文章、電子書、客戶 SOP、系統截圖、錯誤案例、會議紀錄、GitHub Skill。</li>\n<li>產出：智庫條目、流程卡、風險提示、可轉 Skill 候選。</li>\n<li>驗收：來源可追溯，內容已摘要，沒有未授權全文搬運，敏感資料已移除。</li>\n</ul>\n<h5>2. AI 自動化層</h5>\n<ul>\n<li>典型任務：PL/CI 抽取、狀態比對、異常分類、客戶回覆草稿、報表生成、SOP 檢查。</li>\n<li>產出：可重跑的自動化流程、輸入欄位、輸出格式、錯誤處理規則。</li>\n<li>驗收：能處理缺欄位、錯格式、重複資料與人工修正。</li>\n</ul>\n<h5>3. 智能體層</h5>\n<ul>\n<li>角色：Inbound Agent、Warehouse Agent、Customs Agent、Dispatch Agent、Customer Agent、Finance Agent。</li>\n<li>產出：每個 Agent 的職責、工具權限、可讀資料、可寫資料、交接條件。</li>\n<li>驗收：Agent 不越權，不直接對外承諾，不自行提交關務或付款動作。</li>\n</ul>\n<h5>4. 機器人協作層</h5>\n<ul>\n<li>場景：掃碼、盤點、揀貨、補貨、AMR 搬運、視覺檢查、稱重尺寸量測。</li>\n<li>產出：實體任務與 WMS 狀態的映射、設備事件、人工接管流程。</li>\n<li>驗收：每個現場任務都有定位資料、責任人、失敗回退與安全停止條件。</li>\n</ul>\n<h5>5. 物流 AGI 控制塔層</h5>\n<ul>\n<li>目標：跨領域規劃、異常預警、資源調度、方案模擬、風險排序。</li>\n<li>產出：多 Agent 協作策略、決策日誌、升級規則、人工批准閘。</li>\n<li>驗收：高風險決策保持 human-in-the-loop，所有建議能回溯資料來源與推理理由。</li>\n</ul>\n<h4>成熟度路線</h4>\n<h5>L0：資料收藏</h5>\n<p>把材料存起來，但還不能穩定檢索或套用。</p>\n<h5>L1：可搜尋知識庫</h5>\n<p>每份材料都有領域、摘要、來源、使用場景與風險標籤。</p>\n<h5>L2：Skill 輔助流程</h5>\n<p>把常見作業轉成可重複使用的 Skill，但只在 Sandbox 或人工監督下執行。</p>\n<h5>L3：半自動 Agent</h5>\n<p>Agent 可以讀資料、產生建議、生成草稿與檢查異常，但關鍵動作需要批准。</p>\n<h5>L4：多 Agent 協作</h5>\n<p>Inbound、Warehouse、Customs、Dispatch、Customer、Finance 等 Agent 可以透過明確交接條件協作。</p>\n<h5>L5：物流 AGI 控制塔</h5>\n<p>系統能做跨流程推理、方案比較與資源調度建議，並以合規、人審、可回溯為硬限制。</p>\n<h4>寶典建設原則</h4>\n<ul>\n<li>外部 Skill 一律先進 Sandbox Review。</li>\n<li>訂閱電子書與付費內容只做合法摘要、短摘錄與原創方法整理，不繞過授權限制。</li>\n<li>物流系統寫入、客戶訊息、關務申報、付款與刪除動作都需要人工批准。</li>\n<li>每個自動化流程都要有失敗樣本、壓力測試與回退方案。</li>\n<li>每個領域都要保留「人類營運判斷」欄位，避免只堆工具卻失去現場經驗。</li>\n</ul>\n<h4>下一步典藏任務</h4>\n<ul>\n<li>為六大營運領域各建立 10 個真實案例。</li>\n<li>把每個案例標記到知識層、自動化層、智能體層或機器人協作層。</li>\n<li>每週挑 2 到 3 個案例轉成 Sandbox Skill。</li>\n<li>每月整理一次物流 AGI 控制塔路線圖，確認哪些能力可以進入正式寶典。</li>\n</ul>\n<h4>English Summary</h4>\n<p>VEGO&#039;s logistics intelligence system should separate knowledge, automation, agents, robotics, control-tower orchestration, and human safety gates. This allows the handbook to evolve toward logistics AGI without losing traceability, compliance, or operational accountability.</p>",
      "path": "content/handbook/15-物流AGI領域架構.md"
    }
  ],
  "skills": [
    {
      "name": "article-20-treasure-skills",
      "author": "Sandbox",
      "category": "Sandbox Skill",
      "description": "從「最值得推薦的 20 個寶藏 Skills」文章抽取的外部 Skill 雷達與 VEGO 轉換候選。",
      "status": "sandbox",
      "risk": "medium",
      "url": "",
      "path": "content/sandbox-skills/2026-05-04-20-treasure-skills/SKILL.md"
    },
    {
      "name": "ai-tool-comparison-eval",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "比較 AI Coding Agent、外部 Skill、工具或模型是否值得納入 VEGO 寶典。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/ai-tool-comparison-eval/SKILL.md"
    },
    {
      "name": "architecture-review",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "在新項目開工前審查資料流、狀態流、API、權限、測試與風險。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/architecture-review/SKILL.md"
    },
    {
      "name": "automation-opportunity-scanner",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "掃描文章、系統流程或營運案例，找出可自動化、可轉 Skill、需要人審的物流 AI 機會。Use when evaluating automation candidates.",
      "status": "approved",
      "risk": "medium",
      "url": "",
      "path": "content/skills/automation-opportunity-scanner/SKILL.md"
    },
    {
      "name": "base-code-generator",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "根據 VEGO 業務流程生成新項目的 base code 任務拆分與檔案結構。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/base-code-generator/SKILL.md"
    },
    {
      "name": "customer-friendly-ui-review",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "檢查網頁與工具是否對客戶友好、可掃描、錯誤狀態清楚、不容易 crash。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/customer-friendly-ui-review/SKILL.md"
    },
    {
      "name": "customs-broker-review-packet",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "生成或審查 broker-facing customs review packet。Use when PL/CI, HTS, broker review, regular cargo, or express small-parcel customs outputs must be prepared safely.",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/customs-broker-review-packet/SKILL.md"
    },
    {
      "name": "external-skill-converter",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "將外部文章、GitHub repo 或安裝命令提到的 Skill 轉成 VEGO 可審核、可收藏、可應用的 Skill 卡與 SKILL.md。",
      "status": "approved",
      "risk": "medium",
      "url": "",
      "path": "content/skills/external-skill-converter/SKILL.md"
    },
    {
      "name": "logistics-agent-domain-planner",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "將物流、供應鏈、關務、倉儲、客服、財務流程拆成可交接的 Agent 領域架構。Use when designing AI agents for logistics operations.",
      "status": "approved",
      "risk": "medium",
      "url": "",
      "path": "content/skills/logistics-agent-domain-planner/SKILL.md"
    },
    {
      "name": "logistics-exception-management",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "處理物流異常、延誤、拒收、地址錯誤、貨損與客服草稿。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/logistics-exception-management/SKILL.md"
    },
    {
      "name": "logistics-knowledge-ingestion",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "將物流、供應鏈、關務、倉儲、運輸、客服或財務內容整理成 VEGO 智庫條目。Use when a source should be converted into structured logistics knowledge and possible Skill candidates.",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/logistics-knowledge-ingestion/SKILL.md"
    },
    {
      "name": "pl-workflow-handoff-review",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "檢查 PL parser 成功後 downstream workflow 是否真的可操作。Use when PL/CI parsing looks successful but devanning, dispatch, inventory, or invoice workflow is still blocked.",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/pl-workflow-handoff-review/SKILL.md"
    },
    {
      "name": "pr-review-logistics",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "以物流流程、客戶體驗、資料安全與驗收標準審查 Pull Request。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/pr-review-logistics/SKILL.md"
    },
    {
      "name": "pressure-test-before-done",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "每完成一個 coding 段落後使用，要求執行可證明的驗證、壓力測試與明顯 bug 修復。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/pressure-test-before-done/SKILL.md"
    },
    {
      "name": "prompt-quality-review",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "在交給 AI 實作前檢查 Prompt 是否具備 Goal、Context、Constraints、Done when。",
      "status": "approved",
      "risk": "low",
      "url": "",
      "path": "content/skills/prompt-quality-review/SKILL.md"
    },
    {
      "name": "robotics-workflow-bridge",
      "author": "VEGO",
      "category": "VEGO Skill",
      "description": "將倉庫現場任務、WMS 狀態、掃碼設備、AMR 或視覺檢查轉成可驗收的機器人協作流程。Use when bridging warehouse operations and robotics.",
      "status": "approved",
      "risk": "medium",
      "url": "",
      "path": "content/skills/robotics-workflow-bridge/SKILL.md"
    }
  ],
  "articles": [
    {
      "id": "content/articles/2026-05-04-20-treasure-skills.md",
      "title": "最值得推薦的 20 個寶藏 Skills - VEGO 收藏摘要",
      "source": "使用者提供文章內容；原文作者：沃垠AI；發布日期：2026-05-02",
      "status": "sandbox",
      "body": "# 最值得推薦的 20 個寶藏 Skills - VEGO 收藏摘要\n\n## 收藏目的\n\n這篇文章適合作為 VEGO AI Coding 寶典的第一批外部 Skill 雷達樣本。它涵蓋中文創作、深度研究、設計配圖、PPT、知識管理、資料分析、翻譯、創業與工程化 coding workflow。\n\n## GitHub 來源\n\n- https://github.com/lijigang/ljg-skills\n- https://github.com/alchaincyf/huashu-skills\n- https://github.com/freestylefly/canghe-skills\n- https://github.com/kangarooking/kangarooking-skills\n- https://github.com/lengyi2030/Auto-wechat-writing\n- https://github.com/KKKKhazix/khazix-skills\n- https://github.com/larashero3-dotcom/soul.skill\n- https://github.com/blockpanda/any2html\n- https://github.com/joeseesun/qiaomu-info-card-designer\n- https://github.com/op7418/guizang-ppt-skill\n- https://github.com/pbakaus/impeccable\n- https://github.com/xiaohuailabs/tacit-mining\n- https://github.com/kepano/obsidian-skills\n- https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill\n- https://github.com/deusyu/translate-book\n- https://github.com/slavingia/skills\n- https://github.com/ReScienceLab/opc-skills\n- https://github.com/mattpocock/skills\n- https://github.com/jnMetaCode/superpowers-zh\n\n## Skill 候選\n\n- ljg-skills\n- huashu-skills\n- canghe-skills\n- kangarooking-skills\n- Auto-WeChat-Writing\n- khazix-writer\n- hv-analysis\n- soul.skill",
      "path": "content/articles/2026-05-04-20-treasure-skills.md"
    }
  ],
  "sources": [
    {
      "id": "content/sources/logistics-domain-map.md",
      "title": "VEGO Logistics and Supply Chain Domain Map",
      "type": "system",
      "url": "internal://vego-logistics-domain-map",
      "status": "sandbox",
      "risk": "low",
      "body": "# VEGO Logistics and Supply Chain Domain Map\n\n## 吸收目標\n\n把 VEGO 的物流、供應鏈、關務、倉儲、運輸、客服與財務流程整理成智庫主幹，後續所有外部文章、電子書、系統 URL 和 Skill 都可以掛到這張地圖上。\n\n## 領域\n\n- Inbound\n- Warehouse\n- Outbound\n- Customs\n- Customer Operations\n- Finance\n- Supply Chain Risk\n\n## 下一步\n\n1. 每個領域補 5 到 10 個真實流程案例。\n2. 每個流程至少生成 1 個 SOP。\n3. 每個 SOP 評估是否轉成 Skill。\n4. 每個 Skill 補測試案例和安全限制。\n\n## English Summary\n\nInternal source card for structuring VEGO's logistics and supply-chain intelligence system.",
      "path": "content/sources/logistics-domain-map.md"
    },
    {
      "id": "content/sources/logistics-agi-domain-architecture.md",
      "title": "VEGO Logistics AGI Domain Architecture",
      "type": "system",
      "url": "internal://vego-logistics-agi-domain-architecture",
      "status": "sandbox",
      "risk": "medium",
      "body": "# VEGO Logistics AGI Domain Architecture\n\n## 吸收目標\n\n建立 VEGO 智庫的長期領域分層，讓文章、電子書、系統 URL、GitHub Skill 與營運案例都能被放到正確的位置，逐步支援 AI 自動化、智能體、機器人協作與物流 AGI 控制塔。\n\n## 領域分層\n\n- Knowledge：文章、SOP、案例、電子書摘要。\n- Automation：文件抽取、狀態比對、異常分類、報表與草稿。\n- Agents：Inbound、Warehouse、Customs、Dispatch、Customer、Finance。\n- Robotics：掃碼、盤點、AMR、視覺檢查、現場安全停止。\n- Control Tower：跨流程監控、模擬、調度建議、升級規則。\n- Safety：Sandbox Review、人工批准、合規邊界、責任追溯。\n\n## 下一步\n\n1. 每個來源進入智庫時，都標記所屬層級與營運領域。\n2. 每個 Skill 都補上使用限制、輸入、輸出、測試案例與是否可正式啟用。\n3. 每週更新時優先收集物流 AI、自動化、機器人、供應鏈 Agent 與關務智能化內容。\n\n## English Summary\n\nInternal source card for organizing VEGO's logistics AGI roadmap across knowledge, automation, agents, robotics, control tower, and safety layers.",
      "path": "content/sources/logistics-agi-domain-architecture.md"
    }
  ],
  "sandboxSkills": [
    {
      "name": "article-20-treasure-skills",
      "author": "Sandbox",
      "category": "Sandbox Skill",
      "description": "從「最值得推薦的 20 個寶藏 Skills」文章抽取的外部 Skill 雷達與 VEGO 轉換候選。",
      "status": "sandbox",
      "risk": "medium",
      "url": "",
      "path": "content/sandbox-skills/2026-05-04-20-treasure-skills/SKILL.md"
    }
  ]
};
