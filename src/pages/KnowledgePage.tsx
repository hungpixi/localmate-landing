import React from 'react';
import { Container } from '../components/ui/Container';
import { KNOWLEDGE_ARTICLES } from '../data/landingContent';
import { BookOpen, ArrowRight, Clock, Search } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const KnowledgePage: React.FC = () => {
  const { navigate } = useRouter();

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
            <BookOpen size={15} color="var(--color-teal)" /> LOCALMATE KNOWLEDGE BASE
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Cổng Kiến Thức Digital Cho Doanh Nghiệp Nhỏ
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Hàng chục bài viết hướng dẫn thực tế về SEO Google Maps, thiết kế website, chạy quảng cáo và tự động hóa quy trình.
          </p>
        </div>

        {/* Categories Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {['Tất cả bài viết', 'Website', 'SEO & Google', 'Quảng cáo', 'Marketing SME', 'AI & Automation', 'Kinh doanh Online'].map((cat, idx) => (
            <span
              key={idx}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: idx === 0 ? 700 : 600,
                backgroundColor: idx === 0 ? 'var(--color-navy)' : '#ffffff',
                color: idx === 0 ? '#ffffff' : 'var(--color-navy)',
                border: '1px solid var(--color-border)',
                cursor: 'pointer'
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {KNOWLEDGE_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => navigate(art.slug)}
              className="interactive-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                    {art.category}
                  </span>
                  <span style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={13} /> {art.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {art.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {art.desc}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px dashed var(--color-border)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-teal-dark)' }}>
                <span>Đọc bài viết chi tiết</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
