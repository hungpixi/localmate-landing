import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getAllServices } from '../data/servicesData';
import { PricingMatrixSection } from '../components/sections/PricingMatrixSection';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useRouter, Link } from '../components/layout/Router';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();
  const p0Services = getAllServices();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Danh Mục Dịch Vụ Digital Marketing & Website Cho Doanh Nghiệp Nhỏ"
        description="Khám phá các dịch vụ trọng điểm của LocalMate: Chạy quảng cáo Google Ads, SEO Google Maps, Thiết kế Website và Quản trị nội dung định kỳ."
        canonicalPath="/dich-vu"
        breadcrumbs={[
          { name: 'Dịch vụ', url: '/dich-vu' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Dịch vụ', url: '/dich-vu' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
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
            <Sparkles size={15} color="var(--color-teal)" /> LOCALMATE SERVICE CATALOG
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Dịch Vụ Digital Marketing Trọng Điểm
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Làm đúng thứ cần thiết trước. Minh bạch tuyệt đối từ đầu ra (Deliverables), thời gian hoàn thiện đến chi phí niêm yết.
          </p>
        </div>

        {/* 4 Core P0 Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4.5rem' }}>
          {p0Services.map((srv) => (
            <div
              key={srv.id}
              onClick={() => navigate(`/dich-vu/${srv.slug}`)}
              className="interactive-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.25rem 2rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.75rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                    {srv.badge || srv.category}
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-orange-dark)' }}>
                    {srv.startingPrice}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                  {srv.name}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {srv.outcome}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {srv.deliverables.slice(0, 3).map((del, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-navy)', lineHeight: 1.45 }}>
                      <CheckCircle2 size={16} color="var(--color-teal-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px dashed var(--color-border)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-teal-dark)' }}>
                <span>Xem chi tiết &amp; quy trình</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading for All 40 Services Catalogue */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-navy)' }}>
            Khám Phá Toàn Bộ Danh Mục 40 Dịch Vụ
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Tra cứu nhanh từng đầu việc kỹ thuật nhỏ từ 99k đến các gói hệ thống tự động hóa nâng cao.
          </p>
        </div>
      </Container>

      {/* 40 Services Interactive Catalogue */}
      <PricingMatrixSection />
    </div>
  );
};
