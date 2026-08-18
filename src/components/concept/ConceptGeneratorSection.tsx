import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  CONCEPT_STYLES,
  ConceptStyle,
  generateWebsiteConceptMockup,
  GeneratedConceptResult
} from '../../services/conceptGenerator';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Send,
  Eye,
  ShieldCheck,
  Check
} from 'lucide-react';

import { submitLead } from '../../services/leadService';

interface ConceptGeneratorProps {
  onComplete?: () => void;
  compact?: boolean;
}

export const ConceptGeneratorSection: React.FC<ConceptGeneratorProps> = ({ onComplete, compact = false }) => {
  const [step, setStep] = useState<number>(1);
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Nhà hàng / Quán ăn / Cafe');
  const [socialUrl, setSocialUrl] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<ConceptStyle>('modern');

  const [isLoading, setIsLoading] = useState(false);
  const [conceptResult, setConceptResult] = useState<GeneratedConceptResult | null>(null);

  const [leadForm, setLeadForm] = useState({
    fullName: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGenerateConcept = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const res = generateWebsiteConceptMockup({
        businessName,
        industry,
        style: selectedStyle,
        websiteUrl: socialUrl
      });
      setConceptResult(res);
      setIsLoading(false);
      setStep(2); // Show Mockup Preview
    }, 700);
  };

  const handleRegenerateNextStyle = () => {
    const styles: ConceptStyle[] = ['modern', 'premium', 'warm', 'minimal'];
    const currentIndex = styles.indexOf(selectedStyle);
    const nextStyle = styles[(currentIndex + 1) % styles.length];
    setSelectedStyle(nextStyle);

    const res = generateWebsiteConceptMockup({
      businessName,
      industry,
      style: nextStyle,
      websiteUrl: socialUrl
    });
    setConceptResult(res);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadForm.fullName && leadForm.phone) {
      try {
        await submitLead({
          name: leadForm.fullName,
          phone: leadForm.phone,
          businessName: businessName,
          serviceInterest: `Concept Demo: ${businessName} (${industry})`,
          message: `Style: ${selectedStyle}, Link: ${socialUrl}`,
          sourcePage: '/concept'
        });
      } catch (err) {
        console.debug('Concept lead catch:', err);
      }
    }
    setIsSubmitted(true);
    if (onComplete) onComplete();
  };

  return (
    <section
      style={{
        padding: compact ? '2rem 0' : 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="concept-generator"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} /> XEM THỬ MIỄN PHÍ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Xem thử website của cửa hàng bạn
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Nhập tên cửa hàng và ngành nghề. LocalMate sẽ tạo một mẫu để bạn xem trước, chưa cần để lại số điện thoại.
          </p>
        </div>

        {/* Step 1: Clean Input Form */}
        {step === 1 && (
          <div className="demo-form-card">
            <form onSubmit={handleGenerateConcept} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Field 1: Business Name */}
              <div>
                <label className="form-label">
                  Tên cửa hàng hoặc doanh nghiệp <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Cơm Tấm Ba Ghiền"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* 2-Column Row: Industry & Social/Website */}
              <div className="form-2col-row">
                <div>
                  <label className="form-label">
                    Bạn đang kinh doanh gì? <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="form-select"
                  >
                    <option value="Nhà hàng / Quán ăn / Cafe">Nhà hàng / Quán ăn / Cafe</option>
                    <option value="Spa / Làm đẹp / Nha khoa">Spa / Làm đẹp / Nha khoa</option>
                    <option value="Xây dựng / Nội thất / Cơ khí">Xây dựng / Nội thất / Cơ khí</option>
                    <option value="Cửa hàng bán lẻ / Tạp hóa">Cửa hàng bán lẻ / Đại lý</option>
                    <option value="Giáo dục / Lớp học / Mầm non">Giáo dục / Lớp học / Mầm non</option>
                    <option value="Dịch vụ sửa chữa / Kỹ thuật">Dịch vụ sửa chữa / Kỹ thuật</option>
                    <option value="Ngành nghề khác">Ngành nghề khác</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">
                    Facebook hoặc website hiện tại
                  </label>
                  <input
                    type="text"
                    placeholder="facebook.com/tiemcuaban..."
                    value={socialUrl}
                    onChange={(e) => setSocialUrl(e.target.value)}
                    className="form-input"
                  />
                  <span className="form-helper-text">Không có cũng không sao.</span>
                </div>
              </div>

              {/* Style Selector Grid 2x2 */}
              <div>
                <label className="form-label" style={{ marginBottom: '0.65rem' }}>
                  Bạn thích kiểu website nào?
                </label>

                <div className="style-selector-2x2-grid">
                  {CONCEPT_STYLES.map((st) => {
                    const isSelected = selectedStyle === st.styleKey;
                    return (
                      <button
                        type="button"
                        key={st.styleKey}
                        onClick={() => setSelectedStyle(st.styleKey)}
                        className={`style-option-btn ${isSelected ? 'selected' : ''}`}
                      >
                        <span className="style-btn-label">{st.label}</span>
                        {isSelected && <Check size={16} color="var(--color-primary)" className="style-check-icon" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA & Trust Microcopy */}
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'center' }}>
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isLoading}
                  fullWidth
                  style={{ fontWeight: 800 }}
                >
                  {isLoading ? (
                    <span>Đang tạo mẫu website...</span>
                  ) : (
                    <>
                      <Eye size={18} />
                      <span>Xem website mẫu miễn phí</span>
                    </>
                  )}
                </Button>

                <span className="cta-trust-microcopy">
                  Không cần số điện thoại · Không cần thanh toán
                </span>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: WOW Moment Mockup Render */}
        {step === 2 && conceptResult && (
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            {/* SVG Mockup Screenshot Preview */}
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
              <img
                src={conceptResult.svgMockupDataUrl}
                alt={`Mockup concept ${conceptResult.businessName}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Action Bar */}
            <div className="mockup-action-bar">
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                  Mẫu website gợi ý cho {conceptResult.businessName}
                </h4>
                <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                  Phong cách: {conceptResult.styleMeta.label}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleRegenerateNextStyle}
                  className="btn-try-other-style"
                >
                  <RefreshCw size={14} /> Thử phong cách khác
                </button>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setStep(3)}
                  style={{ fontWeight: 700 }}
                >
                  <span>Tôi thích hướng này!</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Lead Form AFTER Value Moment */}
        {step === 3 && conceptResult && (
          <div className="lead-confirm-card">
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                  Đã nhận thông tin của {conceptResult.businessName}!
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Đội ngũ LocalMate sẽ liên hệ Zalo để gửi bạn link xem bản website hoàn chỉnh trên điện thoại.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="btn-try-other-style"
                >
                  Tạo mẫu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    XÁC NHẬN MẪU: {conceptResult.styleMeta.label}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', margin: '0.25rem 0 0 0' }}>
                    Nhận link xem bản website đầy đủ
                  </h3>
                </div>

                <div>
                  <label className="form-label">
                    Họ và tên của bạn <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Nam / Chị Hồng"
                    value={leadForm.fullName}
                    onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">
                    Số điện thoại hoặc Zalo nhận link <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0988.xxx.xxx"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="lead-guarantee-pill">
                  <ShieldCheck size={16} color="var(--color-primary)" />
                  <span>Xem demo 0đ · Nghiệm thu hài lòng rồi mới thanh toán</span>
                </div>

                <Button variant="primary" size="lg" type="submit" fullWidth style={{ fontWeight: 800 }}>
                  <Send size={17} />
                  <span>Gửi nhận link demo qua Zalo</span>
                </Button>
              </form>
            )}
          </div>
        )}
      </Container>

      <style>{`
        .demo-form-card {
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-2xl);
          padding: clamp(1.5rem, 3.5vw, 2.5rem);
          max-width: 780px;
          margin: 0 auto;
          box-shadow: var(--shadow-sm);
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-navy);
          margin-bottom: 0.4rem;
        }

        .form-input, .form-select {
          width: 100%;
          min-height: 48px;
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 0.925rem;
          outline: none;
          background-color: #ffffff;
          box-sizing: border-box;
          color: var(--color-navy);
          transition: border-color var(--transition-fast);
        }

        .form-input:focus, .form-select:focus {
          border-color: var(--color-primary);
        }

        .form-2col-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 600px) {
          .form-2col-row {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .form-helper-text {
          font-size: 0.775rem;
          color: var(--color-text-muted);
          margin-top: 0.3rem;
          display: block;
        }

        .style-selector-2x2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem;
        }

        @media (min-width: 480px) {
          .style-selector-2x2-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .style-option-btn {
          text-align: left;
          min-height: 48px;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          background-color: #ffffff;
          color: var(--color-navy);
          border: 1px solid var(--color-border);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all var(--transition-fast);
        }

        .style-option-btn.selected {
          font-weight: 700;
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
          border-color: var(--color-primary);
        }

        .cta-trust-microcopy {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-align: center;
        }

        .mockup-action-bar {
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.25rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-try-other-style {
          padding: 0.6rem 1.1rem;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .lead-confirm-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-2xl);
          padding: clamp(1.5rem, 3.5vw, 2.25rem);
          max-width: 580px;
          margin: 0 auto;
          box-shadow: var(--shadow-md);
        }

        .lead-guarantee-pill {
          background-color: var(--color-primary-soft);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--color-primary-dark);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
      `}</style>
    </section>
  );
};
