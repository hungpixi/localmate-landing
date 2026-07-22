import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'surface' | 'bg' | 'navy' | 'highlight';
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  hoverable = false,
  className = '',
  style = {}
}) => {
  const getStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'navy':
        return {
          backgroundColor: 'var(--color-navy)',
          color: '#ffffff',
          border: '1px solid var(--color-navy-deep)',
          boxShadow: 'var(--shadow-md)'
        };
      case 'highlight':
        return {
          backgroundColor: '#ffffff',
          color: 'var(--color-text)',
          border: '2px solid var(--color-teal)',
          boxShadow: 'var(--shadow-md)'
        };
      case 'bg':
        return {
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)'
        };
      case 'surface':
      default:
        return {
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)'
        };
    }
  };

  return (
    <div
      style={{
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        transition: hoverable ? 'transform var(--transition-base), box-shadow var(--transition-base)' : 'none',
        ...getStyles(),
        ...style
      }}
      className={`card-component ${hoverable ? 'hover-lift' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
