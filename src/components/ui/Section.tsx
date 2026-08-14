import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'bg' | 'surface' | 'navy' | 'soft-teal';
  padding?: 'normal' | 'compact' | 'spacious';
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  variant = 'bg',
  padding = 'normal',
  style = {}
}) => {
  const backgrounds = {
    bg: 'var(--color-bg)',
    surface: 'var(--color-surface)',
    navy: 'var(--color-navy)',
    'soft-teal': 'var(--color-primary-soft)'
  };

  const paddings = {
    compact: 'clamp(2rem, 3.5vw, 3.5rem) 0',
    normal: 'clamp(2.75rem, 5vw, 4.5rem) 0',
    spacious: 'clamp(3.5rem, 6vw, 6rem) 0'
  };

  const isDark = variant === 'navy';

  return (
    <section
      id={id}
      style={{
        backgroundColor: backgrounds[variant],
        padding: paddings[padding],
        color: isDark ? '#ffffff' : 'var(--color-text)',
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        ...style
      }}
      className={`section-component ${className}`}
    >
      {children}
    </section>
  );
};

