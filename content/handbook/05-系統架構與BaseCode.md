# 系統架構與 Base Code

## VEGO Base Code 原則

1. 先設計資料模型，不先追漂亮畫面。
2. 每個狀態轉換都要能追蹤：誰改、何時改、為什麼改。
3. 外部 API 先用 mock adapter，流程穩定後再接真系統。
4. 不讓 AI 直接連正式資料庫。
5. 關鍵規則必須有測試。

## Logistics Exception MVP

核心資料流：

```text
shipment -> exception -> severity -> action plan -> customer draft -> review -> close
```

## English Summary

Good base code starts from data flow, traceable state changes, mock adapters, and acceptance tests.
