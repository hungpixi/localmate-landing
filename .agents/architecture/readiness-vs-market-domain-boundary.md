# ARCHITECTURE DOCUMENT: READINESS VS TARGET MARKET DOMAIN BOUNDARIES

**Phiên bản:** 1.0.0  
**Tác giả:** Hội đồng Kiến trúc ExportMate  

---

## I. TỔNG QUAN

Tài liệu này quy định ranh giới kiến trúc (Domain Boundaries) giữa hai phân hệ quan trọng của ExportMate:

1. **Phân hệ 1: Readiness Domain (Năng lực Sẵn sàng Nội tại)**
2. **Phân hệ 2: Target Market & Compliance Domain (Thị trường Mục tiêu & Tuân thủ)**

Tuyệt đối **KHÔNG** gộp chung hai phân hệ này thành một chỉ số phần trăm duy nhất hoặc hiển thị so sánh quốc gia trên bảng điều khiển Readiness.

---

## II. RANH GIỚI TRÁCH NHIỆM VÀ DỮ LIỆU (BOUNDED CONTEXTS)

```
┌────────────────────────────────────────────────────────┐
│                   EXPORT PROJECT                       │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
┌─────────────────────────┐      ┌─────────────────────────┐
│    READINESS DOMAIN     │      │   TARGET MARKET DOMAIN  │
├─────────────────────────┤      ├─────────────────────────┤
│ • Enterprise Profile    │      │ • Market Metadata       │
│ • Product Specification │      │ • Regulatory Rules      │
│ • Evidence Coverage     │      │ • Tariff Rates (EVFTA)  │
│ • Active Certificates   │      │ • Mandatory Documents   │
│ • Internal Capability   │      │ • Compliance Gap Engine │
└─────────────────────────┘      └─────────────────────────┘
```

### 1. Readiness Domain
- **Phạm vi Trách nhiệm:** Quản lý và đánh giá mức độ hoàn thiện thông tin, bằng chứng chứng từ và năng lực vận hành của nội bộ doanh nghiệp.
- **Thành phần Dữ liệu:**
  - `EnterpriseReadinessScore` (0-100%): Điểm tự đánh giá quy trình sản xuất, nhân sự xuất nhập khẩu, hạ tầng nhà xưởng.
  - `EvidenceCompletenessScore` (0-100%): Tỷ lệ chứng từ đã nộp (ISO 22000, CO, CQ, Test Report) so với danh mục nội bộ.
  - `CertificateRegistry`: Quản lý hạn dùng và trạng thái của các chứng chỉ.
- **Quy tắc:** Không phụ thuộc vào quốc gia cụ thể. Một doanh nghiệp có điểm Readiness 90% nghĩa là bộ hồ sơ và chứng từ nội bộ đã rất ngăn nắp, chưa phản ánh việc có đáp ứng 100% quy định của Mỹ hay EU hay không.

### 2. Target Market & Compliance Domain
- **Phạm vi Trách nhiệm:** Quản lý cơ sở dữ liệu luật pháp, rào cản kỹ thuật (SPS/TBT), biểu thuế XNK của từng thị trường mục tiêu và thực hiện đối chiếu khoảng thiếu (Compliance Gap Analysis).
- **Thành phần Dữ liệu:**
  - `MarketRequirement`: Tập hợp quy định (ví dụ: EUDR của EU, FSMA của Mỹ, GACC Lệnh 248/249 của Trung Quốc).
  - `MarketAssessment`: Kết quả đánh giá độ phù hợp cho một dự án cụ thể xuất khẩu tới một thị trường mục tiêu.
  - `ComplianceGap`: Danh sách các điểm thiếu hụt nghiêm trọng (P0/P1) cần khắc phục để đủ điều kiện xuất khẩu sang thị trường đó.
- **Quy tắc:** Kết quả đánh giá tuân thủ phải có phiên bản bộ luật (`ruleVersion`), căn cứ pháp lý (`legalBasis`), nguồn trích dẫn (`sourceUrl`) và ngày kiểm tra (`lastVerifiedAt`).

---

## III. NGUYÊN TẮC THIẾT KẾ GIAO DIỆN (UI DESIGN GUIDELINES)

1. **Dashboard Readiness (`/dashboard/readiness`)**:
   - Chỉ hiển thị Radar Chart 6 nhóm năng lực nội tại.
   - Hiển thị danh mục chứng nhận sắp hết hạn.
   - Hiển thị danh sách các khoảng thiếu chứng từ nội bộ.
   - **CẤM**: Không hiển thị các card so sánh % Đức, Hà Lan, Mỹ tại đây.

2. **Dashboard Target Market (`/dashboard/target-choice`)**:
   - Nơi cho phép người dùng chọn Sản phẩm ➔ Chọn Mã HS ➔ So sánh các Thị trường mục tiêu.
   - Hiển thị mức thuế ưu đãi dự kiến, rào cản bắt buộc và độ phù hợp thị trường cho từng quốc gia được chọn.
