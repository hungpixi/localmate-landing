# LocalMate Active Context & SSOT Timeline

## 1. Project Info
- **Tên dự án**: LocalMate.vn — Website, Google Maps, Quảng cáo & Marketing cho Doanh nghiệp nhỏ.
- **Tech stack**: React 18 + TypeScript + Vite + Vanilla CSS Custom Tokens + Lucide Icons.
- **Brand Identity**: Deep Emerald Green `#0d7647`, Accent Green `#16a34a`, Dark Navy `#083B4C`, Light Theme `#fafbfa`, Nền sáng chữ tối, TUYỆT ĐỐI không glassmorphism.
- **Single Source of Truth (SSOT)**: 
  - Toàn bộ Dịch vụ (`src/data/servicesData.ts`)
  - Bài viết Hướng dẫn Kiến thức (`src/data/articlesData.ts`)
  - Dự án Case Studies thực tế (`src/data/caseStudiesData.ts`)
  - Bảng giá 40 dịch vụ (`src/data/servicesCatalog.ts`)
  - Nội dung Landing & Packages (`src/data/landingContent.ts`)
  - Kiểm soát thông điệp & Claim Governance (`src/data/claims.ts`)

---

## 2. Recent Accomplishments & Copy/UI Refinements

### A. Rewrite Copy & Redesign 4 Homepage Sections:
1. **Section Gói Website 490k**:
   - Chuyển thành value-first layout: Bán kết quả trước, giá sau.
   - Eyebrow: `WEBSITE 1 TRANG CHO CỬA HÀNG NHỎ`
   - Heading: `Có ngay một website để gửi khách xem và liên hệ`
   - 4 benefits dạng 2x2 grid + nút `Xem thử website 490K` & link text `Hỏi nhanh qua Zalo →`.
2. **Section Thực Trạng & Dark Card (Thấu hiểu từ LocalMate)**:
   - Heading: `Làm tốt nhưng khách tìm trên Google lại không thấy bạn?`
   - Dark Card: 2 cột gọn gàng, giảm height, bỏ hẳn các từ ngữ trừu tượng ("hệ thống", "tỉ lệ chuyển đổi").
   - 4 Pain Cards: Đánh số `01` - `04` kèm CTA link trực tiếp (`→ Xem gợi ý bước đầu`, `→ Xem gói bài viết từ 990k`, `→ Giá chốt trước khi làm`, `→ Đưa tiệm lên Google Maps`).
3. **Section Lộ Trình (Roadmap)**:
   - Heading: `Không cần làm tất cả cùng lúc`
   - Bỏ hoàn toàn panel to và ảnh con đường chiếm diện tích.
   - 3 bước tinh gọn: BƯỚC 1 (Làm rõ thông tin), BƯỚC 2 (Để khách tìm thấy bạn), BƯỚC 3 (Tăng thêm khách hàng).
4. **Section Form Demo Website Mẫu**:
   - Heading: `Xem thử website của cửa hàng bạn`
   - Bỏ số thứ tự `1. 2. 3. 4.` thủ tục, chuẩn hóa chiều rộng `max-width: 780px`, input height `48px-52px`.
   - Selector phong cách 2x2: `Hiện đại & rõ ràng`, `Sang trọng`, `Ấm áp & gần gũi`, `Tối giản`.
   - CTA: `Xem website mẫu miễn phí` + Trust microcopy: `Không cần số điện thoại · Không cần thanh toán`.

### B. Fix Tràn Viền / Bỏ Minh Họa / Fix Rớt Chữ:
- Đã xóa bỏ mockup bài đăng Facebook lộn xộn bên trái gói 990k, chuyển thành layout chuẩn sang trọng đồng bộ với gói 490k.
- Đã sửa lỗi rớt chữ `Chọn gói` thành 2 dòng trên các thẻ giá dài bằng cách thêm `white-space: nowrap` và `flex-shrink: 0` trên nút bấm.
- Đã thay thế các tag kỹ thuật thô (`#05 [WEB-MULTIPAGE]`) bằng danh mục rõ nghĩa (`WEBSITE & LANDING PAGE`).
- Build kiểm thử `npm run build` thành công 100% trong 2.81s.
