import React from 'react';
import { Container } from '../components/ui/Container';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { DigitalCareSection } from '../components/sections/DigitalCareSection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { Sparkles, Edit3 } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const PricingPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
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
            <Sparkles size={15} color="var(--color-teal)" /> LOCALMATE 40 CATALOGUE PRICING
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ Minh Bạch &amp; Gói Chăm Sóc Hàng Tháng
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Không phí ẩn. Báo giá niêm yết trước khi làm. Khách hàng trực tiếp nghiệm thu xong mới thanh toán.
          </p>

          <div style={{ marginTop: '1.25rem' }}>
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
