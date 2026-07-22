# KẾ HOẠCH KỸ THUẬT TRIỂN KHAI LANDING PAGE LOCALMATE

**Dự án:** LocalMate Landing Page (`localmate-new`)
**Ngày lập:** 22/07/2026

---

## 1. Kiến Trúc Kỹ Thuật Dự Án

* **Framework:** React 18 + Vite + TypeScript.
* **Styling:** CSS Variables + Custom Utility-First Styling (Vanilla CSS / Modular CSS).
  * Nền sáng chủ đạo (`#f8fbfa`), Surface trắng (`#ffffff`), Chữ xanh navy đậm (`#12323d`).
  * Tuyệt đối không dùng glassmorphism.
* **Icon:** Lucide React icons (`lucide-react`).
* **Font:** Google Fonts (`Be Vietnam Pro` weight 400, 500, 600, 700).
* **Asset Handling:**
  * Logo chính thức: `/logo.png`
  * Ảnh tư liệu sản phẩm & các mockup được lưu trong `public/` hoặc `src/assets/`.

---

## 2. Cấu Trúc Thư Mục (Directory Tree)

```txt
localmate-new/
├── docs/
│   ├── localmate-implementation-plan.md
│   └── localmate-qa-report.md
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── ResponsiveImage.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── PainPointsSection.tsx
│   │       ├── SolutionJourneySection.tsx
│   │       ├── BeforeAfterSection.tsx
│   │       ├── StarterPackageSection.tsx
│   │       ├── ProcessSection.tsx
│   │       ├── ContentPackageSection.tsx
│   │       ├── SpecializedServicesSection.tsx
│   │       ├── TrustSection.tsx
│   │       ├── DemoShowcaseSection.tsx
│   │       ├── FAQSection.tsx
│   │       └── FinalCTASection.tsx
│   ├── data/
│   │   └── landingContent.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 3. Design Tokens (Hệ Thống Thiết Kế)

```css
:root {
  --color-navy: #083b4c;
  --color-navy-deep: #052f3d;
  --color-teal: #0fa99a;
  --color-teal-dark: #087f75;
  --color-teal-soft: #ddf7f3;
  --color-orange: #ff8a00;
  --color-orange-dark: #e87500;
  --color-bg: #f8fbfa;
  --color-surface: #ffffff;
  --color-text: #12323d;
  --color-text-muted: #5f6b70;
  --color-border: #dce8e5;
  
  --font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  --shadow-sm: 0 2px 8px rgba(8, 59, 76, 0.05);
  --shadow-md: 0 4px 16px rgba(8, 59, 76, 0.08);
  --shadow-lg: 0 12px 32px rgba(8, 59, 76, 0.12);
}
```

---

## 4. Responsive Strategy

* Breakpoints chính: `360px`, `390px`, `768px`, `1024px`, `1280px`, `1440px`.
* Layout fluid với CSS Flexbox & Grid responsive.
* Card & Container luôn dùng `max-width` và padding linh hoạt, không gán cố định pixel width/height gây tràn ngang.

---

## 5. Kế Hoạch Theo Phase (Thực Thi Tuần Tự)

1. **Phase 0:** Codebase Setup & Plan Documentation (Đang hoàn tất).
2. **Phase 1:** Design System & UI Components Base.
3. **Phase 2:** Layout Header sticky + Hero Section với Mockup tương tác.
4. **Phase 3:** Pain Points Section + Solution Journey Timeline.
5. **Phase 4:** Before/After Comparison + Starter Package (Gói 2.900.000đ).
6. **Phase 5:** 5-Step Process + Content Package (Gói 990.000đ).
7. **Phase 6:** Specialized Services Grid + Trust Commitments + Accordion FAQ.
8. **Phase 7:** Industry Demo Showcase + Final CTA & Lead Capture Form.
9. **Phase 8:** Responsive audit, Accessibility validation, Lighthouse optimizations & QA Report.

---

## 6. Technical Risks & Mitigations

* **Rủi ro:** Scroll ngang trên mobile khi card chứa padding cứng.
  * *Khắc phục:* `box-sizing: border-box`, `max-width: 100%`, `overflow-x: hidden` ở body level.
* **Rủi ro:** Form submit giả khiến trải nghiệm không rõ ràng.
  * *Khắc phục:* Validate form đầy đủ client-side, có state loading, success/error feedback chuẩn.

---

## 7. Acceptance Criteria

* Chạy mượt trên Vite dev & build production không có lỗi TypeScript/lint.
* Điểm Lighthouse cao (Performance >= 85, Accessibility/SEO >= 90).
* Thông điệp xuyên suốt: *"Bàn giao rồi mới thanh toán"*, CTA *"Nhận web demo"*.
