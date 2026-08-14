# AGENTS.md — LocalMate Workspace System & Operational Rules

Tài liệu này là **Single Source of Truth (SSOT)** định hướng mọi hành vi và quy trình làm việc của AI Agent trong workspace **LocalMate**.

---

## 1. Môi Trường & Thực Thi Lệnh (Execution & Shell)
- **Hệ điều hành**: Windows 11 — Shell mặc định: **PowerShell**.
- **Quy tắc CLI First**: Tự động chạy lệnh CLI để giải quyết vấn đề (build, test, lint, format, git, file audit...). Không yêu cầu người dùng gõ lệnh thủ công nếu agent có quyền thực thi.
- **Tránh lệnh lỗi trên Windows**:
  - Dùng cú pháp tương thích PowerShell (tránh các lệnh Linux bash đặc thù như `export`, `cat <<EOF`, `grep` trực tiếp nếu chưa alias).
  - Không bao giờ dùng `cd` riêng lẻ; chạy lệnh trực tiếp với đường dẫn hoặc qua working directory.

---

## 2. Phong Cách Giao Tiếp & Giải Quyết Vấn Đề
- **Ngôn ngữ**: 100% Tiếng Việt.
- **Tiêu chí**: Ngắn gọn, đơn giản, thực tế, đi thẳng vào giải pháp, không làm phức tạp hóa vấn đề (KISS principle).
- **Tư duy sản phẩm**: Mọi tính năng, giao diện làm ra phải đặt câu hỏi: *Người dùng xài có dễ dàng không? Có hữu ích và giải quyết triệt để vấn đề so với cách làm cũ không?*

---

## 3. Tiêu Chuẩn Giao Diện (Design System & UI/UX)
- **Theme chủ đạo**: **Light Mode** sáng sủa, sạch sẽ, chuyên nghiệp.
  - **Màu thương hiệu**: Primary Green (`#0d7647`), Accent Green (`#16a34a` / `#22c55e`).
  - **Nền & Bề mặt**: Nền sáng (`#fbfcfb`), Card Surface (`#ffffff`), Viền nhạt (`#e5e7eb` / `#dcfce7`).
- **Độ tương phản cao**: Nền sáng thì chữ đậm (`#111827`, `#17212b`, `#4b5563`), nền đậm thì chữ sáng (`#ffffff`).
- **TUYỆT ĐỐI KHÔNG dùng Glassmorphism** (không backdrop-blur mờ đục, không viền phát sáng khó đọc).
- **Data-Driven UI**: Tách biệt rõ ràng Data (mock/state/props) và UI Components. Giao diện là tầng hiển thị dữ liệu có cấu trúc.

---

## 4. Quản Lý Tiến Độ & Memory Bank (SSOT Timeline)
- **Check & Duy trì Memory Bank**: Thư mục `.agents/memorybank/` (`activeContext.md`, `bugMemory.md`, v.v.).
- **Quy trình sau mỗi Feature / Bugfix**:
  - Cập nhật bài học, lỗi logic, quy tắc mới vào `.agents/memorybank/bugMemory.md` hoặc `.agents/rules/`.
  - Giữ timeline và trạng thái rõ ràng để phiên làm việc sau nắm bắt tức thì.
- **User Environment**: Tham khảo tài nguyên/API keys từ `D:\code\user.env` nếu cần mà không hỏi thừa.

---

## 5. Quy Trình Git & Micro-Commits (15-Minute Rule)
- **Micro-Commits**: Không code liên tục quá 15 phút mà không tạo commit cục bộ.
- **Verified-First**: Chỉ commit khi mã nguồn ở trạng thái hoạt động (build pass, không syntax error).
- **Format Commit**: Chuẩn Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`), ghi rõ *What* và *Why*.

---

## 6. Kiểm Thử & Nghiệm Thu Logic (Definition of Done)
- **Vượt qua bài test là chưa đủ**: Phải audit toàn diện input/output thực tế xem có phù hợp với nghiệp vụ kinh doanh (Business Domain) không, dữ liệu có thực sự đem lại giá trị (Business Value) cho người dùng cuối không.
