import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { TrustSection } from '../components/sections/TrustSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle2, UserCheck, Lock } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Về LocalMate — Triết Lý 'Người Đồng Hành Số' Cho Doanh Nghiệp Nhỏ"
        description="Tìm hiểu về đội ngũ LocalMate, pháp nhân CÔNG TY TNHH LOCALMATE và nguyên tắc làm việc minh bạch: Bàn giao rồi mới thanh toán."
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
            LocalMate không đóng vai agency bán những gói hợp đồng phức tạp xa rời thực tế. Chúng tôi là người đồng hành kỹ thuật số tinh gọn, giúp các chủ cơ sở kinh doanh làm đúng thứ cần thiết trước để có khách hàng và xây dựng uy tín bền vững.
          </p>
        </div>

        {/* 3 Core Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4.5rem' }}>
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.25rem 2rem' }}>
            <Heart size={36} color="var(--color-teal-dark)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Nói Thực — Làm Thực
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
              Chúng tôi nói không với các cam kết ảo như "Top 1 Google sau 3 ngày" hay "Tăng 300% doanh thu". Thay vào đó là các chuẩn mực kỹ thuật đã được chứng minh: Website tải nhanh dưới 2s, hồ sơ Google Maps chuẩn SEO và lọc sạch từ khóa rác trong quảng cáo.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.25rem 2rem' }}>
            <ShieldCheck size={36} color="var(--color-orange-dark)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Bàn Giao Rồi Mới Thanh Toán
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
              Khách hàng được xem bản Web Demo định hướng 0đ, nghiệm thu xong giao diện và tính năng thực tế trên điện thoại rồi mới thanh toán. 100% tài khoản chính chủ và mã nguồn bàn giao lại cho bạn làm chủ.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2.25rem 2rem' }}>
            <Lock size={36} color="var(--color-navy)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Không Ràng Buộc Khóa Dữ Liệu
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
              Bạn có toàn quyền chuyển đổi đơn vị lưu trữ hosting hoặc tự cập nhật nội dung bất cứ lúc nào. LocalMate không áp đặt các điều khoản phạt giữ chân hay chi phí ẩn định kỳ.
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
