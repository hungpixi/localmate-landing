# Learning: Đảm bảo tính đồng nhất Design System B2B Light Mode (Chống Hardcode Nền Đen)

## 1. Vấn đề phát hiện
Một số thành phần giao diện Dashboard (như Header/Stepper của `WebsiteCreationWizard.tsx`) bị hardcode các màu nền tối đậm ngẫu nhiên (`bg-[#182119]`, `bg-[#121b16]`).
Điều này làm phá vỡ nhịp thị giác (flow) khi nằm trong môi trường Dashboard Light Mode chuẩn B2B của ExportMate.

## 2. Quy chuẩn sửa đổi & Thống nhất
- **Brand Palette Chuẩn:**
  - Primary Navy: `#0B1F33` (Cho text chính, nút bấm chính, sidebar)
  - Export Teal: `#00A889` (Cho badge, CTA, viền điểm nhấn)
  - Background Dashboard: `#F5F8FA`
  - Page/Card Header Background: `bg-white border-b border-slate-200 shadow-xs`
  - Stepper Bar Background: `bg-slate-50/90 border-t border-slate-200`
- **Quy tắc:**
  - Không hardcode các background đen ngẫu nhiên (`bg-[#182119]`, `bg-[#121b16]`, `bg-black`) vào giữa thân trang Dashboard Light Mode.
  - Mọi thẻ/header trong trang Dashboard phải tuân thủ nền trắng (`bg-white`) hoặc xám sáng nhạt (`bg-slate-50`), với các accent màu Navy `#0B1F33` hoặc Teal `#00A889`.

## 3. Các file đã cập nhật
- `src/pages/SupplierSite/WebsiteCreationWizard.tsx`: Chuyển header card và thanh tiến trình stepper từ nền đen sang B2B Light Theme chuẩn ExportMate.
