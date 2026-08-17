import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getAllArticles } from '../data/articlesData';
import { BookOpen, ArrowRight, Clock, Search } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const KnowledgePage: React.FC = () => {
  const { navigate } = useRouter();
  const articles = getAllArticles();
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const pillars = [
    { key: 'all', label: 'Tất cả bài viết' },
    { key: 'google-ads', label: 'Quảng cáo Google Ads' },
    { key: 'google-maps', label: 'Google Maps' },
    { key: 'website', label: 'Làm Website' },
    { key: 'content', label: 'Bài viết Facebook' }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesPillar = selectedPillar === 'all' || art.pillarKey === selectedPillar;
    const matchesSearch = !searchQuery ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPillar && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Hướng Dẫn & Kinh Nghiệm Tìm Khách Cho Doanh Nghiệp Nhỏ | LocalMate"
        description="Tổng hợp các bài viết hướng dẫn thực tế về cách chạy quảng cáo Google Ads tiết kiệm, tối ưu Google Maps, làm website rõ ràng và viết bài Facebook đều đặn."
        canonicalPath="/kien-thuc"
        breadcrumbs={[
          { name: 'Kiến thức', url: '/kien-thuc' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Kiến thức', url: '/kien-thuc' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <BookOpen size={15} color="var(--color-primary)" /> HƯỚNG DẪN TÌM KHÁCH THỰC TẾ
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text)', fontWeight: 800, lineHeight: 1.25 }}>
            Kiến Thức &amp; Hướng Dẫn Dành Cho Doanh Nghiệp Nhỏ
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Không viết lý thuyết sách vở. Mỗi bài viết là một hướng dẫn cụ thể giúp bạn hiểu rõ chi phí quảng cáo, cách đón khách xung quanh và duy trì bài viết thu hút.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '480px', margin: '1.75rem auto 0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Tìm kiếm theo từ khóa (Google Ads, Maps, Website, Facebook)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 2.75rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.925rem',
                outline: 'none',
                backgroundColor: '#f8fbfa',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Pillar Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {pillars.map((pill) => {
            const isActive = selectedPillar === pill.key;
            return (
              <button
                key={pill.key}
                onClick={() => setSelectedPillar(pill.key)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 600,
                  backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => navigate(`/kien-thuc/${art.slug}`)}
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
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                      {art.category}
                    </span>
                    <span style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={13} /> {art.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {art.title}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {art.summary}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px dashed var(--color-border)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  <span>Đọc bài viết chi tiết</span>
                  <ArrowRight size={16} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f8fbfa', borderRadius: 'var(--radius-xl)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', margin: 0 }}>
              Không tìm thấy bài viết nào phù hợp với từ khóa "{searchQuery}".
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};
