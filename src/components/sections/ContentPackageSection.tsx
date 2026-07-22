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

  return (
    <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="DUY TRÌ VẬN HÀNH TIẾT KIỆM"
          title={CONTENT_PACKAGE.title}
          subtitle={CONTENT_PACKAGE.subtitle}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left: 2x3 Stat Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}
          >
            {CONTENT_PACKAGE.stats.map((stat, idx) => {
              const icons = [
                <FileText key="1" size={20} />,
                <Image key="2" size={20} />,
                <Video key="3" size={20} />,
                <Clock key="4" size={20} />,
                <Share2 key="5" size={20} />,
                <BarChart3 key="6" size={20} />
              ];

              return (
                <Card
                  key={idx}
                  variant="surface"
                  hoverable
                  style={{
                    textAlign: 'center',
                    padding: '1.25rem 0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-teal-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {icons[idx]}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: '2.25rem',
                        fontWeight: 900,
                        color: 'var(--color-navy)',
                        lineHeight: 1,
                        marginBottom: '0.25rem'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        lineHeight: 1.3
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right: Price Card & Terms */}
          <Card
            variant="surface"
            style={{
              padding: '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              border: '2px solid var(--color-teal-soft)',
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
                  marginBottom: '0.5rem'
                }}
              >
                <span style={{ fontSize: '0.775rem', fontWeight: 800, color: 'var(--color-teal-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GÓI BẢO TRÌ & NỘI DUNG
                </span>
                <span
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-teal-soft)',
                    color: 'var(--color-teal-dark)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  Đồng hành hàng tháng
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '2.75rem', color: 'var(--color-navy)', fontWeight: 900, lineHeight: 1 }}>
                  {CONTENT_PACKAGE.price}
                </h3>
                <span style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  {CONTENT_PACKAGE.unit}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: 'var(--color-orange-dark)',
                  backgroundColor: '#fff7ed',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #ffedd5'
                }}
              >
                <Zap size={15} color="var(--color-orange-dark)" />
                <span>Chỉ 33.000đ/ngày — Giúp kênh online của bạn luôn tươi mới</span>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg)', padding: '1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.65rem' }}>
                <Info size={15} color="var(--color-teal-dark)" /> ĐIỀU KIỆN ÁP DỤNG MANG LẠI HIỆU QUẢ:
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {CONTENT_PACKAGE.terms.map((term, termIdx) => (
                  <li key={termIdx} style={{ fontSize: '0.825rem', color: 'var(--color-text)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={15} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="secondary" size="lg" onClick={scrollToForm} fullWidth>
              Nhận kế hoạch nội dung mẫu <ArrowRight size={18} />
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  );
};

