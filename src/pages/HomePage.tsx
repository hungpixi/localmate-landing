import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
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

      {/* 2. Bạn đang muốn làm gì? — 5 Goal Categories (WIIFM) */}
      <ProblemMapperSection />

      {/* 3. Các dịch vụ LocalMate — 6 nhóm dịch vụ chính */}
      <ServiceHubSection />

      {/* 4. Dịch vụ theo ngành — Vertical Solution Hub */}
      <IndustrySolutionSection />

      {/* 5. Tự động chẩn đoán website miễn phí 30s */}
      <FreeWebsiteAudit />

      {/* 6. Dự án thực tế / Case Studies */}
      <DemoShowcaseSection />

      {/* 7. Bảng giá 40 món minh bạch */}
      <PricingMatrixSection />

      {/* Dịch vụ #40 — LocalMate Digital Care */}
      <DigitalCareSection />

      {/* 8. LocalMate Advisor Solution Composer (Section 7) */}
      <FreeAuditSection />

      {/* 9. Tại sao chọn LocalMate — 6 Cam kết cốt lõi */}
      <TrustSection />

      {/* 10. Quy trình 5 bước minh bạch */}
      <ProcessSection />

      {/* FAQ & Giải đáp thắc mắc */}
      <FAQSection />

      {/* 11. Knowledge Hub — SEO Content Cluster Preview */}
      <KnowledgeHubSection />
    </>
  );
};
