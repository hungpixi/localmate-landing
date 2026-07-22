import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { SOLUTION_STEPS } from '../../data/landingContent';
import { FolderCheck, Globe2, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const SolutionJourneySection: React.FC = () => {
  const stepIcons = [
    <FolderCheck key="1" size={28} color="var(--color-teal-dark)" />,
    <Globe2 key="2" size={28} color="var(--color-navy)" />,
    <TrendingUp key="3" size={28} color="var(--color-orange-dark)" />
  ];

  const themeColors = [
    { primary: 'var(--color-teal)', bg: 'var(--color-teal-soft)', text: 'var(--color-teal-dark)', border: 'var(--color-teal)' },
    { primary: 'var(--color-navy)', bg: '#e6f0f3', text: 'var(--color-navy)', border: 'var(--color-navy)' },
    { primary: 'var(--color-orange)', bg: '#fff4e6', text: 'var(--color-orange-dark)', border: 'var(--color-orange)' }
  ];

  return (
    <section id="dich-vu" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="GIẢI PHÁP THỰC TẾ & TINH GỌN"
          title="LocalMate không bán công nghệ phức tạp. Chúng tôi giúp bạn làm đúng thứ cần thiết trước."
          subtitle="Hành trình 3 bước số hóa tinh gọn giúp doanh nghiệp nhỏ tự tin chào khách online."
        />

        {/* Visual Transformation Flow Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.25rem 1.75rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            <span style={{ backgroundColor: '#edf2f1', color: 'var(--color-text-muted)', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem' }}>1</span>
            <span>Thông tin rời rạc trong Zalo</span>
          </div>

          <ArrowRight size={20} color="var(--color-teal)" className="hide-mobile" style={{ opacity: 0.7 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 700, color: 'var(--color-navy)', fontSize: '0.975rem' }}>
            <span style={{ backgroundColor: 'var(--color-teal-soft)', color: 'var(--color-teal-dark)', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>2</span>
            <span>Hiện diện số rõ ràng & uy tín</span>
          </div>

          <ArrowRight size={20} color="var(--color-teal)" className="hide-mobile" style={{ opacity: 0.7 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--color-orange-dark)', fontSize: '1rem' }}>
            <span style={{ backgroundColor: 'var(--color-orange)', color: 'var(--color-navy-deep)', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem' }}>3</span>
            Khách dễ tin & chủ động liên hệ
          </div>
        </div>

        {/* 3-Step Journey Timeline Grid */}
        <div className="solution-timeline-grid">
          {SOLUTION_STEPS.map((step, idx) => {
            const theme = themeColors[idx];
            return (
              <Card
                key={step.step}
                variant="surface"
                className="interactive-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  padding: '2rem 1.75rem',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border)',
                  borderTop: `5px solid ${theme.border}`,
                  position: 'relative'
                }}
              >
                {/* Header Step Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: theme.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {stepIcons[idx]}
                  </div>

                  <span
                    style={{
                      backgroundColor: theme.bg,
                      color: theme.text,
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    BƯỚC {step.step}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {step.title}
                  </h3>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.text }}>
                    {step.subtitle}
                  </span>
                </div>

                {/* Items Checklist */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginTop: '0.5rem' }}>
                  {step.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.935rem',
                        color: 'var(--color-text)',
                        fontWeight: 500
                      }}
                    >
                      <CheckCircle2 size={18} color={theme.border} style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

