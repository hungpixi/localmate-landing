import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Eye,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useRouter } from '../layout/Router';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '4rem 0 3.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
      id="hero"
    >
      <Container size="lg">
        {/* Main Hero Content Layout */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          {/* Top Pill Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.825rem',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                backgroundColor: 'var(--color-teal-soft)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Zap size={14} color="var(--color-teal)" /> ĐỘI DIGITAL GỌN NHẸ CHO DOANH NGHIỆP NHỎ
            </span>
          </div>

          {/* Main Commercial Headline */}
          <h1
            style={{
              fontSize: 'var(--font-size-h1)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}
          >
            Có việc digital? Để LocalMate làm.
          </h1>

          {/* Subtitle Value Proposition */}
          <p
            className="subtitle"
            style={{
              fontSize: 'var(--font-size-body-lg)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '720px',
              margin: '0 auto 2rem auto'
            }}
          >
            <strong>Website · Google Maps · Quảng cáo · CRM · Tự động hóa</strong>. Sửa lỗi kỹ thuật từ <strong>99.000đ</strong>. Website từ <strong>590.000đ</strong>. Xem định hướng giao diện miễn phí trước khi quyết định — chỉ đặt cọc 50% khi chính thức triển khai.
          </p>

          {/* Main Action Buttons (CTAs) */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const el = document.getElementById('concept-generator');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/advisor');
                }
              }}
              className="btn-primary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              <Sparkles size={18} />
              <span>Tạo concept giao diện 0đ</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('/bang-gia')}
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-navy)',
                padding: '0.85rem 1.6rem',
                fontSize: '0.95rem'
              }}
            >
              <span>Xem dịch vụ &amp; bảng giá</span>
            </Button>
          </div>

          {/* Fair Risk Sharing Trust Bar */}
          <div
            style={{
              backgroundColor: '#f8fbfa',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1rem 1.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--color-navy)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Eye size={16} color="var(--color-teal-dark)" />
              <span>Xem định hướng trước</span>
            </div>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="var(--color-teal-dark)" />
              <span>Cọc 50% khi triển khai</span>
            </div>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--color-teal-dark)" />
              <span>Không phí ẩn</span>
            </div>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Globe size={16} color="var(--color-teal-dark)" />
              <span>Bạn sở hữu 100% tài khoản</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
