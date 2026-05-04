---
name: pressure-test-before-done
description: 每完成一個 coding 段落後使用，要求執行可證明的驗證、壓力測試與明顯 bug 修復。
---

# Pressure Test Before Done

## 使用時機

在任何功能、bug fix、頁面或自動化流程完成後使用。

## 執行要求

1. 明確列出本段 coding 改動範圍。
2. 執行可用的 typecheck、build、lint、unit test 或 smoke test。
3. 對客戶可見頁面檢查手機與桌面版是否可用。
4. 對錯誤狀態做最少一個負向測試。
5. 發現明顯 bug 立即修復，不把 crash 留給使用者。

## English Summary

Run concrete verification after every coding segment before claiming completion.
