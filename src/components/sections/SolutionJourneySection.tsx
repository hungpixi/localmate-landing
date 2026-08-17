import React from 'react';
import { Container } from '../ui/Container';
import { SOLUTION_STEPS } from '../../data/landingContent';
import { Sparkles, CheckCircle2, Globe, MapPin, TrendingUp } from 'lucide-react';

export const SolutionJourneySection: React.FC = () => {
  const stepIcons = [
    <Globe key="1" size={24} color="var(--color-primary)" />,
    <MapPin key="2" size={24} color="var(--color-primary)" />,
    <TrendingUp key="3" size={24} color="var(--color-primary)" />
  ];

  return (
    <section id="lo-trinh" style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.75rem' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} /> NÊN LÀM GÌ TRƯỚC?
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Không cần làm tất cả cùng lúc
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            LocalMate giúp bạn làm từng bước theo đúng nhu cầu và ngân sách hiện tại.
          </p>
        </div>

        {/* 3-Step Clean Progress Grid */}
        <div className="steps-progress-grid">
          {SOLUTION_STEPS.map((step, idx) => (
            <div key={step.step} className="step-timeline-card interactive-card">
              {/* Top Step Header with Connector Line Indicator */}
              <div className="step-card-top">
                <span className="step-number-tag">{step.label}</span>
                <div className="step-icon-wrapper">
                  {stepIcons[idx]}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="step-card-title">{step.title}</h3>

              <p className="step-card-desc">{step.desc}</p>

              {/* Outcome Highlight Box */}
              <div className="step-outcome-pill">
                <CheckCircle2 size={15} color="var(--color-primary)" className="outcome-icon" />
                <span>{step.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        .steps-progress-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .steps-progress-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .step-timeline-card {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-top: 3px solid var(--color-primary);
          border-radius: var(--radius-xl);
          padding: clamp(1.35rem, 2.5vw, 1.75rem);
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow-sm);
        }

        .step-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.15rem;
        }

        .step-number-tag {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .step-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        .step-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.55rem 0;
          line-height: 1.3;
        }

        .step-card-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0 0 1.25rem 0;
          flex: 1;
        }

        .step-outcome-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background-color: #ffffff;
          border: 1px solid var(--color-primary-border);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-md);
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          margin-top: auto;
        }

        .outcome-icon {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
