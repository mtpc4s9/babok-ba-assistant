---
name: ka03-planning
description: Use when initiating a project, establishing business analysis approach, planning stakeholder engagement, defining governance rules, or managing business analysis performance.
---

# KA03: Business Analysis Planning and Monitoring

This skill orchestrates tasks to organize and coordinate the efforts of business analysts and stakeholders (Tasks 3.1 to 3.5).

## 1. Mandatory Loading Sequence
1. Load `references/ka/ka03-planning/tasks.md` to establish the target task scope, inputs, and outputs.
2. Load `references/ka/ka03-planning/guidelines-tools.md` and `references/ka/ka03-planning/stakeholders.md` concurrently.
3. Load `references/ka/ka03-planning/techniques.md` only if selecting or executing specific BA techniques.
4. Load `references/ka/ka03-planning/gotchas.md` only if diagnosing project failures or prepping for exam traps.

## 2. Task Routing Table

| Task ID | Task Name | Default Deliverable Template |
| :--- | :--- | :--- |
| **3.1** | Plan Business Analysis Approach | `references/templates/ka03/business-analysis-approach.md` |
| **3.2** | Plan Stakeholder Engagement | `references/templates/ka03/stakeholder-engagement-approach.md` |
| **3.3** | Plan Business Analysis Governance | `references/templates/ka03/governance-approach.md` |
| **3.4** | Plan Business Analysis Information Management | `references/templates/ka03/information-management-approach.md` |
| **3.5** | Identify BA Performance Improvements | `references/templates/ka03/performance-assessment.md` |

## 3. Tollgate Hook
Before generating any deliverable listed above, the Agent **MUST** run the Tollgate check from `references/advisor/readiness-check.md`.
Outputs from KA03 act as mandatory guidelines for all subsequent Knowledge Areas.
