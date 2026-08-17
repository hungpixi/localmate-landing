import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
  pill?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  href,
  pill = false,
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
        return {
          padding: '0.45rem 0.9rem',
          fontSize: '0.825rem',
          minHeight: '36px'
        };
      case 'lg':
        return {
          padding: '0.85rem 1.6rem',
          fontSize: 'clamp(0.925rem, 1vw, 1.025rem)',
          minHeight: '48px'
        };
      case 'md':
      default:
        return {
          padding: '0.65rem 1.25rem',
          fontSize: '0.875rem',
          minHeight: '42px'
        };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    maxWidth: '100%',
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    lineHeight: 1.2,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    flexShrink: 0,
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
