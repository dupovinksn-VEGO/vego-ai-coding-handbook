# AI Coding 安全與驗收清單

## 十條底線

1. 先在 sandbox、branch 或 worktree 裡修改。
2. 不把 production database 密碼、客戶密碼、金流密鑰貼給 AI。
3. 所有 AI 改動都要經過 review。
4. 上線前必須跑測試與 build。
5. schema 改動要有 migration 與 rollback plan。
6. 客戶可見訊息要人工確認。
7. 關鍵業務規則要寫成測試。
8. 刪除重要資料前要人工確認與備份。
9. 每次改動要有 Git commit / PR 紀錄。
10. Agent 權限採最小權限原則。

## English Summary

AI coding must stay inside reviewed, testable, least-privilege workflows before production release.
