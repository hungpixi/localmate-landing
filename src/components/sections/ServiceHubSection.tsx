import React from 'react';
import { Container } from '../ui/Container';
import { SERVICE_GROUPS } from '../../data/landingContent';
import { Layout, Search, TrendingUp, FileText, Cpu, ShieldCheck, ArrowRight, Check, Sparkles, Layers } from 'lucide-react';
import { useRouter } from '../layout/Router';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Layout,
  Search,
  TrendingUp,
  FileText,
  Cpu,
  ShieldCheck
};

export const ServiceHubSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="dich-vu"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.75rem'
            }}
          >
            <Layers size={14} color="var(--color-teal)" /> LOCALMATE ADD-ONS — APP STORE DỊCH VỤ DIGITAL
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Website Là Cửa Vào · Mô Đun Dịch Vụ Mở Rộng Linh Hoạt
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Không chỉ làm website. Bạn có thể tự do gắn thêm mô đun Google Maps, Tracking Ads, CRM, Booking &amp; BCT Compliance như xếp hình Lego theo từng giai đoạn phát triển.
          </p>
        </div>

        {/* LocalMate Add-ons Feature Callout Box */}
        <div
          style={{
            backgroundColor: '#f8fbfa',
            border: '2px solid var(--color-teal)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.5rem 2rem',
            marginBottom: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ flex: '1 1 340px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-orange-dark)', textTransform: 'uppercase' }}>
              ✦ LEGO-STYLE DIGITAL STACK
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.2rem', marginBottom: '0.35rem' }}>
              Xây dựng giải pháp theo nhu cầu thực tế của bạn
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
              Bắt đầu với <strong>Website Business (1,99m)</strong>, dễ dàng chọn thêm: <code>Google Maps (+299k)</code> • <code>Tracking Pack (+390k)</code> • <code>Telegram Bot (+299k)</code> • <code>Compliance BCT (+390k)</code>.
            </p>
          </div>

          <button
            onClick={() => navigate('/advisor')}
            style={{
              padding: '0.75rem 1.4rem',
              backgroundColor: 'var(--color-navy)',
              color: '#ffffff',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={16} /> Lắp ghép cùng Advisor 0đ
          </button>
        </div>

        {/* 6 Service Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'var(--space-gap)'
          }}
        >
          {SERVICE_GROUPS.map((group) => {
            const IconComponent = ICON_MAP[group.iconName] || Layout;
            return (
              <div
                key={group.id}
                className="interactive-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-card-p, clamp(1.25rem, 3vw, 2rem))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  boxShadow: 'var(--shadow-sm)',
                  boxSizing: 'border-box',
                  minWidth: 0
                }}
              >
                <div>
                  {/* Card Header Icon & Price Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-teal-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={26} color="var(--color-teal-dark)" />
                    </div>

                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--color-navy)',
                        backgroundColor: '#f0f7f5',
                        border: '1px solid #dce8e5',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {group.startingPrice}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    {group.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-teal-dark)', marginBottom: '0.85rem' }}>
                    {group.tagline}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {group.description}
                  </p>

                  {/* Service Items List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {group.services.map((srv, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                        <Check size={14} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <button
                    onClick={() => navigate('/dich-vu')}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-navy)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span>Xem chi tiết danh mục {group.title}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Services CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={() => navigate('/dich-vu')}
            style={{
              padding: '0.9rem 2.2rem',
              backgroundColor: 'var(--color-navy)',
              color: '#ffffff',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <span>Khám phá 40+ LocalMate Add-ons &amp; Báo giá</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
};
