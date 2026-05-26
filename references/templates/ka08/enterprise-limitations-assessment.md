#### description: Determines how factors external to the solution (Culture, Operations, Structure) are restricting value realization, and triggers an AI-to-User Elicitation Interview if organizational context is missing (BABOK Task 8.4).

### KA08: Enterprise Limitations Assessment

**🤖 AI AGENT INSTRUCTION (THE PLAYBOOK HOOK & ZERO-HALLUCINATION):** 
1. **The Playbook Hook (Interactive Elicitation):** You MUST NOT hallucinate or assume the internal culture, operational readiness, or political structure of the User's enterprise. 
   * **Action:** If the User requests this assessment without providing operational or cultural context, HALT execution. Load `references/advisor/elicitation-interview-playbook.md` (Focus on Domain A and Domain C).
   * **Prompt the User:** *"Chào Chủ nhân, để đánh giá chính xác các rào cản từ phía doanh nghiệp (Task 8.4), tôi không thể tự phán đoán văn hóa và quy trình nội bộ. Xin vui lòng trả lời 4 câu hỏi phỏng vấn nhanh sau: 1. Văn hóa hiện tại có ủng hộ giải pháp này không? 2. Có phòng ban nào đang bị xung đột lợi ích không? 3. Cơ cấu tổ chức hiện tại có cản trở luồng công việc mới không? 4. Năng lực vận hành (kỹ năng, nhân sự) có đáp ứng được hệ thống không?"*
2. **Boundary Enforcement:** Ensure all limitations recorded here are **EXTERNAL** to the technical solution (e.g., people, policies, organizational structure). Technical bugs belong in Task 8.3.

---

# ENTERPRISE LIMITATIONS ASSESSMENT
**Initiative/Project:** [INSERT: Project Name]
**Date of Assessment:** [INSERT: ISO Date]
**Assessed By:** [INSERT: Lead Business Analyst / AI Agent]

## 1. Enterprise Culture Assessment (BABOK 8.4.4.1)
*Evaluates the deeply rooted beliefs, values, and norms shared by the members of the enterprise and whether they support or reject the solution.*
*   **Cultural Adoption Status:** [INSERT: E.g., "Stakeholders in the Warehouse department view the new tracking system as a threat to their job security rather than a beneficial tool."]
*   **Cultural Adjustment Needed:** [INSERT: E.g., "Require a proactive change management campaign to communicate the 'Why' behind the solution and demonstrate how it reduces manual overtime."]

## 2. Stakeholder Impact Analysis (BABOK 8.4.4.2)
*Assesses how the solution affects specific stakeholder groups and whether their functions, responsibilities, or interests are in conflict with the change.*
| Impacted Stakeholder / Group | Nature of Impact | Perception of Value | Mitigation / Communication Strategy |
| :--- | :--- | :--- | :--- |
| **[e.g., Call Center Agents]** | [e.g., Required to learn a complex new UI within 2 weeks.] | [Negative - Feeling overwhelmed and insufficiently trained.] | [e.g., Extend training period; provide on-the-floor coaching.] |
| **[INSERT]** | [INSERT] | [INSERT] | [INSERT] |

## 3. Organizational Structure Changes (BABOK 8.4.4.3)
*Identifies if the formal reporting structure or informal relationships are too complex or misaligned to allow the solution to perform effectively.*
*   **Structural Bottlenecks:** [INSERT: E.g., "The new automated approval workflow is blocked because the formal organizational chart still requires a physical signature from the VP of Finance for transactions over $10K."]
*   **Recommended Structural Alignment:** [INSERT: E.g., "Delegation of Authority (DOA) matrix must be updated to align with the system's automated threshold capabilities."]

## 4. Operational Assessment (BABOK 8.4.4.4)
*Determines if the enterprise is adequately equipped (policies, processes, skills, tools) to benefit from the solution.*
| Operational Factor | Current Readiness Status | Identified Enterprise Limitation |
| :--- | :--- | :--- |
| **Policies & Procedures** | [e.g., Outdated] | [e.g., Legacy Standard Operating Procedures (SOPs) mandate manual data entry, conflicting with the new OCR scanning feature.] |
| **Skill & Training Needs** | [e.g., Insufficient] | [e.g., Current staff lack the data-analytics skills required to interpret the new Business Intelligence dashboards.] |
| **Human Resources** | [e.g., Severely Constrained] | [e.g., The department is understaffed by 20%, leaving no time to perform the data-cleansing activities required by the new system.] |

## 5. Enterprise Limitation Summary (Output)
**🤖 AI AGENT INSTRUCTION:** Synthesize the findings above into a conclusive summary of the Enterprise Limitation.
*   **Core Enterprise Limitations:** [INSERT: 2-3 sentence summary. E.g., "The primary limitations preventing full value realization are rooted in a lack of end-user training, outdated SOPs, and an organizational culture resistant to automation."]
*   **Next Step Routing:** Proceed to **Task 8.5 (Recommend Actions to Increase Solution Value)** to combine these Enterprise Limitations with the Solution Limitations (Task 8.3) and develop a holistic recommendation (e.g., Organizational Change Management, Training, or Do Nothing).
