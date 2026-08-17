import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { TrustSection } from '../components/sections/TrustSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { Sparkles, ShieldCheck, Heart, Lock } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Về LocalMate — Đồng Hành Cùng Doanh Nghiệp Nhỏ Việt Nam"
        description="Tìm hiểu về đội ngũ LocalMate, pháp nhân CÔNG TY TNHH LOCALMATE và nguyên tắc làm việc minh bạch: Nghiệm thu hài lòng rồi mới thanh toán."
        canonicalPath="/gioi-thieu"
        breadcrumbs={[
          { name: 'Giới thiệu', url: '/gioi-thieu' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Giới thiệu', url: '/gioi-thieu' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary-dark)',
              backgroundColor: 'var(--color-primary-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-primary)" /> VỀ LOCALMATE VIỆT NAM
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text)', fontWeight: 800 }}>
            Triết Lý Đồng Hành Cùng Doanh Nghiệp Nhỏ
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Khách hàng không mua những từ ngữ công nghệ hoa mỹ. Khách hàng mua thêm cuộc gọi, tin nhắn, khách ghé tiệm và một sự hiện diện đáng tin cậy trên internet. LocalMate giúp bạn làm đúng thứ cần thiết trước với chi phí tiết kiệm nhất.
          </p>
        </div>

        {/* 3 Core Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4.5rem' }}>
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.25rem 2rem' }}>
            <Heart size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Nói Thực — Làm Thực
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
              Chúng tôi không đưa ra các cam kết ảo không có căn cứ. Thay vào đó là các chuẩn mực kỹ thuật rõ ràng: Website hiển thị mượt mà trên điện thoại, đưa vị trí tiệm lên Google Maps chính chủ và lọc sạch từ khóa tìm kiếm để quảng cáo không bị bấm nhầm lãng phí tiền.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.25rem 2rem' }}>
            <ShieldCheck size={36} color="var(--color-orange-dark)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Nghiệm Thu Rồi Mới Thanh Toán
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
              Bạn được xem trước website demo 0đ, kiểm tra thực tế hoạt động trên điện thoại rồi mới thanh toán. Toàn bộ tài khoản Google Maps, quảng cáo và tên miền đều do bạn trực tiếp đứng tên sở hữu.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.25rem 2rem' }}>
            <Lock size={36} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Không Khóa Dữ Liệu
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
              Bạn có toàn quyền tự quản lý, đổi đơn vị lưu trữ hosting hoặc chỉnh sửa nội dung bất cứ lúc nào. LocalMate không áp đặt điều khoản ràng buộc hay chi phí duy trì ẩn định kỳ.
            </p>
          </div>
        </div>
      </Container>

      {/* Trust Section with Corporate Identity */}
      <TrustSection />

      {/* Process Section */}
      <ProcessSection />
    </div>
  );
};
