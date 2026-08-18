# Bug Memory & Lessons Learned

## 1. Bài học về Quản lý Agent & Prompting
- **Không nhồi nhét rules dự án khác**: Tránh copy-paste các rules backend B2B (Prisma, Tanstack, Flue) vào dự án landing page đơn giản vì sẽ làm Agent bị ngộ độc context và kẹt vòng lặp.
- **Tránh Spawn quá nhiều Subagents trên 1 Frontend**: 10 subagents cùng sửa 1 repo frontend gây xung đột git và file lock. Nên dùng 1 Agent chính giải quyết tuần tự theo module hoặc tối đa 2 subagent chạy 2 trang độc lập.
- **Rule 14 Verified-First**: Sau mỗi cụm module hoặc 15 phút, chạy `npm run build` và commit local ngay.
- **Bài học Mobile Responsive & CSS Grid Tràn Màn Hình (Viewport Overflow)**:
  - Lỗi: Dùng `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` hoặc `minmax(340px, 1fr)` kết hợp `Container` có padding cố định khiến tổng width vượt quá 360px-375px trên mobile, làm toàn bộ trang bị lệch trái/phải và chữ bị cắt mép.
  - Giải pháp: Chuẩn hóa ở tầng Layout & Core Primitives (`Container`, `SectionHeader`, `Card`, `globals.css`). Luôn dùng `minmax(min(100%, 280px), 1fr)` thay cho số pixel cố định, dùng fluid clamp spacing (`--space-container-px`, `--space-card-p`) và bổ sung universal anti-overflow `overflow-x: hidden` trên `html, body, #root`.

## 2. Bài học về Kiến trúc SEO & Copywriting Ngôn Ngữ Khách Hàng (Customer-Centric)
- **Tư duy Khách hàng là trên hết (No Agency Jargon)**:
  - Chủ shop, bác sĩ nha khoa, chủ xưởng không mua "digital transformation", "funnel", "SLA", "content pillar". Họ mua cuộc gọi, tin nhắn, khách ghé quán và một website rõ ràng, uy tín.
  - Mọi từ ngữ kỹ thuật phải được dịch sang hành động đời thường: "Search Terms" -> "Khách đã tìm gì trên Google", "Local SEO / GBP" -> "Đưa tiệm lên Google Maps", "Landing Page" -> "Website 1 trang bán hàng".
- **Minh bạch giá & Loại bỏ cam kết ảo**:
  - Giá phải xuất hiện sớm (Website từ 490k, Google Maps từ 299k, Google Ads từ 390k, Viết bài từ 990k/tháng).
  - Nghiêm cấm cam kết ảo ("Top 1 Google", "Bảo hành trọn đời"). Thay bằng cam kết thực tế: "Nghiệm thu hài lòng rồi mới thanh toán", "Bàn giao 100% tài khoản chính chủ", "Có hỗ trợ kỹ thuật sau bàn giao".
- **Dynamic Per-Route SEO**: Trong các SPA/Vite apps, nếu không dùng SSR/SSG phức tạp, hãy tạo component `SEOHead` cập nhật ngay lập tức `document.title`, `meta[name="description"]`, canonical `link[rel="canonical"]` và inject JSON-LD script động vào `<head>`.
- **Type Guard cho quan hệ dữ liệu liên quan (Related Items)**: Khi map danh sách slugs (`relatedServiceSlugs`, `relatedArticleSlugs`) sang entities, luôn sử dụng TypeScript User-Defined Type Guard `filter((item): item is EntityType => Boolean(item))` để tránh lỗi `TS18048: item is possibly undefined`.

## 3. Bài học về Ads Launch, Chuyển Đổi & Kênh Liên Hệ
- **Không bao giờ dùng link Zalo trần (`https://zalo.me`)**: Link Zalo trần chỉ mở trang chủ hoặc trang tải app của Zalo, không mở hội thoại chat với doanh nghiệp. Luôn dùng định dạng chuẩn: `https://zalo.me/<SỐ_ĐIỆN_THOẠI>` (ví dụ: `https://zalo.me/0834422439`).
- **Tập trung hóa dịch vụ gửi Lead (`submitLead`)**: Tránh viết hàm fetch phân tán ở nhiều form (`LeadModal`, `ContactPage`, `Landing490kPage`, `FinalCTASection`). Gom tất cả qua 1 service duy nhất (`src/services/leadService.ts`) để tự động kèm UTM attribution, đồng bộ Google Sheets, và kích hoạt conversion event (`generate_lead`, `lead_created`) cho cả Google Ads và Meta Ads.
- **Không dùng `alert()` trong luồng đăng ký mua hàng/dịch vụ**: Dùng modal state, inline error messages hoặc toast notification để trải nghiệm trên mobile mượt mà, không bị chặn bởi pop-up native của trình duyệt.

