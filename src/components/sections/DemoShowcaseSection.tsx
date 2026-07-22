import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { DEMO_SHOWCASES } from '../../data/landingContent';
import {
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Globe,
  ArrowUpRight
} from 'lucide-react';

export const DemoShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredDemos = activeTab === 'all'
    ? DEMO_SHOWCASES
    : DEMO_SHOWCASES.filter(d => d.id === activeTab);

  return (
    <section id="demo-showcase" style={{ padding: '5rem 0', backgroundColor: 'var(--color-surface)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="SẢN PHẨM THỰC TẾ ĐÃ TRIỂN KHAI"
          title="Các dự án thực tế LocalMate đã đồng hành"
          subtitle="Bấm trực tiếp vào đường link bên dưới để trải nghiệm website thực tế."
        />

        {/* Industry Filter Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            marginBottom: '2.5rem',
            maxWidth: '100%',
            justifyContent: 'flex-start'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === 'all' ? 'var(--color-navy)' : 'var(--color-bg)',
              color: activeTab === 'all' ? '#ffffff' : 'var(--color-text)',
              transition: 'all var(--transition-fast)'
            }}
          >
            Tất cả dự án ({DEMO_SHOWCASES.length})
          </button>
          {DEMO_SHOWCASES.map((demo) => (
            <button
              key={demo.id}
              type="button"
              onClick={() => setActiveTab(demo.id)}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === demo.id ? 'var(--color-navy)' : 'var(--color-bg)',
                color: activeTab === demo.id ? '#ffffff' : 'var(--color-text)',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)'
              }}
            >
              {demo.industry.split('&')[0]}
            </button>
          ))}
        </div>

        {/* 5 Real Projects Grid (Clean & Practical Link Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredDemos.map((demo) => (
            <Card
              key={demo.id}
              variant="surface"
              hoverable
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                gap: '1.25rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div>
                {/* Header Tag & Industry */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: 'var(--color-teal-dark)',
                      backgroundColor: 'var(--color-teal-soft)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {demo.industry}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                    <ShieldCheck size={14} color="var(--color-teal)" /> Đang hoạt động
                  </span>
                </div>

                {/* Project Title & Link */}
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem', fontWeight: 800, lineHeight: 1.3 }}>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <span>{demo.title}</span>
                    <ArrowUpRight size={18} color="var(--color-teal)" />
                  </a>
                </h3>

                {/* Domain Pill */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      color: 'var(--color-teal-dark)',
                      backgroundColor: '#f0fdfa',
                      border: '1px solid #ccfbf1',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none'
                    }}
                  >
                    <Globe size={14} color="var(--color-teal)" />
                    <span>https://{demo.domain}</span>
                  </a>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {demo.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)',
                        backgroundColor: 'var(--color-bg)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Key Highlights Checklist */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, margin: 0 }}>
                  {demo.features.map((feat, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', lineHeight: 1.4 }}>
                      <CheckCircle2 size={16} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button to Open Direct Live Site */}
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)'
                }}
                className="btn-primary"
              >
                <span>Xem trực tiếp website thật</span>
                <ExternalLink size={16} />
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

