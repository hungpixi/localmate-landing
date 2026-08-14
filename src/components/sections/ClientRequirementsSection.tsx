import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Rocket, 
  FileText, 
  Gift, 
  PhoneCall, 
  ShieldCheck, 
  Smartphone,
  BarChart2
} from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

export const ClientRequirementsSection: React.FC = () => {
  const checklistItems = [
    { label: 'Tên sản phẩm / Dịch vụ', desc: 'Tên quán, món ăn hoặc dịch vụ bạn cung cấp' },
    { label: 'Hình ảnh thực tế', desc: 'Ảnh chụp quán, sản phẩm hoặc hình có sẵn' },
    { label: 'Nội dung cơ bản', desc: 'Mô tả ngắn, điểm nổi bật hoặc câu chuyện thương hiệu' },
    { label: 'Giá hoặc ưu đãi nếu có', desc: 'Menu, bảng giá, combo giảm giá khai trương...' },
    { label: 'Hotline / Số Zalo tư vấn', desc: 'Số điện thoại để khách bấm gọi hoặc nhắn tin ngay' },
    { label: 'Logo nếu có', desc: 'Chưa có logo? LocalMate sẽ hỗ trợ tạo text logo chuẩn đẹp' }
  ];

  const pageStructure = [
    {
      step: '01',
      title: 'Giới thiệu sản phẩm',
      desc: 'Hình ảnh bắt mắt, thông điệp cuốn hút gây ấn tượng trong 3s đầu',
      icon: <FileText size={22} color="var(--color-primary)" />
    },
    {
      step: '02',
      title: 'Sản phẩm & Lợi ích',
      desc: 'Trình bày rõ ràng menu, bảng giá, điểm khác biệt và feedback khách hàng',
      icon: <Gift size={22} color="var(--color-primary)" />
    },
    {
      step: '03',
      title: 'Liên hệ & Đặt hàng',
      desc: 'Nút gọi Hotline, Zalo Chat một chạm, bản đồ chỉ đường Google Maps',
      icon: <PhoneCall size={22} color="var(--color-primary)" />
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('concept-generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(CONTACT_INFO.zaloUrl, '_blank');
    }
  };

  return (
    <section 
      id="yeu-cau-thong-tin"
      style={{ 
        padding: 'var(--space-section-py) 0', 
        backgroundColor: 'var(--color-bg)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          eyebrow="ĐƠN GIẢN • NHANH CHÓNG • KHÔNG PHỨC TẠP"
          title="Bạn cần gửi gì cho LocalMate?"
          subtitle="Chỉ cần gửi những thông tin cơ bản dưới đây, LocalMate sẽ tự sắp xếp và lo trọn gói phần còn lại cho bạn!"
        />

        {/* 1. Main Checklist Card with 3D Mascot Corner Image */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '2rem'
          }}
          className="checklist-corner-card"
        >
          <div className="checklist-corner-grid">
            {/* Left Column: 6 Checklist Items */}
            <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '0.775rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-dark)',
                    backgroundColor: 'var(--color-primary-soft)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                  }}
                >
                  ✨ CHUẨN BỊ SIÊU NHANH
                </span>
                <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
                  Danh sách thông tin cần cung cấp:
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.4rem 0',
                      borderBottom: idx < checklistItems.length - 1 ? '1px dashed var(--color-border-light)' : 'none'
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(13, 118, 71, 0.3)'
                      }}
                    >
                      <CheckCircle2 size={16} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)' }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: '0.825rem', color: 'var(--color-text-subtle)' }}>
                        — {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Corner: Mascot Store Illustration in the corner */}
            <div className="corner-mascot-container">
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Soft Organic Aura Glow behind mascot */}
                <div
                  style={{
                    position: 'absolute',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-soft)',
                    filter: 'blur(30px)',
                    zIndex: 1,
                    opacity: 0.8
                  }}
                />
                
                <img
                  src="/assets/illustrations/mascot-store-corner.png"
                  alt="LocalMate Mascot & Store"
                  style={{
                    width: '100%',
                    maxWidth: '260px',
                    height: 'auto',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                    display: 'block',
                    filter: 'drop-shadow(0 12px 20px rgba(13, 118, 71, 0.15))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Cấu Trúc Trang 3 Bước (Page Structure) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--color-text)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              🌿 Cấu trúc trang chuẩn chuyển đổi
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              Mỗi section đều được thiết kế tỉ mỉ để dẫn dắt khách hàng từ tò mò đến hành động gọi điện / đặt mua
            </p>
          </div>

          <div className="structure-steps-grid">
            {pageStructure.map((step, idx) => (
              <React.Fragment key={idx}>
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-subtle)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.75rem',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                  className="interactive-card"
                >
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(13, 118, 71, 0.25)'
                    }}
                  >
                    {step.step}
                  </span>

                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-primary-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {step.icon}
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
                    {step.title}
                  </h4>

                  <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>

                {idx < pageStructure.length - 1 && (
                  <div className="step-arrow-divider">
                    <ArrowRight size={22} color="var(--color-primary)" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Highlight Notice Banner */}
          <div
            style={{
              marginTop: '1.5rem',
              backgroundColor: 'var(--color-primary-soft)',
              border: '1px solid var(--color-primary-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '0.85rem 1.25rem',
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--color-primary-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}
          >
            <Sparkles size={16} color="var(--color-primary)" />
            <span>LocalMate sẽ sắp xếp lại toàn bộ hình ảnh và bài viết thành một trang cực kỳ gọn gàng và dễ hiểu!</span>
          </div>
        </div>

        {/* 3. Landing Page 490K Special Offer Package Card */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid var(--color-primary)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary-dark)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.775rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            <Rocket size={14} /> GÓI KHỞI TẠO LANDING PAGE TIẾT KIỆM
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-text)', margin: 0, lineHeight: 1 }}>
              490.000đ
            </h2>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
              trọn gói
            </span>
          </div>

          {/* Feature Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem 1rem',
              flexWrap: 'wrap',
              fontSize: '0.825rem',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '1.75rem'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'var(--color-surface-subtle)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <Smartphone size={14} color="var(--color-primary)" /> 3 Section chuẩn
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'var(--color-surface-subtle)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              📱 Mobile-First 100%
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'var(--color-surface-subtle)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              📊 Cài sẵn GA4 &amp; GTM
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'var(--color-surface-subtle)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <BarChart2 size={14} color="var(--color-primary)" /> Tracking cơ bản
            </span>
          </div>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.85rem',
              maxWidth: '520px',
              margin: '0 auto'
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              style={{ width: '100%', fontSize: '1.05rem', fontWeight: 800, padding: '0.95rem 1.75rem' }}
            >
              <Rocket size={18} />
              <span>Làm Landing Page 490K</span>
            </Button>

            <Button
              variant="white"
              size="md"
              onClick={() => window.open(CONTACT_INFO.zaloUrl, '_blank')}
              style={{ width: '100%', fontSize: '0.925rem', fontWeight: 700 }}
            >
              <MessageCircle size={16} color="var(--color-primary)" />
              <span>Nhắn Zalo LocalMate ngay</span>
            </Button>
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={14} color="var(--color-primary)" /> Uy tín
            </span>
            <span>•</span>
            <span>Minh bạch</span>
            <span>•</span>
            <span>Hỗ trợ tận tâm 🌿</span>
          </div>
        </div>
      </Container>

      <style>{`
        .checklist-corner-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        .corner-mascot-container {
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 100%;
        }

        .structure-steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          align-items: center;
        }

        .step-arrow-divider {
          display: none;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .checklist-corner-grid {
            grid-template-columns: 1.3fr 0.7fr;
            gap: 2rem;
          }

          .structure-steps-grid {
            grid-template-columns: 1fr auto 1fr auto 1fr;
            gap: 0.75rem;
          }

          .step-arrow-divider {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
};
