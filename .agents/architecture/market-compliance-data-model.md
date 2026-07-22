# DATA MODEL SPECIFICATION: MARKET COMPLIANCE & READINESS DOMAIN

**Phiên bản:** 1.0.0  
**Hệ CSDL:** Cloudflare D1 / SQLite via Prisma ORM  

---

## I. MÔ HÌNH THỰC THỂ NÂNG CẤP (ENTITY RELATIONSHIPS)

```prisma
// ==========================================
// TARGET MARKET & COMPLIANCE DOMAIN MODELS
// ==========================================

model ExportMarket {
  id               String              @id @default(uuid())
  code             String              @unique // e.g. "EU", "US", "CN", "JP"
  name             String
  flagEmoji        String
  region           String
  description      String?
  createdAt        DateTime            @default(now())
  updatedAt        DateTime            @updatedAt
  requirements     MarketRequirement[]
  assessments      MarketAssessment[]
}

model MarketRequirement {
  id                      String   @id @default(uuid())
  marketId                String
  market                  ExportMarket @relation(fields: [marketId], references: [id], onDelete: Cascade)
  hsCodeScope             String   // e.g. "0901.*" or "ALL"
  category                String   // "LEGAL", "SPS_TBT", "CERTIFICATE", "TRACEABILITY", "TARIFF"
  title                   String
  description             String
  legalBasis              String?  // e.g. "EU Regulation 2023/1115"
  sourceUrl               String?  // Nguồn dẫn luật chính thức
  effectiveFrom           DateTime?
  lastVerifiedAt          DateTime @default(now())
  verificationStatus      String   @default("VERIFIED") // "VERIFIED", "PROVISIONAL", "DEMO_ONLY"
  ruleVersion             String   @default("1.0.0")
  severity                String   @default("P0") // "P0_BLOCKER", "P1_WARNING", "P2_INFO"
  
  complianceGaps          ComplianceGap[]

  @@index([marketId, hsCodeScope])
}

model MarketAssessment {
  id                   String   @id @default(uuid())
  projectId            String
  project              ExportProject @relation(fields: [projectId], references: [id], onDelete: Cascade)
  marketId             String
  market               ExportMarket  @relation(fields: [marketId], references: [id], onDelete: Cascade)
  
  assessmentStatus     String   @default("COMPLETED") // "NOT_ASSESSED", "INSUFFICIENT_DATA", "IN_PROGRESS", "COMPLETED"
  estimatedTariffRate  Float?   // e.g. 0.0 (EVFTA 0%)
  tariffNote           String?  // e.g. "Yêu cầu Chứng nhận Xuất xứ EUR.1"
  mandatoryRulesCount  Int      @default(0)
  passedRulesCount     Int      @default(0)
  blockerGapsCount     Int      @default(0)
  confidenceLevel      String   @default("HIGH") // "HIGH", "MEDIUM", "LOW"
  ruleSetVersion       String   @default("2026.1")
  assessedAt           DateTime @default(now())

  gaps                 ComplianceGap[]

  @@index([projectId, marketId])
}

model ComplianceGap {
  id                   String           @id @default(uuid())
  assessmentId         String
  assessment           MarketAssessment @relation(fields: [assessmentId], references: [id], onDelete: Cascade)
  requirementId        String?
  requirement          MarketRequirement? @relation(fields: [requirementId], references: [id], onDelete: SetNull)
  
  title                String
  description          String
  severity             String           @default("P0") // "P0", "P1", "P2"
  remediationAction    String
  remediationRoute     String?          // Direct link inside app, e.g. "/dashboard/documents"
  status               String           @default("OPEN") // "OPEN", "IN_PROGRESS", "RESOLVED"
  
  createdAt            DateTime         @default(now())
  updatedAt            DateTime         @updatedAt
}
```

---

## II. GIẢI THÍCH CÁC TRƯỜNG BẮT BUỘC (SSOT RULES)

1. **`sourceUrl` & `legalBasis`**: Đảm bảo mọi rào cản kỹ thuật được đưa ra đều có trích dẫn văn bản pháp lý chính thức (ví dụ: Nghị định, Thông tư, Quy định EU 2023/1115).
2. **`verificationStatus`**: Phân định rõ ràng dữ liệu đã được chuyên gia kiểm định (`VERIFIED`), dữ liệu tạm tính (`PROVISIONAL`), hoặc dữ liệu chỉ dùng trong chế độ trải nghiệm (`DEMO_ONLY`).
3. **`assessmentStatus`**: Loại bỏ con số % mơ hồ. Trả về đúng trạng thái đánh giá (`NOT_ASSESSED`, `INSUFFICIENT_DATA`, `COMPLETED`).
