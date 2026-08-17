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
    { label: 'Dự án đã làm', href: '/du-an' },
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
              title="LocalMate - Website, Google Maps & Quảng cáo cho Doanh nghiệp nhỏ"
            >
              <img
                src="/logo.png"
                alt="LocalMate - Website, Google Maps, Quảng cáo & Marketing cho doanh nghiệp nhỏ"
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
                  color: currentPath === '/' ? 'var(--color-primary-dark)' : 'var(--color-text)',
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
                    color: currentPath.startsWith('/dich-vu') ? 'var(--color-primary-dark)' : 'var(--color-text)',
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
                      width: '330px',
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
                        backgroundColor: currentPath === '/dich-vu/google-ads' ? 'var(--color-primary-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff4eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Sparkles size={18} color="var(--color-orange-dark)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>Quảng Cáo Google Ads</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Từ 390k • Đến đúng người đang tìm</div>
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
                        backgroundColor: currentPath === '/dich-vu/google-maps' ? 'var(--color-primary-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={18} color="var(--color-primary-dark)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>Đưa Lên Google Maps</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Từ 299k • Khách tìm đường đến quán</div>
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
                        backgroundColor: currentPath === '/dich-vu/website-landing-page' ? 'var(--color-primary-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Globe size={18} color="#2563eb" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>Website & Trang Bán Hàng</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Từ 490k • Rõ giá, có nút gọi ngay</div>
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
                        backgroundColor: currentPath === '/dich-vu/content-marketing' ? 'var(--color-primary-soft)' : 'transparent',
                        transition: 'background-color 0.15s'
                      }}
                      className="dropdown-item-hover"
                    >
                      <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <FileText size={18} color="#db2777" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>Viết Bài & Chăm Sóc Facebook</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Từ 990k/tháng • Bài viết + Hình ảnh</div>
                      </div>
                    </Link>

                    <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
                      <Link
                        to="/dich-vu"
                        onClick={() => setServicesDropdownOpen(false)}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: 'var(--color-primary)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.4rem 0.85rem'
                        }}
                      >
                        <span>Xem toàn bộ dịch vụ & bảng giá</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Bảng giá */}
              <Link
                to="/bang-gia"
                style={{
                  fontSize: '0.925rem',
                  fontWeight: currentPath.startsWith('/bang-gia') ? 700 : 600,
                  color: currentPath.startsWith('/bang-gia') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                  textDecoration: 'none'
                }}
                className={`nav-link-hover ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
              >
                Bảng giá
              </Link>

              {/* Dự án đã làm */}
              <Link
                to="/du-an"
                style={{
                  fontSize: '0.925rem',
                  fontWeight: currentPath.startsWith('/du-an') ? 700 : 600,
                  color: currentPath.startsWith('/du-an') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                  textDecoration: 'none'
                }}
                className={`nav-link-hover ${currentPath.startsWith('/du-an') ? 'active' : ''}`}
              >
                Dự án đã làm
              </Link>

              {/* Kiến thức */}
              <Link
                to="/kien-thuc"
                style={{
                  fontSize: '0.925rem',
                  fontWeight: currentPath.startsWith('/kien-thuc') ? 700 : 600,
                  color: currentPath.startsWith('/kien-thuc') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                  textDecoration: 'none'
                }}
                className={`nav-link-hover ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
              >
                Kiến thức
              </Link>

              {/* Giới thiệu */}
              <Link
                to="/gioi-thieu"
                style={{
                  fontSize: '0.925rem',
                  fontWeight: currentPath.startsWith('/gioi-thieu') ? 700 : 600,
                  color: currentPath.startsWith('/gioi-thieu') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                  textDecoration: 'none'
                }}
                className={`nav-link-hover ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
              >
                Giới thiệu
              </Link>

              {/* Liên hệ */}
              <Link
                to="/lien-he"
                style={{
                  fontSize: '0.925rem',
                  fontWeight: currentPath.startsWith('/lien-he') ? 700 : 600,
                  color: currentPath.startsWith('/lien-he') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                  textDecoration: 'none'
                }}
                className={`nav-link-hover ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
              >
                Liên hệ
              </Link>
            </nav>

            {/* Desktop Action Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
              <Button
                variant="primary"
                size="md"
                onClick={handleActionClick}
                style={{
                  boxShadow: 'var(--shadow-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.65rem 1.25rem'
                }}
              >
                <Sparkles size={16} />
                <span>Nhận website demo 0đ</span>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--color-text)'
              }}
              className="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'clamp(64px, 8vw, 76px)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 99,
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: currentPath === '/' ? 800 : 600,
                color: currentPath === '/' ? 'var(--color-primary-dark)' : 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPath === '/' ? 'var(--color-primary-soft)' : 'transparent'
              }}
            >
              Trang chủ
            </Link>

            <div style={{ padding: '0.5rem 0' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-text-muted)', padding: '0 1rem 0.5rem' }}>
                Dịch vụ chính
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '0.5rem' }}>
                <Link
                  to="/dich-vu/google-ads"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  🎯 Quảng Cáo Google Ads (Từ 390k)
                </Link>
                <Link
                  to="/dich-vu/google-maps"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  📍 Đưa Lên Google Maps (Từ 299k)
                </Link>
                <Link
                  to="/dich-vu/website-landing-page"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  💻 Website & Trang Bán Hàng (Từ 490k)
                </Link>
                <Link
                  to="/dich-vu/content-marketing"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  ✍️ Viết Bài Facebook (Từ 990k/tháng)
                </Link>
              </div>
            </div>

            <Link
              to="/bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: currentPath.startsWith('/bang-gia') ? 800 : 600,
                color: currentPath.startsWith('/bang-gia') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPath.startsWith('/bang-gia') ? 'var(--color-primary-soft)' : 'transparent'
              }}
            >
              Bảng giá
            </Link>

            <Link
              to="/du-an"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: currentPath.startsWith('/du-an') ? 800 : 600,
                color: currentPath.startsWith('/du-an') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPath.startsWith('/du-an') ? 'var(--color-primary-soft)' : 'transparent'
              }}
            >
              Dự án đã làm
            </Link>

            <Link
              to="/kien-thuc"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: currentPath.startsWith('/kien-thuc') ? 800 : 600,
                color: currentPath.startsWith('/kien-thuc') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPath.startsWith('/kien-thuc') ? 'var(--color-primary-soft)' : 'transparent'
              }}
            >
              Kiến thức Marketing
            </Link>

            <Link
              to="/gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: currentPath.startsWith('/gioi-thieu') ? 800 : 600,
                color: currentPath.startsWith('/gioi-thieu') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPath.startsWith('/gioi-thieu') ? 'var(--color-primary-soft)' : 'transparent'
              }}
            >
              Giới thiệu
            </Link>

            <Link
              to="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: currentPath.startsWith('/lien-he') ? 800 : 600,
                color: currentPath.startsWith('/lien-he') ? 'var(--color-primary-dark)' : 'var(--color-text)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                backgroundColor: currentPath.startsWith('/lien-he') ? 'var(--color-primary-soft)' : 'transparent'
              }}
            >
              Liên hệ
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleActionClick}
              fullWidth
              style={{ fontWeight: 700 }}
            >
              <Sparkles size={16} /> Nhận website demo 0đ
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-text)',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <Phone size={16} color="var(--color-orange-dark)" /> Hotline: 0834.422.439
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        .nav-link-hover {
          transition: color 0.15s ease;
        }
        .nav-link-hover:hover {
          color: var(--color-primary) !important;
        }
        .dropdown-item-hover:hover {
          background-color: var(--color-primary-soft) !important;
        }
      `}</style>
    </>
  );
};
