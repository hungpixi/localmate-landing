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
        maxWidth: align === 'center' ? '820px' : '100%',
        margin: align === 'center' ? '0 auto clamp(1.75rem, 4vw, 3rem) auto' : '0 0 clamp(1.5rem, 3vw, 2.5rem) 0',
        padding: '0 0.25rem'
      }}
      className={`section-header ${className}`}
    >
      {eyebrow && (
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.775rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: dark ? 'var(--color-primary-soft)' : 'var(--color-primary-dark)',
            backgroundColor: dark ? 'rgba(13, 118, 71, 0.2)' : 'var(--color-primary-soft)',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            marginBottom: '0.85rem'
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          color: dark ? '#ffffff' : 'var(--color-text)',
          marginBottom: subtitle ? '0.75rem' : '0',
          fontWeight: 800,
          fontSize: 'var(--font-size-h2)',
          lineHeight: 'var(--line-height-h2, 1.25)',
          letterSpacing: '-0.02em',
          wordBreak: 'break-word'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'var(--font-size-subtitle)',
            color: dark ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-text-muted)',
            lineHeight: 'var(--line-height-subtitle, 1.6)',
            fontWeight: 400,
            maxWidth: '700px',
            margin: align === 'center' ? '0 auto' : '0',
            wordBreak: 'break-word'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

