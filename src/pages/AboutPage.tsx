import React from 'react';
import { Container } from '../components/ui/Container';
import { TrustSection } from '../components/sections/TrustSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-teal)" /> VỀ LOCALMATE VIỆT NAM
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Triết Lý "Người Đồng Hành Số"
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            LocalMate không đóng vai agency "bán đủ thứ", mà là đối tác phòng digital thuê ngoài tập trung giúp các hộ kinh doanh và doanh nghiệp nhỏ hiện diện uy tín, minh bạch và có khách hàng thực tế.
          </p>
        </div>

        {/* Brand Core Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2rem' }}>
            <Heart size={32} color="var(--color-teal-dark)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Nói Thực — Làm Thực
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              Chúng tôi nói không với những lời cam kết ảo về hàng nghìn đơn hàng ngay lập tức. Thay vào đó là quy trình chuẩn hóa điểm chạm giúp khách tin tưởng.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2rem' }}>
            <ShieldCheck size={32} color="var(--color-orange-dark)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Minh Bạch Chi Phí
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              Khách hàng duyệt web demo 0đ trước, nghiệm thu tính năng thực tế rồi mới thanh toán. 100% tài khoản chính chủ bàn giao lại cho khách.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2rem' }}>
            <Award size={32} color="var(--color-navy)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Linh Hoạt Nâng Cấp
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              Bắt đầu với một gói nhỏ vừa đủ ngân sách. Khi kinh doanh phát triển, LocalMate đồng hành bổ sung các tính năng CRM và automation nâng cao.
            </p>
          </div>
        </div>
      </Container>

      <TrustSection />
      <ProcessSection />
    </div>
  );
};
