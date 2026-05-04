# VEGO AI Coding 寶典

VEGO 專用的 AI Coding 網頁版知識庫、Skill Vault 與 Sandbox Review 系統。

正式網站：

[https://vego-ai-coding-handbook.netlify.app](https://vego-ai-coding-handbook.netlify.app)

## 使用方式

```powershell
npm run dev
```

本機預覽預設開在 `http://localhost:4173`。

## 文章搜集

網頁上的「文章搜集區」目前支援貼文章與上傳 `.txt/.md`，會先保存在瀏覽器 localStorage。

要把文章正式納入 repo，可使用：

```powershell
npm run import:article -- --file "C:\path\to\article.md" --title "文章標題" --source "來源或URL"
```

匯入後會建立：

- `content/articles/YYYY-MM-DD-<slug>.md`
- `content/sandbox-skills/<slug>/SKILL.md`

## 智庫來源

要把外部電子書、訂閱文章、GitHub repo、官方 docs，或你自己創建的系統 URL 放入智庫來源隊列：

```powershell
npm run import:source -- --title "來源名稱" --type "system" --url "https://example.netlify.app" --goal "抽取可複用的流程與 Skill"
```

匯入後會建立：

- `content/sources/YYYY-MM-DD-<slug>.md`

外部電子書與訂閱內容只保存連結、摘要、短摘錄與自己的方法論改寫；不繞過 DRM、paywall 或授權限制。

## 內容原則

- 繁體中文為主，每個主要頁面附英文摘要。
- 外部 Skill 先進入 Sandbox Review，不直接進正式寶典。
- 每週更新先產生待審核內容，確認後才合併正式版。
- 每段 coding 完成後要跑 `npm run check` 與必要的頁面驗證。

## Netlify

Netlify publish directory 設為 `web`，build command 設為 `npm run build`。
