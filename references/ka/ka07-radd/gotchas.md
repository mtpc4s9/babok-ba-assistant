---
description: Critical traps and common CBAP misconceptions for KA07 Requirements Analysis and Design Definition (Tasks 7.1-7.6) to be flagged during execution.
---

# KA07: Requirements Analysis and Design Definition - Gotchas & Traps

> **🤖 AI AGENT INSTRUCTION (TRAP DETECTION & FORMATTING):**
> Use this file to detect user misconceptions during requirements analysis. When a user's scenario triggers one of these 7 gotchas, you MUST inject the relevant warning into the `⚠️ CBAP Gotcha:` field of your standard response format.

---

## Top 7 Requirements Analysis Traps

### 1. The "Unverifiable Requirement" Trap (Task 7.2)
*   **The Trap:** Writing subjective requirements like "The system must be fast" or "User-friendly interface."
*   **BABOK Standard:** To pass *Verify Requirements*, an item MUST be *Testable* and *Unambiguous* (e.g., "System responds within 2 seconds for 95% of queries").

### 2. Verify vs. Validate Confusion (Tasks 7.2 vs 7.3)
*   **The Trap:** Believing that a perfectly written requirement automatically delivers business value.
*   **BABOK Standard:** *Verify* (7.2) checks syntax and quality (Am I building the thing right?). *Validate* (7.3) checks alignment with Business Objectives (Am I building the right thing?).

### 3. The "Gold-Plating" / Scope Creep Trap (Task 7.3)
*   **The Trap:** The BA or Developer adds "cool" features (like custom UI themes) that no stakeholder explicitly asked for.
*   **BABOK Standard:** Any requirement that does not trace directly back to a *Business Objective* (6.2) and fit within the *Solution Scope* (6.4) MUST be eliminated during Validation.

### 4. Traceability vs. Architecture (Task 5.1 vs Task 7.4)
*   **The Trap:** Submitting a Traceability Matrix when asked for the Requirements Architecture.
*   **BABOK Standard:** Traceability (5.1) only shows the lineage (where a requirement came from). Architecture (7.4) shows how the requirements *interact and work in harmony* as a cohesive whole.

### 5. Premature Solution Selection (Task 7.5)
*   **The Trap:** Recommending a final vendor (e.g., "We should buy Salesforce") while defining design options.
*   **BABOK Standard:** Task 7.5 is strictly for *generating options* and *allocating requirements*. The actual selection and recommendation ONLY happens in Task 7.6.

### 6. The Sunk Cost Fallacy (Task 7.6)
*   **The Trap:** Recommending to proceed with Option A because "we have already spent $100,000 on licenses."
*   **BABOK Standard:** *Sunk Costs* (money already spent and unrecoverable) MUST be ignored. Decisions in 7.6 are based entirely on future *Opportunity Costs* and expected ROI.

### 7. The "BAs Don't Do Design" Myth (KA07 Overview & 11.3)
*   **The Trap:** Thinking BAs only write text-based requirements and leave all design work to the IT team.
*   **BABOK Standard:** BAs DO design (e.g., business processes, screen mockups, report layouts). The output of 7.1 is literally "Requirements (*specified and modelled*)". BAs just do not do *technical/system architecture* design.