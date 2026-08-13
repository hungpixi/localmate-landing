import React from 'react';
import { Container } from '../components/ui/Container';
import { SERVICE_GROUPS } from '../data/landingContent';
import { Layout, Search, TrendingUp, FileText, Cpu, ShieldCheck, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Layout,
  Search,
  TrendingUp,
  FileText,
  Cpu,
  ShieldCheck
};

export const ServicesPage: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Find if a sub-service detail path is active
  const activeSubSlug = currentPath.replace('/dich-vu/', '');
  const activeGroup = SERVICE_GROUPS.find((g) => g.id === activeSubSlug) || null;

  return (
    <div style={{ backgroundColor: '#f8fbfa', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
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
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-teal)" /> LOCALMATE SERVICES HUB
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            {activeGroup ? activeGroup.title : 'Tất Cả Dịch Vụ Digital & Marketing'}
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            {activeGroup
              ? activeGroup.description
              : 'Trọn bộ dịch vụ thiết kế website, SEO Google, chạy quảng cáo, sáng tạo nội dung và tự động hóa quy trình dành riêng cho doanh nghiệp nhỏ.'}
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => navigate('/dich-vu')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: !activeGroup ? 700 : 600,
              backgroundColor: !activeGroup ? 'var(--color-navy)' : '#ffffff',
              color: !activeGroup ? '#ffffff' : 'var(--color-navy)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer'
            }}
          >
            Tất cả dịch vụ
          </button>
          {SERVICE_GROUPS.map((group) => {
            const isActive = activeGroup?.id === group.id;
            return (
              <button
                key={group.id}
                onClick={() => navigate(group.slug)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 600,
                  backgroundColor: isActive ? 'var(--color-navy)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-navy)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer'
                }}
              >
                {group.title}
              </button>
            );
          })}
        </div>

        {/* Detailed Service Display */}
        {activeGroup ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
                  {activeGroup.startingPrice}
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.75rem' }}>
                  {activeGroup.title}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-teal-dark)', fontWeight: 600, marginTop: '0.25rem' }}>
                  {activeGroup.tagline}
                </p>
              </div>
              <button
                onClick={() => navigate('/lien-he')}
                style={{
                  padding: '0.85rem 1.8rem',
                  backgroundColor: 'var(--color-orange)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                Nhận tư vấn dịch vụ này
              </button>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activeGroup.description}
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
              Các hạng mục triển khai thực tế:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {activeGroup.services.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fbfa',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: 'var(--color-navy)'
                  }}
                >
                  <Check size={18} color="var(--color-teal-dark)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {SERVICE_GROUPS.map((group) => {
              const IconComponent = ICON_MAP[group.iconName] || Layout;
              return (
                <div
                  key={group.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconComponent size={24} color="var(--color-teal-dark)" />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', backgroundColor: '#f0f7f5', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                        {group.startingPrice}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      {group.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {group.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {group.services.slice(0, 4).map((srv, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                          <Check size={14} color="var(--color-teal-dark)" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(group.slug)}
                    style={{
                      padding: '0.7rem 1rem',
                      backgroundColor: 'var(--color-navy)',
                      color: '#ffffff',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span>Xem chi tiết dịch vụ</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};
