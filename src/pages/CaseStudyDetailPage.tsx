import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getCaseStudyBySlug } from '../data/caseStudiesData';
import { useRouter, Link } from '../components/layout/Router';
import {
  Sparkles, CheckCircle2, ArrowRight, MapPin,
  Calendar, Quote, Check
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1 style={{ fontSize: '2rem', color: 'var(--color-text)', fontWeight: 800 }}>
            Dự án không tồn tại hoặc đã được cập nhật đường dẫn
          </h1>
          <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem 0' }}>
            Vui lòng quay lại trang danh sách dự án để xem các kết quả đo lường thực tế khác.
          </p>
          <Button variant="primary" onClick={() => navigate('/du-an')}>
            Xem tất cả dự án
          </Button>
        </Container>
      </div>
    );
  }

  const handleCTA = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(caseStudy.clientDisplayName);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      {/* SEO & Structured Data */}
      <SEOHead
        title={`Dự án: ${caseStudy.clientDisplayName} | LocalMate`}
        description={caseStudy.resultsSummary}
        canonicalPath={`/du-an/${caseStudy.slug}`}
        breadcrumbs={[
          { name: 'Dự án', url: '/du-an' },
          { name: caseStudy.clientDisplayName, url: `/du-an/${caseStudy.slug}` }
        ]}
      />

      <Container size="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Dự án', url: '/du-an' },
            { name: caseStudy.clientDisplayName, url: `/du-an/${caseStudy.slug}` }
          ]}
        />

        {/* Hero Header */}
        <div
          style={{
            backgroundColor: '#f8fbfa',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.3rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
              {caseStudy.industry}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <MapPin size={14} /> {caseStudy.location}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Calendar size={14} /> {caseStudy.period}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
              color: 'var(--color-text)',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem'
            }}
          >
            {caseStudy.clientDisplayName}
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.65, maxWidth: '800px', marginBottom: '2rem' }}>
            {caseStudy.resultsSummary}
          </p>

          {/* Evidence Metric Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {caseStudy.evidence.map((ev, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-orange-dark)', lineHeight: 1 }}>
                  {ev.value}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '0.5rem' }}>
                  {ev.metric}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  {ev.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Problem & Starting State vs Work Done */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          {/* Left: Problem & Starting State */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
              Hiện trạng ban đầu &amp; Vấn đề
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {caseStudy.problem}
            </p>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c62828', marginBottom: '0.75rem' }}>
              Khó khăn trước khi triển khai:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {caseStudy.startingState.map((st, idx) => (
                <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--color-text)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#c62828', fontWeight: 800, marginTop: 1 }}>✗</span>
                  <span>{st}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Work Done */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
              Giải pháp &amp; Hạng mục LocalMate thực hiện
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {caseStudy.workDone.map((w, idx) => (
                <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--color-text)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                  <Check size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{w}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>
              Dịch vụ sử dụng trong dự án:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {caseStudy.servicesUsed.map((srv, idx) => (
                <Link
                  key={idx}
                  to={`/dich-vu/${srv.serviceSlug}`}
                  style={{
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'var(--color-primary-soft)',
                    border: '1px solid var(--color-primary-border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    textDecoration: 'none'
                  }}
                >
                  {srv.serviceName} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables Received */}
        <div
          style={{
            backgroundColor: '#f8fbfa',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
            Bàn giao thực tế sau dự án
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {caseStudy.deliverables.map((del, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={18} color="var(--color-primary)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 600 }}>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        {caseStudy.testimonial && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderLeft: '5px solid var(--color-orange)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 2.5rem',
              marginBottom: '3.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Quote size={32} color="var(--color-orange-dark)" style={{ marginBottom: '0.75rem', opacity: 0.8 }} />
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1rem' }}>
              "{caseStudy.testimonial.quote}"
            </p>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)' }}>
              {caseStudy.testimonial.author}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              {caseStudy.testimonial.role} — {caseStudy.clientDisplayName}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            backgroundColor: '#083B4C',
            color: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            padding: '3rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Bạn muốn triển khai giải pháp tương tự cho cơ sở của mình?
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Nhận tư vấn khảo sát và xem bản website demo 0đ phù hợp với ngành nghề của bạn.
          </p>
          <Button variant="primary" size="lg" onClick={handleCTA} style={{ fontWeight: 700 }}>
            Đăng ký nhận tư vấn 0đ
          </Button>
        </div>
      </Container>
    </div>
  );
};
