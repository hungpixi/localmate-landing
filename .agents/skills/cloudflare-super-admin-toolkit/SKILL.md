---
name: cloudflare-super-admin-toolkit
description: Bộ công cụ tự động hóa toàn diện cơ sở hạ tầng khởi nghiệp Cloudflare (D1, KV, R2, Workers AI, Turnstile, Email, Zero Trust) dành cho AI Agent sử dụng Token Super Admin.
---

# 🛠️ Cloudflare Super Admin Toolkit for Startup Automation

Skill này hướng dẫn AI Agent cách khai thác tối đa API Token Cloudflare có quyền Super Admin (đã cấu hình trong file `.env`) để tự động hóa việc khởi tạo, quản lý và vận hành toàn bộ cơ sở hạ tầng backend/database/AI/security cho dự án khởi nghiệp ExportMate mà không cần người dùng thao tác thủ công trên trình duyệt.

---

## 🔑 1. Biến Môi Trường Cốt Lõi
Mọi tác vụ tự động hóa đều đọc thông tin từ file `.env` ở thư mục gốc:
*   `CLOUDFLARE_API_TOKEN`: Token có quyền ghi cho toàn bộ dịch vụ.
*   `CLOUDFLARE_ACCOUNT_ID`: Account ID của tài khoản Cloudflare đích (`5fdd1d1433519df6429d7418d43fff9a`).

Khi thực thi lệnh CLI (Wrangler hoặc curl), luôn truyền API Token này vào biến môi trường:
```powershell
# Ví dụ chạy PowerShell trên Windows:
$env:CLOUDFLARE_API_TOKEN="<CLOUDFLARE_API_TOKEN>"
$env:CLOUDFLARE_ACCOUNT_ID="<CLOUDFLARE_ACCOUNT_ID>"
```

---

## 🛡️ 2. Tự Động Hóa Turnstile CAPTCHA (Bảo Vệ Form Khảo Sát & Đăng Ký)
Thay vì bắt người dùng lên dashboard để tạo sitekey Turnstile, AI có thể tự động gọi API Cloudflare để đăng ký một Turnstile Widget mới và lấy key chèn thẳng vào code.

### Script tự động tạo Turnstile Widget:
Chạy lệnh curl qua PowerShell để tạo Turnstile widget cho tên miền `exportmate.vn`:
```powershell
$headers = @{
    "Authorization" = "Bearer $env:CLOUDFLARE_API_TOKEN"
    "Content-Type"  = "application/json"
}
$body = @{
    "name" = "ExportMate Production Widget"
    "domains" = @("exportmate.vn", "localhost")
    "mode" = "managed"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/accounts/$env:CLOUDFLARE_ACCOUNT_ID/turnstile/widgets" -Method Post -Headers $headers -Body $body
$sitekey = $response.result.sitekey
$secret = $response.result.secret

Write-Output "Turnstile Sitekey: $sitekey"
Write-Output "Turnstile Secret: $secret"
```

### Action của AI:
1.  Gọi API tạo Turnstile Widget.
2.  Lưu `sitekey` vào frontend và `secret` vào wrangler secrets:
    ```bash
    npx wrangler secret put TURNSTILE_SECRET_KEY --secret-value "<secret>"
    ```

---

## 📧 3. Tự Động Hóa Email Routing & Email Sending (Không Cần Gửi SMTP Ngoài)
Để tiết kiệm chi phí dịch vụ gửi email ngoài (như SendGrid/Resend) cho startup, ta sử dụng dịch vụ Email Routing & Email Sending tích hợp sẵn của Cloudflare.

### A. Thiết lập Email Routing (Nhận mail & Forward)
Tự động chuyển tiếp toàn bộ email gửi tới `admin@exportmate.vn` hoặc `startup@exportmate.vn` về email cá nhân `Ppnh10092002@gmail.com`:

```powershell
# 1. Kích hoạt Email Routing trên Zone (tên miền exportmate.vn)
# Lấy Zone ID của exportmate.vn trước:
$zoneResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones?name=exportmate.vn" -Method Get -Headers $headers
$zoneId = $zoneResponse.result[0].id

# 2. Tạo quy tắc chuyển tiếp email
$routeBody = @{
    "actions" = @(
        @{
            "type" = "forward"
            "value" = @("Ppnh10092002@gmail.com")
        }
    )
    "matchers" = @(
        @{
            "field" = "to"
            "type" = "literal"
            "value" = "startup@exportmate.vn"
        }
    )
    "name" = "Forward to Admin Email"
    "enabled" = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/email/routing/rules" -Method Post -Headers $headers -Body $routeBody
```

### B. Thiết lập Email Sending (Gửi mail)
Sử dụng Cloudflare Email Sending API (hoặc bindings) trong mã nguồn Worker để gửi email xác nhận cho khách hàng làm khảo sát hoặc thông báo giao dịch.

---

## 🗄️ 4. Quản Lý D1 Database (Zero-Downtime Backup & Restore)
Khi chạy hệ thống thật trên Cloudflare D1, AI phải định kỳ hoặc tự động backup database trước khi áp dụng migrations lớn.

### Sao lưu Database D1 Production:
```bash
npx wrangler d1 export exportmate-db --remote --output ./server/prisma/backup_production.sql
```

### Khôi phục Database D1 từ file backup:
```bash
npx wrangler d1 execute exportmate-db --remote --file=./server/prisma/backup_production.sql
```

### Đồng bộ Schema (Local ➔ Cloudflare D1):
```bash
# 1. Tạo migration SQL từ prisma schema (nếu có thay đổi)
cd server && npx prisma migrate diff --from-schema-datasource=prisma/schema.prisma --to-schema-datamodel=prisma/schema.prisma --script > migrations/0002_update_schema.sql

# 2. Áp dụng lên Cloudflare Production
npx wrangler d1 migrations apply exportmate-db --remote
```

---

## 📦 5. Tự Động Hóa Quản Lý Cloudflare R2 (Lưu Trữ Lot Passport/eBL)
Do app sử dụng R2 làm nơi lưu trữ bằng chứng số (Evidence Vault) cho các chứng từ xuất khẩu, AI có thể tự động khởi tạo và dọn dẹp các tệp tin qua CLI.

### Tạo bucket R2 mới:
```bash
npx wrangler r2 bucket create exportmate-storage
```

### Đồng bộ tệp tin local lên R2 (Ví dụ đồng bộ mẫu tài liệu DOCX):
```bash
npx wrangler r2 object put exportmate-storage/templates/01QuyDinh.docx --file=./01Quy Dinh_PhuLucI v1.0.docx
```

---

## 🤖 6. Vận Hành Workers AI & Vectorize (Matchmaking & RAG)
ExportMate tích hợp tính năng tự động tìm kiếm đối tác xuất nhập khẩu (B2B Matchmaking) dựa trên Vector Embedding. Token Super Admin này cho phép AI tự động setup các index vector trên Cloudflare.

### Tạo Index Vectorize:
```bash
npx wrangler vectorize create exportmate-index --dimensions=768 --metric=cosine
```

### Khai báo binding Vectorize trong `wrangler.jsonc`:
```json
"vectorize": [
  {
    "binding": "VECTOR_INDEX",
    "index_name": "exportmate-index"
  }
]
```

### Gọi Workers AI trong Backend Worker:
Sử dụng mô hình text-embedding và Qwen Coder trực tiếp qua Cloudflare AI binding:
```typescript
// Trong code backend worker (server/agent-engine.ts)
const aiResponse = await env.AI.run("@cf/qwen/qwen2.5-coder-32b-instruct", {
  prompt: "Analyze this export contract for EUDR compliance"
});
```

---

## 🚨 Quy Tắc An Toàn Cho AI Agent
1.  **Tuyệt đối bảo mật Token:** Không bao giờ log, in ra console hoặc ghi đè API Token vào các file được commit lên Git (như `AGENTS.md`, `CLAUDE.md`, v.v...).
2.  **Backup Trước Khi Migration:** Luôn chạy lệnh `npx wrangler d1 export` để tạo file backup trước khi thực hiện các tác vụ thay đổi schema trên database D1 production.
3.  **Hạn Chế Tạo Tài Nguyên Thừa:** Khi tự động tạo KV Namespace, R2 Bucket hoặc Turnstile widget, phải sử dụng đúng hậu tố tên dự án (ví dụ: `exportmate-*`) để tránh lộn xộn tài nguyên của tài khoản khách hàng.
