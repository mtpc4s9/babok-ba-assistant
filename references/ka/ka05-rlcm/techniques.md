---
description: Technique usage mapping for KA05 Requirements Life Cycle Management (Tasks 5.1-5.5) categorized by Primary and Secondary application.
---

# KA05: Requirements Life Cycle Management - Techniques

> **🤖 AI AGENT INSTRUCTION (3-TIER HYBRID LOOKUP & OVERLOAD PREVENTION):**
> *   **Primary & Common Secondary:** Use the "Used to..." text to explain WHY a technique fits the life cycle context.
> *   **⚠️ OVERLOAD WARNING (10.35, 10.47, 10.48):** Techniques such as *Process Modelling* (10.35), *Use Cases and Scenarios* (10.47), and *User Stories* (10.48) are complex Deep-Dive skills stored in heavy sub-folders. When executing KA05 tasks (Trace & Maintain), you are ONLY managing their metadata (IDs, Status, Reuse potential). You MUST NOT load their deep-dive folders or attempt to draw new models here. Use `references/techniques/quick-reference.md` for their definitions instead.
> *   **Diagnostic:** If the user asks "How should we rank these requirements?" or "How do we get sign-off?", load `references/techniques/by-situation.md` to map the symptom to the correct technique.

---

## Tasks 5.1, 5.2, and 5.3: Unified Matrix Generation (Trace, Maintain, Prioritize)
> **🤖 AI AGENT INSTRUCTION:** Because these tasks are executed concurrently to build the RTM, BRM, FRM, and NFRM, their techniques are evaluated holistically.

*   **Primary Prioritization Techniques (Task 5.3):**
    *   **Prioritization (10.33):** Used to facilitate the process of ranking requirements based on Value, Risk, or Cost.
    *   **Backlog Management (10.2):** Used to sequence the requirements; often the physical location where prioritization is maintained.
    *   **Financial Analysis (10.20):** Used to assess the financial value of a set of requirements and how the delivery schedule impacts ROI.
*   **Primary Traceability & Maintenance Techniques (Tasks 5.1, 5.2):**
    *   **Business Rules Analysis (10.9):** Used to trace business rules to the requirements they support, and identify rules for enterprise-wide reuse.
    *   **Functional Decomposition (10.22):** Used to break down solution scope into smaller components for allocation and backward/forward tracing.
*   **Secondary (Metadata Only - Do NOT trigger deep-dive generation):**
    *   **Process Modelling (10.35), Use Cases and Scenarios (10.47), User Stories (10.48):** Used purely to identify which existing system models or functional components are available for reuse, or to trace a requirement to a specific future state process step.
*   **Other Secondary:** Business Cases, Data Dictionary, Data Flow Diagrams, Data Modelling, Decision Analysis, Document Analysis, Estimation, Interviews, Item Tracking, Risk Analysis and Management, Scope Modelling, Workshops.

---

## Task 5.4: Assess Requirements Changes
> **🤖 AI AGENT INSTRUCTION:** Focuses on Impact Analysis (Benefit, Cost, Schedule, Impact, Urgency).

*   **Primary:**
    *   **Decision Analysis (10.16):** Used to facilitate the change assessment process and compare the trade-offs of Approving vs. Denying the change.
    *   **Financial Analysis (10.20):** Used to estimate the financial consequences (costs, rework, and opportunity costs) of a proposed change.
    *   **Risk Analysis and Management (10.38):** Used to determine the level of risk associated with injecting the change into the current baseline.
*   **Common Secondary:**
    *   **Interface Analysis (10.24):** Used to help business analysts identify system interfaces that will be broken or affected by the change (Ripple Effect).
    *   **Estimation (10.19):** Used to determine the size and schedule impact of the change.
*   **Other Secondary:** Business Cases, Business Rules Analysis, Document Analysis, Interviews, Item Tracking, Workshops.

---

## Task 5.5: Approve Requirements
> **🤖 AI AGENT INSTRUCTION:** Focuses on gaining consensus and securing formal sign-off.

*   **Primary:**
    *   **Reviews (10.37):** Used to formally evaluate requirements (e.g., via Inspections or Walkthroughs) with stakeholders before requesting signatures.
    *   **Workshops (10.50):** Used to facilitate conflict resolution and obtain approval from a diverse group of stakeholders in a single session.
    *   **Acceptance and Evaluation Criteria (10.1):** Used to define the exact approval criteria that the requirements must meet to satisfy the Sponsor.
*   **Common Secondary:**
    *   **Item Tracking (10.26):** Used to track issues, conditions, or reservations identified by stakeholders during the agreement/sign-off process.
    *   **Decision Analysis (10.16):** Used to resolve specific stakeholder issues and gain agreement when opinions conflict.
