import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { SolutionJourneySection } from '../components/sections/SolutionJourneySection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { ProcessSection } from '../components/sections/ProcessSection';
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
import { FAQSection } from '../components/sections/FAQSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero — Có việc digital? Để LocalMate làm + 3 Tình trạng */}
      <HeroSection />

      {/* 2. Lộ trình 3 giai đoạn — Khởi tạo, Xây dựng, Phát triển */}
      <SolutionJourneySection />

      {/* 3. Gói Khởi Tạo Hiện Diện Số 2.900.000đ */}
      <StarterPackageSection />

      {/* 4. Gói Nội Dung & Bảo Trì Hàng Tháng 990.000đ */}
      <ContentPackageSection />

      {/* 5. Quy trình 5 bước tinh gọn & minh bạch */}
      <ProcessSection />

      {/* 6. AI Concept Generator — Xem bản thiết kế định hướng 0đ tức thời */}
      <ConceptGeneratorSection />

      {/* 7. Bạn đang muốn làm gì? — 5 Goal Categories (WIIFM) */}
      <ProblemMapperSection />

      {/* 8. Các dịch vụ LocalMate — 6 nhóm dịch vụ chính */}
      <ServiceHubSection />

      {/* 9. Dịch vụ theo ngành — Vertical Solution Hub */}
      <IndustrySolutionSection />

      {/* 10. Tự động chẩn đoán website miễn phí 30s */}
      <FreeWebsiteAudit />

      {/* 11. Dự án thực tế / Case Studies */}
      <DemoShowcaseSection />

      {/* 12. Bảng giá 40 món minh bạch */}
      <PricingMatrixSection />

      {/* 13. Dịch vụ #40 — LocalMate Digital Care */}
      <DigitalCareSection />

      {/* 14. LocalMate Advisor Solution Composer */}
      <FreeAuditSection />

      {/* 15. 8 Trụ cột niềm tin & Pháp nhân CÔNG TY TNHH LOCALMATE */}
      <TrustSection />

      {/* 16. FAQ & Giải đáp thắc mắc */}
      <FAQSection />

      {/* 17. Knowledge Hub — SEO Content Cluster Preview */}
      <KnowledgeHubSection />
    </>
  );
};

