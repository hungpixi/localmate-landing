import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CONTENT_PACKAGE } from '../../data/landingContent';
import { FileText, Image, Video, Clock, Share2, BarChart3, ArrowRight, Info, CheckCircle2, Zap } from 'lucide-react';

export const ContentPackageSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const statIcons = [
    <FileText key="1" size={18} />,
    <Image key="2" size={18} />,
    <Video key="3" size={18} />,
    <Clock key="4" size={18} />,
    <Share2 key="5" size={18} />,
    <BarChart3 key="6" size={18} />
  ];

  return (
    <section style={{ padding: 'clamp(2.75rem, 5vw, 4.5rem) 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="DUY TRÌ VẬN HÀNH TIẾT KIỆM"
          title={CONTENT_PACKAGE.title}
          subtitle={CONTENT_PACKAGE.subtitle}
        />

        <div className="content-package-main-grid">
          {/* Left: 2x3 or 3x2 Stat Grid */}
          <div className="content-stats-grid">
            {CONTENT_PACKAGE.stats.map((stat, idx) => (
              <Card
                key={idx}
                variant="surface"
                hoverable
                style={{
                  textAlign: 'center',
                  padding: 'clamp(0.85rem, 2.5vw, 1.25rem) 0.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-soft)',
                    color: 'var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {statIcons[idx]}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                      fontWeight: 900,
                      color: 'var(--color-text)',
                      lineHeight: 1,
                      marginBottom: '0.2rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.3
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right: Price Card & Terms */}
          <Card
            variant="surface"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
              border: '2px solid var(--color-primary-soft)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                  gap: '0.4rem'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GÓI BẢO TRÌ & NỘI DUNG
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-primary-soft)',
                    color: 'var(--color-primary-dark)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  Đồng hành hàng tháng
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: 'clamp(2.25rem, 4vw, 2.75rem)', color: 'var(--color-text)', fontWeight: 900, lineHeight: 1, margin: 0 }}>
                  {CONTENT_PACKAGE.price}
                </h3>
                <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  {CONTENT_PACKAGE.unit}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-orange-dark)',
                  backgroundColor: '#fff7ed',
                  padding: '0.5rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #ffedd5'
                }}
              >
                <Zap size={14} color="var(--color-orange-dark)" style={{ flexShrink: 0 }} />
                <span>Chỉ 33.000đ/ngày — Giúp kênh online của bạn luôn tươi mới</span>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.5rem' }}>
                <Info size={14} color="var(--color-primary)" /> ĐIỀU KIỆN ÁP DỤNG:
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', padding: 0, margin: 0 }}>
                {CONTENT_PACKAGE.terms.map((term, termIdx) => (
                  <li key={termIdx} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                    <CheckCircle2 size={14} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="secondary" size="lg" onClick={scrollToForm} fullWidth>
              Nhận kế hoạch nội dung mẫu <ArrowRight size={16} />
            </Button>
          </Card>
        </div>
      </Container>

      <style>{`
        .content-package-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .content-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        @media (min-width: 600px) {
          .content-stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (min-width: 992px) {
          .content-package-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};


