import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { Sparkles, Phone, Mail, MessageSquare, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';
import { trackLeadCreated } from '../analytics/tracker';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    serviceInterest: 'Gói Khởi Tạo Đầy Đủ 2.900.000đ',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Vui lòng điền họ tên và số điện thoại liên hệ.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate async submission and track lead
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackLeadCreated({
        lead_name: formData.name,
        lead_phone: formData.phone,
        service_interest: formData.serviceInterest,
        page_source: '/lien-he'
      });
    }, 600);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      <SEOHead
        title="Liên Hệ LocalMate — Nhận Tư Vấn & Website Demo 0đ"
        description="Liên hệ với đội ngũ kỹ thuật LocalMate để nhận tư vấn giải pháp, dự toán chi phí rõ ràng và xem trước bản website demo 0đ."
        canonicalPath="/lien-he"
        breadcrumbs={[
          { name: 'Liên hệ', url: '/lien-he' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Liên hệ', url: '/lien-he' }
          ]}
        />

        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
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
            <Sparkles size={15} color="var(--color-primary)" /> LIÊN HỆ &amp; TƯ VẤN TRỰC TIẾP
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-text)', fontWeight: 800 }}>
            Liên Hệ Nhận Tư Vấn &amp; Website Demo 0đ
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            Kể cho chúng tôi bạn đang kinh doanh gì. LocalMate sẽ chuẩn bị và gửi lại bản website mẫu phù hợp nhất cho bạn trong vòng 24h.
          </p>
        </div>

        {/* 2-Column Grid: Quick Contact Info & Interactive Form */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Left Column: Direct Contacts */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  textDecoration: 'none'
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageSquare size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Nhắn tin trực tiếp qua Zalo</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text)', marginTop: 2 }}>Chat Zalo Tư Vấn (24/7)</div>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  textDecoration: 'none'
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', backgroundColor: '#fff4eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={24} color="var(--color-orange-dark)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Hotline Tư Vấn Nhanh</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text)', marginTop: 2 }}>0834.422.439</div>
                </div>
              </a>

              <a
                href={CONTACT_INFO.mailtoUrl}
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  textDecoration: 'none'
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Email Hỗ Trợ</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', marginTop: 2 }}>hotro@localmate.vn</div>
                </div>
              </a>
            </div>

            {/* Corporate Box */}
            <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <ShieldCheck size={18} color="var(--color-primary)" /> CÔNG TY TNHH LOCALMATE
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: '0 0 0.75rem 0' }}>
                Hỗ trợ trực tuyến và triển khai dự án cho khách hàng toàn quốc (Hà Nội, TP.HCM, Đà Nẵng, Bình Dương, Cần Thơ...).
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={14} /> Thời gian làm việc: 08:00 – 21:00 (Thứ 2 – Chủ Nhật)
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 size={36} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  Gửi Thông Tin Thành Công!
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Cảm ơn bạn đã liên hệ. Đội ngũ LocalMate sẽ liên hệ qua Zalo hoặc gọi điện lại cho bạn trong vòng 30 phút để hỗ trợ nhanh nhất.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <a
                    href={CONTACT_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none'
                    }}
                  >
                    Nhắn Zalo Ngay
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', businessName: '', serviceInterest: 'Gói Khởi Tạo Đầy Đủ 2.900.000đ', message: '' });
                    }}
                    style={{
                      padding: '0.75rem 1.25rem',
                      backgroundColor: 'transparent',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-text)',
                      cursor: 'pointer'
                    }}
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
                  Đăng Ký Nhận Website Demo 0đ
                </h3>

                {errorMessage && (
                  <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', border: '1px solid #f87171', borderRadius: 'var(--radius-md)', color: '#b91c1c', fontSize: '0.85rem', fontWeight: 600 }}>
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                    Họ và tên của bạn <span style={{ color: '#c62828' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn Hùng"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.925rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                    Số điện thoại / Zalo <span style={{ color: '#c62828' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0988 358 xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.925rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                    Tên tiệm / Ngành nghề kinh doanh
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Quán ăn Nam Bộ, Nha khoa, Cơ sở nhôm kính..."
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.925rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                    Dịch vụ bạn đang quan tâm
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.925rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="Gói Khởi Tạo Đầy Đủ 2.900.000đ">Gói Khởi Tạo Đầy Đủ 2.900.000đ</option>
                    <option value="Website 1 Trang 490k">Website 1 Trang từ 490.000đ</option>
                    <option value="Quảng Cáo Google Ads">Quảng Cáo Google Ads (Từ 390k)</option>
                    <option value="Đưa Lên Google Maps">Đưa Lên Google Maps (Từ 299k)</option>
                    <option value="Viết Bài Facebook">Viết Bài Facebook Hàng Tháng (Từ 990k/tháng)</option>
                    <option value="Tư vấn tổng thể">Chưa rõ, cần tư vấn</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem' }}>
                    Ghi chú thêm (không bắt buộc)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả mong muốn hoặc gửi link Facebook/Website cũ của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.925rem',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ fontWeight: 700 }}
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Nhận Website Demo 0đ'}
                </Button>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', margin: 0 }}>
                  ✓ Nghiệm thu hài lòng rồi mới thanh toán • Bảo mật thông tin 100%
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
