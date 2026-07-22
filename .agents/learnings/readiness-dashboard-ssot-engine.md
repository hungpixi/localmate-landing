# REAL SSOT READINESS ENGINE ARCHITECTURE & REAL DATA FETCHING

## 1. Nguyên tắc Cốt lõi (Core Principles)
- **Tuyệt đối không Hardcode Fallback Data ở Client (Tuân thủ R3 & R4 - AGENTS.md)**:
  Client (`ReadinessPage.tsx`) không bao giờ tự tạo dữ liệu giả trong `catch` block để đánh lừa giao diện. Nếu Backend gặp lỗi hoặc ngắt kết nối, Client sẽ hiển thị trạng thái `ErrorState` chuẩn nghiệp vụ cho người dùng thực hiện Thử lại (Retry).
- **Backend SSOT Computation**:
  Mọi chỉ số Readiness (Declared Score, Verified Score, Evidence Coverage, Blockers P0, Warnings P1, 6 nhóm Radar Gaps) đều phải được tính toán thực tế tại Backend Server qua `evaluateReadinessDecision` trong `server/services/readinessEngine.ts`.

## 2. Luồng Xử lý Dữ liệu Thực tế (Data Flow)
```
[Client: ReadinessPage.tsx]
  │
  ├── Request: GET /api/readiness/dashboard?market=EU&hsCode=0901.11.10
  ▼
[Backend: server/routes/readiness.ts]
  │
  ├── 1. Truy vấn Prisma Workspace, CompanyProfile & Documents thực tế từ DB D1.
  ├── 2. Chạy `evaluateReadinessDecision(workspaceId, companyName, hsCode, market)`.
  ├── 3. Tổng hợp chỉ số chứng từ (Tier 1 Legal, Tier 2 GPS Plots, Tier 3 Spec Sheets).
  ├── 4. Trả về JSON `ReadinessData` hoàn chỉnh chuẩn 6 nhóm Radar.
  ▼
[Client UI: ReadinessDashboard.tsx]
  └── Render Radar Chart & Báo cáo Năng lực thực tế.
```

## 3. Các File Đã Xử Lý Đơn Giản & Đúng Cốt Lõi
- **Đã xóa file learning bề mặt cũ**: `.agents/learnings/2026-07-22-api-fallback-and-404-handling.md`
- **Đã loại bỏ fallback giả ở Frontend**: `src/pages/Readiness/ReadinessPage.tsx`
- **Đã hoàn thiện endpoint thật ở Backend**: `server/routes/readiness.ts` (Route `GET /api/readiness/dashboard`)
