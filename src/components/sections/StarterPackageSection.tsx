import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { STARTER_PACKAGE } from '../../data/landingContent';
import { CheckCircle2, Clock, RotateCcw, ArrowRight, ShieldCheck, Sparkles, Zap, Laptop } from 'lucide-react';

export const StarterPackageSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bang-gia" style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="GÓI KHỞI TẠO TIÊU CHUẨN"
          title="Bảng giá khởi tạo trọn gói — Không chi phí ẩn"
          subtitle="Giải pháp toàn diện giúp doanh nghiệp nhỏ hiện diện chuyên nghiệp chỉ trong 3 - 7 ngày."
        />

        {/* Main Clean Light Card Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--color-border)',
            borderTop: '5px solid var(--color-primary)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
            transition: 'all var(--transition-base)'
          }}
        >
          <div className="starter-pricing-grid">
            {/* Left Column: Pricing & 3D Laptop Preview */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                borderRight: '1px solid var(--color-border)'
              }}
            >
              <div>
                {/* Badge Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.775rem',
                      fontWeight: 800,
                      backgroundColor: 'var(--color-primary-soft)',
                      color: 'var(--color-primary-dark)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    ✨ {STARTER_PACKAGE.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-dark)', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {STARTER_PACKAGE.name}
                </div>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h2 style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.85rem)', color: 'var(--color-text)', fontWeight: 900, lineHeight: 1, margin: 0 }}>
                    {STARTER_PACKAGE.price}
                  </h2>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {STARTER_PACKAGE.unit}
                  </span>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {STARTER_PACKAGE.subtitle}
                </p>

                {/* 3D Laptop Illustration Preview */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '0.85rem',
                    textAlign: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <img
                    src="/assets/illustrations/pricing-laptop-analytics.png"
                    alt="Laptop Analytics Demo"
                    style={{ maxHeight: '150px', width: 'auto', objectFit: 'contain' }}
                  />
                  <div style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)', fontWeight: 600, marginTop: '0.35rem' }}>
                    💻 Bàn giao website chuẩn SEO + Google Maps + Mã nguồn sở hữu 100%
                  </div>
                </div>

                {/* Duration & Revisions Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', backgroundColor: '#ffffff', color: 'var(--color-text)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', fontWeight: 600 }}>
                    <Clock size={14} color="var(--color-primary)" /> {STARTER_PACKAGE.timeline}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', backgroundColor: '#ffffff', color: 'var(--color-text)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', fontWeight: 600 }}>
                    <RotateCcw size={14} color="var(--color-primary)" /> {STARTER_PACKAGE.revisions}
                  </span>
                </div>
              </div>

              {/* Action Button & Guarantee */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button variant="primary" size="lg" onClick={scrollToForm} style={{ width: '100%', fontSize: '1rem', fontWeight: 700 }}>
                  Nhận bản demo 0đ trước <ArrowRight size={18} />
                </Button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    fontSize: '0.825rem',
                    color: 'var(--color-primary-dark)',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                >
                  <ShieldCheck size={16} color="var(--color-primary)" />
                  <span>Bàn giao nghiệm thu mới thanh toán 50% còn lại</span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist */}
            <div
              style={{
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
                Quyền lợi chi tiết gói {STARTER_PACKAGE.name}:
              </h3>

              {STARTER_PACKAGE.groups.map((group, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary-soft)',
                        color: 'var(--color-primary-dark)',
                        fontSize: '0.775rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {idx + 1}
                    </span>
                    <h4 style={{ color: 'var(--color-text)', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                      {group.title}
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '2rem', margin: 0 }}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .starter-pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 992px) {
          .starter-pricing-grid {
            grid-template-columns: 5fr 7fr;
          }
        }
      `}</style>
    </section>
  );
};



