import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TRUST_COMMITMENTS } from '../../data/landingContent';
import { ShieldCheck, Eye, FileCheck, CheckCircle2, Key, Zap, Layers, HeartHandshake, ExternalLink } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const icons = [
    <Eye key="1" size={24} color="#2dd4bf" />,
    <ShieldCheck key="2" size={24} color="#2dd4bf" />,
    <Zap key="3" size={24} color="#2dd4bf" />,
    <FileCheck key="4" size={24} color="#2dd4bf" />,
    <CheckCircle2 key="5" size={24} color="#2dd4bf" />,
    <Key key="6" size={24} color="#2dd4bf" />,
    <Layers key="7" size={24} color="#2dd4bf" />,
    <HeartHandshake key="8" size={24} color="#2dd4bf" />
  ];

  return (
    <section id="cam-ket" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-navy)', color: '#ffffff' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="8 TRỤ CỘT NIỀM TIN (TRUST FRAMEWORK)"
          title="Rõ Ngay Từ Đầu Để Không Ai Phải Khó Xử Về Sau"
          subtitle="Sự minh bạch, hiệu quả thực tế và sự tôn trọng khách hàng là nền tảng để LocalMate đồng hành lâu dài cùng bạn."
          dark
        />

        {/* 8 Commitments Grid */}
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
                {icons[idx] || <ShieldCheck size={24} color="#2dd4bf" />}
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.025rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: '#cde2e8', fontSize: '0.875rem', lineHeight: 1.55 }}>
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
