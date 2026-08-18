import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { useRouter } from '../layout/Router';

interface HeroSectionProps {
  onOpenDemoForm?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoForm }) => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
      id="hero"
    >
      <Container size="lg" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        <div className="hero-centered-content">
          {/* Compact Eyebrow */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow-pill">
              <Sparkles size={13} color="var(--color-primary)" className="sparkle-icon" />
              <span>WEBSITE • GOOGLE • QUẢNG CÁO • NỘI DUNG</span>
            </span>
          </div>

          {/* Main Headline — Balanced typography for all viewports */}
          <h1 className="hero-headline">
            Giúp doanh nghiệp nhỏ có website, lên Google <span className="headline-highlight">và tìm thêm khách.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Chọn đúng việc bạn cần: làm website bán hàng, lên Google Maps, chạy Google Ads hoặc viết bài Facebook mỗi tháng.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="hero-cta-group">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (onOpenDemoForm) {
                  onOpenDemoForm();
                } else {
                  navigate('/lien-he');
                }
              }}
              className="hero-btn-action hero-btn-primary"
            >
              <Sparkles size={17} />
              <span>Nhận website demo 0đ</span>
              <ArrowRight size={17} />
            </Button>

            <Button
              variant="white"
              size="lg"
              onClick={() => {
                const el = document.getElementById('can-lam-gi') || document.getElementById('bang-gia');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/bang-gia');
                }
              }}
              className="hero-btn-action hero-btn-secondary"
            >
              <span>Xem dịch vụ &amp; giá</span>
            </Button>
          </div>

          {/* Light 4-Item Trust Grid — No text cut-off on mobile */}
          <div className="hero-trust-strip">
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Báo giá trước khi làm</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Xem thử demo 0đ</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Bàn giao tài khoản</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={15} color="var(--color-primary)" className="trust-icon" strokeWidth={2.5} />
              <span>Hỗ trợ sau bàn giao</span>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .hero-centered-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
        }

        .hero-eyebrow-wrapper {
          display: inline-flex;
          margin-bottom: 1.15rem;
        }

        .hero-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.725rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sparkle-icon {
          flex-shrink: 0;
        }

        .hero-headline {
          font-size: clamp(1.85rem, 5.5vw, 3.25rem);
          color: var(--color-navy);
          font-weight: 800;
          line-height: 1.22;
          letter-spacing: -0.025em;
          margin: 0 0 1rem 0;
          text-align: center;
          text-wrap: balance;
        }

        .headline-highlight {
          color: var(--color-primary);
          display: inline;
        }

        .hero-subtitle {
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0 auto 1.75rem auto;
          max-width: 580px;
          text-align: center;
          text-wrap: pretty;
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          max-width: 440px;
          margin-bottom: 2rem;
        }

        @media (min-width: 520px) {
          .hero-cta-group {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: auto;
            max-width: none;
          }
        }

        .hero-btn-action {
          width: 100%;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        @media (min-width: 520px) {
          .hero-btn-action {
            width: auto;
          }
        }

        /* Trust Strip Styles */
        .hero-trust-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem 0.85rem;
          padding: 0.85rem 1rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-navy);
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 720px;
          box-sizing: border-box;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          justify-content: flex-start;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .trust-icon {
          flex-shrink: 0;
        }

        .trust-divider {
          display: none;
        }

        @media (min-width: 768px) {
          .hero-trust-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            font-size: 0.85rem;
          }
          .trust-strip-item {
            justify-content: center;
          }
          .trust-divider {
            display: block;
            width: 1px;
            height: 14px;
            background-color: var(--color-border);
          }
        }
      `}</style>
    </section>
  );
};
