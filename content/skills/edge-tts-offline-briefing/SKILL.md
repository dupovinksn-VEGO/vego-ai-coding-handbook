---
name: edge-tts-offline-briefing
description: 將穩定版寶典章節規劃為 Edge TTS 離線 MP3 讀報包，適合飛機、高鐵與弱網環境。Use when creating offline audio briefings from stable handbook chapters.
risk: medium
---

# Edge TTS Offline Briefing

## 使用時機

當某些寶典章節、物流 AGI 路線圖、週報或培訓內容已經穩定，且使用者希望在飛機、高鐵、地鐵或弱網環境離線聆聽時使用。

## 輸入

- 章節標題與 Markdown 內容。
- 目標語言：繁中、英文或雙語。
- 目標長度：完整朗讀、8 分鐘摘要、3 分鐘速聽。
- 檔名規則與保存位置。

## 輸出

- 可轉音檔的乾淨朗讀稿。
- 建議檔名與章節映射表。
- 音檔播放清單。
- 線上朗讀 / 離線音檔切換設計。
- 成本與授權檢查。

## 原則

- 優先使用免費方案：瀏覽器 Web Speech API 或 Microsoft Edge TTS。
- 不使用需要月訂閱的付費 TTS，除非使用者明確批准。
- 只把穩定版內容轉成 MP3，避免章節頻繁更新造成音檔過期。
- 付費或訂閱來源只做合法摘要與原創改寫，不製作未授權全文朗讀音檔。
- 音檔進正式站前先進 Sandbox Review。

## English Summary

Plan stable handbook chapters as offline Edge TTS MP3 briefing packs, with cost control, source review, and online/offline playback mapping.
