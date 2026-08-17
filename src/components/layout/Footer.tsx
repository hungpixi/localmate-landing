import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin, Building2 } from 'lucide-react';
import { CONTACT_INFO, COMPANY_INFO } from '../../data/landingContent';
import { Link } from '../layout/Router';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#072e3b',
        color: '#ffffff',
        padding: 'clamp(3rem, 5vw, 4.5rem) 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        {/* Main Footer 4 Equal Columns Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Corporate Entity & Tax Info (No Top Logo for Equal Balance) */}
          <div className="footer-col footer-col-company">
            <h4 className="footer-col-title">
              {COMPANY_INFO.legalName}
            </h4>
            
            <p style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55, margin: '0 0 1rem 0' }}>
              Giải pháp làm website, đưa doanh nghiệp lên Google Maps, quảng cáo Google Ads và chăm sóc bài viết Facebook cho doanh nghiệp nhỏ.
            </p>

            {/* Structured Legal & Tax Meta */}
            <div className="company-tax-card">
              <div className="tax-item">
                <Building2 size={15} color="var(--color-primary-light)" className="tax-icon" />
                <span><strong>Mã số thuế:</strong> {COMPANY_INFO.taxCode}</span>
              </div>
              <div className="tax-item">
                <MapPin size={15} color="var(--color-primary-light)" className="tax-icon" />
                <span><strong>Địa chỉ:</strong> {COMPANY_INFO.taxAddress}</span>
              </div>
              <div className="tax-item">
                <Phone size={15} color="var(--color-orange)" className="tax-icon" />
                <span>
                  <strong>Hotline / Zalo:</strong>{' '}
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}>
                    0834.422.439
                  </a>
                </span>
              </div>
              <div className="tax-item">
                <Mail size={15} color="var(--color-primary-light)" className="tax-icon" />
                <span>
                  <strong>Email:</strong>{' '}
                  <a href={CONTACT_INFO.mailtoUrl} style={{ color: '#ffffff', textDecoration: 'none' }}>
                    {CONTACT_INFO.email}
                  </a>
                </span>
              </div>
            </div>

            {/* Official Badge: ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG */}
            <div style={{ marginTop: '0.85rem' }}>
              <a
                href="http://online.gov.vn"
                target="_blank"
                rel="noopener noreferrer"
                title="Website đã thông báo với Bộ Công Thương"
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                <img
                  src="/logo-da-thong-bao-bct.png"
                  alt="Đã thông báo Bộ Công Thương - LocalMate"
                  className="bct-official-logo"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Dịch Vụ Cốt Lõi */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Dịch Vụ Phổ Biến
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/landing-490k" className="footer-link">
                  → Website 1 trang từ 490k
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/google-maps" className="footer-link">
                  → Đưa tiệm lên Google Maps
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/google-ads" className="footer-link">
                  → Quảng cáo Google Ads
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/content-marketing" className="footer-link">
                  → Viết bài Facebook 990k/tháng
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/website-landing-page" className="footer-link">
                  → Website doanh nghiệp 3–5 trang
                </Link>
              </li>
              <li>
                <Link to="/bang-gia" className="footer-link footer-link-highlight">
                  → Xem bảng giá niêm yết đầy đủ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Danh Mục Kiến Thức & Hướng Dẫn */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Kiến Thức Thực Chiến
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/kien-thuc" className="footer-link">
                  → Hướng dẫn làm Website &amp; Landing Page
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc" className="footer-link">
                  → Tối ưu Google Maps &amp; Tìm kiếm Local
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc" className="footer-link">
                  → Kinh nghiệm chạy Google Ads hiệu quả
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc" className="footer-link">
                  → Viết bài Facebook &amp; Chăm sóc Kênh
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc" className="footer-link">
                  → Đo lường chuyển đổi &amp; Cài đặt Tracking
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc" className="footer-link footer-link-highlight">
                  → Xem toàn bộ cẩm nang kinh doanh
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Pháp Lý & Cam Kết */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Pháp Lý &amp; Cam Kết
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/gioi-thieu" className="footer-link">
                  → Về LocalMate Việt Nam
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat" className="footer-link">
                  → Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link to="/dieu-khoan" className="footer-link">
                  → Điều khoản dịch vụ &amp; hợp đồng
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-dich-vu" className="footer-link">
                  → Hỗ trợ kỹ thuật sau bàn giao
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="footer-link">
                  → Sơ đồ website (HTML Sitemap)
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="footer-link footer-link-cta">
                  → Liên hệ nhận báo giá trực tiếp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="footer-trust-strip">
          <div className="trust-pill">
            <ShieldCheck size={16} color="var(--color-primary-light)" />
            <span>Nghiệm thu hài lòng mới thanh toán</span>
          </div>
          <div className="trust-pill">
            <ShieldCheck size={16} color="var(--color-primary-light)" />
            <span>Bàn giao 100% tài khoản chính chủ</span>
          </div>
          <div className="trust-pill">
            <ShieldCheck size={16} color="var(--color-primary-light)" />
            <span>Báo giá trước, không tự phát sinh</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="footer-bottom-bar">
          <div style={{ lineHeight: 1.6 }}>
            © {new Date().getFullYear()} <strong>{COMPANY_INFO.legalName}</strong>. Mã số thuế: <strong>{COMPANY_INFO.taxCode}</strong>. Bảo lưu mọi quyền.
          </div>
          <div className="footer-bottom-links">
            <Link to="/chinh-sach-bao-mat">Bảo mật</Link>
            <span>•</span>
            <Link to="/dieu-khoan">Điều khoản</Link>
            <span>•</span>
            <Link to="/chinh-sach-dich-vu">Hỗ trợ</Link>
            <span>•</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </Container>

      <style>{`
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 640px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-col-title {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .company-tax-card {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          font-size: 0.775rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }

        .tax-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .tax-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Official BCT Image Logo */
        .bct-official-logo {
          height: 48px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
          transition: transform var(--transition-fast), filter var(--transition-fast);
        }

        .bct-official-logo:hover {
          transform: translateY(-2px) scale(1.02);
          filter: drop-shadow(0 4px 12px rgba(0, 150, 255, 0.35));
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 0;
          margin: 0;
          font-size: 0.85rem;
        }

        .footer-link {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          transition: color var(--transition-fast), padding-left var(--transition-fast);
          display: inline-block;
          line-height: 1.45;
        }

        .footer-link:hover {
          color: #ffffff !important;
          padding-left: 3px;
        }

        .footer-link-highlight {
          color: var(--color-orange) !important;
          font-weight: 700;
        }

        .footer-link-cta {
          color: var(--color-primary-light) !important;
          font-weight: 700;
        }

        /* Trust Strip */
        .footer-trust-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 1.25rem 0;
          margin-bottom: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          justify-content: center;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.775rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          background-color: rgba(255, 255, 255, 0.06);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.775rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-bottom-links {
          display: flex;
          gap: 0.85rem;
          align-items: center;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-bottom-links a:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
