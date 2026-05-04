# 文章搜集與 Skill 生產 SOP

## 目標

讓使用者平時看到有價值的 AI Coding 文章時，可以先收藏，之後慢慢閱讀；系統也能先抽取可轉換成 VEGO Skill 的線索。

## Sandbox 版能力

- 貼文章全文
- 上傳 `.txt/.md`
- 抽取 GitHub repo
- 抽取 `npx skills add ...` 命令
- 抽取 Skill 候選名稱
- 生成 Sandbox Skill 草稿
- 保存在瀏覽器 localStorage

## 正式版升級方向

1. 儲存到 GitHub repo 的 `content/articles/`。
2. 自動建立 review PR。
3. 對 GitHub repo 做只讀下載與安全掃描。
4. 生成 Netlify preview。
5. 批准後轉入 `content/skills/`。

## English Summary

Article collection turns reading material into a reviewed pipeline for future VEGO skills.
