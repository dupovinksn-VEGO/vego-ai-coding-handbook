# AI Coding 文章搜集區

文章搜集區用來收藏使用者不定時補充的 AI Coding 文章、工具介紹、GitHub Skill 清單與外部方法論。

## 工作方式

1. 使用者貼文章全文或上傳 `.txt/.md`。
2. 系統先保存在 Sandbox Article Library。
3. 自動抽取 GitHub repo、安裝命令、Skill 候選名稱。
4. 生成 Sandbox Skill 草稿。
5. 人工閱讀與批准後，才轉入正式 Skill Vault。

## 文章進入知識庫的三種結果

### 只收藏

文章有參考價值，但暫時不適合轉成 Skill。保留在 `content/articles/`，未來閱讀。

### 轉 Sandbox Skill

文章中有可執行的方法、流程、檢查表或工具清單。先生成 `content/sandbox-skills/<slug>/SKILL.md`。

### 升級正式 Skill

經過安全審核與測試案例後，移入 `content/skills/<skill-name>/SKILL.md`。

## 文章評分表

- 和 AI Coding 是否直接相關？
- 是否有可重複流程？
- 是否能幫 VEGO 新項目少踩坑？
- 是否涉及安裝、執行、上傳、登入或 token？
- 是否有 license 或來源風險？
- 是否能改寫成繁中 SOP？

## 文章轉 Skill 的最低標準

1. 有明確使用場景。
2. 有輸入與輸出。
3. 有安全限制。
4. 有 2 個以上測試案例。
5. 有英文摘要。
6. 不依賴未審核外部腳本。

## 安全邊界

- 不自動執行文章中的命令。
- 不自動安裝外部 repo。
- 不自動啟用外部 Skill。
- 不把文章內容傳給第三方服務，除非使用者明確批准。

## English Summary

The article collector stores user-submitted AI coding articles and converts them into reviewable sandbox skill drafts.
