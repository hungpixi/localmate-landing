import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { STARTER_PACKAGE } from '../../data/landingContent';
import { CheckCircle2, Clock, RotateCcw, ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export const StarterPackageSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bang-gia" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="MINH BẠCH & TIẾT KIỆM"
          title="Bảng giá khởi tạo tinh gọn — Không chi phí ẩn"
          subtitle="Giải pháp trọn gói giúp doanh nghiệp nhỏ hiện diện chuyên nghiệp chỉ trong 7 - 10 ngày."
        />

        {/* Main Clean Light Card Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid var(--color-border)',
            borderTop: '5px solid var(--color-teal)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
            transition: 'all var(--transition-base)'
          }}
        >
          <div className="starter-pricing-grid">
            {/* Left Column: Pricing & Value Prop */}
            <div
              style={{
                backgroundColor: '#f4f9f8',
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                borderRight: '1px solid var(--color-border)'
              }}
            >
              <div>
                {/* Badge Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <Badge variant="orange" size="md">
                    ✨ {STARTER_PACKAGE.badge}
                  </Badge>
                </div>

                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal-dark)', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {STARTER_PACKAGE.name}
                </div>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1rem' }}>
                  <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', color: 'var(--color-navy)', fontWeight: 800, lineHeight: 1 }}>
                    {STARTER_PACKAGE.price}
                  </h2>
                  <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {STARTER_PACKAGE.unit}
                  </span>
                </div>

                <p style={{ color: 'var(--color-text)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {STARTER_PACKAGE.subtitle}
                </p>

                {/* Duration & Revisions Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', backgroundColor: '#ffffff', color: 'var(--color-navy)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', fontWeight: 600, boxShadow: 'var(--shadow-sm)' }}>
                    <Clock size={15} color="var(--color-teal)" /> {STARTER_PACKAGE.timeline}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', backgroundColor: '#ffffff', color: 'var(--color-navy)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', fontWeight: 600, boxShadow: 'var(--shadow-sm)' }}>
                    <RotateCcw size={15} color="var(--color-teal)" /> {STARTER_PACKAGE.revisions}
                  </span>
                </div>

                {/* Highlight Callout */}
                <div
                  style={{
                    backgroundColor: '#e6f7f4',
                    border: '1px solid rgba(15, 169, 154, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Zap size={20} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-navy)', fontWeight: 600, lineHeight: 1.45 }}>
                    Xây dựng trọn gói nền móng hiện diện chuẩn SEO, sẵn sàng nhận khách ngay.
                  </span>
                </div>
              </div>

              {/* Action Button & Guarantee */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <Button variant="primary" size="lg" onClick={scrollToForm} style={{ width: '100%', fontSize: '1.05rem', fontWeight: 700 }}>
                  Nhận bản demo trước <ArrowRight size={20} />
                </Button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-teal-dark)',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                >
                  <ShieldCheck size={17} color="var(--color-teal)" />
                  <span>Bàn giao nghiệm thu mới thanh toán</span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist */}
            <div
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.75rem'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '-0.5rem' }}>
                Quyền lợi chi tiết gói {STARTER_PACKAGE.name}:
              </h3>

              {STARTER_PACKAGE.groups.map((group, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-teal-soft)',
                        color: 'var(--color-teal-dark)',
                        fontSize: '0.825rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {idx + 1}
                    </span>
                    <h4 style={{ color: 'var(--color-navy)', fontSize: '1.05rem', fontWeight: 700 }}>
                      {group.title}
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '2.1rem' }}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.935rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={17} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: 3 }} />
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


