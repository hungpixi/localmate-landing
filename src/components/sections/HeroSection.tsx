import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CheckCircle2, Phone, MessageSquare, ShieldCheck, Sparkles, ArrowRight, Star, Zap, Lock, ExternalLink } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.querySelector('#bang-gia');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        backgroundColor: '#f4f9f7',
        padding: '3.5rem 0 4.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Subtle Background Accent Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          backgroundColor: 'rgba(15, 169, 154, 0.06)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 138, 0, 0.05)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
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
            {/* Eyebrow Badge */}
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
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 169, 154, 0.3)',
                  boxShadow: 'var(--shadow-sm)',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <Sparkles size={15} color="var(--color-teal)" />
                LOCALMATE · DÀNH CHO DOANH NGHIỆP MỘT NGƯỜI
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                color: 'var(--color-navy)',
                fontSize: 'var(--font-size-h1)',
                fontWeight: 800,
                lineHeight: 1.25,
                letterSpacing: '-0.03em',
                textWrap: 'balance'
              }}
            >
              Bạn tập trung làm nghề.<br />
              <span style={{ color: 'var(--color-teal)' }}>LocalMate</span> giúp khách hàng tìm thấy &amp; tin tưởng bạn.
            </h1>

            {/* Paragraph */}
            <p
              style={{
                fontSize: 'var(--font-size-subtitle)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                fontWeight: 400,
                maxWidth: '560px'
              }}
            >
              Làm website chuẩn hóa nội dung, xây kênh online và đồng hành truyền thông chuyên sâu cho hộ kinh doanh, người làm nghề, nhà thầu, cửa hàng nhỏ và doanh nghiệp một người.
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="hero-cta-group">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToForm}
                className="btn-primary"
              >
                <span>Nhận web demo</span> <ArrowRight size={18} style={{ flexShrink: 0 }} />
              </Button>
              
              <Button
                variant="white"
                size="lg"
                onClick={scrollToPricing}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-navy)',
                }}
              >
                Xem gói 2.900.000đ
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="hero-trust-badges">
              <div className="hero-trust-item">
                <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span>Bàn giao rồi mới thanh toán</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span>Không phát sinh phí ẩn</span>
              </div>
              <div className="hero-trust-item">
                <ShieldCheck size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span>Khách giữ toàn bộ tài khoản</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Website UI Mockup */}
          <div style={{ position: 'relative' }}>
            {/* Browser Frame Outer Wrapper */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #d2e4e0',
                boxShadow: '0 20px 45px -10px rgba(8, 59, 76, 0.15), 0 2px 10px rgba(8, 59, 76, 0.05)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
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
                    <span className="mockup-url-text">demo-cokhituantiem.localmate.vn</span>
                  </div>
                </div>

                {/* Integrated Clean Tag */}
                <div className="mockup-demo-tag">
                  <Zap size={11} fill="#ffffff" style={{ flexShrink: 0 }} />
                  <span>Demo trước 0đ</span>
                </div>
              </div>

              {/* Website Preview Content inside Mockup */}
              <div style={{ padding: '1.25rem', backgroundColor: '#ffffff' }}>
                {/* Mockup Header Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'var(--color-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>
                      TP
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-navy)', lineHeight: 1.1 }}>
                        Cơ Khí &amp; Nhôm Kính Tuấn Phát
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Star size={11} fill="#ff8a00" color="#ff8a00" /> 4.9/5 (128 đánh giá Google)
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
                      border: '1px solid rgba(15, 169, 154, 0.3)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                  >
                    Đã xác minh
                  </span>
                </div>

                {/* Mockup Mini Hero Banner */}
                <div
                  style={{
                    backgroundColor: 'var(--color-navy)',
                    color: '#ffffff',
                    padding: '1.25rem',
                    borderRadius: '14px',
                    marginBottom: '0.85rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--color-teal-soft)', fontWeight: 700, letterSpacing: '0.04em' }}>
                      Xưởng Cơ Khí Uy Tín Q.9 &amp; Thủ Đức
                    </span>
                    <span style={{ fontSize: '0.65rem', backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', padding: '2px 6px', borderRadius: 4, flexShrink: 0 }}>Phục vụ 24/7</span>
                  </div>
                  
                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: '0.3rem 0 0.6rem 0', lineHeight: 1.3 }}>
                    Chuyên Gia Công Cửa Sắt, Mái Tôn &amp; Khung Nhà Xưởng
                  </h4>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: 'var(--color-orange)', color: 'var(--color-navy-deep)', fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: 20, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap' }}>
                      <Phone size={12} /> 0988.xxx.888
                    </span>
                    <span style={{ backgroundColor: 'var(--color-teal)', color: '#fff', fontSize: '0.75rem', padding: '0.3rem 0.7rem', borderRadius: 'var(--radius-full)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap' }}>
                      <MessageSquare size={12} /> Zalo Nhận Báo Giá
                    </span>
                  </div>
                </div>

                {/* Mockup Product Service Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div style={{ border: '1px solid #d2e4e0', padding: '0.75rem', borderRadius: '10px', backgroundColor: '#f9fcfb' }}>
                    <div style={{ height: 42, backgroundColor: '#dcf0eb', borderRadius: 6, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'var(--color-navy)', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      🛠️ Mái Tôn Nhanh 24h
                    </div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)' }}>Thi công mái tôn &amp; xưởng</div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--color-teal-dark)', fontWeight: 700, marginTop: 2 }}>Giá chuẩn từ 290k/m²</div>
                  </div>

                  <div style={{ border: '1px solid #d2e4e0', padding: '0.75rem', borderRadius: '10px', backgroundColor: '#f9fcfb' }}>
                    <div style={{ height: 42, backgroundColor: '#dcf0eb', borderRadius: 6, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'var(--color-navy)', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden' }}>
                      🚪 Cổng Sắt Mỹ Thuật
                    </div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)' }}>Cửa sắt &amp; hàng rào đẹp</div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--color-teal-dark)', fontWeight: 700, marginTop: 2 }}>Đo đạc &amp; báo giá tận nơi</div>
                  </div>
                </div>

                {/* Live Customer Inquiry Notification Card */}
                <div className="mockup-notification-pill">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', minWidth: 0 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 0 3px rgba(39, 201, 63, 0.2)' }}></span>
                    <span className="mockup-notification-text">
                      💬 <strong>Khách gửi yêu cầu:</strong> "Báo giá làm cửa 25m² tại Thủ Đức"
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

