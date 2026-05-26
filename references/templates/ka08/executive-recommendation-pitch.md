#### description: Generates a high-level PowerPoint Presentation (Pitch Deck) summarizing the recommended actions, costs, and risks for C-Level and BoD decision-making (BABOK Tasks 8.5 & 4.4).

### KA08/KA04: Executive Recommendation Pitch Deck

**🤖 AI AGENT INSTRUCTION (PITCH DECK GENERATION & EXPORT):** 
1. **Upstream Ingestion (Zero-Hallucination):** You MUST load `ka08/recommended-actions.md` to extract the final recommendation and `10.20-financial-analysis.md` (or the underlying business case) to extract the financial metrics. 
2. **Target Audience Rule:** This deck is for the Board of Directors (BoD). Keep bullet points to fewer than 10-15 words each. Focus strictly on Value, Cost, Risk, and the final "Ask".
3. **PowerPoint Export Command:** Use the Python export utility (`python references/scripts/export-to-office.py --format pptx`) and map the content into the 6-slide structure below.

---

# EXECUTIVE PITCH DECK: SOLUTION RECOMMENDATION
**Initiative/Project:** [INSERT: Project Name]
**Prepared By:** [INSERT: Lead Business Analyst]

### Slide 1: Title & Strategic Context
*   **Headline:** Solution Evaluation & Strategic Recommendation: [INSERT: Project Name]
*   **Sub-Headline:** Maximizing Enterprise Value through [INSERT: Brief 3-5 word summary of action, e.g., "Process Automation & System Retirement"]
*   **The "Why":** We have completed the performance assessment of the current solution and identified critical gaps hindering our strategic objectives.

### Slide 2: The Core Limitations (The Problem)
**🤖 AI AGENT INSTRUCTION:** Summarize the heaviest Internal (Task 8.3) and External (Task 8.4) limitations.
*   **System Defect:** [INSERT: e.g., "Current RPA tool experiences a 15% transaction failure rate during peak loads."]
*   **Enterprise Barrier:** [INSERT: e.g., "Warehouse staff lack data literacy to utilize the new BI dashboards."]
*   **Bottom Line Impact:** [INSERT: e.g., "These limitations are costing $200K annually in lost productivity."]

### Slide 3: Alternative Actions Evaluated
**🤖 AI AGENT INSTRUCTION:** List the top 2 alternatives considered, ensuring Opportunity Cost is mentioned.
*   **Option A: [INSERT: e.g., Do Nothing]**
    *   *Pros:* Zero upfront investment.
    *   *Cons (Opportunity Cost):* Inability to scale for Q4; continued $200K annual loss.
*   **Option B: [INSERT: e.g., Retire & Migrate to API Gateway]**
    *   *Pros:* Eliminates legacy licensing fees.
    *   *Cons:* Requires 2 months of IT resource reallocation.

### Slide 4: The Recommendation & Financials
**🤖 AI AGENT INSTRUCTION:** State the final recommendation. EXPLICITLY ignore Sunk Costs as per BABOK 8.5.
*   **Our Recommendation:** [INSERT: e.g., Retire legacy RPA and initiate Organizational Change management for staff training.]
*   **Future Investment (Cost):** [INSERT: $ Amount]
*   **Expected Returns (Benefit):** [INSERT: $ Amount / Savings]
*   **Strategic Rationale:** [INSERT: e.g., "While $1M was previously invested (Sunk Cost), migrating now prevents future technical debt and ensures scalability."]

### Slide 5: Key Risks & Mitigations
*   **Risk 1:** [INSERT: Short risk description] -> **Mitigation:** [INSERT: Short mitigation]
*   **Risk 2:** [INSERT: Short risk description] -> **Mitigation:** [INSERT: Short mitigation]

### Slide 6: The Decision Gateway (The "Ask")
*   **Decision Required Today:** Formal approval to proceed with [INSERT: e.g., "Option B: Retirement and Migration"].
*   **Next Steps Post-Approval:** 
    *   [INSERT: e.g., "Allocate $80K budget."]
    *   [INSERT: e.g., "Transition to Strategy Analysis (KA06) to draft the Change Strategy."]
