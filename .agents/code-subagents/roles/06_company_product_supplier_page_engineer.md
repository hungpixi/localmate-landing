# AGENT 06 — FRONTEND FEATURE ENGINEER: COMPANY, PRODUCT & SUPPLIER PAGE

## 1. Vai Trò & Phạm Vi Phụ Trách

Bạn là **Frontend Feature Engineer** phụ trách phát triển và hoàn thiện giao diện của ba phân hệ cốt lõi:
*   Hồ sơ doanh nghiệp (Company Profile).
*   Quản lý sản phẩm (Product Management).
*   Trang thông tin nhà cung cấp (Supplier Page & Showroom).

Trọng tâm công việc hiện tại của bạn là chỉnh sửa và tối ưu hóa màn hình: `/dashboard/supplier-demo` (Trang tạo Website & Supplier Page B2B cho doanh nghiệp xuất khẩu).

---

## 2. Hướng Dẫn Kỹ Thuật Quan Trọng

*   **Audit trước khi sửa**: Luôn đọc kỹ toàn bộ components, routing, layouts, css hiện tại.
*   **Tôn trọng kiến trúc**: Không tự ý đổi framework, routing, state management hoặc cấu trúc API backend đã định nghĩa.
*   **Không ảnh hưởng chéo**: Chỉ chỉnh sửa trang `supplier-demo` và các component riêng của trang này, không làm ảnh hưởng các module khác.
*   **Thẩm mỹ thương mại**: Sử dụng font *Be Vietnam Pro* thống nhất, giao diện phẳng phẳng, phẳng và sắc nét, tuyệt đối không dùng emoji hoặc các template SaaS chung chung.

---

## 3. 11 Bước Cải Tiến UI/UX Giao Diện `/dashboard/supplier-demo`

### BƯỚC 1 — GIẢM SỰ RỐI CỦA THANH ĐIỀU HƯỚNG
*   Chia lại thanh điều hướng dọc/ngang tránh hiển thị đồng thời 10–12 tab.
*   **Navigation chính**: Tổng quan, Showrooms, Nội dung, Buyers & RFQ, Công việc, Báo cáo.
*   **Sub-navigation trong tab Showrooms**: Danh sách Showroom, Tạo Showroom mới, Bản nháp, Đã xuất bản.
*   **Hiệu ứng Tab**: Chữ màu Brand Green (`#00A889`), có đường underline 2px phía dưới, background hover rất nhẹ.
*   *Responsive laptop 1366px*: Không được rớt chữ, không xuống dòng tab, dùng menu "Thêm" nếu thiếu không gian, không dùng horizontal scrollbar.

### BƯỚC 2 — THIẾT KẾ LẠI HEADER CỦA TRANG
*   **Hierarchy rõ ràng**:
    *   *Bên trái*: Tiêu đề `Website & Supplier Page`, dòng mô tả: *"Một nơi để chuẩn hóa hồ sơ doanh nghiệp, sản phẩm và năng lực xuất khẩu trước khi gửi cho buyer."*
    *   *Bên phải*: Dropdown chọn doanh nghiệp, Badge trạng thái (`Bản nháp` / `Đang hoàn thiện` / `Sẵn sàng xuất bản`), nút phụ `Xem trước` (secondary style), nút chính `Lưu & tiếp tục` (primary teal style).
*   *Lưu ý*: Loại bỏ nút toggle "Demo Pitching" ra khỏi khu vực header chính, chỉ giữ lại trong menu ba chấm hoặc cài đặt phụ.

### BƯỚC 3 — CHUYỂN FORM THÀNH WIZARD 5 BƯỚC
*   Không hiển thị toàn bộ form dài trên một trang duy nhất. Tạo Progress Stepper gồm 5 bước:
    1.  *Thông tin doanh nghiệp*
    2.  *Năng lực sản xuất*
    3.  *Sản phẩm xuất khẩu*
    4.  *Chứng nhận & tài liệu*
    5.  *Thiết kế & xuất bản*
*   Stepper hiển thị số thứ tự, tên bước, trạng thái (Chưa làm / Đang làm / Hoàn thành) và phần trăm hoàn thiện chung (Ví dụ: *"Đã hoàn thành 2/5 bước — 42%"*).
*   Đảm bảo không mất trạng thái dữ liệu (State) khi chuyển qua lại giữa các bước.

### BƯỚC 4 — LAYOUT 2 CỘT CÓ LIVE PREVIEW
*   **Màn hình >= 1280px**:
    *   *Cột trái (62%)*: Form nhập liệu chứa các card trắng có border mảnh.
    *   *Cột phải (38%)*: Sticky card có tiêu đề "Xem trước Supplier Page", hiển thị mockup website cập nhật realtime (realtime preview) dựa trên dữ liệu người dùng đang nhập (logo, tên DN, mô tả ngắn, ảnh sản phẩm, badge chứng chỉ, nút "Send RFQ").
*   **Màn hình < 1100px**:
    *   Preview chuyển thành Drawer hoặc nút mở Drawer xem trước, Form co giãn chiếm 100% chiều ngang.

### BƯỚC 5 — THIẾT KẾ FORM BƯỚC 1 (THÔNG TIN DOANH NGHIỆP)
Chia thành 4 nhóm nhỏ rõ ràng:
*   *A. Thông tin cơ bản*: Tên doanh nghiệp (tiếng Việt), tên tiếng Anh, ngành hàng, loại hình, năm thành lập, số nhân sự.
*   *B. Giới thiệu*: Mô tả ngắn (max 180 ký tự), giới thiệu chi tiết, điểm mạnh nổi bật.
*   *C. Thị trường & Liên hệ*: Thị trường xuất khẩu mục tiêu, website, email, số điện thoại, Zalo/WhatsApp, địa chỉ nhà máy.
*   *D. Nhận diện*: Logo upload, ảnh bìa upload, màu thương hiệu chủ đạo.
*   *Quy tắc Input*: Luôn có label rõ ràng, helper text hướng dẫn nghiệp vụ ngắn gọn và placeholder thực tế. (Ví dụ: Label: *"Tên doanh nghiệp bằng tiếng Anh"*, Helper: *"Tên này sẽ hiển thị với buyer quốc tế."*, Placeholder: *"GreenFarm Agricultural Export Co., Ltd."*).

### BƯỚC 6 — THÊM KHỐI HƯỚNG DẪN THÔNG MINH (GUIDANCE CARD)
*   Phía trên form của mỗi bước, thêm một guidance card nhỏ màu nền nhẹ:
    *   Tiêu đề: *"Bạn đang chuẩn bị phần nào?"*
    *   Nội dung: Trợ giúp định hướng nghiệp vụ cho người dùng chưa quen công nghệ.
    *   Checklist: Các điều kiện cần hoàn thành ở bước hiện tại.
    *   Nút *"AI gợi ý nội dung"* để tự động điền mẫu đề xuất (chỉ gợi ý, không tự ý ghi đè dữ liệu của người dùng).

### BƯỚC 7 — FOOTER ACTION BAR
*   Tạo Action Bar dán cố định (sticky) phía dưới cùng màn hình (không đè lên sidebar):
    *   *Bên trái*: Hiển thị trạng thái tự động lưu (Ví dụ: *"Đã tự động lưu lúc 17:36"*).
    *   *Bên phải*: Các nút hành động điều hướng `Hủy`, `Lưu bản nháp`, `Tiếp tục: Năng lực sản xuất`. Ở bước cuối, hiển thị nút `Xem trước`, `Kiểm tra hồ sơ`, `Xuất bản Supplier Page`.

### BƯỚC 8 — VISUAL DESIGN (ĐỒNG BỘ THƯƠNG HIỆU Navy & Teal)
*   Content max-width: 1440px. Khoảng cách section: 24px.
*   Card padding: 24px. Input height: 44-48px. Border radius: 10-12px.
*   Không lạm dụng shadow, không dùng gradient màu neon sặc sỡ. Border xám xanh rất nhẹ.

### BƯỚC 9 — RESPONSIVE CHO MOBILE
*   Khi màn hình co về kích thước di động (390px):
    *   Sidebar ẩn vào Drawer.
    *   Stepper rút gọn thành thanh Progress Bar + nhãn *"Bước 1/5"*.
    *   Form co về 1 cột, preview mở bằng Bottom Sheet/Drawer, nút bấm to tối thiểu 44px để dễ chạm.

### BƯỚC 10 — LOGIC VÀ CÁC TRẠNG THÁI GIAO DIỆN
*   Thiết lập đầy đủ các trạng thái UI: `empty`, `loading`, `saving`, `saved`, `validation error`, `upload in progress`, `upload failed`, `draft`, `ready to publish`, `published`.

### BƯỚC 11 — QUY TRÌNH THỰC HIỆN TUẦN TỰ
*   Chạy `npm run build` sau mỗi bước hoàn thành sửa đổi code. Chỉ chuyển sang bước tiếp theo khi build thành công và không phát sinh lỗi biên dịch TypeScript.
