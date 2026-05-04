---
name: logistics-agent-domain-planner
description: 將物流、供應鏈、關務、倉儲、客服、財務流程拆成可交接的 Agent 領域架構。Use when designing AI agents for logistics operations.
risk: medium
---

# Logistics Agent Domain Planner

## 使用時機

當 VEGO 要把一段物流流程升級成智能體工作流時使用。例如 inbound 文件處理、倉庫異常、關務審核、派送追蹤、客服回覆或 invoice gate。

## 輸入

- 目標流程或系統頁面。
- 涉及角色與部門。
- 可讀資料來源。
- 可寫入系統或需要禁止寫入的系統。
- 期望自動化程度。

## 輸出

- 領域分類：Inbound、Warehouse、Outbound、Customs、Customer、Finance、Risk。
- Agent 職責邊界。
- Agent 可用工具與禁止工具。
- 上下游交接條件。
- 需要 human-in-the-loop 的批准點。
- Sandbox 測試案例。

## 執行步驟

1. 描述流程目前由誰做、用什麼資料做、最後交付什麼結果。
2. 拆出每個 Agent 的單一責任，不讓一個 Agent 同時負責太多領域。
3. 標記讀取權限、寫入權限、外部通知權限。
4. 補上異常路徑、人工接管與失敗回退。
5. 產生 Sandbox Skill 草稿，不直接啟用到正式作業。

## 安全限制

- 不允許 Agent 自行提交關務申報、付款、刪除資料或對客戶做最終承諾。
- 不允許未審核外部 Skill 進入正式流程。
- 不允許把客戶敏感資料保存到公開知識庫。

## English Summary

Design logistics AI agents by separating domains, responsibilities, permissions, handoffs, approval gates, and sandbox tests before production use.
