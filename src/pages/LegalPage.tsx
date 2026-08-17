import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { LEGAL_POLICIES } from '../data/policyData';
import { ShieldCheck, Calendar, FileText } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

interface LegalPageProps {
  policyKey: 'chinh-sach-bao-mat' | 'dieu-khoan' | 'chinh-sach-dich-vu';
}

export const LegalPage: React.FC<LegalPageProps> = ({ policyKey }) => {
  const policy = LEGAL_POLICIES[policyKey];

  if (!policy) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1>Tài liệu không tồn tại</h1>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2.5rem 0 5rem 0' }}>
      <SEOHead
        title={policy.title}
        description={policy.summary}
        canonicalPath={`/${policy.slug}`}
        breadcrumbs={[
          { name: 'Pháp lý', url: `/${policy.slug}` },
          { name: policy.title, url: `/${policy.slug}` }
        ]}
      />

      <Container size="md">
        <Breadcrumbs
          items={[
            { name: 'Pháp lý', url: `/${policy.slug}` },
            { name: policy.title, url: `/${policy.slug}` }
          ]}
        />

        <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-teal-dark)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={18} /> CÔNG TY TNHH LOCALMATE
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
            {policy.title}
          </h1>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Calendar size={14} /> Ngày cập nhật lần cuối: {policy.lastUpdated}
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#f8fbfa',
            borderLeft: '4px solid var(--color-teal)',
            padding: '1.25rem 1.5rem',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            fontSize: '1rem',
            color: 'var(--color-navy)',
            lineHeight: 1.65,
            marginBottom: '2.5rem'
          }}
        >
          {policy.summary}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, fontSize: '1rem', color: '#334155' }}>
          {policy.sections.map((sec, idx) => (
            <section key={idx}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                {sec.heading}
              </h2>
              {sec.content.map((p, pIdx) => (
                <p key={pIdx} style={{ margin: '0 0 0.85rem 0' }}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
};
