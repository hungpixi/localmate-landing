# PHẦN E: KIẾN TRÚC KỸ THUẬT & API CONTRACTS (TECHNICAL ARCHITECTURE)

**Phiên bản:** 2.0.0  
**Backend Runtime:** Cloudflare Workers / Express Server  
**Database:** Cloudflare D1 / SQLite via Prisma ORM  

---

## I. MÔ HÌNH DỮ LIỆU CSLD (PRISMA SCHEMA EXTENSION)

```prisma
model ReadinessSnapshot {
  id                      String   @id @default(uuid())
  workspaceId             String
  productId               String?
  targetMarket            String   // e.g. "EU", "US", "DE"
  
  selfAssessedScore       Int      @default(0)
  verifiedScore           Int      @default(0)
  marketReadinessScore    Int      @default(0)
  
  status                  String   @default("NOT_READY") // "NOT_READY", "CONDITIONAL", "BUYER_READY"
  blockersCount           Int      @default(0)
  missingEvidencesCount   Int      @default(0)
  
  strongestDimension      String?  // e.g. "Năng lực sản xuất"
  weakestDimension        String?  // e.g. "Truy xuất nguồn gốc"
  
  ruleVersion             String   @default("2026.1")
  calculatedAt            DateTime @default(now())

  @@index([workspaceId, targetMarket])
}

model EvidenceArtifact {
  id                      String   @id @default(uuid())
  workspaceId             String
  documentId              String?
  
  title                   String
  category                String   // "LEGAL", "CERTIFICATE", "GPS_PLOT", "LAB_TEST", "SPEC_SHEET"
  verificationStatus      String   @default("PENDING") // "NOT_PROVIDED", "UPLOADED", "PENDING", "VERIFIED", "REJECTED", "EXPIRING"
  
  scoreImpact             Int      @default(5)
  expireDate              DateTime?
  sourceUrl               String?
  verifiedAt              DateTime?
  
  createdAt               DateTime @default(now())
  updatedAt               DateTime @updatedAt
}
```

---

## II. DANH SÁCH API ENDPOINTS CHUẨN

1. `GET /api/readiness/context`: Lấy thông tin ngữ cảnh Workspace + Master Product + Target Market hiện tại.
2. `GET /api/readiness/summary`: Lấy thông tin 6 Khối giao diện của Readiness Executive Summary.
3. `GET /api/readiness/priority-issues`: Lấy danh sách Blocker P0 & Warning P1 xếp theo thứ tự mức độ nghiêm trọng.
4. `GET /api/readiness/next-actions`: Lấy Top 3-5 công việc gần nhất cần làm.
5. `GET /api/readiness/roadmap-stages`: Lấy lộ trình 5 giai đoạn có trạng thái task và dependency.
6. `GET /api/readiness/evidence-matrix`: Lấy bảng trạng thái bằng chứng và xác minh.
7. `POST /api/readiness/evidence/submit`: Nộp bằng chứng mới để đưa vào hàng chờ xác minh.
8. `POST /api/readiness/recalculate`: Kích hoạt tính lại điểm SSOT khi có bằng chứng được duyệt (`VERIFIED`).
