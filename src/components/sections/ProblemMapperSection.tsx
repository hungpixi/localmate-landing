import React from 'react';
import { Container } from '../ui/Container';
import { GOAL_CATEGORIES } from '../../data/servicesCatalog';
import { ArrowRight, HelpCircle, Globe, TrendingUp, BarChart2, Cpu, ShieldCheck } from 'lucide-react';
import { useRouter } from '../layout/Router';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe,
  TrendingUp,
  BarChart2,
  Cpu,
  ShieldCheck
};

export const ProblemMapperSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#f8fbfa',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="can-lam-gi"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
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
            <HelpCircle size={14} /> CHỌN THEO MỤC TIÊU KINH DOANH (WIIFM)
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bạn đang muốn làm gì tiếp theo?
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Không cần hiểu công nghệ phức tạp. Hãy chọn đúng nhu cầu thực tế của bạn để LocalMate chỉ ra chính xác công việc và chi phí tối ưu nhất.
          </p>
        </div>

        {/* 5 Goal Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'var(--space-gap)'
          }}
        >
          {GOAL_CATEGORIES.map((goal) => {
            const Icon = ICON_MAP[goal.iconName] || Globe;
            return (
              <div
                key={goal.key}
                onClick={() => navigate('/bang-gia')}
                className="interactive-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-card-p, clamp(1.25rem, 3vw, 1.75rem))',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  boxShadow: 'var(--shadow-sm)',
                  boxSizing: 'border-box',
                  minWidth: 0
                }}
              >
                <div>
                  {/* Card Header Icon & Price Pill */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-teal-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={24} color="var(--color-teal-dark)" />
                    </div>

                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--color-orange-dark)',
                        backgroundColor: '#fff4eb',
                        border: '1px solid #ffd8be',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {goal.startingPrice}
                    </span>
                  </div>

                  {/* Title & User Question */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
                    {goal.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-teal-dark)', marginBottom: '0.75rem' }}>
                    "{goal.question}"
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {goal.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px dashed var(--color-border)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--color-navy)'
                  }}
                >
                  <span>Xem lộ trình dịch vụ &amp; giá</span>
                  <ArrowRight size={16} color="var(--color-teal-dark)" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
