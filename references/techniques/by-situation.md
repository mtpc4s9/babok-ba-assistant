---
description: "BABOK V3 situation-to-technique diagnostic guide. Match a project symptom to recommended techniques and anti-patterns."
---

# BABOK V3 Techniques - By Situation (Diagnostic Guide)

> **🤖 AI AGENT INSTRUCTION (DIAGNOSTIC LOOKUP):**
> Use this file when the user describes a project problem, symptom, or scenario WITHOUT knowing which technique to apply.
> 1. Start with **Section 0** if the situation spans multiple KAs or is at project initiation.
> 2. Jump to the relevant KA section if the context is clear.
> 3. Recommend the `Recommended Techniques` with a brief WHY explanation.
> 4. Note any `⚠️ Avoid` hints to prevent common mis-selections.

---

## 0. Cross-KA Situations (Common Real-World Triggers)

| Project Symptom / Scenario | Primary KA | Recommended Techniques |
| :--- | :--- | :--- |
| Project is brand new — where do I start as the BA? | KA03 | Document Analysis, Interviews, Stakeholder List/Map |
| Scope creep: requirements keep expanding uncontrolled. | KA05 | Scope Modelling, Prioritization, Item Tracking |
| Stakeholders contradict each other on requirements. | KA04+KA05 | Workshops, Decision Analysis, Reviews |
| Project is Agile — how does BABOK apply? | KA03+KA07 | User Stories, Backlog Management, Reviews |
| Pre-project feasibility study needed. | KA06 | Business Cases, Financial Analysis, SWOT Analysis |
| BA needs to onboard fast to an unfamiliar domain. | KA04+KA06 | Document Analysis, Interviews, Concept Modelling |
| Key SME is leaving — knowledge transfer urgently needed. | KA04 | Interviews, Document Analysis, Process Modelling |

---

## 1. Planning & Stakeholder Engagement (KA03)

| Project Symptom / Scenario | Recommended Techniques |
| :--- | :--- |
| Unclear who has the authority to approve changes or make decisions. | Roles and Permissions Matrix, Organizational Modelling. |
| Need to estimate how much time/effort BA activities will take. | Estimation, Functional Decomposition, Lessons Learned. |
| Need to identify all impacted parties and their level of influence. | Stakeholder List, Map, or Personas, Brainstorming. |
| Stakeholders disagree on the overall BA approach (Predictive vs. Adaptive). | Decision Analysis, Risk Analysis and Management. |
| Need to track and manage BA process performance over time. | Metrics and KPIs, Reviews, Item Tracking. |

---

## 2. Elicitation & Collaboration (KA04)

| Project Symptom / Scenario | Recommended Techniques |
| :--- | :--- |
| Need to discover hidden, unstated needs or daily workarounds. | Observation, Prototyping. ⚠️ Avoid Survey — surveys miss tacit/implicit knowledge. |
| Stakeholders are geographically dispersed; need feedback quickly. | Survey or Questionnaire, Focus Groups (virtual). |
| Existing legacy system has no documentation; SMEs are unavailable. | Document Analysis, Interface Analysis, Data Mining. |
| Need to build rapid consensus or resolve conflict among a large group. | Workshops, Collaborative Games, Focus Groups. |
| Stakeholders are highly technical; BA needs to understand system internals quickly. | Interviews (structured), Document Analysis, Interface Analysis. |
| Need to validate early requirements with minimal cost before full development. | Prototyping (low-fidelity), Focus Groups. ⚠️ Avoid full Workshops — too costly at this stage. |
| Users cannot articulate what they want; need to surface latent requirements. | Prototyping, Collaborative Games, Observation. |

---

## 3. Requirements Life Cycle Management (KA05)

| Project Symptom / Scenario | Recommended Techniques |
| :--- | :--- |
| Too many requested features; need to decide what goes into the next release. | Backlog Management, Prioritization (MoSCoW, Time-boxing). |
| Need to assess the impact of a newly proposed legal or regulatory requirement. | Document Analysis, Interviews, Risk Analysis and Management. |
| Stakeholders cannot agree on which requirement is the most important. | Decision Analysis, Workshops, Financial Analysis. |
| Need to verify that requirements are complete, consistent, and unambiguous. | Reviews, Prototyping, Use Cases and Scenarios. |
| Need to trace a requirement from business need through to solution component. | Business Rules Analysis, Data Flow Diagrams, Item Tracking. |

---

## 4. Strategy Analysis (KA06)

| Project Symptom / Scenario | Recommended Techniques |
| :--- | :--- |
| Need to justify the financial investment for a new project/initiative. | Business Cases, Financial Analysis (ROI, Cost-Benefit). |
| Need to understand the root cause of a recurring operational problem. | Root Cause Analysis (Fishbone/5 Whys), Process Analysis. ⚠️ Avoid jumping straight to solution design before RCA is done. |
| Entering a new market; need to evaluate internal capabilities vs. competitors. | SWOT Analysis, Business Capability Analysis, Benchmarking and Market Analysis. |
| Need to define the high-level business model and value proposition. | Business Model Canvas, Concept Modelling. |
| Need to define what the future state looks like after the change. | Scope Modelling, Organizational Modelling, Process Modelling. |

---

## 5. Requirements Analysis & Design Definition (KA07)

| Project Symptom / Scenario | Recommended Techniques |
| :--- | :--- |
| Need to show how a user interacts with the system step-by-step to achieve a goal. | Use Cases and Scenarios, User Stories, Prototyping. |
| Need to map the exact flow of data between systems and transformations. | Data Flow Diagrams, Data Modelling, Data Dictionary. |
| Need to document complex business logic, calculations, and decision-making rules. | Decision Modelling, Business Rules Analysis. |
| Need to define quality attributes (e.g., security, performance, scalability). | Non-Functional Requirements Analysis. ⚠️ Must be defined early — costly to retrofit. |
| Evaluating whether to buy a COTS product or build custom. | Vendor Assessment, Decision Analysis, Benchmarking. |
| Complex system has many states (e.g., order status: pending → approved → shipped). | State Modelling, Sequence Diagrams. |

---

## 6. Solution Evaluation (KA08)

| Project Symptom / Scenario | Recommended Techniques |
| :--- | :--- |
| The implemented solution is too slow or users are rejecting it. | Metrics and KPIs, Observation. ⚠️ Observe actual use before drawing conclusions from survey data alone. |
| Need to find out if the problem is in the software or the company culture/process. | Root Cause Analysis, Organizational Modelling, Process Analysis. |
| Need to prove that the delivered solution actually met the business goals. | Acceptance and Evaluation Criteria, Metrics and KPIs. |
| Need to decide whether to enhance, replace, or retire an existing solution. | Business Cases, Financial Analysis, Benchmarking and Market Analysis. |
