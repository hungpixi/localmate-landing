import React from 'react';
import { Container } from '../ui/Container';
import { KNOWLEDGE_ARTICLES } from '../../data/landingContent';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const KnowledgeHubSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="kien-thuc"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
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
            <BookOpen size={14} /> LOCALMATE KNOWLEDGE HUB
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Kiến Thức Digital &amp; Marketing Cho Doanh Nghiệp Nhỏ
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Chia sẻ kinh nghiệm thực tế về xây dựng website, tối ưu SEO, chạy quảng cáo và ứng dụng công nghệ tự động hóa hiệu quả.
          </p>
        </div>

        {/* Knowledge Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {KNOWLEDGE_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => navigate(art.slug)}
              className="interactive-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--color-teal-dark)',
                      backgroundColor: 'var(--color-teal-soft)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {art.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    <Clock size={12} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.4
                  }}
                >
                  {art.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {art.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--color-border)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-teal-dark)'
                }}
              >
                <span>Đọc bài viết</span>
                <ArrowRight size={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Hub Footer Link */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => navigate('/kien-thuc')}
            style={{
              padding: '0.75rem 1.8rem',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-navy)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <span>Khám phá toàn bộ thư viện kiến thức SEO &amp; Marketing</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </Container>
    </section>
  );
};
