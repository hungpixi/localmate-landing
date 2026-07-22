# ExportMate Domain Architecture: Workspace SSOT & Tenant Boundary

> **Tài liệu PDR Phase 0** | Quyết định Kiến trúc Lõi cho Hệ thống Workspace ExportMate

---

## 1. Định nghĩa & Tầm nhìn Workspace

**Workspace = Không gian làm việc Single Source of Truth (SSOT) và Tenant Boundary duy nhất của một doanh nghiệp / hợp tác xã / cơ sở sản xuất xuất khẩu.**

Trước đây, hệ thống coi `Workspace`, `ExportProject`, và `Product` như các khái niệm chồng chéo hoặc phẳng. Trong kiến trúc mới, **Workspace nằm ở cấp cao nhất của hệ thống đa người dùng (Multi-Tenant)**.

### Cấu trúc Phân cấp Hệ thống (Data Hierarchy)

```text
User (Tài khoản người dùng)
└── Workspace (Tenant - Doanh nghiệp / HTX)
    ├── Company Profile (Hồ sơ pháp lý, thương hiệu)
    ├── Factory Capabilities (Năng lực sản xuất, máy móc)
    ├── Master Products (Danh mục sản phẩm master dùng chung)
    ├── Certifications (Giấy chứng nhận ISO, HACCP, Halal...)
    ├── Asset Library (Kho ảnh logo, nhà xưởng, bao bì, hồ sơ PDF)
    ├── Contacts & Members (Thành viên & Quyền hạn)
    ├── Supplier Sites (Các website giới thiệu nhà cung cấp tiếng Anh)
    ├── Export Plans (Các kế hoạch tiếp cận thị trường xuất khẩu)
    ├── Buyers (Danh bạ đối tác / Người mua quốc tế)
    └── RFQs & Quotations (Yêu cầu báo giá & Bảng báo giá xuất khẩu)
```

---

## 2. Mô hình Dữ liệu Chi tiết (Domain Entity Model)

### 2.1 Workspace & Membership

```prisma
model Workspace {
  id          String   @id @default(uuid())
  name        String   // Tên doanh nghiệp/HTX: "HTX Cà phê Ea Tu"
  slug        String   @unique // URL identifier: "htx-ca-phe-ea-tu"
  businessType String?  // COOPERATIVE | HOUSEHOLD | COMPANY | FACTORY | OTHER
  industry    String?  // Nông sản, Thực phẩm, Mỹ nghệ, Dệt may...
  country     String   @default("VN")
  defaultLang String   @default("en")
  ownerId     String
  owner       User     @relation("WorkspaceOwner", fields: [ownerId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  members        WorkspaceMember[]
  companyProfile CompanyProfile?
  products       Product[]
  certifications Certificate[]
  assets         DemoAsset[]
  supplierSites  SupplierSite[]
  exportPlans    ExportPlan[]
  buyers         Partner[]
  rfqs           Rfq[]
}

model WorkspaceMember {
  id          String              @id @default(uuid())
  workspaceId String
  workspace   Workspace           @relation(fields: [workspaceId], references: [id], onDelete: Cascade)
  userId      String
  user        User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  role        WorkspaceMemberRole @default(MEMBER) // OWNER | ADMIN | MEMBER | VIEWER
  createdAt   DateTime            @default(now())
  updatedAt   DateTime            @updatedAt

  @@unique([workspaceId, userId])
}
```

### 2.2 Company Profile 6 Tabs Structure

Hồ sơ doanh nghiệp không nhét tất cả vào một form dài mà chia thành 6 tab nghiệp vụ với trạng thái hoàn thiện (*Field Completeness Status*: `completed` | `missing` | `draft` | `verified` | `expired`):

1. **Thông tin cơ bản**: Tên tiếng Việt & tiếng Anh, mã số thuế, địa chỉ trụ sở, năm thành lập, đại diện pháp luật, logo, tagline.
2. **Năng lực sản xuất**: Diện tích nhà xưởng ($m^2$), số dây chuyền, công suất hàng tháng (tấn/tháng, chiếc/tháng), máy móc chủ lực, hỗ trợ OEM/ODM, khả năng cấp mẫu (samples).
3. **Thị trường & Kinh nghiệm**: Các thị trường đang xuất khẩu (EU, US, Japan, Korea...), số năm kinh nghiệm xuất khẩu, doanh số xuất khẩu trung bình.
4. **Chứng nhận**: Danh sách chứng nhận (ISO, HACCP, BRC, FDA, Halal, Fairtrade, OCOP...), đơn vị cấp, số chứng nhận, ngày hết hạn, đính kèm PDF scan.
5. **Hình ảnh & Tài liệu**: Gallery ảnh nhà máy, kho bãi, quy trình kiểm soát chất lượng, video giới thiệu, Profile PDF công ty.
6. **Người liên hệ**: Họ tên, chức vụ, email làm việc, sđt/Zalo/WhatsApp người đại diện giao dịch quốc tế.

---

## 3. Luồng Điều hướng & Giao diện Quản lý Workspace

Workspace không phải là một widget nhỏ nằm góc màn hình; nó sở hữu hệ thống routing và navigation độc lập:

### Route Map

```text
/workspaces                     -> Danh sách các workspace người dùng sở hữu/tham gia
/workspaces/new                 -> Form khởi tạo workspace mới trong 1 phút
/dashboard                      -> Workspace Overview & Setup Center Checklist
/settings/workspace             -> Quản lý thông tin doanh nghiệp (6 tabs profile)
/settings/members               -> Quản lý & mời thành viên, phân quyền role
/settings/billing               -> Gói cước & quản lý tài khoản xuất khẩu
```

### Workspace Switcher UX (Header / Sidebar)

Nằm ở vị trí cố định trên Header hoặc Sidebar chính của App:

```text
┌──────────────────────────────────────────────┐
│ [Logo] HTX Cà phê Ea Tu (Ea Tu Coffee Co) ▾  │
└──────────────────────────────────────────────┘
```

Khi bấm vào Workspace Switcher:
1. **Danh sách Workspace**:
   - `✓ HTX Cà phê Ea Tu` (Active)
   - `  Công ty TNHH Nông sản Tây Nguyên`
2. **Hành động nhanh**:
   - `+ Tạo workspace mới` (`/workspaces/new`)
   - `⚙ Quản lý doanh nghiệp` (`/settings/workspace`)
   - `👥 Mời thành viên` (`/settings/members`)

---

## 4. Quy trình Onboarding Mới (Step-by-Step)

### Bước 1: Tạo Workspace (Form cực nhẹ 60 giây)
- Tên doanh nghiệp / Hợp tác xã
- Loại hình doanh nghiệp (Hợp tác xã, Hộ kinh doanh, Công ty TNHH/CP, Xưởng sản xuất)
- Ngành hàng chủ lực (Cà phê, Hạt điều, Trái cây, Thủy sản, Gỗ...)
- Slug đường dẫn (tự sinh từ tên, hỗ trợ chỉnh sửa)

### Bước 2: Chọn Mục tiêu Ưu tiên (Choose Initial Path)
Ngay sau khi tạo Workspace, giao diện đưa 3 lựa chọn rõ ràng:

```text
Bạn muốn thực hiện công việc gì trước?

┌───────────────────────────────────────────────────────────┐
│ [🚀 Tạo Website Giới thiệu Xuất khẩu trong 15 phút]      │
│ Phù hợp khi bạn cần gửi hồ sơ B2B chuyên nghiệp cho buyer │
└───────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────┐
│ [📊 Đánh giá Mức độ Sẵn sàng (Export Readiness)]          │
│ Phù hợp khi chưa biết doanh nghiệp thiếu những chứng từ gì│
└───────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────┐
│ [🎯 Tạo Kế hoạch Tiếp cận Thị trường Mục tiêu]           │
│ Phù hợp khi đã có sản phẩm cụ thể muốn chào vào Mỹ/EU/Hàn │
└───────────────────────────────────────────────────────────┘
```

### Bước 3: Workspace Setup Center Checklist
Dành cho người dùng vào Dashboard lần đầu:
- [x] Tạo workspace (100%)
- [ ] Nhập thông tin năng lực doanh nghiệp (0%)
- [ ] Upload Logo & Ảnh nhà xưởng (0%)
- [ ] Thêm sản phẩm đầu tiên vào Master Catalog (0%)
- [ ] Khai báo chứng nhận chất lượng (0%)
- [ ] Xuất bản Supplier Site tiếng Anh (0%)

---

## 5. Bảng Chuyển đổi Khái niệm & Kế hoạch Migration

| Khái niệm cũ | Hiện trạng Code base | Vấn đề | Khái niệm mục tiêu | Kế hoạch Migration |
|---|---|---|---|---|
| Workspace phụ | Gắn chìm trong user, nhiều page dùng dummy workspaceId | Thiếu tenant boundary rõ ràng, switcher chưa thống nhất | **Workspace SSOT** | Tạo layout context `WorkspaceProvider`, mọi query API truyền `workspaceId` từ context |
| Profile Doanh nghiệp | Nằm rải rác trong `User` & `CompanyProfile` | Thiếu field completeness status và cấu trúc 6 tabs | **Company Profile 6 Tabs** | Mở rộng `CompanyProfile` schema, viết component `CompanyProfileForm` với autosave |
| Product theo Project | Product bị gắn vào `ExportProject` hoặc JSON | Không tái sử dụng được sản phẩm giữa các kế hoạch & website | **Master Workspace Product** | Đưa `Product` về `Workspace`, tạo quan hệ N:M với `ExportPlan` và `SupplierSite` |
