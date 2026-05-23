---
description: Detailed guidance for completing each of the 13 Use Case specification fields with professional examples.
metadata:
  tags: [guide, template, use-case, specification]
  source: internal
---

# Use Case Specification Field-by-Field Guide

This guide provides comprehensive definitions, rules, and professional examples for successfully completing each of the 13 fields in the standard Use Case specification template.

---

## 1. Use Case ID

**Purpose:** A unique identifier that establishes traceability between requirements, functional models, code components, and QA test cases.

**Rules:**
*   **Format:** Use a consistent scheme like `UC-[MODULE]-[SEQ]` (e.g., `UC-LEARN-01`) or a hierarchical decimal format like `UC-X.Y` for related sub-flows.
*   **Zero Ambiguity:** Avoid embedding the descriptive name into the ID (e.g., do not write `UseCase_CourseEnrollment`), as name changes will break downstream traceability links.
*   **Padding:** Pad numbers with leading zeros (e.g., `01`, `002`) to ensure files sort logically in directories and catalogs.

**Good Examples:**
*   `UC-PAY-01` (Payment module, Use Case #1)
*   `UC-MENTOR-03` (Mentoring module, Use Case #3)
*   `UC-3.2` (Hierarchical structure, the 2nd sub-use case of Group 3)

**Bad Examples:**
*   `UC1` (lacks module classification and padding)
*   `UseCase_SubmitCheckout` (hard to maintain; name changes invalidate the ID)

---

## 2. Use Case Name

**Purpose:** A concise label that summarizes the primary goal of the Use Case.

**CRITICAL Rules:**
*   **Form:** **MUST** follow the **"Action Verb + Direct Object"** active voice pattern.
*   **Conciseness:** Keep it between 3 and 7 words.
*   **No Actor in Name:** Do not start the name with the actor (e.g., *Wrong:* "Customer Places Order").
*   **No Vague Verbs:** Do not use vague, generic verbs such as "manage", "handle", "process", or "do". If a feature is complex, split it (e.g., instead of "Manage Profile", write "View Profile", "Update Profile Details", and "Upload Profile Avatar").

**Good Examples:**
*   ✅ "Enroll in Online Course"
*   ✅ "Book One-on-One Mentoring Session"
*   ✅ "Issue Completion Certificate"
*   ✅ "Approve Identity Verification Application"
*   ✅ "Assign Enterprise License to Employee"

**Bad Examples $\rightarrow$ Corrected:**
*   ❌ "Enrollment" *(No active verb)* $\rightarrow$ ✅ "Enroll in Online Course"
*   ❌ "Student Books Session" *(Includes the actor)* $\rightarrow$ ✅ "Book Mentoring Session"
*   ❌ "Manage Learning Path" *(Vague verb)* $\rightarrow$ Split into: "Create Learning Path", "Update Learning Path", and "Archive Learning Path".
*   ❌ "Certificate is Issued" *(Passive voice)* $\rightarrow$ ✅ "Issue Completion Certificate"

---

## 3. Use Case History

**Purpose:** Maintains an audit trail for the specification document.

**Fields to Complete:**
*   **Created By:** Full name and role of the author (e.g., "Jane Doe, Lead Business Analyst").
*   **Date Created:** Formatted in ISO standard: `YYYY-MM-DD`.
*   **Last Updated By & Date Last Updated:** Update continuously on every revision.
*   **No Blank Fields:** Use `<TBD>` or `<N/A>` instead of leaving fields blank.

---

## 4. Actor

**Purpose:** Identifies who or what initiates or supports the Use Case interaction.

**Actor Classifications:**
*   **Primary Actor:** The entity or role that initiates the Use Case to achieve a personal or business goal.
*   **Secondary Actor:** An external system, service, API, or person that the system must interact with to complete the Use Case (e.g., Payment Gateway, SMS Gateway, Calendar Service).
*   **Off-stage Stakeholder:** A party interested in the outcome but who does not interact directly with the system (e.g., Auditors, Regulators). *Note: Do not list off-stage stakeholders in this field; document them in the business rules or assumptions.*

**Rules:**
*   **Specific Roles:** Always specify a concrete user role or system class. **NEVER** use the generic term "User".
*   **Singular Focus:** A Use Case should have exactly one Primary Actor. If multiple roles initiate the flow, verify if their goals are different (which requires separate Use Cases).

**Good Examples:**
*   ✅ "Primary Actor: Enrolled Student (Premium tier, account active)"
*   ✅ "Primary Actor: Certified Mentor (Active teaching status)"
*   ✅ "Primary Actor: HR Manager (Enterprise partner administrator)"
*   ✅ "Primary Actor: Administrator; Secondary Actor: Payment Gateway (PCI-compliant API)"

**Bad Examples:**
*   ❌ "User" *(Too generic)*
*   ❌ "Student" *(Ambiguous — does it mean a registered, guest, or suspended student?)*
*   ❌ "System" *(The system is the host of the interaction, not an actor)*

---

## 5. Description

**Purpose:** A 2-3 sentence overview that allows stakeholders to understand the Use Case context quickly.

**Standard Pattern:**
Use this pattern to ensure all key context points are addressed:
`When [Trigger Condition occurs], the [Primary Actor] [performs System Action] in order to [achieve Business/User Outcome].`

**Good Example:**
> "When an enrolled student completes 100% of the lessons and passes the final assessment of a course, the student navigates to the accomplishments dashboard to request their certificate. The Use Case ends when a secure, verified PDF certificate is generated, downloaded by the student, and logged in the achievements registry."

---

## 6. Preconditions

**Purpose:** Defines criteria that **must be true** before the Use Case can be executed.

**CRITICAL Rules:**
*   **Verifiability:** Every precondition must represent a boolean state that the system can verify (e.g., "account is active").
*   **Verifiable States:** Number them clearly: 1, 2, 3...
*   **Precondition vs. Business Rule:**
    *   *Precondition:* Must be true *before* the trigger occurs.
    *   *Business Rule:* Enforced *during* flow execution (e.g., validating transaction limits).
*   **Precondition vs. Assumption:**
    *   *Precondition:* A hard technical requirement for the Use Case to start.
    *   *Assumption:* A belief accepted as true but not verified by the system logic.

**Good Example:**
```
1. Customer has logged in with an active, non-suspended account.
2. Customer has completed 100% of the course curriculum.
3. Customer has achieved a score of >= 70% on the final assessment.
4. Certificate generation service is online and accessible.
```

**Bad Examples:**
*   ❌ "System is working" *(Not verifiable)*
*   ❌ "Customer wants a certificate" *(Subjective motivation, not a technical state)*
*   ❌ "Customer has a valid credit card" *(A precondition for payment, not for certificate generation)*

---

## 7. Postconditions

**Purpose:** Describes the guaranteed state of the system **after** successful completion.

**Rules:**
*   **Verifiable State:** Must be checkable via database queries or system audits.
*   **Comprehensive Coverage:** Document state changes across the database (records created/updated), user interface (notifications sent/files loaded), and external integrations.
*   **State vs. Action:** A postcondition is a **passive state**, not an active step.
    *   *Correct (State):* "Order record is saved in the database with status='Paid'."
    *   *Incorrect (Action):* "System saves the order record in the database." (This belongs in the Normal Course steps).

**Good Example:**
```
1. Completion certificate record is created in the Achievements database with a unique verification code.
2. Certificate PDF is compiled and saved in secure cloud storage with a permanent, read-only URL.
3. Customer's portal achievements list is updated to display the earned course badge.
4. An automated congratulations email containing the PDF download link is queued for delivery.
```

---

## 8. Priority

**Purpose:** Defines the implementation priority to aid release planning.

**Rule:** Use a consistent scheme (e.g., High/Medium/Low or MoSCoW) and provide a one-sentence justification.

**Good Examples:**
*   "High — Core capability; directly tied to user retention metrics and course completion targets."
*   "Medium — Enhances corporate portal administration; planned for the Phase 2 rollout."

---

## 9. Frequency of Use

**Purpose:** Quantitative estimates of execution volumes to guide performance engineering and database capacity planning.

**Rule:** Avoid qualitative statements (e.g., "sometimes", "often"). Always use specific metrics per time unit (second, hour, day).

**Good Examples:**
*   "Average: 500 course registrations per day; peak volume: 120 per hour during promotional campaigns."
*   "Average: 30 sessions scheduled per day; peak volume occurs on Sunday evenings."

---

## 10. Normal Course of Events

**Purpose:** Outlines the "Happy Path" — the sequential steps from the initial trigger to successful completion, assuming no errors occur.

**CRITICAL Rules:**
*   **Formatting:** Numbered steps (1, 2, 3...), keeping each step to one single active action.
*   **Explicit Subject:** Start every step with the actor or the system (e.g., "1. The Customer clicks...", "2. The System validates..."). Never write steps in the passive voice.
*   **Alternating Flow:** Alternate between Actor input and System response where possible.
*   **NO Branching Logic:** Do not embed `if`, `else`, `loop`, or exceptions inside the Normal Course. Divergent paths belong in the Alternative and Exception sections.

**Good Example:**
```
1. The Customer selects the target course from the learning catalog.
2. The System displays the course landing page, details, and enrollment button.
3. The Customer clicks the "Enroll Now" button.
4. The System verifies that the Customer has an active account.
5. The System redirects the Customer to the registration payment checkout.
```

---

## 11. Alternative Courses

**Purpose:** Branching paths that diverge from the main flow but still result in a successful outcome (i.e., meeting the success postconditions).

**Rules:**
*   **ID Format:** `UC-[MODULE]-[SEQ].AC.[Number]`
*   **Trigger Mapping:** Always start with: "At step [N] of the Normal Course, if [condition], execute the alternative:"
*   **Rejoin Step:** State clearly where the flow rejoins the Normal Course or if it terminates in success.

**Good Example:**
```
UC-ENROLL-01.AC.1: Enroll using a Corporate Voucher
At step 3 of the Normal Course, if the Customer selects "Voucher" as the checkout method:
3a. The System displays a voucher code entry field.
3b. The Customer enters their corporate voucher code and clicks "Apply".
3c. The System verifies voucher validity and remaining uses.
3d. The System sets the balance due to $0 and redirects to the confirmation step (rejoining the Normal Course at Step 5).
```

---

## 12. Exceptions

**Purpose:** Branching paths triggered by errors, validations, or failures that prevent the actor from achieving their goal, terminating the Use Case in a **Failure Postcondition**.

**Rules:**
*   **ID Format:** `UC-[MODULE]-[SEQ].EX.[Number]`
*   **Standard Composition:** Must document:
    1.  **Trigger Condition:** What failed?
    2.  **System Response:** How did the system react?
    3.  **Final State:** What is the final system state (e.g., transaction rolled back)?

**Good Example:**
```
UC-ENROLL-01.EX.1: Transaction Declined by Gateway
Trigger: At Step 4 of the Normal Course, the external Payment Gateway returns a transaction decline response.
Response: The System displays the message: "Transaction declined. Please check your payment details or use a different card."
Final State: No funds are debited, no enrollment record is generated, and the shopping cart state remains intact. The Use Case terminates in Failure.
```

---

## 13. Includes

**Purpose:** Reuses shared system interactions across multiple Use Cases (UML `«include»` semantics).

**Rule:** Only list sub-use cases that are fully documented and have their own unique specifications. Do not use Includes to break down simple, non-reusable steps.

**Good Example:**
*   `UC-PAY-01: Process payment` (called at Step 4 of `UC-ENROLL-01`)
*   `UC-NOTI-03: Send system notification` (called at Step 5 of `UC-ENROLL-01`)

---

## 14. Special Requirements

**Purpose:** Non-functional requirements (NFRs) constrained to this specific Use Case.

**Categories:**
*   **Performance:** e.g., "The enrollment validation must execute in under 1.5 seconds under a load of 1,000 concurrent requests."
*   **Security:** e.g., "All credit card payloads must be encrypted using TLS 1.3 during transit."
*   **Compliance:** e.g., "Tax calculations must comply with the regional digital services tax laws."

---

## 15. Assumptions

**Purpose:** Statements believed to be true during analysis but not checked or verified by the system's runtime code.

**Good Example:**
```
1. Customer's email provider is online; welcome emails will not bounce.
2. Payment Gateway API maintains at least 99.9% uptime.
3. Corporate vouchers have been validated and loaded by operations prior to distribution.
```

---

## 16. Notes and Issues

**Purpose:** Tracks open questions, TBDs, and implementation notes.

**Format:**
`[TBD-N] | [Description of Issue] | [Assignee/Owner] | [Target Date] | [Resolution Status]`

---
*Standardized for Enterprise AI Environments*
