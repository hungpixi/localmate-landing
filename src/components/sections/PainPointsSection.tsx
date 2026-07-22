import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { PAIN_POINTS } from '../../data/landingContent';
import { HelpCircle, Clock, ShieldAlert, Globe, Sparkles, CheckCircle } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const icons = [
    <HelpCircle key="1" size={26} color="var(--color-teal-dark)" />,
    <Clock key="2" size={26} color="var(--color-teal-dark)" />,
    <ShieldAlert key="3" size={26} color="var(--color-teal-dark)" />,
    <Globe key="4" size={26} color="var(--color-teal-dark)" />
  ];

  return (
    <section id="thuc-trang" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-surface)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="THỰC TRẠNG DOANH NGHIỆP THỰC TẾ"
          title="Bạn có sản phẩm tốt, nhưng khách hàng chưa nhìn thấy bạn?"
          subtitle="Rất nhiều chủ cửa hàng, người làm nghề, nhà thầu xây dựng đang gặp phải rào cản này mỗi ngày."
        />

        <div className="pain-points-layout">
          {/* Big Insight Card */}
          <Card
            variant="navy"
            className="interactive-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem 2rem',
              backgroundColor: 'var(--color-navy)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-navy-deep)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle Accent Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(15, 169, 154, 0.15) 0%, rgba(8, 59, 76, 0) 70%)',
                pointerEvents: 'none'
              }}
            />

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'var(--color-teal-soft)',
                  color: 'var(--color-teal-dark)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '1.5rem'
                }}
              >
                <Sparkles size={14} color="var(--color-teal-dark)" />
                <span>THẤU HIỂU TỪ LOCALMATE</span>
              </div>

              <h3
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                  lineHeight: 1.5,
                  fontWeight: 700,
                  marginBottom: '1.25rem'
                }}
              >
                "Bạn không thiếu tay nghề hay sản phẩm chất lượng. Bạn chỉ đang thiếu một hệ thống gọn gàng giúp khách hàng hiểu bạn bán gì, vì sao nên tin và liên hệ ở đâu."
              </h3>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.82)',
                  fontSize: '0.975rem',
                  lineHeight: 1.65,
                  marginBottom: '2rem'
                }}
              >
                LocalMate được sinh ra để đơn giản hóa toàn bộ quá trình đưa cơ sở kinh doanh của bạn lên internet — không rườm rà, không chi phí ẩn.
              </p>
            </div>

            {/* Bottom Highlight Feature list */}
            <div
              style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--color-teal-soft)',
                fontSize: '0.875rem',
                fontWeight: 600
              }}
            >
              <CheckCircle size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
              <span>Tập trung 100% vào giá trị & tỉ lệ chuyển đổi thực tế</span>
            </div>
          </Card>

          {/* 4 Pain Cards Grid */}
          <div
            style={{
              display: 'grid',
              gap: '1.25rem'
            }}
            className="pain-cards-grid"
          >
            {PAIN_POINTS.map((item, index) => (
              <Card
                key={item.number}
                variant="surface"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                {/* Big Faded Watermark Number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '10px',
                    fontSize: '5rem',
                    fontWeight: 800,
                    color: '#ebf3f2',
                    userSelect: 'none',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    pointerEvents: 'none'
                  }}
                >
                  {item.number}
                </span>

                {/* Icon Container Badge */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-teal-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem'
                  }}
                >
                  {icons[index]}
                </div>

                <h4 style={{ color: 'var(--color-navy)', fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.35 }}>
                  {item.title}
                </h4>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

