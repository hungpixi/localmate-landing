# Bộ Tiêu Chí Kiểm Thuận & Review Toàn Diện ExportMate (Full-Stack Audit Criteria)

## 0. MỤC TIÊU

Thực hiện kiểm tra toàn bộ codebase để xác định:
1. Backend đã đúng nghiệp vụ, an toàn, nhất quán và đủ khả năng mở rộng chưa.
2. Frontend đã được tổ chức tốt, tái sử dụng component, responsive và không lỗi layout chưa.
3. UI hiện tại có bám sát ảnh reference đã cung cấp hay đang bị code theo một phong cách khác.
4. UX có phản ánh đúng luồng nghiệp vụ ExportMate hay chỉ là các màn hình tĩnh đẹp mắt.
5. Các màn hình có dùng dữ liệu thật, API thật và trạng thái thật hay chỉ mock/hardcode.
6. Có lỗi nào khiến giao diện bị truncate, overflow, co cụm, khoảng trắng bất thường hoặc vỡ khi zoom 100%, 125%, 150%.
7. Những claim trong tài liệu, PDR và rules có thực sự được triển khai trong code hay chưa.

---

# 1. NGUYÊN TẮC BẮT BUỘC

## 1.1 Không được tự ý đổi design direction
- Ảnh reference do người dùng cung cấp là nguồn chuẩn về: Visual hierarchy, Bố cục, Mật độ thông tin, Kích thước sidebar, Header, Card, Table, Typography, Border radius, Shadow, Spacing, Màu sắc, Icon style, Cách chia section, Cách hiển thị dữ liệu.
- Nếu code hiện tại khác reference, phải ghi rõ: Khác ở đâu, Mức độ khác, Nguyên nhân, File/component chịu trách nhiệm, Cách sửa để quay về đúng reference.

## 1.2 Không được đánh giá dựa trên ảnh chụp duy nhất
- Chạy ứng dụng thật, duyệt từng route, thử dữ liệu dài/ngắn, thử các trạng thái (loading/empty/error/success), thử responsive (desktop/tablet/mobile) và browser zoom.

## 1.3 Không sửa hàng loạt trước khi audit xong
- Quy trình: Inventory -> Audit -> Bằng chứng -> Phân loại lỗi -> Remediation Plan -> Xác nhận/Phase -> Test lại -> Báo cáo Before/After.

## 1.4 Không được claim đã hoàn thành nếu thiếu bằng chứng
- Đường dẫn file, component/schema, screenshot/test, API response, DB query.

---

# 2. CƠ CẤU SUBAGENT REVIEW (10 VAI TRÒ)

1. **Lead Architect**: Quản lý scope, dependency, tổng hợp kết quả, phát hiện xung đột rules/PDR vs implementation.
2. **Backend Auditor**: Audit API, service, domain, database, validation, security, transaction, observability.
3. **Database Architect**: Audit schema, quan hệ, constraint, index, migration, tenant isolation, data integrity.
4. **Frontend Architect**: Audit component architecture, routing, state, data fetching, responsive layout, reuse.
5. **UI Visual Fidelity Reviewer**: So sánh từng màn hình với ảnh reference, chấm điểm visual similarity (thang 25), xác định lệch layout/màu/spacing.
6. **UX & Business Flow Reviewer**: Kiểm tra user journey, task flow, navigation, CTA, validation, feedback và 9 yếu tố bộ xương nghiệp vụ.
7. **Responsive & Accessibility QA**: Kiểm tra zoom (100%-200%), breakpoint (360px - 1920px), keyboard, focus, contrast, overflow.
8. **Integration QA**: Kiểm tra kết nối thật Frontend <-> Backend <-> DB, phát hiện mock/hardcode/API giả.
9. **Security Reviewer**: Kiểm tra auth, authorization, tenancy, secrets, upload, SQL injection, XSS, sensitive data.
10. **Release Gatekeeper**: Đánh giá release gate (P0/P1), quyết định APPROVED hoặc REJECTED - remediation required.

---

# 3. INVENTORY BẮT BUỘC
- Route inventory (Route, Component, Layout, API, Auth, Role, Status)
- Component inventory (Primitives, Shared, Feature components, Duplicate check, Code length check)
- Backend inventory (Route -> Validation -> Auth -> Service -> Domain -> DB DTO)
- Data inventory (Entities, Aggregates, Enums, Lifecycles, Mock vs Seed vs Real)

---

# 4. BỘ TIÊU CHÍ AUDIT CHI TIẾT

### Thang điểm (0 - 5)
0: Không có | 1: Có hình thức nhưng sai | 2: Có 1 phần | 3: Cơ bản | 4: Tốt | 5: Production-ready

### 4.1 Backend & Domain Architecture
- Tách biệt Domain logic vs Controller.
- Lifecycle trạng thái rõ ràng (Readiness, Roadmap, Buyer, RFQ, Document, Shipment).
- Đảm bảo Tenant Isolation ở cả API và DB level.
- RESTful standards, DTO validation (Zod), Error schema thống nhất, chống N+1 query.
- Auth/Authorization theo Role + Workspace server-side.
- Database: FK, Unique constraint, Decimal for currency, migration idempotency.
- Transactions cho multi-step operations. Storage MIME/Size validation + Signed URLs.
- Security: SQLi, XSS, CSRF, Access Control, Secrets.
- Observability: Structured logging, Error tracing, Workspace context.

### 4.2 Frontend Architecture & UI/UX
- AppShell chuẩn, Single Source of Truth cho Layout/Header/Sidebar.
- Component reuse & separation (Primitives vs Shared vs Features).
- Data fetching qua TanStack Query, xử lý đủ 4 states (Loading, Empty, Error, Success).
- Type Safety: Zod schema sharing, không `any` hoặc cast type ẩu.
- Responsive & Zoom: No horizontal scroll toàn trang, `min-width: 0` flex/grid children, grid minmax, wrap text có chủ đích.
- Visual Fidelity (Thang 25): Layout (5), Typography (5), Color (5), Component (5), Spacing (5). Cần >= 19/25 mới pass.
- UX & Business Flow: 9 yếu tố bộ xương nghiệp vụ, next action rõ ràng, CTA hierarchy.

### 4.3 Visual Reference Override Checklist
Mọi màn hình phải lập bảng đối chiếu với ảnh reference:
- Page padding, Sidebar width, Header height, Grid columns, Card size, Typography, Color, Radius, Shadow, Spacing, CTA position, Table density.
