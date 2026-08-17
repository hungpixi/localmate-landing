import React from 'react';
import { Container } from '../ui/Container';
import { PAIN_POINTS } from '../../data/landingContent';
import { Sparkles, Check, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <section id="thuc-trang" style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0', backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
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

        {/* 1. Redesigned Light Premium 2-Column Overview Card */}
        <div className="solution-overview-card">
          <div className="solution-overview-grid">
            {/* Left Column: Heading, Body & Trust lines */}
            <div className="solution-left-col">
              <span className="solution-eyebrow">
                LOCALMATE GIÚP BẠN LÀM RÕ
              </span>

              <h3 className="solution-heading">
                Giúp khách hiểu bạn bán gì và liên hệ dễ hơn
              </h3>

              <p className="solution-body">
                LocalMate sắp xếp lại website, Google Maps, thông tin dịch vụ, bảng giá và nút gọi/Zalo để khách xem là hiểu ngay.
              </p>

              <p className="solution-supporting">
                Bạn không cần biết kỹ thuật. Mỗi phần đều được báo giá rõ trước khi làm.
              </p>

              <div className="solution-trust-row">
                <div className="solution-trust-pill">
                  <CheckCircle2 size={16} color="var(--color-primary)" className="trust-icon" />
                  <span>Làm phần cần trước, không ép mua cả gói</span>
                </div>
                <div className="solution-trust-pill">
                  <CheckCircle2 size={16} color="var(--color-primary)" className="trust-icon" />
                  <span>Báo giá rõ trước khi làm</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Clean Benefit Rows (No Dark Nested Card) */}
            <div className="solution-right-col">
              <div className="solution-benefits-list">
                <div className="solution-benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Check size={16} color="var(--color-primary)" strokeWidth={2.5} />
                  </div>
                  <span className="benefit-text">Khách hiểu bạn bán gì</span>
                </div>

                <div className="solution-benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Check size={16} color="var(--color-primary)" strokeWidth={2.5} />
                  </div>
                  <span className="benefit-text">Dễ tìm trên Google</span>
                </div>

                <div className="solution-benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Check size={16} color="var(--color-primary)" strokeWidth={2.5} />
                  </div>
                  <span className="benefit-text">Có nơi xem dịch vụ &amp; giá</span>
                </div>

                <div className="solution-benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Check size={16} color="var(--color-primary)" strokeWidth={2.5} />
                  </div>
                  <span className="benefit-text">Có nút gọi/Zalo rõ ràng</span>
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
        /* Light Premium Solution Overview Card */
        .solution-overview-card {
          background-color: var(--color-primary-soft, #F4FBF7);
          border: 1px solid var(--color-primary-border, #DCEFE4);
          border-radius: 20px;
          padding: clamp(1.75rem, 3.5vw, 2.75rem);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.25rem;
        }

        .solution-overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 860px) {
          .solution-overview-grid {
            grid-template-columns: 1.35fr 0.95fr;
            gap: 2.5rem;
          }
        }

        .solution-left-col {
          display: flex;
          flex-direction: column;
        }

        .solution-eyebrow {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }

        .solution-heading {
          font-size: clamp(1.25rem, 2.2vw, 1.65rem);
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0 0 0.75rem 0;
        }

        .solution-body {
          font-size: 0.925rem;
          color: var(--color-navy);
          line-height: 1.6;
          margin: 0 0 0.5rem 0;
        }

        .solution-supporting {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0 0 1.25rem 0;
        }

        .solution-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .solution-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: #ffffff;
          border: 1px solid var(--color-primary-border, #DCEFE4);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .trust-icon {
          flex-shrink: 0;
        }

        /* Right Column: Benefits Checklist */
        .solution-right-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (min-width: 860px) {
          .solution-right-col {
            border-left: 1px solid var(--color-primary-border, #DCEFE4);
            padding-left: 2.25rem;
          }
        }

        @media (max-width: 859px) {
          .solution-right-col {
            border-top: 1px dashed var(--color-primary-border, #DCEFE4);
            padding-top: 1.5rem;
          }
        }

        .solution-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .solution-benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .benefit-icon-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid var(--color-primary-border, #DCEFE4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .benefit-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.4;
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
