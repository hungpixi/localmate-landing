import React from 'react';
import { Container } from '../ui/Container';
import { PAIN_POINTS } from '../../data/landingContent';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const PainPointsSection: React.FC = () => {
  const { navigate } = useRouter();

  const handlePainClick = (link: string) => {
    if (link.startsWith('#')) {
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link);
    }
  };

  return (
    <section id="thuc-trang" style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 0', backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> BẠN CÓ ĐANG GẶP TÌNH TRẠNG NÀY?
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Làm tốt nhưng khách tìm trên Google lại không thấy bạn?
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Nhiều cửa hàng có sản phẩm tốt nhưng thông tin trên mạng còn thiếu, khó tìm hoặc chưa đủ để khách tin và liên hệ.
          </p>
        </div>

        {/* 1. Redesigned 2-Column Dark Card */}
        <div className="dark-solution-banner">
          <div className="dark-banner-grid">
            {/* Left Column: Heading, Body & Trust line */}
            <div className="dark-banner-left">
              <span className="dark-eyebrow">
                LOCALMATE GIẢI QUYẾT PHẦN KHÓ NÀY
              </span>

              <h3 className="dark-heading">
                Giúp khách hiểu bạn bán gì, tin bạn và biết cách liên hệ
              </h3>

              <p className="dark-body">
                LocalMate sắp xếp lại những thứ khách cần thấy: website, Google Maps, thông tin dịch vụ, bảng giá, hình ảnh và nút gọi/Zalo.
              </p>

              <p className="dark-supporting">
                Bạn không cần biết kỹ thuật. Chúng tôi làm từng phần cần thiết và báo giá rõ trước khi bắt đầu.
              </p>

              <div className="dark-trust-line">
                <CheckCircle2 size={16} color="var(--color-primary-light)" style={{ flexShrink: 0 }} />
                <span>Làm đúng phần cần trước, không ép mua cả gói</span>
              </div>
            </div>

            {/* Right Column: 4 Outcomes Checklist */}
            <div className="dark-banner-right">
              <div className="dark-outcomes-box">
                <div className="dark-outcome-item">
                  <span className="dark-check-icon">✓</span>
                  <span>Khách hiểu bạn bán gì</span>
                </div>
                <div className="dark-outcome-item">
                  <span className="dark-check-icon">✓</span>
                  <span>Dễ tìm trên Google</span>
                </div>
                <div className="dark-outcome-item">
                  <span className="dark-check-icon">✓</span>
                  <span>Có nơi xem dịch vụ &amp; giá</span>
                </div>
                <div className="dark-outcome-item">
                  <span className="dark-check-icon">✓</span>
                  <span>Có nút gọi/Zalo rõ ràng</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 4 Actionable Pain Cards Grid */}
        <div className="pain-cards-4col-grid">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.number}
              className="pain-card interactive-card"
              onClick={() => handlePainClick(item.link)}
            >
              <div className="pain-card-header">
                <span className="pain-num-badge">{item.number}</span>
              </div>

              <h4 className="pain-card-title">{item.title}</h4>

              <p className="pain-card-desc">{item.desc}</p>

              <div className="pain-card-cta">
                <span>{item.cta}</span>
                <ArrowRight size={14} className="cta-arrow" />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        /* Dark Solution Banner */
        .dark-solution-banner {
          background-color: var(--color-navy);
          border-radius: var(--radius-2xl);
          padding: clamp(1.75rem, 3.5vw, 2.75rem);
          color: #ffffff;
          box-shadow: var(--shadow-md);
          margin-bottom: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dark-banner-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 860px) {
          .dark-banner-grid {
            grid-template-columns: 1.35fr 0.85fr;
            gap: 2.5rem;
          }
        }

        .dark-banner-left {
          display: flex;
          flex-direction: column;
        }

        .dark-eyebrow {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-light);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.65rem;
          display: block;
        }

        .dark-heading {
          font-size: clamp(1.25rem, 2.2vw, 1.65rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.35;
          margin: 0 0 0.85rem 0;
        }

        .dark-body {
          font-size: 0.925rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin: 0 0 0.75rem 0;
        }

        .dark-supporting {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.55;
          margin: 0 0 1.25rem 0;
        }

        .dark-trust-line {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary-light);
          background-color: rgba(13, 118, 71, 0.35);
          border: 1px solid rgba(34, 197, 94, 0.35);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .dark-banner-right {
          display: flex;
          justify-content: center;
        }

        .dark-outcomes-box {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .dark-outcome-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }

        .dark-check-icon {
          color: var(--color-primary-light);
          font-weight: 900;
          font-size: 1rem;
        }

        /* 4 Pain Cards */
        .pain-cards-4col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 580px) {
          .pain-cards-4col-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pain-cards-4col-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pain-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .pain-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .pain-card-header {
          margin-bottom: 0.65rem;
        }

        .pain-num-badge {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          display: inline-block;
        }

        .pain-card-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0 0 0.5rem 0;
        }

        .pain-card-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0 0 1rem 0;
          flex: 1;
        }

        .pain-card-cta {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: auto;
        }

        .cta-arrow {
          transition: transform var(--transition-fast);
        }

        .pain-card:hover .cta-arrow {
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
};
