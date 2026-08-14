import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  Layers,
  HelpCircle,
  TrendingUp,
  Store
} from 'lucide-react';
import { useRouter } from '../layout/Router';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();

  const situations = [
    {
      id: 'fresh',
      badge: 'Bắt đầu từ số 0',
      title: 'Chưa có gì cả',
      desc: 'Chưa có website, chưa định vị Google Maps, Zalo/Facebook chưa đồng bộ thương hiệu.',
      solution: 'Gói Khởi Tạo 2.900.000đ'
    },
    {
      id: 'revamp',
      badge: 'Hồi sinh kênh',
      title: 'Có làm rồi nhưng bỏ xó',
      desc: 'Đã lập Fanpage, Google Maps nhưng không ai chăm, thông tin cũ kỹ, không có lượt hỏi.',
      solution: 'Gói Chăm Sóc & Chuẩn Hóa'
    },
    {
      id: 'scale',
      badge: 'Tăng tốc doanh số',
      title: 'Muốn mở rộng & nâng cấp',
      desc: 'Cửa hàng đang kinh doanh tốt, cần website bán hàng/đặt lịch chuyên nghiệp để tự động hóa.',
      solution: 'Giải pháp theo yêu cầu'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        padding: '3rem 0 3.5rem 0',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
      id="hero"
    >
      <Container size="lg">
        {/* Main 2-Column Hero Grid */}
        <div className="hero-two-col-grid">
          {/* Left Column: Headlines & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Top Pill Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Zap size={14} color="var(--color-primary)" /> ĐỘI DIGITAL GỌN NHẸ CHO DOANH NGHIỆP NHỎ
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'var(--font-size-h1)',
                color: 'var(--color-text)',
                fontWeight: 800,
                lineHeight: 1.18,
                marginBottom: '1.2rem',
                letterSpacing: '-0.02em'
              }}
            >
              Có việc digital? <br className="hide-mobile" />
              <span style={{ color: 'var(--color-primary)' }}>Để LocalMate làm.</span>
            </h1>

            {/* Subtitle Value Proposition */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
                maxWidth: '560px'
              }}
            >
              Không chỉ làm website. LocalMate chẩn đoán doanh nghiệp của bạn và làm đúng những thứ cần thiết để bắt đầu có khách online. Xem định hướng thiết kế 0đ trước khi triển khai — minh bạch 100%.
            </p>

            {/* Main Action Buttons */}
            <div className="hero-cta-wrapper" style={{ marginBottom: '1.75rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('concept-generator');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/advisor');
                  }
                }}
                className="btn-primary hero-btn-main"
              >
                <Sparkles size={18} />
                <span>Tạo concept giao diện 0đ</span>
                <ArrowRight size={18} />
              </Button>

              <Button
                variant="white"
                size="lg"
                onClick={() => navigate('/bang-gia')}
                className="hero-btn-sub"
              >
                <span>Xem dịch vụ &amp; bảng giá</span>
              </Button>
            </div>

            {/* 3 Core Commitments Bar */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-primary-border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem 0.85rem',
                flexWrap: 'wrap',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} color="var(--color-primary)" />
                <span>Báo giá 1 lần</span>
              </div>
              <span style={{ color: 'var(--color-border)' }} className="hide-mobile">•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Zap size={15} color="var(--color-primary)" />
                <span>Bàn giao 3-7 ngày</span>
              </div>
              <span style={{ color: 'var(--color-border)' }} className="hide-mobile">•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={15} color="var(--color-primary)" />
                <span>Bảo hành trọn đời</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Illustration Graphic */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '460px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(0.85rem, 3vw, 1.25rem)',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
                boxSizing: 'border-box'
              }}
            >
              <img
                src="/assets/illustrations/hero-store-phone.png"
                alt="LocalMate Store Digital Presence"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '340px',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-lg)',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
              <div
                style={{
                  marginTop: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8rem',
                  color: 'var(--color-primary-dark)',
                  fontWeight: 700,
                  flexWrap: 'wrap',
                  gap: '0.35rem'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Store size={15} color="var(--color-primary)" /> Hiện diện số chuẩn chỉnh
                </span>
                <span>⭐ 5.0 Đánh giá</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Bento Situations Cards Section */}
        <div style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
            <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--color-text)' }}>
              Doanh nghiệp của bạn đang ở tình trạng nào?
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              Chọn tình trạng hiện tại để LocalMate tư vấn đúng giải pháp tối ưu chi phí nhất
            </p>
          </div>

          <div className="situations-bento-grid">
            {situations.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-base)',
                  boxSizing: 'border-box'
                }}
                className="interactive-card"
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      backgroundColor: 'var(--color-primary-soft)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '0.65rem'
                    }}
                  >
                    {item.badge}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px dashed var(--color-border)',
                    paddingTop: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)'
                  }}
                >
                  <span>Khuyên dùng: {item.solution}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        .hero-two-col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        .hero-cta-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .situations-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 600px) {
          .hero-cta-wrapper {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
          }
        }

        @media (min-width: 768px) {
          .situations-bento-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 992px) {
          .hero-two-col-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

