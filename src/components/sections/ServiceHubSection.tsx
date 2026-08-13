import React from 'react';
import { Container } from '../ui/Container';
import { SERVICE_GROUPS } from '../../data/landingContent';
import { Layout, Search, TrendingUp, FileText, Cpu, ShieldCheck, ArrowRight, Check } from 'lucide-react';
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
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-block',
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
            HỆ SINH THÁI DỊCH VỤ TRỌN GÓI
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            6 Nhóm Dịch Vụ Cốt Lõi Cho Doanh Nghiệp Nhỏ
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Tất cả những gì bạn cần để hiện diện chuyên nghiệp, thu hút khách hàng và vận hành tự động online — từ một đối tác duy nhất.
          </p>
        </div>

        {/* 6 Service Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
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
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
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
                    onClick={() => navigate(group.slug)}
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-teal-soft)';
                      e.currentTarget.style.borderColor = 'var(--color-teal)';
                      e.currentTarget.style.color = 'var(--color-teal-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.color = 'var(--color-navy)';
                    }}
                  >
                    <span>Khám phá chi tiết {group.title}</span>
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
              boxShadow: 'var(--shadow-md)',
              transition: 'transform var(--transition-fast)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <span>Xem tất cả danh mục &amp; báo giá dịch vụ</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
};
