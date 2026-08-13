import React from 'react';
import { Container } from '../components/ui/Container';
import { INDUSTRY_SOLUTIONS } from '../data/landingContent';
import { CheckCircle2, ArrowRight, Sparkles, Building2, Utensils, GraduationCap, Store, Briefcase } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  'nha-hang': Utensils,
  'giao-duc': GraduationCap,
  'xay-dung': Building2,
  'spa': Sparkles,
  'cua-hang': Store,
  'doanh-nghiep-nho': Briefcase
};

export const SolutionsPage: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  const activeSubSlug = currentPath.replace('/giai-phap/', '');
  const activeSolution = INDUSTRY_SOLUTIONS.find((s) => s.id === activeSubSlug) || null;

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
            <Sparkles size={15} color="var(--color-teal)" /> LOCALMATE VERTICAL HUB
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            {activeSolution ? `Giải Pháp Website & Marketing: ${activeSolution.title}` : 'Giải Pháp Theo Ngành Nghề Kinh Doanh'}
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            {activeSolution
              ? activeSolution.description
              : 'Mô hình chuẩn hóa giao diện, từ khóa SEO và kịch bản tìm kiếm khách hàng cho từng lĩnh vực kinh doanh cụ thể.'}
          </p>
        </div>

        {/* Industry Pill Navigation */}
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
            onClick={() => navigate('/giai-phap')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: !activeSolution ? 700 : 600,
              backgroundColor: !activeSolution ? 'var(--color-navy)' : '#ffffff',
              color: !activeSolution ? '#ffffff' : 'var(--color-navy)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer'
            }}
          >
            Tất cả ngành nghề
          </button>
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const isActive = activeSolution?.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => navigate(ind.slug)}
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
                {ind.title}
              </button>
            );
          })}
        </div>

        {/* Display Grid or Detail */}
        {activeSolution ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
              {activeSolution.badge}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.75rem', marginBottom: '1rem' }}>
              Giải pháp cho {activeSolution.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {activeSolution.description}
            </p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
              Tính năng chuẩn hóa theo ngành:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {activeSolution.keyFeatures.map((ft, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fbfa',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)'
                  }}
                >
                  <CheckCircle2 size={20} color="var(--color-teal-dark)" />
                  <span>{ft}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/lien-he')}
                style={{
                  padding: '0.85rem 2rem',
                  backgroundColor: 'var(--color-orange)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                Đăng ký tư vấn giải pháp {activeSolution.title}
              </button>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Gói khuyên dùng: <strong style={{ color: 'var(--color-navy)' }}>{activeSolution.recommendedPackage}</strong>
              </span>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {INDUSTRY_SOLUTIONS.map((ind) => {
              const Icon = ICON_MAP[ind.id] || Briefcase;
              return (
                <div
                  key={ind.id}
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
                      <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={22} color="var(--color-teal-dark)" />
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                        {ind.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                      {ind.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {ind.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {ind.keyFeatures.slice(0, 3).map((ft, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                          <CheckCircle2 size={14} color="var(--color-teal-dark)" />
                          <span>{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(ind.slug)}
                    style={{
                      padding: '0.75rem 1rem',
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
                    <span>Xem giải pháp ngành {ind.title}</span>
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
