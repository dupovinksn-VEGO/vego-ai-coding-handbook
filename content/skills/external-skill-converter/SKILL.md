---
name: external-skill-converter
description: 將外部文章、GitHub repo 或安裝命令提到的 Skill 轉成 VEGO 可審核、可收藏、可應用的 Skill 卡與 SKILL.md。
---

# External Skill Converter

## 使用時機

當使用者提供文章、GitHub repo、Skill 安裝命令或工具清單時使用。

## 流程

1. 抽取 Skill 名稱、作者、來源、用途、安裝方式。
2. 讀取 README、SKILL.md、package、license 與 release。
3. 標記風險：shell、網路請求、token、刪檔、資料外傳、授權限制。
4. 生成繁中主體、英文摘要、適用場景、測試案例。
5. 先放入 Sandbox Review，等待人工批准。

## English Summary

Convert external skill sources into reviewed VEGO-ready skill cards and Markdown skills.
