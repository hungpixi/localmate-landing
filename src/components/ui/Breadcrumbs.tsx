import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../layout/Router';
import { BreadcrumbItem } from '../seo/SEOHead';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.4rem',
        fontSize: '0.825rem',
        color: 'var(--color-text-muted)',
        marginBottom: '1.5rem',
        lineHeight: 1.4
      }}
    >
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'var(--color-text-muted)',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        <Home size={14} />
        <span>Trang chủ</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={item.url + idx}>
            <ChevronRight size={13} style={{ color: 'var(--color-border)', flexShrink: 0 }} />
            {isLast ? (
              <span
                aria-current="page"
                style={{
                  color: 'var(--color-navy)',
                  fontWeight: 700,
                  maxWidth: '300px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {item.name}
              </span>
            ) : (
              <Link
                to={item.url}
                style={{
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
