import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

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
              Người đồng hành số giúp hộ kinh doanh, người làm nghề, nhà thầu xây dựng website và hiện diện online chuyên nghiệp với chi phí minh bạch.
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
              Về LocalMate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0, fontSize: '0.925rem' }}>
              <li>
                <a href="#dich-vu" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)', transition: 'all 0.2s ease' }} className="footer-link">
                  → Giải pháp tinh gọn
                </a>
              </li>
              <li>
                <a href="#quy-trinh" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)', transition: 'all 0.2s ease' }} className="footer-link">
                  → Quy trình 5 bước minh bạch
                </a>
              </li>
              <li>
                <a href="#bang-gia" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)', transition: 'all 0.2s ease' }} className="footer-link">
                  → Gói khởi tạo 2.900.000đ
                </a>
              </li>
              <li>
                <a href="#cam-ket" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)', transition: 'all 0.2s ease' }} className="footer-link">
                  → Cam kết không phí ẩn
                </a>
              </li>
              <li>
                <a href="#faq" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)', transition: 'all 0.2s ease' }} className="footer-link">
                  → Câu hỏi thường gặp
                </a>
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
          <span>© 2026 LocalMate. Bản quyền thuộc về LocalMate — Người Đồng Hành Số.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span>Phát triển &amp; Triển khai bởi <strong style={{ color: '#ffffff' }}>hungpixi</strong></span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <a
              href="http://phamphunguyenhung.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-teal-soft)', textDecoration: 'underline', whiteSpace: 'nowrap' }}
            >
              phamphunguyenhung.com
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <a
              href="https://github.com/hungpixi/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-teal-soft)', textDecoration: 'underline', whiteSpace: 'nowrap' }}
            >
              GitHub: @hungpixi
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
