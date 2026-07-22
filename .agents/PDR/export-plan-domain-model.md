# ExportMate Domain Architecture: Export Plan & Product Master Data

> **Tài liệu PDR Phase 0** | Quyết định Kiến trúc Lõi cho Kế hoạch Thị trường & Quản lý Sản phẩm

---

## 1. Tách biệt Khái niệm Lõi: Export Plan vs Product vs Supplier Site

Một trong những nguyên nhân khiến giao diện và logic cũ bị rối là việc xếp 3 khái niệm `Workspace`, `Project`, và `Product` ngang hàng hoặc buộc `Product` phải thuộc cố định về một dự án.

### Quy tắc Kiến trúc Mới

1. **Workspace (`Workspace`)**: "Tôi là doanh nghiệp nào?" (Hồ sơ pháp lý, năng lực xưởng, danh mục master data).
2. **Master Product (`Product`)**: "Tôi sản xuất/bán thứ gì?" (Dữ liệu sản phẩm dùng chung toàn bộ workspace). Một sản phẩm có thể:
   - Xuất hiện trên nhiều Supplier Site.
   - Được chào cho nhiều buyer thuộc các quốc gia khác nhau.
   - Nằm trong nhiều kế hoạch thị trường (Export Plan).
   - Có nhiều báo giá (Quotation) và hồ sơ lô hàng (Dossier).
3. **Export Plan (`ExportPlan` - Kế hoạch xuất khẩu / Kế hoạch thị trường)**: "Tôi đang muốn đưa những sản phẩm nào vào thị trường mục tiêu nào trong khoảng thời gian nào?"
4. **Supplier Site (`SupplierSite`)**: "Buyer quốc tế sẽ nhìn thấy năng lực và sản phẩm của tôi như thế nào trên internet?"

---

## 2. Mô hình Dữ liệu Chi tiết Export Plan (Domain Entity Model)

### 2.1 Cấu trúc ExportPlan & ExportPlanProduct (N:M Relationship)

```prisma
model ExportPlan {
  id                String   @id @default(uuid())
  workspaceId       String
  workspace         Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)
  title             String   // Ví dụ: "Đưa cà phê Robusta chế biến sâu vào thị trường Đức"
  targetMarket      String   // Germany, USA, Japan, Korea, EU...
  status            String   @default("DRAFT") // DRAFT | PLANNING | IN_PROGRESS | COMPLETED | ARCHIVED
  targetBuyerCount  Int      @default(10)
  targetRfqCount    Int      @default(3)
  durationDays      Int      @default(90)
  startDate         DateTime @default(now())
  endDate           DateTime?

  // Readiness Snapshot dành riêng cho kế hoạch thị trường này
  readinessScore    Float?
  gapAnalysisJson   Json?    // Các khoảng thiếu chứng từ, chỉ tiêu SPS/TBT của thị trường Đức
  roadmapStepsJson  Json?    // Các nhiệm vụ 90 ngày

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  planProducts      ExportPlanProduct[]
  buyers            Partner[]
  rfqs              Rfq[]

  @@index([workspaceId])
  @@index([targetMarket])
}

model ExportPlanProduct {
  id           String     @id @default(uuid())
  exportPlanId String
  exportPlan   ExportPlan @relation(fields: [exportPlanId], references: [id], onDelete: Cascade)
  productId    String
  product      Product    @relation(fields: [productId], references: [id], onDelete: Cascade)
  targetPrice  Float?
  customhsCode String?    // HS code chi tiết theo thị trường mục tiêu (ví dụ 8-10 số tại Đức/EU)
  createdAt    DateTime   @default(now())

  @@unique([exportPlanId, productId])
  @@index([exportPlanId])
  @@index([productId])
}
```

---

## 3. Vai trò của Export Readiness Assessment (Không Gatekeeper Supplier Site)

### Readiness Score dùng làm gì?

Readiness Assessment là **công cụ đo lường năng lực tuân thủ và xác định khoảng thiếu (Gap Analysis)** cho một kế hoạch xuất khẩu cụ thể.

- **Vào thị trường EU**: Yêu cầu EU Deforestation Regulation (EUDR), ISO 22000, kiểm dịch dư lượng hóa chất.
- **Vào thị trường Mỹ**: Yêu cầu FDA Registration, FSVP Agent, chứng nhận HACCP/GMP.

### Readiness Score KHÔNG được làm gì?

- ❌ **KHÔNG khóa tính năng Supplier Site / Website giới thiệu**.
- ❌ **KHÔNG bắt buộc người dùng hoàn thành 100% đánh giá mới cho phép xem preview hoặc publish website**.

### Sự tách biệt giữa 2 luồng:

```text
               ┌───────────────────────────────────────────┐
               │              WORKSPACE SSOT               │
               └─────────────────────┬─────────────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
┌───────────────────────────────┐           ┌───────────────────────────────┐
│     LUỒNG A: SUPPLIER SITE    │           │    LUỒNG B: EXPORT PLAN       │
│  (Tạo website 15m chào buyer) │           │ (Vận tải, Pháp lý & Readiness)│
├───────────────────────────────┤           ├───────────────────────────────┤
│ • Không ép readiness score    │           │ • Đánh giá rủi ro theo thị trường│
│ • Thông tin thiếu -> Ẩn section│          │ • Sinh Roadmap 90 ngày        │
│ • Publish ngay khi tạo xong   │           │ • Quản lý chứng từ & Báo giá  │
└───────────────────────────────┘           └───────────────────────────────┘
```

---

## 4. Kế hoạch Chuyển đổi từ `ExportProject` sang `ExportPlan`

1. **Database Level**:
   - Giữ bảng `ExportProject` dưới dạng alias / backward compatibility views nếu còn route cũ.
   - Thêm bảng `ExportPlan` và `ExportPlanProduct`.
   - Migration script tự động map các `ExportProject` hiện có thành `ExportPlan`.
2. **API & Route Level**:
   - Đổi tên các route hiển thị từ `/projects` sang `/export-plans`.
   - Đổi tiêu đề UI từ "Dự án xuất khẩu" sang "Kế hoạch xuất khẩu" / "Kế hoạch thị trường".
3. **UI Composition**:
   - Giao diện Chi tiết Kế hoạch bao gồm các tab: Overview, Selected Products, Readiness & Gap Analysis, 90-Day Roadmap, Buyers & RFQs, Export Dossier / Documents.
