# Quy chuẩn Kiến trúc & Tối ưu Backend (ExportMate Backend Rules)

Tài liệu hướng dẫn và ràng buộc bắt buộc dành cho AI Agent khi phát triển và bảo trì hệ thống Backend (Cloudflare Workers + Hono + D1/Prisma + Express).

---

## 1. Nguyên lý Tối ưu hóa & Tiết kiệm Tài nguyên (Cost-Efficiency)

Hệ thống chạy trên nền tảng Cloudflare Serverless, hóa đơn tính theo Request và CPU execution time (mili-giây). Mọi dòng code phải tối giản tối đa tài nguyên CPU và bộ nhớ:

### A. Tái sử dụng kết nối Database (Prisma & D1)
* **Bắt buộc sử dụng Singleton:** Chỉ khởi tạo `PrismaClient` một lần duy nhất tại file dùng chung (ví dụ: [db.ts](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/server/db.ts)). Cấm khởi tạo lại Prisma Client bên trong các request handler hoặc API route.
* **Chống nghẽn kết nối (Connection Pool Exhaustion):** Trong môi trường Serverless (Workers), không kết nối TCP trực tiếp tới SQL truyền thống mà không qua pooling. Ưu tiên sử dụng Cloudflare Hyperdrive hoặc D1 Driver Adapter để gộp và tái sử dụng kết nối.
* **Tối ưu Local SQLite:** Khi chạy local với SQLite, bắt buộc cấu hình chế độ ghi **WAL** (Write-Ahead Logging) và đặt `busy_timeout` tối thiểu `10000ms` để tránh lỗi khóa cơ sở dữ liệu (`SQLITE_BUSY`).

### B. Tận dụng bộ nhớ đệm (Caching tại Edge)
* **KV Cache:** Sử dụng `AGENT_CACHE` (Cloudflare KV Namespace) để lưu trữ các dữ liệu ít biến động như cấu hình, danh sách quốc gia, thông tin cấu hình AI.
* **Quy trình truy vấn chuẩn:** Kiểm tra Cache (KV) trước -> Nếu không có, truy vấn Database (D1/Prisma) -> Lưu kết quả vào Cache với TTL phù hợp -> Trả về kết quả.

### C. Loại bỏ cầu nối Express-Hono rườm rà
* Hạn chế tối đa việc dùng helper chuyển đổi trung gian (Express-Hono bridge) ở local do việc này phải parse lại thủ công toàn bộ Object Request/Response gây tốn tài nguyên CPU và tăng garbage collection trong RAM. 
* Hướng đi lâu dài: Đồng nhất sang Hono cho cả Local (sử dụng `@hono/node-server`) và Production (Cloudflare Workers).

### D. Tránh đồng bộ tài nguyên / kết nối bên thứ ba trên mỗi Request
* Các tích hợp cần quét database cấu hình và kết nối lại tiến trình bên ngoài (như MCP Servers trong `McpClientManager`) không được chạy lại hàm đồng bộ (`syncAndConnect`) ở mỗi request đọc dữ liệu (ví dụ: `GET /tools`).
* **Quy chuẩn:** Phải sử dụng cơ chế lưu trạng thái đã đồng bộ (`isSynced` flag) hoặc chỉ cho phép đồng bộ lại khi khởi động hệ thống hoặc khi có hành động ghi cụ thể (chỉnh sửa cấu hình với tham số `force = true` trên các route POST/PUT/DELETE).

### E. Tránh truy vấn cơ sở dữ liệu trên Middleware xác thực (resolveUserContext)
* **Quy chuẩn:** Không gọi `prisma.user.findUnique` trên mọi request để kiểm tra sự tồn tại của người dùng. Phải sử dụng bộ đệm bộ nhớ cache (`verifiedUsersCache` Set) trong `server/shared.ts` để lưu trữ các ID người dùng đã được xác thực, bỏ qua việc truy vấn DB ở các request tiếp theo của cùng một phiên.

---

## 2. Truyền thừa Code, Type và Schemas (Type-Safe & RPC)

Để tránh lỗi không đồng bộ giữa Frontend và Backend, toàn bộ hệ thống phải được liên kết chặt chẽ qua Type-Safety:

### A. Sử dụng Hono RPC (Remote Procedure Call)
* Tránh gọi API bằng các chuỗi URL thủ công (hardcode string) ở frontend.
* **Quy chuẩn:** Xuất kiểu dữ liệu của API Router từ Backend và import nó ở Frontend để khởi tạo Hono Client (`hc`).
  ```typescript
  // Tại workers/app.ts hoặc router.ts
  const apiRouter = new Hono().get('/projects', ...);
  export type AppType = typeof apiRouter;
  
  // Tại frontend
  import { hc } from 'hono/client';
  import type { AppType } from 'backend/app';
  const client = hc<AppType>('/');
  ```
* Bất kỳ thay đổi nào về Endpoint hoặc Response Type của Backend sẽ lập tức báo lỗi đỏ tại Frontend ngay khi code.

### B. Đồng nhất Schema Validation (Zod)
* Dùng chung schema Zod giữa frontend (để validate form bằng `react-hook-form`) và backend (để validate body/query bằng middleware).
* Không viết lại các schema kiểm tra tính hợp lệ của dữ liệu ở hai nơi độc lập.

---

## 3. Quy trình Rà soát Backend (Pre-flight Checklist)

Trước khi xác nhận hoàn thành bất kỳ task Backend nào, Agent phải đảm bảo:
1. [ ] Không có file Prisma Client nào bị import và khởi tạo cục bộ ngoài [db.ts](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/server/db.ts).
2. [ ] Các truy vấn nặng hoặc lặp lại đã được xem xét áp dụng Cache (KV Namespace hoặc Memory Cache).
3. [ ] Các file route API mới được đăng ký đúng trong router chính của ứng dụng.
4. [ ] Chạy thành công `npm run build` ở backend để đảm bảo không lỗi type.

---

## 4. Định hướng Thiết kế Tự động hóa (Tối giản & Tránh Lạm dụng AI)

Để đảm bảo hệ thống hoạt động ổn định, chính xác 100% và tiết kiệm tối đa chi phí API LLM, hệ thống chuyển dịch hoàn toàn từ mô hình Agent tự trị (ReAct Loop qua Flue Server) sang mô hình **Đường ống Tuyến tính kết hợp Code thuần (Deterministic Pipeline + Single-Call AI)**:

### A. Quy trình xử lý tài liệu & Kiểm tra chéo (Cross-Audit)
* **Tuyệt đối tránh dùng Agentic ReAct Loop:** Cấm thiết lập các luồng bắt AI tự suy nghĩ từng bước, tự chọn công cụ và yêu cầu phê duyệt thông qua SSE streaming cho các tác vụ kiểm tra hồ sơ tài liệu.
* **Quy trình chuẩn hóa (Pipeline):**
  1. **AI Trích xuất (Single-Call):** Gọi API LLM đúng **1 lần duy nhất** để OCR và chuyển đổi hình ảnh/PDF tài liệu thô thành dữ liệu có cấu trúc JSON (Sử dụng tính năng Structured Output/Zod Schema).
  2. **Code thuần xử lý (Deterministic Engine):** Chuyển dữ liệu JSON vừa trích xuất qua bộ xử lý **[cross-audit-engine.ts](file:///d:/03-Startups-Products/01-Active-Startups/exportmate-new/server/cross-audit-engine.ts)** viết bằng TypeScript. Bộ xử lý này tự động chạy các thuật toán xác thực (so sánh trọng lượng, tính checksum container, khớp mã HS) mà không cần gọi thêm bất kỳ API AI nào.
  3. **Lưu & Trả kết quả:** Ghi các cảnh báo sai lệch dữ liệu vào database và hiển thị trực tiếp lên giao diện Dashboard cho người dùng trong thời gian thực.

### B. Phạm vi giới hạn sử dụng AI
* **Chỉ sử dụng AI trong 2 trường hợp:**
  1. Trích xuất thông tin thô từ tài liệu (OCR / Document Parser).
  2. Giải đáp thắc mắc, tư vấn kiến thức xuất khẩu cho người dùng tại khung Chat Q&A đơn giản (giao tiếp trực tiếp 1-1, không chạy loop).
* **Đóng băng hệ thống Flue Server (port 3000):** Loại bỏ việc phụ thuộc vào máy chủ workflow bên ngoài để chạy tác vụ kiểm tra chéo tài liệu.

---

## 5. Triết lý Tư duy Kiến trúc AI Extractor vs Deterministic Business Engine (Tốc độ & Độ chính xác)

* **Phân định Ranh giới Trách nhiệm (Separation of Concerns):**
  * **AI:** Chỉ làm 1 nhiệm vụ duy nhất là trích xuất dữ liệu không cấu trúc thành JSON (`{ documentType, validUntil, issuingAuthority, standardsCovered }`). AI **không** chịu trách nhiệm phán đoán luật pháp hay tính toán điểm số.
  * **Deterministic Business Engine:** Logic TypeScript/Backend tính toán 100% chính xác, chạy 0ms, không ảo giác, dễ viết unit test, và dễ mở rộng.
* **Hiệu quả Nén Thời gian Phát triển:**
  * Việc tách biệt này giúp loại bỏ hoàn toàn việc tốn thời gian tinh chỉnh prompt (prompt engineering) phức tạp.
  * Nén thời gian phát triển tính năng từ hàng tuần xuống còn vài phút, đồng thời tạo nên phần mềm chuẩn Enterprise độ tin cậy tuyệt đối cho doanh nghiệp xuất khẩu.
