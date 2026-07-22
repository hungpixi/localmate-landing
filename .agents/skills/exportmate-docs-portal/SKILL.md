---
name: exportmate-docs-portal
description: Quy trình khởi tạo, thiết lập cấu trúc thư mục và phát triển cổng tài liệu nghiệp vụ xuất khẩu chính thức docs.exportmate.vn sử dụng Nextra và Next.js.
---

# Kỹ Nghệ Xây Dựng Cổng Tài Liệu docs.exportmate.vn

Tài liệu này cung cấp hướng dẫn từng bước để thiết lập, cấu hình và triển khai cổng thông tin tài liệu chính thức cho dự án ExportMate (`docs.exportmate.vn`), sử dụng khung phát triển Nextra kết hợp Next.js.

---

## 1. Khởi Tạo Dự Án Nhanh (Quick Scaffold)

Sử dụng lệnh `npx` phi tương tác để tự động khởi tạo và cài đặt các gói phụ thuộc tiêu chuẩn:

```bash
# 1. Tạo dự án Next.js mới
npx create-next-app@latest exportmate-docs --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Di chuyển vào thư mục dự án
cd exportmate-docs

# 3. Cài đặt Nextra và Theme tài liệu chuẩn
npm install nextra nextra-theme-docs
```

---

## 2. Cấu Trúc Thư Mục Tài Liệu Cốt Lõi

Cổng tài liệu được tổ chức chặt chẽ thành các nhóm nội dung nghiệp vụ xuất khẩu và kỹ thuật cốt lõi:

```
exportmate-docs/
├── src/
│   └── pages/
│       ├── _meta.json               # Cấu hình menu điều hướng chính
│       ├── index.mdx                # Trang chủ tài liệu
│       └── docs/
│           ├── _meta.json           # Danh mục con của /docs
│           ├── getting-started.mdx  # Hướng dẫn bắt đầu nhanh cho Exporter
│           ├── export-profile.mdx   # Thiết lập hồ sơ doanh nghiệp & sản phẩm (Lớp 1 & Lớp 2)
│           ├── document-checklist.mdx # Quy trình chuẩn hóa 28 chứng từ quốc tế (Lớp 3)
│           ├── ai-agent-workflow.mdx # Hướng dẫn sử dụng Document Agent kiểm chéo OCR
│           ├── api.mdx              # Tài liệu cổng kết nối API đồng bộ hải quan
│           └── changelog.mdx        # Nhật ký cập nhật phiên bản
```

---

## 3. Bản Mẫu Cấu Hình Thực Tế (Configuration Templates)

### 📄 File `next.config.js` chuẩn cho Nextra

```javascript
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})
```

### 📄 File `theme.config.tsx` - Visual & Layout Premium

```tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '20px' }}>🚢</span>
      <strong style={{ letterSpacing: '-0.5px', color: '#556B2F' }}>ExportMate Docs</strong>
    </div>
  ),
  project: {
    link: 'https://github.com/hungpixi/exportmate',
  },
  chat: {
    link: 'https://discord.gg/exportmate',
  },
  docsRepositoryBase: 'https://github.com/hungpixi/exportmate/tree/main/docs',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} <strong>ExportMate.AI</strong> • Verified Document Standard.
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – ExportMate Docs'
    }
  }
}

export default config
```

---

## 4. Các Trang Nội Dung Nghiệp Vụ Mẫu (MDX Samples)

### 📁 `/docs/getting-started.mdx`

```markdown
# Bắt đầu nhanh với ExportMate

Chào mừng bạn đến với Cổng tài liệu nghiệp vụ chính thức của **ExportMate.AI**. Hệ thống giúp các doanh nghiệp Việt Nam số hóa, kiểm chéo và tự động hóa quy trình chuẩn bị hồ sơ xuất khẩu đạt chuẩn pháp lý quốc tế.

## 3 Lớp Hồ Sơ Cốt Lõi
1. **Pháp lý Doanh nghiệp (Corporate)**: Giấy phép đăng ký kinh doanh, đăng ký thuế, SWIFT code, chữ ký số.
2. **Hồ sơ Sản phẩm & Nhà xưởng (Product Spec)**: Phiếu kiểm nghiệm, HS Code, quy cách đóng pallet, nhãn mác.
3. **Bộ chứng từ Lô hàng (Shipment Dossier)**: Hóa đơn thương mại (Invoice), Phiếu đóng gói (Packing List), Vận đơn (B/L), C/O.
```

### 📁 `/docs/ai-agent-workflow.mdx`

```markdown
# Quy trình vận hành của AI Document Agent

Document Agent của ExportMate sử dụng hệ thống AI đa phương thức kết hợp công nghệ OCR và xử lý ngôn ngữ tự nhiên để tự động rà soát sai lệch chéo giữa các chứng từ.

## Các tiêu chí đối chiếu chính:
* **Khớp chỉ số số học**: Trọng lượng tịnh (Net Weight) và trọng lượng gộp (Gross Weight) trên Packing List phải khớp chính xác tuyệt đối với Vận đơn đường biển (B/L).
* **Đồng nhất tên thương mại**: Tên sản phẩm, quy cách đóng gói và mã HS Code phải đồng bộ 100% trên tất cả các chứng từ liên quan để tránh ách tắc hải quan.
```

---

## 5. Quy Tắc Audit & Cập Nhật Skill
* Khi có sự thay đổi về phiên bản API của hải quan hoặc đạo luật xuất nhập khẩu mới (như đạo luật EUDR 2023/1115), bắt buộc phải cập nhật bổ sung hướng dẫn chi tiết tương ứng vào tệp `/docs/document-checklist.mdx`.
* Lưu trữ skill này trực tiếp trong thư mục dự án `.agents/skills/exportmate-docs-portal` để chia sẻ tri thức giữa các AI Agent thế hệ tiếp theo.
