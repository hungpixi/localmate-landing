# PHẦN 0 — PROMPT CHUNG BẮT BUỘC CHO TẤT CẢ SUBAGENT CODE

Bạn đang làm việc trong một đội phát triển phần mềm gồm nhiều AI subagent. Bạn không được tự ý thay đổi kiến trúc, database schema, API contract hoặc convention chung nếu chưa ghi rõ đề xuất và tác động.

> [!IMPORTANT]
> **MANDATORY**: Mọi code-subagent bắt buộc phải đọc, đối soát và tuân thủ nghiêm ngặt đặc tả phát triển **Vertical Slice MVP** tại [MVP_SLICE_SPEC.md](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/.agents/MVP_SLICE_SPEC.md) trước khi tiến hành viết code hay sửa đổi bất kỳ tệp tin nào. Đảm bảo code đúng phạm vi (scope 7 module) và đúng luồng sản phẩm cốt lõi duy nhất.

---

## 1. Mục Tiêu Hệ Thống

Xây dựng ExportMate thành một nền tảng quản lý mức độ sẵn sàng xuất khẩu cho doanh nghiệp Việt Nam, gồm:
*   Dashboard tổng quan.
*   Quản lý doanh nghiệp.
*   Supplier Page song ngữ.
*   Quản lý sản phẩm.
*   Readiness Assessment.
*   Lộ trình hành động 7 ngày và 30 ngày.
*   Quản lý tài liệu, chứng nhận.
*   Buyer và RFQ.
*   Task, notification và audit log.
*   AI hỗ trợ chuẩn hóa dữ liệu.
*   Backend API.
*   PostgreSQL database (hoặc SQLite D1 cục bộ).
*   Cloudflare deployment và storage.

---

## 2. Stack Công Nghệ Mặc Định

*   **Frontend**: Next.js, React, TypeScript.
*   **Styling**: Tailwind CSS.
*   **Component system**: shadcn/ui hoặc component nội bộ tương thích.
*   **Forms**: React Hook Form và Zod.
*   **State/data fetching**: TanStack Query.
*   **Backend**: Next.js API hoặc Hono trên Cloudflare Workers.
*   **Database**: D1 Database (SQLite serverless) / PostgreSQL.
*   **ORM**: Prisma hoặc Drizzle.
*   **Authentication**: Supabase Auth hoặc D1 Auth hệ thống hiện có.
*   **File storage**: Cloudflare R2.
*   **Cache và key-value**: Cloudflare KV.
*   **Background workflow**: Cloudflare Queues / Workflows.
*   **Validation**: Zod.
*   **Testing**: Vitest, Playwright.
*   **Deployment**: Cloudflare Workers hoặc Cloudflare Pages.

---

## 3. Quy Tắc Làm Việc Chung

1.  **Đọc trước khi sửa**: Luôn đọc kỹ tệp và các module liên quan trước khi sửa đổi.
2.  **Tránh trùng lặp**: Không tạo lại component hoặc hàm tiện ích đã tồn tại.
3.  **Tôn trọng stack**: Không tự ý thay đổi thư viện cốt lõi.
4.  **Tối giản sửa đổi**: Không sửa các file ngoài phạm vi phân quyền nghiệp vụ.
5.  **Khai báo trước khi code**:
    *   Phạm vi phụ trách.
    *   Các file dự kiến sửa.
    *   Dependencies liên quan.
    *   Contract cần sử dụng.
6.  **Đặc tả API**: Mọi API endpoint phải mô tả rõ request/response schema, authentication & permission.
7.  **Dữ liệu thật**: Tuyệt đối không hardcode dữ liệu giả vào các flow chính thức của app.
8.  **Xử lý trạng thái**: Luôn có UI cho trạng thái Loading, Empty, Error, Success và Access Denied.
9.  **Kiểm thử**: Đảm bảo chạy typecheck, linter, unit test trước khi bàn giao.

---

## 4. Mẫu Báo Cáo Bàn Giao Bắt Buộc

Khi hoàn tất tác vụ, agent bắt buộc phải trả về báo cáo theo định dạng:
```markdown
### Báo cáo bàn giao
* Nhiệm vụ đã hoàn thành:
* File đã tạo:
* File đã sửa:
* API hoặc schema đã sử dụng:
* Migration đã tạo:
* Test đã chạy:
* Kết quả build:
* Vấn đề còn lại:
* Việc agent tiếp theo cần làm:
* Commit đề xuất:
```
*Lưu ý: Không tự nhận nhiệm vụ của agent khác trừ khi đó là blocker trực tiếp.*
