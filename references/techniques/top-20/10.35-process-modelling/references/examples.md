---
description: High-fidelity enterprise and EdTech examples for Flowcharts, BPMN 2.0, and UML diagrams.
---

# Process Modelling High-Fidelity Examples

This reference document contains three high-fidelity, production-grade examples representing standard real-world operational scenarios in EdTech and Enterprise systems.

---

## Example 1: Standard Flowchart / User Flow (EdTech Password Reset)

### 1. Business Scenario
A parent attempts to reset their forgotten password on the SchoolsBuddy Mobile App. The system must verify their registered email address, trigger a time-limited OTP code, validate their input, permit them to write a new password complying with security standards, and handle any validation errors or timeout scenarios gracefully.

### 2. Mermaid Diagram (Draw.io Compatible)

```mermaid
graph TD
    Start([Start: Parent clicks Reset Password]) --> Step1("Enter Registered Email Address")
    Step1 --> Dec1{"Does Email Exist?"}
    
    %% Email validation branches %%
    Dec1 -- "No" --> Err1["Show Email Not Found Message"]
    Err1 --> Step1
    
    Dec1 -- "Yes" --> Step2("Generate and Send 6-Digit OTP")
    Step2 --> Step3("Enter OTP on Screen")
    Step3 --> Dec2{"Is OTP Valid?"}
    
    %% OTP validation branches %%
    Dec2 -- "No (Expired/Incorrect)" --> Err2["Show Invalid OTP Error"]
    Err2 --> Dec3{"Attempt Limit Exceeded?"}
    Dec3 -- "Yes" --> Err3["Block Requests for 15 Mins"]
    Err3 --> EndFail([End State: Transaction Blocked])
    Dec3 -- "No" --> Step3
    
    Dec2 -- "Yes" --> Step4("Enter and Confirm New Password")
    Step4 --> Dec4{"Password Meet Complexity Rules?"}
    Dec4 -- "No" --> Err4["Show Complexity Warning"]
    Err4 --> Step4
    
    Dec4 -- "Yes" --> Step5("Save New Password & Log In Parent")
    Step5 --> EndSuccess([End State: Password Reset Successfully])
```

---

## Example 2: BPMN 2.0 Diagram (Tuition Payment Flow)

### 1. Business Scenario
The school accounting system generates a quarterly tuition invoice. The parent reviews the invoice on SchoolsBuddy and executes an online payment via the RedDot payment gateway. The gateway validates credentials, queries the bank core, processes the payment, and throws a webhook response. The school accounting lane catches the payment confirmation, marks the invoice paid, and generates an official electronic invoice (e-invoice). If a timeout occurs, a timer event triggers transaction cancellation.

### 2. Pool & Lane Allocation Matrix
*   **Pool A: Parent Pool (Customer)** - Lane: Parent Actor.
*   **Pool B: School Enterprise Pool** - Lanes: SchoolsBuddy Client App, Core Database Engine, Accounting Department.
*   **Pool C: Bank Payment Portal Pool (External)** - Lane: RedDot Payment Gateway.

### 3. BPMN 2.0 Conceptual Diagram (Mermaid)

```mermaid
graph TD
    subgraph Parent_Pool ["Parent Pool"]
        P_Start([Start: Tuition Invoice Received]) --> P_Step1("Review Invoice Details")
        P_Step1 --> P_Step2("Authorize Online Payment")
    end
    
    subgraph School_Enterprise_Pool ["School Enterprise Pool"]
        subgraph App_Lane ["SchoolsBuddy Client App"]
            App_Step1("Display Invoice UI")
            App_Step2("Redirect to RedDot Gateway")
            App_Step3("Display Payment Success UI")
        end
        
        subgraph Core_System_Lane ["Core System Database"]
            Core_Step1("Verify Account Balance")
            Core_Step2("Mark Invoice Status as Paid")
        end
        
        subgraph Accounting_Lane ["Accounting Department"]
            Acct_Step1("Generate Electronic e-Invoice")
            Acct_Step2("Reconcile Accounts Balance")
        end
    end
    
    subgraph RedDot_Gateway_Pool ["RedDot Gateway Pool"]
        Red_Step1("Validate Card Credentials")
        Red_Step2("Execute Bank Core Transaction")
        Red_Step3("Trigger Webhook Payment Notification")
    end

    %% Pool-to-Pool & Lane-to-Lane Connections %%
    P_Start -.-> App_Step1
    App_Step1 --> P_Step1
    P_Step1 --> P_Step2
    P_Step2 -.-> Core_Step1
    Core_Step1 --> App_Step2
    App_Step2 -.-> Red_Step1
    Red_Step1 --> Red_Step2
    Red_Step2 --> Red_Step3
    Red_Step3 -.-> Core_Step2
    Core_Step2 --> App_Step3
    Core_Step2 --> Acct_Step1
    Acct_Step1 --> Acct_Step2
```

---

## Example 3: UML Sequence Diagram (Enterprise Single Sign-On - SSO)

### 1. Business Scenario
A high-fidelity system interaction sequence diagram detailing how a mobile application verifies user identity via an Enterprise Active Directory (LDAP) server using a JSON Web Token (JWT) exchange.

### 2. UML Sequence Mermaid Specification

```mermaid
sequenceDiagram
    autonumber
    actor User as Parent User
    participant App as Mobile App Client
    participant API as Gateway Router API
    participant Auth as SSO Auth Server
    participant DB as Active Directory (LDAP)

    User->>App: Clicks Login (Enter credentials)
    App->>API: HTTP POST /auth/login (email, password)
    activate API
    API->>Auth: Forward Credentials Payload (JSON Web Token Sign-request)
    activate Auth
    Auth->>DB: Query LDAP Registry (email, passwordhash)
    activate DB
    DB-->>Auth: LDAP Response (User Details & Role Groups)
    deactivate DB
    
    alt Credentials Valid
        Auth->>Auth: Sign JSON Web Token (JWT) with private key
        Auth-->>API: HTTP 200 OK (access_token, refresh_token)
        API-->>App: Return Authenticated Session Payload
        App-->>User: Display Home Dashboard (Logged In)
    else Credentials Invalid
        Auth-->>API: HTTP 401 Unauthorized (error_code: "AUTH_009")
        deactivate Auth
        API-->>App: Forward Error payload
        deactivate API
        App-->>User: Show "Incorrect Username or Password" message
    end
```
