import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { SOLUTION_STEPS } from '../../data/landingContent';
import { CheckCircle2, ArrowRight, Compass } from 'lucide-react';

export const SolutionJourneySection: React.FC = () => {
  const stepIconImages = [
    '/assets/icons/roadmap-step1-web-globe.png',
    '/assets/icons/roadmap-step2-shield-check.png',
    '/assets/icons/roadmap-step3-growth-chart.png'
  ];

  const themeBorders = [
    'var(--color-primary)',
    'var(--color-primary-light)',
    'var(--color-orange)'
  ];

  return (
    <section id="lo-trinh" style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="LỘ TRÌNH 3 GIAI ĐOẠN TINH GỌN"
          title="LocalMate không bán công nghệ phức tạp. Chúng tôi giúp bạn làm đúng thứ cần thiết trước."
          subtitle="Hành trình số hóa rõ ràng, minh bạch từng giai đoạn giúp doanh nghiệp địa phương tự tin có khách online."
        />

        {/* Visual Transformation Banner with Illustration */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.5rem 2rem',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            alignItems: 'center'
          }}
          className="roadmap-header-banner"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '0.85rem' }}>
              <Compass size={18} color="var(--color-primary)" />
              <span>ĐỊNH HƯỚNG TỪNG BƯỚC VỮNG CHẮC</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
              Từ số 0 đến cỗ máy thu hút khách hàng ổn định
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
              Không nhảy cóc, không lãng phí ngân sách vào quảng cáo đắt đỏ khi chưa có nền tảng uy tín.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/illustrations/roadmap-flag-path.png"
              alt="Roadmap to success"
              style={{ maxHeight: '110px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* 3-Step Journey Cards Grid */}
        <div className="solution-timeline-grid">
          {SOLUTION_STEPS.map((step, idx) => {
            return (
              <Card
                key={step.step}
                variant="surface"
                className="interactive-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  padding: '1.75rem',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border)',
                  borderTop: `4px solid ${themeBorders[idx]}`,
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                {/* Header Step 3D Icon & Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px'
                    }}
                  >
                    <img
                      src={stepIconImages[idx]}
                      alt={`Giai đoạn ${step.step}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  <span
                    style={{
                      backgroundColor: 'var(--color-primary-soft)',
                      color: 'var(--color-primary-dark)',
                      fontSize: '0.775rem',
                      fontWeight: 800,
                      padding: '0.35rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    GIAI ĐOẠN {step.step}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', fontWeight: 800, marginBottom: '0.3rem' }}>
                    {step.title}
                  </h3>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    {step.subtitle}
                  </span>
                </div>

                {/* Items Checklist */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.25rem', padding: 0 }}>
                  {step.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>

      <style>{`
        .roadmap-header-banner {
          grid-template-columns: 1fr;
        }

        .solution-timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .roadmap-header-banner {
            grid-template-columns: 2fr 1fr;
          }
          .solution-timeline-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};


