import React from 'react';
import { Container } from '../components/ui/Container';
import { DemoShowcaseSection } from '../components/sections/DemoShowcaseSection';
import { Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
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
            <Sparkles size={15} color="var(--color-teal)" /> LOCALMATE PORTFOLIO &amp; CASE STUDIES
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Dự Án Thực Tế &amp; Web Demo Sẵn Có
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Tổng hợp các dự án thực tế LocalMate đã triển khai thành công cho khách hàng thuộc nhiều ngành nghề khác nhau.
          </p>
        </div>
      </Container>

      <DemoShowcaseSection />
    </div>
  );
};
