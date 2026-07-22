# Nhật ký Tri thức & Quy trình Kiểm tra Build / Deploy Cloudflare (Cloudflare CI/CD Deployment Troubleshooting & Pre-flight Checklist)

Tài liệu này lưu trữ toàn bộ các lỗi thường gặp, nguyên nhân gốc rễ và quy trình kiểm thử trước khi commit/push code lên Git để đảm bảo quá trình tự động triển khai (CI/CD) trên Cloudflare thành công 100%.

---

## 1. Các lỗi CI/CD Build thường gặp & Cách khắc phục

### ❌ 1. Lỗi Peer Dependency Conflict (`ERESOLVE could not resolve`)
- **Triệu chứng**: Trình build CI/Cloudflare Pages/GitHub Actions báo lỗi `npm error code ERESOLVE` khi chạy `npm ci`.
- **Nguyên nhân**: Khi dự án sử dụng các gói thư viện có khai báo peerDependencies khác biệt major version (ví dụ: `@react-router/cloudflare` yêu cầu `typescript: ^5.1.0` nhưng dự án giữ nguyên `typescript: 7.0.2`).
- **Giải pháp xử lý**:
  - Đã thêm file `.npmrc` ở gốc dự án với nội dung:
    ```ini
    legacy-peer-deps=true
    ```
  - Trong kịch bản CI (`deploy-cloudflare.yml`), sử dụng:
    ```bash
    npm ci --legacy-peer-deps
    ```

---

### ❌ 2. Lỗi D1 Database / Binding Không tồn tại (`code: 10181`)
- **Triệu chứng**: `npx wrangler deploy` báo lỗi `D1 binding 'DB' references database '...' which was not found`.
- **Nguyên nhân**: UUID của D1 Database trong `wrangler.jsonc` không tồn tại trên tài khoản Cloudflare target.
- **Giải pháp xử lý**:
  1. Liệt kê DB D1 hiện có: `npx wrangler d1 list`
  2. Tạo DB nếu thiếu: `npx wrangler d1 create exportmate-db`
  3. Cập nhật `database_id` chính xác vào cả `wrangler.jsonc` và `wrangler.build.jsonc`.

---

### ❌ 3. Lỗi Schema Migration trên D1 SQLite (`code: 7500`)
- **Triệu chứng**: Migration báo lỗi `unknown column in foreign key definition` hoặc `near ",": syntax error`.
- **Nguyên nhân**: 
  1. SQLite không hỗ trợ từ khóa kiểu dữ liệu `JSONB` trong `CREATE TABLE` -> Phải đổi thành `TEXT`.
  2. Mâu thuẫn tên cột Foreign Key (ví dụ: `"workspaceId"` vs `"workspace_id"`).
  3. Dấu phẩy dư thừa (trailing comma) ở dòng cuối trước `);`.
  4. Migration bị ngắt giữa chừng -> Cần thêm `CREATE TABLE IF NOT EXISTS` & `CREATE INDEX IF NOT EXISTS`.
- **Giải pháp xử lý**:
  - Thêm `PRAGMA foreign_keys=OFF;` ở đầu file migration.
  - Sử dụng `IF NOT EXISTS` cho tất cả câu lệnh `CREATE TABLE` và `CREATE INDEX`.

---

### ❌ 4. Lỗi R2 Object Storage Bucket missing (`code: 10085`)
- **Triệu chứng**: Deploy thất bại do R2 Bucket `exportmate-storage` chưa khởi tạo.
- **Giải pháp xử lý**:
  ```bash
  npx wrangler r2 bucket create exportmate-storage
  ```

---

### ❌ 5. Lỗi Lỗ Hổng Bảo Mật Gói Phụ Thuộc Gián Tiếp (Indirect Dependency Vulnerabilities - `sharp` / `miniflare` / `wrangler`)
- **Triệu chứng**: `npm audit` báo lỗi High Severity (như CVE libvips trong `sharp < 0.35.0` được kế thừa bởi `miniflare` & `wrangler`).
- **Nguyên nhân**: Gói phụ thuộc cấp 2/3 (transitive dependency) sử dụng phiên bản cũ chứa lỗ hổng bảo mật.
- **Giải pháp xử lý**:
  Thêm cấu hình vá phiên bản vào mục `"overrides"` trong `package.json`:
  ```json
  "overrides": {
    "typescript": "$typescript",
    "sharp": "^0.35.0"
  }
  ```
  Sau đó chạy `npm install` để cập nhật `package-lock.json` và vá lỗ hổng toàn diện.

---

## 2. Quy trình Pre-flight Check trước khi Commit & Push

Trước khi commit và push code lên GitHub/Cloudflare, bắt buộc chạy 4 bước kiểm định sau:

```bash
# Bước 1: Kiểm tra TypeScript Typecheck (0 lỗi)
npm run typecheck

# Bước 2: Kiểm tra Build Bundler & SPA Fallback (0 lỗi)
npm run build

# Bước 3: Áp dụng SQL Migrations lên Cloudflare D1 Remote
npx wrangler d1 migrations apply exportmate-db --remote

# Bước 4: Chạy thử nghiệm Deploy trực tiếp
npx wrangler deploy
```

---

## 3. Nhật ký Xác thực Môi trường Live

- **Production Worker URL**: `https://exportmate.ppnh10092002.workers.dev`
- **Health check URL**: `https://exportmate.ppnh10092002.workers.dev/api/health`
- **Trạng thái Bindings Live**: `hasAI: true, hasAgentCache: true, hasDB: true, hasR2: true`.
