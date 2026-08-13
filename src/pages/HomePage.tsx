import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ConceptGeneratorSection } from '../components/concept/ConceptGeneratorSection';
import { ProblemMapperSection } from '../components/sections/ProblemMapperSection';
import { ServiceHubSection } from '../components/sections/ServiceHubSection';
import { IndustrySolutionSection } from '../components/sections/IndustrySolutionSection';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { FreeWebsiteAudit } from '../components/audit/FreeWebsiteAudit';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { DigitalCareSection } from '../components/sections/DigitalCareSection';
import { FreeAuditSection } from '../components/sections/FreeAuditSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { FAQSection } from '../components/sections/FAQSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero — Có việc digital? Để LocalMate làm */}
      <HeroSection />

      {/* 2. AI Concept Generator — Xem bản thiết kế định hướng 0đ tức thời */}
      <ConceptGeneratorSection />

      {/* 3. Bạn đang muốn làm gì? — 5 Goal Categories (WIIFM) */}
      <ProblemMapperSection />

      {/* 4. Các dịch vụ LocalMate — 6 nhóm dịch vụ chính */}
      <ServiceHubSection />

      {/* 5. Dịch vụ theo ngành — Vertical Solution Hub */}
      <IndustrySolutionSection />

      {/* 6. Tự động chẩn đoán website miễn phí 30s */}
      <FreeWebsiteAudit />

      {/* 7. Dự án thực tế / Case Studies */}
      <DemoShowcaseSection />

      {/* 8. Bảng giá 40 món minh bạch */}
      <PricingMatrixSection />

      {/* Dịch vụ #40 — LocalMate Digital Care */}
      <DigitalCareSection />

      {/* 9. LocalMate Advisor Solution Composer (Section 7) */}
      <FreeAuditSection />

      {/* 10. Tại sao chọn LocalMate — 6 Cam kết cốt lõi */}
      <TrustSection />

      {/* 11. Quy trình 5 bước minh bạch */}
      <ProcessSection />

      {/* FAQ & Giải đáp thắc mắc */}
      <FAQSection />

      {/* 12. Knowledge Hub — SEO Content Cluster Preview */}
      <KnowledgeHubSection />
    </>
  );
};
