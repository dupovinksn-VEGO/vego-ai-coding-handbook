---
name: robotics-workflow-bridge
description: 將倉庫現場任務、WMS 狀態、掃碼設備、AMR 或視覺檢查轉成可驗收的機器人協作流程。Use when bridging warehouse operations and robotics.
risk: medium
---

# Robotics Workflow Bridge

## 使用時機

當 VEGO 想把倉庫作業、掃碼、盤點、揀貨、AMR 搬運、視覺檢查或稱重尺寸量測納入智能體與自動化流程時使用。

## 輸入

- 現場任務描述。
- WMS 或 TMS 狀態。
- 設備類型：掃碼槍、RFID、AMR、相機、稱重台、尺寸量測設備。
- 成功與失敗條件。
- 人工接管流程。

## 輸出

- 現場任務到系統狀態的映射。
- 設備事件與資料欄位。
- 機器人或設備可做、不可做的範圍。
- 安全停止條件。
- 人工接管與異常回報流程。
- Sandbox 驗收案例。

## 執行步驟

1. 定義現場任務的開始、完成、失敗與取消狀態。
2. 對應每個狀態需要的資料欄位：位置、SKU、托盤、箱數、重量、照片、責任人。
3. 標記設備可自動產生的事件，以及仍需人工確認的判斷。
4. 設計 WMS/TMS 更新方式與失敗回退。
5. 產出測試場景：正常、缺資料、掃碼錯誤、設備離線、安全停止。

## 安全限制

- 不讓機器人或設備流程覆蓋人工安全判斷。
- 不在缺少定位、責任人或回退方案時自動更新生產狀態。
- 不把現場影像或客戶敏感資訊放入公開知識庫。

## English Summary

Bridge warehouse operations and robotics by mapping physical tasks, device events, WMS states, safety stops, human fallback, and sandbox verification cases.
