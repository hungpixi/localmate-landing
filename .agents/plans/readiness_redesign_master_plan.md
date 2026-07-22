# PHẦN F: KẾ HOẠCH TRIỂN KHAI THEO GIAI ĐOẠN (MASTER REFACTOR PLAN)

**Dự án:** Tái kiến trúc Trung tâm Điều phối Readiness Xuất khẩu  
**Phương châm:** Small Incremental Steps — Micro-Commits every 15 minutes  

---

## I. LỘ TRÌNH 6 PHASE CHUYỂN ĐỔI

```
Phase 0: Lock Domains & Customer Journey (Hoàn thành)
Phase 1: Redesign UI Components & 6-Block Layout (Hoàn thành)
Phase 2: Connect RESTful API & 3-Layer Scoring Engine (Hoàn thành)
Phase 3: Upgrade 5-Stage Actionable Roadmap & Evidence Table (Hoàn thành)
Phase 4: Verification & Typecheck Zero-Error (Hoàn thành)
Phase 5: Git Micro-Commit & Final Readiness Center Delivery (Hoàn thành)
```

---

## II. CHI TIẾT TỪNG PHASE

### Phase 0 — Khóa Định nghĩa Domain & Customer Journey (DONE)
- Đã xuất bản 6 file tài liệu kiến trúc tại `.agents/`.
- Tách biệt hoàn toàn Năng lực Nội tại với Cảnh báo Thị trường Rào cản Kỹ thuật.

### Phase 1 — Tái cấu trúc Layout UI 6 Khối (DONE)
- **Tác động File**:
  - [src/features/readiness/components/ReadinessExecutiveSummary.tsx](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/src/features/readiness/components/ReadinessExecutiveSummary.tsx) (New 65/35 Layout).
  - [src/features/readiness/components/CompactCapabilityRadar.tsx](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/src/features/readiness/components/CompactCapabilityRadar.tsx) (New ~280px Radar).
  - [src/features/readiness/components/ReadinessPriorityIssues.tsx](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/src/features/readiness/components/ReadinessPriorityIssues.tsx) (Unified Priority Table).
  - [src/features/readiness/components/ReadinessNextActions.tsx](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/src/features/readiness/components/ReadinessNextActions.tsx) (Top 3-5 Action Tasks).
  - [src/features/readiness/components/ReadinessRoadmapStages.tsx](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/src/features/readiness/components/ReadinessRoadmapStages.tsx) (5-Stage Actionable Roadmap).
  - [src/features/readiness/components/ReadinessEvidenceMatrix.tsx](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/src/features/readiness/components/ReadinessEvidenceMatrix.tsx) (Evidence Status Matrix).

### Phase 2 — Kết nối API Engine & 3-Layer Scoring (DONE)
- Cập nhật [server/routes/readiness.ts](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/server/routes/readiness.ts) và [server/services/readinessEngine.ts](file:///D:/03-Startups-Products/01-Active-Startups/exportmate-new/server/services/readinessEngine.ts) để trả về 3 lớp điểm số: `selfAssessedScore`, `verifiedScore`, và `marketReadinessScore`.

### Phase 3 — Kiểm thử UI Responsive & Zoom Standard (DONE)
- Kiểm tra trên các màn hình: 360px, 768px, 1024px, 1440px, Browser Zoom 100%, 125%, 150%.

### Phase 4 — TypeScript Typecheck (DONE)
- Chạy `npm run typecheck` đạt 0 lỗi.

### Phase 5 — Micro-Commit & Đóng gói (DONE)
- Commit các khối mã hóa chuẩn theo Quy tắc Rule 14.
