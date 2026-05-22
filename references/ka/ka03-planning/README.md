---
description: Entry point for KA03 Business Analysis Planning and Monitoring. Provides planning context, task list (3.1-3.5), and file navigation for the AI Agent.
---

# KA03: Business Analysis Planning and Monitoring

> **🤖 AI AGENT INSTRUCTION (DISPATCHER & TOLLGATE HOOK):**
> Use this document to set the foundational planning context. KA03 establishes the "contract" for how Business Analysis work will be executed, governed, and measured.
> **⚠️ CRITICAL:** Before executing any KA03 task, you MUST run the `readiness-check.md` Tollgate. KA03 outputs are mandatory *Hidden Dependencies* (Guidelines) for almost all other tasks in the BABOK Guide.

## Purpose
To organize and coordinate the efforts of business analysts and stakeholders. These tasks produce outputs that are used as key guidelines for the other tasks throughout the BABOK® Guide.

## List of 05 Tasks
1. **3.1 Plan Business Analysis Approach:** Defines the overall method, activities, and timing for BA work (e.g., Predictive vs. Adaptive).
2. **3.2 Plan Stakeholder Engagement:** Determines who is relevant to the change, their characteristics, and the best way to collaborate and communicate.
3. **3.3 Plan Business Analysis Governance:** Defines how decisions are made, including reviews, change control, approvals, and prioritization.
4. **3.4 Plan Business Analysis Information Management:** Defines how BA information is captured, stored, traced, and accessed for long-term use.
5. **3.5 Identify Business Analysis Performance Improvements:** Assesses how BA work is performed to ensure commitments are met and plans necessary preventive or corrective actions.

## When to Use This KA
* **Initiation Phase:** At the very beginning of a project to establish the BA methodologies, templates, and stakeholder rules of engagement.
* **Methodology Shift:** When transitioning the enterprise or team from one approach to another (e.g., Waterfall to Agile).
* **Performance / Governance Issues:** When stakeholders are disengaged, scope creep is rampant (requires governance), or the BA team needs to optimize its internal processes.

## 📂 Files in This Folder
| File | Role | When to Load |
| :--- | :--- | :--- |
| `README.md` | This file. Foundational context and entry point. | **Always load first.** |
| `tasks.md` | Task definitions: Purpose, Inputs, Outputs, template mapping. | Load when executing or planning a specific task. |
| `guidelines-tools.md` | Pre-flight checklist: required Guidelines and Tools. | **Load alongside tasks.md** — mandatory before generating. |
| `stakeholders.md` | Stakeholder verification: Must Have, Should Have, Approvers. | **Load alongside tasks.md** — mandatory before engaging. |
| `techniques.md` | Technique selection: which techniques apply and why. | Load only if the user asks HOW to perform or WHICH technique. |
| `gotchas.md` | Common errors, CBAP exam traps, and anti-patterns. | Load only if the user asks about risks, pitfalls, or exams. |