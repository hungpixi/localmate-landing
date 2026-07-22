import React from 'react';
import { Container } from '../ui/Container';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="LocalMate - Người đồng hành số" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, wordBreak: 'break-word' }}>
              Người đồng hành số giúp hộ kinh doanh, người làm nghề, nhà thầu xây dựng website và hiện diện online chuyên nghiệp với chi phí rõ ràng.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-teal-soft)', fontWeight: 600 }}>
              <ShieldCheck size={18} /> Bàn giao nghiệm thu rồi mới thanh toán
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem' }}>
              Về LocalMate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li><a href="#dich-vu" style={{ textDecoration: 'none', color: 'inherit' }}>Giải pháp tinh gọn</a></li>
              <li><a href="#quy-trinh" style={{ textDecoration: 'none', color: 'inherit' }}>Quy trình 5 bước</a></li>
              <li><a href="#bang-gia" style={{ textDecoration: 'none', color: 'inherit' }}>Gói khởi tạo 2.900.000đ</a></li>
              <li><a href="#cam-ket" style={{ textDecoration: 'none', color: 'inherit' }}>Cam kết minh bạch</a></li>
              <li><a href="#faq" style={{ textDecoration: 'none', color: 'inherit' }}>Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem' }}>
              Liên Hệ Đồng Hành
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-word' }}>Hotline / Zalo: 0988.xxx.888</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-word' }}>Email: hotro@localmate.vn</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={16} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-word' }}>Hà Nội & TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          <span>© 2026 LocalMate. Bản quyền thuộc về LocalMate — Người Đồng Hành Số.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span>Phát triển &amp; Triển khai bởi <strong>hungpixi</strong></span>
            (<a href="http://phamphunguyenhung.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-teal-soft)', textDecoration: 'underline' }}>phamphunguyenhung.com</a>
            {' · '}
            <a href="https://github.com/hungpixi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-teal-soft)', textDecoration: 'underline' }}>GitHub: @hungpixi</a>)
          </span>
        </div>
      </Container>
    </footer>
  );
};
