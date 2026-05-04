---
name: logistics-article-classifier
description: 將物流 AI、AI Agent、WMS/TMS、倉庫自動化、Control Tower、關務合規文章轉成 VEGO 智庫分類卡。Use when classifying articles for the VEGO AI Logistics Knowledge Base.
risk: low
---

# Logistics Article Classifier

## 使用時機

當使用者提供物流、供應鏈、AI Agent、WMS/TMS、倉庫自動化、Control Tower、Customs Compliance 或 VEGO OPS 相關文章時使用。

## 輸入

- Article title
- Source and URL
- Article content or summary
- Intended VEGO use case

## 輸出

- AI Layer：Knowledge、Automation、Agents、Robotics、Control Tower、Safety
- Logistics Line：Inbound、Warehouse、Outbound、Customs、Customer、Finance
- VEGO Priority：A、B、C、D
- Review Status：Sandbox、Reviewed、Approved、Converted to SOP、Converted to Skill、Converted to Agent、Connected to VEGO OPS Feature
- Risk Level：low-risk-reading、sandbox-only、human-approval-required、customs-sensitive、payment-sensitive、customer-promise-sensitive、production-write-sensitive
- Tags
- Summary zh/en
- VEGO Insight
- Possible SOP / Skill / Agent / OPS Feature

## 判斷原則

- 關務、付款、對客承諾、生產寫入一律標記需要人審。
- 一篇文章可以同時屬於多個 AI Layer 與 Logistics Line。
- 不複製一篇文章成多份，使用 frontmatter 做多分類。
- Priority A 代表可直接轉成 VEGO OPS 功能；B 代表可轉 SOP / Training；C 只作趨勢觀察；D 暫存。

## English Summary

Classify logistics AI articles into VEGO's AI layers, logistics business lines, priorities, risk levels, review status, and possible OPS feature paths.
