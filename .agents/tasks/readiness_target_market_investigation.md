# BÁO CÁO ĐIỀU TRA TOÀN DIỆN: DỰ ÁN TÁI KIẾN TRÚC READINESS VÀ TARGET MARKET DOMAIN

**Ngày thực hiện:** 2026-07-22  
**Quy chuẩn áp dụng:** Domain-First Architecture, Single Source of Truth (SSOT), No-Overclaim Copywriting, Intrinsic Layout Anti-Overflow.

---

## I. BẢNG TỔNG HỢP VỚI MỌI PHÁT HIỆN TRONG CODEBASE (AUDIT TABLE)

| File / Component | Logic hiện tại | Domain đúng | Rủi ro | Quyết định | Mức ưu tiên |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `MarketReadinessGauge.tsx` | Đang gọi `GET /api/readiness/scores` và dùng `DEFAULT_MARKET_COMPLIANCE_SCORES` trả về % sẵn sàng của EU, Mỹ, Nhật Bản | **Thị trường mục tiêu (Target Market Assessment)** | Giả lập điểm sẵn sàng quốc gia bằng số tĩnh, không có căn cứ pháp lý, nguồn dữ liệu hay phiên bản quy chuẩn | **Loại bỏ khỏi Dashboard Readiness.** Chuyển logic so sánh quốc gia sang module Target Market. | **P0** |
| `server/routes/readiness.ts` (Endpoint `/scores`) | Trả về mảng JSON tĩnh với các con số % sẵn sàng 85%, 78%, 92% | **Target Market Intelligence** | Nhầm lẫn giữa Năng lực doanh nghiệp và Tiêu chuẩn quốc gia. Không hỗ trợ versioning hay metadata xác minh | **Xóa bỏ endpoint `/scores`**. Thay bằng `/api/markets` và `/api/projects/:id/market-assessments`. | **P0** |
| `ReadinessPage.tsx` | Nhập chung thông tin chọn thị trường (EU, Mỹ, Trung Quốc, Nhật Bản) trực tiếp trên trang Readiness | **Enterprise & Product Readiness** | Làm người dùng nhầm lẫn rằng Readiness tự động so sánh được các quốc gia mà không qua hồ sơ dự án cụ thể | **Tách ranh giới UI.** Màn Readiness chỉ hiển thị năng lực nội tại doanh nghiệp & độ phủ minh chứng. | **P0** |
| `DEFAULT_MARKET_COMPLIANCE_SCORES` | Mảng dữ liệu tĩnh chứa điểm 85, 78, 92 | **Demo Fixture Only** | Hiển thị như thật khi API lỗi | **Xóa khỏi production flow**. Chỉ bật trong Demo Mode với nhãn "Dữ liệu minh họa". | **P0** |
| `export-readiness-agent.ts` | Trộn lẫn Readiness với Target Market alignment trong AI Prompt, gán `certScore = certs.length * 20` | **Agent Workflow Domain** | Hardcode quy định EU/US/CN trong prompt AI; Điểm phần trăm giả không có công thức pháp lý | **Refactor AI Workflow Prompt.** Tách riêng Enterprise Readiness Agent và Market Compliance Assessment Agent. | **P1** |
| `lot-passport-agent.ts` | Hardcode logic EUDR (Coffee, GPS) và gán `traceabilityScore = hasGPS ? 75 : 10` | **Shipment & Traceability Agent** | Điểm số giả lập thiếu căn cứ quy chuẩn, hardcode tên nông sản | **Trích xuất rule sang Data Model.** Đọc điều kiện truy xuất nguồn gốc từ `MarketRequirement`. | **P1** |

---

## II. MA TRẬN PHÂN ĐỊNH DOMAIN (DOMAIN BOUNDARY MATRIX)

### 1. Enterprise & Product Readiness (Năng lực & Bằng chứng nội tại)
- **Trả lời câu hỏi:** Doanh nghiệp đã có những tài sản/năng lực gì? Độ phủ bằng chứng đến đâu?
- **Thuộc tính sở hữu:**
  - `overallDeclaredScore`: Điểm tự khai báo qua bộ câu hỏi.
  - `verifiedEvidenceScore`: Điểm dựa trên bằng chứng đã được kiểm định (Scan ISO, FDA, GPS plots).
  - `evidenceCoverage`: Tỷ lệ tài liệu đã nộp / tổng tài liệu bắt buộc.
  - `activeCertificates`: Danh sách chứng nhận và ngày hết hạn.
  - `internalGaps`: Khoảng thiếu về quy trình, hồ sơ bán hàng, giá thành.

### 2. Target Market & Compliance (Thị trường mục tiêu & Rào cản)
- **Trả lời câu hỏi:** Thị trường mục tiêu yêu cầu quy định gì? Hồ sơ hiện tại đáp ứng bao nhiêu %?
- **Thuộc tính sở hữu:**
  - `targetMarketId`: Mã quốc gia/khu vực (EU, US, CN, JP).
  - `appliedHsCode`: Mã HS áp dụng.
  - `estimatedTariff`: Mức thuế ưu đãi (EVFTA, MFN) kèm điều kiện CO.
  - `regulatoryRequirements`: Danh mục rào cản kỹ thuật (EUDR, FSMA, GACC 248/249).
  - `complianceGaps`: Khoảng thiếu cụ thể giữa hồ sơ hiện tại và yêu cầu thị trường.
