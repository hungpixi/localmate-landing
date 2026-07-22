# ExportMate Frontend Refactoring & Architecture Blueprint

Tài liệu hướng dẫn tái cấu trúc toàn diện mã nguồn Frontend React SPA của ExportMate từ 58 trang phân mảnh về **5 Module Nghiệp vụ Cốt lõi**, đồng thời áp dụng tiêu chuẩn Intrinsic Responsive Layout từ TailAdmin Boilerplate.

---

## 1. Quy hoạch 5 Module Cốt lõi (Core Feature Modules)

Tất cả 58 thư mục trang cũ trong `src/pages/` sẽ được quy hoạch gọn gàng về 5 Module chính nằm tại `src/features/`:

```
src/features/
├── dashboard/       # Module Tổng quan & Cấu hình Hệ thống
├── company/         # Module Doanh nghiệp (SME Profile, Sản phẩm, Nhà máy, Showroom)
├── roadmap/         # Module Lộ trình (Vận hành, Chi phí, Tuân thủ, Nhiệm vụ)
├── documents/       # Module Kho tài liệu (Dossiers, Kiểm tra OCR, Hợp đồng, eBL)
└── crm/             # Module Thị trường & Khách hàng (Buyer, RFQs, Báo giá, Đơn hàng)
```

### Chi tiết Phân bổ Route & Pages vào 5 Module:

| Module | Route / Chức năng | Phân bổ từ `src/pages/` cũ |
| :--- | :--- | :--- |
| **1. Dashboard** | `/dashboard`<br>`/dashboard/settings` | `Dashboard/`, `Settings/`, `AdminCostMonitorPage`, `ModelProvidersSettingsPage` |
| **2. Company** | `/dashboard/company`<br>`/dashboard/products`<br>`/dashboard/factories`<br>`/dashboard/supplier-demo` | `Profile/`, `SMEExportProfilePage`, `Products/`, `FactoryProfile/`, `Presence/`, `SupplierDemo/` |
| **3. Roadmap** | `/dashboard/journey` *(Tích hợp Tabs: Kanban & CostMap)*<br>`/dashboard/readiness`<br>`/dashboard/goals` | `Journey/`, `CostMap/`, `Tasks/`, `Readiness/`, `Goals/`, `ExportRoadmap/`, `ExportSetup/` |
| **4. Documents** | `/dashboard/documents`<br>`/dashboard/export-documents`<br>`/dashboard/ebl` | `Documents/`, `Dossiers/`, `ExportDossier/`, `DocumentViewer/`, `RiskAudit/`, `ValidationChecklist/`, `EBL/` |
| **5. CRM** | `/dashboard/buyers`<br>`/dashboard/rfqs`<br>`/dashboard/quotations`<br>`/dashboard/orders` | `Buyers/`, `BuyerMatch/`, `RFQs/`, `Quotations/`, `Orders/`, `Opportunities/`, `Partners/` |

---

## 2. Tiêu chuẩn Thiết kế Responsive & Co giãn (Learned from Boilerplate)

Qua phân tích các trang mẫu TailAdmin (`UiElements`, `Tables`, `Forms`, `ComponentCard`), các quy tắc co giãn giao diện bắt buộc bao gồm:

### A. Quy tắc Chống vỡ Khung (Intrinsic Responsive Rules)
1. **`min-w-0` Bắt buộc cho Flex/Grid Children:**
   * Mọi flex child hoặc grid item chứa văn bản hoặc bảng đều phải có class `min-w-0`.
   * Ví dụ: `<div className="flex-1 min-w-0">...</div>`.
2. **Co giãn padding theo Breakpoint:**
   * Mobile (360px+): `p-4`, `gap-4`, `text-xs`.
   * Desktop (1024px+): `p-6`, `gap-6`, `text-sm`.
3. **Tự động ngắt dòng văn bản dài (Text Truncation):**
   * Sử dụng `truncate` hoặc `break-words` kết hợp với `min-w-0` để tên sản phẩm, đường dẫn hoặc mã chứng từ không đẩy vỡ chiều rộng container.
4. **Bảng dữ liệu Responsive (DataTable):**
   * Mọi bảng dữ liệu phải bọc trong `<div className="w-full overflow-x-auto custom-scrollbar min-w-0">`.

---

## 3. Tiêu chuẩn Code 4 Tầng (4-Tier Code Cleanliness)

1. **Page Composition (`src/pages/`)**:
   * Mỗi file Page tối đa **250 dòng**.
   * Nhiệm vụ duy nhất: Đọc URL params, gọi custom hooks từ `features/`, ghép các sub-components.
2. **Feature Components (`src/features/<module>/components/`)**:
   * Mỗi component nhỏ tối đa **200 dòng**.
   * Tập trung vào một trách nhiệm duy nhất (Single Responsibility).
3. **Feature Hooks & API (`src/features/<module>/hooks/` & `api/`)**:
   * Tách toàn bộ logic fetch dữ liệu, mutation, state phức tạp ra khỏi UI.
