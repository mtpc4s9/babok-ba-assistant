---
description: "BABOK V3 compact lookup: 50 techniques with ID, purpose, KA mapping, and key artifact produced."
---

# BABOK V3 Techniques - Quick Reference

> **🤖 AI AGENT INSTRUCTION (TECHNIQUE LOOKUP):**
> Use this compact table to quickly map a user's scenario or need to the correct BABOK® Guide v3 technique.
> - **When to Use:** Scan this column for intent matching (keyword → trigger recognition).
> - **KAs:** Knowledge Areas that predominantly use this technique (3=Planning, 4=Elicitation, 5=Lifecycle, 6=Strategy, 7=Analysis/Design, 8=Evaluation).
> - **Key Artifact:** Primary output produced when applying this technique. Use to link technique → deliverable.
> - **Deep Dive (Top 15 Only):** Load the corresponding file in `references/techniques/top-15/` using this mapping:
>   - **10.01 (Acceptance and Evaluation Criteria):** `10.01-acceptance-and-evaluation-criteria.md`
>   - **10.07 (Business Cases):** `10.07-business-cases.md`
>   - **10.08 (Business Model Canvas):** `10.08-business-model-canvas.md`
>   - **10.09 (Business Rules Analysis):** `10.09-business-rules-analysis.md`
>   - **10.12 (Data Dictionary):** `10.12-data-dictionary.md`
>   - **10.13 (Data Flow Diagrams):** `10.13-data-flow-diagrams.md`
>   - **10.17 (Decision Modelling):** `10.17-decision-modelling.md`
>   - **10.18 (Document Analysis):** `10.18-document-analysis.md`
>   - **10.24 (Interface Analysis):** `10.24-interface-analysis.md`
>   - **10.30 (Non-Functional Req Analysis):** `10.30-non-functional-requirements-analysis.md`
>   - **10.35 (Process Modelling):** `10.35-process-modelling.md`
>   - **10.40 (Root Cause Analysis):** `10.40-root-cause-analysis.md`
>   - **10.43 (Stakeholder List, Map, Personas):** `10.43-stakeholder-list-map-or-personas.md`
>   - **10.47 (Use Cases and Scenarios):** `10.47-use-cases-and-scenarios.md`
>   - **10.48 (User Stories):** `10.48-user-stories.md`
> - **Non-Top-15 Fallback & Interview Rule:** If a technique outside the Top 15 is required:
>   1. Identify its ID and Purpose in this table.
>   2. Declare to the user: "I will apply [Technique Name] (ID: 10.xx) for this task."
>   3. Initiate the **AI-to-User Interview Session** by asking 3-5 targeted elicitation questions based on the technique's objective and key artifact. Do NOT attempt to generate the artifact without user inputs.

| ID | Technique Name | When to Use (Purpose) | KAs | Key Artifact |
| :--- | :--- | :--- | :--- | :--- |
| 10.1 | Acceptance and Evaluation Criteria | Define conditions a solution must meet to be accepted or to choose between options. | 5, 6, 7, 8 | Acceptance Criteria |
| 10.2 | Backlog Management | Record, rank, and prioritize work items when demand exceeds capacity. | 5, 7 | Prioritized Backlog |
| 10.3 | Balanced Scorecard | Measure organizational performance beyond financials (outcome-focused). | 6 | Scorecard |
| 10.4 | Benchmarking and Market Analysis | Compare practices/metrics against peers or assess market trends. | 4, 6, 7, 8 | Benchmark Report |
| 10.5 | Brainstorming | Rapidly generate a broad set of ideas or options with minimal filtering. | 3, 4, 6, 7, 8 | Idea List |
| 10.6 | Business Capability Analysis | Identify performance gaps and prioritize capability investments. | 6, 7 | Capability Map |
| 10.7 | Business Cases | Justify a course of action based on benefits vs. cost and effort. | 3, 5, 6, 7, 8 | Business Case |
| 10.8 | Business Model Canvas | Describe how an enterprise creates, delivers, and captures value. | 6, 7 | Business Model Canvas |
| 10.9 | Business Rules Analysis | Identify, validate, and organize rules shaping daily business behavior. | 3, 4, 5, 7, 8 | Business Rules Catalog |
| 10.10 | Collaborative Games | Build joint understanding of a problem through structured group play. | 4 | Shared Understanding |
| 10.11 | Concept Modelling | Organize business vocabulary to communicate domain knowledge consistently. | 4, 6, 7 | Concept Model |
| 10.12 | Data Dictionary | Standardize data element definitions for common stakeholder interpretation. | 7 | Data Dictionary |
| 10.13 | Data Flow Diagrams | Show where data originates, how it is processed, and where it goes. | 5, 7 | DFD |
| 10.14 | Data Mining | Find useful patterns in large data sets to improve decision-making. | 4, 6, 8 | Data Insights Report |
| 10.15 | Data Modelling | Visually describe entities, attributes, and relationships in a domain. | 4, 5, 7 | Data Model / ERD |
| 10.16 | Decision Analysis | Formally evaluate options and trade-offs under uncertainty. | 5, 6, 7, 8 | Decision Matrix |
| 10.17 | Decision Modelling | Show how data and rules combine to produce a repeatable business decision. | 6, 7 | Decision Table / DMN |
| 10.18 | Document Analysis | Elicit information by examining existing materials about the business environment. | 3, 4, 5, 6, 7, 8 | Elicitation Notes |
| 10.19 | Estimation | Forecast the cost and effort of pursuing a course of action. | 3, 4, 5, 6, 7 | Effort Estimates |
| 10.20 | Financial Analysis | Evaluate financial viability and benefit realization of an investment. | 3, 5, 6, 7, 8 | ROI / Cost-Benefit Report |
| 10.21 | Focus Groups | Elicit ideas and opinions in an interactive small-group environment. | 4, 6, 7, 8 | Focus Group Report |
| 10.22 | Functional Decomposition | Break down complex processes or systems into simpler, manageable parts. | 3, 5, 6, 7 | Decomposition Diagram |
| 10.23 | Glossary | Define domain-specific terms to provide a common business language. | 7 | Glossary |
| 10.24 | Interface Analysis | Identify what, where, and how information is exchanged between systems or roles. | 4, 5, 7 | Interface Catalog |
| 10.25 | Interviews | Systematically elicit information from one or more people via targeted questions. | 3, 4, 5, 6, 7, 8 | Interview Notes |
| 10.26 | Item Tracking | Capture and assign ownership of issues and concerns impacting the solution. | 3, 5, 6, 7, 8 | Issue / Action Log |
| 10.27 | Lessons Learned | Document successes, failures, and recommendations for future improvement. | 3, 4, 6, 7, 8 | Lessons Learned Log |
| 10.28 | Metrics and KPIs | Measure the performance of a solution or its components against targets. | 3, 6, 7, 8 | KPI Dashboard |
| 10.29 | Mind Mapping | Capture and connect thoughts, ideas, and information in a non-linear diagram. | 3, 4, 6, 7 | Mind Map |
| 10.30 | Non-Functional Req Analysis | Specify quality criteria (performance, security, usability) beyond functional behavior. | 7, 8 | NFR Specification |
| 10.31 | Observation | Elicit information by directly watching activities as they are performed. | 3, 4, 6, 8 | Observation Notes |
| 10.32 | Organizational Modelling | Describe roles, responsibilities, and reporting structures within an organization. | 3, 6, 7, 8 | Org Chart / RACI |
| 10.33 | Prioritization | Rank BA information by value, risk, or difficulty to determine relative importance. | 5, 8 | Prioritized Requirements |
| 10.34 | Process Analysis | Assess a process for efficiency gaps and identify improvement opportunities. | 3, 4, 6, 8 | Process Assessment |
| 10.35 | Process Modelling | Use standardized diagrams (BPMN) to show the sequential flow of work. | 3, 4, 5, 6, 7, 8 | Process Model / BPMN |
| 10.36 | Prototyping | Validate needs iteratively through a simulated model of the solution. | 4, 6, 7, 8 | Prototype / Mockup |
| 10.37 | Reviews | Evaluate a work product to identify defects or gain stakeholder consensus. | 3, 4, 5, 7 | Review Record |
| 10.38 | Risk Analysis and Management | Identify, assess, and mitigate areas of uncertainty that could affect value. | 3, 4, 5, 6, 7, 8 | Risk Register |
| 10.39 | Roles and Permissions Matrix | Define which roles have which system permissions/security access rights. | 8 | Roles & Permissions Matrix |
| 10.40 | Root Cause Analysis | Systematically identify the underlying origins of a problem (not just symptoms). | 3, 6, 7, 8 | Root Cause Diagram |
| 10.41 | Scope Modelling | Define boundaries and classify elements as inside or outside the solution scope. | 3, 6, 7 | Context Diagram |
| 10.42 | Sequence Diagrams | Model object interactions and message flow for a specific usage scenario. | 7 | Sequence Diagram |
| 10.43 | Stakeholder List, Map, Personas | Identify all requirement sources and analyze their characteristics and influence. | 4, 7 | Stakeholder Register |
| 10.44 | State Modelling | Describe and analyze the different states an entity can have within a system. | 7 | State Diagram |
| 10.45 | Survey or Questionnaire | Collect structured information from a large group quickly. | 3, 4, 6, 7, 8 | Survey Results |
| 10.46 | SWOT Analysis | Evaluate internal strengths/weaknesses and external opportunities/threats. | 6, 7, 8 | SWOT Matrix |
| 10.47 | Use Cases and Scenarios | Describe how an actor interacts with the solution to achieve a goal. | 5, 7, 8 | Use Case Document |
| 10.48 | User Stories | Write concise statements of functionality needed to deliver value to a user. | 5, 7 | User Story (As a…) |
| 10.49 | Vendor Assessment | Evaluate a vendor's ability to meet delivery commitments for a product/service. | 6, 7, 8 | Vendor Scorecard |
| 10.50 | Workshops | Facilitate a focused group event to collaborate toward a predefined goal. | 3, 4, 5, 6, 7, 8 | Workshop Output |
