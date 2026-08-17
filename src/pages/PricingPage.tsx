import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { DigitalCareSection } from '../components/sections/DigitalCareSection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { Sparkles, Edit3 } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const PricingPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Bảng Giá Dịch Vụ Website & Marketing Cho Doanh Nghiệp Nhỏ | LocalMate"
        description="Bảng giá công khai của LocalMate: Website 1 trang từ 490k, Google Maps từ 299k, Google Ads từ 390k, Viết bài Facebook từ 990k/tháng, Gói Khởi tạo 2.900.000đ."
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
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-primary)" /> BẢNG GIÁ CÔNG KHAI
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ &amp; Gói Chăm Sóc Hàng Tháng
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Không chi phí ẩn. Báo giá trước rõ ràng từng đầu việc. Khách hàng kiểm tra nghiệm thu hài lòng rồi mới thanh toán.
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
                color: 'var(--color-primary-dark)',
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
