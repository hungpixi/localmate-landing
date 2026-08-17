import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { CONTENT_PACKAGE, CONTACT_INFO } from '../../data/landingContent';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const ContentPackageSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: 'clamp(3rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="goi-content"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} /> CHĂM SÓC KÊNH TIẾT KIỆM
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            {CONTENT_PACKAGE.title}
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Duy trì bài viết và hình ảnh đẹp mắt trên Facebook, Google để khách hàng luôn thấy quán đang hoạt động sôi nổi.
          </p>
        </div>

        {/* Clean Focused 1-Card Presentation (No Cluttered Left Mockup) */}
        <div className="content-package-card">
          <div className="content-package-grid">
            {/* Left: Value & Deliverables Checklist */}
            <div className="content-package-main">
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="eyebrow-text">
                  DÀNH CHO CỬA HÀNG BẬN RỘN
                </span>
                <h3 className="card-title">
                  Có bài đăng và hình ảnh mới mỗi tuần mà không tốn thời gian
                </h3>
              </div>

              {/* Daily Micro-Cost Anchor */}
              <div className="micro-cost-pill">
                <Zap size={16} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <span>Chỉ 33.000đ/ngày — Không cần thuê nhân viên marketing toàn thời gian</span>
              </div>

              {/* 4 Deliverables */}
              <div className="deliverables-grid">
                <div className="deliverable-item">
                  <Check size={16} color="var(--color-primary)" className="deliv-icon" />
                  <span><strong>15 bài viết Facebook</strong> nội dung hấp dẫn, đúng ngành nghề</span>
                </div>
                <div className="deliverable-item">
                  <Check size={16} color="var(--color-primary)" className="deliv-icon" />
                  <span><strong>15 hình ảnh thiết kế</strong> chỉn chu, chèn logo và hotline</span>
                </div>
                <div className="deliverable-item">
                  <Check size={16} color="var(--color-primary)" className="deliv-icon" />
                  <span><strong>02 video ngắn (Reels/TikTok)</strong> dựng sẵn định dạng dọc</span>
                </div>
                <div className="deliverable-item">
                  <Check size={16} color="var(--color-primary)" className="deliv-icon" />
                  <span><strong>Gửi duyệt trước</strong> từng tuần, đồng ý mới đăng lên kênh</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-row">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/dich-vu/content-marketing')}
                  style={{ fontWeight: 700 }}
                >
                  <span>Xem mẫu bài viết &amp; đăng ký gói</span>
                  <ArrowRight size={17} />
                </Button>

                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-zalo-link"
                >
                  Tư vấn nhanh qua Zalo →
                </a>
              </div>
            </div>

            {/* Right: Pricing Box */}
            <div className="content-package-pricing-side">
              <div className="pricing-box">
                <span className="price-tagline">Gói duy trì đều đặn</span>
                <div className="price-amount">990.000đ</div>
                <div className="price-meta">/ tháng · Thanh toán linh hoạt</div>
                <div className="price-guarantee">✓ Không ràng buộc hợp đồng dài hạn</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .content-package-card {
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          border-top: 4px solid var(--color-primary);
          border-radius: var(--radius-2xl);
          padding: clamp(1.75rem, 3.5vw, 2.75rem);
          box-shadow: var(--shadow-sm);
        }

        .content-package-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 860px) {
          .content-package-grid {
            grid-template-columns: 1.45fr 0.85fr;
            gap: 3rem;
          }
        }

        .content-package-main {
          display: flex;
          flex-direction: column;
        }

        .eyebrow-text {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.35rem;
        }

        .card-title {
          font-size: clamp(1.3rem, 2vw, 1.65rem);
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0;
        }

        .micro-cost-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.55rem 0.9rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-primary-border);
          margin: 1.15rem 0 1.35rem 0;
          width: fit-content;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem;
          margin-bottom: 1.75rem;
        }

        .deliverable-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--color-navy);
        }

        .deliv-icon {
          flex-shrink: 0;
        }

        .action-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .secondary-zalo-link {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color var(--transition-fast);
        }

        .secondary-zalo-link:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }

        /* Right Pricing Box */
        .content-package-pricing-side {
          display: flex;
          justify-content: center;
        }

        .pricing-box {
          width: 100%;
          max-width: 320px;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          box-shadow: var(--shadow-sm);
        }

        .price-tagline {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .price-amount {
          font-size: clamp(2.25rem, 3.5vw, 2.75rem);
          font-weight: 900;
          color: var(--color-orange-dark);
          line-height: 1;
          margin: 0.25rem 0;
        }

        .price-meta {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-navy);
        }

        .price-guarantee {
          font-size: 0.775rem;
          color: var(--color-primary-dark);
          font-weight: 600;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px dashed var(--color-border);
          width: 100%;
        }
      `}</style>
    </section>
  );
};
