# NHIỆM VỤ THIẾT KẾ & ĐỒNG BỘ DESIGN SYSTEM: CLEAN EXPORT SAAS

---

## 1. TRIẾT LÝ VÀ CHỦ ĐẠO (DESIGN SYSTEM PHILOSOPHY)
- **Tập trung Light Mode First**: Chế độ sáng (Light mode) là mặc định cho toàn bộ ứng dụng ExportMate.
- **Tinh thần thương hiệu**: Sạch, chuyên nghiệp, sáng, công nghệ, nông nghiệp / xuất khẩu, thân thiện với doanh nghiệp SME.
- **Loại bỏ Sidebar Xanh Đen ở Light Mode**: Sidebar ở chế độ sáng phải dùng nền trắng / trắng-xanh lá rất nhẹ (subtle green-tinted white gradient), viền phải tinh tế `#e3eae1`, active menu dùng green-tint surface `rgba(150, 193, 86, 0.18)` với icon và chữ `#1f2a21` rõ nét.
- **Dark Mode**: Chỉ chuyển sang xanh đen / deep dark green (`#0d1511`, `#16211a`) khi người dùng bật chế độ tối.

---

## 2. BỘ THẺ MÀU CHÍNH (BRAND & NEUTRAL PALETTES)

### Brand Palette (Green Logo `#96c156`)
```css
--brand-50:  #f6faef;
--brand-100: #edf5df;
--brand-200: #dcebbf;
--brand-300: #c7dd98;
--brand-400: #afd06f;
--brand-500: #96c156;   /* màu brand chính */
--brand-600: #7faa42;
--brand-700: #648835;
--brand-800: #4b6529;
--brand-900: #34471e;
```

### Secondary Emerald Green (`#24a87f`)
```css
--emerald-50:  #eefbf7;
--emerald-100: #d8f5ec;
--emerald-200: #b4ead8;
--emerald-300: #83d8bb;
--emerald-400: #4fc39b;
--emerald-500: #24a87f;   /* màu xanh lá đậm logo */
--emerald-600: #17896a;
--emerald-700: #106d56;
--emerald-800: #0c5745;
--emerald-900: #094538;
```

### Neutral Palette (UI Sáng Ấm / Xanh Nhẹ)
```css
--neutral-0:   #ffffff;
--neutral-25:  #fcfdfb;
--neutral-50:  #f8faf7;
--neutral-100: #f2f5f1;
--neutral-200: #e5ebe3;
--neutral-300: #d4dbd2;
--neutral-400: #a4afa6;
--neutral-500: #738076;
--neutral-600: #556257;
--neutral-700: #39453b;
--neutral-800: #253126;
--neutral-900: #182119;
```

---

## 3. SEMANTIC TOKENS

```css
:root {
  --bg-page: #ffffff;
  --bg-page-alt: #f8faf7;
  --bg-surface: #ffffff;
  --bg-surface-hover: #f6faef;
  --bg-subtle: #f2f7ec;
  --bg-muted: #eef3ea;

  --text-primary: #1f2a21;
  --text-secondary: #4c5a4f;
  --text-muted: #738076;
  --text-inverse: #ffffff;

  --border-default: #e3eae1;
  --border-strong: #ced8ca;
  --border-brand: #c7dd98;

  --brand-primary: #96c156;
  --brand-primary-hover: #7faa42;
  --brand-primary-active: #648835;

  --brand-secondary: #24a87f;
  --brand-secondary-hover: #17896a;

  --success: #1f9d67;
  --warning: #d4931c;
  --danger: #dc5b5b;
  --info: #2f8cff;

  --shadow-xs: 0 1px 2px rgba(24, 33, 25, 0.04);
  --shadow-sm: 0 4px 12px rgba(24, 33, 25, 0.06);
  --shadow-md: 0 8px 24px rgba(24, 33, 25, 0.08);

  --gradient-page: linear-gradient(180deg, #ffffff 0%, #fbfdf8 55%, #f4f9ee 100%);
  --gradient-sidebar-light: linear-gradient(180deg, #ffffff 0%, #fbfdf8 100%);
  --gradient-brand-soft: linear-gradient(135deg, rgba(150, 193, 86, 0.14) 0%, rgba(36, 168, 127, 0.08) 100%);
}
```

---

## 4. QUY TRÌNH THỰC THI (SINGLE SOURCE OF TRUTH)
1. **Tokens Level**: Cập nhật `src/design-system/styles/tokens.css` và `@theme` trong `src/index.css`.
2. **Layout & Shell**: Refactor `AppSidebar.tsx`, `AppHeader.tsx`, `AppLayout.tsx`.
3. **UI Components**: Cập nhật primitives (`Button.tsx`, `Badge.tsx`, `SectionCard.tsx`, `Card.tsx`, v.v.).
4. **Verifications**: Typecheck (`npm run typecheck`), Build (`npm run build`), Git Commit (Rule 14).
