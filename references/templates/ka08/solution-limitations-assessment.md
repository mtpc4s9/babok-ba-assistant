#### description: Identifies and analyzes the internal factors, defects, and constraints within the solution that restrict the full realization of value (BABOK Task 8.3).

### KA08: Solution Limitations Assessment

**🤖 AI AGENT INSTRUCTION (ROOT CAUSE & BOUNDARY ENFORCEMENT):** 
1. **Upstream Ingestion:** You MUST load `ka08/solution-performance-analysis.md` (Task 8.2) to retrieve the identified performance variances and initial hypotheses.
2. **The Boundary Rule (Zero-Hallucination & Scope Lock):** Task 8.3 strictly focuses on **INTERNAL** solution factors (e.g., software bugs, UX/UI flaws, hardcoded constraints, database latency, hardware limits). If the root cause involves human error, lack of training, organizational culture, or external policies, you MUST flag it and state: *"Moved to Task 8.4 Assess Enterprise Limitations."* DO NOT analyze human/process issues here.
3. **Impact Assessment Enforcement:** For every identified problem, you MUST assess Severity, Business Impact, and determine a Resolution Category (Resolve, Mitigate, or Accept).

---

# SOLUTION LIMITATIONS ASSESSMENT (INTERNAL)
**Initiative/Project:** [INSERT: Project Name]
**Date of Assessment:** [INSERT: ISO Date]
**Assessed By:** [INSERT: Lead Business Analyst / Technical SME]

## 1. Internal Component Dependencies (BABOK 8.3.4.1)
*Solutions often have internal dependencies that limit the overall performance to the level of the least effective component. This section isolates the bottleneck components.*

| Bottleneck Component | Dependent Components | Limitation / Constraint Description | Impact on Overall Solution |
| :--- | :--- | :--- | :--- |
| **[e.g., Legacy Database Server]** | [e.g., API Gateway, Reporting Dashboard] | [e.g., Database read-locks during batch processing prevent real-time API queries.] | [e.g., Causes API timeouts, reducing transaction throughput by 40%.] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

## 2. Solution Problem Investigation & Root Cause (BABOK 8.3.4.2)
**🤖 AI AGENT INSTRUCTION:** Perform problem analysis for the negative variances identified in Task 8.2. Apply Root Cause Analysis (Technique 10.40 - e.g., 5 Whys) to determine the exact technical or design flaw.

| Variance / Symptom (From Task 8.2) | Identified Defect / Internal Problem | Root Cause Analysis (Internal Factor) |
| :--- | :--- | :--- |
| **[e.g., SPM-01: Error Rate spiked to 0.8%]** | [e.g., Form validation failure on Special Characters.] | [e.g., The regex validation on the backend strips out apostrophes in customer names (e.g., O'Connor), causing database insertion failures.] |
| **[e.g., SPM-02: UX Satisfaction dropped to 3.8]** | [e.g., Hardcoded pagination limit.] | [e.g., The search results grid is hardcoded to display only 10 records per page without a "View All" option, requiring excessive clicks.] |
| **[INSERT]** | [INSERT] | [INSERT] |

## 3. Problem Impact Assessment & Disposition (BABOK 8.3.4.3)
*Evaluates the severity of the identified internal problems and determines the organization's capacity to absorb the impact versus the need to fix it.*

| Identified Defect | Severity (High/Med/Low) | Business / Operational Impact | Resolution Disposition (Resolve / Mitigate / Accept) | Justification |
| :--- | :--- | :--- | :--- | :--- |
| **[e.g., Form validation failure]** | **High** | [e.g., Prevents 2% of legitimate users from registering; direct revenue loss.] | **Must Resolve** | [e.g., Impact exceeds acceptable loss threshold. Code fix required immediately.] |
| **[e.g., Hardcoded pagination]** | **Medium** | [e.g., Decreases Call Center Agent efficiency by 15 seconds per call.] | **Mitigate** | [e.g., Cost to redesign UI is high. Mitigation: provide agents with a shortcut key workflow.] |
| **[e.g., Batch processing lock]** | **Low** | [e.g., Reports delayed by 5 minutes during midnight processing.] | **Accept** | [e.g., Business operations are not impacted at midnight. Acceptable limitation.] |
| **[INSERT]** | **[INSERT]** | [INSERT] | **[INSERT]** | [INSERT] |

---
**Next Step Routing:** 
Proceed to **Task 8.4 (Assess Enterprise Limitations)** to evaluate if external factors (Culture, Organization, Operations) are also restricting value realization, before consolidating all findings into **Task 8.5 (Recommend Actions to Increase Solution Value)**.
