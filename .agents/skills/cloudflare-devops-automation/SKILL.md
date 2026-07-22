---
name: cloudflare-devops-automation
description: Hướng dẫn tích hợp, kiểm tra và tự động triển khai (DevOps/CI-CD) ExportMate lên hệ sinh thái Cloudflare Serverless (Workers, D1, KV, R2) hỗ trợ Vibecoding tối đa.
---

# Cloudflare Serverless DevOps & Automated Deployment

Skill này định nghĩa toàn bộ quy trình cấu hình, chạy cục bộ, kiểm tra lỗi và deploy tự động ExportMate lên Cloudflare Serverless. Mọi Agent làm việc trên repo này phải tuân thủ nghiêm ngặt để tối ưu hóa quy trình Vibecoding.

---

## 🚀 1. Chuẩn Bị & Cấu Hình Môi Trường (Wrangler CLI)

Mọi cấu hình liên quan đến Cloudflare phải được đọc và ghi thông qua `wrangler.jsonc` (hoặc `wrangler.toml`). 

### Đọc cấu hình bảo mật từ file ENV
Trước khi thực hiện bất kỳ lệnh deploy nào, Agent phải tìm các biến môi trường sau từ file `D:\code\user.env` hoặc hệ thống:
*   `CLOUDFLARE_API_TOKEN`: Dùng để authenticate với Cloudflare.
*   `CLOUDFLARE_ACCOUNT_ID`: ID tài khoản Cloudflare đích.

Khi chạy lệnh wrangler, gán token vào môi trường chạy:
```powershell
# Ví dụ chạy trên PowerShell Windows:
$env:CLOUDFLARE_API_TOKEN="<token>"
$env:CLOUDFLARE_ACCOUNT_ID="<account_id>"
```

---

## 🗄️ 2. Quản Lý Database Serverless (Cloudflare D1)

ExportMate sử dụng **Cloudflare D1** làm Database chính thức thay thế cho PostgreSQL/SQLite local. Mọi schema thay đổi phải được quản lý qua migrations.

### Quy trình tạo và đồng bộ DB:
1.  **Tạo Database D1 (nếu chưa có):**
    ```bash
    npx wrangler d1 create exportmate-db
    ```
2.  **Liên kết D1 vào `wrangler.jsonc`:**
    ```json
    "d1_databases": [
      {
        "binding": "DB",
        "database_name": "exportmate-db",
        "database_id": "<database_id_nhan_duoc_khi_tieu_de_tren_chay>"
      }
    ]
    ```
3.  **Tạo file Migration:**
    Mọi thay đổi SQL schema được lưu trong thư mục `migrations/`.
4.  **Chạy Migration Local (khi dev):**
    ```bash
    npx wrangler d1 migrations apply exportmate-db --local
    ```
5.  **Chạy Migration Production (khi deploy):**
    ```bash
    npx wrangler d1 migrations apply exportmate-db --remote
    ```

---

## ⚡ 3. Chạy Thử Nghiệm Local (Local Emulation)

Luôn luôn kiểm tra hệ thống hoạt động ổn định ở môi trường giả lập local của Cloudflare trước khi deploy lên Production.

```bash
# Khởi chạy Worker local giả lập D1, KV, AI
npx wrangler dev
```

---

## 🚢 4. Quy Trình Deploy Tự Động (CI/CD)

Khi code đã hoàn thành, vượt qua toàn bộ test cases và sẵn sàng bàn giao:

1.  **Build Frontend assets:**
    ```bash
    npm run build
    ```
    (Đảm bảo thư mục đầu ra khớp với `assets.directory` trong `wrangler.jsonc`, thông thường là `build/client`).
2.  **Deploy Backend & Assets lên Cloudflare Edge:**
    ```bash
    npx wrangler deploy
    ```
3.  **Set các secrets cần thiết trên Cloudflare Production:**
    ```bash
    npx wrangler secret put GEMINI_API_KEY
    npx wrangler secret put JWT_SECRET
    ```

---

## 🔍 5. Tự Động Bắt Lỗi & Debugging Trên Production (Vibecoding Master)

Đây là phần quan trọng nhất giúp AI tự động sửa lỗi mà không làm phiền đến User.

### Bước 1: Live tail log
Ngay sau khi deploy hoặc khi User báo có lỗi trên môi trường chạy thực tế, AI phải kích hoạt tính năng stream log trực tiếp:
```bash
npx wrangler tail exportmate
```
(Lệnh này sẽ stream toàn bộ log runtime, bao gồm cả `console.log`, `console.error` và unhandled exceptions từ server Cloudflare về máy).

### Bước 2: Phân tích & Tự động vá lỗi
*   Đọc log và xác định lỗi phát sinh (ví dụ: lỗi kết nối DB D1, lỗi hết hạn token AI, lỗi CORS).
*   Chỉnh sửa code tại local để fix lỗi.
*   Chạy test local verify lại.
*   Chạy `npx wrangler deploy` để cập nhật bản fix lên production.
*   Kiểm tra lại log bằng `wrangler tail` để chắc chắn lỗi đã được triệt tiêu hoàn toàn.
