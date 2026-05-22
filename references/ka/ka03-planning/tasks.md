---
description: Task definitions for KA03 Business Analysis Planning and Monitoring (Tasks 3.1-3.5) including Purpose, Inputs, Outputs, and template mapping for artifact generation.
---

# KA03: Business Analysis Planning and Monitoring — Tasks Reference

> **🤖 AI AGENT INSTRUCTION (WORKFLOW EXECUTION):**
> You MUST execute `references/advisor/readiness-check.md` before generating any Output.
> Guidelines and Stakeholders for these tasks are managed entirely by `guidelines-tools.md` and `stakeholders.md` within this folder. NEVER infer or hallucinate them.
> If the Tollgate passes, load the explicitly mapped template below to generate the deliverable.
>
> **📋 TEMPLATE DESIGN NOTE:** Each Output maps to a single, atomic template file named after the BABOK canonical output. Fill one template at a time using the specific file path provided.

---

## Task 3.1: Plan Business Analysis Approach
*   **Purpose:** To define an appropriate method to conduct business analysis activities (e.g., Predictive vs. Adaptive).
*   **Inputs:** Needs.
*   **Outputs:**
    *   **Business Analysis Approach** → Use `references/templates/ka03/business-analysis-approach.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Establishes the methodology, formality, and timing of BA work.
    *   *Exam Trap:* Do not confuse this with a Project Management Plan. The BA Approach only covers Business Analysis activities, not the entire project Work Breakdown Structure (WBS).

## Task 3.2: Plan Stakeholder Engagement
*   **Purpose:** To plan an approach for establishing and maintaining effective working relationships with the stakeholders.
*   **Inputs:** Needs, Business Analysis Approach.
*   **Outputs:**
    *   **Stakeholder Engagement Approach** → Use `references/templates/ka03/stakeholder-engagement-approach.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Stakeholder analysis (attitudes, authority), collaboration, and communication needs.
    *   *Exam Trap:* Distinguish between *Collaboration* (working together dynamically) and *Communication* (packaging and pushing information).

## Task 3.3: Plan Business Analysis Governance
*   **Purpose:** To define how decisions are made about requirements and designs, including reviews, change control, approvals, and prioritization.
*   **Inputs:** Business Analysis Approach, Stakeholder Engagement Approach.
*   **Outputs:**
    *   **Governance Approach** → Use `references/templates/ka03/governance-approach.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Decision-making frameworks, escalation paths, and the strict Change Control Process.
    *   *Exam Trap:* "Approvals" do not necessarily mean sign-off by everyone; it means agreement by those explicitly identified with *decision-making authority*.

## Task 3.4: Plan Business Analysis Information Management
*   **Purpose:** To develop an approach for how business analysis information will be stored and accessed.
*   **Inputs:** Business Analysis Approach, Governance Approach, Stakeholder Engagement Approach.
*   **Outputs:**
    *   **Information Management Approach** → Use `references/templates/ka03/information-management-approach.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Traceability, level of abstraction, requirement attributes, storage (C.R.U.D), and requirements reuse.
    *   *Exam Trap:* Information management covers *all* BA information (elicitation results, models, meeting notes), not just formal "requirements".

## Task 3.5: Identify Business Analysis Performance Improvements
*   **Purpose:** To assess business analysis work and to plan to improve processes where required.
*   **Inputs:** Business Analysis Approach, Performance Objectives (external).
*   **Outputs:**
    *   **Business Analysis Performance Assessment** → Use `references/templates/ka03/business-analysis-performance-assessment.md`
*   **Notes & CBAP Traps:**
    *   *Core Focus:* Analyzing metrics to recommend Preventive, Corrective, or Improvement actions.
    *   *Exam Trap:* This task strictly evaluates the performance of the *BA process and team itself*. It does NOT evaluate the performance of the delivered software/solution (which belongs to KA08: Solution Evaluation).