import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Menu, X, ArrowRight, ChevronDown, Sparkles, MapPin, Globe, FileText, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { useRouter, Link } from './Router';
import { CONTACT_INFO } from '../../data/landingContent';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentPath, navigate } = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    setServicesDropdownOpen(false);
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bảng giá', href: '/bang-gia' },
    { label: 'Dự án', href: '/du-an' },
    { label: 'Kiến thức', href: '/kien-thuc' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Liên hệ', href: '/lien-he' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'clamp(64px, 8vw, 76px)',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
          transition: 'all 0.2s ease',
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
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              className="logo-container"
              title="LocalMate - Website, SEO, Marketing cho Doanh nghiệp nhỏ"
            >
              <img
                src="/logo.png"
                alt="LocalMate - Website, SEO, Marketing cho Doanh nghiệp nhỏ"
                style={{ height: 'clamp(38px, 5vw, 46px)', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}
              className="desktop-nav"
            >
              {/* Trang chu */}
              <Link
                to="/"
                style={{
                  fontSize: '0.925rem',
                  fontWeight: currentPath === '/' ? 700 : 600,
                  color: currentPath === '/' ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                  textDecoration: 'none'
                }}
                className={`nav-link-hover ${currentPath === '/' ? 'active' : ''}`}
              >
                Trang chủ
              </Link>

              {/* Dịch vụ with Dropdown */}
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.925rem',
                    fontWeight: currentPath.startsWith('/dich-vu') ? 700 : 600,
                    color: currentPath.startsWith('/dich-vu') ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                    cursor: 'pointer',
                    padding: '0.5rem 0'
                  }}
                  className={`nav-link-hover ${currentPath.startsWith('/dich-vu') ? 'active' : ''}`}
                >
                  <span>Dịch vụ</span>
                  <ChevronDown size={15} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>

                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-20px',
                      width: '320px',
                      backgroundColor: '#ffffff',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                      padding: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      zIndex: 110
                    }}
                  >
                    <Link
                      to="/dich-vu/google-ads"
                      onClick={() => setServicesDropdownOpen(false)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: currentPath === '/dich-vu/google-ads' ? 'var(--color-teal-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff4eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Sparkles size={18} color="var(--color-orange-dark)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)' }}>Google Ads Chuyển Đổi</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Từ 390k • Lọc sạch click rác</div>
                      </div>
                    </Link>

                    <Link
                      to="/dich-vu/google-maps"
                      onClick={() => setServicesDropdownOpen(false)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: currentPath === '/dich-vu/google-maps' ? 'var(--color-teal-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={18} color="var(--color-teal-dark)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)' }}>SEO Google Maps</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Từ 299k • Top 3 địa phương</div>
                      </div>
                    </Link>

                    <Link
                      to="/dich-vu/website-landing-page"
                      onClick={() => setServicesDropdownOpen(false)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: currentPath === '/dich-vu/website-landing-page' ? 'var(--color-teal-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Globe size={18} color="#4f46e5" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)' }}>Website &amp; Landing Page</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Demo 0đ • Gói 490k / 2.9M trọn gói</div>
                      </div>
                    </Link>

                    <Link
                      to="/dich-vu/content-marketing"
                      onClick={() => setServicesDropdownOpen(false)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: currentPath === '/dich-vu/content-marketing' ? 'var(--color-teal-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <FileText size={18} color="var(--color-teal-dark)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy)' }}>Quản Trị Nội Dung</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>990k/tháng • 15 bài viết đều đặn</div>
                      </div>
                    </Link>

                    <div style={{ borderTop: '1px solid var(--color-border)', margin: '0.35rem 0' }} />

                    <Link
                      to="/dich-vu"
                      onClick={() => setServicesDropdownOpen(false)}
                      style={{
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        color: 'var(--color-teal-dark)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>Xem toàn bộ 40 dịch vụ</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              {navLinks.slice(1).map((link) => {
                const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                      textDecoration: 'none',
                      transition: 'color 0.15s'
                    }}
                    className={`nav-link-hover ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Mobile Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }} className="header-actions">
              <div className="desktop-nav">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleActionClick}
                >
                  Nhận web demo 0đ
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
                  transition: 'all 0.15s'
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
            zIndex: 150,
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
              zIndex: 140
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
              zIndex: 150,
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
              borderLeft: '1px solid var(--color-border)'
            }}
            className="drawer-panel"
          >
            {/* Header */}
            <header
              style={{
                flexShrink: 0,
                borderBottom: '1px solid var(--color-border)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <img src="/logo.png" alt="LocalMate" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={22} />
              </button>
            </header>

            {/* Body Navigation */}
            <main
              style={{
                minHeight: 0,
                flex: 1,
                overflowY: 'auto',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}
            >
              <p style={{ fontSize: '0.725rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-teal-dark)', marginBottom: '0.25rem' }}>
                Dịch vụ nổi bật
              </p>
              
              <Link
                to="/dich-vu/google-ads"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'var(--color-navy)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Google Ads</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-orange-dark)', fontWeight: 700 }}>Từ 390k</span>
              </Link>

              <Link
                to="/dich-vu/google-maps"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'var(--color-navy)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>SEO Google Maps</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-teal-dark)', fontWeight: 700 }}>Từ 299k</span>
              </Link>

              <Link
                to="/dich-vu/website-landing-page"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'var(--color-navy)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Website &amp; Landing Page</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-teal-dark)', fontWeight: 700 }}>Demo 0đ</span>
              </Link>

              <Link
                to="/dich-vu/content-marketing"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  color: 'var(--color-navy)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}
              >
                <span>Quản Trị Nội Dung</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-teal-dark)', fontWeight: 700 }}>990k/th</span>
              </Link>

              <p style={{ fontSize: '0.725rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-teal-dark)', marginBottom: '0.25rem' }}>
                Khám phá &amp; thông tin
              </p>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                        backgroundColor: isActive ? 'var(--color-teal-soft)' : 'transparent',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textDecoration: 'none'
                      }}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={15} style={{ opacity: isActive ? 1 : 0.4 }} />
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
                padding: '1.25rem',
                backgroundColor: '#f8fbfa',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}
            >
              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={handleActionClick}
              >
                Nhận web demo 0đ
              </Button>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', fontSize: '0.8rem', fontWeight: 600 }}>
                <a href={CONTACT_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-teal-dark)', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                  <MessageSquare size={14} /> Chat Zalo
                </a>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} style={{ color: 'var(--color-orange-dark)', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                  <Phone size={14} /> Hotline
                </a>
              </div>
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
          animation: slideInRight 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .dropdown-item-hover:hover {
          background-color: var(--color-teal-soft) !important;
        }

        .nav-link-hover {
          position: relative;
        }

        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--color-teal);
          transition: width 0.15s ease;
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
