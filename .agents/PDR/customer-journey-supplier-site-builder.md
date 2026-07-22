# ExportMate Customer Journey Architecture: 15-Minute Supplier Website Creation

> **Tài liệu PDR Phase 0.3** | Thiết kế Hành trình Khách hàng 15 Phút, 10 Presets & Workspace Information Architecture

---

## 1. Tầm nhìn Hành trình Khách hàng (15-Minute Target Budget)

Mục tiêu cốt lõi: Một doanh nghiệp xuất khẩu mới đăng nhập lần đầu có thể xuất bản Website B2B công khai chuyên nghiệp chỉ trong **15 phút**.

```text
ĐĂNG NHẬP
    │
    ▼
WORKSPACE MANAGEMENT ──► (Chưa có: Tạo Workspace 60s / Có rồi: Chọn Active Workspace)
    │
    ▼
CHỌN MỤC TIÊU ─────────► [🚀 Tạo Website 15m] (Ưu tiên số 1)
                         [📊 Đánh giá Readiness]
                         [🎯 Kế hoạch Xuất khẩu]
    │
    ▼
WEBSITE BUILDER WIZARD (6 Bước Tối giản)
    ├── Bước 1: Thông tin Doanh nghiệp (Prefill & Completeness meter)
    ├── Bước 2: Danh mục 1-10 Sản phẩm (Quick Add / Master Product Selector)
    ├── Bước 3: Thư viện Hình ảnh & Asset Classification
    ├── Bước 4: Chọn 1 trong 10 Mẫu Giao diện Presets
    ├── Bước 5: Preview Editor (Desktop/Tablet/Mobile + Content/Sections/Theme/Lang/SEO)
    └── Bước 6: Pre-Publish Check & Xuất bản Công khai URL (/s/:slug)
    │
    ▼
WORKSPACE OVERVIEW
    ├── Thẻ Website Status & Public URL (/s/:slug)
    ├── Giỏ hàng RFQ từ Buyer quốc tế gửi về CRM
    ├── Setup Checklist tiến trình
    └── Đánh giá Readiness & Kế hoạch thị trường (Làm sau)
```

### Ngân sách Thời gian (15-Minute Experience Budget)

| Bước trong Wizard | Thời gian tối đa | Thao tác chính |
|---|---|---|
| 1. Tạo Workspace | 60 giây | Tên doanh nghiệp, loại hình, ngành hàng, slug |
| 2. Doanh nghiệp | 3 phút | Prefill profile, tagline, email, phone/WhatsApp |
| 3. Sản phẩm | 4 phút | Chọn từ Master Catalog hoặc Quick Add 1-3 SP |
| 4. Hình ảnh | 3 phút | Upload Logo, ảnh sản phẩm, ảnh xưởng |
| 5. Chọn Mẫu | 1 phút | Lựa chọn 1 trong 10 Presets với Real Preview |
| 6. Preview & Edit | 3 phút | Chỉnh headline, bật/tắt section, chọn theme token |
| 7. Publish | 30 giây | Pre-publish check -> Live Public Showroom `/s/:slug` |
| **TỔNG CỘNG** | **~ 15 PHÚT** | **Khách hàng sở hữu Showroom B2B hoàn chỉnh** |

---

## 2. Bảng Xác minh 10 Presets Giao diện (Single Engine Architecture)

Tất cả 10 Presets dùng chung **1 Deterministic Site Renderer (`SupplierSiteRenderer.tsx`) + 1 JSON Schema + 17 Standard Section Registry**. Không tạo 10 codebase HTML/CSS độc lập!

| STT | Tên Preset | Phù hợp Ngành hàng | Số SP Tối ưu | Hero Variant | Theme Tokens (Primary / Secondary) | Card / Typography Style |
|:---:|---|---|:---:|:---:|---|---|
| 1 | **Factory Clean** | Nhà máy công nghiệp, bao bì, cơ khí | 3 - 10 SP | `split` | Navy (`#0B1F33`) / Steel Blue (`#2878C8`) | Compact, Inter, Rounded-md |
| 2 | **Agri Origin** | Nông sản, cà phê, hạt điều, trái cây | 1 - 5 SP | `centered` | Green (`#14532D`) / Farm Gold (`#D4A017`) | Natural, Be Vietnam Pro, Rounded-xl |
| 3 | **Food Export** | Thực phẩm chế biến, gia vị, đồ uống | 3 - 8 SP | `split` | Deep Amber (`#78350F`) / Warm Orange (`#D97706`) | Appetizing, Inter, Rounded-lg |
| 4 | **Premium Craft** | OCOP, thủ công mỹ nghệ, đặc sản | 1 - 3 SP | `spotlight` | Charcoal (`#1C1917`) / Emerald (`#059669`) | Elegant, Serif Pairing, Rounded-2xl |
| 5 | **Technical Catalog**| Linh kiện, máy móc, vật tư kỹ thuật | 5 - 15 SP | `minimal` | Slate (`#1E293B`) / Cyan (`#0891B2`) | Dense Grid, Monospace Metrics, Rounded-none |
| 6 | **OEM Private Label**| Xưởng gia công nhãn hàng riêng | 2 - 6 SP | `split` | Dark Blue (`#1E3A8A`) / Royal Blue (`#3B82F6`) | B2B Capability Focus, Rounded-md |
| 7 | **Sustainable Source**| Sản phẩm ESG, EUDR, Organic | 1 - 5 SP | `centered` | Forest (`#064E3B`) / Leaf (`#10B981`) | Eco Badges, Clean Spacing, Rounded-xl |
| 8 | **Corporate Exporter**| Tập đoàn, tổng công ty xuất khẩu | > 10 SP | `split` | Midnight (`#090D16`) / Gold (`#CA8A04`) | Corporate Prestige, Rounded-lg |
| 9 | **Single Product** | Doanh nghiệp 1 sản phẩm chủ lực | 1 SP | `spotlight` | Dark Navy (`#0F172A`) / Teal (`#00A889`) | High Impact Showcase, Rounded-xl |
| 10 | **Catalog Pro** | Danh mục lớn (> 10-100 sản phẩm) | > 10 SP | `minimal` | Dark Slate (`#0F172A`) / Export Teal (`#00A889`) | Filterable Grid & Search, Rounded-lg |

---

## 3. Thông tin Kiến trúc Cây Menu (Information Architecture)

Sau khi tạo website, người dùng được đưa vào Workspace Overview với Sidebar phân cấp rõ ràng theo 3 tầng nghiệp vụ:

```text
Ea Tu Agricultural Cooperative (Workspace Switcher)
├── 📊 Tổng quan (Dashboard & Activity Feed)
│
├── 🌐 WEBSITE (Nhóm tính năng Website & Chào hàng)
│   ├── Website giới thiệu (Editor, Presets, Preview, Domain)
│   ├── Sản phẩm Master (Danh mục 1-10 SP cấp Workspace)
│   ├── Thư viện hình ảnh (Asset Manager & Category Whitelist)
│   └── RFQ từ buyer (Hộp thư Yêu cầu báo giá B2B)
│
├── 🎯 XUẤT KHẨU (Nhóm tính năng Vận hành Xuất khẩu)
│   ├── Đánh giá sẵn sàng (Export Readiness Audit)
│   ├── Kế hoạch xuất khẩu (Export Plans 90 ngày)
│   ├── Buyer (Danh bạ đối tác quốc tế)
│   ├── Báo giá (Quotation Engine)
│   └── Tài liệu (Hồ sơ chứng từ xuất khẩu)
│
└── ⚙ QUẢN TRỊ (Cài đặt Doanh nghiệp)
    ├── Thành viên & Phân quyền
    └── Cài đặt Workspace
```

---

## 4. Quy tắc Microcopy UX (Tiếng ViệtThân thiện, Không Kỹ thuật)

- ❌ Tránh các từ kỹ thuật gây rối: `Deterministic Renderer`, `Schema completeness`, `Fixture`, `Layout resolver`, `Section registry`.
- ✅ Thay bằng ngôn từ B2B thân thiện: `Website của bạn`, `Mức độ hoàn thiện`, `Giao diện đề xuất`, `Thông tin còn thiếu`, `Xem trước`, `Xuất bản`.

---

## 5. Tiêu chuẩn Xuất bản & Pre-Publish Check

Engine chạy kiểm định chia thành 2 mức độ trước khi xuất bản:

### 🛑 Blocking Errors (Chặn Publish):
- Chưa có Tên doanh nghiệp.
- Chưa có ít nhất 1 Sản phẩm.
- Chưa có Email hoặc SĐT/WhatsApp liên hệ.
- Slug URL không hợp lệ hoặc bị trùng.
- Dữ liệu mâu thuẫn nghiêm trọng (ví dụ: công suất SP > công suất xưởng).

### ⚠️ Warnings (Cảnh báo nhưng Cho phép Publish):
- Chưa upload Logo doanh nghiệp.
- Chưa có ảnh nhà xưởng.
- Chưa khai báo chứng nhận chất lượng.
- Mô tả doanh nghiệp ngắn hơn 100 ký tự.
- Sản phẩm chưa khai báo MOQ hoặc Lead time.

Warnings **KHÔNG CHẶN PUBLISH**. Khách hàng bấm *Xuất bản* có ngay URL công khai `/s/:slug` và nhận thông báo nhắc nhở bổ sung thông tin sau.
