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
import { useRouter } from '../layout/Router';

interface ConceptGeneratorProps {
  onComplete?: () => void;
  compact?: boolean;
}

export const ConceptGeneratorSection: React.FC<ConceptGeneratorProps> = ({ onComplete, compact = false }) => {
  const { navigate } = useRouter();
  const [step, setStep] = useState<number>(1);
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Nhà hàng / F&B');
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
      setStep(2); // Show WOW Moment Mockup
    }, 1000);
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

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onComplete) onComplete();
  };

  return (
    <section
      style={{
        padding: compact ? '2rem 0' : '4.5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="concept-generator"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
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
              marginBottom: '0.75rem'
            }}
          >
            <Sparkles size={14} color="var(--color-teal)" /> TẠO CONCEPT THIẾT KẾ ĐỊNH HƯỚNG 0Đ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Xem Định Hướng Giao Diện Trước Khi Quyết Định
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Nhập tên thương hiệu &amp; lĩnh vực. LocalMate sẽ dựng ngay bản mockup screenshot website định hướng mà không yêu cầu để lại SĐT trước.
          </p>
        </div>

        {/* Step 1: Input Form */}
        {step === 1 && (
          <div
            style={{
              backgroundColor: '#f8fbfa',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: compact ? '1.5rem' : '2.5rem',
              maxWidth: '780px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <form onSubmit={handleGenerateConcept} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                  1. Tên doanh nghiệp / Cửa hàng của bạn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Nhà Hàng Bà Tám F&B / Spa Hương Sen / Cửa hàng Xây Dựng Nam Phát..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.925rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    2. Lĩnh vực kinh doanh *
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Nhà hàng / F&B">Nhà hàng / F&B / Quán ăn</option>
                    <option value="Spa / Beauty / Làm đẹp">Spa / Beauty / Làm đẹp</option>
                    <option value="Giáo dục / Trường học">Giáo dục / Trường học / Kỹ năng</option>
                    <option value="Bán lẻ / Shop online">Bán lẻ / Cửa hàng / Shop online</option>
                    <option value="Xây dựng / Nội thất">Xây dựng / Nội thất / Thi công</option>
                    <option value="Dịch vụ chuyên môn">Dịch vụ chuyên môn / Luật / Tư vấn</option>
                    <option value="B2B / Xuất khẩu">Doanh nghiệp B2B / Xuất khẩu</option>
                    <option value="Lĩnh vực khác">Lĩnh vực khác</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    3. Link Facebook / Web hiện tại (Tùy chọn)
                  </label>
                  <input
                    type="text"
                    placeholder="facebook.com/tiembanhxeo..."
                    value={socialUrl}
                    onChange={(e) => setSocialUrl(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Style Selector Grid */}
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.65rem' }}>
                  4. Chọn phong cách giao diện mong muốn:
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.65rem' }}>
                  {CONCEPT_STYLES.map((st) => {
                    const isSelected = selectedStyle === st.styleKey;
                    return (
                      <button
                        type="button"
                        key={st.styleKey}
                        onClick={() => setSelectedStyle(st.styleKey)}
                        style={{
                          textAlign: 'left',
                          padding: '0.75rem 0.9rem',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.825rem',
                          fontWeight: isSelected ? 700 : 600,
                          backgroundColor: isSelected ? 'var(--color-teal-soft)' : '#ffffff',
                          color: isSelected ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                          border: '1px solid',
                          borderColor: isSelected ? 'var(--color-teal)' : 'var(--color-border)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>{st.label}</span>
                        {isSelected && <Check size={16} color="var(--color-teal-dark)" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button variant="primary" size="lg" type="submit" disabled={isLoading} fullWidth className="btn-primary" style={{ marginTop: '0.5rem' }}>
                {isLoading ? (
                  <span>Đang dựng Mockup 0đ...</span>
                ) : (
                  <>
                    <Eye size={18} />
                    <span>Tạo Concept Giao Diện 0đ Tức Thời</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        )}

        {/* Step 2: WOW Moment Mockup Render */}
        {step === 2 && conceptResult && (
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Disclaimer Bar */}
            <div
              style={{
                backgroundColor: '#fff4eb',
                border: '1px solid #ffd8be',
                borderRadius: 'var(--radius-md)',
                padding: '0.65rem 1rem',
                fontSize: '0.825rem',
                fontWeight: 700,
                color: 'var(--color-orange-dark)',
                textAlign: 'center',
                marginBottom: '1.25rem'
              }}
            >
              ⚠️ {conceptResult.disclaimer}
            </div>

            {/* SVG Mockup Screenshot Preview */}
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '1.5rem' }}>
              <img
                src={conceptResult.svgMockupDataUrl}
                alt={`Mockup concept ${conceptResult.businessName}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Action Bar (Value Moment Choice) */}
            <div
              style={{
                backgroundColor: '#f8fbfa',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                  Bạn thấy hướng thiết kế cho {conceptResult.businessName} thế nào?
                </h4>
                <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                  Phong cách: {conceptResult.styleMeta.label}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleRegenerateNextStyle}
                  style={{
                    padding: '0.65rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <RefreshCw size={15} /> Thử phong cách khác
                </button>

                <button
                  onClick={() => setStep(3)} // Move to Lead Form AFTER Value Moment!
                  style={{
                    padding: '0.75rem 1.6rem',
                    backgroundColor: 'var(--color-orange)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: 'var(--shadow-orange)'
                  }}
                >
                  <span>Tôi thích hướng này!</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Lead Form AFTER Value Moment */}
        {step === 3 && conceptResult && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              maxWidth: '640px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-teal-soft)', color: 'var(--color-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Đã Nhận Khung Concept Của {conceptResult.businessName}!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Chuyên viên LocalMate sẽ gọi Zalo xác nhận menu, thông tin nhận diện và báo phạm vi cọc 50% trước khi chính thức triển khai code.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  style={{
                    padding: '0.65rem 1.25rem',
                    backgroundColor: 'var(--color-teal-soft)',
                    color: 'var(--color-teal-dark)',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Tạo concept khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                  XÁC NHẬN HƯỚNG THIẾT KẾ MẪU #{conceptResult.styleMeta.label}
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                  Liên Hệ Xác Nhận Scope &amp; Cọc 50%
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Nhập số điện thoại Zalo để LocalMate kiểm tra thông tin và gọi xác nhận trước khi làm.
                </p>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    1. Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Anh Nam / Chị Hồng"
                    value={leadForm.fullName}
                    onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                    style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    2. Số điện thoại / Zalo nhận báo giá *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0988.xxx.xxx"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.9rem' }}
                  />
                </div>

                <div style={{ backgroundColor: '#f0f7f5', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--color-teal-dark)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} /> Xem định hướng trước · Cọc 50% khi triển khai · Không phí ẩn
                </div>

                <Button variant="primary" size="lg" type="submit" fullWidth className="btn-primary">
                  <Send size={18} />
                  <span>Tôi Muốn Triển Khai Theo Mẫu Này</span>
                </Button>
              </form>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
