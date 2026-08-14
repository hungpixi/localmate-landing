import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  style = {}
}) => {
  const maxWidths = {
    sm: '800px',
    md: '1020px',
    lg: '1200px',
    full: '100%'
  };

  return (
    <div
      style={{
        maxWidth: maxWidths[size],
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

