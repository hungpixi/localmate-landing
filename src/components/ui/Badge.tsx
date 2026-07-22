import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'orange' | 'navy' | 'gray';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md'
}) => {
  const styles: Record<string, React.CSSProperties> = {
    teal: {
      backgroundColor: 'var(--color-teal-soft)',
      color: 'var(--color-teal-dark)',
      border: '1px solid #75dcd0'
    },
    orange: {
      backgroundColor: '#fff4e6',
      color: 'var(--color-orange-dark)',
      border: '1px solid #ffd199'
    },
    navy: {
      backgroundColor: '#e6f0f3',
      color: 'var(--color-navy)',
      border: '1px solid #b3d4dd'
    },
    gray: {
      backgroundColor: '#f0f4f3',
      color: 'var(--color-navy)',
      border: '1px solid var(--color-border)'
    }
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontSize: size === 'sm' ? '0.75rem' : '0.8125rem',
        fontWeight: 600,
        padding: size === 'sm' ? '0.2rem 0.6rem' : '0.35rem 0.85rem',
        borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap',
        ...styles[variant]
      }}
    >
      {children}
    </span>
  );
};
