# 系統架構與 Base Code

Base Code 的目的不是一次寫出完整系統，而是建立一個新項目能穩定長大的骨架。對物流系統來說，資料流和狀態流比漂亮畫面更重要。

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

## Base Code 應該先有的模組

```text
app/
  dashboard/
  exceptions/
  customers/
  settings/

components/
  status-badge
  error-state
  empty-state
  audit-timeline

lib/
  domain/
    exception-severity
    status-transition
    customer-message-policy
  adapters/
    mock-tms
    mock-wms
  validation/
  audit-log/

tests/
  domain/
  api/
  smoke/
```

## 狀態流設計

物流系統最容易壞在狀態不清楚。每個狀態都要定義：

- 狀態名稱。
- 誰可以改。
- 從哪些狀態可以進來。
- 可以轉去哪裡。
- 需要哪些資料。
- 是否會通知客戶。
- 是否會影響 billing、dispatch、inventory、customs。

範例：

```text
NEW -> TRIAGED -> WAITING_INTERNAL -> CUSTOMER_DRAFT_READY -> CUSTOMER_SENT -> CLOSED
```

## API 合約範例

```text
GET /api/exceptions
POST /api/exceptions/:id/triage
POST /api/exceptions/:id/customer-draft
POST /api/exceptions/:id/close
```

每個 API 都要有：

- success response。
- validation error。
- permission error。
- not found。
- audit log。

## Base Code 驗收清單

- 可以本地啟動。
- 有 mock data。
- 沒有 production secret。
- 有 loading / empty / error state。
- 有至少一條完整 happy path。
- 有至少一條 missing data path。
- 有 build / check 指令。
- README 說清楚怎麼跑。

## English Summary

Good base code starts from data flow, traceable state changes, mock adapters, and acceptance tests.
