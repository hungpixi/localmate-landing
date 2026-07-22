# Cloudflare Deployment Rules (SSOT)

## Target Project Specification
Mọi lệnh deploy tự động hoặc thủ công từ AI Agent trên repository này **BẮT BUỘC** phải chỉ định đúng tên dự án Cloudflare Pages chính thức:

- **Project Name:** `localmate-vn`
- **Target URL:** `https://localmate-vn.pages.dev`

## Lệnh Deploy Chuẩn Codebase
```bash
npm run build
npx wrangler pages deploy dist --project-name localmate-vn
```

Tuyệt đối không dùng tên `localmate` hoặc `localmate-landing`.
