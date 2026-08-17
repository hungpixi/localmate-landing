import React from 'react';
import { Container } from '../ui/Container';
import { SERVICE_GROUPS } from '../../data/landingContent';
import { Globe, MapPin, Sparkles, FileText, ArrowRight, Check, Layers } from 'lucide-react';
import { useRouter } from '../layout/Router';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe,
  MapPin,
  Sparkles,
  FileText
};

export const ServiceHubSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: 'clamp(3rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="dich-vu"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Layers size={14} /> 4 NHÓM DỊCH VỤ CỐT LÕI
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Dịch Vụ Linh Hoạt Theo Nhu Cầu &amp; Ngân Sách
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Không ép mua gói lớn. Bạn cần làm website, đưa tiệm lên Google Maps hay chạy quảng cáo tìm khách, LocalMate đều có dịch vụ riêng với giá báo trước.
          </p>
        </div>

        {/* 4 Pillars in a balanced 4-Column Grid */}
        <div className="services-grid-4col">
          {SERVICE_GROUPS.map((group) => {
            const IconComponent = ICON_MAP[group.iconName] || Globe;
            const targetSlug = group.id === 'google-ads' ? '/dich-vu/google-ads'
              : group.id === 'google-maps' ? '/dich-vu/google-maps'
              : group.id === 'website' ? '/dich-vu/website-landing-page'
              : '/dich-vu/content-marketing';

            return (
              <div
                key={group.id}
                className="service-pillar-card interactive-card"
                onClick={() => navigate(targetSlug)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Top Icon & Starting Price */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="service-icon-box">
                      <IconComponent size={22} color="var(--color-primary-dark)" />
                    </div>

                    <span className="service-price-pill">
                      {group.startingPrice}
                    </span>
                  </div>

                  {/* Title & One-line Outcome */}
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                      {group.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                      {group.tagline}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {group.description}
                  </p>

                  {/* Max 3 Deliverables */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                    {group.services.slice(0, 3).map((srv, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.825rem', color: 'var(--color-navy)' }}>
                        <Check size={13} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--color-border)' }}>
                  <button
                    type="button"
                    className="service-card-btn"
                  >
                    <span>Xem chi tiết &amp; báo giá</span>
                    <ArrowRight size={14} color="var(--color-primary)" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Catalog Footer Link */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button
            onClick={() => navigate('/bang-gia')}
            style={{
              padding: '0.75rem 1.85rem',
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.925rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all var(--transition-fast)'
            }}
            className="btn-primary"
          >
            <span>Xem Bảng Giá Toàn Bộ Dịch Vụ Niêm Yết</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </Container>

      <style>{`
        .services-grid-4col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 580px) {
          .services-grid-4col {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid-4col {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }
        }

        .service-pillar-card {
          padding: clamp(1.2rem, 2vw, 1.5rem);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 1.25rem;
          cursor: pointer;
          min-height: 320px;
          box-sizing: border-box;
        }

        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .service-price-pill {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .service-card-btn {
          width: 100%;
          padding: 0.6rem 0.8rem;
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-navy);
          font-weight: 700;
          font-size: 0.825rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          transition: all var(--transition-fast);
        }

        .service-pillar-card:hover .service-card-btn {
          background-color: var(--color-primary-soft);
          border-color: var(--color-primary-border);
          color: var(--color-primary-dark);
        }
      `}</style>
    </section>
  );
};
