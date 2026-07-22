import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false
}) => {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    if (defaultOpenId) return [defaultOpenId];
    return items[0] ? [items[0].id] : [];
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <div
      role="region"
      aria-label="Danh sách câu hỏi thường gặp"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '840px',
        margin: '0 auto'
      }}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              backgroundColor: 'var(--color-surface)',
              border: `1px solid ${isOpen ? 'var(--color-teal)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              transition: 'border-color var(--transition-base), box-shadow var(--transition-base)'
            }}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                backgroundColor: isOpen ? 'rgba(15, 169, 154, 0.04)' : 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1.05rem',
                color: isOpen ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                gap: '1rem',
                transition: 'background-color var(--transition-fast), color var(--transition-fast)'
              }}
            >
              <span style={{ lineHeight: 1.4 }}>{item.question}</span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isOpen ? 'var(--color-teal-soft)' : 'var(--color-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background-color var(--transition-fast)'
                }}
              >
                <ChevronDown
                  size={18}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: isOpen ? 'var(--color-teal-dark)' : 'var(--color-text-muted)'
                  }}
                />
              </div>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    padding: '0.5rem 1.5rem 1.25rem 1.5rem',
                    fontSize: '0.975rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.7,
                    borderTop: isOpen ? '1px solid rgba(15, 169, 154, 0.12)' : 'none'
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

