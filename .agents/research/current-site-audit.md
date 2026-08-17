# Current Site Audit & Architecture Assessment

**Ngày thực hiện:** 17/08/2026  
**Dự án:** LocalMate.vn  
**Mục tiêu:** Đánh giá toàn diện hiện trạng mã nguồn, tài sản số, SEO, cấu trúc định tuyến và các điểm nghẽn kỹ thuật trước khi xây dựng hệ thống website dịch vụ và nội dung tăng trưởng.

---

## 1. Current Stack & Runtime
- **Frontend Core:** React 18.2.0 + TypeScript 5.2.2 + Vite 5.1.6.
- **Iconography:** Lucide React (`lucide-react`).
- **Styling Architecture:** Vanilla CSS + CSS Variables / Custom Tokens (`src/styles/tokens.css`, `src/styles/globals.css`). Không dùng Tailwind / CSS-in-JS nặng nề.
- **Routing:** Client-side custom router (`src/components/layout/Router.tsx`) dựa trên `window.history.pushState` và `popstate` event.
- **State Management:** React local state + LocalStorage adapter (`src/services/pricingStorage.ts`).

---

## 2. Asset Inventory (Tài nguyên hình ảnh & minh họa)

| Tên Asset | Định dạng / Vị trí | Hiện trạng | Quyết định & Tái sử dụng |
| :--- | :--- | :--- | :--- |
| `logo.png` | PNG / `public/logo.png` | Logo thương hiệu LocalMate chất lượng cao | **KEEP & REUSE** (Header, Footer, OpenGraph) |
| `hero-store-phone.png` | PNG / `public/assets/illustrations/` | Mockup 3D điện thoại & cửa hàng | **KEEP & REUSE** (Homepage Hero, Service Landing) |
| `roadmap-flag-path.png` | PNG / `public/assets/illustrations/` | Minh họa lộ trình 3 bước | **KEEP & REUSE** (Solution Journey, Process) |
| `pricing-laptop-analytics.png`| PNG / `public/assets/illustrations/` | Minh họa laptop & biểu đồ phân tích | **KEEP & REUSE** (Pricing Page, Starter Pack) |
| `support-envelope-message.png`| PNG / `public/assets/illustrations/` | Minh họa hộp thư & hỗ trợ khách hàng | **KEEP & REUSE** (Contact, Support) |
| `location-pin-plant.png` | PNG / `public/assets/illustrations/` | Minh họa ghim vị trí & cây xanh | **KEEP & REUSE** (Google Maps Service, Local SEO) |
| `mascot-store-corner.png` | PNG / `public/assets/illustrations/` | Mascot đứng góc cửa hàng | **KEEP & REUSE** (Checklist Yêu Cầu, Starter Pack) |
| `mascot-ga4-gtm-ads.png` | PNG / `public/assets/illustrations/` | Mascot & Tracking GA4/GTM | **KEEP & REUSE** (Google Ads, Tracking Service) |
| `mascot-local-map.png` | PNG / `public/assets/illustrations/` | Mascot & Bản đồ địa phương | **KEEP & REUSE** (Google Maps Service Page) |
| `mascot-conversion-growth.png`| PNG / `public/assets/illustrations/`| Mascot tăng trưởng & biểu đồ | **KEEP & REUSE** (Services Overview, Case Studies) |
| `mascot-contact-cta.png` | PNG / `public/assets/illustrations/` | Mascot nghe điện thoại & liên hệ | **KEEP & REUSE** (CTA Section, Contact Page) |
| `landing-490k/*` | 5 PNGs / `public/assets/landing-490k/`| Bộ ảnh gói 490k chuẩn | **KEEP & REUSE** (Gói 490k Landing & Pricing) |
| `mockups/01-10` | PNG / `docs/mockups/` | 10 bản mockup thiết kế chuẩn | **REFERENCE SSOT** cho kiểm tra UI |

---

## 3. SEO Status & Gaps

### Điểm mạnh hiện có:
1. Thẻ meta cơ bản và JSON-LD `ProfessionalService` + `FAQPage` đã có tại `index.html`.
2. Hỗ trợ `<noscript>` fallback cho bot tìm kiếm và trình thu thập dữ liệu thô.
3. Font Be Vietnam Pro được load tối ưu qua Google Fonts.
4. Sitemap XML cơ bản và robots.txt đã có sẵn.

### Khoảng trống & Lỗ hổng cần khắc phục:
1. **Chưa có Per-route Dynamic Metadata:** Khi người dùng/bot chuyển sang `/dich-vu`, `/bang-gia`, `/kien-thuc`, tiêu đề và meta description vẫn giữ nguyên của trang chủ. Cần component `SEOHead` để cập nhật động theo từng URL.
2. **Thiếu Schema theo ngữ cảnh:** Chưa có schema `Service` cho trang dịch vụ, `Article` cho bài viết kiến thức, và `BreadcrumbList` cho cấu trúc phân cấp.
3. **Chưa có Canonical URL chính xác theo Route:** Canonical URL hiện tại bị cố định về `https://localmate.vn/`.
4. **Cấu trúc URL chưa hỗ trợ Dynamic Slug:** Cần hỗ trợ `/dich-vu/:slug`, `/kien-thuc/:slug`, `/du-an/:slug` với nội dung sâu, không tạo trang rỗng.

---

## 4. Content & Service Catalog Architecture

### Hiện trạng:
- Đã có danh mục 40 dịch vụ (`src/data/servicesCatalog.ts`) và nội dung phễu chuyển đổi (`src/data/landingContent.ts`).
- Tuy nhiên, thông tin dịch vụ đang ở dạng tóm tắt ngắn, chưa có trang chi tiết đáp ứng tiêu chuẩn Section #7 của Master Prompt (Bao gồm: Breadcrumb, Outcome, Starting Price, SLA, Who this is for, Who it is NOT for, Deliverables, Process 5 bước, What client prepares, Evidence, FAQ, CTAs).
- Trang Kiến thức (`KnowledgePage`) mới chỉ có danh sách bài tóm tắt, chưa có trang đọc bài chi tiết (`ArticleDetailPage`) với Table of Contents, Tác giả, FAQ và đường dẫn về dịch vụ liên quan.
- Trang Dự án (`ProjectsPage`) mới chỉ hiển thị demo đơn giản, chưa có Case Study chi tiết (`CaseStudyDetailPage`) theo cấu trúc Vấn đề -> Giải pháp -> Thực thi -> Số liệu thực tế.

---

## 5. Technical Debt & Performance Assessment
- **CSS Architecture:** `tokens.css` và `globals.css` đã được tối ưu chống tràn (`overflow-x: hidden`, `box-sizing: border-box`), không có layout shift nghiêm trọng.
- **Zero Glassmorphism:** Đã tuân thủ triệt để bảng màu Light Mode chuẩn, độ tương phản cao, nền sáng chữ tối rõ nét.
- **Bundle Size:** Nhẹ (~200KB minified JS), không có thư viện nặng gây nghẽn INP/LCP.
- **Dependencies:** Gọn gàng (chỉ có React, React-DOM, Lucide-React).

---

## 6. Action Items for Rebuild
1. Thiết lập **SEO Engine** động với per-route `<title>`, `<meta>`, canonical & JSON-LD schema.
2. Tích hợp **Data SSOT** chuẩn hóa cho Services, Case Studies, Articles, Claims và Policies.
3. Triển khai **Service Detail Renderer** cho 4 dịch vụ P0 và toàn bộ catalog.
4. Triển khai **Article Detail Renderer** và **Case Study Detail Renderer**.
5. Hoàn thiện **MegaMenu**, **Mobile Drawer**, **Sticky Quick Action Bar**, và **Corporate Footer**.
6. Tích hợp **Universal Lead Modal** và hệ thống theo dõi sự kiện **Analytics**.
7. Chạy QA DevTools, audit responsive trên đa độ phân giải và xuất báo cáo nghiệm thu.
