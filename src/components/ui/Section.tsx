import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'bg' | 'surface' | 'navy' | 'soft-teal';
  padding?: 'normal' | 'compact' | 'spacious';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  variant = 'bg',
  padding = 'normal'
}) => {
  const backgrounds = {
    bg: 'var(--color-bg)',
    surface: 'var(--color-surface)',
    navy: 'var(--color-navy)',
    'soft-teal': 'var(--color-teal-soft)'
  };

  const paddings = {
    compact: '3.5rem 0',
    normal: '5.5rem 0',
    spacious: '7.5rem 0'
  };

  const isDark = variant === 'navy';

  return (
    <section
      id={id}
      style={{
        backgroundColor: backgrounds[variant],
        padding: paddings[padding],
        color: isDark ? '#ffffff' : 'var(--color-text)',
        position: 'relative'
      }}
      className={`section-component ${className}`}
    >
      {children}
    </section>
  );
};
