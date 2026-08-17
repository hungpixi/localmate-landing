import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin, Globe, CheckCircle2, Lock } from 'lucide-react';
import { CONTACT_INFO, COMPANY_INFO } from '../../data/landingContent';
import { Link } from '../layout/Router';

export const Footer: React.FC = () => {
  return (
    <footer className="misa-style-footer">
      <Container size="lg">
        {/* Top Brand Logo Row */}
        <div className="misa-footer-top">
          <Link to="/" className="misa-brand-logo" title="LocalMate Việt Nam">
            <img src="/logo.png" alt="LocalMate" className="misa-logo-img" />
          </Link>
        </div>

        {/* Main Content Grid: Corporate Info + 3 Nav Columns */}
        <div className="misa-footer-grid">
          {/* Column 1: Company Profile & Official Meta */}
          <div className="misa-company-col">
            <h3 className="misa-company-name">
              {COMPANY_INFO.legalName}
            </h3>

            <div className="misa-meta-list">
              <div className="misa-meta-item">
                <MapPin size={15} className="misa-meta-icon" />
                <span><strong>Trụ sở chính:</strong> {COMPANY_INFO.taxAddress}</span>
              </div>

              <div className="misa-meta-item">
                <Mail size={15} className="misa-meta-icon" />
                <span>
                  <strong>Email:</strong>{' '}
                  <a href={CONTACT_INFO.mailtoUrl} className="misa-link-accent">
                    {CONTACT_INFO.email}
                  </a>
                </span>
              </div>

              <div className="misa-meta-item">
                <Phone size={15} className="misa-meta-icon" />
                <span>
                  <strong>Tư vấn / Hotline:</strong>{' '}
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="misa-phone-highlight">
                    0834 422 439
                  </a>
                </span>
              </div>

              <div className="misa-meta-item">
                <Globe size={15} className="misa-meta-icon" />
                <span>
                  <strong>Website:</strong>{' '}
                  <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" className="misa-link-accent">
                    https://localmate.vn
                  </a>
                </span>
              </div>

              <div className="misa-tax-legal">
                Mã số thuế: <strong>{COMPANY_INFO.taxCode}</strong> — Ngày hoạt động: <strong>{COMPANY_INFO.establishedDate}</strong> do Chi cục Thuế TP. Đà Nẵng quản lý.
              </div>
            </div>
          </div>

          {/* Column 2: Dịch Vụ */}
          <div className="misa-nav-col">
            <h4 className="misa-col-heading">Dịch vụ</h4>
            <ul className="misa-links-menu">
              <li><Link to="/landing-490k">Website 1 trang từ 490k</Link></li>
              <li><Link to="/dich-vu/google-maps">Đưa tiệm lên Google Maps</Link></li>
              <li><Link to="/dich-vu/google-ads">Quảng cáo Google Ads</Link></li>
              <li><Link to="/dich-vu/content-marketing">Chăm sóc Facebook 990k/tháng</Link></li>
              <li><Link to="/dich-vu/website-landing-page">Website doanh nghiệp 3–5 trang</Link></li>
              <li><Link to="/bang-gia" className="misa-link-bold">Xem bảng giá trọn gói →</Link></li>
            </ul>
          </div>

          {/* Column 3: Kiến Thức */}
          <div className="misa-nav-col">
            <h4 className="misa-col-heading">Kiến thức</h4>
            <ul className="misa-links-menu">
              <li><Link to="/kien-thuc">Cẩm nang làm Website</Link></li>
              <li><Link to="/kien-thuc">Tối ưu Google Maps Local</Link></li>
              <li><Link to="/kien-thuc">Kinh nghiệm chạy Google Ads</Link></li>
              <li><Link to="/kien-thuc">Mẫu bài viết Facebook</Link></li>
              <li><Link to="/du-an">Dự án thực tế đã làm</Link></li>
              <li><Link to="/kien-thuc" className="misa-link-bold">Tất cả bài hướng dẫn →</Link></li>
            </ul>
          </div>

          {/* Column 4: Về LocalMate */}
          <div className="misa-nav-col">
            <h4 className="misa-col-heading">Về LocalMate</h4>
            <ul className="misa-links-menu">
              <li><Link to="/gioi-thieu">Giới thiệu công ty</Link></li>
              <li><Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link></li>
              <li><Link to="/dieu-khoan">Điều khoản dịch vụ</Link></li>
              <li><Link to="/chinh-sach-dich-vu">Hỗ trợ &amp; Bảo hành</Link></li>
              <li><Link to="/sitemap">Sơ đồ website (Sitemap)</Link></li>
              <li><Link to="/lien-he" className="misa-link-bold">Liên hệ trực tiếp →</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Official Certification Badges Strip */}
        <div className="misa-trust-cert-strip">
          {/* Social Links */}
          <div className="misa-social-group">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="misa-social-btn" aria-label="Facebook">
              <span className="social-txt">f</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="misa-social-btn" aria-label="YouTube">
              <span className="social-txt">▶</span>
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="misa-social-btn" aria-label="Zalo">
              <span className="social-txt">Z</span>
            </a>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="misa-social-btn" aria-label="Hotline">
              <Phone size={14} />
            </a>
          </div>

          {/* Official Certifications & Bộ Công Thương Badge */}
          <div className="misa-cert-group">
            <div className="misa-cert-pill">
              <Lock size={13} color="var(--color-primary)" />
              <span>SSL 256-bit Secure</span>
            </div>

            <div className="misa-cert-pill">
              <CheckCircle2 size={13} color="var(--color-primary)" />
              <span>100% Tài khoản chính chủ</span>
            </div>

            <div className="misa-cert-pill">
              <ShieldCheck size={13} color="var(--color-primary)" />
              <span>Báo giá trước khi làm</span>
            </div>

            {/* Official Blue Bo Cong Thuong Emblem */}
            <a
              href="http://online.gov.vn"
              target="_blank"
              rel="noopener noreferrer"
              title="Website đã thông báo với Bộ Công Thương"
              className="misa-bct-link"
            >
              <img
                src="/logo-da-thong-bao-bct.png"
                alt="Đã thông báo Bộ Công Thương - LocalMate"
                className="misa-bct-img"
              />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="misa-bottom-bar">
          <div className="misa-copyright">
            Copyright © {new Date().getFullYear()} <strong>{COMPANY_INFO.legalName}</strong>. All rights reserved.
          </div>
          <div className="misa-policy-links">
            <Link to="/chinh-sach-bao-mat">Chính sách bảo vệ dữ liệu cá nhân</Link>
            <span>•</span>
            <Link to="/dieu-khoan">Điều khoản sử dụng</Link>
            <span>•</span>
            <Link to="/chinh-sach-dich-vu">Hỗ trợ khách hàng</Link>
          </div>
        </div>
      </Container>

      <style>{`
        /* MISA / AMIS Light Clean Footer Design */
        .misa-style-footer {
          background-color: #ffffff;
          color: #374151;
          border-top: 1px solid #e5e7eb;
          padding: 3rem 0 1.75rem 0;
          font-family: inherit;
        }

        .misa-footer-top {
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .misa-brand-logo {
          display: inline-block;
          text-decoration: none;
        }

        .misa-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        /* Main Grid */
        .misa-footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 768px) {
          .misa-footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 2rem;
          }
        }

        /* Column 1: Company Info */
        .misa-company-col {
          display: flex;
          flex-direction: column;
        }

        .misa-company-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #111827;
          margin: 0 0 1rem 0;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }

        .misa-meta-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          font-size: 0.85rem;
          color: #4b5563;
          line-height: 1.5;
        }

        .misa-meta-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .misa-meta-icon {
          color: var(--color-primary, #0d7647);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .misa-link-accent {
          color: var(--color-primary-dark, #0a5c37);
          text-decoration: none;
          font-weight: 600;
        }

        .misa-link-accent:hover {
          text-decoration: underline;
        }

        .misa-phone-highlight {
          color: var(--color-primary, #0d7647);
          font-weight: 800;
          text-decoration: none;
        }

        .misa-phone-highlight:hover {
          text-decoration: underline;
        }

        .misa-tax-legal {
          font-size: 0.775rem;
          color: #6b7280;
          line-height: 1.5;
          margin-top: 0.45rem;
          padding-top: 0.45rem;
          border-top: 1px dashed #e5e7eb;
        }

        /* Nav Columns */
        .misa-nav-col {
          display: flex;
          flex-direction: column;
        }

        .misa-col-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: #111827;
          margin: 0 0 1rem 0;
        }

        .misa-links-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.85rem;
        }

        .misa-links-menu a {
          color: #4b5563;
          text-decoration: none;
          transition: color var(--transition-fast);
          display: inline-block;
          line-height: 1.4;
        }

        .misa-links-menu a:hover {
          color: var(--color-primary, #0d7647);
          text-decoration: underline;
        }

        .misa-link-bold {
          font-weight: 700 !important;
          color: var(--color-primary, #0d7647) !important;
        }

        /* Certifications & Social Strip */
        .misa-trust-cert-strip {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.5rem 0;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .misa-trust-cert-strip {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .misa-social-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .misa-social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5563;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
        }

        .misa-social-btn:hover {
          background-color: var(--color-primary-soft, #f4fbf7);
          border-color: var(--color-primary, #0d7647);
          color: var(--color-primary, #0d7647);
          transform: translateY(-1px);
        }

        .social-txt {
          font-family: system-ui, sans-serif;
          line-height: 1;
        }

        .misa-cert-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .misa-cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #374151;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-full, 999px);
        }

        .misa-bct-link {
          display: inline-block;
          text-decoration: none;
          margin-left: 0.35rem;
        }

        .misa-bct-img {
          height: 38px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          display: block;
          transition: transform var(--transition-fast);
        }

        .misa-bct-img:hover {
          transform: scale(1.03);
        }

        /* Bottom Bar */
        .misa-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-size: 0.775rem;
          color: #6b7280;
        }

        @media (min-width: 768px) {
          .misa-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .misa-copyright {
          line-height: 1.5;
        }

        .misa-policy-links {
          display: flex;
          gap: 0.65rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .misa-policy-links a {
          color: #6b7280;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .misa-policy-links a:hover {
          color: var(--color-primary, #0d7647);
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
