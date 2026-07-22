# TÁI KIẾN TRÚC SIDEBAR EXPORTMATE THEO HÀNH TRÌNH KHÁCH HÀNG (JOURNEY-FIRST NAVIGATION ARCHITECTURE)

---

## 1. MỤC TIÊU & BỐI CẢNH

Chuyển đổi thanh điều hướng (Sidebar) của ExportMate từ mô hình **Feature-First / Hardcoded Pages** sang **Customer Journey Navigation** (Hành trình trải nghiệm của doanh nghiệp xuất khẩu).

### Các vấn đề chính của Sidebar cũ:
1. `📊 Phòng Đầu tư` và `🚀 Wizard Tạo Website 15m` bị hardcode trực tiếp với emoji, tên dài mang tính marketing thay vì tên module chuẩn.
2. `Phòng Đầu tư` là khu vực stakeholder đặc biệt nhưng lại bị nhồi vào giữa luồng vận hành hàng ngày.
3. Sidebar không đồng nhất giữa các route, desktop và mobile nếu không sử dụng chung Single Source of Truth (SSOT).
4. Chưa hỗ trợ hiển thị theo ngữ cảnh (RBAC, Role, Workspace State, Pitching Mode).

---

## 2. CẤU TRÚC SIDEBAR THEO HÀNH TRÌNH KHÁCH HÀNG (JOURNEY MAP)

### A. KHỞI ĐỘNG (ONBOARDING & STRATEGY)
- **Tổng quan**: `/dashboard`
- **Mục tiêu xuất khẩu**: `/dashboard/goals`
- **Đánh giá sẵn sàng**: `/dashboard/readiness`
- **Kế hoạch xuất khẩu**: `/dashboard/export-plans`

### B. XÂY DỰNG HIỆN DIỆN (DIGITAL PRESENCE)
- **Hồ sơ doanh nghiệp**: `/dashboard/company`
- **Website giới thiệu**: `/dashboard/supplier-site` (Badge: `15m` hoặc `Tạo nhanh`)
- **Danh mục sản phẩm**: `/dashboard/products`
- **Thư viện hình ảnh**: `/dashboard/presence/sales-materials`

### C. TIẾP CẬN THỊ TRƯỜNG (MARKET ACCESS)
- **Thị trường mục tiêu**: `/dashboard/markets`
- **Đối tác & Buyer**: `/dashboard/buyers`
- **Yêu cầu báo giá (RFQ)**: `/dashboard/rfqs`
- **Báo giá xuất khẩu**: `/dashboard/quotations`

### D. CHUẨN BỊ XUẤT KHẨU (COMPLIANCE & DOCUMENTS)
- **Chứng nhận & Tuân thủ**: `/dashboard/compliance`
- **Tài liệu xuất khẩu**: `/dashboard/documents`
- **Kiểm tra & Phê duyệt**: `/dashboard/approvals`
- **Dịch vụ Logistics**: `/dashboard/partners`

### E. THỰC THI & THEO DÕI (LOGISTICS & AUDIT)
- **Theo dõi lô hàng**: `/dashboard/shipments`
- **Báo cáo tổng hợp**: `/dashboard/reports`
- **Nhật ký hệ thống**: `/dashboard/audit-log`

### F. KHÔNG GIAN ĐẶC BIỆT (UTILITIES & SPECIAL SPACES)
*(Đặt gần cuối sidebar, tách bằng divider, hỗ trợ hiển thị theo quyền/role/pitching mode)*
- **Phòng đầu tư**: `/invest` (Badge: `Pitching`, chỉ hiện với founder/admin/pitching mode)
- **Quản trị Workspace**: `/dashboard/workspaces`
- **Cài đặt hệ thống**: `/dashboard/settings/workspace`

---

## 3. SINGLE SOURCE OF TRUTH (SSOT) NAVIGATION CONFIG

Khai báo tại `src/config/navigation.config.ts`:
- Phân tách data config rời khỏi JSX render logic.
- Dùng `IconKey` từ icon registry thay vì nhét JSX component trực tiếp vào config object.
- Hỗ trợ matcher linh hoạt (`exact`, `prefix`, `match[]`) để active đúng item khi người dùng ở route con (`/dashboard/sites/new` -> active `Website giới thiệu`).
- Đồng bộ 100% giữa Desktop Sidebar, Mobile Drawer, Breadcrumb và Command Palette.
