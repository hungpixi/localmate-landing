import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { DigitalCareSection } from '../components/sections/DigitalCareSection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { Sparkles, Edit3, ShieldCheck } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const PricingPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Bảng Giá Dịch Vụ Marketing & Thiết Kế Website Minh Bạch"
        description="Tra cứu biểu phí dịch vụ niêm yết của LocalMate: Từ gói Landing Page 490k, Khởi tạo 2.9M đến các gói chăm sóc nội dung 990k/tháng. Bàn giao rồi mới thanh toán."
        canonicalPath="/bang-gia"
        breadcrumbs={[
          { name: 'Bảng giá', url: '/bang-gia' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Bảng giá', url: '/bang-gia' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-teal)" /> BÁO GIÁ NIÊM YẾT MINH BẠCH
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ &amp; Gói Chăm Sóc Định Kỳ
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Không phí ẩn. Báo giá niêm yết rõ ràng từng đầu việc trước khi triển khai. Khách hàng trực tiếp nghiệm thu xong mới thanh toán.
          </p>

          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/admin/pricing')}
              style={{
                padding: '0.5rem 1.1rem',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Edit3 size={14} /> Mở CMS Quản Trị Bảng Giá
            </button>
          </div>
        </div>
      </Container>

      {/* 40 Services Catalogue Section */}
      <PricingMatrixSection />

      {/* Service #40 LocalMate Digital Care Modular Tiers */}
      <DigitalCareSection />

      {/* Original Starter & Content Package Summaries */}
      <StarterPackageSection />
      <ContentPackageSection />
    </div>
  );
};
