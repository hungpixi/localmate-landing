# Bug Memory & Lessons Learned

## 1. Bài học về Quản lý Agent & Prompting
- **Không nhồi nhét rules dự án khác**: Tránh copy-paste các rules backend B2B (Prisma, Tanstack, Flue) vào dự án landing page đơn giản vì sẽ làm Agent bị ngộ độc context và kẹt vòng lặp.
- **Tránh Spawn quá nhiều Subagents trên 1 Frontend**: 10 subagents cùng sửa 1 repo frontend gây xung đột git và file lock. Nên dùng 1 Agent chính giải quyết tuần tự theo module hoặc tối đa 2 subagent chạy 2 trang độc lập.
- **Rule 14 Verified-First**: Sau mỗi cụm module hoặc 15 phút, chạy `npm run build` và commit local ngay.
- **Bài học Mobile Responsive & CSS Grid Tràn Màn Hình (Viewport Overflow)**:
  - Lỗi: Dùng `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` hoặc `minmax(340px, 1fr)` kết hợp `Container` có padding cố định khiến tổng width vượt quá 360px-375px trên mobile, làm toàn bộ trang bị lệch trái/phải và chữ bị cắt mép.
  - Giải pháp: Chuẩn hóa ở tầng Layout & Core Primitives (`Container`, `SectionHeader`, `Card`, `globals.css`). Luôn dùng `minmax(min(100%, 280px), 1fr)` thay cho số pixel cố định, dùng fluid clamp spacing (`--space-container-px`, `--space-card-p`) và bổ sung universal anti-overflow `overflow-x: hidden` trên `html, body, #root`.

## 2. Bài học về Tránh Over-engineering khi Xử lý UI & Hình ảnh
- **Lỗi tư duy máy móc**: Khi người dùng đưa ảnh mẫu layout, Agent tự ý viết script Python (PIL/OpenCV) để quét pixel và crop ảnh trung gian, làm mất 10-15 phút không cần thiết và dễ gây treo terminal.
- **Giải pháp SSOT**:
  - Giải quyết bố cục và vị trí góc 100% bằng **CSS** (`position`, `flex`, `grid`, `object-fit`, `overflow: hidden`).
  - Dùng trực tiếp tài nguyên PNG/SVG có sẵn trong `public/assets/` hoặc component sẵn có.
  - Tuyệt đối không tự sinh ra tool/script đồ họa phụ trừ khi người dùng có yêu cầu chuyên biệt.
