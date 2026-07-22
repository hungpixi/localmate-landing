# Giao Thức Tự Học Antigravity (Antigravity Self-Learning Protocol)

Chào mừng các Codex Agents! Dự án **ExportMate** tích hợp chính thức **Giao Thức Tự Học Antigravity (Antigravity Self-Learning Protocol)** làm nền tảng quản lý và đồng bộ tri thức dài hạn. Triết lý của giao thức này là **Markdown-Native Local Memory** (Sử dụng hệ thống tệp tin Markdown cục bộ kết hợp Git) để đảm bảo tốc độ truy xuất cực nhanh (<10ms), tính minh bạch tuyệt đối, và khả năng tự động học hỏi từ các sai lầm/thành công qua từng phiên chat mà không tốn token bloat hay phụ thuộc vào Cloud API/Vector DB bên ngoài.

---

## 🏗️ 7 Mô Hình Học Tập Cốt Lõi (7 Self-Learning Models)

Mọi tri thức tự học được phân loại và cấu trúc hóa theo 7 mô hình sau:

### 1. TIL (Today I Learned - Bài Học Hôm Nay)
*   **Mục đích**: Ghi lại ngay lập tức các giải pháp kỹ thuật, mẹo nhỏ hoặc thủ thuật dòng lệnh vừa được phát hiện sau khi hoàn thành một tác vụ.
*   **Điều kiện trigger**: Vừa giải quyết xong một vấn đề phiêu lưu, vượt qua rào cản kỹ thuật hoặc tối ưu thành công một lệnh (VD: Cách dùng `npx.cmd` trên Windows thay vì `npx`).
*   **Quy chuẩn lưu trữ**: Thêm trực tiếp vào `TIL Changelog` trong tệp cấu hình skill tương ứng hoặc ghi nhận vào hệ tri thức.

### 2. ADR (Architecture Decision Records - Nhật Ký Quyết Định Kiến Trúc)
*   **Mục đích**: Ghi lại lịch sử các quyết định kỹ thuật lớn về kiến trúc (VD: Thay thế thư viện, lựa chọn SQLite cục bộ, thiết kế dữ liệu Data-Driven) kèm lý do vì sao chọn và các phương án thay thế bị loại bỏ.
*   **Mục tiêu**: Ngăn chặn hiện tượng **Tech Flip-Flop** (Agent ở phiên sau tự ý thay đổi kiến trúc của Agent phiên trước do thiếu bối cảnh lịch sử).

### 3. Operational Runbooks (Kịch Bản Vận Hành Chuẩn)
*   **Mục đích**: Cung cấp quy trình từng bước, chi tiết, mang tính chất xác định (deterministic) để thiết lập, chạy thử, compile hoặc triển khai dự án (VD: Cách deploy monorepo lên Cloudflare Workers bằng Wrangler, cách xử lý Vite interactive prompt).
*   **Mục tiêu**: Đảm bảo Agent ở các phiên tiếp theo chạy lệnh luôn thành công ngay từ lần đầu tiên.

### 4. RCA (Root Cause Analysis - Phân Tích Lỗi & Sửa Lỗi Hệ Hệ Thống)
*   **Mục đích**: Khi xảy ra bug nghiêm trọng hoặc lỗi lặp lại (VD: Vỡ layout drawer z-index, mất scroll nền, PowerShell Syntax Error), Agent thực hiện phân tích 5-Why tìm nguyên nhân gốc rễ và đưa ra giải pháp sửa lỗi triệt để.
*   **Mục tiêu**: Từ giải pháp đã fix, tự động suy ra các **Anti-Pattern Rules** để bổ sung vào nguyên tắc phát triển chung, đảm bảo lỗi đó không bao giờ lặp lại.

### 5. Performance Optimization Records (Nhật Ký Tối Ưu Hiệu Năng)
*   **Mục đích**: Ghi lại các nút thắt cổ chai về hiệu suất (VD: Connection pool kết nối database từ xa bị chậm 10-12s, rò rỉ RAM do Chrome zombie process) kèm số liệu so sánh trực quan Trước và Sau khi tối ưu.

### 6. Code Smell Catalog (Danh Mục "Mùi" Code & Technical Debt)
*   **Mục đích**: Nhận diện sớm các cấu trúc code thiếu lành mạnh hoặc cản trở khả năng mở rộng (VD: Lỗi early return phá hỏng thứ tự React Hooks, Recharts tooltip formatter sai kiểu dữ liệu) để chủ động refactor trước khi nó phát sinh bug.

### 7. Effective Prompt Patterns (Mẫu Prompt Hiệu Quả)
*   **Mục đích**: Đóng gói các chỉ thị, cấu trúc prompt hoặc kỹ thuật kích hoạt tư duy (meta-optimization) giúp AI sinh code chất lượng cao nhất, tối ưu token budget và tránh bị ảo giác dữ liệu (data hallucination).

### 8. Multi-Subagent Swarm & Phase Execution Pattern (Mẫu Triển Khai Đa Subagent Theo Phase)
*   **Mục đích**: Kích hoạt chế độ thực thi đa subagent (10+ subagents) chia làm các Phase độc lập đối với các Prompt siêu dài hoặc đợt kiểm định toàn diện codebase. Chi tiết quy chuẩn nằm tại tệp [.agents/rules/multi-subagent-execution-workflow.md](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/.agents/rules/multi-subagent-execution-workflow.md).

---

## 🧭 Quy Trình Debug & Kiểm Thử Tự Học (3-Round Self-Review)

Để đảm bảo code viết ra luôn trong trạng thái production-ready và không bị regression, mọi Agent phải áp dụng quy trình kiểm thử 3 vòng trước khi bàn giao:

```
┌──────────────────────────────────────────────────────────┐
│ Round 1: Syntax + Logic Tĩnh (Static Review)              │
│ ➜ Đọc code tĩnh, soát lỗi cú pháp, types mismatch.        │
│ ➜ Kiểm tra đệ quy vô hạn, thiếu guard conditions.        │
└────────────────────────────┬─────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│ Round 2: Runtime + Edge Cases (Biên & Lỗi)               │
│ ➜ Chạy thử code, giả lập các case cực đoan.              │
│ ➜ Check mảng rỗng, dữ liệu null, spread = 0, size cực nhỏ│
└────────────────────────────┬─────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────┐
│ Round 3: Integration + Platform (Môi Trường Thật)        │
│ ➜ Tương tác thực tế bằng Chrome DevTools / Browser.     │
│ ➜ Kiểm tra visual layout z-index, Windows paths, API port.│
└──────────────────────────────────────────────────────────┘
```

---

## 🔄 Cơ Chế Đồng Bộ & Làm Sạch Bộ Nhớ ("Dream Consolidator")

Để ngăn chặn hiện tượng phình to bối cảnh (Context Window Bloat) do lưu trữ quá nhiều tệp tin rác:
1.  **Chủ động nén bộ nhớ**: Khi số lượng entry TIL hoặc RCA vượt quá giới hạn hoặc định kỳ, Agent sẽ chạy quy trình **Orient -> Gather -> Consolidate -> Prune** (Định hướng -> Thu thập -> Hợp nhất -> Cắt tỉa) để cô đọng các tệp tin tri thức rời rạc thành các quy tắc (Rules) dòng lệnh và visual standards có độ nén cực cao.
2.  **Verify trước khi ghi**: Không ghi các lỗi chính tả (typo) hay thiếu dấu chấm phẩy đơn thuần vào tri thức hệ thống. Chỉ lưu trữ các bài học mang tính logic, kiến trúc, và quy trình có thể tái sử dụng.

---

## 🛠️ Hướng Dẫn Áp Dụng Cho Agent ExportMate Hiện Tại
*   Khi sửa UI vỡ hoặc modal stacking (z-index): Cập nhật trực tiếp kinh nghiệm và checklist kiểm tra vào [.agents/skills/exportmate-ux-patterns/SKILL.md](file:///d:/code/exportmate/.agents/skills/exportmate-ux-patterns/SKILL.md).
*   Khi phát hiện lỗi môi trường hoặc Windows: Cập nhật chỉ dẫn cụ thể vào phần `Chỉ Dẫn Chạy Terminal Trên Windows` của [KNOWLEDGE_BASE.md](file:///d:/code/exportmate/.agents/KNOWLEDGE_BASE.md).
*   Trước khi bàn giao task: LUÔN chạy lệnh build (`npm run build`) để kiểm tra lỗi biên dịch tĩnh (Round 1).
