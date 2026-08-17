import React from 'react';
import { Container } from '../ui/Container';
import { CONTACT_INFO } from '../../data/landingContent';
import { ShieldCheck, Eye, Key, Phone, Building2, MapPin, Mail, ExternalLink, Smartphone, CheckCircle, Headphones } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      num: '01',
      icon: Eye,
      title: 'Xem demo trước khi quyết định',
      desc: 'LocalMate dựng sẵn bản mẫu website 0đ để bạn xem trên điện thoại trước khi chốt làm.'
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: 'Giá được chốt trước khi làm',
      desc: 'Báo giá rõ ràng từng hạng mục, nghiệm thu hài lòng mới thanh toán, không phát sinh chi phí ẩn.'
    },
    {
      num: '03',
      icon: Smartphone,
      title: 'Website tối ưu điện thoại',
      desc: 'Bố cục chữ to rõ ràng, hình ảnh sắc nét, có nút bấm gọi điện và nhắn Zalo trực tiếp.'
    },
    {
      num: '04',
      icon: Phone,
      title: 'Hotline & Zalo hoạt động rõ ràng',
      desc: 'Đội ngũ tư vấn trực tiếp, phản hồi nhanh chóng và có mặt khi bạn cần hỗ trợ.'
    },
    {
      num: '05',
      icon: Key,
      title: 'Bạn sở hữu tài khoản & dữ liệu',
      desc: 'Bàn giao 100% quyền quản trị tên miền, tài khoản Google Maps, Google Ads và Fanpage chính chủ.'
    },
    {
      num: '06',
      icon: Headphones,
      title: 'Có người hỗ trợ sau bàn giao',
      desc: 'Hướng dẫn sử dụng tận tình, hỗ trợ cập nhật nội dung và sửa lỗi kỹ thuật trọn đời dự án.'
    }
  ];

  return (
    <section id="cam-ket" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#fafbfa', borderBottom: '1px solid var(--color-border)' }}>
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <ShieldCheck size={14} /> CAM KẾT &amp; PHÁP NHÂN MINH BẠCH
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Rõ ràng từ đầu, yên tâm khi bàn giao
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Sự minh bạch, giá cả rõ ràng và sự tôn trọng khách hàng là nền tảng để LocalMate đồng hành lâu dài cùng doanh nghiệp bạn.
          </p>
        </div>

        {/* 6 Clean Numbered Cards (3x2 Desktop, 2x3 Tablet, 1 col Mobile) */}
        <div className="trust-grid-3x2">
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="trust-numbered-card interactive-card">
                <div className="trust-card-top">
                  <span className="trust-num-badge">{item.num}</span>
                  <div className="trust-icon-box">
                    <Icon size={18} color="var(--color-primary)" />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Legal & Direct Support 2-Column Grid */}
        <div className="company-trust-grid" style={{ marginTop: '2.5rem' }}>
          {/* Left Box: Legal Identity */}
          <div className="legal-identity-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="legal-icon-box">
                  <Building2 size={22} color="var(--color-primary)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    PHÁP NHÂN DOANH NGHIỆP
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                    CÔNG TY TNHH LOCALMATE
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={15} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span><strong>Mã số thuế:</strong> 0318567890</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={15} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Trụ sở:</strong> TP. Hồ Chí Minh &amp; Hỗ trợ trực tuyến Toàn quốc (24/7)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={15} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span><strong>Email:</strong> {CONTACT_INFO.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={15} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span><strong>Hotline / Zalo:</strong> {CONTACT_INFO.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div className="legal-bottom-pill">
              <span>Đồng hành cùng hộ kinh doanh và cửa hàng địa phương • Hợp đồng minh bạch &amp; xuất hóa đơn VAT đầy đủ.</span>
            </div>
          </div>

          {/* Right Box: Direct Advisory */}
          <div className="advisory-card">
            <div>
              <span style={{ fontSize: '0.725rem', fontWeight: 800, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                TƯ VẤN &amp; HỖ TRỢ TRỰC TIẾP
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                Bạn đang cần tư vấn theo ngành nghề?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Không cần phải tự mày mò hay lo lắng phát sinh chi phí. Đội ngũ LocalMate luôn sẵn sàng lắng nghe và gửi bạn xem trước bản demo website 0đ phù hợp nhất.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="zalo-cta-btn"
              >
                <span>Nhắn tin Zalo tư vấn ngay</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="phone-cta-btn"
              >
                <Phone size={15} color="var(--color-primary)" />
                <span>Gọi Hotline: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .trust-grid-3x2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .trust-grid-3x2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .trust-grid-3x2 {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.25rem;
          }
        }

        .trust-numbered-card {
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background-color: #ffffff;
          box-sizing: border-box;
        }

        .trust-card-top {
          display: flex;
          justifyContent: space-between;
          align-items: center;
        }

        .trust-num-badge {
          font-size: 0.85rem;
          font-weight: 900;
          color: var(--color-primary);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          font-variant-numeric: tabular-nums;
        }

        .trust-icon-box {
          width: 34px;
          height: 34px;
          background-color: var(--color-primary-soft);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .company-trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 860px) {
          .company-trust-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .legal-identity-card, .advisory-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(1.25rem, 3vw, 1.75rem);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 1.5rem;
          box-sizing: border-box;
        }

        .legal-identity-card {
          border-left: 4px solid var(--color-primary);
        }

        .advisory-card {
          border-left: 4px solid var(--color-primary-light);
        }

        .legal-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background-color: var(--color-primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .legal-bottom-pill {
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--color-primary-dark);
          font-weight: 600;
          line-height: 1.4;
        }

        .zalo-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background-color: var(--color-primary);
          color: #ffffff;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .zalo-cta-btn:hover {
          background-color: var(--color-primary-hover);
        }

        .phone-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background-color: #f8fafc;
          border: 1px solid var(--color-border);
          color: var(--color-navy);
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .phone-cta-btn:hover {
          background-color: var(--color-primary-soft);
        }
      `}</style>
    </section>
  );
};
