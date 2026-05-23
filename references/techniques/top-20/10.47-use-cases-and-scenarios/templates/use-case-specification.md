---
description: Blank 13-field Use Case specification template following Karl Wiegers and Alistair Cockburn industry standards.
metadata:
  tags: [template, use-case, specification, functional-requirements]
  source: internal
---

# Use Case Specification Template

This template implements the industry-standard 13-field Use Case specification layout. Use it to detail system-actor interactions, conditions, and error boundaries.

---

## Use Case Profile & Metadata

| Field | Description / Value |
| :--- | :--- |
| **Use Case ID:** | `UC-[MODULE]-[SEQ]` |
| **Use Case Name:** | `[Action Verb + Noun in active voice]` |
| **Created By:** | `[Author Name]` |
| **Date Created:** | `[YYYY-MM-DD]` |
| **Last Updated By:** | `[Updater Name]` |
| **Date Last Updated:** | `[YYYY-MM-DD]` |

---

## Context & Conditions

| Field | Description / Value |
| :--- | :--- |
| **Actor:** | **Primary Actor:** [The specific persona or role initiating the Use Case]<br>**Secondary Actor(s):** [Supporting systems, payment gateways, or background processes] |
| **Description:** | [2-3 sentences explaining who initiates the task, what action they take, and the final business outcome achieved] |
| **Preconditions:** | 1. [Hard verifiable condition that must be true before the Use Case starts]<br>2. [e.g., User is logged in and has verified their email address] |
| **Postconditions:** | **Postcondition (Success):**<br>1. [Verifiable state of the system after successful happy path completion]<br>2. [e.g., Transaction recorded, status updated to 'Paid', and access is granted]<br><br>**Postcondition (Failure):**<br>1. [Verifiable state of the system if execution fails or is terminated by an exception]<br>2. [e.g., Payment rolls back, cart remains unchanged, and error log is saved] |
| **Priority:** | `High / Medium / Low` |
| **Frequency of Use:** | `[Estimated number of executions per unit time, e.g., 500 times / hour]` |

---

## Interaction Flows

### 1. Normal Course of Events (Main Flow / Happy Path)

*Alternate between Actor actions and System responses. Keep steps active, concise, and numbered.*

| Step | Action Description |
| :--- | :--- |
| **Step 1** | **Actor:** [The primary actor initiates the use case, e.g., clicks the button] |
| **Step 2** | **System:** [The system responds by loading details, validating state, or prompting for input] |
| **Step 3** | **Actor:** [The actor inputs data or confirms selection] |
| **Step 4** | **System:** [The system processes the request, communicates with secondary systems, or updates states] |
| **Step 5** | **System:** [The system completes the goal, displays the success page, and terminates in Success state] |

---

### 2. Alternative Courses

*Branching paths that diverge from the main flow but still lead to successful postconditions.*

#### `UC-[MODULE]-[SEQ].AC.1`: [Alternative Course Name]
*Triggered at Step [N] of the Normal Course when [specific condition occurs].*
- **AC.1.1:** [Describe the alternative step executed by the actor or system]
- **AC.1.2:** [Describe subsequent steps until the flow rejoins the Normal Course at Step [M] or terminates in Success]

---

### 3. Exceptions

*Branching paths triggered by errors or failures that terminate the Use Case in a Failure state.*

#### `UC-[MODULE]-[SEQ].EX.1`: [Exception Course Name]
*Triggered at Step [N] of the Normal Course when [error or validation failure occurs].*
- **EX.1.1:** [The system detects the error state, e.g., payment gateway decline or timeout]
- **EX.1.2:** [The system displays a specific, descriptive error message to the actor]
- **EX.1.3:** [The system rolls back temporary database records to guarantee the Failure Postcondition]
- **EX.1.4:** The Use Case terminates in Failure state.

---

## Supporting Details

| Field | Description / Value |
| :--- | :--- |
| **Includes:** | `[ID of sub-use case called by this use case, e.g., UC-PAY-01]` |
| **Special Requirements:** | 1. **Performance:** [e.g., Page loads in under 2 seconds for 10,000 concurrent users]<br>2. **Security:** [e.g., Passwords must be hashed using bcrypt before storage]<br>3. **Usability:** [e.g., Screen must adjust dynamically for mobile touch targets] |
| **Assumptions:** | 1. [Analyst beliefs or industry context taken as true but unverified]<br>2. [e.g., The payment gateway maintains 99.9% operational uptime] |
| **Notes and Issues:** | `[TBD-1] | [Open issue description] | [Owner] | [Due Date] | [Resolution Status]` |
