import React from 'react';
import { Container } from '../ui/Container';
import { DIGITAL_CARE_TIERS } from '../../data/servicesCatalog';
import { Check, ShieldCheck, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const DigitalCareSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="digital-care"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
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
            <ShieldCheck size={15} color="var(--color-teal)" /> DỊCH VỤ #40 · MODULAR SUBSCRIPTION
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            LocalMate Digital Care — Đồng Hành Hàng Tháng
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Không cần tuyển đội ngũ IT hay marketing đắt đỏ. Chọn mức gói chăm sóc phù hợp với nhu cầu và quy mô thực tế của bạn.
          </p>
        </div>

        {/* 4 Digital Care Tiers Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {DIGITAL_CARE_TIERS.map((tier) => {
            const isFeatured = tier.isRecommended;
            return (
              <div
                key={tier.id}
                style={{
                  backgroundColor: isFeatured ? '#ffffff' : '#ffffff',
                  border: isFeatured ? '2px solid var(--color-teal)' : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  boxShadow: isFeatured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Badge Header */}
                  {tier.badge && (
                    <div style={{ marginBottom: '0.85rem' }}>
                      <span
                        style={{
                          fontSize: '0.725rem',
                          fontWeight: 700,
                          color: isFeatured ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                          backgroundColor: isFeatured ? 'var(--color-teal-soft)' : '#f0f7f5',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    {tier.name}
                  </h3>

                  <div style={{ marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>
                      {tier.priceDisplay}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{tier.unit}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {tier.description}
                  </p>

                  {/* Tasks Quota Box */}
                  <div
                    style={{
                      backgroundColor: '#f8fbfa',
                      border: '1px dashed var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: 'var(--color-navy)',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <Zap size={14} color="var(--color-orange-dark)" style={{ flexShrink: 0 }} />
                    <span>Hạn mức: {tier.tasksQuota}</span>
                  </div>

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {tier.features.map((ft, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                        <Check size={16} color="var(--color-teal-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Button */}
                <button
                  onClick={() => navigate('/lien-he')}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: isFeatured ? 'var(--color-navy)' : 'var(--color-teal-soft)',
                    color: isFeatured ? '#ffffff' : 'var(--color-teal-dark)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span>Đăng ký {tier.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
