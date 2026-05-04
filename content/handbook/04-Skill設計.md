# Skill 設計

Prompt 是一次性指令；Skill 是可重複使用的 SOP。VEGO 的核心不是收藏很多 Skill，而是把真正能提高交付品質的流程變成可測、可審核、可套用的 Skill。

## 什麼任務適合做成 Skill

- 每週或每月重複做的任務。
- 有固定檢查清單的任務。
- 容易因人而異造成品質不穩的任務。
- 需要安全邊界與驗收規則的任務。
- 新項目經常會重複踩坑的任務。

## 一個 VEGO Skill 必須回答五個問題

1. 什麼時候使用？
2. 需要什麼輸入？
3. 應該產出什麼？
4. 有哪些安全限制？
5. 怎麼驗證它真的有用？

## SKILL.md 標準骨架

```markdown
---
name: skill-name
description: 什麼情境下必須使用這個 Skill。
---

# Skill Name

## 使用時機

描述觸發條件。

## 輸入

- 必要資料
- 可選資料
- 不應提供的敏感資料

## 流程

1. 讀上下文。
2. 找到核心問題。
3. 產出草稿或方案。
4. 驗證。

## 輸出

- 交付物
- 檔案位置
- 風險提醒

## 安全限制

- 不做什麼
- 何時需要人工確認

## 測試案例

- 案例 1
- 案例 2
```

## VEGO 優先建立的 Skills

- `prompt-quality-review`
- `architecture-review`
- `base-code-generator`
- `pressure-test-before-done`
- `customer-friendly-ui-review`
- `logistics-exception-management`
- `external-skill-converter`

## 外部 Skill 轉 VEGO Skill 規則

外部 Skill 不能原封不動進正式庫。必須先：

1. 保存來源與作者。
2. 檢查 license。
3. 標記 shell、npm、網路請求、token、上傳、刪除風險。
4. 改寫成 VEGO 用語與繁中說明。
5. 補上英文摘要。
6. 加入測試案例。
7. 經過 Sandbox Review。

## English Summary

Skills turn repeatable operating knowledge into reusable instructions, tests, and safety boundaries.
