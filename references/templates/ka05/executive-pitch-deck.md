#### description: Template for Board of Directors (BoD) and C-Level Executive Pitch Deck. Designed for strategic alignment, high readability (strict slide constraints), and seamless export using the @frontend-slides skill.

### KA05: Board of Directors (BoD) Executive Pitch Deck Template

**🤖 AI AGENT INSTRUCTION (PITCH DECK GENERATION & EXPORT HOOK):**
1. **Trigger Condition:** Load this template whenever the user says "prepare executive presentation", "generate BoD pitch deck", or similar C-Level slide requests.
2. **Zero-Hallucination Source Rules:** You MUST pull slide content strictly from these workspace files:
   * **Slide 1 & 3 (Title & Scope):** `references/templates/ka06/solution-scope.md` and `references/templates/ka05/business-requirement-matrix.md`
   * **Slide 2 (The Need):** `references/templates/ka06/business-requirements.md`
   * **Slide 4 (Financials):** `references/templates/ka06/potential-value.md`
   * **Slide 5 (Risks):** `references/templates/ka06/risk-analysis-results.md`
   * **Slide 6 (Governance & Ask):** `references/templates/ka03/governance-approach.md` and sign-off targets.
3. **Strict C-Level Reading Constraints:**
   * **Bullet Limit:** Maximum of **3 bullets** per slide.
   * **Word Limit:** Maximum of **10 words** per bullet.
   * **No Technical Jargon:** Absolutely no use cases, database field names, test case IDs, or raw functional specs. Translate everything to business value.
4. **Slide Export Compatibility:**
   * This template is natively compatible with the **`@frontend-slides`** skill. When export is triggered, render the slides in clean, standard Marp/Midi-compatible markdown.
   * Fallback command: `python references/scripts/export-to-office.py --format pptx --input-file executive-pitch-deck.md`

---

# EXECUTIVE PITCH DECK: [INSERT: Initiative / Project Name]

*Subtitle: Strategic Requirements Baseline & Investment Gate Review*  
*Date:* [INSERT: ISO Date] | *Presenter:* [INSERT: Lead Business Analyst / Architect]

---

## Slide 1: Executive Title & Strategic Intent
*   **Headline:** Approval Request: [INSERT: Project Name]
*   **Sub-Headline:** Unlocking [INSERT: Primary Strategic Goal, e.g., 10% Revenue Growth]
*   **Slide Body (Max 3 bullets):**
    *   Proposed requirements baseline is fully verified and strategically aligned.
    *   Seeking formal approval to transition from analysis to development.
    *   Execution plan ensures compliance, low risk, and measurable ROI.
*   **Recommended Visual:** Hero banner with corporate logo and high-contrast minimal background.
*   **Data Source:** `references/templates/ka06/solution-scope.md` (Strategic Intent section).

---

## Slide 2: The Business Opportunity (The "Why")
*   **Headline:** Solving [INSERT: Key Business Problem]
*   **Sub-Headline:** High-value opportunity addressing current-state capability gaps.
*   **Slide Body (Max 3 bullets):**
    *   **Current Pain:** [INSERT: Heaviest cost or business driver gap].
    *   **Strategic Impact:** Bridging this gap enables crucial market differentiation.
    *   **Target State:** [INSERT: Expected future state outcome in 1-2 words].
*   **Recommended Visual:** Split-screen layout: left side showing Current State Gap (Red), right side showing Future State Capability (Green).
*   **Data Source:** `references/templates/ka06/business-requirements.md` (Traceability Matrix - Driver Statement).

---

## Slide 3: Solution Scope Boundary (The "What")
*   **Headline:** Core Capabilities & Scope
*   **Sub-Headline:** Defining precise delivery boundaries for high-value execution.
*   **Slide Body (Max 3 bullets):**
    *   **In-Scope:** [INSERT: Top 1-2 high-priority capability groups].
    *   **Out-of-Scope:** [INSERT: Crucial exclusion to prevent scope creep].
    *   **Phasing:** Focused delivery prioritizing rapid business validation first.
*   **Recommended Visual:** Two-column table side-by-side: `In-Scope` vs. `Out-of-Scope` (Solution Boundary Matrix).
*   **Data Source:** `references/templates/ka06/solution-scope.md` (Governance & Scope boundaries).

---

## Slide 4: Financial Case & Expected Value (ROI)
*   **Headline:** High-Return Investment Model
*   **Sub-Headline:** Positive cash-flow projection justified by robust financial analysis.
*   **Slide Body (Max 3 bullets):**
    *   **Investment Required:** [INSERT: Estimated total project cost/effort].
    *   **Annual Benefits:** [INSERT: Expected annual savings or revenue boost].
    *   **Strategic ROI:** [INSERT: Projected ROI %] with [INSERT: Payback Period] months payback.
*   **Recommended Visual:** Clean bar chart representing Cost vs. Cumulative Value over 3 years, or a large, high-impact ROI call-out card.
*   **Data Source:** `references/templates/ka06/potential-value.md` (Financial Analysis section).

---

## Slide 5: Critical Risks & Mitigations
*   **Headline:** De-Risking the Delivery
*   **Sub-Headline:** Active governance plan managing high-impact project risks.
*   **Slide Body (Max 3 bullets):**
    *   **Risk 1:** [INSERT: High-priority risk] ➔ **Mitigation:** [INSERT: Short action].
    *   **Risk 2:** [INSERT: High-priority risk] ➔ **Mitigation:** [INSERT: Short action].
    *   **Risk 3:** [INSERT: High-priority risk] ➔ **Mitigation:** [INSERT: Short action].
*   **Recommended Visual:** Risk assessment grid (Likelihood vs. Impact) or a clean mitigation table.
*   **Data Source:** `references/templates/ka06/risk-analysis-results.md` (Residual Risk Register).

---

## Slide 6: The "Ask" (Decision Gate & Sign-off)
*   **Headline:** Formal Sign-Off & Next Steps
*   **Sub-Headline:** Requesting authorization to trigger development phase.
*   **Slide Body (Max 3 bullets):**
    *   **The Request:** Approve the baselined Business Requirements Matrix (BRM).
    *   **Next Milestone:** Release requirements to technical team and begin Sprint 1.
    *   **Commitment:** Governance board will monitor monthly benefits realization.
*   **Recommended Visual:** Sign-off signatures placeholder with approval checkboxes for Executive Sponsor and Business Owner.
*   **Data Source:** `references/templates/ka03/governance-approach.md` (Approval Authorities).
