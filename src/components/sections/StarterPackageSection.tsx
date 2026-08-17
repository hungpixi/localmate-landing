import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { STARTER_PACKAGE } from '../../data/landingContent';
import { CheckCircle2, Clock, RotateCcw, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const StarterPackageSection: React.FC = () => {
  const { navigate } = useRouter();

  const scrollToForm = () => {
    const el = document.querySelector('#bang-gia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/bang-gia');
    }
  };

  return (
    <section id="goi-khoi-tao" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#fafbfa', borderBottom: '1px solid var(--color-border)' }}>
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> GÓI KHỞI TẠO TOÀN DIỆN
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bảng giá khởi tạo trọn gói, không chi phí ẩn
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Giải pháp trọn gói giúp cửa hàng và doanh nghiệp nhỏ hiện diện uy tín chỉ trong 3 đến 7 ngày.
          </p>
        </div>

        {/* Main Clean Light Card Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--color-border)',
            borderTop: '4px solid var(--color-primary)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }}
        >
          <div className="starter-pricing-grid">
            {/* Left Column: Pricing & Preview */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                borderRight: '1px solid var(--color-border)'
              }}
            >
              <div>
                {/* Badge Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      backgroundColor: 'var(--color-primary-soft)',
                      color: 'var(--color-primary-dark)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--color-primary-border)'
                    }}
                  >
                    ✨ {STARTER_PACKAGE.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-primary-dark)', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {STARTER_PACKAGE.name}
                </div>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)', color: 'var(--color-orange-dark)', fontWeight: 900, lineHeight: 1, margin: 0 }}>
                    {STARTER_PACKAGE.price}
                  </h3>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {STARTER_PACKAGE.unit}
                  </span>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {STARTER_PACKAGE.subtitle}
                </p>

                {/* Duration & Revisions Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', backgroundColor: '#ffffff', color: 'var(--color-navy)', padding: '0.3rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontWeight: 600 }}>
                    <Clock size={14} color="var(--color-primary)" /> Bàn giao: {STARTER_PACKAGE.timeline}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', backgroundColor: '#ffffff', color: 'var(--color-navy)', padding: '0.3rem 0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontWeight: 600 }}>
                    <RotateCcw size={14} color="var(--color-primary)" /> {STARTER_PACKAGE.revisions}
                  </span>
                </div>
              </div>

              {/* Action Button & Guarantee */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button variant="primary" size="lg" onClick={scrollToForm} fullWidth style={{ fontWeight: 700 }}>
                  <span>Nhận website demo 0đ trước</span>
                  <ArrowRight size={17} />
                </Button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    fontSize: '0.825rem',
                    color: 'var(--color-primary-dark)',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                >
                  <ShieldCheck size={16} color="var(--color-primary)" />
                  <span>Nghiệm thu hài lòng rồi mới thanh toán</span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist */}
            <div
              style={{
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.25rem'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                Những gì bạn nhận được trong gói {STARTER_PACKAGE.name}:
              </h3>

              {STARTER_PACKAGE.groups.map((group, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary-soft)',
                        color: 'var(--color-primary-dark)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {idx + 1}
                    </span>
                    <h4 style={{ color: 'var(--color-navy)', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                      {group.title}
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingLeft: '1.85rem', margin: 0 }}>
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={15} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
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

        @media (min-width: 900px) {
          .starter-pricing-grid {
            grid-template-columns: 5fr 7fr;
          }
        }
      `}</style>
    </section>
  );
};
