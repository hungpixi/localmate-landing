import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { X, CheckCircle2, ShieldCheck, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';
import { trackFormStart } from '../../analytics/tracker';
import { submitLead } from '../../services/leadService';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceName?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultServiceName = 'Tư vấn giải pháp Website & Marketing'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    service: defaultServiceName,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultServiceName) {
      setFormData((prev) => ({ ...prev, service: defaultServiceName }));
    }
  }, [defaultServiceName]);

  useEffect(() => {
    if (isOpen) {
      trackFormStart('Universal_Lead_Modal');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Vui lòng nhập họ tên và số điện thoại liên hệ.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        businessName: formData.businessName,
        serviceInterest: formData.service,
        message: formData.message,
        sourcePage: window.location.pathname
      });
    } catch (err) {
      console.debug('Lead submission catch:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(5, 47, 61, 0.65)',
          backdropFilter: 'blur(3px)',
          zIndex: 190
        }}
      />

      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-2xl)',
          width: '100%',
          maxWidth: '520px',
          padding: 'clamp(1.75rem, 5vw, 2.5rem)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
          zIndex: 200,
          border: '1px solid var(--color-border)',
          maxHeight: '90dvh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Đóng"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            padding: '0.4rem',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          <X size={22} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <CheckCircle2 size={34} color="var(--color-teal-dark)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              Gửi Yêu Cầu Thành Công!
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Chuyên viên LocalMate đã nhận được thông tin về dịch vụ <strong>"{formData.service}"</strong> và sẽ liên hệ hỗ trợ bạn trong vòng 30 phút.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--color-teal-dark)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6
                }}
              >
                <MessageSquare size={16} /> Mở Chat Zalo Tiếp Tục
              </a>
              <Button variant="secondary" size="md" onClick={onClose}>
                Đóng cửa sổ
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                LOCALMATE DIRECT CONSULTING
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.5rem', marginBottom: '0.25rem' }}>
                Nhận Tư Vấn &amp; Web Demo 0đ
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Khảo sát hiện trạng, lên bản demo giao diện trước — Bàn giao rồi mới thanh toán.
              </p>
            </div>

            {errorMsg && (
              <div style={{ padding: '0.65rem 0.85rem', backgroundColor: '#fee2e2', border: '1px solid #f87171', borderRadius: 'var(--radius-sm)', color: '#b91c1c', fontSize: '0.825rem', fontWeight: 600 }}>
                {errorMsg}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
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
                  padding: '0.7rem 0.85rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
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
                  padding: '0.7rem 0.85rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                Tên cơ sở / Ngành nghề
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Spa mini, Tiệm bánh, Xưởng cơ khí..."
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                Ghi chú thêm (không bắt buộc)
              </label>
              <textarea
                rows={2}
                placeholder="Ví dụ: Cần làm website trong 5 ngày, muốn chạy ads Google..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
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
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi Đăng Ký Tư Vấn 0đ'}
            </Button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              <ShieldCheck size={14} color="var(--color-teal-dark)" />
              <span>Bàn giao nghiệm thu rồi mới thanh toán</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
