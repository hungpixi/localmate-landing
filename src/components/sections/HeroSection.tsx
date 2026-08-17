import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { useRouter } from '../layout/Router';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 4.5rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative'
      }}
      id="hero"
    >
      <Container size="lg">
        <div className="hero-centered-content">
          {/* Refined Eyebrow */}
          <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)',
                backgroundColor: 'var(--color-primary-soft)',
                border: '1px solid var(--color-primary-border)',
                padding: '0.35rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              <Sparkles size={14} color="var(--color-primary)" />
              Website • Google Maps • Quảng cáo • Nội dung
            </span>
          </div>

          {/* Main Headline — 3 balanced lines with no widow words */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.65rem)',
              color: 'var(--color-navy)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
              textAlign: 'center'
            }}
          >
            Giúp doanh nghiệp nhỏ<br />
            có website, lên Google<br />
            <span style={{ color: 'var(--color-primary)' }}>và tìm thêm khách hàng.</span>
          </h1>

          {/* Subtitle — 2 lines plain Vietnamese */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '660px',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Chọn đúng việc bạn cần: làm website bán hàng, đưa tiệm lên Google Maps, chạy Google Ads hoặc viết bài Facebook mỗi tháng.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="hero-cta-group" style={{ marginBottom: '2.5rem' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const el = document.getElementById('concept-generator');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/lien-he');
                }
              }}
              className="hero-btn-primary"
            >
              <Sparkles size={18} />
              <span>Nhận website demo 0đ</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="white"
              size="lg"
              onClick={() => {
                const el = document.getElementById('bang-gia');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/bang-gia');
                }
              }}
              className="hero-btn-secondary"
            >
              <span>Xem dịch vụ &amp; giá</span>
            </Button>
          </div>

          {/* Light 4-Item Trust Strip */}
          <div className="hero-trust-strip">
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" />
              <span>Giá rõ trước khi làm</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" />
              <span>Xem demo 0đ trước</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" />
              <span>Bàn giao tài khoản đầy đủ</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-strip-item">
              <Check size={16} color="var(--color-primary)" className="trust-icon" />
              <span>Có người hỗ trợ sau bàn giao</span>
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
          max-width: 860px;
          margin: 0 auto;
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 540px) {
          .hero-cta-group {
            flex-direction: row;
            width: auto;
          }
        }

        /* Trust Strip Styles */
        .hero-trust-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem 1.25rem;
          padding: 0.95rem 1.35rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-navy);
          box-shadow: var(--shadow-sm);
          width: 100%;
          max-width: 800px;
          box-sizing: border-box;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          white-space: nowrap;
          justify-content: center;
        }

        .trust-divider {
          display: none;
        }

        @media (min-width: 768px) {
          .hero-trust-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.65rem;
            padding: 0.85rem 1.25rem;
          }
          .trust-divider {
            display: block;
            width: 1px;
            height: 16px;
            background-color: var(--color-border);
          }
        }
      `}</style>
    </section>
  );
};
