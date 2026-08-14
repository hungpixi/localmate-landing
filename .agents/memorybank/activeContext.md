# LocalMate Active Context & SSOT Timeline

## 1. Project Info
- **Tên dự án**: LocalMate — Giải pháp số toàn diện cho Doanh nghiệp & Cửa hàng địa phương.
- **Tech stack**: React 18 + TypeScript + Vite + Vanilla CSS / Tailwind tokens + Lucide Icons.
- **Brand Identity**: Primary Green `#0d7647`, Accent Green `#16a34a`, Light Theme `#fbfcfb`, Nền sáng chữ tối, không glassmorphism.

## 2. SSOT Task Progress
- [x] **Dọn dẹp `.agents/`**: Xóa toàn bộ file rác và rules ExportMate không liên quan.
- [x] **Chuẩn bị Assets & Mockups**: 10 mockups tại `docs/mockups/` và 8 illustrations/icons 3D tại `public/assets/`.
- [x] **Section 1 (Hero & Situations)**: Hero 2 cột + 3 huy hiệu cam kết + 3 thẻ tình trạng cửa hàng (`hero-store-phone.png`).
- [x] **Section 2 (Roadmap 3 giai đoạn)**: Giai đoạn Khởi tạo, Xây dựng, Phát triển với 3D icons + banner lộ trình (`roadmap-flag-path.png`).
- [x] **Section 3 (Bảng giá Starter & Nội dung)**: Gói Khởi tạo 2.9M (`pricing-laptop-analytics.png`) + Gói nội dung 990k.
- [x] **Section 4 (Quy trình 5 bước)**: Timeline 5 bước minh bạch, tinh gọn (`ProcessSection`).
- [x] **Section 5 (Trust & Thông tin pháp nhân)**: CÔNG TY TNHH LOCALMATE, MST, Địa chỉ, hotline, Zalo + Banner trợ giúp (`support-envelope-message.png`, `location-pin-plant.png`).
- [x] **Core Mobile Responsive Systemization (Layout & Primitives Level)**:
  - Chuẩn hóa `tokens.css` với fluid clamp typography & fluid clamp spacing (`--space-container-px`, `--space-section-py`, `--space-card-p`, `--space-gap`).
  - Thêm các class responsive grid SSOT (`.grid-responsive-auto`, `.grid-responsive-1-2`, `.grid-responsive-1-2-3`, `.grid-responsive-1-2-4`) trong `globals.css`.
  - Cập nhật `Container.tsx`, `SectionHeader.tsx`, `Card.tsx`, `Button.tsx`, `Section.tsx` với `box-sizing: border-box`, `min-width: 0` và anti-overflow rules.
  - Sửa triệt để các `minmax(320px, 1fr)` / `minmax(340px, 1fr)` thành `repeat(auto-fit, minmax(min(100%, 280px), 1fr))` trên toàn bộ các section.
  - Tối ưu audit form và hero CTAs tự động co giãn theo cột trên mobile < 540px.
- [x] **Section 6 (Client Requirements & Gói 490k - Corner Illustration Card)**:
  - Triển khai section "Bạn cần gửi gì cho LocalMate?" với layout ảnh 3D Mascot & Cửa hàng đặt gọn gàng ở 1 góc thẻ bên phải (`mascot-store-corner.png`).
  - Checklist 6 thông tin cơ bản với green checkmarks & dotted leader lines.
  - Khối Cấu trúc trang 3 bước trực quan (01 Giới thiệu -> 02 Sản phẩm & Lợi ích -> 03 Liên hệ).
  - Ưu đãi Gói Landing Page 490.000đ trọn gói kèm các badge tính năng & nút CTA.
- [x] **Build & Verification**: `npm run build` pass 100% không lỗi (2.61s).


