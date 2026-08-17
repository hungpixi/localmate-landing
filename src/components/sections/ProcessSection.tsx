import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { PROCESS_STEPS } from '../../data/landingContent';
import { Send, PhoneCall, Layout, CheckSquare, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Send key="1" size={20} />,
    <PhoneCall key="2" size={20} />,
    <Layout key="3" size={20} />,
    <CheckSquare key="4" size={20} />,
    <ShieldCheck key="5" size={22} />
  ];

  return (
    <section id="quy-trinh" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-surface)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="QUY TRÌNH HỢP TÁC ĐƠN GIẢN"
          title="Bạn không cần biết công nghệ. Chỉ cần kể cho LocalMate bạn đang làm gì."
          subtitle="LocalMate sẽ gánh vác toàn bộ khâu kỹ thuật để bạn yên tâm tập trung làm nghề."
        />

        {/* 5 Step Process Grid */}
        <div className="process-timeline-grid">
          {PROCESS_STEPS.map((step, idx) => {
            const isHighlight = step.highlight || idx === 4;

            return (
              <div
                key={step.number}
                style={{
                  backgroundColor: isHighlight ? '#fff9f5' : '#ffffff',
                  border: isHighlight ? '2px solid var(--color-orange)' : '1px solid var(--color-border)',
                  borderTop: isHighlight ? '4px solid var(--color-orange)' : '4px solid var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.35rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  boxShadow: isHighlight ? '0 8px 20px rgba(255, 107, 0, 0.15)' : 'var(--shadow-sm)',
                  transition: 'all var(--transition-base)',
                  position: 'relative'
                }}
                className="interactive-card"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: isHighlight ? 'var(--color-orange-dark)' : 'var(--color-primary-dark)',
                        lineHeight: 1
                      }}
                    >
                      {step.number}
                    </span>

                    <div
                      style={{
                        color: isHighlight ? '#ffffff' : 'var(--color-primary-dark)',
                        backgroundColor: isHighlight ? 'var(--color-orange)' : 'var(--color-primary-soft)',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isHighlight ? '0 4px 10px rgba(255, 107, 0, 0.25)' : 'none'
                      }}
                    >
                      {stepIcons[idx]}
                    </div>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: 'var(--color-text)',
                      marginBottom: '0.4rem',
                      lineHeight: 1.35
                    }}
                  >
                    {step.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.55
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: isHighlight ? 'var(--color-orange-dark)' : 'var(--color-primary-dark)',
                    backgroundColor: isHighlight ? '#ffefe5' : 'var(--color-bg)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    width: 'fit-content'
                  }}
                >
                  {isHighlight ? (
                    <span>🛡️ Nghiệm thu mới thanh toán</span>
                  ) : (
                    <>
                      <span>Bước tiếp theo</span>
                      <ArrowRight size={12} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Callout Box */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            backgroundColor: '#fff7ed',
            border: '2px dashed var(--color-orange)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 2rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem'
          }}
        >
          <HeartHandshake size={28} color="var(--color-orange-dark)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', margin: 0, lineHeight: 1.45 }}>
            🛡️ <span style={{ color: 'var(--color-orange-dark)' }}>Cam kết không rủi ro:</span> Thấy không phù hợp ở bước làm web mẫu? Bạn hoàn toàn có thể dừng lại và <span style={{ textDecoration: 'underline' }}>không tốn bất kỳ chi phí nào</span>.
          </p>
        </div>
      </Container>

      <style>{`
        .process-timeline-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.75rem;
        }

        @media (min-width: 600px) {
          .process-timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .process-timeline-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
