# LocalMate Active Context & SSOT Timeline

## 1. Project & Corporate Info
- **Tên doanh nghiệp chính thức**: **CÔNG TY TNHH LOCALMATE**
- **Mã số thuế**: **4001337934**
- **Địa chỉ trụ sở / Thuế**: 03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng, Việt Nam
- **Hotline / Zalo**: 0834.422.439
- **Email chính thức**: **contact@localmate.vn**
- **Huy hiệu Bộ Công Thương**: File logo chuẩn `public/logo-da-thong-bao-bct.png`
- **Tech stack**: React 18 + TypeScript + Vite + Vanilla CSS Custom Tokens + Lucide Icons.

---

## 2. Recent Accomplishments & Mobile QA Verification

### A. Tối Ưu Mobile Hero & Floating Sticky Action Bar:
- **Hero Headline**: Sử dụng `text-wrap: balance` và `clamp(1.85rem, 5.5vw, 3.25rem)` giúp tiêu đề chia đều thành 3 dòng chuẩn chỉnh trên mọi màn hình di động (320px, 360px, 366px, 375px, 390px, 430px), xóa bỏ hoàn toàn hiện tượng rớt chữ mồ côi ("hàng.", "Google").
- **Eyebrow Badge**: Rút gọn thành badge 1 dòng nhỏ gọn, căn giữa thanh lịch.
- **Hero CTAs**: Nút chính và phụ đồng bộ chiều cao 48px, full width trên mobile với phân cấp rõ ràng (Nút xanh nổi bật + Nút trắng viền nhạt).
- **Khối Trust 4 Cam kết**: Chuyển thành lưới 2x2 co giãn linh hoạt, chống tràn viền (`hasOverflow: false`) và không bị cắt cụt chữ.
- **Mobile Floating Action Bar**: Thiết kế lại theo cấu trúc phân cấp rõ ràng: 2 nút phụ gọn (`📞 Gọi` + `💬 Zalo`) + 1 nút chính kích thước lớn (`✨ Web demo 0đ`), đảm bảo khoảng cách bấm touch target >= 44px và hỗ trợ `safe-area-inset-bottom`.

### B. Tối Ưu Footer & Bảng Giá:
- 4 cột Footer thẳng hàng, cân đối, xóa logo đỉnh, xóa các dòng thừa và chuẩn hóa email `contact@localmate.vn`.
- Bảng giá đưa toàn bộ gói "Khuyên dùng" lên đầu và đổi đơn vị thành `Trọn gói`.
