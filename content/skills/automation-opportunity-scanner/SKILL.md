---
name: automation-opportunity-scanner
description: 掃描文章、系統流程或營運案例，找出可自動化、可轉 Skill、需要人審的物流 AI 機會。Use when evaluating automation candidates.
risk: medium
---

# Automation Opportunity Scanner

## 使用時機

當使用者提供文章、電子書摘要、系統連結、操作流程、客服案例或倉庫異常時，用這個 Skill 判斷哪些內容值得轉成 AI 自動化或 Sandbox Skill。

## 輸入

- 來源內容或 URL。
- 目前手工作業流程。
- 失敗案例或痛點。
- 資料來源與系統限制。

## 輸出

- 自動化候選清單。
- 每個候選的收益、風險、資料需求、系統依賴。
- 是否適合轉成 Skill。
- 是否需要 Agent、RPA、API、人工批准或機器人設備。
- 優先順序：Now、Next、Later、Reject。

## 評分維度

- 重複性：是否每天或每週反覆發生。
- 規則性：是否能用明確條件判斷。
- 風險：錯了會不會影響客戶、關務、付款或倉庫安全。
- 資料品質：輸入資料是否穩定。
- 驗收難度：是否能用測試案例證明成功。

## 安全限制

- 高風險流程只能建議，不自動執行。
- 關務、付款、刪除、對客承諾需要人工批准。
- 付費內容只允許合法摘要與原創轉化，不保存未授權全文。

## English Summary

Scan logistics content and workflows for automation opportunities, rank them by value and risk, and decide whether they should become sandbox skills, agent workflows, or human-reviewed tasks.
