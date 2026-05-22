---
description: Template for generating the Current State Description documenting the baseline context, capabilities, resources, and external influences before any change is initiated (BABOK Task 6.1).
---

> ### 🤖 AI AGENT INSTRUCTION (EXECUTION RULES)
> - **Domain Integrity:** Must strictly adhere to IIBA BABOK V3 standard definitions and professional enterprise terminology. Describe ONLY the "As-Is" environment. Absolutely NO "To-Be" recommendations, future state features, or transition plans here.
> - **Input Validation:** Scan the Input Traceability Map before processing. If any mandatory input is missing, ambiguous, or conflict-prone, you MUST NOT proceed with generation.
> - **⚠️ SHARP NEGATIVE CONSTRAINT:** If required inputs are unavailable or unclear in the user's context (e.g., missing specific divisional structures, process metrics, or technical constraints), you MUST immediately halt generation, pivot to advisory/inquiry mode, and request the User to provide the missing facts or clarify ambiguity. Never hallucinate, assume, or guess business reality.

# CURRENT STATE DESCRIPTION

**Initiative/Project:** [INSERT: Short Text | The formal name of the change initiative or project | Project Charter or Kickoff Metadata]
**Date of Assessment:** [INSERT: ISO Date | YYYY-MM-DD format of generation | Current Session Metadata]
**Status:** DRAFT / UNDER REVIEW

---

## 🗺️ INPUT TRACEABILITY MAP

Before generating content, verify the availability of the following input data elements. Tick `[x]` for available sources.

*   [ ] **[Primary Input]** `Elicitation Results (confirmed)` (Task 4.4) -> Crucial for Section 1, 2, 3, 4, 5
*   [ ] **[Primary Input]** `Enterprise Architecture` (Contextual asset) -> Crucial for Section 2, 3
*   [ ] **[Primary Input]** `Sponsor/Stakeholder Directives` -> Crucial for Section 1, 4

| Target Section | Required Input Element | Source Document Reference | Requirement Type | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Section 1: Enterprise Context & Culture** | Organizational structure charts, reporting lines, cultural norms, stakeholder attitudes | `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 2: Business Capabilities & Processes** | Core capabilities, As-Is process steps, performance metrics (cycle time, error rates) | `Elicitation Results (confirmed)` / `Solution Performance Measures` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 3: Technology & Infrastructure** | Legacy applications, infrastructure maps, interfaces, technical limitations | `Enterprise Architecture` / `Elicitation Results (confirmed)` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 4: Internal Assets & Policies** | Current operating policies, financial limits, intellectual property, physical assets | `Elicitation Results (confirmed)` / `Business Policies` | **Mandatory** | [ ] Verified / [ ] Missing |
| **Section 5: External Influencers** | Regulatory mandates, competitor strategies, supplier dependencies, customer sentiment | `Elicitation Results (confirmed)` / `Market Research` | **Mandatory** | [ ] Verified / [ ] Missing |

---

## 1. Enterprise Context & Culture
> **🤖 AI AGENT INSTRUCTION:** Synthesize the formal and informal relationships, reporting lines, communication paths, and the shared beliefs/norms driving current behaviors. Maintain a strict "As-Is" factual tone.
 
*   **Organizational Structure:** [INSERT: Structural Narrative | Description of current relevant business divisions, departments, reporting lines, and how power/decisions flow | Elicitation Results (confirmed) - Stakeholder Interviews]
*   **Enterprise Culture:** [INSERT: Cultural Assessment | Qualitative analysis of current employee/management beliefs, attitudes towards change, willingness to adopt new technologies, and current pain tolerance | Elicitation Results (confirmed) - Cultural Survey / Observations]

## 2. Business Capabilities & Processes
> **🤖 AI AGENT INSTRUCTION:** Outline what the business currently does to create value (Capabilities) and how it achieves this (Processes). Highlight operational inefficiencies, manual bottlenecks, high error rates, or compliance risks.

*   **Core Capabilities:** [INSERT: Capability List | The specific functional capabilities currently active in the domain (e.g., Order Fulfillment, Billing Management) | Elicitation Results (confirmed) - Functional Decompositions]
*   **Process Performance (As-Is):** [INSERT: Process Performance Narrative | Detailed description of the current workflow steps, highlighting quantified pain points, cycle times, bottleneck stages, and system friction | Elicitation Results (confirmed) / Solution Performance Measures]

## 3. Technology & Infrastructure
> **🤖 AI AGENT INSTRUCTION:** Document the hardware, software platforms, interfaces, data storage, and physical assets that support current operations. 

*   **Existing Systems:** [INSERT: Technical Inventory | List of legacy systems, applications, databases, integrations (APIs, batch processes) currently in use | Elicitation Results (confirmed) - IT Systems Architecture]
*   **Technical Constraints:** [INSERT: Technical Limitations Narrative | Documented technical debt, end-of-life hardware/software, scalability issues, security vulnerabilities, or performance lags | Elicitation Results (confirmed) - IT Infrastructure Audit]

## 4. Internal Assets & Policies
> **🤖 AI AGENT INSTRUCTION:** Detail the tangible/intangible resources currently available and the business policies/rules governing current behaviors.

*   **Key Assets:** [INSERT: Asset Inventory | Active resources including financial capital, physical facilities, proprietary algorithms, brand equity, or specialized staff expertise | Elicitation Results (confirmed) - Resource Assessment]
*   **Business Policies:** [INSERT: Policy Registry | Current organizational directives, standard operating procedures, compliance guidelines, or operational rules that constrain work | Elicitation Results (confirmed) - Business Policy Manual]

## 5. External Influencers
> **🤖 AI AGENT INSTRUCTION:** Analyze forces outside the organizational boundaries that shape current operations or impose constraints.

*   **Industry & Competitors:** [INSERT: Competitive Assessment | Market positioning, competitor benchmarks, and active industry shifts | Elicitation Results (confirmed) - Market Analysis]
*   **Customers & Suppliers:** [INSERT: Relationship Narrative | Customer demographics/sentiment, contract terms with suppliers, and dependencies | Elicitation Results (confirmed) - Stakeholder Feedback]
*   **Regulatory & Macroeconomic:** [INSERT: Regulatory Registry | Active laws, industry regulations (e.g., GDPR, HIPAA), tax mandates, or macroeconomic pressures currently influencing the domain | Elicitation Results (confirmed) - Legal & Compliance Audit]