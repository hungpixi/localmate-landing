import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { INDUSTRY_SOLUTIONS } from '../../data/landingContent';
import { ArrowRight, CheckCircle2, Building2, Utensils, GraduationCap, Sparkles, Store, Briefcase } from 'lucide-react';
import { useRouter } from '../layout/Router';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  'nha-hang': Utensils,
  'giao-duc': GraduationCap,
  'xay-dung': Building2,
  'spa': Sparkles,
  'cua-hang': Store,
  'doanh-nghiep-nho': Briefcase
};

export const IndustrySolutionSection: React.FC = () => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<string>(INDUSTRY_SOLUTIONS[0].id);

  const selectedSolution = INDUSTRY_SOLUTIONS.find((s) => s.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#f8fbfa',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="giai-phap"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
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
            GIẢI PHÁP THEO NGÀNH NGHỀ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Tối Ưu Riêng Cho Ngành Của Bạn
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Mỗi ngành nghề có hành vi mua hàng và cách khách tìm kiếm khác nhau. LocalMate có sẵn mô hình tối ưu chuẩn xác cho từng mảng.
          </p>
        </div>

        {/* Industry Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '2.5rem'
          }}
        >
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const Icon = ICON_MAP[ind.id] || Briefcase;
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 600,
                  backgroundColor: isActive ? 'var(--color-navy)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-navy)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-navy)' : 'var(--color-border)',
                  cursor: 'pointer',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Icon size={16} color={isActive ? '#ffffff' : 'var(--color-teal-dark)'} />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-teal-dark)',
                backgroundColor: 'var(--color-teal-soft)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-block',
                marginBottom: '0.75rem'
              }}
            >
              {selectedSolution.badge}
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              Giải pháp Website &amp; Marketing: {selectedSolution.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {selectedSolution.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Tính năng chuẩn hóa theo ngành:
              </div>
              {selectedSolution.keyFeatures.map((ft, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                  <CheckCircle2 size={16} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                  <span>{ft}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate(selectedSolution.slug)}
                style={{
                  padding: '0.75rem 1.6rem',
                  backgroundColor: 'var(--color-orange)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                <span>Xem chi tiết gói {selectedSolution.title}</span>
                <ArrowRight size={16} />
              </button>

              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Khuyên dùng: <strong style={{ color: 'var(--color-navy)' }}>{selectedSolution.recommendedPackage}</strong>
              </span>
            </div>
          </div>

          {/* Right Visual Box */}
          <div
            style={{
              backgroundColor: 'var(--color-navy)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-teal-soft)', fontWeight: 700, marginBottom: '0.5rem' }}>
                LOCALMATE VERTICAL HUB
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1rem' }}>
                Sẵn sàng giao diện &amp; bài viết mẫu cho {selectedSolution.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#d0e0dc', lineHeight: 1.6 }}>
                Không mất hàng tuần lên ý tưởng. Chúng tôi đã chuẩn hóa sẵn cấu trúc menu, bài viết và sơ đồ từ khóa tối ưu cho ngành của bạn.
              </p>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: 'var(--color-teal-soft)'
              }}
            >
              <span>Trực tiếp xem trước Demo 0đ</span>
              <span style={{ fontWeight: 700 }}>Triển khai 5-7 ngày</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
