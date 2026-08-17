import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin, Globe, FileText, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { Link } from '../layout/Router';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#083B4C',
        color: '#ffffff',
        padding: '4rem 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand Info & Corporate Entity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/logo.png"
                alt="LocalMate - Website, SEO, Marketing cho Doanh nghiệp nhỏ"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  backgroundColor: '#ffffff',
                  padding: '5px 12px',
                  borderRadius: '10px'
                }}
              />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
              <strong>CÔNG TY TNHH LOCALMATE</strong><br />
              Đơn vị cung cấp giải pháp Website, SEO Google Maps, Quảng cáo Google Ads và Vận hành nội dung chuyên biệt cho doanh nghiệp nhỏ và hộ kinh doanh tại Việt Nam.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>TP. Hồ Chí Minh &amp; Hỗ trợ trực tuyến Toàn quốc (24/7)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}>
                  0834.422.439 (Hotline / Zalo)
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <a href={CONTACT_INFO.mailtoUrl} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>
                  hotro@localmate.vn
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                color: 'var(--color-teal-soft)',
                backgroundColor: 'rgba(15, 169, 154, 0.15)',
                border: '1px solid rgba(15, 169, 154, 0.3)',
                padding: '0.4rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                width: 'fit-content'
              }}
            >
              <ShieldCheck size={16} /> Bàn giao nghiệm thu rồi mới thanh toán
            </div>
          </div>

          {/* Column 2: Dịch Vụ Cốt Lõi */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Dịch Vụ Cốt Lõi
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              <li>
                <Link to="/dich-vu/google-ads" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Google Ads Chuyển Đổi
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/google-maps" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → SEO Google Maps Địa Phương
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/website-landing-page" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Thiết Kế Website &amp; Landing Page
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/content-marketing" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Quản Trị Nội Dung 990k/tháng
                </Link>
              </li>
              <li>
                <Link to="/landing-490k" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Gói Landing Page Mini 490k
                </Link>
              </li>
              <li>
                <Link to="/bang-gia" style={{ textDecoration: 'none', color: 'var(--color-orange)', fontWeight: 700 }} className="footer-link">
                  → Xem Toàn Bộ Bảng Giá 40 Dịch Vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kiến Thức Chuyên Sâu */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Kiến Thức &amp; Hướng Dẫn
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              <li>
                <Link to="/kien-thuc/cach-doc-search-terms-google-ads" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Cách Đọc Search Terms Google Ads
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc/huong-dan-toi-uu-google-business-profile" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Hướng Dẫn Tối Ưu Google Maps
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc/cau-truc-landing-page-chuyen-doi-cao" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → 7 Khối Cấu Trúc Landing Page Chuẩn
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc/cach-len-lich-dang-bai-khong-bi-bi-y-tuong" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Ma Trận 15 Ý Tưởng Nội Dung Tháng
                </Link>
              </li>
              <li>
                <Link to="/du-an" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → 5 Case Studies Đo Lường Thực Tế
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Pháp Lý & Cam Kết */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Pháp Lý &amp; Cam Kết
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0, margin: 0, fontSize: '0.875rem' }}>
              <li>
                <Link to="/gioi-thieu" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Về LocalMate Việt Nam
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Chính Sách Bảo Mật Thông Tin
                </Link>
              </li>
              <li>
                <Link to="/dieu-khoan" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Điều Khoản Dịch Vụ &amp; Hợp Đồng
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-dich-vu" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Cam Kết SLA &amp; Giới Hạn Sửa Đổi
                </Link>
              </li>
              <li>
                <Link to="/sitemap" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Sơ Đồ Website (HTML Sitemap)
                </Link>
              </li>
              <li>
                <Link to="/lien-he" style={{ textDecoration: 'none', color: 'var(--color-teal-soft)', fontWeight: 700 }} className="footer-link">
                  → Liên Hệ Nhận Báo Giá Trực Tiếp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          <div>
            © {new Date().getFullYear()} CÔNG TY TNHH LOCALMATE. Bảo lưu mọi quyền.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/chinh-sach-bao-mat" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Bảo mật
            </Link>
            <span>•</span>
            <Link to="/dieu-khoan" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Điều khoản
            </Link>
            <span>•</span>
            <Link to="/chinh-sach-dich-vu" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              SLA &amp; Bảo hành
            </Link>
            <span>•</span>
            <Link to="/sitemap" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Sơ đồ web
            </Link>
          </div>
        </div>
      </Container>

      <style>{`
        .footer-link:hover {
          color: #ffffff !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
};
