---
description: Template for generating the Future State Description defining the boundaries, new capabilities, modified processes, and overall environment after the change is fully implemented (BABOK Task 6.2).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology. Describe the environment as if the project/change is 100% complete and fully operational. Absolutely NO transition states, release plans, or phases here. Those belong in Task 6.4 (Change Strategy).
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., missing Current State baselines, undefined target business outcomes, or ambiguous strategic boundaries), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# FUTURE STATE DESCRIPTION

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Current State Description` (Task 6.1) -> Crucial for Section 1, 2, 3, 4
*   [ ] **[Primary Input]** `Business Requirements` (Task 6.1) -> Crucial for Section 1, 2, 5
*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 3, 4, 5

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Scope of Solution Space** | Outlined boundaries of the desired business needs, corporate constraints, and targets | `Business Requirements` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Future Capabilities & Processes** | Identified capability gaps, process pain points, and target process efficiency metrics | `Business Requirements` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Future Org Structure & Culture** | Desired corporate behaviors, shifts in division alignments, and cultural targets | `Elicitation Results (confirmed)` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Future Technology & Infrastructure** | Target IT systems, target architectures, data flows, and technical restrictions | `Elicitation Results (confirmed)` / `Current State Description` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 5: Assumptions & Constraints** | Sponsor-imposed constraints, unproven commercial beliefs, or regulatory limitations | `Business Requirements` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Scope of Solution Space
> **🤖 AI AGENT INSTRUCTION:** Define the clear, unambiguous boundaries of the future state. Identify what organizational domains, business units, user roles, processes, and systems are affected (In-Scope) and what are explicitly excluded (Out-of-Scope) to prevent scope creep.

*   **In-Scope:** [INSERT: In-Scope List | The specific organizational divisions, workflows, applications, and customer segments that are directly modified, created, or impacted | Business Requirements (Section 2) / Current State Description]
*   **Out-of-Scope:** [INSERT: Out-of-Scope List | The specific departments, processes, legacy systems, or customer segments that are explicitly excluded from this future state change | Business Requirements (Section 3) / Elicitation Results (confirmed)]

## 2. Future Capabilities & Processes
> **🤖 AI AGENT INSTRUCTION:** Describe the upgraded or completely new capabilities the enterprise will possess to deliver value. Outline the idealized "To-Be" workflow, showing how manual effort, bottlenecks, or friction identified in the Current State are resolved.

*   **Target Capabilities:** [INSERT: Capability Upgrades | New or enhanced organizational capabilities required to satisfy the business need (e.g., Automated Risk Underwriting, Real-Time Fraud Detection) | Business Requirements (Section 2)]
*   **To-Be Process Outcomes:** [INSERT: To-Be Process Narrative | High-level overview of the future workflow steps, highlighting streamlined actions, automated touchpoints, and expected performance improvements | Current State Description (Section 2) / Business Requirements]

## 3. Future Organizational Structure & Culture
> **🤖 AI AGENT INSTRUCTION:** Describe the required organizational design and cultural attributes necessary to sustain the future state capabilities. Detail reporting lines, collaboration patterns, and behavioral shifts.

*   **Structural Changes:** [INSERT: Structure Narrative | Required modifications to departments, new job functions, reporting lines, or the creation of specialized teams (e.g., Centralized Data Governance Team) | Elicitation Results (confirmed) - Org Design Sessions]
*   **Cultural Shifts:** [INSERT: Cultural Targets | Desired behavioral norms, communication patterns, and mindset changes needed to support the future state (e.g., Transitioning to data-driven decision making) | Elicitation Results (confirmed) - Cultural Change Strategy]

## 4. Future Technology & Infrastructure
> **🤖 AI AGENT INSTRUCTION:** Document the conceptual technology stack and infrastructure supporting the future state. Focus on technical capabilities, architectural styles, and integrations rather than naming specific vendor products, unless they represent strict enterprise constraints.

*   **Technology Ecosystem:** [INSERT: Technical Architecture Narrative | Characteristics of the future state IT platform, hosting environments (cloud/on-premise), integration methods (REST APIs, event-driven), and security baselines | Elicitation Results (confirmed) - Enterprise Architecture Plan]

## 5. Assumptions & Constraints
> **🤖 AI AGENT INSTRUCTION:** List the unproven factors taken to be true for the future state definition (Assumptions) and the unavoidable business or technical limitations that restrict the target state (Constraints).

*   **Assumptions:** [INSERT: Strategic Assumptions | Assumptions regarding market conditions, technological availability, or stakeholder behaviors (e.g., "Assumes that external partner APIs maintain sub-second response times") | Elicitation Results (confirmed) - Risk/Assumption workshops]
*   **Constraints:** [INSERT: Structural Constraints | Mandatory architectural guidelines, corporate policy directives, compliance rules, or rigid timeline boundaries | Business Requirements (Section 3)]