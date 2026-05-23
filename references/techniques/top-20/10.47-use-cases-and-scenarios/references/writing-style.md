---
description: Writing style guide and conventions for Use Case modeling following Alistair Cockburn and IIBA standards.
metadata:
  tags: [style-guide, conventions, use-case, writing]
  source: internal
---

# Use Case Writing Style & Standards

This document compiles the core writing principles, linguistic rules, and formatting standards for drafting highly readable and professional Use Case specifications.

---

## The Core Principle: Readability First

Alistair Cockburn's supreme guideline: **"Write clearly. Readability is the most important thing."**

A high-quality Use Case specification must be:
*   **Business-Readable:** Clear enough for non-technical business stakeholders to validate logic.
*   **Actionable:** Precise enough for developers to implement the system behavior.
*   **Testable:** Objective enough for QA engineers to design thorough test suites.
*   **Maintainable:** Easy for a new Business Analyst to read, comprehend, and update when requirements change.

---

## Linguistic Rules

### Rule 1: Active Voice & Present Tense

#### Active Voice
Every step **MUST** use the active voice where the subject performs the action. Never use the passive voice.
*   ✅ **Active:** "The Customer clicks the **Enroll Now** button."
*   ❌ **Passive:** "The **Enroll Now** button is clicked by the Customer."
*   ✅ **Active:** "The System saves the checkout record in the database."
*   ❌ **Passive:** "The checkout record is saved in the database by the System."

#### Present Tense
Always write in the simple present tense. Never use future or past tenses.
*   ✅ **Simple Present:** "The System displays the order confirmation screen."
*   ❌ **Future:** "The System will display the order confirmation screen."
*   ❌ **Past:** "The System displayed the order confirmation screen."

### Rule 2: Explicit Subjects (Subject + Verb + Object)
Every step in the interaction flows must start with an explicit, well-defined subject (either the specific Actor role or the "System"). Never leave the subject implied or missing.
*   ✅ **Explicit:** "The Student selects a preferred mentoring session slot."
*   ❌ **Implicit:** "Selects a preferred slot." (Lacks subject).
*   ✅ **Explicit:** "The System validates the Student's remaining session quota."
*   ❌ **Implicit:** "Validates the remaining quota." (Unclear who performs the validation).

### Rule 3: One Action Per Step
Each step in the Normal Course must describe exactly one atomic action. If a step contains the word "and" connecting two distinct system or actor actions, split the step.
*   ✅ **Correct:** "3. The Student enters the email address and shipping details." (Grouped input action on a single form).
*   ❌ **Incorrect:** "3. The Student enters the billing details and clicks **Submit**." $\rightarrow$ Split into:
    *   "3. The Student enters the billing details."
    *   "4. The Student clicks the **Submit** button."
*   *Rationale:* Clicking the button triggers system validation. If validation fails, an Exception Flow must be attached to the click action. Splitting the step makes this mapping clean and testable.

### Rule 4: Use Precise Verbs
Avoid vague, generic verbs. Always choose precise, measurable actions:

| ❌ Vague Verb | ✅ Precise Verb |
| :--- | :--- |
| **Manage** | Create, Update, Archive, View |
| **Handle** | Validate, Process, Reject, Escalate |
| **Do** | Submit, Approve, Assign, Generate |
| **Make** | Issue, Compile, Render, Compute |
| **Get** | Retrieve, Fetch, Query, Download |
| **Use** | Apply, Invoke, Execute, Redeem |

*Apply this rule to both the Use Case Name and individual step narratives.*

---

## Modeling Conventions

### Rule 5: Keep Flows Technology-Abstract
A Use Case describes **WHAT** the system and actor exchange (functional interactions), not **HOW** they achieve it (technical implementation). Leave system design details for the architecture specifications.
*   ❌ **Too Technical:** "The System calls `POST /api/v1/enrollments` with body `{course_id, customer_id}`..."
*   ✅ **Correct:** "The System creates an enrollment record in the learning management database."
*   ❌ **Too Technical:** "The System renders the `<EnrollmentSuccessModal>` React component..."
*   ✅ **Correct:** "The System displays the **Enrollment Confirmed** screen containing the course name."

### Rule 6: Consistent Numbering Schemes
*   **Normal Course:** Use a sequential numbered list starting at Step 1.
*   **Alternative Courses:** Use sub-step lettering mapped to the parent step:
    *   *Example:* Diverging at Step 3 $\rightarrow$ `3a`, `3b`, `3c`.
    *   Always conclude the alternative flow by stating: "Rejoin the Normal Course at Step [N]" or "The Use Case terminates in Success."
*   **Exceptions:** Formatted independently as `UC-[MODULE]-[SEQ].EX.[Number]` to isolate failure boundaries.
*   **Conditions:** Use numbered lists for preconditions and postconditions.

### Rule 7: Documenting UI Elements
When referencing a user interface element in a step, capitalize the name and format it in **bold** exactly as it appears on screen:
*   ✅ "The Customer clicks the **Checkout** button."
*   ✅ "The System displays the **Order Summary** dashboard."
*   ✅ "The Customer selects **Credit Card** from the **Payment Method** list."

### Rule 8: Avoid Vague Quantifiers & Adjectives

| ❌ Vague Term | ✅ Precise Representation |
| :--- | :--- |
| "In some cases..." | "When condition [X] occurs..." |
| "May" / "Can" | "When [condition], the System [action]..." |
| "Sometimes" | Specify a quantified frequency or rule constraint. |
| "Valid" | List the explicit validation rules (e.g., email has `@`). |
| "Quickly" | Specify a performance limit (e.g., "Within 2 seconds"). |
| "User" | Specify the concrete role (e.g., Student, Administrator). |

### Rule 9: Externalize Business Rules
A Use Case describes interaction **flow**, not static business calculations. Move complex rules, calculations, or validations to a separate Business Rules Document or document them in the **Special Requirements** section:
*   ❌ **Incorrect:** "5. The System validates: the session topic must be $\le$ 500 characters, the student must have $\ge$ 1 session credit, the slot must be $\ge$ 2 hours in the future..."
*   ✅ **Correct:** "5. The System validates the session request according to Business Rule `BR-MENTOR-01`."
    *   *(Then document the specific criteria under `BR-MENTOR-01` in the Special Requirements table).*

---

## Scope & Length Constraints

*   **Use Case Name:** 3 to 7 words.
*   **Description:** 2 to 4 sentences, 50 to 100 words.
*   **Normal Course:** 5 to 15 steps (ideally 7 to 10 steps for optimal readability).
*   **Step Length:** 1 to 2 sentences, under 30 words.
*   **Alternative Courses:** 1 to 5 alternatives per Use Case. If more are needed, split the Use Case.
*   **Exceptions:** 3 to 7 scenarios per Use Case.

---

## 🚨 Top 10 Use Case Anti-Patterns

1.  **Pixel-by-Pixel UI Specification:** Describing button colors, font sizes, or specific pop-up positions (e.g., *Wrong:* "System displays a blue `#007BFF` modal..."). This binds the Use Case to a specific layout, making redesigns costly.
2.  **Step Merging:** Cramming actor input and system response into a single step (e.g., *Wrong:* "3. The Customer enters details and the System validates."). Always split them.
3.  **Dangling Flows (Missing Response):** Documenting successive actor actions without system feedback (e.g., *Wrong:* "1. Actor clicks. 2. Actor enters data. 3. Actor submits."). This misses the dialog character of a Use Case.
4.  **Embedded Conditional Logic:** Using complex `if/else` statements inside Normal Course steps. Always move conditional branches to the Alternative or Exception sections.
5.  **Vague Triggers:** Writing subjective triggers (e.g., *Wrong:* "When the customer feels like purchasing..."). Always use verifiable actions (e.g., "When the customer clicks Checkout...").
6.  **Action-Based Postconditions:** Writing postconditions as actions instead of states (e.g., *Wrong:* "System updates the record."). Keep them passive and verifiable (e.g., "The record status is updated to 'Paid'.").
7.  **God Use Cases:** Attempting to model an entire customer journey (e.g., search, select, register, pay, and review) in a single Use Case. Split them using `<include>` relationships.
8.  **Vague System Processing:** Using lazy phrasing like "The System processes the order." Be specific about state transformations (e.g., "The System creates a payment record and updates the cart status.").
9.  **Duplicating Description:** Repeating the entire step flow inside the description box. Keep the description to a high-level summary and the flows to the detailed step list.
10. **Ignoring Exceptions:** Omitting error states or only documenting the Happy Path. A robust Use Case must cover common failure modes (timeouts, validation failures, concurrency conflicts).
