import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../data/landingContent';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useRouter, Link } from './Router';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleActionClick = () => {
    setMobileMenuOpen(false);
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '84px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
          transition: 'all var(--transition-base)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container size="lg">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', height: '54px' }}
              className="logo-container"
              title="LocalMate - Đơn vị Website, SEO, Marketing & Phần mềm cho doanh nghiệp nhỏ"
            >
              <img
                src="/logo.png"
                alt="LocalMate - Website, SEO, Marketing & Phần mềm cho doanh nghiệp nhỏ"
                style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.6rem'
              }}
              className="desktop-nav"
            >
              {NAV_LINKS.map((link) => {
                const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--color-teal-dark)' : 'var(--color-text)',
                      transition: 'color var(--transition-fast)'
                    }}
                    className={`nav-link-hover ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Mobile Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="header-actions">
              <div className="desktop-nav">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleActionClick}
                >
                  Nhận tư vấn 0đ
                </Button>
              </div>

              {/* Hamburger Toggle */}
              <button
                type="button"
                aria-label="Menu mở rộng"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  background: mobileMenuOpen ? 'var(--color-teal-soft)' : 'transparent',
                  border: '1px solid',
                  borderColor: mobileMenuOpen ? 'var(--color-teal)' : 'var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  color: mobileMenuOpen ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                  transition: 'all var(--transition-fast)'
                }}
                className="mobile-menu-btn"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          id="mobile-menu-drawer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            overflow: 'hidden'
          }}
        >
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(5, 47, 61, 0.5)',
              zIndex: 99
            }}
          />

          {/* Drawer Panel */}
          <aside
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              height: '100dvh',
              width: '85%',
              maxWidth: '340px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 100,
              boxShadow: 'var(--shadow-lg)',
              borderLeft: '1px solid var(--color-border)'
            }}
            className="drawer-panel"
          >
            {/* Header */}
            <header
              style={{
                flexShrink: 0,
                borderBottom: '1px solid var(--color-border)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <img src="/logo.png" alt="LocalMate" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={24} />
              </button>
            </header>

            {/* Body Navigation */}
            <main
              style={{
                minHeight: 0,
                flex: 1,
                overflowY: 'auto',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-teal-dark)', marginBottom: '0.5rem' }}>
                Danh mục dịch vụ &amp; điều hướng
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {NAV_LINKS.map((link) => {
                  const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontSize: '1rem',
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                        backgroundColor: isActive ? 'var(--color-teal-soft)' : 'transparent',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} style={{ opacity: isActive ? 1 : 0.4 }} />
                    </Link>
                  );
                })}
              </nav>
            </main>

            {/* Footer Action */}
            <footer
              style={{
                flexShrink: 0,
                borderTop: '1px solid var(--color-border)',
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--color-bg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={handleActionClick}
              >
                Nhận tư vấn 0đ ngay
              </Button>
              <p style={{ textAlign: 'center', fontSize: '0.725rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Demo trước 0đ • Bàn giao mới thanh toán
              </p>
            </footer>
          </aside>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-panel {
          animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .logo-container {
          transition: transform var(--transition-fast);
        }

        .logo-container:hover {
          transform: translateY(-1px);
        }

        .nav-link-hover {
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--color-teal);
          transition: width var(--transition-fast);
          border-radius: 2px;
        }

        .nav-link-hover:hover::after,
        .nav-link-hover.active::after {
          width: 100%;
        }

        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};
