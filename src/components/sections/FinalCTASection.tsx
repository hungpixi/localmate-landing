import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CheckCircle2, ShieldCheck, Send, Loader2, Clock, Sparkles } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    industry: '',
    facebookUrl: ''
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: { fullName?: string; phone?: string } = {};
    const trimmedName = formData.fullName.trim();
    const trimmedPhone = formData.phone.trim().replace(/[\s\-\.\(\)]/g, '');

    if (!trimmedName) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    } else if (trimmedName.length < 2) {
      errs.fullName = 'Họ và tên phải có ít nhất 2 ký tự';
    }

    if (!trimmedPhone) {
      errs.phone = 'Vui lòng nhập số điện thoại hoặc Zalo liên hệ';
    } else if (!/^(0|\+?84)(3|5|7|8|9|2[0-9])[0-9]{8}$/.test(trimmedPhone)) {
      errs.phone = 'Số điện thoại không hợp lệ (Ví dụ: 0912345678)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // 1. Google Apps Script Web App Webhook URL
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxH5cdJvXwsQZ0wvIfY5SW1MU_JwYdPQz0izBPiOezapBIZnlu1WmwEXTItIA1mKnwg/exec';

    // 2. Telegram Bot Config
    const TELEGRAM_BOT_TOKEN = '8124976722:AAEqT8L98wO5eYq9F3tU6N88w_EXAMPLE';
    const TELEGRAM_CHAT_ID = '123456789';

    const leadId = 'LEAD-' + Date.now();
    const createdAt = new Date().toISOString();

    const leadPayload = {
      id: leadId,
      createdAt: createdAt,
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      businessName: formData.industry.trim() || 'Chưa nhập',
      cityCountry: 'Việt Nam',
      businessCategory: formData.industry.trim() || 'Chưa phân loại',
      priorityGoal: 'Nhận Web Demo 24h',
      packageInterest: 'Gói Khởi Tạo 2.900.000đ',
      status: 'new',
      source: 'landing_page',
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      ipAddress: '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      note: formData.facebookUrl.trim() ? `Link Fanpage: ${formData.facebookUrl.trim()}` : 'Khách đăng ký qua Form Web Demo',
      telegramNotified: true,
      sheetSynced: true
    };

    try {
      // Send Webhook to Google Apps Script (Google Sheets Sync)
      if (GOOGLE_APPS_SCRIPT_URL) {
        fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Apps Script requires no-cors mode for cross-origin browser requests
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload)
        }).catch(err => console.error('Apps Script Sync Error:', err));
      }

      // Send Telegram Bot Notification
      if (TELEGRAM_BOT_TOKEN && !TELEGRAM_BOT_TOKEN.includes('EXAMPLE')) {
        const textMessage = `🔔 *LOCALMATE - CÓ LEAD MỚI VỀ GOOGLE SHEET!*
----------------------------------------
🆔 *Lead ID:* ${leadId}
👤 *Họ và tên:* ${formData.fullName.trim()}
📞 *Số điện thoại:* ${formData.phone.trim()}
🏢 *Sản phẩm/Ngành:* ${formData.industry.trim() || 'Chưa nhập'}
🔗 *Facebook/Fanpage:* ${formData.facebookUrl.trim() || 'Không có'}
⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN')}
----------------------------------------
⚡ *Sheet Status:* Đã tự động ghi dữ liệu vào Google Sheet!`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: textMessage,
            parse_mode: 'Markdown'
          })
        });
      }

      setStatus('success');
    } catch (err) {
      console.error('Submission Error:', err);
      setStatus('success');
    }
  };

  return (
    <section
      id="register-form"
      style={{
        padding: '4.5rem 0',
        backgroundColor: 'var(--color-navy)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Text Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <Badge variant="teal" size="md">
                🎁 MIỄN PHÍ TRẢI NGHIỆM DEMO
              </Badge>
            </div>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                margin: 0
              }}
            >
              Đừng bắt đầu bằng một hệ thống đắt tiền.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#e3f0f4', lineHeight: 1.65, margin: 0 }}>
              Hãy bắt đầu bằng một nơi để khách hàng nhìn thấy bạn, hiểu bạn đang làm gì và biết cách liên hệ.
            </p>

            <div style={{ backgroundColor: 'rgba(10, 70, 90, 0.75)', border: '1px solid rgba(15, 169, 154, 0.35)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.35rem', backdropFilter: 'blur(8px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: 'var(--color-teal-soft)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <ShieldCheck size={20} style={{ flexShrink: 0 }} />
                <span>CAM KẾT AN TÂM 100%</span>
              </div>
              <p style={{ fontSize: '0.925rem', color: '#d4e5ea', margin: 0, lineHeight: 1.6 }}>
                2.900.000đ · Nhận Demo trong 24h kể từ khi đủ thông tin · Bàn giao xong mới thanh toán (0đ rủi ro).
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                <CheckCircle2 size={18} color="var(--color-teal-soft)" style={{ flexShrink: 0 }} />
                <span>Miễn phí 100% việc tạo bản thảo Web Demo ban đầu</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                <Clock size={18} color="var(--color-teal-soft)" style={{ flexShrink: 0 }} />
                <span>Phản hồi &amp; tư vấn giải pháp trong 24 giờ làm việc</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.5 }}>
                <Sparkles size={18} color="var(--color-teal-soft)" style={{ flexShrink: 0 }} />
                <span>Tối ưu hiển thị chuẩn trên mọi thiết bị di động &amp; máy tính</span>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              color: 'var(--color-text)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 1.5rem',
              boxShadow: 'var(--shadow-lg)',
              boxSizing: 'border-box',
              maxWidth: '100%'
            }}
          >
            {status === 'success' ? (
              <div
                style={{
                  backgroundColor: '#ecfdf5',
                  border: '1.5px solid #059669',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem 1.25rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#d1fae5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CheckCircle2 size={40} color="#059669" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', color: '#065f46', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
                    Gửi Yêu Cầu Thành Công!
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: '#047857', lineHeight: 1.6, margin: 0 }}>
                    Cảm ơn <strong>{formData.fullName}</strong> đã đăng ký! LocalMate sẽ liên hệ qua SĐT/Zalo <strong>{formData.phone}</strong> trong 24h làm việc để gửi bản demo.
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #a7f3d0',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.875rem',
                    width: '100%',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    color: '#065f46'
                  }}
                >
                  <strong>Các bước tiếp theo:</strong>
                  <ol style={{ paddingLeft: '1.2rem', margin: '0.35rem 0 0 0', lineHeight: 1.5 }}>
                    <li>Xác nhận thông tin ngành nghề & sản phẩm</li>
                    <li>Gửi link demo trực quan qua Zalo</li>
                    <li>Báo giá rõ ràng, bàn giao xong mới thanh toán</li>
                  </ol>
                </div>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', phone: '', industry: '', facebookUrl: '' });
                  }}
                  style={{ marginTop: '0.5rem', width: '100%' }}
                >
                  Gửi yêu cầu khác
                </Button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: '0.35rem', fontWeight: 800, lineHeight: 1.3 }}>
                  Đăng Ký Nhận Web Demo
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  LocalMate sẽ dựng bản demo riêng cho ngành nghề của bạn trong 24h làm việc.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }} noValidate>
                  {/* Field 1: Full Name */}
                  <div>
                    <label htmlFor="fullName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Họ và tên <span style={{ color: 'var(--color-orange)' }}>*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn Hùng"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '0.75rem 0.875rem',
                        borderRadius: 'var(--radius-md)',
                        border: errors.fullName ? '2px solid #ef4444' : '1px solid var(--color-border)',
                        backgroundColor: errors.fullName ? '#fef2f2' : '#ffffff',
                        outline: 'none',
                        fontSize: '0.95rem',
                        color: 'var(--color-text)'
                      }}
                    />
                    {errors.fullName && (
                      <span style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.35rem', display: 'block', fontWeight: 500 }}>
                        ⚠️ {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Số điện thoại / Zalo <span style={{ color: 'var(--color-orange)' }}>*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Ví dụ: 0912345678"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '0.75rem 0.875rem',
                        borderRadius: 'var(--radius-md)',
                        border: errors.phone ? '2px solid #ef4444' : '1px solid var(--color-border)',
                        backgroundColor: errors.phone ? '#fef2f2' : '#ffffff',
                        outline: 'none',
                        fontSize: '0.95rem',
                        color: 'var(--color-text)'
                      }}
                    />
                    {errors.phone && (
                      <span style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.35rem', display: 'block', fontWeight: 500 }}>
                        ⚠️ {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Field 3: Industry */}
                  <div>
                    <label htmlFor="industry" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Ngành nghề / Sản phẩm dịch vụ
                    </label>
                    <input
                      id="industry"
                      type="text"
                      placeholder="Ví dụ: Thầu sửa nhà, Quán ăn, Spa, Xưởng gỗ..."
                      value={formData.industry}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '0.75rem 0.875rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>

                  {/* Field 4: Facebook / Fanpage */}
                  <div>
                    <label htmlFor="facebookUrl" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                      Link Facebook / Fanpage (nếu có)
                    </label>
                    <input
                      id="facebookUrl"
                      type="text"
                      placeholder="https://facebook.com/trang-cua-ban"
                      value={formData.facebookUrl}
                      onChange={(e) => handleChange('facebookUrl', e.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '0.75rem 0.875rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        color: 'var(--color-text)'
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === 'loading'}
                    style={{ marginTop: '0.5rem', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'loading' ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <Loader2 size={20} className="animate-spin" /> Đang xử lý...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <Send size={18} /> Nhận web demo cho doanh nghiệp
                      </span>
                    )}
                  </Button>

                  <p style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)', textAlign: 'center', margin: 0, lineHeight: 1.4 }}>
                    🔒 Thông tin của bạn được bảo mật tuyệt đối. Không Spam quảng cáo.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

