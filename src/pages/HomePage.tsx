import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemMapperSection } from '../components/sections/ProblemMapperSection';
import { ServiceHubSection } from '../components/sections/ServiceHubSection';
import { SolutionJourneySection } from '../components/sections/SolutionJourneySection';
import { PainPointsSection } from '../components/sections/PainPointsSection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ClientRequirementsSection } from '../components/sections/ClientRequirementsSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { DigitalCareSection } from '../components/sections/DigitalCareSection';
import { TrustSection } from '../components/sections/TrustSection';
import { FAQSection } from '../components/sections/FAQSection';
import { KnowledgeHubSection } from '../components/sections/KnowledgeHubSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Dynamic SEO Meta for Homepage (Optimized for Customer Search Intent) */}
      <SEOHead
        title="LocalMate | Thiết kế Website, Google Maps, Google Ads cho Doanh nghiệp nhỏ"
        description="LocalMate làm website, tối ưu Google Maps, Google Ads và nội dung cho doanh nghiệp nhỏ. Giá rõ ràng, triển khai nhanh, hỗ trợ toàn quốc."
        canonicalPath="/"
      />

      {/* 1. Hero — Giúp doanh nghiệp nhỏ có website, lên Google và tìm thêm khách hàng */}
      <HeroSection />

      {/* 2. Khách đang cần việc gì? — Phân nhóm theo lời khách hàng nói (Section 18) */}
      <ProblemMapperSection />

      {/* 3. Menu dịch vụ + Giá từ rõ ràng (Section 20) */}
      <ServiceHubSection />

      {/* 4. Vì sao LocalMate phù hợp doanh nghiệp nhỏ — Lộ trình & Thấu hiểu nỗi lo */}
      <SolutionJourneySection />
      <PainPointsSection />

      {/* 5. Gói Khởi tạo & Dịch vụ hoạt động thế nào — Website, Google Maps, Nội dung */}
      <StarterPackageSection />
      <ClientRequirementsSection />
      <ContentPackageSection />

      {/* 6. Dự án thật & Trải nghiệm thực tế */}
      <DemoShowcaseSection />

      {/* 7. Quy trình làm việc 5 bước đơn giản & minh bạch */}
      <ProcessSection />

      {/* 8. Bảng giá toàn bộ dịch vụ niêm yết */}
      <PricingMatrixSection />
      <DigitalCareSection />

      {/* 10. Pháp nhân CÔNG TY TNHH LOCALMATE & Cam kết minh bạch */}
      <TrustSection />

      {/* 11. FAQ Giải đáp thắc mắc thường gặp */}
      <FAQSection />

      {/* 12. Hướng dẫn tìm khách & Kiến thức Marketing thực chiến */}
      <KnowledgeHubSection />
    </>
  );
};
