# SEO URL Architecture & Redirect Mapping

Tài liệu này là SSOT cho cấu trúc URL Canonical và quy tắc chuyển hướng (Redirects) của `localmate.vn`.

---

## 1. Cấu Trúc URL Canonical Chuẩn

| Nhóm Trang | Định Dạng URL Canonical | Mục Đích (Intent) | Trạng Thái |
| :--- | :--- | :--- | :--- |
| **Trang chủ** | `https://localmate.vn/` | Brand, Value Proposition, Service Discovery | P0 Active |
| **Giới thiệu** | `https://localmate.vn/gioi-thieu` | Trust, Pháp nhân, Triết lý làm việc | P0 Active |
| **Dịch vụ Hub** | `https://localmate.vn/dich-vu` | Service Catalogue Discovery | P0 Active |
| **Dịch vụ Chi tiết** | `https://localmate.vn/dich-vu/[service-slug]` | Commercial Investigation & Chốt đơn | P0 Active |
| **Bảng giá** | `https://localmate.vn/bang-gia` | Commercial Investigation & Minh bạch giá | P0 Active |
| **Dự án / Case Study** | `https://localmate.vn/du-an` | Evidence & Social Proof | P0 Active |
| **Chi tiết Case Study** | `https://localmate.vn/du-an/[case-slug]` | Bằng chứng nghiệp vụ thực tế | P0 Active |
| **Kiến thức Hub** | `https://localmate.vn/kien-thuc` | Topic Authority & Discovery | P0 Active |
| **Bài viết Chi tiết** | `https://localmate.vn/kien-thuc/[article-slug]`| Educational, TOFU/MOFU Content | P0 Active |
| **Giải pháp Ngành** | `https://localmate.vn/giai-phap/[industry-slug]`| Vertical Solution Mapping | P0 Active |
| **Liên hệ** | `https://localmate.vn/lien-he` | Direct Contact & Form Submission | P0 Active |
| **Chính sách bảo mật** | `https://localmate.vn/chinh-sach-bao-mat` | Legal Compliance | P0 Active |
| **Điều khoản dịch vụ** | `https://localmate.vn/dieu-khoan` | Legal Compliance | P0 Active |
| **Chính sách dịch vụ** | `https://localmate.vn/chinh-sach-dich-vu` | SLA & Revision Terms | P0 Active |
| **Sơ đồ website** | `https://localmate.vn/sitemap` | HTML Sitemap cho người dùng & bot | P0 Active |

---

## 2. Quy Tắc Chuyển Hướng & Mapping (Redirect Rules)

| URL Cũ / Alias | URL Canonical Đích | Mã HTTP | Lý Do |
| :--- | :--- | :--- | :--- |
| `/home` | `/` | 301 | Loại bỏ duplicate homepage |
| `/index.html` | `/` | 301 | Loại bỏ duplicate file html |
| `/services` | `/dich-vu` | 301 | Chuẩn hóa tiếng Việt thân thiện người dùng |
| `/pricing` | `/bang-gia` | 301 | Chuẩn hóa tiếng Việt |
| `/about` | `/gioi-thieu` | 301 | Chuẩn hóa tiếng Việt |
| `/contact` | `/lien-he` | 301 | Chuẩn hóa tiếng Việt |
| `/blog` | `/kien-thuc` | 301 | Chuyển đổi tên gọi Authority Hub |
| `/portfolio` | `/du-an` | 301 | Chuẩn hóa tiếng Việt |
| `/goi-490k` | `/landing-490k` | 301 | Canonicalize gói 490k |
| `/chinh-sach` | `/chinh-sach-bao-mat` | 301 | Tránh URL mơ hồ |

---

## 3. Quy Tắc Xử Lý 404 & Parameters
- Tuyệt đối **không** chuyển hướng hàng loạt mọi trang lỗi 404 về trang chủ `/` (gây soft 404 cho Googlebot).
- Trang 404 phải trả về giao diện hướng dẫn người dùng quay lại danh mục dịch vụ hoặc ô tìm kiếm bài viết kiến thức.
- Loại bỏ các tham số URL rác (`?fbclid=`, `?ref=`) khỏi canonical URL bằng thẻ `<link rel="canonical" href="..." />`.
