import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  href,
  className = '',
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--btn-primary-bg)',
          color: 'var(--btn-primary-text)',
          border: 'none',
          boxShadow: 'var(--btn-primary-shadow)',
          fontWeight: 700
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-primary-soft)',
          color: 'var(--color-primary-dark)',
          border: '1px solid var(--color-primary-border)',
          fontWeight: 700
        };
      case 'white':
        return {
          backgroundColor: '#ffffff',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          fontWeight: 600,
          boxShadow: 'var(--shadow-sm)'
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text)',
          border: 'none',
          fontWeight: 600
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: 'clamp(0.35rem, 1.5vw, 0.45rem) clamp(0.75rem, 2vw, 1rem)', fontSize: '0.825rem' };
      case 'lg':
        return { padding: 'clamp(0.75rem, 2vw, 0.95rem) clamp(1.25rem, 3vw, 1.85rem)', fontSize: 'clamp(0.925rem, 1.5vw, 1.05rem)' };
      case 'md':
      default:
        return { padding: 'clamp(0.6rem, 1.8vw, 0.75rem) clamp(1rem, 2.5vw, 1.4rem)', fontSize: '0.9rem' };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.45rem',
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    maxWidth: '100%',
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    lineHeight: 1.25,
    textAlign: 'center',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style
  };

  if (href) {
    return (
      <a href={href} style={combinedStyles} className={`btn-custom btn-${variant} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button style={combinedStyles} className={`btn-custom btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

