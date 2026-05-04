# AI Coding 安全與驗收清單

讓 AI 幫忙，但不能讓 AI 失控。VEGO 的原則是：可以快，但不能用客戶資料、正式系統與不可追蹤變更去換速度。

## 十條安全底線

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

## 高風險動作

以下動作必須人工確認：

- 刪除資料。
- 修改權限。
- 上傳文件或客戶資料。
- 發送 email、Slack、客戶訊息。
- 建立 API key、OAuth app、long-lived token。
- 執行外部 repo 提供的 shell script。
- 安裝未知 package。
- 改 production env。

## 前端驗收

客戶會看到的頁面必須檢查：

- 手機版不重疊。
- 按鈕文字不溢出。
- loading、empty、error state 完整。
- 表單錯誤有明確提示。
- 網路失敗不 crash。
- 客戶可見文字不過度承諾。
- 主要操作在首屏或清楚入口中。

## 後端驗收

- API 權限檢查。
- validation error。
- audit log。
- idempotency 或重複提交處理。
- rate limit 或 abuse control。
- migration 與 rollback plan。
- mock 與 production adapter 分離。

## 完成前驗證話術

Agent 最終回覆必須包含：

- 改了什麼。
- 跑了什麼命令。
- 命令結果。
- 尚未驗證的部分。
- 剩餘風險。

不接受：

- 「應該可以」。
- 「看起來沒問題」。
- 「我認為已修好」。
- 沒有命令輸出的完成聲明。

## English Summary

AI coding must stay inside reviewed, testable, least-privilege workflows before production release.
