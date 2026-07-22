# ExportMate Architecture: Lead-Gated Demo Sandbox System (PDR Phase 0.4)

> **Architecture Spec**: Isolated Demo Sandboxes, 3-Second Onboarding, Behavior Tracking & Lead Management

---

## 1. Tầm nhìn & Triết lý Hành trình Demo (Zero-Password, 3s Instant Workspace)

ExportMate không mở đầu bằng form rườm rà hay yêu cầu tạo mật khẩu phức tạp. Mọi trải nghiệm Demo được thiết kế theo mô hình **Lead-Gated Ephemeral Sandbox**:

```text
TRUY CẬP /demo
   │
   ▼
FORM BẮT ĐẦU (< 20 giây)
   ├── Họ và tên
   ├── Số điện thoại / Zalo (Số nhận diện session, KHÔNG DÙNG LÀM MẬT KHẨU)
   └── Chọn 1 trong 4 Vai trò (Persona Cards)
          ├── 🏢 Doanh nghiệp (Business)
          ├── ⚖️ Ban giám khảo / Mentor (Judge)
          ├── 💼 Nhà đầu tư / Đối tác (Investor)
          └── 🎓 Sinh viên / Người trải nghiệm (Student)
   │
   ▼
MÀN HÌNH KHỞI TẠO (3 Giây Animated Progress)
   ├── 0-1s: Đang tạo Workspace riêng (Clone từ Master Template)
   ├── 1-2s: Đang nạp dữ liệu hồ sơ doanh nghiệp & sản phẩm mẫu
   └── 2-3s: Đang xây dựng lộ trình hành động xuất khẩu -> Auto Navigation
   │
   ▼
DASHBOARD CÁ NHÂN HÓA THEO PERSONA
   ├── Welcome Banner tùy chỉnh theo Vai trò
   ├── Demo Sandbox Workspace cô lập hoàn toàn (Multi-Tenant Isolated)
   └── Đính kèm Link phòng đầu tư (/invest) cho Investor & Judge
```

---

## 2. Mô hình Dữ liệu Sandbox & Quyền hạn (Data Models)

### A. DemoLead
Lưu thông tin đăng ký trải nghiệm phục vụ đội ngũ follow-up:
- `id`: string (UUID)
- `fullName`: string
- `phone`: string (Zalo / Contact)
- `email`: string (Optional)
- `persona`: `'business' | 'judge' | 'investor' | 'student'`
- `exportStage`: string (Giai đoạn xuất khẩu nếu là doanh nghiệp)
- `leadScore`: number (Được tự động tính toán dựa trên hành vi)
- `createdAt`: ISO Timestamp

### B. DemoSession & DemoWorkspace
Mỗi lần đăng ký tạo ra một **Session và Workspace cô lập hoàn toàn**:
- `sessionId`: `demo-session-<uuid>`
- `workspaceId`: `demo-ws-<uuid>`
- `isDemoSession`: `true`
- `expiresAt`: 24 giờ kể từ thời điểm tạo
- `sourceTemplateId`: `master-demo-exportmate-v1`

---

## 3. Bản đồ Chuyển hướng & Chức năng theo Persona

| Persona | Priority Focus | Welcome Banner CTA | Dedicated Destination |
|---|---|---|---|
| **Doanh nghiệp (Business)** | Readiness Assessment, Supplier Site 15m, Product Catalog | `[Xem mức độ sẵn sàng]` | `/dashboard/readiness` |
| **Ban giám khảo (Judge)** | Solution Architecture, Decision Engine, Verification Badges | `[Khám phá luồng sản phẩm]` | `/dashboard/overview` |
| **Nhà đầu tư (Investor)** | Traction, Business Model, Investment Room | `[Khám phá sản phẩm]` + `[Xem hồ sơ dự án]` | `/invest` |
| **Sinh viên (Student)** | General UI/UX, Feature Exploration | `[Bắt đầu khám phá]` | `/dashboard` |

---

## 4. Quản lý Lead & Theo dõi Hành vi (`/admin/demo-leads`)

Hệ thống ghi vết 18 sự kiện tương tác (`demo_workspace_created`, `readiness_completed`, `supplier_page_edited`, `investment_room_viewed`, etc.) để tính toán **Lead Score (0-100)**:
- **0-19**: Tester / Student
- **20-39**: Cold Lead
- **40-59**: Warm Lead
- **60-79**: Qualified Lead
- **80+**: Hot Lead (Doanh nghiệp hoặc Nhà đầu tư hoàn thành Readiness & xem Hồ sơ Dự án)
