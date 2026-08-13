import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Sparkles, Send, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

export const FreeAuditSection: React.FC = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    targetCustomer: '',
    currentChannels: '',
    goal3Months: '',
    fullName: '',
    phone: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#f8fbfa',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="register-form"
    >
      <Container size="lg">
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid var(--color-teal)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2.5rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}
          >
            {/* Left Explanation Column */}
            <div>
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
                <Sparkles size={15} color="var(--color-teal)" /> TƯ VẤN &amp; AUDIT MIỄN PHÍ
              </span>

              <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem' }}>
                Chưa biết nên chọn dịch vụ nào?
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--color-navy)' }}>Bạn không cần biết SEO, hosting hay CRM là gì.</strong>
                <br />
                Chỉ cần cho LocalMate biết bài toán thực tế của bạn, chúng tôi sẽ phân tích và chỉ ra những việc <strong style={{ color: 'var(--color-teal-dark)' }}>CẦN LÀM TRƯỚC</strong>, những việc <strong style={{ color: 'var(--color-text-muted)' }}>CHƯA CẦN LÀM</strong>, cùng ngân sách dự kiến tiết kiệm nhất.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {[
                  'Đánh giá hiện trạng điểm chạm online miễn phí',
                  'Đề xuất lộ trình theo ngân sách thực tế',
                  'Dựng web demo 0đ duyệt trước giao diện',
                  'Cam kết không ép mua thêm gói không cần thiết'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-navy)', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Fast Direct Contact */}
              <div
                style={{
                  backgroundColor: '#f0f7f5',
                  border: '1px solid #d0e0dc',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Cần trao đổi nhanh trực tiếp?
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: 2 }}>
                    Hotline / Zalo: {CONTACT_INFO.phoneDisplay}
                  </div>
                </div>
                <a
                  href={CONTACT_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.6rem 1.1rem',
                    backgroundColor: 'var(--color-teal-dark)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none'
                  }}
                >
                  <PhoneCall size={14} /> Chat Zalo Ngay
                </a>
              </div>
            </div>

            {/* Right Audit Form Column */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-teal-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem auto'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                    Đã Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    Đội ngũ LocalMate sẽ nghiên cứu thông tin của bạn và liên hệ tư vấn lộ trình phù hợp trong vòng 2 giờ làm việc.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      marginTop: '1.5rem',
                      padding: '0.65rem 1.25rem',
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-teal-dark)',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Gửi thêm thông tin
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                    Kiểm Tra Hiện Diện Số Miễn Phí
                  </h3>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      1. Bạn đang bán sản phẩm / dịch vụ gì? *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Cửa hàng cơ khí, Trường mầm non, Thi công nội thất..."
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      2. Khách hàng của bạn ở đâu / là ai?
                    </label>
                    <input
                      type="text"
                      placeholder="VD: Khách địa phương Q.Thủ Đức, Khách tìm trên Google..."
                      value={formData.targetCustomer}
                      onChange={(e) => setFormData({ ...formData, targetCustomer: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.875rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                        Số điện thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0988.xxx.xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.875rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Ghi chú thêm về mục tiêu của bạn
                    </label>
                    <textarea
                      rows={2}
                      placeholder="VD: Muốn thiết kế lại website cũ, làm Google Maps..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" fullWidth className="btn-primary" style={{ marginTop: '0.5rem' }}>
                    <Send size={18} />
                    <span>Nhận đánh giá &amp; Lộ trình 0đ</span>
                  </Button>

                  <p style={{ textAlign: 'center', fontSize: '0.725rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    <ShieldCheck size={12} style={{ display: 'inline', marginRight: 4 }} />
                    Bảo mật 100% thông tin. Không gọi làm phiền.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
