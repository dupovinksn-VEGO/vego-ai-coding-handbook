---
name: prompt-quality-review
description: 在交給 AI 實作前檢查 Prompt 是否具備 Goal、Context、Constraints、Done when。
---

# Prompt Quality Review

## 檢查項目

1. Goal 是否一句話說清楚？
2. Context 是否包含業務規則、資料欄位、錯誤訊息、現有檔案？
3. Constraints 是否說明不能改什麼、不能碰什麼資料？
4. Done when 是否有可驗證輸出？
5. 是否要求先讀 repo、再規劃、再改 code？

## 輸出格式

- Pass / Needs revision
- 缺少的上下文
- 建議改寫版 Prompt

## English Summary

Review prompts before implementation so AI coding starts with clear scope and acceptance criteria.
