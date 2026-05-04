---
name: pl-workflow-handoff-review
description: 檢查 PL parser 成功後 downstream workflow 是否真的可操作。Use when PL/CI parsing looks successful but devanning, dispatch, inventory, or invoice workflow is still blocked.
---

# PL Workflow Handoff Review

## 使用時機

當 PL 解析看起來成功，但 operator 仍無法進入 devanning、dispatch、inventory allocation 或 invoice send 流程時使用。

## 檢查鏈路

1. Pre-alert 是否存在。
2. PL Sheet 1/2 是否清楚。
3. Container status 是否從 PRE_ALERT 推進。
4. Devanning sheet 是否從 DRAFT 推進到可審核狀態。
5. 是否建立 pre-dispatch snapshot。
6. PREVIEW inventory 是否只作 planning，不可 shipping allocation。
7. Finance invoice gate 是否能處理 sparse line items。

## 輸出

- workflow state report。
- blocking reason。
- next repair action。
- operator-facing explanation。

## English Summary

Verify the full PL-to-operations handoff, not just parser success.
