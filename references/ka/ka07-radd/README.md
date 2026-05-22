---
description: Entry point for KA07 Requirements Analysis and Design Definition. Provides context, task list (7.1-7.6), iterative workflow logic, and file navigation for the AI Agent.
---

# KA07: Requirements Analysis and Design Definition (RADD)

> **🤖 AI AGENT INSTRUCTION (DISPATCHER & ITERATIVE WORKFLOW):**
> Use this document to set the execution context. KA07 relies heavily on the *Large Document Workflow*.
> 
> **⚠️ CRITICAL ITERATIVE EXECUTION LOOP:** For Tasks 7.1, 7.2, and 7.3, you MUST enforce this causal workflow:
> 1. **Specify (7.1):** Generate atomic requirements into `specified-modelled-requirements.md`.
> 2. **Tollgate Prompt:** At the end of 7.1, proactively ask: *"I have completed this module's specification. Do you want me to run the Quality Audit Report (Tasks 7.2 & 7.3) to ensure there are no ambiguous or out-of-scope items?"*
> 3. **Execute Audit (7.2/7.3):** If YES, load `requirements-quality-audit.md` to independently scan the 7.1 output for BABOK quality characteristics and value alignment.
> 4. **Rework:** Use any [FAIL] results from the audit as direct instructions to update and refine the 7.1 artifact.

---

## Purpose

To structure and organize requirements discovered during elicitation activities, specify and model requirements and designs, validate and verify information, identify solution options, and estimate potential value.

## List of 06 Tasks

1. **7.1 Specify and Model Requirements:** Describes a set of requirements or designs in detail using text, matrices, and diagrams.
2. **7.2 Verify Requirements:** Ensures requirements meet quality standards (e.g., atomic, testable) and are formatted correctly.
3. **7.3 Validate Requirements:** Ensures requirements deliver business value and align with the Solution Scope.
4. **7.4 Define Requirements Architecture:** Structures requirements to ensure they work effectively as a cohesive whole.
5. **7.5 Define Design Options:** Identifies and explores different ways to satisfy the requirements (Create vs. Purchase).
6. **7.6 Analyze Potential Value and Recommend Solution:** Assesses the business value of options and recommends the best solution.

## When to Use This KA

*   **Iterative Design:** When transforming raw elicitation results into structured specifications (e.g., BRD, SRS, FRD).
*   **Quality Assurance:** When checking if written requirements are testable (Verify) and strategically valuable (Validate) before handing them to Developers.
*   **Solution Selection:** When evaluating alternative designs or recommending a final solution option to the Sponsor.

## 📂 Files in This Folder

| File | Role | When to Load |
| :--- | :--- | :--- |
| [README.md](README.md) | Foundational context and entry point. | **Always load first.** |
| [tasks.md](tasks.md) | Task definitions, Inputs, Outputs, and templates. | Load when executing a specific task. |
| [guidelines-tools.md](guidelines-tools.md) | Pre-flight checklist for each task. | **Load alongside tasks.md**. |
| [stakeholders.md](stakeholders.md) | Stakeholder verification and Approval Authority. | **Load alongside tasks.md**. |
| [techniques.md](techniques.md) | Technique selection mapping. | Load if user asks HOW or WHICH technique. |
| [gotchas.md](gotchas.md) | CBAP exam traps and anti-patterns. | Load if user asks about risks or exams. |