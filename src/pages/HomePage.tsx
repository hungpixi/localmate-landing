import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemMapperSection } from '../components/sections/ProblemMapperSection';
import { ServiceHubSection } from '../components/sections/ServiceHubSection';
import { IndustrySolutionSection } from '../components/sections/IndustrySolutionSection';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { FreeAuditSection } from '../components/sections/FreeAuditSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { FAQSection } from '../components/sections/FAQSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero — Nói thẳng LocalMate làm gì */}
      <HeroSection />

      {/* 2. Bạn đang cần làm gì? — Problem to Service Mapper */}
      <ProblemMapperSection />

      {/* 3. Các dịch vụ LocalMate — 6 nhóm dịch vụ chính */}
      <ServiceHubSection />

      {/* 4. Dịch vụ theo ngành — Vertical Solution Hub */}
      <IndustrySolutionSection />

      {/* 5. Dự án thực tế / Case Studies */}
      <DemoShowcaseSection />

      {/* 6. Bảng giá khởi điểm — Service Pricing Matrix */}
      <PricingMatrixSection />

      {/* 7. Không biết chọn dịch vụ nào? — USP Free Audit & Consultation */}
      <FreeAuditSection />

      {/* 8. Tại sao chọn LocalMate — 6 Cam kết cốt lõi */}
      <TrustSection />

      {/* 9. Quy trình 5 bước minh bạch */}
      <ProcessSection />

      {/* FAQ & Giải đáp thắc mắc */}
      <FAQSection />

      {/* 10. Knowledge Hub — SEO Content Cluster Preview */}
      <KnowledgeHubSection />
    </>
  );
};
