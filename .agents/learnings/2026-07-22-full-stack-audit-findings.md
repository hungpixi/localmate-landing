# Full-Stack Audit Findings & RCA (2026-07-22)

## Overview
Đợt kiểm định toàn diện dự án ExportMate ngày 22/07/2026 phát hiện 7 nhóm rủi ro nghiêm trọng và anti-patterns cần tuân thủ triệt để từ nay về sau:

### 1. Security & Multi-Tenant Data Isolation (P0)
- **Anti-Pattern**: Bảng CSDL nhạy cảm (`Partner`, `Rfq`, `IdeaRealityCheck`) bị thiếu cột `workspace_id`.
- **Quy tắc**: Mọi bảng nhạy cảm thương mại thuộc về doanh nghiệp bắt buộc phải có `workspace_id TEXT NOT NULL` kèm khóa ngoại FK `FOREIGN KEY (workspace_id) REFERENCES Workspace(id)` và INDEX `idx_<table_name>_workspace`.

### 2. Financial & Currency Precision (P0)
- **Anti-Pattern**: Dùng `Float` / `REAL` để lưu giá trị tiền tệ, cước phí, tỷ lệ thuế và đơn giá.
- **Quy tắc**: Mọi giá trị tiền tệ, đơn giá, thuế suất bắt buộc dùng `@db.Decimal(18, 4)` trong Prisma / Postgres hoặc `INTEGER` xu/cents trong D1. Cấm dùng `Float` theo AGENTS.md Rule 13.

### 3. Database Transactions (P0)
- **Anti-Pattern**: Thực hiện `deleteMany` rồi `createMany` trực tiếp trong handler mà không bọc Transaction.
- **Quy tắc**: Các thao tác xóa-tạo lặp phải bọc trong `prisma.$transaction([...])` hoặc D1 batch transaction để chống mất dữ liệu khi gián đoạn mạng.

### 4. Route Mounting & Auth Guards (P1)
- **Anti-Pattern**: Mount nhiều router trùng route prefix (Route Collision) hoặc thiếu Middleware auth context.
- **Quy tắc**: Mọi Express/Hono router phải nằm dưới namespace rõ ràng (vd: `/api/crm/buyers`, `/api/logistics`). Mọi route nhạy cảm phải đi qua Middleware `resolveUserContext`.

### 5. Frontend Architecture & Page Monoliths (P1)
- **Anti-Pattern**: Đặt toàn bộ UI, state, modal, tab và logic fetch trong `src/pages/` tạo file > 1000 lines với 30+ `useState`.
- **Quy tắc**: Page chỉ nhận route params và ghép feature components (`src/features/<feature>/components`). Tách state/fetch về TanStack Query custom hooks.

### 6. Visual Fidelity & Shell Alignment (P0)
- **Anti-Pattern**: Lệch Sidebar width (260px vs 290px), 49 glassmorphism, 41 gradient rực rỡ, 20+ emoji UI.
- **Quy tắc**: Đồng bộ Sidebar `290px` token. Cấm Glassmorphism (`backdrop-blur-*`), cấm Gradient đa màu (Purple/Indigo/Fuchsia), dùng Lucide SVG Icons.

### 7. Ghost APIs & Fake Form Submits (P0)
- **Anti-Pattern**: Form submit dùng `setTimeout` + Toast suông thay vì save DB; gọi API endpoint chưa tồn tại ở backend.
- **Quy tắc**: Cấm giả vờ success. 100% Form submit phải gọi API backend thực sự và lưu DB.
