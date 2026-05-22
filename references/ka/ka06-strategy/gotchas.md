---
description: Critical traps and common CBAP misconceptions for KA06 Strategy Analysis (Tasks 6.1-6.4) to be flagged during execution.
---

# KA06: Strategy Analysis - Gotchas & Traps

> **🤖 AI AGENT INSTRUCTION (TRAP DETECTION & FORMATTING):**
> Use this file to detect user misconceptions during strategic planning. When a user's scenario triggers one of these 8 gotchas, you MUST inject the relevant warning into the `⚠️ CBAP Gotcha:` field of your standard response format (defined in `SKILL.md`).

## Top 8 Strategy Analysis Traps

### 1. The "Skip the Current State" Trap (Tollgate Input Failure)
* **The Trap:** Designing a future state without analyzing the current state.
* **BABOK Standard:** Without a Current State Description (baseline), it is impossible to perform a Gap Analysis or measure if the new solution actually delivered value.

### 2. The "Vague Future State" Trap (Task 6.2)
* **The Trap:** Defining the future state with qualitative, untestable statements.
* **BABOK Standard:** The Future State MUST be defined by Business Objectives that are SMART (Specific, Measurable, Achievable, Relevant, Time-bounded).

### 3. Transition State vs. Future State (Task 6.2 vs 6.4)
* **The Trap:** Documenting the release phases inside the Future State Description.
* **BABOK Standard:** The Future State is the final destination. *Transition States* and *Release Planning* belong exclusively to Task 6.4 (Define Change Strategy).

### 4. Project Plan vs. Change Strategy (Task 6.4)
* **The Trap:** Believing the Change Strategy is a Work Breakdown Structure (WBS).
* **BABOK Standard:** A Change Strategy is about the *approach* (e.g., Buy vs. Build). It justifies the strategic direction, not the daily project tasks.

### 5. Sunk Cost Fallacy (Strategic Decision Trap)
* **The Trap:** Recommending to continue a failing initiative because money was already spent.
* **BABOK Standard:** Sunk costs are irrelevant to future action. Decisions must be based ONLY on the future investment required versus the future benefits to be gained.

### 6. Ignoring Opportunity Cost
* **The Trap:** Evaluating a Change Strategy without considering what the enterprise gives up.
* **BABOK Standard:** Opportunity cost (the potential value realized by pursuing alternative courses of action) MUST be factored into the Change Strategy evaluation.

### 7. External Influencers vs. Stakeholders (Task 6.1)
* **The Trap:** Treating competitors or macroeconomic trends as "Stakeholders".
* **BABOK Standard:** Stakeholders have a direct relationship to the change. Competitors are *External Influencers*—they constrain the current state but do not actively participate.

### 8. The "Do Nothing" Blind Spot (Readiness Check Failure)
* **The Trap:** Assuming Strategy Analysis must always recommend building a solution.
* **BABOK Standard:** If risks outweigh benefits, or if the *Enterprise Readiness Assessment* fails, the *most appropriate* Change Strategy is often "Do Nothing".