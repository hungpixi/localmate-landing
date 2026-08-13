import React from 'react';
import { Container } from '../ui/Container';
import { PROBLEM_MAPPER } from '../../data/landingContent';
import { ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const ProblemMapperSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: '4.5rem 0',
        backgroundColor: '#f8fbfa',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="can-lam-gi"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
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
            <HelpCircle size={14} /> DỄ ĐÀNG CHỌN ĐÚNG DỊCH VỤ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bạn đang cần giải quyết vấn đề gì?
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Không bắt bạn phải hiểu các thuật ngữ kỹ thuật phức tạp. Chọn đúng nhu cầu thực tế của bạn để nhận lộ trình phù hợp nhất.
          </p>
        </div>

        {/* 6 Problem Mapper Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {PROBLEM_MAPPER.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.link)}
              className="interactive-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                position: 'relative'
              }}
            >
              <div>
                {/* Badge Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--color-orange-dark)',
                      backgroundColor: '#fff4eb',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid #ffd8be'
                    }}
                  >
                    {item.badge}
                  </span>
                  <CheckCircle2 size={18} color="var(--color-teal)" />
                </div>

                {/* Problem Statement */}
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--color-navy)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.35
                  }}
                >
                  "{item.problem}"
                </h3>

                {/* Arrow Solution mapping */}
                <div
                  style={{
                    fontSize: '0.925rem',
                    fontWeight: 700,
                    color: 'var(--color-teal-dark)',
                    marginBottom: '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>→</span>
                  <span>{item.solution}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>

              {/* Card Footer CTA Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--color-border)'
                }}
              >
                <span>Xem lộ trình dịch vụ</span>
                <ArrowRight size={15} color="var(--color-teal-dark)" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
