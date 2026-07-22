# ExportMate Technical Architecture: Deterministic Supplier Site Generation Engine v2.0

> **Tài liệu PDR Phase 0.2 (Hardened Engine)** | Kiến trúc Engine Tạo Website Xuất khẩu Tự động, Anti-Slop, Deduplicated & Validated

---

## 1. Nguyên tắc Bắt buộc của Engine (Core Engine Philosophy)

**Engine KHÔNG được thiết kế riêng cho bất kỳ doanh nghiệp nào (ví dụ: Ea Tu chỉ là tệp dữ liệu test fixture).**

Mọi kết quả render phải đi qua chuỗi xử lý Deterministic (hữu hạn, suy diễn được):

```text
Raw Customer Input Data
          │
          ▼
1. Canonical Data Schema & Field Provenance
          │
          ▼
2. Cross-Field Validation & Claim Guardrails
          │
          ▼
3. Fact Placement & Deduplication Engine
          │
          ▼
4. Section Decision Engine & Section Completeness Check
          │
          ▼
5. Layout Resolver & Progressive Tier Selection
          │
          ▼
6. Content Budget & CTA Dictionary Enforcement
          │
          ▼
7. Deterministic Component Renderer
          │
          ▼
Public Showroom Route (/s/:slug) + Analytics & RFQ Basket
```

---

## 2. Mô hình Nguồn gốc Dữ liệu (Field Provenance & Evidence)

Mọi trường dữ liệu trong hệ thống đều có thuộc tính **Provenance (Nguồn gốc & Bằng chứng)**:

```ts
export type VerificationStatus =
  | 'draft'
  | 'supplier_provided'
  | 'document_reviewed'
  | 'third_party_verified'
  | 'expired'
  | 'conflicting';

export type FieldSource =
  | 'supplier_input'
  | 'uploaded_document'
  | 'exportmate_review'
  | 'third_party';

export interface FieldEvidence<T = unknown> {
  value: T;
  source: FieldSource;
  verificationStatus: VerificationStatus;
  evidenceAssetIds?: string[];
  lastUpdatedAt?: string;
}
```

### Quy tắc Render Badges theo Provenance:

- **`supplier_provided`**: Hiển thị dữ liệu bình thường. **KHÔNG ĐƯỢC gắn badge "Verified" / "Authentic"**.
- **`document_reviewed`**: Hiển thị badge *"Document Reviewed"*.
- **`third_party_verified`**: Mới được phép gắn badge *"Third-Party Verified"* hoặc *"Audited Exporter"*.
- **`expired`**: Tự động đánh dấu hết hạn, KHÔNG hiển thị trạng thái Active.
- **`conflicting`**: Chặn dữ liệu mâu thuẫn khỏi việc publish công khai.
- **`draft`**: Chỉ hiển thị trong trang quản trị/preview editor.

---

## 3. Engine Kiểm tra Mâu thuẫn Dữ liệu Chéo (Cross-Field Validation Engine)

Chạy rà soát mâu thuẫn trước khi xuất bản website. Các quy tắc kiểm định bắt buộc:

1. **`PRODUCT_CAPACITY_EXCEEDS_FACTORY_CAPACITY`**: Tổng công suất các sản phẩm xuất khẩu không được vượt quá tổng công suất của nhà máy.
2. **`HERO_CATEGORY_NOT_IN_PRODUCTS`**: Ngành hàng tuyên bố ở Hero phải tồn tại trong danh mục sản phẩm đã xuất bản.
3. **`EXPIRED_CERTIFICATE_MARKED_ACTIVE`**: Chứng nhận có ngày hết hạn nhỏ hơn ngày hiện tại phải bị chuyển thành expired.
4. **`GALLERY_ASSET_CATEGORY_MISMATCH`**: Thư viện ảnh nhà xưởng chỉ được chứa ảnh có danh mục thuộc whitelist (`factory_exterior`, `factory_interior`, `production_line`, `machinery`, `warehouse`).
5. **`CURRENT_VS_TARGET_MARKET_MISMATCH`**: Thị trường mục tiêu (`target_market`) không bao giờ được ghi thành thị trường đã xuất khẩu (`currently_served`).
6. **`MOQ_MISSING_UNIT` & `LEADTIME_MISSING_RANGE`**: Bắt buộc MOQ phải có đơn vị tính, Lead time phải có khoảng ngày.

```ts
export interface ValidationError {
  code: string;
  severity: 'error' | 'warning';
  fields: string[];
  message: string;
}
```
- `severity: 'error'`: Block publish đối với section/field liên quan.
- `severity: 'warning'`: Cho phép publish nhưng hiển thị cảnh báo cho người dùng.

---

## 4. Cơ chế Chống Lặp Dữ liệu (Fact Placement Registry & Deduplication)

Định nghĩa vị trí xuất hiện chính (`primaryPlacement`), vị trí phụ (`secondaryPlacement`), và số lần xuất hiện tối đa (`maxOccurrences` = 1 hoặc 2) cho từng fact:

```json
{
  "factoryArea": {
    "primaryPlacement": "trust_bar",
    "secondaryPlacement": "factory_capabilities",
    "maxOccurrences": 2
  },
  "monthlyCapacity": {
    "primaryPlacement": "factory_capabilities",
    "secondaryPlacement": "trust_bar",
    "maxOccurrences": 2
  },
  "exportMarkets": {
    "primaryPlacement": "export_markets",
    "secondaryPlacement": null,
    "maxOccurrences": 1
  }
}
```
Engine thực hiện lọc trùng lặp dữ liệu trước khi đưa vào Template Renderer.

---

## 5. Engine Quyết định Section (Section Decision Engine)

Không tự động render tất cả các section khi có dữ liệu thô. Engine đưa ra quyết định cho từng section:

- **`show`**: Hiển thị bình thường.
- **`hide`**: Tr่อน hoàn toàn nếu dữ liệu không đủ độ hoàn thiện tối thiểu.
- **`merge`**: Gộp 2 section nhỏ (Ví dụ: `Company Overview` ngắn + `Export Commitments` -> Gộp thành `About & Capabilities`).
- **`condense`**: Thu gọn section thành dạng compact card.
- **`replace_variant`**: Đổi layout variant (Ví dụ: 1 SP -> *Product Spotlight*, 10 SP -> *Filterable Catalog*).

---

## 6. Phân cấp Website Tiến trình (Progressive Site Tiers)

Engine tự động chọn tier phù hợp với tỷ lệ hoàn thiện hồ sơ dữ liệu (% Completeness):

1. **`starter`** (Dữ liệu < 50%): Hiển thị 5-6 section cơ bản (`Hero`, `About`, `Products`, `Contact`, `RFQ`).
2. **`supplier`** (Dữ liệu 50% - 80%): Hiển thị 7-10 section (`Starter` + `Factory`, `Quality`, `Certifications`, `Packaging`, `Logistics`).
3. **`catalog_pro`** (Dữ liệu > 80%): Hiển thị 8-11 section đầy đủ (`Supplier` + `Product Details Modal`, `Downloads`, `OEM/ODM`, `Advanced RFQ`, `Traceability`).

---

## 7. Phân loại Thị trường Xuất khẩu Chặt chẽ (Market Relationship Classification)

Cấm dùng chung một nhãn "Thị trường" cho tất cả. Schema bắt buộc phân định:

```ts
export type MarketRelationship =
  | 'currently_served'      // "Current export markets"
  | 'previously_served'     // "Past export destinations"
  | 'target_market'         // "Target expansion markets"
  | 'shipping_capable'      // "Available shipping destinations"
  | 'buyer_inquiry_received';// "Markets with buyer interest"
```

---

## 8. Từ điển CTA Mặc định (CTA Dictionary)

AI **KHÔNG** được tự bịa ra chữ trên nút bấm. Mọi nút bấm dùng chung từ điển chuẩn hóa:

```json
{
  "openRfq": "Request a Quote",
  "addProduct": "Add to RFQ",
  "viewProduct": "View Specifications",
  "submitRfq": "Submit Official RFQ",
  "downloadProfile": "Download Company Profile",
  "contactSupplier": "Contact Supplier"
}
```

---

## 9. Giỏ hàng Báo giá dùng chung (Shared Multi-Product RFQ Basket)

Tất cả các preset đều dùng chung luồng RFQ Basket:

```ts
export interface RfqDraft {
  siteId: string;
  selectedProductIds: string[];
  quantities: Record<string, { amount: number; unit: string }>;
  destinationCountry?: string;
  incoterm?: string;
  packagingRequirements?: string;
  message?: string;
}
```
Khi người dùng bấm "Add to RFQ", một thanh **Sticky Floating Bar** xuất hiện ở đáy màn hình hiển thị số sản phẩm đã chọn và nút bấm mở Form gửi báo giá trực tiếp.

---

## 10. Giới hạn Độ dài Nội dung (Content Length Budgets)

- `Hero Headline`: 45 - 75 ký tự.
- `Hero Description`: 120 - 220 ký tự.
- `Company Summary`: 400 - 700 ký tự.
- `Product Title`: Tối đa 70 ký tự.
- `Product Summary`: 180 - 320 ký tự.
- `Capability Bullet`: Tối đa 90 ký tự.
- `Trust Fact Label`: Tối đa 24 ký tự.

Nếu vượt quá, Engine tự động áp dụng hàm rút gọn hoặc chuyển thành dạng expandable card mà không truncate mù mù mù.

---

## 11. Hệ thống Đo đạc Thống kê (Site & Funnel Analytics Tracking)

Mọi thao tác của Buyer trên Public Site (`/s/:slug`) đều được ghi nhận vào Analytics Engine:

- **`visits`**: Lượt truy cập trang công khai.
- **`productViews`**: Lượt xem chi tiết sản phẩm.
- **`rfqOpens`**: Lượt mở Form RFQ hoặc click nút báo giá.
- **`rfqSubmissions`**: Số đơn báo giá gửi thành công.
- **`deviceDistribution`**: Tỷ lệ Desktop / Mobile / Tablet.

Dữ liệu này được đẩy trực tiếp lên các **Stats Cards** trên trang Quản lý Supplier Site (`/dashboard/supplier-site`).
