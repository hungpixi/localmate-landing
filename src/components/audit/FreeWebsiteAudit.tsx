import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { runAutomatedWebsiteAudit, AuditResult } from '../../services/auditEngine';
import { Search, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const FreeWebsiteAudit: React.FC = () => {
  const { navigate } = useRouter();
  const [urlInput, setUrlInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const res = runAutomatedWebsiteAudit(urlInput);
      setAuditResult(res);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <section
      style={{
        padding: '4.5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="free-audit"
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
            <Sparkles size={14} color="var(--color-teal)" /> TỰ ĐỘNG CHẨN ĐOÁN MIỄN PHÍ 30S
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Kiểm Tra Sức Khỏe Website Của Bạn
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Nhập đường link website hiện tại để LocalMate rà soát SSL, tốc độ, chuẩn di động, mã GA4, GTM &amp; Schema hoàn toàn miễn phí.
          </p>
        </div>

        {/* Input Form Bar */}
        <div style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
          <form
            onSubmit={handleRunAudit}
            className="audit-form-container"
            style={{
              backgroundColor: '#f8fbfa',
              padding: '0.45rem',
              border: '2px solid var(--color-primary)',
              boxShadow: 'var(--shadow-md)',
              boxSizing: 'border-box'
            }}
          >
            <input
              type="text"
              required
              placeholder="Nhập link web (VD: tiembanh.com)..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                backgroundColor: 'transparent',
                padding: '0.65rem 1rem',
                fontSize: '0.9rem',
                outline: 'none',
                color: 'var(--color-text)',
                fontWeight: 600,
                minWidth: 0,
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                backgroundColor: 'var(--color-orange)',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box'
              }}
              className="audit-submit-btn"
            >
              {isLoading ? (
                <span>Đang quét 30s...</span>
              ) : (
                <>
                  <Search size={18} />
                  <span>Chẩn đoán 0đ</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Audit Results Card */}
        {auditResult && (
          <div
            style={{
              backgroundColor: '#f8fbfa',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              maxWidth: '860px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {/* Top Score Banner */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                borderBottom: '1px dashed var(--color-border)',
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                  KẾT QUẢ TỰ ĐỘNG CHẨN ĐOÁN
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', margin: '0.2rem 0' }}>
                  Website: {auditResult.domain}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Phát hiện {auditResult.failedCount} lỗi kỹ thuật ảnh hưởng trực tiếp tới lượt gọi điện và doanh thu.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: '#ffffff',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: auditResult.score >= 70 ? 'var(--color-teal-dark)' : 'var(--color-orange-dark)', lineHeight: 1 }}>
                    {auditResult.score}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>/ 100 Điểm</span>
                </div>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    backgroundColor: auditResult.score >= 70 ? 'var(--color-teal-soft)' : '#fff4eb',
                    color: auditResult.score >= 70 ? 'var(--color-teal-dark)' : 'var(--color-orange-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem'
                  }}
                >
                  {auditResult.grade}
                </div>
              </div>
            </div>

            {/* Checks Table Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {auditResult.checks.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ flex: '1 1 300px', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    {item.passed ? (
                      <CheckCircle size={18} color="var(--color-teal-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
                    ) : (
                      <AlertTriangle size={18} color="var(--color-orange-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
                    )}
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--color-navy)', display: 'block' }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.recommendation}</span>
                    </div>
                  </div>

                  {!item.passed && (
                    <button
                      onClick={() => navigate('/bang-gia')}
                      style={{
                        padding: '0.4rem 0.85rem',
                        backgroundColor: '#fff4eb',
                        color: 'var(--color-orange-dark)',
                        border: '1px solid #ffd8be',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4
                      }}
                    >
                      Sửa giúp tôi ({item.fixPriceDisplay}) <ArrowRight size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Action Callout */}
            <div
              style={{
                backgroundColor: 'var(--color-navy)',
                color: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-teal-soft)', fontWeight: 700 }}>
                  ⚡ Gói Khắc Phục Lỗi Kỹ Thuật Nhanh
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: '0.2rem 0' }}>
                  Khắc phục trọn gói {auditResult.failedCount} lỗi chỉ với {auditResult.quickFixTotalDisplay}
                </h4>
              </div>

              <button
                onClick={() => navigate('/advisor')}
                style={{
                  padding: '0.65rem 1.25rem',
                  backgroundColor: 'var(--color-orange)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                <span>Xử lý ngay cùng LocalMate</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </Container>

      <style>{`
        .audit-form-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: var(--radius-xl);
        }

        .audit-submit-btn {
          width: 100%;
        }

        @media (min-width: 540px) {
          .audit-form-container {
            flex-direction: row;
            border-radius: var(--radius-full);
          }
          .audit-submit-btn {
            width: auto;
          }
        }
      `}</style>
    </section>
  );
};

