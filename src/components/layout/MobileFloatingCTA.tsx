import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

interface MobileFloatingCTAProps {
  onOpenConsultForm: () => void;
}

export const MobileFloatingCTA: React.FC<MobileFloatingCTAProps> = ({ onOpenConsultForm }) => {
  return (
    <div
      className="mobile-floating-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--color-border)',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)',
        padding: '0.6rem 1rem max(0.6rem, env(safe-area-inset-bottom)) 1rem',
        display: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.6rem'
      }}
    >
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          padding: '0.65rem 0.5rem',
          backgroundColor: '#f8fbfa',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-text)',
          fontWeight: 700,
          fontSize: '0.825rem',
          textDecoration: 'none'
        }}
      >
        <Phone size={16} color="var(--color-orange-dark)" />
        <span>Gọi điện</span>
      </a>

      <a
        href={CONTACT_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          padding: '0.65rem 0.5rem',
          backgroundColor: 'var(--color-primary-soft)',
          border: '1px solid var(--color-primary-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-primary-dark)',
          fontWeight: 700,
          fontSize: '0.825rem',
          textDecoration: 'none'
        }}
      >
        <MessageSquare size={16} color="var(--color-primary)" />
        <span>Chat Zalo</span>
      </a>

      <button
        onClick={onOpenConsultForm}
        style={{
          flex: '1.4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          padding: '0.65rem 0.5rem',
          backgroundColor: 'var(--color-primary)',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.825rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(13, 118, 71, 0.3)'
        }}
      >
        <Sparkles size={15} />
        <span>Web demo 0đ</span>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-floating-bar {
            display: flex !important;
          }
          body {
            padding-bottom: 60px;
          }
        }
      `}</style>
    </div>
  );
};
