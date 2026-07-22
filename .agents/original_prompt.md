## 2026-05-31T16:19:13Z

Build a rigorous QA benchmarking and testing harness for ExportMate's core document workflow ("Upload bộ chứng từ → OCR → Cross Audit → Export ra bộ hồ sơ usable") to measure precision, recall, accuracy, failure rate, and template generation fidelity under realistic agricultural export scenarios.

Working directory: d:\code\exportmate
Integrity mode: development

## Requirements

### R1. Independent QA Testing Harness & Benchmark Framework
- Create a modular, programmatic benchmarking framework for ExportMate's core processing pipeline.
- It must run independently of the main server and output detailed execution scoreboards (JSON/Markdown) representing exact quality metrics.
- The workflow to benchmark is: **Upload documents -> Local OCR & AI Extraction -> Cross Document Audit Rules -> DOCX Export generation**.

### R2. Test Cases and Adversarial Dataset Generation
- Build a structured dataset of mock international shipping documents (represented as OCR text, base64 uploads, or raw JSON fields) including:
  - **Happy paths**: Perfectly consistent documents (B/L, CI, PL, C/O, Phyto, Fumigation, Tallying, Cleanliness, QQW) matching cargo, container, and weight descriptions.
  - **Edge cases**: Minor typos, differing date formats, abbreviation variations.
  - **Real-world failures**: Multi-document discrepancies (e.g. B/L gross weight does not match Invoice gross weight, Seal No mismatch, port discrepancies, invalid container check digits).
  - **Adversarial / Hallucination traps**: Blank pages, corrupted layouts, contradictory declarations to test AI resilience and trigger proper compliance warnings.

### R3. Quantitative Metric Reporting (Scoreboard KPI Scorecard)
- For every benchmark run, calculate and report the following KPIs:
  - **OCR & Field Extraction Accuracy**: Precision, Recall, and F1-score of extracted fields compared to the ground-truth test cases.
  - **Audit Rule Precision/Recall**: Precision and Recall of the 12 compliance audit rules (e.g. catching the weight mismatch or wrong check digits without false positives).
  - **DOCX Generation Fidelity**: Verify the output buffer integrity, file sizes, and that all placeholders match perfectly.
  - **Success / Failure Rate**: Percentage of runs that complete end-to-end without unhandled 500 crashes.

### R4. Automated Reality Check (Skeptical Investor Evaluation)
- Incorporate a programmatic / AI-assisted evaluation component (Prompt 3 & 5 style) that acts as the "harsh QA judge" to evaluate the actual business value, technical moat, and robustness of each processed batch.
- Flag fake metrics, vanity features, or unnecessary AI integrations.

## Acceptance Criteria

### Testing Framework
- [ ] A run command (e.g., `npm run benchmark:e2e` or similar script) can execute the entire QA harness locally.
- [ ] No hardcoded ports or endpoints are used in the tests.
- [ ] The harness runs end-to-end without requiring any manual UI clicks, returning a structured Markdown scoreboard.

### Metrics & Scoreboard
- [ ] Generates a detailed scoreboard table tracking: Workflow | Input | Output | Accuracy | Failure Mode | Priority | Real Business Value.
- [ ] Successfully runs the Happy path, Edge cases, and at least 3 distinct adversarial failure scenarios.
- [ ] Reports quantitative Precision, Recall, and Accuracy scores for the field extraction and cross-audit rules.
- [ ] Identifies any unproven assumptions or useless features.

## 2026-06-01T00:55:52Z

Run a comprehensive, highly rigorous legal-grade quality and functional audit on all features, pages, and generated outputs in ExportMate to verify if they are 100% ready for actual customs submission.

Working directory: d:\code\exportmate
Integrity mode: development

## Requirements

### R1. Rigorous Document Quality Audit
Review all 9 generated document templates (Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin Form B, Phytosanitary Certificate, Fumigation Certificate, Tallying Certificate, Container Cleanliness, and Quality/Quantity Weight Certificate) against official Vietnamese and international trade regulations.
*   Verify layout margins, border grid alignments, and bilingual VN/EN accuracy.
*   Run mathematical validation on all item subtotals, unit prices, weight calculations, and container check digits.
*   Identify any missing statutory legal clauses or seal/stamp fields.

### R2. End-to-End Feature & Page Audit
Verify the functional completeness, error handling, and visual quality of all frontend screens (Dashboard, Risk Audit, Validation Checklist, Export Center, Shipment Passport, ESG, Cost Map, and Logistics Planner):
*   Audit each page to ensure there are no blank states, vague AI text walls, or broken relative URLs.
*   Ensure that every core action has loading skeletons and results in a downloadable, legally valid document or checklist.

### R3. Comprehensive Legal Tech Verification Report
Produce a detailed, structured audit report at `docs/legal_tech_audit_report.md` outlining:
*   Concrete findings per document type and feature area.
*   Specific regulatory failure risks (e.g. EUDR compliance gaps, customs rejection risks).
*   Actionable remediation recommendations with code-level implementation checklists to achieve 100% compliance.

## Acceptance Criteria

### Audit Scope & Coverage
- [ ] Every single one of the 9 generated document types has a dedicated legal-grade evaluation section in the audit report.
- [ ] All frontend pages (Dashboard, Export Center, Validation Checklist, Risk Audit, Shipment Passport, ESG, Cost Map, Logistics Planner) are tested for layout responsiveness, visual polish, and relative port links.
- [ ] No vague, placeholder, or generic statements are used in the audit report; every finding is backed by specific trade laws (e.g., Circular 05/2018/TT-BCT for C/O, ISPM 15 for fumigation).

### Technical Deliverables
- [ ] The generated audit report at `docs/legal_tech_audit_report.md` is structured, comprehensive, and has a clear legal readiness checklist.
- [ ] Run programmatic verification (e.g. vitest suite compile check) to confirm that the code remains fully operational during and after the audit.

## 2026-06-01T01:19:49Z

Build the core Legal-Tech Export compliance engine, the unified 1-Click Package Control Panel, and dynamic AI-powered export roadmaps in ExportMate. This enables Vietnamese factories/workshops to securely compile, double-check, and generate 9 legally valid, highly realistic trade documents in a single click, identify numbers/compliance discrepancies, and view actionable procedures to export goods abroad.

Working directory: d:\code\exportmate
Integrity mode: development

## Requirements

### R1. Unified 1-Click Package Control Panel (Interactive Form + Generator)
- Build an interactive "Agentic Control Center" on the frontend (`src/pages/ExportCenter` or a new page `src/pages/DocumentFactory/PackageGenerator.tsx`).
- This control panel must:
  - **Automatically Aggregate Data**: Fetch and merge all OCR-extracted fields from the active project's processed documents.
  - **AI Auto-fill**: Use AI to intelligent-guess/auto-fill any missing fields (e.g. shipper tax code, botanical names, dosage parameters) using the active project's cargo context.
  - **Unified Review & Edit Form**: Display all aggregated fields clearly (Shipper, Consignee, Port of Loading, Port of Discharge, Vessel Name, Gross/Net Weight, Package Count, HS Code, Contract/Invoice Numbers, Fumigation active ingredients, etc.) in a structured review form. This is critical: because a single wrong number can cost billions of VND, the user MUST be able to manually double-check and edit any field before generating.
  - **1-Click Bulk Generator**: Trigger a single backend endpoint to compile and output all 9 trade documents (Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin Form B, Phytosanitary Certificate Application Draft, Fumigation Certificate, Quality/Quantity/Weight Certificate, Health Certificate, Tallying Certificate) as a unified download package (or zip file).

### R2. High-Fidelity Legal-Grade Document Parity
- Upgrade `server/document-templates.ts` to maximize the realism and customs-readiness of the generated `.docx` files:
  - **Borders & Layouts**: Use double/thick borders for key sections, correct signatory boxes, and stamp frames mirroring official trade forms (VCCI Form B, Plant Protection Department, Vinacontrol, SGS).
  - **Mandatory Trade Clauses**: Correctly output the Vietnamese export origin declaration, dynamic math calculations for Packing List weights (gross weight = net weight + 0.65kg tare per sack), ISPM 15 wood packaging statement with a custom-framed IPPC seal box, and a container wood floor moisture check (max 15%) in tallying/cleanliness certificates.
  - **Watermark**: Standardize on the professional, subtle grey brand watermark `"ExportMate Verified Document Standard (EM-VDS-2026)"` at the bottom-right footer of all pages. No generic "AI Draft" labels should be visible.

### R3. Automated Cross-Document Compliance & Vulnerability Checker
- Extend the compliance engine (`server/compliance-engine.ts` or a new unified auditor) to perform automated mathematical, textual, and regulatory verification across all 9 documents:
  - **Cross-Check Audit**: Flag any mismatches in numbers, names, or codes (e.g. Net/Gross weights, container/seal numbers, port names, HS codes) between different documents.
  - **Check Digit Verification**: Run exact container check digit calculations using the ISO 6346 standard and flag invalid container codes.
  - **Regulatory Risk Alerts**: Flag structural risks (e.g. OFAC/AML embargoes, missing wood treatment attestation for Europe/US destinations, missing botanical names for plant exports).

### R4. Dynamic AI-Powered Export Roadmap & Action Steps Navigator
- Implement a specialized workflow module in the UI that dynamically analyzes the commodity and target destination country to generate a step-by-step export roadmap:
  - **AI Analysis**: Determine what procedures are required for this specific trade route (e.g. EUDR due diligence for Europe, phytosanitary requirements, fumigation guidelines).
  - **Actionable Steps**: Show clear, numbered next steps (e.g., Step 1: Request phytosanitary application draft, Step 2: Conduct wood treatment and get IPPC stamp, Step 3: Apply for Certificate of Origin Form B at VCCI).
  - **Agency & Contact Info**: Dynamically list the names of responsible Vietnamese agencies (e.g. VCCI, Sub-Department of Plant Protection, specific local Customs Sub-departments) and how to submit papers to them.

## Acceptance Criteria

### Package Generator & UI
- [ ] Unified Control Panel correctly displays aggregated project data and allows full editing of all trade fields.
- [ ] 1-Click generation button successfully compiles all 9 `.docx` files, creating a downloadable unified package/zip.
- [ ] No "AI Draft" or placeholder labels are written; the documents contain highly polished bilingual structures, standard trade clauses, and the `EM-VDS-2026` watermark.

### Legal Tech & Verification
- [ ] Automated compliance auditor correctly scans the form inputs, flagging mismatches, incorrect container check digits, or regulatory vulnerabilities (e.g. wood moisture > 15%).
- [ ] AI-Powered Export Navigator dynamically renders the correct Vietnamese agencies and specific next steps based on cargo and destination.
- [ ] Server builds successfully (`npm run build` / `npx tsc -b` passes) and backend tests (`npm --prefix server run test`) pass cleanly.

## 2026-06-01T03:07:13Z

Perform a comprehensive language, terminology, and copy audit across all user-facing Vietnamese texts, labels, and descriptions in the ExportMate application (specifically `CostMapPage.tsx` and related pages) to ensure professional trade phrasing, precise customs terminology, and zero robotic or hallucinatory AI language.

Working directory: d:\code\exportmate
Integrity mode: development

## Requirements

### R1. Trade and Customs Terminological Accuracy (Thuật ngữ chuyên ngành)
- Audit all export, import, logistics, and legal labels. Replace generic or machine-translated words with standard Vietnamese foreign trade terms.
- Examples: 
  - "Giai đoạn" and "Bước" must be clearly distinguished.
  - "Mã số xuất khẩu" -> "Mã số doanh nghiệp XNK" or standard tax/business registration.
  - "Lộ trình & Chi phí XNK" as a premium title.

### R2. Readability & Natural B2B Copy (Hành văn chuyên nghiệp)
- Rewrite explanatory blocks (such as "Vì sao cần bước này?", "Kết quả & mở khóa", "AI Agent hỗ trợ") to sound authoritative, concise, and professional.
- Eliminate wordy AI-generated patterns (e.g. "bước này giúp bạn...", "rất quan trọng...", "đảm bảo rằng..."). Use direct, passive-voice or declarative professional prose.

### R3. Fact-Checking & Zero Hallucination (Kiểm chứng cơ quan nhà nước)
- Audit all mentioned Vietnamese government departments and organizations. Ensure they correspond to actual legally active bodies (e.g., "Chi cục Kiểm dịch thực vật vùng", "Phòng Quản lý Xuất nhập khẩu - Bộ Công Thương", "Phòng Thí nghiệm Eurofins/SGS/Vinacontrol").
- Absolutely no fictitious websites, broken contacts, or imaginary compliance parameters in mock databases or static lists.

## Acceptance Criteria

### Language & Content Quality
- [ ] Every user-facing label and paragraph in the targeted files has been audited and rewritten to standard Vietnamese trade prose.
- [ ] No speculative or conversational AI fill-words remain.
- [ ] All listed government agencies and contact guidelines are factually correct.
- [ ] The application compiles cleanly with `npx tsc -b`.

## 2026-06-01T06:35:50Z

Dự án rà soát toàn bộ các trang giao diện của hệ thống ExportMate và tiếp tục hoàn thiện khung layout (sử dụng các thành phần từ TailAdmin hiện tại) kết hợp kết nối luồng dữ liệu (nối ống) từ SQLite DB và AI Agents.

Working directory: d:\code\exportmate
Integrity mode: development

## Requirements

### R1. Rà soát & Lên khung các trang
- Kiểm tra toàn bộ các trang giao diện hiện có trong `src/pages`.
- Xây dựng khung xương (skeleton/wireframe) và layout chuẩn chỉnh cho các trang chưa hoàn thiện, sử dụng tối đa các thành phần và giao diện mẫu (shared pages) từ TailAdmin hiện tại để đảm bảo sự đồng bộ và thẩm mỹ cao mà không cần thay đổi quá nhiều cấu trúc.

### R2. Kết nối luồng dữ liệu (Nối ống)
- Kết nối các giao diện tĩnh hoặc mock-up với các relative API endpoints thực tế từ backend Node/Express (`server/index.ts`).
- Đồng bộ cơ sở dữ liệu SQLite (`dev.db`) động cho các chỉ số KPI, danh sách tác vụ, tiến độ và tài liệu.

## Acceptance Criteria

### Giao diện & Độ phản hồi
- [ ] Tất cả các trang được tích hợp thanh Sidebar và Header chuẩn của TailAdmin.
- [ ] Responsive hoàn toàn trên Mobile và Desktop, không bị vỡ grid hoặc tràn màn hình.
- [ ] Giao diện Dark/Light mode hoạt động đồng bộ trên tất cả các trang.

### Kết nối API & Dữ liệu động (Nối ống)
- [ ] Thay thế các state mock tĩnh bằng luồng gọi API thực tế tới các endpoint `/api/projects`, `/api/compliance-tasks`, v.v.
- [ ] Trạng thái của các AI Agents (Sales, Legal, Logistics) hiển thị chính xác theo thời gian thực và đồng bộ với SQLite.

## 2026-06-09T08:07:40Z

# Teamwork Project Prompt — Draft

> Status: Ready for launch — awaiting user approval
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

Implement four core business features in ExportMate to address Vietnamese SME pain points: an onboarding preparation checklist (5.3), split packaging and marking compliance audits (5.4), visual geospatial EUDR checks (5.5), and carbon-rated route recommendations (5.7 & 5.8).

Working directory: d:\code\exportmate
Integrity mode: development

## Requirements

### R1. Onboarding Wizard & Preparation Checklist (Feature 5.3)
1. Build an onboarding wizard that asks the user for: Product Category (e.g., Agriculture, Garment, Electronics), Destination Market (e.g., EU, USA, Japan), and Incoterms (e.g., FOB, CIF) BEFORE creating a new dossier.
2. Based on these selections, display a customized checklist advising the user what documents they need to prepare (e.g., business license, phyto cert, wood floor cleanliness certificate, sales contract) before uploading files.
3. Link this preparation check to the creation of the `ExportDossier` and populate only the relevant `DocumentRequirement` rows instead of adding all 30 templates by default.

### R2. Split Packaging & Marking Audits (Feature 5.4)
1. Split the packaging check from the product labeling check.
2. **Packaging Specs Audit**: Implement check in `cross-audit-engine.ts` for wood floor moisture content (critical if >15% for agricultural cargo) and verify presence of ISPM 15 IPPC fumigation seal requirements.
3. **Marking & Labeling Audit**: Integrate a checklist for product labels including language requirements (destination country language), allergen warning flags, ingredient listing formatting, and barcode validation. Use AI models to review label images or text for compliance issues.

### R3. Visual GIS Map & Deforestation Validation Alerts (Feature 5.5)
1. Update `ESGTraceabilityPage.tsx` to visualize the geolocation polygons of farms.
2. Implement front-end visual alert indicators for geometry errors calculated in the backend `server/routes/eudr.ts`:
   - Highlight coordinates with low decimal precision (< 6 decimals) in yellow.
   - Outline self-intersecting or overlapping boundaries in red.
3. Show clean, detailed tooltip warnings on the Leaflet map corresponding to these errors.

### R4. Carbon-Rated Shipping Route Recommendations (Feature 5.7 & 5.8)
1. Refactor the Logistics page from a bidding marketplace to a route comparison and recommendation workspace.
2. Present the top 3 routes (Direct Express, Eco Saver, Secure Connect) rated by: Transit Time, Reliability, Price, and ESG Carbon Emission Class (Class A/B/C).
3. Add a "Book this Route" CTA button that redirects the user to the AI Team workspace, pre-populating the chat with a booking request to the logistics agent (Thomas) to draft the RFQ and Booking Note.

## Acceptance Criteria

### Onboarding & Dossier Creation (R1)
- [ ] Wizard successfully captures Product Category, Destination, and Incoterms.
- [ ] Created dossier contains only document requirements relevant to the selected category (e.g., no Phyto Cert for Garment shipments).
- [ ] Preparation guide is accessible to the user before uploading files.

### Packaging & Labeling Audit (R2)
- [ ] Wood floor moisture content (>15% triggers alert) is parsed and flagged in the dossier's issues panel.
- [ ] Allergen warnings and language compliance are reviewed and mismatch warnings are generated if non-compliant.

### Geospatial EUDR Check (R3)
- [ ] Maps render GPS polygons and color-code validation errors (red for self-intersection, yellow for low precision).
- [ ] Tooltips on the map display details of the geometry warning.

### Logistics Route Recommendation (R4)
- [ ] Logistics page compares routes based on price, transit time, reliability, and CO2 emissions rating.
- [ ] Clicking "Book Route" successfully transitions to AI Team Page and pre-fills Thomas's prompt with the correct carrier, price, and route path.

## 2026-06-09T08:57:35Z

ExportMate AI is an "Export Operating System" for Vietnamese agricultural SMEs. It helps them standardize product data, compliance documents, packaging/labels, traceability records, and logistics preparation to reduce dependency on intermediaries and work professionally with buyers, warehouses, and forwarders.

Working directory: d:/code/exportmate
Integrity mode: development

## Product Vision & Core Positioning
ExportMate AI is NOT an export connector / forwarder marketplace / logistics booking app.
It is an Export Operating System for Vietnamese agricultural SMEs. It standardizes their internal data and profiles, making them ready to present professional documentation, compliance profiles, and labels to international buyers, warehouses, and forwarders with clear credibility.

Key Principles to enforce:
1. SME-first, not forwarder-first.
2. Compliance assistant, not legal authority. All AI findings must carry warning flags and verification statuses.
3. Document-first, data-first. Outputs must be concrete (Checklists, Product Spec Sheets, Buyer Packs, Label Reports, Lot Passports, Logistics Briefs).
4. Human-in-the-loop: Core parameters (HS Code, certifications, claims, EUDR boundary) require validation: "AI Suggested", "Needs Review", "User Confirmed", "Expert Verified".
5. No marketplace transaction features in MVP. Recommendation/matching is database-driven logic only.
6. Design: Keep the styling spirit of `illustration.html` using the forest-green and lime palette:
   - `--bg: #2b3917;`
   - `--bg-mid: #3c4f20;`
   - `--forest: #4e6727;`
   - `--sage: #7e9a34;`
   - `--lime4: #9eb54d;`
   - `--lime3: #bdcf80;`
   - `--lime2: #dce6b8;`
   - `--lime1: #eef3d5;`
   - `--offwhite: #fcfdfa;`

## Requirements

### R1. UI Design & Styling conforming to InnoStar (`illustration.html`)
Overhaul the styling of ExportMate AI's front-end application to match the brand identity defined in `illustration.html`. The application must utilize the organic forest-green and lime palette to represent agricultural export trust, replacing the default TailAdmin blue. Implement responsive layouts, dashboard cards with clean card metrics, and maintain the welcome screen visual proposal structure.

### R2. Export Readiness Diagnostics & Checklist (Layer 1)
Build a module that evaluates the SME's readiness for export based on input product and company profiles. It must diagnose missing documents, regulatory standards, and certificates, generating an Export Readiness Score (0-100) and a prioritized action checklist.

### R3. Product and Export Document Standardization (Layer 2)
Implement a document generation system that produces professional export-facing documents (Product Spec Sheets, Company Profiles, Buyer Emails, and Logistics Briefs) using standard DOCX/PDF templates. No placeholder data; output must be dynamically generated from structured user inputs.

### R4. Label, Packaging, and Market Standard Review (Layer 3)
Build an AI-assisted label review tool that extracts text from product packaging images via OCR/Vision, checks compliance fields (Net Weight, Ingredients, Expiry, Origin, and English translations), highlights risky claims (e.g. uncertified "organic"), and outputs a detailed revision report.

### R5. Lightweight Traceability Lot Passports (Layer 4)
Create a lightweight lot recording system enabling agricultural SMEs to document raw material sources, farmers, harvest dates, storage conditions, and EUDR forest-boundary status. This data compiles into a shareable "Lot Passport" PDF with a QR code link.

### R6. Logistics Routing & Partner Recommendation (Layer 5 & 6)
Develop a decision support engine that matches SMEs with logistics options (warehouses, forwarders) and routes based on product volume, perishability, cold chain needs, and destination port, outputting a logistics brief and complexity report.

## Directory Structure
Backend & Domain modularization:
- `/modules/company`
- `/modules/product`
- `/modules/uploads`
- `/modules/extraction`
- `/modules/readiness`
- `/modules/documents`
- `/modules/label-review`
- `/modules/traceability`
- `/modules/esg`
- `/modules/partners`
- `/modules/logistics`
- `/modules/audit`
- `/modules/verification`
- `/modules/notifications`

AI Pipeline:
- `/ai/extractors`
- `/ai/prompts`
- `/ai/validators`
- `/ai/scoring`
- `/ai/guardrails`

## Core Data Flow & Metadata
Every user upload or AI output must map to structured data schemas containing metadata:
```json
{
  "source": "user_uploaded_file | user_input | ai_inferred | verified_external_source",
  "confidence": 0.85,
  "verification_status": "ai_suggested | needs_review | user_confirmed | expert_verified",
  "last_updated": "2026-06-09",
  "risk_level": "low | medium | high"
}
```

## Acceptance Criteria

### Diagnostics & UI Flow
- [ ] UI provides a step-by-step wizard following the forest-green palette design guidelines of `illustration.html`.
- [ ] Export Readiness Score correctly updates dynamically based on the completeness of company and product inputs.

### Document & Data Integrity
- [ ] All AI-generated outputs and reports include standardized metadata tracking confidence scores, sources, and verification status.
- [ ] Document generation outputs valid download links for PDF/DOCX templates without server crash.

### Verification and Test Coverage
- [ ] Back-end modules must be structured into independent domain directories as per the modular layout.
- [ ] Programmatic unit tests run using Vitest to verify validation logic (e.g., ISO 6346 container check, weight alignment rules) in `server/cross-audit-engine.ts`.
- [ ] The full system passes standard TypeScript builds with no compilation errors.

## 2026-06-09T08:58:09Z

ExportMate AI is an "Export Operating System" for Vietnamese agricultural SMEs. It helps them own their export data, documents, packaging/labels, traceability records, and logistics preparation to reduce dependency on intermediaries and work professionally with buyers, warehouses, and forwarders.

Working directory: d:/code/exportmate
Integrity mode: development

## Bối cảnh Chuỗi Xuất Khẩu Thực Tế (Logistics Workflow)
ExportMate AI thiết kế các tính năng xoay quanh chuỗi quy trình 4 bên thực tế của nông sản Việt Nam:
1. **Thương lái/Hợp tác xã (Party 1 - Aggregator)**: Thu gom, chuẩn hóa quy cách sản phẩm thô tại nguồn.
2. **Kho tập kết (Party 2 - Warehouse)**: Gom hàng, lọc chất lượng, đóng gói và chuẩn hóa hồ sơ giấy tờ ban đầu.
3. **Đơn vị Logistics (Party 3 - Forwarder)**: Vận chuyển đường biển/đường bộ quốc tế (chỉ định bởi Buyer hoặc do SME tự chọn).
4. **Nhà vận tải nội địa (Party 4 - Transporter)**: Di chuyển hàng từ kho tập kết ra điểm Transfer/Cảng xuất khẩu.
5. **Branding & Trust**: SME nông nghiệp Việt Nam không đủ lực solo toàn chuỗi, họ cần nâng cao năng lực Branding (hồ sơ vùng trồng, Product Spec Sheet tiếng Anh, chứng chỉ) để thu hút buyer quốc tế và giao tiếp bình đẳng với các bên trung gian.

## 10 Subagents & Responsibilities

1. **Product Strategy & Branding Agent**
   - Nhiệm vụ: Bảo vệ tầm nhìn "Export Operating System" và chiến lược thương hiệu (Branding) cho SME. Định vị tài liệu chuyên nghiệp giúp thu hút buyer.
   - Outputs: Bản định vị, chân dung người dùng (SME owner, Buyer, Forwarder), checklist Branding.

2. **Export Domain & Compliance Agent**
   - Nhiệm vụ: Xây dựng bộ quy tắc chấm điểm sẵn sàng xuất khẩu (Export Readiness Score 0-100) and 12 quy tắc đối soát chứng từ cứng (HS Code, ISO 6346 container check, khớp Net/Gross weight).
   - Outputs: Quy tắc chấm điểm, logic đối soát chéo không dùng AI (deterministic).

3. **UX/UI Flow Agent**
   - Nhiệm vụ: Thiết kế giao diện Dashboard theo palette màu hữu cơ của đề án InnoStar (`illustration.html`): Forest Green, Sage, Lime. Đảm bảo trải nghiệm đơn giản cho nông hộ.
   - Outputs: Sitemap, luồng di chuyển màn hình, spec các component giao diện.

4. **Data Model & Schema Agent**
   - Nhiệm vụ: Thiết kế Prisma schema (SQLite) lưu trữ cấu trúc Company, Product, Document, LotPassport, Partner, Shipment. Mỗi thực thể AI sinh phải có metadata tin cậy (confidence, source, verification_status).
   - Outputs: Prisma schema updates, JSON schema ví dụ.

5. **AI Workflow & OCR Agent**
   - Nhiệm vụ: Thiết kế pipeline trích xuất thông tin OCR từ nhãn mác (Label Review) và tài liệu upload, viết prompt RAG tra cứu luật compliance thị trường.
   - Outputs: Prompt templates cho LLM, quy trình xử lý ảnh/PDF thô.

6. **Backend Pipeline Agent**
   - Nhiệm vụ: Thiết kế hệ thống Express API và kết nối cầu nối sự kiện (SSE) đồng bộ với Flue Server (port 3000) để xử lý task agent dài hạn có phê duyệt (HITL).
   - Outputs: Danh sách Endpoint API, thiết kế Job Queue.

7. **Document Generation Agent**
   - Nhiệm vụ: Thiết kế template và công cụ xuất PDF/DOCX (Product Spec Sheet tiếng Anh, Packing List nháp, Logistics Brief).
   - Outputs: Cấu trúc template, mã nguồn generate tài liệu.

8. **Traceability & ESG Agent**
   - Nhiệm vụ: Xây dựng module ghi nhận Nhật ký lô hàng (Lot Passport), tọa độ GPS vùng trồng, đối chiếu ranh giới phá rừng EUDR và ESG bản nhẹ tự khai báo.
   - Outputs: Schema Lot Passport, checklist EUDR/ESG.

9. **Partner Coordination Agent**
   - Nhiệm vụ: Xây dựng database đối tác (Warehouse, Forwarder, Transporter) và thuật toán đề xuất kết nối dựa trên loại hàng, vị trí, thị trường mục tiêu.
   - Outputs: Thuật toán so khớp, danh mục đối tác khuyên dùng.

10. **Logistics Route Agent**
    - Nhiệm vụ: Đề xuất phương án vận chuyển (Forwarder chỉ định vs SME tự chọn), phân tích độ phức tạp của tuyến đường và tạo Logistics Brief.
    - Outputs: Form khảo sát tuyến, mẫu Logistics Brief gửi Forwarder.

## Requirements & Acceptance Criteria

### R1. UI Design & Styling conforming to InnoStar (`illustration.html`)
- [ ] Giao diện ứng dụng chuyển đổi hoàn toàn sang palette màu xanh lá chủ đạo nông nghiệp (`#2b3917`, `#4e6727`, `#7e9a34`, `#bdcf80`).
- [ ] Trang Welcome hiển thị giao diện A4 Live Proposal giới thiệu tổng quan đề án.

### R2. Export Readiness Diagnostics (Layer 1 & 2)
- [ ] Tính năng upload hồ sơ -> chấm điểm sẵn sàng xuất khẩu từ 0-100 và chẩn đoán tài liệu còn thiếu.
- [ ] Tạo được Product Spec Sheet tiếng Anh chuyên nghiệp và lưu trữ tập trung.

### R3. Label, Packaging & Compliance Review (Layer 3)
- [ ] Tính năng upload ảnh nhãn mác -> OCR trích xuất thông tin dinh dưỡng, thành phần, nguồn gốc và dịch thuật.
- [ ] Gắn cờ cảnh báo (risk flags) đối với các quảng cáo phóng đại ("organic" tự phong) hoặc lỗi dịch thuật tiếng Anh.

### R4. Traceability & EUDR Checklist (Layer 4)
- [ ] Ghi nhận tọa độ GPS vùng trồng của hợp tác xã/nông hộ.
- [ ] Xuất file Lot Passport PDF đính kèm mã QR truy xuất quy trình xử lý thô.

### R5. Logistics Route & Partner Recommendation (Layer 5 & 6)
- [ ] Nhập thông tin lô hàng -> đề xuất tuyến đường và gợi ý Warehouse/Forwarder phù hợp.
- [ ] Tạo Logistics Brief sẵn sàng gửi cho hãng vận chuyển/buyer để lấy báo giá nhanh.

### R6. Verification & Tech Stack
- [ ] Mã nguồn backend chia thành các thư mục domain rõ ràng tại `/modules`.
- [ ] Viết unit tests bằng Vitest kiểm thử logic đối soát container ISO 6346 và so khớp trọng lượng.
- [ ] Build dự án thành công không lỗi TypeScript trên Vite + Express.


