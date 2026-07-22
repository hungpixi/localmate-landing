# ĐẶC TẢ VERTICAL SLICE MVP — EXPORTMATE.AI

Tài liệu này xác định triết lý phát triển, phạm vi tính năng (scope) và lộ trình phát triển cốt lõi của ExportMate.AI. Tất cả các AI code-subagents bắt buộc phải đọc và tuân thủ nghiêm ngặt tài liệu này trước khi chỉnh sửa mã nguồn.

---

## 1. Triết Lý Phát Triển & Bản Chất Sản Phẩm

ExportMate.AI tập trung giải quyết bài toán cốt lõi: **đánh giá → hành động → cập nhật bằng chứng → đánh giá lại**.

### ExportMate không phải gì?
*   Không phải phần mềm quản lý xuất nhập khẩu đầy đủ (logistics, hải quan, freight forwarding).
*   Không phải CRM quản lý buyers.
*   Không phải chatbot hỏi đáp xuất khẩu thông thường hay website builder chung chung.

### ExportMate MVP thực sự là gì?
> **"Một hệ thống biến dữ liệu rời rạc của doanh nghiệp thành bộ hồ sơ xuất khẩu có cấu trúc và một lộ trình hành động có thể theo dõi."**

---

## 2. Phạm Vi Tính Năng (7 Module Cốt Lõi)

### Module 1 — Onboarding
*   Thu thập thông tin tinh gọn (tên DN, loại hình, ngành hàng, quy mô, kinh nghiệm, thị trường mục tiêu) để cá nhân hóa bài đánh giá.

### Module 2 — Export Readiness Assessment
*   Đánh giá 6 nhóm: Doanh nghiệp, Sản phẩm, Bao bì, Chứng nhận, Tuân thủ, Thị trường.
*   Trả ra điểm số từng nhóm, các vấn đề nghiêm trọng, bằng chứng còn thiếu và khuyến nghị hành động.

### Module 3 — Company & Factory Profile
*   **Single Source of Truth** chứa thông tin pháp lý, nhà xưởng, công suất, máy móc, thông tin liên hệ. Dữ liệu này được dùng chung cho Supplier Page và bộ hồ sơ xuất khẩu.

### Module 4 — Product Profile
*   Quản lý thông số kỹ thuật sản phẩm (SKU, tên Việt/Anh, MOQ, bao bì, HS Code đề xuất, catalogue). Hỗ trợ tối đa 1-5 sản phẩm ở MVP.

### Module 5 — Document & Evidence Vault
*   Kho lưu trữ và phân loại tài liệu (giấy phép, chứng chỉ ISO/HACCP, spec sheet) có gắn ngày hết hạn, phiên bản và trạng thái xác minh.

### Module 6 — Roadmap & Task Management
*   Tự động sinh lộ trình 7/30 ngày từ khoảng thiếu (gaps) điểm thấp của bài đánh giá. Giao việc, đặt deadline và yêu cầu upload bằng chứng hoàn thành.

### Module 7 — Supplier Page
*   Lớp hiển thị công khai song ngữ Việt - Anh của toàn bộ thông tin doanh nghiệp, sản phẩm và chứng nhận đã được duyệt công khai (public).

---

## 3. Luồng Sản Phẩm Duy Nhất Phải Chạy Được

```text
Đăng ký
→ Tạo workspace doanh nghiệp
→ Hoàn thành onboarding
→ Làm readiness assessment
→ Nhận score và gaps
→ Hệ thống tạo roadmap
→ Nhập hồ sơ doanh nghiệp
→ Thêm sản phẩm
→ Upload bằng chứng
→ Hoàn thành task
→ Readiness được tính lại
→ Xuất bản Supplier Page
```
*Lưu ý: Mọi tính năng khác ngoài luồng này (logistics, payment, buyer funnel, AI multi-agent) đều nằm ngoài phạm vi (Out of Scope) của MVP.*

---

## 4. Kiến Trúc Kỹ Thuật MVP

*   **Frontend**: Next.js, React, Tailwind CSS, TypeScript strict, TanStack Query, React Hook Form + Zod.
*   **Backend**: Next.js API hoặc Hono on Cloudflare Workers.
*   **Database**: PostgreSQL / Cloudflare D1. Row-level organization isolation.
*   **Storage**: Cloudflare R2 / Supabase Storage (lưu trữ metadata và keys ở DB, không lưu binary trực tiếp trong DB).
*   **Authentication**: Supabase Auth / Clerk (OWNER, MEMBER, CONSULTANT, ADMIN).
*   **AI Services**: Dịch vụ độc lập hỗ trợ OCR trích xuất chứng chỉ, dịch Việt - Anh và gợi ý mô tả sản phẩm (giữ mô hình *human-in-the-loop* người dùng duyệt trước khi lưu).

---

## 5. Lộ Trình Code MVP (50 Ngày)

*   **Giai đoạn 0 (Ngày 1-2)**: Khóa PRD, user flows và ERD schema.
*   **Giai đoạn 1 (Ngày 3-6)**: Foundation (Project setup, DB, Auth, Layout).
*   **Giai đoạn 2 (Ngày 7-11)**: Company Data Core (Company & Factory Profile CRUD).
*   **Giai đoạn 3 (Ngày 12-17)**: Product & Documents (Product & Document Vault).
*   **Giai đoạn 4 (Ngày 18-23)**: Readiness Engine (Question bank, scoring rule engine).
*   **Giai đoạn 5 (Ngày 24-29)**: Roadmap Engine (Task templates, gap mapping, score recalculation).
*   **Giai đoạn 6 (Ngày 30-34)**: Supplier Page (slug, public view, Việt/Anh).
*   **Giai đoạn 7 (Ngày 35-38)**: Admin Concierge Console (Xác minh tài liệu, theo dõi pilot).
*   **Giai đoạn 8 (Ngày 39-43)**: AI Assistance (OCR, dịch thuật, gợi ý description).
*   **Giai đoạn 9 (Ngày 44-50)**: Pilot Hardening (Test 3-5 doanh nghiệp thật, tối ưu hóa responsive & errors).
