---
description: Real-world diagnostic mapping. Converts user symptoms ("I am facing X") into strictly aligned BABOK V3 Knowledge Areas (KAs), Tasks, and Techniques.
---

# ADVISOR: SCENARIO DIAGNOSTICS

> ### 🤖 AI AGENT INSTRUCTION (DIAGNOSTIC ROUTING & ANTI-HALLUCINATION)
> When a user asks an open-ended question about a problem or situation (e.g., "What should I do if...?", "My stakeholders are arguing..."), you **MUST NOT** guess or hallucinate.
> 1. Scan this file to find the matching symptom.
> 2. Recommend the mapped Knowledge Area (KA), Task, and Techniques.
> 3. Always guide the user to the *most appropriate* "Primary" technique defined by the BABOK® Guide.
> 
> **⚠️ ANTI-HALLUCINATION SHIELD:** Do not fabricate symptoms, tasks, or techniques that are not defined in the BABOK v3 reference or local KA maps. If the user presents a symptom not listed below, prompt the user for additional details and use [by-situation.md](../techniques/by-situation.md) or [quick-reference.md](../techniques/quick-reference.md) to diagnose their needs.

---

## 1. The "Lost in the Woods" Scenario

*   **Symptom:** "I am about to start a new initiative but I do not know who to approach, who holds decision-making authority, or how to communicate with them effectively to avoid resistance."
*   **Diagnosis:** You lack a comprehensive strategy for identifying and engaging stakeholders.
*   **KA & Task:** [KA03 - Task 3.2: Plan Stakeholder Engagement](../ka/ka03-planning/tasks.md)
*   **Recommended Techniques:** 
    *   [Stakeholder List, Map, or Personas](../techniques/top-20/10.43-stakeholder-list-map-or-personas.md) (Primary — to categorize influence and impact)
    *   [Interviews](../techniques/quick-reference.md) (Common Secondary — to elicit individual expectations)

## 2. The "War Room" Scenario

*   **Symptom:** "Departments are fiercely debating how the current process actually operates. No one is willing to compromise, and the elicitation meeting has reached an impasse."
*   **Diagnosis:** You need to establish consensus and an objective view of the current state while actively managing stakeholder conflicts during elicitation.
*   **KA & Task:** [KA04 - Task 4.2: Conduct Elicitation](../ka/ka04-elicitation/tasks.md) and [Task 4.5: Manage Stakeholder Collaboration](../ka/ka04-elicitation/tasks.md)
*   **Recommended Techniques:** 
    *   [Workshops](../techniques/quick-reference.md) (Primary — to resolve disagreements directly under the guidance of a neutral facilitator)
    *   [Collaborative Games](../techniques/quick-reference.md) (Secondary — to relieve tension and expose hidden assumptions)

## 3. The "Scope Creep" Scenario

*   **Symptom:** "The sponsor is continuously demanding new features. The budget is nearly exhausted, yet they label every new request as 'High Priority'."
*   **Diagnosis:** Requirements life cycle management is poorly governed, lacking a solid baseline to negotiate, evaluate, and prioritize incoming changes.
*   **KA & Task:** KA05 - Task 5.3: Prioritize Requirements & Task 5.4: Assess Requirements Changes *(Future Scope)*
*   **Recommended Techniques:** 
    *   [Backlog Management](../techniques/quick-reference.md) (Primary — to strictly sequence incoming work items)
    *   [Financial Analysis](../techniques/top-20/10.20-financial-analysis.md) (Primary — to evaluate the ROI and demonstrate the opportunity cost of the new features)

## 4. The "Treating the Symptom, Not the Disease" Scenario

*   **Symptom:** "The legacy system crashes frequently, so my executive sponsor instructed me to draft requirements to purchase a new COTS CRM software."
*   **Diagnosis:** The initiative is prematurely jumping to a solution definition without properly analyzing the core business need or the root cause of the current dysfunction.
*   **KA & Task:** [KA06 - Task 6.1: Analyze Current State](../ka/ka06-strategy/tasks.md)
*   **Recommended Techniques:** 
    *   [Root Cause Analysis](../techniques/top-20/10.40-root-cause-analysis.md) (Primary — to determine if the failure stems from broken processes rather than software)
    *   [Document Analysis](../techniques/top-20/10.18-document-analysis.md) (Primary — to evaluate the true deficiencies of the existing system)

## 5. The "Unverifiable Dream" Scenario

*   **Symptom:** "I have finalized the requirements specification (e.g., 'The system shall be fast and user-friendly'), but the Implementation SMEs and Testers are rejecting it because they claim it cannot be coded or tested."
*   **Diagnosis:** The documented requirements lack the characteristics of quality (specifically, being Unambiguous and Testable). You bypassed the requirement verification step.
*   **KA & Task:** [KA07 - Task 7.2: Verify Requirements](../ka/ka07-radd/tasks.md)
*   **Recommended Techniques:** 
    *   [Acceptance and Evaluation Criteria](../techniques/top-20/10.01-acceptance-and-evaluation-criteria.md) (Primary — to translate vague desires into quantifiable, testable metrics)
    *   [Reviews](../techniques/quick-reference.md) (Primary — to conduct peer inspections with Implementation SMEs)

## 6. The "Ghost Town" Scenario

*   **Symptom:** "The solution was successfully deployed with zero defects and meets all functional requirements, but the end users refuse to adopt it and continue using legacy Excel spreadsheets."
*   **Diagnosis:** The IT solution is technically sound, but the enterprise environment (culture, policies, or operational readiness) is restricting value realization.
*   **KA & Task:** KA08 - Task 8.4: Assess Enterprise Limitations *(Future Scope)*
*   **Recommended Techniques:** 
    *   [Observation](../techniques/quick-reference.md) (Primary — to witness firsthand how the end users perform their daily work)
    *   [Organizational Modelling](../techniques/quick-reference.md) (Secondary — to assess if the current organizational structure or roles impede solution adoption)