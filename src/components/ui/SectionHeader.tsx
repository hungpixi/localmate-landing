import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) => {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : '100%',
        margin: align === 'center' ? '0 auto 3.5rem auto' : '0 0 2.5rem 0'
      }}
      className={`section-header ${className}`}
    >
      {eyebrow && (
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.8125rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: dark ? 'var(--color-teal-soft)' : 'var(--color-teal-dark)',
            backgroundColor: dark ? 'rgba(15, 169, 154, 0.15)' : 'var(--color-teal-soft)',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1rem'
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          color: dark ? '#ffffff' : 'var(--color-navy)',
          marginBottom: subtitle ? '1rem' : '0',
          fontWeight: 700,
          lineHeight: 'var(--line-height-h2, 1.28)',
          letterSpacing: '-0.02em',
          textWrap: 'balance' as any
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'var(--font-size-subtitle)',
            color: dark ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-text-muted)',
            lineHeight: 'var(--line-height-subtitle, 1.65)',
            fontWeight: 400,
            textWrap: 'balance' as any
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
