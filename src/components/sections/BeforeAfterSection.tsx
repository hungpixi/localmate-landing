import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { BEFORE_AFTER } from '../../data/landingContent';
import { XCircle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-surface)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="SỰ KHÁC BIỆT RÕ RÀNG"
          title="Thay đổi thực sự cho công việc kinh doanh của bạn"
          subtitle="Hãy so sánh cách làm truyền thống và trải nghiệm hiện đại khi có LocalMate đồng hành."
        />

        {/* Transition Summary Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 20,
              backgroundColor: '#fee2e2',
              color: '#991b1b',
              fontWeight: 600,
              fontSize: '0.875rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            🔴 Khó tìm thấy
          </span>
          <ArrowRight size={16} color="var(--color-teal)" />
          <span
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 20,
              backgroundColor: '#fef3c7',
              color: '#92400e',
              fontWeight: 600,
              fontSize: '0.875rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            🟡 Dễ hiểu
          </span>
          <ArrowRight size={16} color="var(--color-teal)" />
          <span
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 20,
              backgroundColor: '#d1fae5',
              color: '#065f46',
              fontWeight: 600,
              fontSize: '0.875rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            🟢 Dễ tin
          </span>
          <ArrowRight size={16} color="var(--color-teal)" />
          <span
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 20,
              backgroundColor: '#ffedd5',
              border: '1.5px solid var(--color-orange)',
              color: '#c2410c',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 2px 8px rgba(255, 138, 0, 0.15)'
            }}
          >
            🚀 Dễ liên hệ ngay
          </span>
        </div>

        {/* Before / After 2 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* BEFORE */}
          <Card
            variant="bg"
            style={{
              padding: '2.25rem 2rem',
              backgroundColor: '#fcf8f8',
              border: '1px solid #fee2e2',
              borderLeft: '5px solid #ef4444',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <XCircle size={22} color="#dc2626" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#1f2937', fontWeight: 700 }}>Khi chưa có LocalMate</h3>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#991b1b',
                  backgroundColor: '#fee2e2',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 12,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <ShieldAlert size={12} /> Cách cũ
              </span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {BEFORE_AFTER.before.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#374151',
                    fontSize: '0.95rem',
                    lineHeight: 1.5
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2
                    }}
                  >
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* AFTER */}
          <Card
            variant="highlight"
            style={{
              padding: '2.25rem 2rem',
              backgroundColor: '#f0fdfa',
              border: '1.5px solid var(--color-teal)',
              borderLeft: '6px solid var(--color-teal)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-teal-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={22} color="var(--color-teal)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', fontWeight: 800 }}>Sau khi có LocalMate</h3>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-teal-dark)',
                  backgroundColor: 'var(--color-teal-soft)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 12,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <Sparkles size={12} /> Hiện đại & Rõ ràng
              </span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {BEFORE_AFTER.after.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--color-navy)',
                    fontWeight: 600,
                    fontSize: '0.975rem',
                    lineHeight: 1.5
                  }}
                >
                  <CheckCircle2 size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};

