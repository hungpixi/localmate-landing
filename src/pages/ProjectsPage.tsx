import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getAllCaseStudies } from '../data/caseStudiesData';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const ProjectsPage: React.FC = () => {
  const { navigate } = useRouter();
  const caseStudies = getAllCaseStudies();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { key: 'all', label: 'Tất cả ngành nghề' },
    { key: 'giao-duc', label: 'Giáo dục & Mầm non' },
    { key: 'spa', label: 'Y tế & Spa' },
    { key: 'nha-hang', label: 'Nhà hàng & Ăn uống' },
    { key: 'xay-dung', label: 'Nhà thầu & Xây dựng' },
    { key: 'doanh-nghiep-nho', label: 'Dịch vụ & Ô tô' }
  ];

  const filteredCaseStudies = caseStudies.filter((cs) => {
    return selectedIndustry === 'all' || cs.industryKey === selectedIndustry;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Dự Án Thực Tế Đã Triển Khai | LocalMate"
        description="Tổng hợp các dự án thực tế LocalMate đã triển khai cho các cửa hàng, cơ sở dịch vụ và doanh nghiệp nhỏ với kết quả đo lường minh bạch."
        canonicalPath="/du-an"
        breadcrumbs={[
          { name: 'Dự án', url: '/du-an' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Dự án', url: '/du-an' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
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
            <Sparkles size={15} color="var(--color-primary)" /> KẾT QUẢ THỰC TẾ
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text)', fontWeight: 800 }}>
            Dự Án Thực Tế &amp; Kết Quả Đo Lường
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Nói thực, làm thực, đo lường thực. Xem cách các cửa hàng và cơ sở dịch vụ đã tìm thêm khách hàng cùng LocalMate.
          </p>
        </div>

        {/* Industry Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {industries.map((ind) => {
            const isActive = selectedIndustry === ind.key;
            return (
              <button
                key={ind.key}
                onClick={() => setSelectedIndustry(ind.key)}
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
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => navigate(`/du-an/${cs.slug}`)}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                    {cs.industry}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <MapPin size={13} /> {cs.location}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                  {cs.clientDisplayName}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {cs.resultsSummary}
                </p>

                {/* 2 Key Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  {cs.evidence.slice(0, 2).map((ev, idx) => (
                    <div key={idx} style={{ backgroundColor: '#f8fbfa', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-orange-dark)' }}>{ev.value}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{ev.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px dashed var(--color-border)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                <span>Xem chi tiết giải pháp &amp; kết quả</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
