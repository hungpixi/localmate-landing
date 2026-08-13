import React from 'react';
import { Container } from '../components/ui/Container';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { StarterPackageSection } from '../components/sections/StarterPackageSection';
import { ContentPackageSection } from '../components/sections/ContentPackageSection';
import { Sparkles } from 'lucide-react';

export const PricingPage: React.FC = () => {
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
            <Sparkles size={15} color="var(--color-teal)" /> LOCALMATE PRICING MATRIX
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ Minh Bạch &amp; Gói Combo Cố Định
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Không phí ẩn. Báo giá niêm yết trước khi làm. Khách hàng trực tiếp nghiệm thu xong mới thanh toán.
          </p>
        </div>
      </Container>

      <PricingMatrixSection />
      <StarterPackageSection />
      <ContentPackageSection />
    </div>
  );
};
