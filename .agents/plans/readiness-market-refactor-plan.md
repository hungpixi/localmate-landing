# MASTER REFACTORING PLAN: READINESS & TARGET MARKET DOMAIN REDESIGN

**Mục tiêu:** Tái kiến trúc toàn bộ phân hệ Readiness & Target Market theo nguyên tắc Domain-First, loại bỏ dữ liệu tĩnh giả mạo, tách biệt Năng lực Nội tại khỏi Yêu cầu Thị trường.

---

## PHỤC VỤ CÁC PHASE THỰC THI

### Phase 0 — Investigation & Mapping (ĐÃ HOÀN THÀNH)
- [x] Audit toàn bộ codebase tìm `MarketReadinessGauge`, `DEFAULT_MARKET_COMPLIANCE_SCORES`, `/api/readiness/scores`.
- [x] Lập bảng phân tích 5 phát hiện vi phạm domain.

### Phase 1 — Architecture Decisions (ĐÃ HOÀN THÀNH)
- [x] Ban hành ADR-005: Loại bỏ `/api/readiness/scores` & Tái thiết kế Market Assessment.
- [x] Ban hành Quy định Ranh giới Domain (`readiness-vs-market-domain-boundary.md`).
- [x] Ban hành Cấu trúc CSDL Mục tiêu (`market-compliance-data-model.md`).
- [x] Ban hành Chính sách Xử lý Lỗi API & Phân lập Demo (`api-error-and-demo-data-policy.md`).

### Phase 2 — Backend API & Services (ĐANG THỰC HIỆN)
- [ ] Xóa bỏ endpoint `/api/readiness/scores` trong `server/routes/readiness.ts`.
- [ ] Bổ sung module `server/routes/markets.ts` hoặc các endpoint chuẩn theo RESTful resource:
  - `GET /api/markets`
  - `GET /api/markets/:marketCode/requirements`
  - `GET /api/projects/:projectId/market-assessments`
  - `POST /api/projects/:projectId/market-assessments`

### Phase 3 — Frontend UI & Route Separation
- [ ] Gỡ bỏ `MarketReadinessGauge` khỏi `src/pages/Dashboard/Home.tsx`.
- [ ] Xóa bỏ `DEFAULT_MARKET_COMPLIANCE_SCORES` trong `MarketReadinessGauge.tsx`.
- [ ] Nâng cấp `TargetChoiceScreen.tsx` (Trang Thị trường Mục tiêu) để đảm nhận vai trò So sánh Quốc gia, Đánh giá khoảng thiếu và Hiển thị rào cản tuân thủ.
- [ ] Đảm bảo `ReadinessPage.tsx` chỉ hiển thị 6 nhóm năng lực nội tại doanh nghiệp.

### Phase 4 — Testing & Regression Verification
- [ ] Chạy `npm run typecheck` xác nhận 0 lỗi TypeScript.
- [ ] Chạy `npm run build` xác nhận build production thành công.
- [ ] Chạy `git status` và commit mã nguồn theo chuẩn Rule 14.
