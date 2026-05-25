# Kiến Trúc Hệ Thống & Cấu Trúc Thư Mục Thực Tế (BA Assistant Skill)

Tài liệu này mô tả chi tiết cấu trúc thư mục vật lý và sơ đồ kiến trúc thực tế của **BABOK V3 Business Analysis Assistant Skill**. 

Toàn bộ hệ thống được thiết kế theo nguyên tắc **Di động (Portability)** và **Độc lập (Independence)**. Tất cả các liên kết chéo giữa các tài liệu đều sử dụng đường dẫn tương đối (portable relative paths), đảm bảo toàn bộ thư mục `references/` và file `SKILL.md` có thể hoạt động hoàn hảo khi được nhân bản (clone) sang bất kỳ hệ thống nào của người dùng.

---

## 📂 Sơ Đồ Cấu Trúc Thư Mục Vật Lý (Thực Tế)

Dưới đây là bản đồ cấu trúc thư mục hiện tại của dự án:

```text
babok-ba-assistant/ (Thư mục gốc của Skill trên GitHub)
├── SKILL.md                          # Trọng tâm điều hướng (Decision tree), quy tắc Tollgate, phản hồi chuẩn hóa & Office Export rules.
├── new_architecture.md               # Bản đồ cấu trúc và tài liệu kiến trúc thực tế (File này).
│
└── references/                       # [Lõi Skill] Thư mục chứa toàn bộ tri thức, quy trình, kỹ thuật và mẫu Markdown di động.
    │
    ├── ka/                           # Các Knowledge Areas (KA) đã được chuẩn hóa. Mỗi KA gồm đúng 6 files đồng nhất.
    │   │                             # ⚠️ Đọc file theo thứ tự ưu tiên: README -> tasks -> guidelines-tools -> stakeholders -> techniques -> gotchas.
    │   │
    │   ├── ka03-planning/            # BA Planning & Monitoring — 5 tasks (3.1–3.5)
    │   │   ├── README.md             # Tổng quan KA3, danh sách 5 tasks, điều hướng hoạt động lập kế hoạch.
    │   │   ├── tasks.md              # Chi tiết các Task: Purpose, Inputs, Outputs & liên kết trực tiếp tới templates.
    │   │   ├── guidelines-tools.md   # Pre-flight checklist: Hướng dẫn định hướng và công cụ hỗ trợ cho từng task.
    │   │   ├── stakeholders.md       # Vai trò của stakeholders (Must Have/Should Have) & Approval Authority.
    │   │   ├── techniques.md         # Phân bổ Kỹ thuật (Techniques) tối ưu áp dụng cho mỗi task.
    │   │   └── gotchas.md            # Top bẫy thực tế & sai lầm thường gặp khi lập kế hoạch BA.
    │   │
    │   ├── ka04-elicitation/         # Elicitation & Collaboration — 5 tasks (4.1–4.5)
    │   │   ├── README.md             # Tổng quan KA4, danh sách 5 tasks, hướng dẫn khơi gợi yêu cầu.
    │   │   ├── tasks.md              # Chi tiết Tasks: Mục đích, Inputs, Outputs & câu hỏi định hướng.
    │   │   ├── guidelines-tools.md   # Hướng dẫn & Công cụ chuẩn bị trước/trong buổi khơi gợi yêu cầu.
    │   │   ├── stakeholders.md       # Xác định người phỏng vấn/tham dự workshop (Domain SME bắt buộc).
    │   │   ├── techniques.md         # Các kỹ thuật khơi gợi phù hợp (Interviews, Workshop, Collaborative Games...).
    │   │   └── gotchas.md            # Các bẫy thường gặp trong khơi gợi (như thiên kiến xác nhận, ảo giác yêu cầu).
    │   │
    │   ├── ka05-rlcm/                # ⚠️ [Future Scope] Requirements Life Cycle Management (Chưa triển khai vật lý).
    │   │
    │   ├── ka06-strategy/            # Strategy Analysis — 4 tasks (6.1–6.4)
    │   │   ├── README.md             # Tổng quan KA6, danh sách 4 tasks, phân tích chiến lược doanh nghiệp.
    │   │   ├── tasks.md              # Chi tiết Tasks: Current State, Future State, Risks, Change Strategy.
    │   │   ├── guidelines-tools.md   # Hướng dẫn chiến lược (VD: Corporate Strategy là bắt buộc đối với Task 6.1).
    │   │   ├── stakeholders.md       # Vai trò của stakeholder cấp cao (Sponsor, C-Level) và thẩm quyền phê duyệt.
    │   │   ├── techniques.md         # Ứng dụng SWOT, Root Cause, Gap Analysis, Risk Assessment.
    │   │   └── gotchas.md            # Các bẫy: Định nghĩa tương lai mơ hồ, bỏ qua trạng thái hiện tại.
    │   │
    │   ├── ka07-radd/                # Requirements Analysis & Design Definition (RADD) — 6 tasks (7.1–7.6)
    │   │   ├── README.md             # Tổng quan KA7, danh sách 6 tasks, thiết kế & mô hình hóa yêu cầu.
    │   │   ├── tasks.md              # Chi tiết Tasks: Mô hình hóa, xác thực (Verify/Validate), cấu trúc kiến trúc, đề xuất giải pháp.
    │   │   ├── guidelines-tools.md   # Hướng dẫn kiểm tra chất lượng & mô hình hóa yêu cầu (Solution Scope là bắt buộc).
    │   │   ├── stakeholders.md       # Vai trò của Domain SME, Sponsor trong việc xác thực & phê duyệt thiết kế.
    │   │   ├── techniques.md         # Kỹ thuật chuyên sâu: Use Cases, User Stories, Process/Data Modeling.
    │   │   └── gotchas.md            # Lỗi: Yêu cầu không thể kiểm thử (non-verifiable), bỏ qua bước tự audit chất lượng.
    │   │
    │   └── ka08-evaluation/          # ⚠️ [Future Scope] Solution Evaluation (Chưa triển khai vật lý).
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
    │   └── top-20/                   # Tài liệu hướng dẫn thực thi chuyên sâu cho 20 kỹ thuật cốt lõi và phổ biến nhất.
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
    │       ├── 10.35-process-modelling/                     # Thư mục kỹ năng sơ đồ quy trình nghiệp vụ.
    │       ├── 10.40-root-cause-analysis.md                 # Phân tích nguyên nhân gốc rễ (5 Whys, Fishbone).
    │       ├── 10.41-scope-modelling.md                     # Mô hình hóa phạm vi (Context Diagram).
    │       ├── 10.43-stakeholder-list-map-or-personas.md    # Phân tích và lập bản đồ Stakeholders.
    │       ├── 10.44-state-modelling.md                     # Mô hình hóa trạng thái (State Diagram).
    │       ├── 10.47-use-cases-and-scenarios/               # Thư mục đặc tả Use Cases và kịch bản nghiệp vụ.
    │       └── 10.48-user-stories/                          # Thư mục viết và quản lý User Stories chuẩn Agile.
    │
    ├── templates/                    # Khung sườn tài liệu Markdown phân mảnh (Modular Markdown Templates).
    │   │                             # ⚠️ NGUYÊN TẮC: Chỉ chứa placeholders `[insert]`, không chứa thông tin giả định.
    │   │                             # AI Agents chỉ sinh phần nội dung (Section) được map với Task, không tạo cả file tràn lan.
    │   │
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
    │   │   ├── solution-recommendation.md                  # Đề xuất giải pháp tối ưu (Thiết kế dạng Slide Pitch cực kỳ ngắn gọn cho Sếp).
    │   │   └── specified-modelled-requirements.md          # Đặc tả yêu cầu kỹ thuật thô sau mô hình hóa (Task 7.1)
    │   │
    │   └── shared/                   # Các mẫu chia sẻ dùng chung giữa các KA (Cross-cutting Templates)
    │       └── business-rules-catalog.md                   # Từ điển/Mục lục luật kinh doanh tập trung (decoupled) (Technique 10.9)
    │
    ├── advisor/                      # Phân hệ cố vấn và điều phối thông minh của AI Agent.
    │   ├── readiness-check.md        # 🚨 MANDATORY Tollgate Checklist. Agent tự chạy trước khi sinh bất kỳ tài liệu nào.
    │   │                             # Nếu thiếu đầu vào quan trọng -> Bắt buộc dừng lại phỏng vấn User, chống ảo giác.
    │   ├── scenarios.md              # Sơ đồ tư vấn nhanh giải pháp/định hướng dựa trên câu hỏi thực tế của User.
    │   └── workflow-patterns.md      # Quy trình phối hợp hoạt động BA tùy thuộc phương pháp dự án (Agile / Waterfall / Discovery).
    │
    └── scripts/                      # Công cụ tự động hóa xuất tài liệu.
        └── export-to-office.py       # File Python tiện ích hỗ trợ convert markdown template sang định dạng Word/Excel/PPTX.
```

---

## 🛠️ Quy Trình Vận Hành Của AI Agent (Quy Tắc Thực Tế)

Để đảm bảo hiệu quả làm việc cao nhất, tiết kiệm token budget và loại bỏ hoàn toàn hiện tượng **ảo giác (hallucination)** hay **bịa đặt thông tin**, AI Agent (chính là bạn, Google Antigravity) phải tuân thủ nghiêm ngặt quy trình 3 bước sau:

### Bước 1: Nhận diện ngữ cảnh & Tự động tra cứu (File Priority Rule)
Khi User yêu cầu tư vấn hoặc tạo tài liệu, Agent xác định ngay Task ID và KA tương ứng, truy cập trực tiếp vào `references/ka/[KA-folder]/` để đọc thông tin theo thứ tự ưu tiên:
1. **`README.md`** -> Đọc trước để lấy bức tranh tổng quan.
2. **`tasks.md`** -> Đọc để nắm vững đầu vào (Inputs) và đầu ra (Outputs).
3. **`guidelines-tools.md`** & **`stakeholders.md`** -> Đọc để hiểu các điều kiện biên và nhân sự bắt buộc.

### Bước 2: Chặn chốt kiểm duyệt (Tollgate Readiness Check)
- Agent bắt buộc phải load `references/advisor/readiness-check.md` để tự kiểm định mức độ sẵn sàng của thông tin.
- **Nếu thiếu thông tin đầu vào cốt lõi** hoặc **chưa xác định rõ stakeholders phù hợp**: Agent lập tức chuyển sang **Advisory Mode**, dừng việc tạo tài liệu thô, gửi bảng câu hỏi phỏng vấn ngắn (3-5 câu hỏi trọng tâm) đến User nhằm làm rõ thực tế nghiệp vụ.

### Bước 3: Sinh tài liệu cực bộ & Phối hợp QA (Execution & Audit Workflow)
Khi điều kiện đầu vào đã sẵn sàng, Agent sẽ phối hợp các template để sinh tài liệu theo mô hình khép kín:
- **Ví dụ với KA7 (RAD):**
  1. Agent dựa trên thông tin khơi gợi để mô hình hóa yêu cầu thô vào mẫu `specified-modelled-requirements.md` (Task 7.1).
  2. Ngay lập tức, Agent chạy audit bằng cách load `requirements-quality-audit.md` (Task 7.2/7.3) để tự đánh giá chất lượng yêu cầu vừa viết (đầy đủ, nhất quán, khả thi...).
  3. Gửi báo cáo audit kèm các điểm [FAIL] (nếu có) để User cùng xem xét và tinh chỉnh lại bản đặc tả thô ở bước 1, tạo nên một chu trình cải tiến khép kín cực kỳ chất lượng.
  4. Sau đó mới triển khai các bước tiếp theo như thiết kế kiến trúc (`requirements-architecture.md`), đề xuất phương án (`design-options.md`), và trình bày slide Pitch cho Ban giám đốc (`solution-recommendation.md`).

---

## 🎯 Ghi Chú Dành Cho BA (Người Dùng)

- **Chia sẻ Skill:** Khi bạn chia sẻ thư mục này lên GitHub hoặc clone về máy khác, bạn chỉ cần giữ lại file `SKILL.md` và thư mục `references/`. Hệ thống sẽ tự động nhận diện đầy đủ cấu trúc và hoạt động độc lập mà không phụ thuộc vào bất kỳ đường dẫn vật lý cục bộ nào trên máy cũ của bạn.
- **Tập tin Word hỗ trợ (.docx):** Thư mục `templates/` ở root là nơi lưu trữ các file Word được định dạng sẵn (style mẫu, logo doanh nghiệp, header/footer) để script `export-to-office.py` có thể kết xuất tài liệu markdown của Agent ra file Word chuẩn doanh nghiệp một cách nhanh chóng.