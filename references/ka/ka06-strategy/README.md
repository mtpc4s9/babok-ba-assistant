---
description: Entry point for KA06 Strategy Analysis. Provides strategic context, task list (6.1-6.4), and file navigation for the AI Agent.
---

# KA06: Strategy Analysis

> **🤖 AI AGENT INSTRUCTION (DISPATCHER & TOLLGATE HOOK):**
> Use this document to set the strategic context. Strategy Analysis answers the "WHY" before the "WHAT" and "HOW".
> **⚠️ CRITICAL:** Before executing any KA06 task, you MUST run the `readiness-check.md` Tollgate. Note that KA06 outputs (e.g., Solution Scope, Change Strategy) are mandatory *Hidden Dependencies* (Guidelines) for downstream KAs (KA07, KA08).

## Purpose
To collaborate with stakeholders to identify a need of strategic or tactical importance (the business need), enable the enterprise to address that need, and align the resulting strategy for the change with higher- and lower-level strategies.

## List of 04 Tasks
1. **6.1 Analyze Current State:** Understands the business need and how it relates to the way the enterprise functions today. Sets the baseline.
2. **6.2 Define Future State:** Defines goals and objectives that demonstrate the business need has been satisfied and defines what parts of the enterprise need to change.
3. **6.3 Assess Risks:** Understands the uncertainties around the change, considers their effect on value delivery, and recommends mitigation actions.
4. **6.4 Define Change Strategy:** Performs a gap analysis, assesses options, and recommends the highest value approach to reach the future state, including transition states.

## When to Use This KA
* **Pre-Project / Feasibility:** When justifying a business case, evaluating a new market opportunity, or deciding whether a project should even begin.
* **Scope Creep / Pivot:** When the business environment changes drastically and the current project trajectory no longer aligns with organizational goals.
* **Gap Analysis:** When stakeholders know where they are and where they want to be, but need a Change Strategy to get there.

## 📂 Files in This Folder
| File | Role | When to Load |
| :--- | :--- | :--- |
| `README.md` | This file. Strategic context and entry point. | **Always load first.** |
| `tasks.md` | Task definitions: Purpose, Inputs, Outputs, template mapping. | Load when executing or planning a specific task. |
| `guidelines-tools.md` | Pre-flight checklist: required Guidelines and Tools per task. | **Load alongside `tasks.md`** — mandatory before generating any artifact. |
| `stakeholders.md` | Stakeholder verification: Must Have, Should Have, Approval Authority per task. | **Load alongside `tasks.md`** — mandatory before engaging stakeholders or generating any artifact. |
| `techniques.md` | Technique selection: which techniques apply to each task and why. | Load only if the user asks HOW to perform a task or WHICH technique to use. |
| `gotchas.md` | Common errors, CBAP exam traps, and anti-patterns specific to KA06. | Load only if the user asks about risks, pitfalls, or exam preparation. |