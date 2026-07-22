# Quy chuẩn Nghiệp vụ Cốt lõi: Workspace SSOT & Decision Engine

Tài liệu quy định bắt buộc cho mọi AI Agent làm việc trên dự án ExportMate. Mọi module (Readiness, RFQ, Sourcing, Hồ sơ Xuất khẩu, Passport, Matching Buyer, Logistics) phải tuân thủ nghiêm ngặt các quy tắc này.

---

## 1. Rule D1 — Workspace là Single Source of Truth (SSOT) Duy nhất

Tất cả các tính năng và module **KHÔNG ĐƯỢC** tự lưu trữ dữ liệu doanh nghiệp rời rạc hoặc dùng dữ liệu giả (Hardcode/Self-declare). Tất cả phải truy vấn từ **Master Workspace Hub (SSOT)** gồm 8 khối dữ liệu:

1. **Pháp nhân (Legal Entity & EORI):** MST, Tên ĐKKD, Giấy phép XNK.
2. **Nhà máy & Vùng trồng (Factory & Plantation):** Tọa độ GPS Polygons EUDR, Mã GACC CIFER, Mã FDA.
3. **Sản phẩm & Mã HS (Product Spec Master):** Mã HS (6-10 số), Packaging spec, Spec sheet.
4. **Kho Chứng nhận (Certificate Hub):** ISO 22000, HACCP, FDA, BRCGS, OEKO-TEX kèm ngày hết hạn.
5. **Kho Chứng từ (Document Vault):** Phytosanitary, Lab test reports, C/O samples, B/L.
6. **Chiến lược Thị trường (Market Strategy):** EU, US, China, Japan, Korea...
7. **Phân quyền Ekip (Team Roles & RBAC):** Admin/CEO, XNK Manager, QC Specialist, Sales Rep.
8. **Lịch sử Thay đổi (Audit Trail):** Nhật ký ghi nhận vết thay đổi dữ liệu minh bạch.

---

## 2. Rule D2 — Readiness là Decision Engine, Không phải Trang Khảo sát Tĩnh

Readiness không được xây dựng dưới dạng bài trắc nghiệm tự khai hay bảng điểm số tĩnh. 
Nó là một **Động cơ Ra quyết định (Decision Engine)** đánh giá liên tục tổ hợp 3 chiều:

$$\text{Subject} = (\text{Company / Factory}, \text{Product / HS Code}, \text{Target Market})$$

---

## 3. Rule D3 — Ma trận Khóa Tính năng (Feature Locks Matrix)

Kết quả từ Decision Engine trả về 1 trong 3 trạng thái và **điều khiển trực tiếp quyền hạn thao tác của người dùng trên toàn hệ thống**:

| Trạng thái | Điều kiện | Quyền hạn & Khóa Tính năng (Feature Locks) |
|---|---|---|
| 🛑 **`BLOCKED`** | Có ít nhất 1 Hard Blocker P0 (Thiếu Tọa độ GPS EUDR, Hết hạn FDA/GACC) | **KHÓA:** Gửi RFQ/Chào giá B2B (`allowRfqSend: false`), KHÓA xuất bản Supplier Profile (`allowPublicSupplierProfile: false`), KHÓA tải Pitching Kit (`allowPitchingKitDownload: false`). |
| 🟡 **`CONDITIONAL`** | Đã nộp hồ sơ nhưng còn Cảnh báo P1 (Chứng chỉ sắp hết hạn trong 30 ngày, thiếu test SO2) | **MỞ CO-DRAFT:** Cho phép soạn DRAFT RFQ nội bộ, hiển thị Banner cảnh báo rủi ro cho phòng XNK. |
| 🟢 **`READY`** | Đạt 100% bằng chứng pháp lý & kiểm dịch của Thị trường Mục tiêu | **MỞ TOÀN BỘ:** Cấp Huy hiệu Verified Supplier Passport, mở công khai Supplier Profile, cho phép gửi chào giá B2B. |

---

## 4. Rule D4 — Tự khai (Self-declare) Không bao giờ Cấp Trạng thái READY

Tuyên bố tự điền chữ **không có giá trị kích hoạt trạng thái READY**. Hệ thống bắt buộc phân 3 tầng bằng chứng:
- **Tier 1 (Hard Evidence):** File Scan Giấy chứng nhận ISO/HACCP/FDA, Phiếu test Lab (Quatest, Eurofins, SGS).
- **Tier 2 (Nguồn gốc):** File Tọa độ GPS Polygons nông hộ, Giấy C/O Form EUR.1/E/VJ.
- **Tier 3 (Sản phẩm):** Spec sheet thông số kỹ thuật, Ảnh nhãn mác thực tế.

---

## 5. Rule D5 — Căn cứ Pháp lý Chính thống 100%

Tất cả các quy định thuế quan và hàng rào kỹ thuật (SPS/TBT) phải liên kết trực tiếp với URL công báo chính thức của chính phủ:
- Việt Nam: `https://customs.gov.vn` & `https://www.mard.gov.vn`
- Liên minh Châu Âu: `https://eur-lex.europa.eu`
- Hoa Kỳ: `https://www.federalregister.gov`
- Trung Quốc: `http://gacc.customs.gov.cn`
- WTO: `https://epingalert.org`
