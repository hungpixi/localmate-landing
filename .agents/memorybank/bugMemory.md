# Bug Memory & Lessons Learned

## 1. Bài học về Quản lý Agent & Prompting
- **Không nhồi nhét rules dự án khác**: Tránh copy-paste các rules backend B2B (Prisma, Tanstack, Flue) vào dự án landing page đơn giản vì sẽ làm Agent bị ngộ độc context và kẹt vòng lặp.
- **Tránh Spawn quá nhiều Subagents trên 1 Frontend**: 10 subagents cùng sửa 1 repo frontend gây xung đột git và file lock. Nên dùng 1 Agent chính giải quyết tuần tự theo module hoặc tối đa 2 subagent chạy 2 trang độc lập.
- **Rule 14 Verified-First**: Sau mỗi cụm module hoặc 15 phút, chạy `npm run build` và commit local ngay.
- **Bài học Mobile Responsive & CSS Grid Tràn Màn Hình (Viewport Overflow)**:
  - Lỗi: Dùng `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` hoặc `minmax(340px, 1fr)` kết hợp `Container` có padding cố định khiến tổng width vượt quá 360px-375px trên mobile, làm toàn bộ trang bị lệch trái/phải và chữ bị cắt mép.
  - Giải pháp: Chuẩn hóa ở tầng Layout & Core Primitives (`Container`, `SectionHeader`, `Card`, `globals.css`). Luôn dùng `minmax(min(100%, 280px), 1fr)` thay cho số pixel cố định, dùng fluid clamp spacing (`--space-container-px`, `--space-card-p`) và bổ sung universal anti-overflow `overflow-x: hidden` trên `html, body, #root`.

## 2. Bài học về Kiến trúc SEO & Content Hub
- **Dynamic Per-Route SEO**: Trong các SPA/Vite apps, nếu không dùng SSR/SSG phức tạp, hãy tạo component `SEOHead` cập nhật ngay lập tức `document.title`, `meta[name="description"]`, canonical `link[rel="canonical"]` và inject JSON-LD script động vào `<head>`.
- **Phân tách rõ ràng Content SSOT**: Tách dữ liệu bài viết, dịch vụ và case studies vào `src/data/` giúp code UI components chỉ đóng vai trò Presentation Layer, không hardcode văn bản nhiều nơi dẫn đến sai lệch thông điệp hay giá tiền.
- **Type Guard cho quan hệ dữ liệu liên quan (Related Items)**: Khi map danh sách slugs (`relatedServiceSlugs`, `relatedArticleSlugs`) sang entities, luôn sử dụng TypeScript User-Defined Type Guard `filter((item): item is EntityType => Boolean(item))` để tránh lỗi `TS18048: item is possibly undefined`.
- **Tối ưu Manual Chunks trong Vite**: Cấu hình `manualChunks` trong `vite.config.ts` để tách riêng `vendor: ['react', 'react-dom']` và `icons: ['lucide-react']`, giúp giảm kích thước bundle chính từ >500kB xuống ~360kB và tăng tốc độ tải trang trên mạng di động.
