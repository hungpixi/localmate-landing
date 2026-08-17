import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'wide' | 'full';
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  style = {}
}) => {
  const maxWidths: Record<string, string> = {
    sm: '800px',
    md: '1020px',
    lg: 'var(--container-max, 1240px)',
    wide: 'var(--container-wide, 1360px)',
    full: '100%'
  };

  return (
    <div
      style={{
        maxWidth: maxWidths[size] || maxWidths.lg,
        width: '100%',
        margin: '0 auto',
        paddingLeft: 'var(--space-container-px, 1.25rem)',
        paddingRight: 'var(--space-container-px, 1.25rem)',
        boxSizing: 'border-box',
        ...style
      }}
      className={`container-box ${className}`}
    >
      {children}
    </div>
  );
};
