# 每週更新 SOP

## 目的

每週追蹤 AI Coding、Agent、Skill、生產力工具與官方文件更新，但正式寶典不自動覆蓋。

## 流程

1. 讀取 `registries/user-submitted-links.yaml` 與官方來源清單。
2. 對已收藏 GitHub repo 檢查 README、SKILL.md、release、license、最近 commit。
3. 生成 `weekly-update-report.md` 草稿。
4. 對新增 Skill 生成 Sandbox Card：
   - 來源
   - 作者
   - 使用場景
   - 安裝方式
   - 風險等級
   - VEGO 適用建議
5. 跑安全掃描與基本 eval。
6. 生成 Netlify preview。
7. 使用者批准後才更新正式寶典。

## 不自動執行的事情

- 不自動安裝外部 npm package。
- 不自動啟用外部 Skill。
- 不自動執行外部 repo 內的 shell script。
- 不自動提交正式分支。

## English Summary

Weekly updates create reviewable sandbox changes first. External skills are never activated automatically.
