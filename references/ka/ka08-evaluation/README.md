---
description: Entry point for KA08 Solution Evaluation. Provides strategic context, task list (8.1-8.5), and dynamic routing instructions for the AI Agent to measure, diagnose, and recommend actions.
---

# KA08: Solution Evaluation

> **🤖 AI AGENT INSTRUCTION (DISPATCHER & TOLLGATE HOOK):** 
> Use this document to set the evaluation context. Solution Evaluation is the only KA that interacts with an *Implemented Solution (external)*. 
> **⚠️ CRITICAL:** Before executing any KA08 task, you MUST run the `readiness-check.md` Tollgate. Do NOT hallucinate performance metrics or corporate culture. If you lack real-world data, you MUST trigger an AI-to-User Elicitation Interview via `elicitation-interview-playbook.md`.

## Purpose
To assess the performance of and value delivered by a solution in use by the enterprise, and to recommend removal of barriers or constraints that prevent the full realization of the value.

## Task List & Dynamic Routing (AI Agent Instructions)
> **🤖 AI AGENT INSTRUCTION:** Read the user's request carefully and route to the correct output template based on these exact rules:
> 
> 1. **Task 8.1 Measure Solution Performance:**
>    * **Purpose:** Collects raw data to evaluate solution effectiveness.
>    * **Routing:** Load `solution-performance-measures.md`. *Hook:* If the user provides no raw data, launch the Elicitation Interview Playbook (Domain E: Governance & Metrics) to get sample sizes and actuals.
> 
> 2. **Task 8.2 Analyze Performance Measures:**
>    * **Purpose:** Synthesizes raw data from 8.1 to extract insights (Variances, Trends, Risks).
>    * **Routing:** Load `solution-performance-analysis.md`. You MUST calculate the variance between Target and Actual.
> 
> 3. **Task 8.3 Assess Solution Limitations:**
>    * **Purpose:** Investigates internal system defects or technical bottlenecks.
>    * **Routing:** Load `solution-limitations-assessment.md`. *Boundary Rule:* Only document internal software/hardware issues here. 
> 
> 4. **Task 8.4 Assess Enterprise Limitations:**
>    * **Purpose:** Investigates external barriers (Culture, Operations, Org Structure).
>    * **Routing:** Load `enterprise-limitations-assessment.md`. *Hook:* If the organizational context is missing, launch the Elicitation Interview Playbook (Domain A & C) to interview the user about corporate culture and stakeholder readiness.
> 
> 5. **Task 8.5 Recommend Actions to Increase Solution Value:**
>    * **Purpose:** Identifies actionable steps (Do Nothing, Retire, Organizational Change) to close the value gap.
>    * **Routing:** Load `recommended-actions.md`. *Rule:* Explicitly exclude Sunk Costs from the rationale.
>    * **Executive Presentation Routing:** If the user explicitly asks to present this to the BoD or C-Level, load `executive-recommendation-pitch.md` to map the recommendation into a PPTX-ready format.

## When to Use This KA
* **Post-Deployment Audit:** 3 to 6 months after Go-Live to verify if the business case ROI is being realized.
* **Pilot / Proof of Concept Evaluation:** During a Beta release to decide whether to scale the solution or kill it.
* **Legacy System Review:** When an existing system is becoming expensive to maintain and you need data to justify "Retiring the Solution".
* **Low Adoption Rate:** When a technically perfect system is deployed, but end-users refuse to use it (Trigger 8.4 Enterprise Limitations).

## 📂 Files in This Folder
| File | Role | When to Load |
| :--- | :--- | :--- |
| [README.md](README.md) | This file. Central dispatcher and context. | **Always load first.** |
| [tasks.md](tasks.md) | Task definitions: Purpose, Inputs, Outputs. | Load when executing or planning a specific task. |
| [guidelines-tools.md](guidelines-tools.md) | Pre-flight checklist: required Guidelines and Tools. | **Load alongside tasks.md** — mandatory before generating any artifact. |
| [stakeholders.md](stakeholders.md) | Defines Must Have, Should Have, Approval Authority. | **Load alongside tasks.md** — mandatory before engaging stakeholders. |
| [techniques.md](techniques.md) | Technique selection (e.g., Data Mining, Root Cause Analysis). | Load only if the user asks HOW to perform a task. |
| [gotchas.md](gotchas.md) | CBAP exam traps and common evaluation anti-patterns. | Load only if the user asks about risks, pitfalls, or exam prep. |
