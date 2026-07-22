import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../data/landingContent';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle scroll effect & active section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Clear active section if in Hero section (top 240px)
      if (window.scrollY < 240) {
        setActiveSection('');
        return;
      }

      // Detect active section on scroll
      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      let found = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          found = sectionId;
          break;
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open (per KNOWLEDGE_BASE.md)
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  // Close drawer on ESC key press (per KNOWLEDGE_BASE.md)
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

  // Smooth scroll handler with offset for sticky header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      const headerHeight = 76;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleActionClick = () => {
    setMobileMenuOpen(false);
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      const formEl = document.querySelector('#register-form');
      if (formEl) {
        const headerHeight = 76;
        const targetPosition = formEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
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
            {/* Logo (ảnh đã bao gồm chữ LocalMate) */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', height: '58px' }}
              className="logo-container"
              title="LocalMate - Người đồng hành số"
            >
              <img
                src="/logo.png"
                alt="LocalMate - Người đồng hành số"
                style={{ height: '58px', width: 'auto', objectFit: 'contain' }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem'
              }}
              className="desktop-nav"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--color-teal-dark)' : 'var(--color-text)',
                      transition: 'color var(--transition-fast)'
                    }}
                    className={`nav-link-hover ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions & Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="header-actions">
              <div className="desktop-nav">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleActionClick}
                >
                  Nhận web demo
                </Button>
              </div>

              {/* Hamburger Button (Mobile) */}
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

      {/* Mobile Drawer Navigation (3-region Overlay per KNOWLEDGE_BASE.md) */}
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
          {/* 1. Backdrop (Z-index 99, moderate blur & backdrop color) */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(5, 47, 61, 0.45)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 99,
              transition: 'opacity var(--transition-base)'
            }}
          />

          {/* 2. Drawer Panel (Z-index 100, Flexbox 3 regions) */}
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
            {/* 2.1 Header: shrink-0 */}
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/logo.png" alt="LocalMate - Người đồng hành số" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
              </div>
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
                  justifyContent: 'center',
                  transition: 'all var(--transition-fast)'
                }}
                className="close-drawer-btn"
              >
                <X size={24} />
              </button>
            </header>

            {/* 2.2 Body: min-h-0 flex-1 overflow-y-auto */}
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
                Danh mục điều hướng
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
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
                    </a>
                  );
                })}
              </nav>
            </main>

            {/* 2.3 Footer: shrink-0 border-t */}
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
                Nhận web demo ngay
              </Button>
              <p style={{ textAlign: 'center', fontSize: '0.725rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Duyệt demo trước • Bàn giao mới thanh toán
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

        .close-drawer-btn:hover {
          background-color: rgba(8, 59, 76, 0.05) !important;
          color: var(--color-navy) !important;
        }

        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

