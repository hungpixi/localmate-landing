import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TRUST_COMMITMENTS } from '../../data/landingContent';
import { ShieldCheck, Lock, FileCheck, CheckCircle2, Key, AlertCircle, AlertTriangle, Clock, FileSpreadsheet, ExternalLink } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const icons = [
    <ShieldCheck key="1" size={24} color="#2dd4bf" />,
    <Lock key="2" size={24} color="#2dd4bf" />,
    <FileCheck key="3" size={24} color="#2dd4bf" />,
    <CheckCircle2 key="4" size={24} color="#2dd4bf" />,
    <Key key="5" size={24} color="#2dd4bf" />,
    <AlertCircle key="6" size={24} color="#2dd4bf" />
  ];

  return (
    <section id="cam-ket" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-navy)', color: '#ffffff' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="TẬN TÂM & NGUYÊN TẮC HỢP TÁC"
          title="Rõ ngay từ đầu để không ai phải khó xử về sau."
          subtitle="Sự minh bạch và tôn trọng là nền tảng để LocalMate đồng hành lâu dài cùng bạn."
          dark
        />

        {/* 6 Commitments Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {TRUST_COMMITMENTS.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0a465a',
                border: '1px solid #14596f',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ backgroundColor: '#0a5a54', padding: '0.5rem', borderRadius: 'var(--radius-md)', flexShrink: 0 }}>
                {icons[idx]}
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#cde2e8', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Credibility & Trust Callout Box */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#072e3c',
            border: '1px solid var(--color-teal)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div>
            <h4 style={{ color: 'var(--color-teal-soft)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} color="var(--color-teal)" /> Trực tiếp thiết lập &amp; triển khai kỹ thuật bởi hungpixi
            </h4>
            <p style={{ color: '#cde2e8', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
              Mọi hệ thống website và giải pháp chuyển đổi số tại LocalMate đều do <strong>hungpixi</strong> trực tiếp tối ưu cấu trúc, mã nguồn và hạ tầng bảo mật chuẩn SEO Google.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="http://phamphunguyenhung.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-teal)',
                color: 'var(--color-navy-deep)',
                padding: '0.5rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 800,
                textDecoration: 'none',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>Website cá nhân: phamphunguyenhung.com</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/hungpixi/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#105970',
                color: '#ffffff',
                padding: '0.5rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                border: '1px solid rgba(45, 212, 191, 0.4)',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>GitHub: @hungpixi</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

