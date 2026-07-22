# Quy chuẩn Design System & Kích thước Landing Page (Landing Page Design System & Compact Scale)

Tài liệu quy định chuẩn UI/UX, Typography, Spacing và Color Palette cho các trang Landing Page và Banner trên ExportMate.

---

## 1. Nguyên tắc cốt lõi (Core Principles)

1. **Compact & Clean (Gọn gàng & Đúng tỷ lệ B2B)**: 
   - Tránh các khối Banner/Card bị cồng kềnh, chiếm trọn màn hình không cần thiết.
   - Không lạm dụng padding quá lớn (`p-8`, `p-10`, `py-20`) gây loãng thông tin và tạo cảm giác "thừa thãi".
2. **Tuân thủ Design System Tokens (Không hardcode tự phát)**:
   - Dùng nhất quán bảng màu thương hiệu ExportMate (Navy `#0B1F33`, Export Teal `#00A889`, Neutral Gray `#667582`/`#17212B`).
   - Tuyệt đối không dùng glassmorphism, không tạo các khối màu ngẫu nhiên không có trong hệ thống.
3. **Phân cấp thị giác rõ ràng (Visual Hierarchy)**:
   - Giữ tiêu đề phần (H2) vừa phải, tiêu đề thẻ (H3) rõ ràng, thẻ nén thông tin xúc tích.

---

## 2. Quy chuẩn Typography Scale

| Loại nội dung | Class Tailwind chuẩn | Ghi chú |
|---|---|---|
| **Page Main Title (Hero H1)** | `text-2xl sm:text-4xl font-extrabold` | Tối đa cho Hero banner chính |
| **Section Title (H2)** | `text-xl sm:text-2xl font-bold` | Tránh lạm dụng `text-4xl` cho section nhỏ |
| **Card Title (H3)** | `text-base sm:text-lg font-bold` | Tránh dùng `text-2xl`/`text-3xl` trong card |
| **Subtitle / Section Intro** | `text-xs sm:text-sm text-[#667582]` | Nội dung mô tả dưới tiêu đề |
| **Body Content / Paragraph** | `text-xs sm:text-sm text-[#17212B]` | Độ dài dòng vừa phải |
| **Badge / Tag / Meta** | `text-[11px] font-bold uppercase` | Thẻ tag nhỏ gọn |

---

## 3. Quy chuẩn Spacing & Padding Scale

| Thành phần | Class Tailwind chuẩn | Cấm sử dụng |
|---|---|---|
| **Section Vertical Padding** | `py-8 sm:py-12 px-4 sm:px-6` | `py-16`, `py-20`, `py-24` |
| **Card Padding** | `p-4 sm:p-6` | `p-8`, `p-10` |
| **Card Radius** | `rounded-2xl` hoặc `rounded-xl` | `rounded-3xl` |
| **Container Max Width** | `max-w-6xl` hoặc `max-w-7xl` | Tránh tràn màn hình không kiểm soát |
| **Grid Gap** | `gap-4 sm:gap-6` | `gap-10`, `gap-12` |
| **Button Padding** | `px-4 py-2.5 rounded-lg text-xs` | `px-8 py-4 text-base` |

---

## 4. Quy chuẩn Bảng màu (Brand Palette)

- **Primary Dark Navy**: `#0B1F33` (Sidebar, Heading chính, Card nền tối)
- **Export Teal Accent**: `#00A889` (CTA chính, Badge, Highlight)
- **Forest Dark Green (Variant)**: `#072E1C` (Dành cho khối cam kết/đặc biệt)
- **Background Light**: `#F8FAFC` / `#FAFBF7`
- **Text Primary**: `#17212B`
- **Text Muted**: `#667582`
- **Border Light**: `#E2E8F0` / `#D6E4D3`

---

## 5. Quy trình Kiểm tra trước khi Merge (Pre-commit Checklist)

- [ ] Section/Card padding có nằm trong khoảng `p-4` đến `p-6` không?
- [ ] Tiêu đề card H3 có bị vượt quá `text-lg` không?
- [ ] Nền tối có chữ sáng (`text-white`), Nền sáng có chữ tối (`text-[#17212B]`) không?
- [ ] Đã kế thừa các UI Primitives (`LandingSection`, `LandingCard`, `LandingBadge`, `LandingButton`, `LandingInfoBox`) từ `LandingPrimitives` chưa?
- [ ] Đã chạy `npm run typecheck` & `npm run build` thành công chưa?

---

## 6. Quy tắc Kế thừa UI Primitive (Component Inheritance Pattern)

Tất cả các section, card, badge, button trên Landing Page **BẮT BUỘC** phải kế thừa từ bộ Primitives trung tâm tại [src/components/shared/landing-theme/LandingPrimitives.tsx](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/src/components/shared/landing-theme/LandingPrimitives.tsx) (hoặc xuất qua [src/design-system/index.ts](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/src/design-system/index.ts)):

1. **`LandingSection`**: Single Source of Truth cho Section wrapper, lề dọc `py-8 sm:py-12` và max-width container `max-w-6xl`.
2. **`LandingSectionHeader`**: Single Source of Truth cho tiêu đề H2, badge và đoạn giới thiệu section.
3. **`LandingCard`**: Single Source of Truth cho thẻ thông tin, padding `p-5 sm:p-6`, viền bo `rounded-2xl`, shadow và variant màu (`white`, `dark`, `darkForest`, `muted`).
4. **`LandingBadge`**: Single Source of Truth cho nhãn tag/meta (`brand`, `light`, `dark`, `outline`).
5. **`LandingButton`**: Single Source of Truth cho nút bấm CTA (`teal`, `navy`, `light`, `outline`, `whiteOverlay`).
6. **`LandingInfoBox`**: Single Source of Truth cho ô trích dẫn / thông số thông tin nổi bật.

**Lợi ích**: Khi thay đổi padding, màu sắc, hover hay kích thước chữ ở bộ Primitives trung tâm, **TOÀN BỘ** các trang/section landing page kế thừa sẽ tự động cập nhật đồng bộ 100% mà không cần sửa rải rác từng file.
