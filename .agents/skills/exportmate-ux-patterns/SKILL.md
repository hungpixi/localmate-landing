---
name: exportmate-ux-patterns
description: "Cách xử lý các UX bug thường gặp trong UI/UX của ExportMate, đặc biệt là chuyển đổi danh sách dài thành Agent Chat Interface."
---

# Kỹ năng: Tối ưu UX/UI cho ứng dụng AI (ExportMate)

Kỹ năng này hướng dẫn cách xử lý các UX bug phổ biến, đặc biệt là khi thiết kế giao diện cho các ứng dụng AI B2B.

## 1. Vấn đề: Danh sách công việc (Checklist) quá dài
Khi ứng dụng AI tự động sinh ra một lượng lớn công việc (10-30 items), việc hiển thị chúng dưới dạng danh sách tĩnh sẽ dẫn đến:
- Trải nghiệm người dùng kém (Scroll vô tận).
- Rối mắt, mất tập trung vào các hành động chính.
- Thiếu tính tương tác "Agentic" (Trông như một app To-do list truyền thống chứ không phải AI).

## 2. Giải pháp: Biến đổi thành "Agent Command Center"
Thay vì hiển thị list, hãy chuyển đổi UI thành một trung tâm điều khiển AI:

### Bước 1: Thu gọn danh sách thành Progress Bar
- Gom toàn bộ các công việc thành một thanh tiến độ (Ví dụ: "2/15 Bước (15%)").
- Cung cấp nút "Xem toàn bộ Checklist" để mở Offcanvas hoặc Modal nếu người dùng thực sự muốn xem chi tiết.
- Giữ cho thẻ UI nhỏ gọn và có không gian cố định.

### Bước 2: Thêm Khung Chat Giao Việc (Agent Interface)
- Sử dụng diện tích được giải phóng để thiết kế một khung Chat giống ChatGPT.
- Hiển thị tin nhắn định hướng từ AI (Ví dụ: "Em đã nhận được hóa đơn, anh muốn em tạo Packing List không?").
- Cung cấp các Quick Action Buttons (Chips) để người dùng thực thi ngay lệnh mà không cần gõ (VD: ⚡ Tạo Packing List).

## 3. Quy tắc Layout Grid trong TailAdmin
- Khi xếp các Widget cạnh nhau (ví dụ: Upload và Agent Chat), hãy đảm bảo chúng có cùng chiều cao (dùng `h-full flex flex-col` cho container và `flex-1` cho nội dung bên trong để tự động kéo giãn).
- Khi có các bảng dữ liệu (Table), phải đảm bảo chúng được nằm ở vị trí rộng rãi (full-width) hoặc thêm `whitespace-nowrap` vào các cột để chữ không bị bóp méo khi màn hình hẹp.

## 4. Vấn đề: Trình bày chi phí (Bản đồ chi phí) quá thô
- Việc hiển thị ngay một con số tổng quát lớn cùng nút 'Thanh toán' tạo cảm giác bán hàng ép buộc (aggressive sales).
- Giải pháp: Áp dụng 'Data-Driven Roadmap'. Hiển thị minh bạch từng khoản mục: Đối tác thực hiện, Hồ sơ cần nộp, Thời gian dự kiến và Vai trò cụ thể của AI. Điều này làm tăng 'Perceived Value' (giá trị cảm nhận) trước khi khách hàng ra quyết định thanh toán.

## 5. Thể hiện năng lực AI & Tính toán chi phí
- Khi AI có thể tự động hóa một tác vụ, UI phải có badge/chip hiển thị rõ: "TIẾT KIỆM X GIỜ" để quy đổi giá trị công nghệ ra thời gian/tiền bạc cụ thể.
- Đừng hiển thị tất cả các tính năng dưới dạng phí "Pay Now" bằng tiền mặt. Áp dụng cơ chế giá theo mô hình:
  + Mặc định: Nằm trong gói **Subscription** (để tạo cảm giác All-in-one).
  + Tuỳ chọn 2: Tính bằng **Credit** (để tạo tâm lý nạp sẵn, chi tiêu dễ chịu hơn tiền mặt).
  + Tuỳ chọn 3: **Out of pocket** (Chỉ những khoản tiền bắt buộc phải trả cho bên thứ 3 như Lab, Hải quan).

## 6. Phong cách thiết kế "Glassy Pastel Gradient" (Subtle B2B)
- Người dùng đặc biệt thích phong cách giao diện sáng sủa, cao cấp (Premium) kết hợp Gradient mờ ảo. TUY NHIÊN, không được lạm dụng màu sắc sặc sỡ.
- Màu sắc chủ đạo: Xanh lá nhạt (Brand color, `#C6D870` hoặc tương tự) làm màu nhấn chính (Primary). Màu nền chính luôn là Trắng (`bg-white`) hoặc màu xám nhạt (`bg-gray-50`) để tạo độ tương phản (Contrast) cực tốt cho chữ đen (`text-black`).
- Fuchsia/Hồng nhạt: CHỈ được dùng làm màu cực kỳ nhẹ nhàng (accent) để tạo độ mượt cho Gradient. TUYỆT ĐỐI KHÔNG dùng màu hồng làm màu nền chính hoặc dùng quá đậm khiến giao diện bị sến.
- Cách triển khai Gradient nền an toàn:
  + Dùng class Tailwind: `bg-gradient-to-br from-brand/5 via-white to-fuchsia-50/30`.
  + Giao diện tối (Dark mode): `dark:from-brand-900/10 dark:via-boxdark dark:to-fuchsia-900/10`.
- QUY TẮC TƯƠNG PHẢN (UX Contrast): "Nền trắng chữ đen". Luôn đảm bảo chữ hiển thị rõ ràng trên nền (VD: Không dùng chữ màu trắng trên nền màu nhạt/sáng).
- Phong cách này giúp ứng dụng B2B thoát khỏi sự cứng nhắc truyền thống, mang lại cảm giác hiện đại, thân thiện mà không đánh mất sự chuyên nghiệp.

## 7. Vấn đề: Tràn và Vỡ Layout (Layout Shifting) khi mở rộng nội dung
- Modal giúp: Giữ nguyên cấu trúc Layout chính, dễ dàng cuộn (scroll) độc lập, tập trung sự chú ý của người dùng vào checklist và dễ dàng Đóng (Escape) mà không mất context của màn hình chính.

## 8. Bản Mô Phỏng Tài Liệu Trực Quan (Interactive Virtual Document Sheet Pattern)
Thay vì hiển thị dữ liệu OCR dưới dạng một danh sách trường đơn điệu, kém cuốn hút:
- Chuyển đổi khung xem tệp tin thành một bản mô phỏng A4 độ chi tiết cao (Virtual Document Sheet).
- Bố trí các trường thông tin bóc tách nằm đúng vào các vị trí truyền thống của một chứng từ thật (Shipper ở góc trên trái, Consignee góc trên phải, bảng hàng hóa ở vị trí trung tâm, container niêm phong ở chân trang).
- Đính kèm mã QR động và các chi tiết thẩm mỹ (con dấu "AI VERIFIED", thanh trạng thái tiến độ thẩm định) để tăng tính thực tế.

## 9. Tương Tác Đồng Bộ Hai Chiều Trực Quan (Smooth Scroll & Focus Glow Synchronization)
Khi giao diện được chia làm 2 pane (Khung xem tài liệu bên trái và Biểu mẫu OCR bên phải):
- Sử dụng các thuộc tính `id` động có dạng `virtual-doc-field-${fieldName}` gắn trực tiếp vào các khối thông tin của tài liệu ảo.
- Khi người dùng rê chuột (`onMouseEnter`) hoặc tập trung con trỏ (`onFocus`) vào các ô nhập liệu của form OCR bên phải, ta thực hiện:
  1. Tự động xác định phần tử tương ứng bên tài liệu ảo: `const el = window.document.getElementById('virtual-doc-field-' + fieldName)`.
  2. Kích hoạt cuộn mượt tự động: `el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })`.
  3. Áp dụng hiệu ứng phát sáng CSS mượt mà (`duration-200`) qua một lớp glow HSL (`border-[#556B2F] bg-[#556B2F]/5 scale-[1.01]`).
- Hiệu ứng này mô phỏng hành động "tìm và chiếu sáng" thực tế vô cùng đắt giá, nâng tầm UX lên chuẩn mực premium.

## 10. Trợ Lý Soạn Thảo Thực Chất (Data-Driven Chat Document Creator Pattern)
Tránh việc thiết kế chatbot AI chỉ biết trả lời bằng những đoạn text tĩnh vô nghĩa:
- Hướng dẫn System Prompt của AI Agent luôn sinh kèm một cấu trúc tệp tin OCR hoàn chỉnh (`generatedDocument` gồm `title`, `type`, `ocrData`, `auditResults`) nếu người dùng ra lệnh tạo tài liệu (VD: *"⚡ Tạo Packing List"*).
- Máy chủ (server) tự động bắt lấy trường này và gọi Prisma chèn trực tiếp chứng từ mới vào SQLite DB.
- Phát đi sự kiện custom (`document-created` và `storage`) của trình duyệt để các widget danh sách gần đó tự động làm mới và hiển thị tài liệu mới tạo ngay lập tức mà không cần F5.

## 11. Báo Cáo HTML-in-Word (DOCX) Xuất Bản Chuyên Nghiệp
Thay vì xuất báo cáo lỗi dưới dạng markdown thô sơ gây mất thiện cảm:
- Thiết lập hàm xuất bản in ấn bằng cách tạo chuỗi HTML hoàn chỉnh, định nghĩa đầy đủ stylesheet in ấn in-doc (Segoe UI, bảng biểu viền thanh mảnh, thẻ rủi ro HSL nổi bật, chữ ký chân trang).
- Đóng gói dữ liệu dưới dạng Blob `application/msword` with phần mở rộng `.doc` tương thích cao. Khi người dùng mở tệp bằng Microsoft Word, tài liệu sẽ hiển thị với định dạng hoàn mỹ, sẵn sàng để gửi đối tác hoặc in ấn.

## 12. Quy Tắc Chống Vỡ Chữ & Layout Bản Đồ (Cost-Map / Grid Anti-Wrapping Layout Pattern)
Khi thiết kế các thanh chỉ số (Overview Cards) có nội dung text dài (ví dụ: tên giai đoạn "Thiết lập pháp lý", chi phí "28.850.000 ₫"), tránh bóp nghẹt text trong các cột grid cứng hoặc ép grid chia quá nhiều cột trên màn hình laptop:
- **Nguyên lý chia vùng bằng Flexbox & Phân cách trực quan**: Thay vì gom metrics vào Grid cố định (dễ gây tràn chữ đè lên nhau khi chữ quá dài), hãy tách Overview thành 2 phân khu lớn:
  1. *Metrics Group (Bên trái)*: Sử dụng `flex flex-wrap items-center gap-x-8 lg:gap-x-12 gap-y-4 flex-1`. Mỗi ô metric tự lấy theo chiều rộng tự nhiên của text và được phân cách bởi các đường dọc mảnh (`hidden md:block h-8 w-px bg-stroke/50`) để tạo vẻ ngoài premium kiểu dashboard.
  2. *Action Group (Bên phải)*: Sử dụng `flex flex-wrap items-center gap-4 shrink-0`.
- **Tinh giản thông tin và Nút bấm**:
  - Gom các badge trạng thái rời rạc thành một thẻ trạng thái hợp nhất nhỏ gọn (`2 Sẵn sàng | 8 Đang khóa` chung một khung viền border-stroke).
  - Loại bỏ các nút bấm bổ trợ dư thừa (ví dụ: "Xem bước nên làm") để chỉ giữ lại đúng 1 nút hành động chính, nổi bật và có độ ưu tiên cao nhất (`🏭 Nhà Máy Chứng Từ`).
- **Quy tắc chống vỡ chữ (Text Wrap Protection)**:
  - Dùng `whitespace-nowrap` trên toàn bộ các label ngắn ("Giai đoạn hiện tại", "Tiến độ", "Chi phí") và values ngắn để ngăn trình duyệt tự động ngắt dòng xấu (tránh "GIAI ĐOẠN HIỆN / TẠI").
  - Đảm bảo dùng `break-words` hoặc `whitespace-normal` kết hợp với `max-w` cụ thể chỉ cho các trường văn bản mô tả dài.
- **Giao diện thẻ tinh giản (Collapsible Step Card Pattern)**:
  - *Chống lặp thông tin (Context-Aware Badges)*: Nếu người dùng đã lọc theo một giai đoạn cụ thể trên sidebar, hãy ẩn badge giai đoạn trong các thẻ công việc. Chỉ hiển thị badge giai đoạn dạng chip nhỏ khi người dùng đang ở chế độ xem "Tất cả giai đoạn" (`activePhase === 'all'`).
  - *Giảm thiểu chữ (Details Collapsing)*: Giữ cho giao diện mặc định của thẻ cực kỳ ngắn gọn và trực quan. Chỉ hiển thị 2 nhóm thông tin chính là: **Inputs cần có** và **Outputs tạo ra + CTA**.
  - Đóng gói toàn bộ các phần giải thích dài ("Vì sao cần bước này", "Kết quả & mở khóa", "Cơ quan liên quan", "AI Agent hỗ trợ") vào một hộp thu gọn (Collapse Block) và điều khiển hiển thị qua nút `▶ Xem chi tiết bước` để tối ưu diện tích và giảm tải nhận thức cho người dùng.

## 13. Quy Chuẩn Giao Diện Drawer / Modal Cao Cấp (Standard Drawer/Modal Overlay Pattern)
Để đảm bảo các layer Drawer/Modal không bị chồng lấn z-index, không bị cắt bởi topbar, không làm rò rỉ scroll của background page và không bị click nhầm đóng bất ngờ:
1. **Khóa scroll của Body (Background Scroll Lock)**: Khi Drawer/Modal mở, phải set `window.document.body.style.overflow = "hidden"` và khôi phục lại khi đóng (unmount) để background không bị cuộn.
2. **Cấu trúc 3 vùng Flexbox phân tách**: Drawer phải có chiều cao `h-dvh` (hoặc `h-screen` tương thích di động) và dùng `flex flex-col` chia thành 3 khu vực:
   - `Header (shrink-0)`: Chứa tiêu đề và nút đóng.
   - `Body (min-h-0 flex-1 overflow-y-auto)`: Cho phép scroll nội dung độc lập. Luôn thêm `min-h-0` để đảm bảo container co giãn chuẩn xác.
   - `Footer (shrink-0)`: Chứa các hành động chính, luôn cố định ở đáy, không bị cuộn che mất.
3. **Chống click lan truyền (Propagation Blocker)**: Thêm `onClick={(e) => e.stopPropagation()}` vào phần khung nội dung (drawer panel) để khi nhấp chuột vào bên trong drawer không làm kích hoạt sự kiện đóng của backdrop.
4. **Hỗ trợ đóng bằng phím ESC (Escape Key Dismissal)**: Bắt sự kiện `keydown` trên `window` để đóng Drawer/Modal tức thì khi người dùng nhấn phím Escape.
5. **Căn chuẩn z-index phân lớp**:
   - Sidebar/Topbar chính: `z-[40]`
   - Backdrop mờ (Overlay): `z-[99]`
   - Drawer/Modal nội dung: `z-[100]`

## 14. Quy Tắc Thực Thi Lệnh Terminal Trên Windows PowerShell (PowerShell Combined Commands Rule)
Khi chạy các lệnh trên hệ điều hành Windows sử dụng shell `powershell`:
- **Tránh sử dụng `&&` để nối lệnh**: Trình thông dịch PowerShell mặc định (phiên bản <= 5.1) không hỗ trợ toán tử `&&` làm phân tách dòng lệnh và sẽ gây ra lỗi cú pháp (`ParserError`).
- **Giải pháp đúng**: 
  - Chia nhỏ và chạy từng lệnh riêng biệt (Khuyến nghị).
  - Hoặc sử dụng dấu chấm phẩy `;` làm phân tách dòng lệnh thay cho `&&` (Ví dụ: `git add file.tsx ; git commit -m "msg"`).
