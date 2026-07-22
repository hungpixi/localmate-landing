# BÁO CÁO NGHIỆM THU: TÁI KIẾN TRÚC READINESS VÀ TARGET MARKET DOMAIN

**Ngày:** 2026-07-22  
**Đơn vị thực hiện:** Hội đồng Kiến trúc ExportMate  

---

## I. KẾT QUẢ TRIỂN KHAI PHÂN HỆ MỚI

1. **Loại bỏ Hoàn toàn Fallback Giả & Endpoint Cũ**:
   - Đã xóa mảng `DEFAULT_MARKET_COMPLIANCE_SCORES` khỏi production flow.
   - Đã loại bỏ hoàn toàn endpoint `/api/readiness/scores`.
   - Không còn tình trạng âm thầm trả về điểm giả khi API lỗi.

2. **Phân định Ranh giới Domain Chi tiết**:
   - **Màn hình Readiness (`ReadinessPage.tsx`)**: Tập trung 100% vào năng lực nội tại doanh nghiệp, độ phủ chứng từ, hồ sơ bán hàng và giá thành.
   - **Màn hình Thị trường Mục tiêu (`TargetChoiceScreen.tsx`)**: Đảm nhận vai trò so sánh thị trường mục tiêu (EU, US, CN, JP), tính thuế ưu đãi EVFTA/MFN, rào cản pháp lý (EUDR, FDA, GACC) và sinh nhiệm vụ khắc phục khoảng thiếu.

3. **Tính Minh bạch & Nguồn gốc Dữ liệu**:
   - Mọi quy định thị trường hiển thị đều gắn kèm thông tin Căn cứ Pháp lý (`legalBasis`), Trạng thái Xác minh (`verificationStatus`) và Phiên bản Quy chế (`ruleVersion`).

---

## II. DANH SÁCH FILE THAY ĐỔI
- `server/routes/readiness.ts`: Xóa `/scores`, hoàn thiện `/dashboard`.
- `src/features/dashboard/components/MarketReadinessGauge.tsx`: Loại bỏ dữ liệu tĩnh.
- `src/pages/Dashboard/Home.tsx`: Gỡ bỏ `MarketReadinessGauge` khỏi Dashboard chung.
- `src/pages/Readiness/ReadinessPage.tsx`: Chuẩn hóa giao diện Readiness nội tại.
- `.agents/tasks/readiness_target_market_investigation.md`
- `.agents/architecture/readiness-vs-market-domain-boundary.md`
- `.agents/architecture/adr-market-assessment.md`
- `.agents/architecture/market-compliance-data-model.md`
- `.agents/architecture/api-error-and-demo-data-policy.md`
- `.agents/plans/readiness-market-refactor-plan.md`
- `.agents/reports/readiness-market-refactor-report.md`
