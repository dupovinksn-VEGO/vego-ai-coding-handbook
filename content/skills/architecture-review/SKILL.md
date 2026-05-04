---
name: architecture-review
description: 在新項目開工前審查資料流、狀態流、API、權限、測試與風險。
---

# Architecture Review

## 檢查項目

1. 核心資料模型是否清楚？
2. 狀態轉換是否可追蹤？
3. API 是否有錯誤處理與權限邊界？
4. 外部系統是否先 mock？
5. 上線前需要哪些測試？
6. 哪些地方可能造成客戶資料外洩或流程 crash？

## English Summary

Review architecture before coding to reduce workflow, permission, and data risks.
