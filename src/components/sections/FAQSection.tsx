import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion } from '../ui/Accordion';
import { FAQ_ITEMS } from '../../data/landingContent';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" style={{ padding: '5.5rem 0', backgroundColor: 'var(--color-bg)' }}>
      <Container size="lg">
        <SectionHeader
          eyebrow="GIẢI ĐÁP THẮC MẮC"
          title="Câu hỏi thường gặp trước khi bắt đầu"
          subtitle="Những băn khoăn phổ biến nhất của các hộ kinh doanh và doanh nghiệp một người."
        />

        <Accordion items={FAQ_ITEMS} />

        {/* Support callout box */}
        <div
          style={{
            maxWidth: '840px',
            margin: '3rem auto 0 auto',
            padding: '1.5rem 2rem',
            backgroundColor: 'var(--color-surface)',
            border: '1px dashed var(--color-teal)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-teal-soft)',
                color: 'var(--color-teal-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <MessageSquare size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.2rem' }}>
                Vẫn còn thắc mắc khác chưa được trả lời?
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Đội ngũ LocalMate sẵn sàng giải đáp 1-1 trực tiếp qua Zalo hoặc điện thoại.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--color-teal)',
              color: '#ffffff',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            <PhoneCall size={16} /> Hỗ trợ trực tiếp ngay
          </button>
        </div>
      </Container>
    </section>
  );
};

