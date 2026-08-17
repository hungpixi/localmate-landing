import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Gift, 
  PhoneCall, 
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { useRouter } from '../layout/Router';

export const ClientRequirementsSection: React.FC = () => {
  const { navigate } = useRouter();

  const checklistItems = [
    { label: 'Tên cửa hàng / Cơ sở', desc: 'Tên quán ăn, phòng khám hoặc dịch vụ bạn đang kinh doanh' },
    { label: 'Hình ảnh thực tế', desc: 'Ảnh chụp mặt tiền, sản phẩm thực tế hoặc bảng hiệu' },
    { label: 'Nội dung giới thiệu', desc: 'Mô tả dịch vụ, điểm nổi bật hoặc câu chuyện tiệm' },
    { label: 'Bảng giá niêm yết', desc: 'Menu, bảng giá dịch vụ hoặc ưu đãi khai trương' },
    { label: 'Hotline / Số Zalo', desc: 'Số điện thoại để khách bấm gọi hoặc nhắn tin ngay' },
    { label: 'Logo nếu có', desc: 'Chưa có logo, LocalMate sẽ tạo chữ tên tiệm rõ đẹp miễn phí' }
  ];

  const pageStructure = [
    {
      step: '01',
      title: 'Giới thiệu & Hình ảnh',
      desc: 'Hình ảnh sắc nét, câu giới thiệu ngắn gọn gây ấn tượng trong 3 giây đầu',
      icon: FileText
    },
    {
      step: '02',
      title: 'Bảng giá & Dịch vụ',
      desc: 'Trình bày rõ ràng danh mục, bảng giá, điểm khác biệt và hình ảnh thực tế',
      icon: Gift
    },
    {
      step: '03',
      title: 'Liên hệ & Chỉ đường',
      desc: 'Nút gọi Hotline, nhắn Zalo một chạm và bản đồ chỉ đường Google Maps',
      icon: PhoneCall
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('concept-generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/landing-490k');
    }
  };

  return (
    <section 
      id="yeu-cau-thong-tin"
      style={{ 
        padding: 'clamp(3rem, 5vw, 5rem) 0', 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} /> QUY TRÌNH TIẾP NHẬN THÔNG TIN
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bạn cần chuẩn bị những gì cho LocalMate?
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Chỉ cần gửi các thông tin cơ bản dưới đây qua Zalo, LocalMate sẽ sắp xếp và lo trọn gói phần còn lại cho bạn.
          </p>
        </div>

        {/* 1. Main Checklist Card */}
        <div className="requirements-checklist-card">
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.775rem', fontWeight: 800, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              DANH SÁCH THÔNG TIN CƠ BẢN
            </span>
          </div>

          <div className="checklist-items-grid">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="checklist-item-row">
                <div className="check-dot">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--color-navy)', display: 'block' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Cấu Trúc Trang 3 Phần (Page Structure) */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)' }}>
              3 phần quan trọng giúp khách dễ bấm gọi
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              Trình bày rõ ràng để khách hàng mở ra là hiểu ngay và liên hệ thuận tiện nhất
            </p>
          </div>

          <div className="structure-steps-grid">
            {pageStructure.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="structure-step-card interactive-card">
                  <span className="step-num-badge">{step.step}</span>
                  <div className="step-icon-box">
                    <Icon size={22} color="var(--color-primary)" />
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Section Gói Website 1 Trang 490K Redesigned */}
        <div className="website-490k-container">
          <div className="website-490k-grid">
            {/* Left: Value Proposition, 4 Benefits & CTAs */}
            <div className="website-490k-main">
              <span className="eyebrow-text">
                WEBSITE 1 TRANG CHO CỬA HÀNG NHỎ
              </span>

              <h3 className="card-title">
                Có ngay một website để gửi khách xem và liên hệ
              </h3>

              <p className="card-desc">
                Đủ thông tin dịch vụ, bảng giá, hình ảnh và nút gọi/Zalo. Phù hợp khi bạn cần một website gọn, làm nhanh và không tốn nhiều chi phí.
              </p>

              {/* 4 Benefits Grid */}
              <div className="benefits-2x2-grid">
                <div className="benefit-item">
                  <Check size={16} color="var(--color-primary)" className="benefit-icon" />
                  <span>Hiển thị đẹp trên điện thoại</span>
                </div>
                <div className="benefit-item">
                  <Check size={16} color="var(--color-primary)" className="benefit-icon" />
                  <span>Có nút gọi và Zalo</span>
                </div>
                <div className="benefit-item">
                  <Check size={16} color="var(--color-primary)" className="benefit-icon" />
                  <span>Chỉnh nội dung trước bàn giao</span>
                </div>
                <div className="benefit-item">
                  <Check size={16} color="var(--color-primary)" className="benefit-icon" />
                  <span>Báo giá trước, không tự phát sinh</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="action-row">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToContact}
                  style={{ fontWeight: 700 }}
                >
                  <span>Xem thử website 490K</span>
                  <ArrowRight size={17} />
                </Button>

                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-zalo-link"
                >
                  Hỏi nhanh qua Zalo →
                </a>
              </div>
            </div>

            {/* Right: Price & Meta Badge */}
            <div className="website-490k-pricing-side">
              <div className="price-badge-card">
                <span className="price-tagline">Chi phí trọn gói</span>
                <div className="price-amount">490.000đ</div>
                <div className="price-meta">Trọn gói · Bàn giao 24–48 giờ</div>
                <div className="price-guarantee">✓ Không phí duy trì tháng</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .requirements-checklist-card {
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.25rem, 3vw, 2rem);
        }

        .checklist-items-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
        }

        @media (min-width: 640px) {
          .checklist-items-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem 1.5rem;
          }
        }

        .checklist-item-row {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .check-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: var(--color-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .structure-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .structure-steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .structure-step-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.65rem;
        }

        .step-num-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--color-primary);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* 490K Redesigned Container */
        .website-490k-container {
          margin-top: 3.5rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-top: 4px solid var(--color-primary);
          border-radius: var(--radius-2xl);
          padding: clamp(1.75rem, 3.5vw, 2.75rem);
          box-shadow: var(--shadow-md);
        }

        .website-490k-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 860px) {
          .website-490k-grid {
            grid-template-columns: 1.45fr 0.85fr;
            gap: 3rem;
          }
        }

        .website-490k-main {
          display: flex;
          flex-direction: column;
        }

        .eyebrow-text {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }

        .card-title {
          font-size: clamp(1.35rem, 2.2vw, 1.75rem);
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.3;
          margin: 0 0 0.65rem 0;
        }

        .card-desc {
          font-size: 0.925rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .benefits-2x2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem 1.25rem;
          margin-bottom: 1.75rem;
        }

        @media (min-width: 540px) {
          .benefits-2x2-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        .benefit-icon {
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

        /* Right Pricing Card */
        .website-490k-pricing-side {
          display: flex;
          justify-content: center;
        }

        .price-badge-card {
          width: 100%;
          max-width: 320px;
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
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
