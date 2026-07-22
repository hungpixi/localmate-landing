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
          backgroundColor: 'var(--color-teal-soft)',
          color: 'var(--color-teal-dark)',
          border: '1px solid var(--color-teal)',
          fontWeight: 600
        };
      case 'white':
        return {
          backgroundColor: '#ffffff',
          color: 'var(--color-navy)',
          border: '1px solid var(--color-border)',
          fontWeight: 600,
          boxShadow: 'var(--shadow-sm)'
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-navy)',
          border: 'none',
          fontWeight: 600
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '0.5rem 1rem', fontSize: '0.875rem' };
      case 'lg':
        return { padding: '0.95rem 2rem', fontSize: '1.05rem' };
      case 'md':
      default:
        return { padding: '0.75rem 1.5rem', fontSize: '0.95rem' };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    lineHeight: 1.2,
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
