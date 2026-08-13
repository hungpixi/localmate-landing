import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin, Settings } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { Link } from '../layout/Router';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-navy-deep)',
        color: '#ffffff',
        padding: '3.5rem 0 2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Info & Mission */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/logo.png"
                alt="LocalMate - Người đồng hành số"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  backgroundColor: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
              />
            </div>
            <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, margin: 0 }}>
              Đội digital gọn nhẹ cho doanh nghiệp nhỏ. Thiết kế website, SEO Google Maps, chạy quảng cáo và tự động hóa công việc online với chi phí tối ưu.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--color-teal-soft)',
                backgroundColor: 'rgba(15, 169, 154, 0.12)',
                border: '1px solid rgba(15, 169, 154, 0.25)',
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                width: 'fit-content'
              }}
            >
              <ShieldCheck size={18} /> Bàn giao nghiệm thu mới thanh toán
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '-0.01em' }}>
              Điều Hướng Nhanh
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0, fontSize: '0.925rem' }}>
              <li>
                <Link to="/dich-vu" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
                  → 6 Nhóm Dịch Vụ Cốt Lõi
                </Link>
              </li>
              <li>
                <Link to="/giai-phap" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
                  → Giải Pháp Theo Ngành Nghề
                </Link>
              </li>
              <li>
                <Link to="/bang-gia" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
                  → Bảng Giá 40 Dịch Vụ Niêm Yết
                </Link>
              </li>
              <li>
                <Link to="/du-an" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)' }} className="footer-link">
                  → Dự Án Thực Tế &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/admin/pricing" style={{ textDecoration: 'none', color: 'var(--color-teal-soft)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }} className="footer-link">
                  <Settings size={14} /> Quản Trị CMS Bảng Giá
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Card */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '-0.01em' }}>
              Liên Hệ Đồng Hành Trực Tiếp
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Phone & Zalo Button */}
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="footer-contact-card"
              >
                <div style={{ width: 34, height: 34, borderRadius: '50%', backgroundColor: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={18} color="#ffffff" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600 }}>Hotline / Zalo hỗ trợ 24/7</span>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-orange)', letterSpacing: '0.02em' }}>
                    {CONTACT_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={CONTACT_INFO.mailtoUrl}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="footer-contact-card"
              >
                <div style={{ width: 34, height: 34, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={18} color="var(--color-teal-soft)" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600 }}>Email tư vấn &amp; báo giá</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-teal-soft)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>

              {/* Address Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', paddingLeft: '0.25rem' }}>
                <MapPin size={16} color="var(--color-teal-soft)" style={{ flexShrink: 0 }} />
                <span>Khu vực hỗ trợ: {CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.65)'
          }}
        >
          <span>© 2026 LocalMate. Bản quyền thuộc về LocalMate — Đội Digital Cho Doanh Nghiệp Nhỏ.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span>Phát triển bởi <strong style={{ color: '#ffffff' }}>hungpixi</strong></span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <a
              href="http://phamphunguyenhung.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-teal-soft)', textDecoration: 'underline', whiteSpace: 'nowrap' }}
            >
              phamphunguyenhung.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
