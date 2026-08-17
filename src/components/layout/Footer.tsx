import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { Link } from '../layout/Router';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#083B4C',
        color: '#ffffff',
        padding: '3.5rem 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Column 1: Brand Info & Corporate Entity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/logo.png"
                alt="LocalMate - Website, Google Maps & Quảng Cáo cho Doanh Nghiệp Nhỏ"
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  backgroundColor: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)'
                }}
              />
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55, margin: 0 }}>
              <strong>CÔNG TY TNHH LOCALMATE</strong><br />
              Giải pháp làm website, tối ưu Google Maps, chạy Google Ads và chăm sóc bài viết Facebook cho doanh nghiệp nhỏ.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="var(--color-primary-light)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>TP. Hồ Chí Minh &amp; Hỗ trợ trực tuyến Toàn quốc (24/7)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}>
                  0834.422.439 (Hotline / Zalo)
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="var(--color-primary-light)" style={{ flexShrink: 0 }} />
                <a href={CONTACT_INFO.mailtoUrl} style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>
                  hotro@localmate.vn
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.775rem',
                color: '#ffffff',
                backgroundColor: 'rgba(13, 118, 71, 0.3)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                padding: '0.35rem 0.7rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                width: 'fit-content'
              }}
            >
              <ShieldCheck size={15} color="var(--color-primary-light)" /> Nghiệm thu hài lòng rồi mới thanh toán
            </div>
          </div>

          {/* Column 2: Dịch Vụ Cốt Lõi */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Dịch Vụ Phổ Biến
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0, fontSize: '0.85rem' }}>
              <li>
                <Link to="/dich-vu/google-ads" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Quảng cáo Google Ads
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/google-maps" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Đưa doanh nghiệp lên Google Maps
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/website-landing-page" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Website &amp; trang bán hàng
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/content-marketing" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Viết bài Facebook từ 990k/tháng
                </Link>
              </li>
              <li>
                <Link to="/landing-490k" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Website 1 trang từ 490k
                </Link>
              </li>
              <li>
                <Link to="/bang-gia" style={{ textDecoration: 'none', color: 'var(--color-orange)', fontWeight: 700 }} className="footer-link">
                  → Xem bảng giá niêm yết
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kiến Thức & Hướng Dẫn */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Hướng Dẫn Tìm Khách
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0, fontSize: '0.85rem' }}>
              <li>
                <Link to="/kien-thuc/cach-doc-search-terms-google-ads" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Cách kiểm tra khách đã tìm gì trên Google
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc/huong-dan-toi-uu-google-business-profile" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Cách tối ưu Google Maps cho cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc/cau-truc-landing-page-chuyen-doi-cao" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Website bán dịch vụ cần những gì?
                </Link>
              </li>
              <li>
                <Link to="/kien-thuc/cach-len-lich-dang-bai-khong-bi-bi-y-tuong" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → 15 ý tưởng bài Facebook cho cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/du-an" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Dự án thực tế đã làm
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Pháp Lý & Cam Kết */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Pháp Lý &amp; Cam Kết
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: 0, margin: 0, fontSize: '0.85rem' }}>
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
                  → Hỗ Trợ Kỹ Thuật Sau Bàn Giao
                </Link>
              </li>
              <li>
                <Link to="/sitemap" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.85)' }} className="footer-link">
                  → Sơ Đồ Website (HTML Sitemap)
                </Link>
              </li>
              <li>
                <Link to="/lien-he" style={{ textDecoration: 'none', color: 'var(--color-primary-light)', fontWeight: 700 }} className="footer-link">
                  → Liên Hệ Nhận Báo Giá Trực Tiếp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.775rem',
            color: 'rgba(255, 255, 255, 0.65)'
          }}
        >
          <div>
            © {new Date().getFullYear()} CÔNG TY TNHH LOCALMATE. Bảo lưu mọi quyền.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/chinh-sach-bao-mat" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Bảo mật
            </Link>
            <span>•</span>
            <Link to="/dieu-khoan" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Điều khoản
            </Link>
            <span>•</span>
            <Link to="/chinh-sach-dich-vu" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Hỗ trợ kỹ thuật
            </Link>
            <span>•</span>
            <Link to="/sitemap" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
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
