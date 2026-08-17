import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { PROCESS_STEPS } from '../../data/landingContent';
import { Send, PhoneCall, Layout, CheckSquare, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Send key="1" size={20} />,
    <PhoneCall key="2" size={20} />,
    <Layout key="3" size={20} />,
    <CheckSquare key="4" size={20} />,
    <ShieldCheck key="5" size={22} />
  ];

  return (
    <section id="quy-trinh" style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 0', backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
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
                  padding: '1.25rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  boxShadow: isHighlight ? '0 6px 18px rgba(255, 107, 0, 0.12)' : 'var(--shadow-sm)',
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
                      fontSize: '1rem',
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

                {/* Bottom Step Indicator Tag — Clean & 1-line */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.775rem',
                    fontWeight: 700,
                    color: isHighlight ? 'var(--color-orange-dark)' : 'var(--color-primary-dark)',
                    backgroundColor: isHighlight ? '#ffefe5' : 'var(--color-bg)',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    width: 'fit-content',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {isHighlight ? (
                    <span>✓ Chỉ từ 490k</span>
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

        {/* Short & Punchy Trust Callout Box */}
        <div className="process-trust-box">
          <CheckCircle2 size={22} color="var(--color-primary)" className="trust-box-icon" />
          <p className="trust-box-text">
            <strong>Báo giá rõ trước khi làm</strong> — Chi phí chỉ từ <strong>490.000đ</strong>, không phát sinh bất kỳ khoản nào khác.
          </p>
        </div>
      </Container>

      <style>{`
        .process-timeline-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.15rem;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 540px) {
          .process-timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .process-timeline-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
          }
        }

        .process-trust-box {
          max-width: 680px;
          margin: 0 auto;
          background-color: var(--color-primary-soft, #f4fbf7);
          border: 1px solid var(--color-primary-border, #dcefe4);
          border-radius: var(--radius-full);
          padding: 0.85rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .process-trust-box {
            border-radius: var(--radius-lg);
            padding: 0.85rem 1.25rem;
          }
        }

        .trust-box-icon {
          flex-shrink: 0;
        }

        .trust-box-text {
          font-size: 0.9rem;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
};
