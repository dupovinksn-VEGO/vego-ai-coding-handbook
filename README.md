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

## 內容原則

- 繁體中文為主，每個主要頁面附英文摘要。
- 外部 Skill 先進入 Sandbox Review，不直接進正式寶典。
- 每週更新先產生待審核內容，確認後才合併正式版。
- 每段 coding 完成後要跑 `npm run check` 與必要的頁面驗證。

## Netlify

Netlify publish directory 設為 `web`，build command 設為 `npm run build`。
