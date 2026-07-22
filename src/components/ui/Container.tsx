import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  const maxWidths = {
    sm: '800px',
    md: '1000px',
    lg: '1200px',
    full: '100%'
  };

  return (
    <div
      style={{
        maxWidth: maxWidths[size],
        width: '100%',
        margin: '0 auto',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem'
      }}
      className={`container-box ${className}`}
    >
      {children}
    </div>
  );
};
