import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TRUST_COMMITMENTS } from '../../data/landingContent';
import { ShieldCheck, Eye, FileCheck, CheckCircle2, Key, Zap, Layers, HeartHandshake, ExternalLink, Building2, MapPin, Mail, Phone } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const icons = [
    <Eye key="1" size={22} color="var(--color-primary)" />,
    <ShieldCheck key="2" size={22} color="var(--color-primary)" />,
    <Zap key="3" size={22} color="var(--color-primary)" />,
    <FileCheck key="4" size={22} color="var(--color-primary)" />,
    <CheckCircle2 key="5" size={22} color="var(--color-primary)" />,
    <Key key="6" size={22} color="var(--color-primary)" />,
    <Layers key="7" size={22} color="var(--color-primary)" />,
    <HeartHandshake key="8" size={22} color="var(--color-primary)" />
  ];

  return (
    <section id="cam-ket" style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="8 TRỤ CỘT NIỀM TIN & PHÁP NHÂN"
          title="Rõ ràng ngay từ đầu — Minh bạch pháp lý & bảo hành"
          subtitle="Sự minh bạch, hiệu quả thực tế và sự tôn trọng khách hàng là nền tảng để LocalMate đồng hành lâu dài cùng doanh nghiệp bạn."
        />

        {/* 8 Commitments Grid - Light Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginTop: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {TRUST_COMMITMENTS.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.35rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                boxShadow: 'var(--shadow-sm)'
              }}
              className="interactive-card"
            >
              <div
                style={{
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.6rem',
                  borderRadius: 'var(--radius-md)',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {icons[idx] || <ShieldCheck size={22} color="var(--color-primary)" />}
              </div>
              <div>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Legal & Support Grid */}
        <div className="company-trust-grid" style={{ marginTop: '2.5rem' }}>
          {/* Left Box: Legal Info & Plant Pin Illustration */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Building2 size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', textTransform: 'uppercase' }}>
                    THÔNG TIN PHÁP NHÂN CHÍNH THỨC
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-text)', margin: 0 }}>
                    CÔNG TY TNHH LOCALMATE
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="var(--color-primary)" />
                  <span><strong>Mã số doanh nghiệp (MST):</strong> 0318567890</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Trụ sở:</strong> Tầng 4, Tòa nhà Innovation, TP. Hồ Chí Minh</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="var(--color-primary)" />
                  <span><strong>Email:</strong> hotro@localmate.vn</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="var(--color-primary)" />
                  <span><strong>Hotline tư vấn:</strong> 0901 888 247</span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-primary-soft)',
                padding: '0.85rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <img
                src="/assets/illustrations/location-pin-plant.png"
                alt="Local Verified"
                style={{ width: 42, height: 42, objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.825rem', color: 'var(--color-primary-dark)', fontWeight: 600, lineHeight: 1.45 }}>
                Doanh nghiệp địa phương đồng hành cùng cửa hàng địa phương — Hợp đồng minh bạch &amp; xuất hóa đơn VAT đầy đủ.
              </span>
            </div>
          </div>

          {/* Right Box: Direct Support & Envelope Illustration */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-orange)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <img
                  src="/assets/illustrations/support-envelope-message.png"
                  alt="Support Message"
                  style={{ width: 48, height: 48, objectFit: 'contain' }}
                />
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange-dark)', textTransform: 'uppercase' }}>
                    TƯ VẤN &amp; HỖ TRỢ TRỰC TIẾP
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-text)', margin: 0 }}>
                    Bạn có câu hỏi riêng?
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Không cần phải tự mò mẫm hay lo lắng bị vẽ thêm chi phí. Đội ngũ kỹ thuật của LocalMate sẵn sàng lắng nghe và demo trước giải pháp phù hợp với ngành nghề của bạn.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span>Nhắn tin Zalo tư vấn ngay</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="http://phamphunguyenhung.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  color: 'var(--color-text)',
                  padding: '0.7rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textDecoration: 'none'
                }}
              >
                <span>Chịu trách nhiệm kỹ thuật: hungpixi</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .company-trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 900px) {
          .company-trust-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};

