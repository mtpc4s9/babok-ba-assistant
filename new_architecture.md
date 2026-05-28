# Kiến Trúc Hệ Thống & Cấu Trúc Thư Mục Thực Tế (BA Assistant Skill)

Tài liệu này mô tả chi tiết cấu trúc thư mục vật lý và sơ đồ kiến trúc thực tế của **BABOK V3 Business Analysis Assistant Skill**. 

Toàn bộ hệ thống được thiết kế theo nguyên tắc **Di động (Portability)** và **Độc lập (Independence)**. Tất cả các liên kết chéo giữa các tài liệu đều sử dụng đường dẫn tương đối (portable relative paths), đảm bảo toàn bộ thư mục `references/` và file `SKILL.md` có thể hoạt động hoàn hảo khi được nhân bản (clone) sang bất kỳ hệ thống nào của người dùng.

---

## 📂 Sơ Đồ Cấu Trúc Thư Mục Vật Lý (Thực Tế)

Dưới đây là bản đồ cấu trúc thư mục hiện tại của dự án:

```text
babok-ba-assistant/ (Thư mục gốc của Skill trên GitHub)
├── SKILL.md                          # Trọng tâm định tuyến chính (Decision tree & Path Maps) — Tinh gọn < 60 dòng.
├── new_architecture.md               # Bản đồ cấu trúc và tài liệu kiến trúc thực tế (File này).
│
└── references/                       # [Lõi Skill] Thư mục chứa toàn bộ tri thức, quy trình, kỹ thuật và mẫu Markdown di động.
    │
    ├── ka/                           # Các Knowledge Areas (KA) đã được chuẩn hóa. Mỗi KA gồm đúng 6 files đồng nhất.
    │   │                             # ⚠️ Đọc file theo thứ tự ưu tiên: SKILL -> tasks -> guidelines-tools -> stakeholders -> techniques -> gotchas.
    │   │
    │   ├── ka03-planning/            # BA Planning & Monitoring — 5 tasks (3.1–3.5)
    │   │   ├── SKILL.md              # MỚI: Micro-orchestrator KA3, danh sách 5 tasks, định tuyến lập kế hoạch.
    │   │   ├── tasks.md              # Chi tiết các Task: Purpose, Inputs, Outputs & liên kết trực tiếp tới templates.
    │   │   ├── guidelines-tools.md   # Pre-flight checklist: Hướng dẫn định hướng và công cụ hỗ trợ cho từng task.
    │   │   ├── stakeholders.md       # Vai trò của stakeholders (Must Have/Should Have) & Approval Authority.
    │   │   ├── techniques.md         # Phân bổ Kỹ thuật (Techniques) tối ưu áp dụng cho mỗi task.
    │   │   └── gotchas.md            # Top bẫy thực tế & sai lầm thường gặp khi lập kế hoạch BA.
    │   │
    │   ├── ka04-elicitation/         # Elicitation & Collaboration — 5 tasks (4.1–4.5)
    │   │   ├── SKILL.md              # MỚI: Micro-orchestrator KA4, danh sách 5 tasks, hướng dẫn khơi gợi yêu cầu.
    │   │   ├── tasks.md              # Chi tiết Tasks: Mục đích, Inputs, Outputs & câu hỏi định hướng.
    │   │   ├── guidelines-tools.md   # Hướng dẫn & Công cụ chuẩn bị trước/trong buổi khơi gợi yêu cầu.
    │   │   ├── stakeholders.md       # Xác định người phỏng vấn/tham dự workshop (Domain SME bắt buộc).
    │   │   ├── techniques.md         # Các kỹ thuật khơi gợi phù hợp (Interviews, Workshop, Collaborative Games...).
    │   │   └── gotchas.md            # Các bẫy thường gặp trong khơi gợi (như thiên kiến xác nhận, ảo giác yêu cầu).
    │   │
    │   ├── ka05-rlcm/                # Requirements Life Cycle Management — 5 tasks (5.1–5.5)
    │   │   ├── SKILL.md              # MỚI: Micro-orchestrator KA5, điều hướng, trạng thái vòng đời yêu cầu (Status Lifecycle Map).
    │   │   ├── tasks.md              # Chi tiết Tasks: Trace, Maintain, Prioritize, Assess Changes, Approve.
    │   │   ├── guidelines-tools.md   # Hướng dẫn & Công cụ chuẩn bị trước khi cập nhật hay đánh giá thay đổi.
    │   │   ├── stakeholders.md       # Phân bổ vai trò (RACI) & Quyền hạn phê duyệt thay đổi (Change Authority).
    │   │   ├── techniques.md         # Phân bổ các kỹ thuật tối ưu (Backlog, Decision Analysis, Item Tracking...).
    │   │   └── gotchas.md            # Các bẫy thực tế: Bị động trước scope creep, bỏ qua phân tích tác động (impact).
    │   │
    │   ├── ka06-strategy/            # Strategy Analysis — 4 tasks (6.1–6.4)
    │   │   ├── SKILL.md              # MỚI: Micro-orchestrator KA6, danh sách 4 tasks, phân tích chiến lược doanh nghiệp.
    │   │   ├── tasks.md              # Chi tiết Tasks: Current State, Future State, Risks, Change Strategy.
    │   │   ├── guidelines-tools.md   # Hướng dẫn chiến lược (VD: Corporate Strategy là bắt buộc đối với Task 6.1).
    │   │   ├── stakeholders.md       # Vai trò của stakeholder cấp cao (Sponsor, C-Level) và thẩm quyền phê duyệt.
    │   │   ├── techniques.md         # Ứng dụng SWOT, Root Cause, Gap Analysis, Risk Assessment.
    │   │   └── gotchas.md            # Các bẫy: Định nghĩa tương lai mơ hồ, bỏ qua trạng thái hiện tại.
    │   │
    │   ├── ka07-radd/                # Requirements Analysis & Design Definition (RADD) — 6 tasks (7.1–7.6)
    │   │   ├── SKILL.md              # MỚI: Micro-orchestrator KA7, danh sách 6 tasks, thiết kế & mô hình hóa yêu cầu.
    │   │   ├── tasks.md              # Chi tiết Tasks: Mô hình hóa, xác thực (Verify/Validate), cấu trúc kiến trúc, đề xuất giải pháp.
    │   │   ├── guidelines-tools.md   # Hướng dẫn kiểm tra chất lượng & mô hình hóa yêu cầu (Solution Scope là bắt buộc).
    │   │   ├── stakeholders.md       # Vai trò của Domain SME, Sponsor trong việc xác thực & phê duyệt thiết kế.
    │   │   ├── techniques.md         # Kỹ thuật chuyên sâu: Use Cases, User Stories, Process/Data Modeling.
    │   │   └── gotchas.md            # Lỗi: Yêu cầu không thể kiểm thử (non-verifiable), bỏ qua bước tự audit chất lượng.
    │   │
    │   └── ka08-evaluation/          # Solution Evaluation — 5 tasks (8.1–8.5)
    │       ├── SKILL.md              # MỚI: Micro-orchestrator KA8, đo lường và đánh giá giá trị thực tế của giải pháp mang lại.
    │       ├── tasks.md              # Chi tiết các Task: Measure, Analyze, Assess Limitations, Recommend Actions.
    │       ├── guidelines-tools.md   # Hướng dẫn & Công cụ chuẩn bị trước khi đánh giá hiệu suất giải pháp.
    │       ├── stakeholders.md       # Vai trò của stakeholders (Sponsor, End User) & Approval Authority.
    │       ├── techniques.md         # Phân bổ các kỹ thuật tối ưu (Financial Analysis, Root Cause Analysis...).
    │       └── gotchas.md            # Các bẫy thực tế: Bẫy Sunk Cost, nhầm lẫn giữa Data Collection và Analysis.
    │
    ├── canonical/                          # Dữ liệu nguồn BABOK V3 dạng thô. KHÔNG load mặc định để tiết kiệm Token.
    │   ├── 01-input-output-summary.md      # Ma trận I/O gốc của toàn bộ các task trong BABOK V3.
    │   ├── 02-techniques-summary.md        # Mô tả chi tiết gốc cho tất cả 50 kỹ thuật của BABOK V3.
    │   ├── 03-guidelines-tools-summary.md  # Chi tiết Guidelines & Tools gốc cho từng task của IIBA.
    │   └── 04-stakeholders-summary.md      # Chi tiết Stakeholders gốc cho từng task của IIBA.
    │
    ├── dependencies/                 # Luồng dữ liệu và mối liên hệ chéo giữa các Tasks.
    │   ├── task-dependency-map.md    # Sơ đồ chéo Task ID → Output Artifact → Downstream Tasks & Hidden Guidelines.
    │   ├── input-catalog.md          # Danh mục tra cứu nhanh tất cả đầu vào (Inputs): Nguồn task, KA tương ứng.
    │   └── output-catalog.md         # Danh mục tra cứu nhanh tất cả đầu ra (Outputs): Task tạo ra, Task tiêu thụ.
    │
    ├── techniques/                   # Phân hệ tra cứu nhanh kỹ thuật BABOK V3 theo mục đích sử dụng.
    │   ├── quick-reference.md        # Bảng tra cứu gọn gàng 50 kỹ thuật: ID | Name | When to Use | KA.
    │   ├── by-situation.md           # Hướng dẫn chọn kỹ thuật phù hợp theo tình huống thực tế của doanh nghiệp.
    │   ├── fallback-rule.md          # MỚI: Quy tắc xử lý khi sử dụng kỹ thuật ngoài Top 20 và phỏng vấn khơi gợi.
    │   └── top-20/                   # Tài liệu hướng dẫn thực thi chuyên sâu cho 20 kỹ thuật cốt lõi và phổ biến nhất.
    │       ├── 10.35-process-modelling/                     # Folder chứa các kỹ thuật chuyên sâu thuộc Process Modelling.
    │       ├── 10.47-use-cases-and-scenarios/               # Folder chứa các kỹ thuật chuyên sâu thuộc Use Cases Writing Skill.
    │       ├── 10.48-user-stories/                          # Folder chứa các kỹ thuật chuyên sâu thuộc User Stories Writing Skill.
    │       ├── 10.01-acceptance-and-evaluation-criteria.md  # Tiêu chí nghiệm thu và đánh giá.
    │       ├── 10.07-business-cases.md                      # Lập Business Cases tài chính.
    │       ├── 10.08-business-model-canvas.md               # Mô hình kinh doanh Canvas.
    │       ├── 10.09-business-rules-analysis.md             # Phân tích Luật kinh doanh.
    │       ├── 10.12-data-dictionary.md                     # Từ điển dữ liệu.
    │       ├── 10.13-data-flow-diagrams.md                  # Sơ đồ luồng dữ liệu (DFD).
    │       ├── 10.15-data-modelling.md                      # Mô hình hóa dữ liệu (ERD).
    │       ├── 10.17-decision-modelling.md                  # Mô hình hóa quyết định.
    │       ├── 10.18-document-analysis.md                   # Phân tích tài liệu sẵn có.
    │       ├── 10.20-financial-analysis.md                  # Phân tích tài chính (ROI, Cost-Benefit).
    │       ├── 10.24-interface-analysis.md                  # Phân tích giao tiếp hệ thống.
    │       ├── 10.30-non-functional-requirements-analysis.md # Phân tích yêu cầu phi chức năng (NFR).
    │       ├── 10.34-process-analysis.md                    # Phân tích và tối ưu quy trình.
    │       ├── 10.40-root-cause-analysis.md                 # Phân tích nguyên nhân gốc rễ (5 Whys, Fishbone).
    │       ├── 10.41-scope-modelling.md                     # Mô hình hóa phạm vi (Context Diagram).
    │       ├── 10.43-stakeholder-list-map-or-personas.md    # Phân tích và lập bản đồ Stakeholders.
    │       └── 10.44-state-modelling.md                     # Mô hình hóa trạng thái (State Diagram).
    │
    ├── templates/                    # Khung sườn tài liệu Markdown phân mảnh (Modular Markdown Templates).
    │   ├── ka03/                     # Templates lập kế hoạch BA (Tách biệt thành 5 file độc lập chuẩn hóa)
    │   │   ├── business-analysis-approach.md               # Phương pháp tiếp cận BA (Task 3.1)
    │   │   ├── business-analysis-performance-assessment.md # Đánh giá hiệu suất BA (Task 3.5)
    │   │   ├── governance-approach.md                      # Kế hoạch quản trị yêu cầu (Task 3.3)
    │   │   ├── information-management-approach.md          # Kế hoạch quản lý thông tin BA (Task 3.4)
    │   │   └── stakeholder-engagement-approach.md          # Kế hoạch tương tác stakeholders (Task 3.2)
    │   │
    │   ├── ka04/                     # Templates khơi gợi và cộng tác (KA4)
    │   │   ├── business-analysis-information-communicated.md # Kế hoạch/Báo cáo truyền thông thông tin BA (Task 4.4/4.5)
    │   │   ├── elicitation-activity-plan.md                # Kế hoạch chuẩn bị khơi gợi yêu cầu (Task 4.1)
    │   │   ├── elicitation-results-tracker.md              # [Gộp 4.2 & 4.3] Kết quả khơi gợi và Xác nhận thông tin khơi gợi.
    │   │   └── stakeholder-engagement-tracking.md          # Theo dõi mức độ tương tác cộng tác của Stakeholder (Task 4.5)
    │   │
    │   ├── ka05/                     # Templates quản lý vòng đời yêu cầu (KA5 - Hệ thống Ma trận liên kết)
    │   │   ├── business-requirement-matrix.md          # Quản lý mục tiêu nghiệp vụ chi tiết & Driver Traceability.
    │   │   ├── functional-requirement-matrix.md        # Quản lý đặc tả chức năng & MoSCoW prioritization.
    │   │   ├── non-functional-requirement-matrix.md    # Quản lý các ràng buộc phi chức năng định lượng.
    │   │   ├── requirement-traceability-matrix.md      # Master RTM liên kết chéo đầu-cuối từ Business Goals đến Test Case.
    │   │   ├── requirements-change-assessment.md      # Đánh giá tác động thay đổi (Benefit, Cost, Schedule, Risk).
    │   │   ├── requirements-approval-package.md        # Memo trình duyệt và ký nhận phê duyệt yêu cầu từ Sponsor.
    │   │   └── executive-pitch-deck.md                 # Slide Pitch trình bày cấp cao (C-Level/BoD) tích hợp @frontend-slides.
    │   │
    │   ├── ka06/                     # Templates phân tích chiến lược (KA6)
    │   │   ├── business-case-executive.md                  # Mẫu Business Case hoàn chỉnh cho Ban Giám đốc duyệt.
    │   │   ├── business-objectives.md                      # Mục tiêu chiến lược SMART & Chỉ số đo lường KPI.
    │   │   ├── business-requirements.md                    # Khung yêu cầu nghiệp vụ cốt lõi của doanh nghiệp.
    │   │   ├── change-strategy.md                          # Chiến lược và lộ trình thay đổi (Task 6.4)
    │   │   ├── current-state-description.md                # Phân tích hiện trạng doanh nghiệp (Task 6.1)
    │   │   ├── future-state-description.md                 # Đặc tả trạng thái tương lai mong muốn (Task 6.2)
    │   │   ├── potential-value.md                          # Định nghĩa và đo lường giá trị giải pháp mang lại.
    │   │   ├── risk-analysis-results.md                    # Đánh giá và quản trị rủi ro chiến lược (Task 6.3)
    │   │   └── solution-scope.md                           # Xác định phạm vi giải pháp (In-scope/Out-of-scope).
    │   │
    │   ├── ka07/                     # Templates phân tích yêu cầu & thiết kế giải pháp (KA7 - Trái tim của BA Works)
    │   │   ├── design-options.md                           # Xác định và phân bổ các phương án thiết kế (Task 7.5)
    │   │   ├── requirements-architecture.md                # Kiến trúc yêu cầu (Process, Data, Role Views) (Task 7.4)
    │   │   ├── requirements-quality-audit.md               # [Gộp 7.2 & 7.3] QA/QC tự audit chất lượng yêu cầu (Verify & Validate).
    │   │   ├── solution-recommendation.md                  # Đề xuất giải pháp tối ưu.
    │   │   └── specified-modelled-requirements.md          # Đặc tả yêu cầu kỹ thuật thô sau mô hình hóa (Task 7.1)
    │   │
    │   └── shared/                   # Các mẫu chia sẻ dùng chung giữa các KA (Cross-cutting Templates)
    │       └── business-rules-catalog.md                   # Từ điển/Mục lục luật kinh doanh tập trung (decoupled).
    │
    ├── advisor/                      # Phân hệ cố vấn và điều phối thông minh của AI Agent.
    │   ├── readiness-check.md        # 🚨 MANDATORY Tollgate Checklist. Agent tự chạy trước khi sinh bất kỳ tài liệu nào.
    │   │                             # Hỗ trợ cơ chế CBAP Fast-Track cho phép tạo tài liệu ngay.
    │   ├── scenarios.md              # Sơ đồ tư vấn nhanh giải pháp/định hướng dựa trên câu hỏi thực tế của User.
    │   └── workflow-patterns.md      # Quy trình phối hợp hoạt động BA tùy thuộc phương pháp dự án (Agile / Waterfall / Discovery).
    │
    └── scripts/                      # Công cụ tự động hóa xuất tài liệu (Triple-Engine Strategy).
        ├── export-to-office.py       # ⚙️ Engine A (Python): Convert markdown → docx/xlsx/pptx (basic).
        ├── export-rules.md           # MỚI: Định nghĩa chiến lược Triple-Engine Export (Engine A, B, C).
        ├── docx-module/              # 🚀 Engine B (Node.js): Xuất .docx chất lượng chuyên nghiệp cho Executive deliverables.
        │   ├── README.md             # Module coordinator: Decision rule, setup guide, troubleshooting.
        │   ├── generate-docx.js      # Main generator: BABOK markdown → Word (TOC, Navy branding, XML runs).
        │   └── office/               # Utility scripts chỉnh sửa .docx ở cấp XML (unpack, pack, validate).
        │
        └── xlsx-module/              # 📊 Engine C (Python + openpyxl + recalc.py): Tính toán công thức động bằng LibreOffice.
            ├── README.md             # Module coordinator: Hướng dẫn cài đặt, styling guide, formula verification.
            └── recalc.py             # Script recalculate công thức và phát hiện lỗi.
```

---

## 🛠️ Quy Trình Vận Hành Của AI Agent (Quy Tắc Thực Tế Mới)

Để đảm bảo hiệu quả làm việc cao nhất, tiết kiệm token budget và loại bỏ hoàn toàn hiện tượng ảo giác, AI Agent (chính là bạn, Google Antigravity) phải tuân thủ nghiêm ngặt quy trình 3 bước sau:

### Bước 1: Nhận diện ngữ cảnh & Định tuyến qua Micro-orchestrator
Khi User yêu cầu tư vấn hoặc tạo tài liệu, Agent xác định ngay Task ID và KA tương ứng, truy cập trực tiếp vào `references/ka/[KA-folder]/` để nạp file `SKILL.md` (Micro-orchestrator) và nạp các thông tin phụ trợ theo thứ tự ưu tiên:
1. **`SKILL.md`** -> Nạp trước để lấy bản đồ định tuyến và quy trình.
2. **`tasks.md`** -> Nạp để xác định rõ Inputs và Outputs.
3. **`guidelines-tools.md`** & **`stakeholders.md`** -> Nạp để hiểu điều kiện biên và nhân sự tham dự.

### Bước 2: Chặn chốt kiểm duyệt (Tollgate Readiness Check & CBAP Fast-Track)
*   Agent bắt buộc phải load `references/advisor/readiness-check.md` để tự kiểm định mức độ sẵn sàng của thông tin.
*   **Cơ chế CBAP Fast-Track:** Nếu Chàng (ở cấp độ chuyên gia/CBAP) tuyên bố đã cung cấp đầy đủ thông tin hoặc prompt chứa nội dung nghiệp vụ chi tiết, Agent sẽ bỏ qua bước dừng lại hỏi, tiến hành tạo tài liệu ngay và ghi nhận các giả định (Assumptions) rõ ràng ở cuối tài liệu.
*   **Chế độ thông thường:** Nếu thiếu thông tin quan trọng, Agent sẽ dừng lại và gửi bảng câu hỏi phỏng vấn ngắn (3-5 câu) dựa trên `elicitation-interview-playbook.md` để làm rõ.

### Bước 3: Sinh tài liệu cục bộ & Phối hợp QA (Execution & Audit Workflow)
Khi điều kiện đầu vào đã sẵn sàng (hoặc qua Fast-Track), Agent sẽ phối hợp các template để sinh tài liệu theo mô hình khép kín.
- Ví dụ với KA7 (RAD): Tạo đặc tả thô (`specified-modelled-requirements.md`), tự động đề xuất chạy audit chất lượng (`requirements-quality-audit.md`), và dùng các điểm [FAIL] để cải tiến đặc tả thô trước khi chuyển giao.