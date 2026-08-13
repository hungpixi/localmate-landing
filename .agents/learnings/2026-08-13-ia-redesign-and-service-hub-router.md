# Bài Học & Quy Chuẩn Tái Cấu Trúc IA & Navigation Hub Cho LocalMate.vn

**Ngày thực hiện**: 13/08/2026

## 1. Bối cảnh & Mục tiêu
- **Trước**: LocalMate bị hiểu hẹp là dịch vụ landing page giá rẻ 2.9 triệu. Ngôn ngữ quá "khái niệm" (Người Đồng Hành Số, hiện diện số) làm người dùng không ngay lập tức hiểu dịch vụ có thể mua.
- **Sau**: Tái định vị rõ ràng thành: **"Website, SEO, Marketing & Phần mềm cho doanh nghiệp nhỏ"**. Giữ "Người Đồng Hành Số" làm tagline/brand philosophy.

## 2. Kiến trúc Giao diện & Cấu trúc SEO 10 Section Homepage
1. **Hero**: Headline chuẩn vị trí, subheadline hành động, thanh pills dịch vụ 3 giây (Website, SEO, Maps, Ads, Nội dung, Phần mềm).
2. **Problem Mapper**: 6 Card "Bạn đang cần làm gì?" dẫn khách hàng từ nỗi đau thực tế sang dịch vụ tương ứng.
3. **Service Hub**: 6 Nhóm dịch vụ lớn trọn gói.
4. **Industry Solution Hub**: Hub giải pháp theo ngành nghề (F&B, Mầm non, Xây dựng, Spa, Cửa hàng, SME).
5. **Case Studies**: Portfolio dự án thực tế (XÈO, Sao Sáng, Tam Giang, Smentor, ExportMate, Sugar Polish).
6. **Pricing Matrix**: Bảng giá khởi điểm minh bạch cho tất cả dịch vụ.
7. **Free Audit & Consultation**: Form kiểm tra hiện diện số 0đ.
8. **Trust Commitments**: 6 cam kết cốt lõi.
9. **Process**: Quy trình 5 bước.
10. **Knowledge Hub**: Thư viện bài viết chuẩn SEO.

## 3. Kiến trúc Client SPA Router
- Sử dụng lightweight `RouterProvider` & `useRouter` hook tương thích HTML5 History API (`pushState`/`popstate`).
- Đảm bảo clean URLs (`/dich-vu/*`, `/giai-phap/*`, `/du-an`, `/bang-gia`, `/kien-thuc`, `/gioi-thieu`, `/lien-he`) hoạt động mượt mà, không phụ thuộc thư viện ngoài nặng nề.

## 4. Quy chuẩn Giao diện (Design Principles)
- **Light mode**: Nền sáng (`#ffffff`, `#f8fbfa`), chữ tối màu (`--color-navy`, `--color-text`), tương phản cao.
- **TUYỆT ĐỐI KHÔNG DÙNG GLASSMORPHISM**: Không dùng hiệu ứng kính mờ che mắt, giữ UI phẳng, viền rõ nét (`1px solid var(--color-border)`), bóng đổ mềm nhẹ (`--shadow-sm`, `--shadow-md`).
- **Data-Driven**: Mọi thông tin ngành nghề, dịch vụ và bảng giá đều lấy từ data layer `src/data/landingContent.ts`.
