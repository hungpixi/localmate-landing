import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { SPECIALIZED_SERVICES } from '../../data/landingContent';
import { Image, Camera, LayoutGrid, MapPin, Megaphone, Bot, ArrowUpRight } from 'lucide-react';

export const SpecializedServicesSection: React.FC = () => {
  const icons = [
    <Image key="1" size={24} />,
    <Camera key="2" size={24} />,
    <LayoutGrid key="3" size={24} />,
    <MapPin key="4" size={24} />,
    <Megaphone key="5" size={24} />,
    <Bot key="6" size={24} />
  ];

  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="dich-vu-mo-rong" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-surface)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="DỊCH VỤ MỞ RỘNG KHI CẦN BỨT PHÁ"
          title="Khi doanh nghiệp cần đi xa hơn, LocalMate có nguồn lực để tiếp tục đồng hành"
          subtitle="Các giải pháp chuyên sâu giúp nâng tầm thương hiệu và tối ưu chuyển đổi khách hàng."
        />

        {/* 6 Specialized Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem'
          }}
        >
          {SPECIALIZED_SERVICES.map((service, idx) => (
            <div key={service.id} className="specialized-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div className="card-icon-box">
                    {icons[idx]}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-teal-dark)',
                      backgroundColor: 'var(--color-teal-soft)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Dịch vụ 0{idx + 1}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {service.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '1rem',
                  marginTop: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Chi phí khởi điểm</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-orange-dark)' }}>
                    {service.priceFrom}
                  </span>
                </div>

                <button type="button" className="cta-btn" onClick={scrollToForm}>
                  Tư vấn ngay <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

