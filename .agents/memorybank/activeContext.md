# LocalMate Active Context & SSOT Timeline

## 1. Project Info
- **Tên dự án**: LocalMate — Hệ sinh thái Dịch vụ, SEO & Content Growth cho Doanh nghiệp & Cửa hàng địa phương.
- **Tech stack**: React 18 + TypeScript + Vite + Vanilla CSS Custom Tokens + Lucide Icons.
- **Brand Identity**: Primary Green `#0d7647`, Accent Green `#16a34a`, Navy `#083B4C`, Light Theme `#fbfcfb`, Nền sáng chữ tối, không glassmorphism.
- **Single Source of Truth (SSOT)**: Toàn bộ Dịch vụ (`src/data/servicesData.ts`), Bài viết Kiến thức (`src/data/articlesData.ts`), Case Studies (`src/data/caseStudiesData.ts`), Bảng giá 40 dịch vụ (`src/data/servicesCatalog.ts`), Pháp lý (`src/data/policyData.ts`) và Claims (`src/data/claims.ts`).

## 2. SSOT Task Progress & Accomplishments
- [x] **Phase 1: Research, Audit & SSOT Documentation**:
  - Tạo `.agents/research/current-site-audit.md` đánh giá mã nguồn, assets, tech debt.
  - Tạo `docs/content/seo-topic-map.md` lập bản đồ Pillar - Cluster - Article - Service.
  - Tạo `docs/seo/redirect-map.md` quản trị cấu trúc URL Canonical và Redirects.
  - Tạo `src/data/claims.ts` xây dựng Claim Governance kiểm soát thông điệp marketing.
- [x] **Phase 2: Content & Service Catalog SSOT**:
  - Khởi tạo `src/data/servicesData.ts` cho 4 dịch vụ P0 trọng điểm (`google-ads`, `google-maps`, `website-landing-page`, `content-marketing`) theo khung 7 câu hỏi chuyển đổi.
  - Khởi tạo `src/data/caseStudiesData.ts` chứa 5 dự án thực tế đo lường trước/sau theo từng ngành.
  - Khởi tạo `src/data/articlesData.ts` chứa các bài viết kiến thức sâu chuẩn TOFU/MOFU có TOC, FAQ, Author.
  - Khởi tạo `src/data/policyData.ts` cho Chính sách bảo mật, Điều khoản dịch vụ và Cam kết SLA.
- [x] **Phase 3: Technical SEO & Dynamic Meta Engine**:
  - Triển khai `SEOHead.tsx` tự động cập nhật Title, Description, Canonical và JSON-LD (`ProfessionalService`, `BreadcrumbList`, `Service`, `Article`).
  - Triển khai `Breadcrumbs.tsx` thanh điều hướng chuẩn ngữ nghĩa HTML5.
  - Cập nhật `public/sitemap.xml` và `public/robots.txt` chứa đầy đủ URL canonical P0/P1.
- [x] **Phase 4: Layout & Global Navigation**:
  - Nâng cấp `Header.tsx` với Megamenu danh mục dịch vụ trên desktop và Drawer menu tối ưu trên di động.
  - Tích hợp `MobileFloatingCTA.tsx` thanh công cụ liên hệ nhanh (Gọi, Zalo, Demo 0đ).
  - Nâng cấp `Footer.tsx` với 4 cột thông tin doanh nghiệp, dịch vụ, kiến thức, pháp lý và sitemap.
- [x] **Phase 5: Rebuild P0 Pages & Dynamic Route Renderers**:
  - Xây dựng `ServiceDetailPage.tsx` renderer chi tiết cho từng dịch vụ đáp ứng chuẩn Master Prompt #7.
  - Xây dựng `ArticleDetailPage.tsx` renderer bài viết chuyên sâu có mục lục, FAQ, widget dịch vụ liên quan.
  - Xây dựng `CaseStudyDetailPage.tsx` renderer câu chuyện dự án với số liệu đo lường thực tế.
  - Xây dựng `LegalPage.tsx` cho các trang chính sách và `HtmlSitemapPage.tsx` cho sơ đồ website.
  - Tối ưu `ServicesPage.tsx`, `PricingPage.tsx`, `ProjectsPage.tsx`, `KnowledgePage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`.
  - Mở rộng `App.tsx` xử lý dynamic routes toàn diện.
- [x] **Phase 6: Lead Conversion Engine & Analytics**:
  - Triển khai `src/analytics/tracker.ts` theo dõi sự kiện GA4/GTM và lưu giữ tham số UTM.
  - Triển khai `src/components/conversion/LeadModal.tsx` form tư vấn bắt ngữ cảnh trang và chuyển tiếp Zalo mượt mà.
- [x] **Phase 7: Verification & QA Testing**:
  - `npm run build` pass 100% không lỗi biên dịch (3.01s).
  - Tối ưu `manualChunks` tách vendor và icons chunks trong `vite.config.ts`.
  - Kiểm thử Chrome DevTools trên đa kích thước màn hình (Desktop 1920px/1440px, Tablet 768px, Mobile 390px/360px) xác nhận `hasOverflow: false` và console không lỗi.
  - Xuất báo cáo hoàn chỉnh `.agents/research/website-rebuild-report.md`.
