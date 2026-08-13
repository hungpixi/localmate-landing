import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Star, Zap, Lock, Search, Layout, TrendingUp, Cpu, FileText } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '3.5rem 0 4.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Subtle Background Accent Shapes */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          backgroundColor: 'rgba(15, 169, 154, 0.05)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />

      <Container size="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {/* Brand Philosophy Eyebrow Badge */}
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-teal-dark)',
                  backgroundColor: 'var(--color-teal-soft)',
                  border: '1px solid rgba(15, 169, 154, 0.3)',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <Sparkles size={15} color="var(--color-teal)" />
                LOCALMATE · NGƯỜI ĐỒNG HÀNH SỐ SME
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                color: 'var(--color-navy)',
                fontSize: 'var(--font-size-h1)',
                fontWeight: 800,
                lineHeight: 1.22,
                letterSpacing: '-0.03em',
                textWrap: 'balance'
              }}
            >
              Website, SEO &amp; Marketing<br />
              cho <span style={{ color: 'var(--color-teal-dark)' }}>doanh nghiệp nhỏ</span>
            </h1>

            {/* Paragraph */}
            <p
              style={{
                fontSize: 'var(--font-size-subtitle)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                fontWeight: 400,
                maxWidth: '580px'
              }}
            >
              LocalMate giúp bạn xây website, xuất hiện trên Google, chạy quảng cáo và tự động hóa những công việc online — từ một nơi duy nhất.
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/advisor')}
                className="btn-primary"
              >
                <span>Tìm gói phù hợp với bạn 0đ</span> <ArrowRight size={18} style={{ flexShrink: 0 }} />
              </Button>

              <Button
                variant="white"
                size="lg"
                onClick={() => navigate('/dich-vu')}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-navy)',
                }}
              >
                Xem dịch vụ
              </Button>
            </div>

            {/* Service Pills Bar (3-second clarity) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                alignItems: 'center',
                marginTop: '0.25rem'
              }}
            >
              {[
                { name: 'Website', icon: Layout },
                { name: 'SEO Google', icon: Search },
                { name: 'Google Maps', icon: Zap },
                { name: 'Quảng cáo', icon: TrendingUp },
                { name: 'Nội dung', icon: FileText },
                { name: 'Phần mềm', icon: Cpu }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      backgroundColor: '#f0f7f5',
                      border: '1px solid #dce8e5',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    <Icon size={13} color="var(--color-teal-dark)" />
                    {item.name}
                  </span>
                );
              })}
            </div>

            {/* Trust Badges Bar */}
            <div className="hero-trust-badges">
              <div className="hero-trust-item">
                <CheckCircle2 size={18} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                <span>Bàn giao mới thanh toán</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                <span>Không phí ẩn phát sinh</span>
              </div>
              <div className="hero-trust-item">
                <ShieldCheck size={18} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                <span>Khách giữ 100% tài khoản</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Mockup */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #d2e4e0',
                boxShadow: '0 20px 45px -10px rgba(8, 59, 76, 0.12), 0 2px 10px rgba(8, 59, 76, 0.05)',
                overflow: 'hidden'
              }}
            >
              {/* Browser Bar */}
              <div className="mockup-top-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexGrow: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: '0.35rem', flexShrink: 0 }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }}></span>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }}></span>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }}></span>
                  </div>
                  <div className="mockup-url-box">
                    <Lock size={11} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                    <span className="mockup-url-text">localmate.vn/dich-vu</span>
                  </div>
                </div>
                <div className="mockup-demo-tag">
                  <Zap size={11} fill="#ffffff" style={{ flexShrink: 0 }} />
                  <span>Demo trước 0đ</span>
                </div>
              </div>

              {/* Website Content Mockup */}
              <div style={{ padding: '1.25rem', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: 'var(--color-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                      LM
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-navy)', lineHeight: 1.1 }}>
                        LocalMate Digital Center
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Star size={11} fill="#ff8a00" color="#ff8a00" /> Giải pháp trọn gói Doanh Nghiệp Nhỏ
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-teal-dark)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(15, 169, 154, 0.3)'
                    }}
                  >
                    Đã xác minh
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--color-navy)',
                    color: '#ffffff',
                    padding: '1.25rem',
                    borderRadius: '14px',
                    marginBottom: '0.85rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--color-teal-soft)', fontWeight: 700, letterSpacing: '0.04em' }}>
                      Đối tác số doanh nghiệp nhỏ
                    </span>
                    <span style={{ fontSize: '0.65rem', backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', padding: '2px 6px', borderRadius: 4 }}>Bảo trì 12 tháng</span>
                  </div>

                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, margin: '0.3rem 0 0.6rem 0', lineHeight: 1.3 }}>
                    Xây Web · SEO Google · Chạy Quảng Cáo · CRM &amp; Tự Động Hóa
                  </h4>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: 'var(--color-orange)', color: '#ffffff', fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: 20, fontWeight: 700 }}>
                      Hotline: 0834.422.439
                    </span>
                    <span style={{ backgroundColor: 'var(--color-teal)', color: '#fff', fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: 20, fontWeight: 700 }}>
                      Zalo Tư Vấn Mở Rộng
                    </span>
                  </div>
                </div>

                {/* 2 Mini Service Feature Blocks */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div style={{ border: '1px solid #d2e4e0', padding: '0.75rem', borderRadius: '10px', backgroundColor: '#f9fcfb' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-teal-dark)', fontWeight: 700 }}>🌐 Web &amp; SEO Local</div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: 2 }}>Xuất hiện top Google</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: 2 }}>Từ 2.900.000đ</div>
                  </div>

                  <div style={{ border: '1px solid #d2e4e0', padding: '0.75rem', borderRadius: '10px', backgroundColor: '#f9fcfb' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-teal-dark)', fontWeight: 700 }}>⚙️ CRM &amp; Automation</div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: 2 }}>Tự động hóa Zalo</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: 2 }}>Tiết kiệm nhân sự</div>
                  </div>
                </div>

                <div className="mockup-notification-pill">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', minWidth: 0 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block', flexShrink: 0 }}></span>
                    <span className="mockup-notification-text">
                      💬 <strong>Lead mới:</strong> "Khách hàng yêu cầu báo giá SEO &amp; Web nhà hàng"
                    </span>
                  </div>
                  <span className="mockup-notification-badge">Vừa xong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
