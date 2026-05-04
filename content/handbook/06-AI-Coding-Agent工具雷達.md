# AI Coding Agent 工具雷達

AI Coding 工具更新很快，不要迷信單一工具。VEGO 應該建立自己的工具比較機制。

## 判斷清單

- 能否讀懂整個 codebase？
- 能否先研究與規劃，再實作？
- 能否建立 branch、產出 diff、開 PR？
- 能否執行測試、lint、build？
- 能否說明改動、原因與風險？
- 能否整合 GitHub、資料庫、文件、MCP、企業工具？
- 能否設定權限與安全邊界？
- 能否用 evals 比較品質？

## VEGO 評分方式

每個工具用 1 到 5 分評估：

- 規劃品質。
- 程式可靠度。
- 驗證能力。
- 前端客戶體驗。
- 權限與安全。
- 文件與可維護性。
- 成本與速度。

## 不該納入正式流程的情況

- 不能跑測試。
- 不能說明 diff。
- 需要過多權限。
- 會自動執行外部腳本。
- 會把資料傳給不明第三方。

## English Summary

Tool selection should be scored by workflow reliability, verification ability, integrations, and safety boundaries.
