import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../data/landingContent';

interface MobileFloatingCTAProps {
  onOpenConsultForm: () => void;
}

export const MobileFloatingCTA: React.FC<MobileFloatingCTAProps> = ({ onOpenConsultForm }) => {
  return (
    <div className="mobile-floating-bar">
      {/* 1. Compact Call Button */}
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        className="floating-btn floating-btn-call"
        aria-label="Gọi điện thoại tư vấn"
      >
        <Phone size={15} color="var(--color-orange-dark)" className="floating-btn-icon" />
        <span>Gọi</span>
      </a>

      {/* 2. Compact Zalo Button */}
      <a
        href={CONTACT_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-zalo"
        aria-label="Nhắn tin Zalo"
      >
        <MessageSquare size={15} color="var(--color-primary)" className="floating-btn-icon" />
        <span>Zalo</span>
      </a>

      {/* 3. Prominent Primary CTA Button */}
      <button
        onClick={onOpenConsultForm}
        className="floating-btn floating-btn-primary"
        aria-label="Xem website demo 0đ"
      >
        <Sparkles size={15} className="floating-btn-icon" />
        <span>Web demo 0đ</span>
      </button>

      <style>{`
        .mobile-floating-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99;
          background-color: rgba(255, 255, 255, 0.98);
          border-top: 1px solid var(--color-border);
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
          padding: 0.55rem 0.75rem max(0.55rem, env(safe-area-inset-bottom)) 0.75rem;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .mobile-floating-bar {
            display: flex !important;
          }
          body {
            padding-bottom: 64px;
          }
        }

        .floating-btn {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          border-radius: var(--radius-md);
          box-sizing: border-box;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }

        .floating-btn-icon {
          flex-shrink: 0;
        }

        .floating-btn-call {
          flex: 0 0 auto;
          min-width: 68px;
          padding: 0 0.65rem;
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          color: var(--color-navy);
        }

        .floating-btn-zalo {
          flex: 0 0 auto;
          min-width: 72px;
          padding: 0 0.65rem;
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          color: var(--color-primary-dark);
        }

        .floating-btn-primary {
          flex: 1 1 auto;
          padding: 0 0.85rem;
          background-color: var(--color-primary);
          border: none;
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.25);
        }

        .floating-btn-primary:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};
