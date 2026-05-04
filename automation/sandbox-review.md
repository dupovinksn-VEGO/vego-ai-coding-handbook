# Sandbox Review 規則

## 分區

| 區域 | 用途 | 是否正式可用 |
| --- | --- | --- |
| external_pending_review | 從文章、URL、GitHub 抽取的外部 Skill | 否 |
| sandbox | 已轉成 VEGO 格式但尚未批准 | 否 |
| approved | 已審核、可套用於新項目 | 是 |

## 風險分級

低風險：
- 純文字 Prompt / SKILL.md
- 無腳本
- 無外部 API
- 無敏感資料讀取

中風險：
- 需要下載 repo
- 使用 npm package
- 需要網路查詢
- 可能讀取本地文件

高風險：
- 會執行 shell command
- 會上傳、發布或傳輸資料
- 需要 token、API key、登入狀態
- 會刪除或批量修改文件

## 批准標準

1. 有明確 VEGO 使用場景。
2. 有繁中說明與英文摘要。
3. 有至少 2 個測試案例。
4. 風險與限制寫清楚。
5. 不違反資料安全、客戶隱私、商業合規。

## English Summary

Sandbox review separates collected external skills from approved VEGO-ready skills.
