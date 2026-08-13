# Quy Chuẩn Catalogue 40 Dịch Vụ SSOT & Admin Pricing CMS Cho LocalMate.vn

**Ngày cập nhật**: 13/08/2026

## 1. Triết Lý Định Vị Sản Phẩm (Product Strategy & Position)
- **LocalMate** là **"Đội digital gọn nhẹ cho doanh nghiệp nhỏ"** (Lean Digital Team for SMEs).
- **Phân khúc**: Đánh mạnh vào phân khúc dưới agency truyền thống với quy trình lean (giá linh hoạt từ 99k sửa lỗi nhỏ, 490k landing mini đến 3.9m+ phần mềm micro software).
- **Phân biệt gói**:
  - SEO Setup 299k ≠ SEO Campaign dài hạn.
  - Tracking Pack 390k (GA4, GTM, Meta Pixel, Conversion).
  - Digital Care #40: Care Mini 290k/tháng, Care Business 590k/tháng, Care Growth 990k/tháng, Digital Partner 1.49m/tháng.

## 2. Cấu Trúc Catalogue 40 Dịch Vụ (8 Nhóm Kỹ Thuật)
1. **Website & Landing Page** (01 - 08)
2. **Website Fix & Technical** (09 - 15)
3. **Google, SEO, GEO & Local** (16 - 22)
4. **Analytics, Tracking & Ads Infrastructure** (23 - 27)
5. **Ads & Conversion (CRO)** (28 - 31)
6. **CRM, Booking & Automation** (32 - 36)
7. **AI & Custom Software** (37 - 39)
8. **Recurring Digital Operations** (Dịch vụ #40)

## 3. 5 Nhóm Mục Tiêu Khách Hàng (WIIFM - What's In It For Me)
Không show 40 món tràn ngập trên Trang chủ. Phân loại theo 5 câu hỏi mục tiêu người dùng:
1. **Bắt đầu kinh doanh online** (Từ 490.000đ)
2. **Có thêm khách hàng** (Từ 299.000đ)
3. **Biết khách đến từ đâu** (Từ 99.000đ)
4. **Đỡ phải làm thủ công** (Từ 299.000đ)
5. **Vận hành lâu dài** (Từ 290.000đ/tháng)

## 4. Admin Pricing CMS Architecture
- **Mã nguồn**: `src/pages/AdminPricingPage.tsx` tại route `/admin/pricing`.
- **Lưu trữ**: `src/services/pricingStorage.ts` đọc/ghi từ LocalStorage, đồng bộ `window.CustomEvent` tức thời với trang chủ & trang bảng giá, có nút "Khôi phục Bảng giá SSOT Gốc" an toàn.
