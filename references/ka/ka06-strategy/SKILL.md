---
name: ka06-strategy
description: Use when analyzing current state, defining enterprise future state, assessing change risks, or developing a comprehensive change strategy.
---

# KA06: Strategy Analysis

This skill orchestrates tasks to identify business needs of strategic importance, align change strategy, and define goals (Tasks 6.1 to 6.4).

## 1. Mandatory Loading Sequence
1. Load `references/ka/ka06-strategy/tasks.md` to establish the target task scope, inputs, and outputs.
2. Load `references/ka/ka06-strategy/guidelines-tools.md` and `references/ka/ka06-strategy/stakeholders.md` concurrently.
3. Load `references/ka/ka06-strategy/techniques.md` only if selecting or executing specific strategic analysis techniques.
4. Load `references/ka/ka06-strategy/gotchas.md` only if diagnosing strategic pitfalls or prepping for exams.

## 2. Task Routing Table

| Task ID | Task Name | Default Deliverable Template |
| :--- | :--- | :--- |
| **6.1** | Analyze Current State | `references/templates/ka06/current-state-analysis.md` |
| **6.2** | Define Future State | `references/templates/ka06/future-state-definition.md` |
| **6.3** | Assess Risks | `references/templates/ka06/risk-assessment-report.md` |
| **6.4** | Define Change Strategy | `references/templates/ka06/change-strategy.md` |

## 3. Tollgate Hook
Before generating strategic deliverables, you **MUST** run the Tollgate check from `references/advisor/readiness-check.md`.
KA06 outputs (e.g., Solution Scope, Change Strategy) act as mandatory guidelines for downstream requirements modeling (KA07) and evaluation (KA08).
