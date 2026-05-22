---
description: Template for generating the Change Strategy describing the approach the enterprise will follow to transition from the current state to the future state, including alternative options, justifications, and transition states (BABOK Task 6.4).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology (e.g., *Transition States, Enterprise Readiness, Gap Analysis, Alternative Strategies, Opportunity Cost, Sunk Cost*). Focus on strategic approach, not project task schedules.
> - **Economic Rigor:** When evaluating alternatives, you MUST consider the *Opportunity Cost* (the value of the next best alternative given up). You MUST completely ignore *Sunk Costs* (past investments that cannot be recovered and should not influence future decisions).
> - **Mandatory "Do Nothing" Option:** In the alternative evaluation, you MUST always include and assess the "Do Nothing" (status quo) option as the baseline alternative to establish the business case contrast.
> - **Transition States:** Clearly define interim/transition states if the Future State cannot be achieved in a single deployment. Highlight how value is incrementally realized at each step.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., missing specific risk assessments, unquantified gap metrics, or undefined legacy operational baselines), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# CHANGE STRATEGY

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 1, 2, 3
*   [ ] **[Primary Input]** `Future State Description` (Task 6.2) -> Crucial for Section 2, 3, 5
*   [ ] **[Primary Input]** `Risk Analysis Results` (Task 6.3) -> Crucial for Section 3, 4
*   [ ] **[Primary Input]** `Potential Value` (Task 6.2) -> Crucial for Section 3, 4

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Enterprise Readiness Assessment** | Cultural readiness notes, operational constraints, staffing and skill level baselines | `Current State Description` (Section 1 & 4) / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Gap Analysis** | Mapped differences between current state capabilities and future state capabilities | `Current State Description` (Section 2) / `Future State Description` (Section 2) | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Alternative Strategies Evaluated** | Commercial options, vendor responses, alternative rollout strategies, risk results | `Future State Description` (Section 4) / `Risk Analysis Results` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Recommended Change Strategy** | Selected strategic approach, estimated future investments, strategic rationale | `Potential Value` / `Risk Analysis Results` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 5: Transition States & Release Planning** | Phased deployment approach, interim workarounds, step-by-step value milestones | `Future State Description` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Enterprise Readiness Assessment
> **🤖 AI AGENT INSTRUCTION:** Evaluate the enterprise's ability to successfully adopt, absorb, and sustain the proposed change based on the Current State Description. Focus on structural, cultural, and operational readiness.

*   **Cultural Readiness:** [INSERT: Cultural Readiness Narrative | Assessment of stakeholder attitudes, perceived resistance, historical change adoption success, and executive alignment | Current State Description (Section 1)]
*   **Operational Readiness:** [INSERT: Operational Capacity Narrative | Assessment of current staff availability, operational skill gaps, and active organizational priorities that could conflict with this change | Current State Description (Section 2)]

## 2. Gap Analysis
> **🤖 AI AGENT INSTRUCTION:** Identify the differences between the Current State and the Future State capabilities. Specify the functional, technical, operational, or policy gaps that must be bridged by the change strategy.

*   **Missing Capabilities:** [INSERT: Capability Gap List | The specific capabilities, process flows, or software systems present in the Future State but completely absent or severely deficient in the Current State | Current State Description (Section 2) vs Future State Description (Section 2)]
*   **Capability Alignment:** [INSERT: Alignment Narrative | Overview of how the proposed change strategy will target and eliminate these specific gaps | Future State Description (Section 2)]

## 3. Alternative Change Strategies Evaluated
> **🤖 AI AGENT INSTRUCTION:** Evaluate alternative approaches to bridge the identified gaps. You MUST evaluate at least three options, including the "Do Nothing" status quo option as a baseline. For each alternative, assess the pros/cons, high-level feasibility, and Opportunity Cost.

*   **Option A: Do Nothing (Maintain Status Quo)**
    *   *Strategic Pros & Cons:* [INSERT: Pros & Cons | e.g., "Pros: Zero upfront capital cost, no cultural disruption. Cons: Ongoing 20% registration leakage, cumulative opex losses of $1.2M over 3 years"] | Current State Description (Section 2)]
    *   *Opportunity Cost:* [INSERT: Opportunity Cost | e.g., "Failure to realize the $1.5M in automated process efficiencies and risk of market share loss to competitors"] | Potential Value (Section 3)]
*   **Option B: [INSERT: Option Title | e.g., "Custom In-House Microservices Development" | Elicitation Results (confirmed)]**
    *   *Strategic Pros & Cons:* [INSERT: Pros & Cons | e.g., "Pros: 100% customized to internal workflows, zero third-party license fees. Cons: Extremely high development risk, 18-month time-to-value"] | Elicitation Results (confirmed)]
    *   *Opportunity Cost:* [INSERT: Opportunity Cost | e.g., "Staff resources tied up for 18 months, preventing work on other core systems"] | Potential Value (Section 3)]
*   **Option C: [INSERT: Option Title | e.g., "Commercial Off-the-Shelf (COTS) SaaS Integration" | Elicitation Results (confirmed)]**
    *   *Strategic Pros & Cons:* [INSERT: Pros & Cons | e.g., "Pros: Rapid 4-month deployment, vendor-managed security compliance. Cons: High ongoing annual license opex, requires operational alignment to vendor processes"] | Elicitation Results (confirmed)]
    *   *Opportunity Cost:* [INSERT: Opportunity Cost | e.g., "Loss of custom process flexibility and ongoing dependence on vendor product roadmaps"] | Potential Value (Section 3)]

## 4. Recommended Change Strategy
> **🤖 AI AGENT INSTRUCTION:** Document the selected strategy and justify why it represents the highest net value to the enterprise compared to the alternatives. List estimated future investment, ignoring all sunk costs.

*   **Selected Approach:** [INSERT: Approach Statement | Clear description of the recommended strategy (e.g., Option C: COTS SaaS Integration, deployed via a phased subsidiary rollout) | Strategy Workshop Decisions]
*   **Strategic Justification:** [INSERT: Rationale Narrative | Rationale justifying the selected approach, referencing the Potential Value (Section 3) and Risk Analysis Results | Risk Analysis Results / Potential Value]
*   **Estimated Investment:** [INSERT: Investment Narrative | Future financial, operational, and staffing resources required to execute the strategy (Capex & Opex) | Potential Value (Section 2)]

## 5. Transition States and Release Planning
> **🤖 AI AGENT INSTRUCTION:** If the Future State cannot be achieved in a single deployment, define the logical phases (Transition States) required to reach the target environment. Explain how business value is incrementally delivered and how risks are managed at each stage.

*   **Transition State 1:** [INSERT: Phase 1 Title & Description | e.g., "Phase 1: Rollout core registration SaaS module to retail digital channel customers only" | Elicitation Results (confirmed)] - *Expected Value Realized:* [INSERT: Incremental Value | e.g., "Realize 60% of registration error reductions and secure initial customer feedback within 4 months"] | Potential Value]
*   **Transition State 2:** [INSERT: Phase 2 Title & Description | e.g., "Phase 2: Integrate SaaS platform with legacy backend systems and rollout to corporate channels" | Elicitation Results (confirmed)] - *Expected Value Realized:* [INSERT: Incremental Value | e.g., "Achieve full straight-through processing capability, completing the Future State Vision"] | Potential Value]