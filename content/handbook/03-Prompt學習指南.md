# Prompt 學習指南

好 Prompt 是 AI Coding 的工作說明書，也是降低錯誤率的第一道防線。

## VEGO Prompt 公式

```text
Goal + Context + Constraints + Done when
```

## Goal

Goal 要描述業務結果，不只描述技術動作。

不夠好：

```text
幫我做一個頁面。
```

較好：

```text
建立物流異常追蹤頁，讓客服能看到延誤、拒收、地址錯誤、貨損案件，並快速產生待人工確認的客戶回覆草稿。
```

## Context

Context 要交代現有系統、業務規則、資料欄位與目前問題。

VEGO 常用 context：

- 使用者角色：客服、倉庫、dispatch、billing、broker、manager。
- 業務流程：PL、pre-alert、devanning、dispatch、invoice、customs review。
- 資料欄位：shipment id、container、customer、ETA、status、exception type、owner。
- 現有路徑：頁面、API、資料表、測試檔。
- 錯誤症狀：哪一步卡住、誰看不到、哪個 handoff 不順。

## Constraints

Constraints 是防止 AI 亂改的護欄。

- 不改 production database。
- 不刪除資料。
- 不改無關檔案。
- 不把客戶敏感資料寫進 code 或 log。
- 外部 API 先 mock，流程穩定後再接真系統。
- 客戶可見訊息不可承諾賠償或保證到貨。

## Done when

Done when 要能驗證，不要寫成感覺。

好的 Done when：

- `npm run check` 通過。
- `npm run build` 通過。
- 主要頁面手機版不重疊。
- 錯誤、空資料、loading 狀態都有畫面。
- 新增的狀態轉換有測試。
- 最終回覆說明改了哪些檔案、怎麼驗證、剩餘風險。

## VEGO 標準 Prompt 模板

```text
Goal:
請完成 [業務結果]，讓 [角色] 可以 [動作]，並避免 [主要風險]。

Context:
- 現有 repo / 路徑：
- 相關流程：
- 相關資料欄位：
- 目前症狀：
- 參考文件：

Constraints:
- 不要改無關檔案。
- 不要碰 production secret / production database。
- 客戶可見訊息需保守，不承諾賠償或保證結果。
- 每完成一段 coding 必須自己驗證。

Done when:
- 跑過：
- 頁面 / API 驗證：
- 錯誤狀態驗證：
- 最終說明：
```

## Debug Prompt 模板

```text
請先不要猜。請用 systematic debugging 方式：
1. 重現問題。
2. 找到最小失敗案例。
3. 區分資料問題、流程狀態問題、UI 顯示問題、API contract 問題。
4. 提出最小修復。
5. 跑驗證。
```

## English Summary

Reliable AI coding prompts must include goal, context, constraints, and concrete completion criteria.
