import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  MapPin,
  Globe,
  FileText,
  Phone,
  Layout,
  TrendingUp,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { useRouter, Link } from './Router';
import { CONTACT_INFO } from '../../data/landingContent';

interface HeaderProps {
  onOpenDemoForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemoForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'knowledge' | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileKnowledgeOpen, setMobileKnowledgeOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentPath, navigate } = useRouter();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
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
    setActiveDropdown(null);
    if (onOpenDemoForm) {
      onOpenDemoForm();
    } else {
      navigate('/lien-he');
    }
  };

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`main-site-header ${scrolled ? 'header-scrolled' : ''}`}
        ref={dropdownRef}
      >
        <Container size="lg">
          <div className="header-inner">
            {/* Logo */}
            <Link
              to="/"
              className="header-logo-wrap"
              onClick={closeMenus}
              title="LocalMate - Website, Google Maps & Quảng cáo Doanh nghiệp nhỏ"
            >
              <img
                src="/logo.png"
                alt="LocalMate"
                className="header-logo-img"
              />
            </Link>

            {/* Desktop Navigation Links — Mona-style with Icons & Mega Menu */}
            <nav className="header-nav-desktop" aria-label="Điều hướng chính">
              {/* 1. Trang chủ */}
              <Link
                to="/"
                onClick={closeMenus}
                className={`nav-item-link ${currentPath === '/' ? 'active' : ''}`}
              >
                <span>Trang chủ</span>
              </Link>

              {/* 2. Dịch vụ (Mona Mega Menu 4-Column Dropdown) */}
              <div
                className="nav-dropdown-parent"
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className={`nav-item-link nav-item-btn ${currentPath.startsWith('/dich-vu') ? 'active' : ''}`}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Dịch vụ</span>
                  <ChevronDown
                    size={14}
                    className={`dropdown-caret ${activeDropdown === 'services' ? 'open' : ''}`}
                  />
                </button>

                {/* Mona-style Full-Width Mega Menu Panel */}
                {activeDropdown === 'services' && (
                  <div
                    className="mega-menu-overlay"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="mega-menu-container">
                      {/* Left 3 Columns: Categorized Services */}
                      <div className="mega-menu-main">
                        {/* Col 1: Website & Landing Page */}
                        <div className="mega-col">
                          <div className="mega-col-header">
                            <Globe size={15} color="var(--color-primary)" />
                            <span>Website &amp; Bán Hàng</span>
                          </div>
                          <div className="mega-items-list">
                            <Link
                              to="/landing-490k"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-green">
                                <Layout size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Website 1 Trang</span>
                                  <span className="mega-tag tag-hot">490k</span>
                                </div>
                                <p className="mega-card-desc">Gọn gàng, rõ giá, có nút gọi/Zalo ngay.</p>
                              </div>
                            </Link>

                            <Link
                              to="/dich-vu/website-landing-page"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-blue">
                                <Globe size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Web Doanh Nghiệp</span>
                                  <span className="mega-tag tag-standard">3–5 trang</span>
                                </div>
                                <p className="mega-card-desc">Đầy đủ giới thiệu, dịch vụ và dự án.</p>
                              </div>
                            </Link>

                            <Link
                              to="/dich-vu/website-landing-page"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-purple">
                                <Sparkles size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Chỉnh Sửa &amp; Nâng Cấp Web</span>
                                </div>
                                <p className="mega-card-desc">Sửa lỗi, thêm banner, cập nhật giá nhanh.</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Col 2: Google Presence & Maps */}
                        <div className="mega-col">
                          <div className="mega-col-header">
                            <MapPin size={15} color="var(--color-primary)" />
                            <span>Google Maps &amp; Tìm Kiếm</span>
                          </div>
                          <div className="mega-items-list">
                            <Link
                              to="/dich-vu/google-maps"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-orange">
                                <MapPin size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Đưa Tiệm Lên Maps</span>
                                  <span className="mega-tag tag-save">Từ 299k</span>
                                </div>
                                <p className="mega-card-desc">Khách tìm quanh khu vực thấy tiệm ngay.</p>
                              </div>
                            </Link>

                            <Link
                              to="/dich-vu/google-maps"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-green">
                                <TrendingUp size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Tối Ưu &amp; SEO Local Maps</span>
                                </div>
                                <p className="mega-card-desc">Tăng thứ hạng hiển thị top tìm kiếm gần.</p>
                              </div>
                            </Link>

                            <Link
                              to="/dich-vu/google-maps"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-blue">
                                <Sparkles size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Mã QR Đánh Giá 5 Sao</span>
                                </div>
                                <p className="mega-card-desc">In để bàn giúp khách quét đánh giá dễ dàng.</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Col 3: Quảng Cáo & Bài Viết */}
                        <div className="mega-col">
                          <div className="mega-col-header">
                            <Sparkles size={15} color="var(--color-primary)" />
                            <span>Quảng Cáo &amp; Bài Viết</span>
                          </div>
                          <div className="mega-items-list">
                            <Link
                              to="/dich-vu/google-ads"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-orange">
                                <Sparkles size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Quảng Cáo Google Ads</span>
                                  <span className="mega-tag tag-hot">Từ 390k</span>
                                </div>
                                <p className="mega-card-desc">Nhắm đúng người đang cần mua, gọi ngay.</p>
                              </div>
                            </Link>

                            <Link
                              to="/dich-vu/content-marketing"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-pink">
                                <FileText size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Chăm Sóc Facebook</span>
                                  <span className="mega-tag tag-save">990k/th</span>
                                </div>
                                <p className="mega-card-desc">15 bài viết + thiết kế ảnh đẹp mắt.</p>
                              </div>
                            </Link>

                            <Link
                              to="/dich-vu/content-marketing"
                              onClick={closeMenus}
                              className="mega-card"
                            >
                              <div className="mega-card-icon icon-purple">
                                <Briefcase size={16} />
                              </div>
                              <div className="mega-card-content">
                                <div className="mega-card-title">
                                  <span>Thiết Kế Banner &amp; Ảnh Lẻ</span>
                                </div>
                                <p className="mega-card-desc">Ảnh menu, banner khuyến mãi từ 99k/ảnh.</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Right Promo Rail: Clean & Perfectly Contained Inside Card */}
                      <div className="mega-promo-rail">
                        <div className="mega-promo-box">
                          <span className="promo-badge">GÓI NỔI BẬT KHUYÊN DÙNG</span>
                          <h4 className="promo-title">Gói Khởi Tạo 490.000đ</h4>
                          <p className="promo-desc">
                            Website 1 trang chuẩn + Google Maps + Nút gọi Zalo.
                          </p>
                          <div className="promo-points">
                            <div className="promo-point-item">
                              <CheckCircle2 size={13} color="var(--color-primary-light)" />
                              <span>Báo giá rõ, không phụ phí</span>
                            </div>
                            <div className="promo-point-item">
                              <CheckCircle2 size={13} color="var(--color-primary-light)" />
                              <span>Bàn giao 100% tài khoản</span>
                            </div>
                          </div>
                          <Link
                            to="/landing-490k"
                            onClick={closeMenus}
                            className="promo-btn"
                          >
                            Xem chi tiết gói 490k →
                          </Link>
                        </div>

                        {/* Compact Hotline Card */}
                        <a
                          href={`tel:${CONTACT_INFO.phoneRaw}`}
                          className="mega-hotline-card"
                          title="Gọi hotline tư vấn"
                        >
                          <div className="hotline-icon-box">
                            <Phone size={15} color="#ffffff" />
                          </div>
                          <div className="hotline-meta">
                            <span className="hotline-label">Tư vấn trực tiếp 24/7</span>
                            <span className="hotline-num">0834.422.439</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Bảng Giá */}
              <Link
                to="/bang-gia"
                onClick={closeMenus}
                className={`nav-item-link ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
              >
                <span>Bảng giá</span>
              </Link>

              {/* 4. Dự án đã làm */}
              <Link
                to="/du-an"
                onClick={closeMenus}
                className={`nav-item-link ${currentPath.startsWith('/du-an') ? 'active' : ''}`}
              >
                <span>Dự án</span>
              </Link>

              {/* 5. Kiến Thức Dropdown */}
              <div
                className="nav-dropdown-parent"
                onMouseEnter={() => setActiveDropdown('knowledge')}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'knowledge' ? null : 'knowledge')}
                  className={`nav-item-link nav-item-btn ${currentPath.startsWith('/kien-thuc') ? 'active' : ''}`}
                  aria-expanded={activeDropdown === 'knowledge'}
                >
                  <span>Kiến thức</span>
                  <ChevronDown
                    size={14}
                    className={`dropdown-caret ${activeDropdown === 'knowledge' ? 'open' : ''}`}
                  />
                </button>

                {activeDropdown === 'knowledge' && (
                  <div
                    className="dropdown-menu-simple"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to="/kien-thuc"
                      onClick={closeMenus}
                      className="simple-dropdown-item"
                    >
                      <Globe size={16} color="var(--color-primary)" />
                      <div>
                        <div className="item-main-text">Kinh Nghiệm Làm Website</div>
                        <div className="item-sub-text">Cấu trúc trang web chuyển đổi cao</div>
                      </div>
                    </Link>

                    <Link
                      to="/kien-thuc"
                      onClick={closeMenus}
                      className="simple-dropdown-item"
                    >
                      <MapPin size={16} color="var(--color-orange)" />
                      <div>
                        <div className="item-main-text">Tối Ưu Google Maps &amp; SEO</div>
                        <div className="item-sub-text">Cách tăng đánh giá 5 sao và khách gần</div>
                      </div>
                    </Link>

                    <Link
                      to="/kien-thuc"
                      onClick={closeMenus}
                      className="simple-dropdown-item"
                    >
                      <Sparkles size={16} color="#2563eb" />
                      <div>
                        <div className="item-main-text">Chạy Quảng Cáo Google Ads</div>
                        <div className="item-sub-text">Cách lọc từ khóa tránh lãng phí tiền</div>
                      </div>
                    </Link>

                    <Link
                      to="/kien-thuc"
                      onClick={closeMenus}
                      className="simple-dropdown-item"
                    >
                      <FileText size={16} color="#db2777" />
                      <div>
                        <div className="item-main-text">Viết Bài &amp; Nội Dung Kênh</div>
                        <div className="item-sub-text">Mẫu bài đăng Facebook thu hút khách</div>
                      </div>
                    </Link>

                    <div className="dropdown-divider-line">
                      <Link
                        to="/kien-thuc"
                        onClick={closeMenus}
                        className="dropdown-view-all"
                      >
                        <span>Xem tất cả bài hướng dẫn →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Giới Thiệu */}
              <Link
                to="/gioi-thieu"
                onClick={closeMenus}
                className={`nav-item-link ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
              >
                <span>Giới thiệu</span>
              </Link>

              {/* 7. Liên Hệ */}
              <Link
                to="/lien-he"
                onClick={closeMenus}
                className={`nav-item-link ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
              >
                <span>Liên hệ</span>
              </Link>
            </nav>

            {/* Desktop Action & Hotline */}
            <div className="header-actions-desktop">
              {/* Hotline Link */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="header-quick-hotline"
                title="Gọi điện tư vấn trực tiếp"
              >
                <Phone size={14} color="var(--color-orange-dark)" />
                <span>0834.422.439</span>
              </a>

              {/* Primary Action Button */}
              <Button
                variant="primary"
                size="md"
                onClick={handleActionClick}
                className="header-cta-btn"
              >
                <Sparkles size={15} />
                <span>Báo giá nhanh</span>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
              className="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer (Accordion Style) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer-body">
            <div className="mobile-nav-links">
              <Link
                to="/"
                onClick={closeMenus}
                className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}
              >
                Trang chủ
              </Link>

              {/* Mobile Dịch Vụ Accordion */}
              <div className="mobile-accordion">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="mobile-accordion-toggle"
                >
                  <span style={{ fontWeight: 800 }}>Dịch vụ chính</span>
                  <ChevronDown
                    size={16}
                    style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mobile-accordion-content">
                    <Link
                      to="/landing-490k"
                      onClick={closeMenus}
                      className="mobile-sub-link"
                    >
                      <Layout size={15} color="var(--color-primary)" />
                      <span>Website 1 Trang (490k)</span>
                    </Link>
                    <Link
                      to="/dich-vu/google-maps"
                      onClick={closeMenus}
                      className="mobile-sub-link"
                    >
                      <MapPin size={15} color="var(--color-orange-dark)" />
                      <span>Đưa Tiệm Lên Google Maps (Từ 299k)</span>
                    </Link>
                    <Link
                      to="/dich-vu/google-ads"
                      onClick={closeMenus}
                      className="mobile-sub-link"
                    >
                      <Sparkles size={15} color="#2563eb" />
                      <span>Quảng Cáo Google Ads (Từ 390k)</span>
                    </Link>
                    <Link
                      to="/dich-vu/content-marketing"
                      onClick={closeMenus}
                      className="mobile-sub-link"
                    >
                      <FileText size={15} color="#db2777" />
                      <span>Chăm Sóc Facebook (990k/tháng)</span>
                    </Link>
                    <Link
                      to="/dich-vu/website-landing-page"
                      onClick={closeMenus}
                      className="mobile-sub-link"
                    >
                      <Globe size={15} color="var(--color-primary-dark)" />
                      <span>Website Doanh Nghiệp 3–5 Trang</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/bang-gia"
                onClick={closeMenus}
                className={`mobile-nav-item ${currentPath.startsWith('/bang-gia') ? 'active' : ''}`}
              >
                Bảng giá niêm yết
              </Link>

              <Link
                to="/du-an"
                onClick={closeMenus}
                className={`mobile-nav-item ${currentPath.startsWith('/du-an') ? 'active' : ''}`}
              >
                Dự án đã làm
              </Link>

              {/* Mobile Kiến Thức Accordion */}
              <div className="mobile-accordion">
                <button
                  type="button"
                  onClick={() => setMobileKnowledgeOpen(!mobileKnowledgeOpen)}
                  className="mobile-accordion-toggle"
                >
                  <span style={{ fontWeight: 800 }}>Kiến thức &amp; Hướng dẫn</span>
                  <ChevronDown
                    size={16}
                    style={{ transform: mobileKnowledgeOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </button>

                {mobileKnowledgeOpen && (
                  <div className="mobile-accordion-content">
                    <Link to="/kien-thuc" onClick={closeMenus} className="mobile-sub-link">
                      → Hướng dẫn làm Website
                    </Link>
                    <Link to="/kien-thuc" onClick={closeMenus} className="mobile-sub-link">
                      → Tối ưu Google Maps Local
                    </Link>
                    <Link to="/kien-thuc" onClick={closeMenus} className="mobile-sub-link">
                      → Kinh nghiệm chạy Google Ads
                    </Link>
                    <Link to="/kien-thuc" onClick={closeMenus} className="mobile-sub-link">
                      → Mẫu bài viết Facebook
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/gioi-thieu"
                onClick={closeMenus}
                className={`mobile-nav-item ${currentPath.startsWith('/gioi-thieu') ? 'active' : ''}`}
              >
                Giới thiệu LocalMate
              </Link>

              <Link
                to="/lien-he"
                onClick={closeMenus}
                className={`mobile-nav-item ${currentPath.startsWith('/lien-he') ? 'active' : ''}`}
              >
                Liên hệ
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="mobile-drawer-footer">
              <Button
                variant="primary"
                size="lg"
                onClick={handleActionClick}
                fullWidth
                style={{ fontWeight: 700, minHeight: 46 }}
              >
                <Sparkles size={16} /> Báo giá &amp; Tư vấn nhanh
              </Button>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="mobile-drawer-hotline"
              >
                <Phone size={16} color="var(--color-orange-dark)" />
                <span>Hotline: 0834.422.439</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Header Base */
        .main-site-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 70px;
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-border);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
        }

        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          height: 64px;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .header-logo-wrap {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          transition: height 0.2s;
        }

        .header-scrolled .header-logo-img {
          height: 38px;
        }

        /* Desktop Nav */
        .header-nav-desktop {
          display: flex;
          align-items: center;
          gap: 1.35rem;
        }

        .nav-item-link {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-navy);
          text-decoration: none;
          padding: 0.5rem 0.2rem;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          position: relative;
        }

        .nav-item-link:hover,
        .nav-item-link.active {
          color: var(--color-primary) !important;
        }

        .nav-item-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .dropdown-caret {
          transition: transform 0.2s ease;
          color: var(--color-text-muted);
        }

        .dropdown-caret.open {
          transform: rotate(180deg);
          color: var(--color-primary);
        }

        .nav-dropdown-parent {
          position: relative;
        }

        /* Mona-style Full-Width Mega Menu Dropdown */
        .mega-menu-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          width: 100vw;
          background-color: transparent;
          pointer-events: none;
          display: flex;
          justify-content: center;
          z-index: 120;
          padding: 0.5rem 1.5rem 1.5rem 1.5rem;
          box-sizing: border-box;
        }

        .header-scrolled .mega-menu-overlay {
          top: 64px;
        }

        @keyframes megaFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mega-menu-container {
          pointer-events: auto;
          width: 100%;
          max-width: 1240px;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.13);
          padding: 1.5rem 1.75rem;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 1.75rem;
          align-items: stretch;
          box-sizing: border-box;
          overflow: hidden;
          animation: megaFadeIn 0.18s ease-out;
        }

        .mega-menu-main {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .mega-col {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .mega-col-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 0.15rem;
        }

        .mega-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mega-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.55rem 0.7rem;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.15s ease;
        }

        .mega-card:hover {
          background-color: var(--color-primary-soft, #f4fbf7);
          border-color: var(--color-primary-border, #dcefe4);
          transform: translateY(-1px);
        }

        .mega-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .icon-green { background-color: var(--color-primary-soft); color: var(--color-primary); }
        .icon-orange { background-color: #fff4eb; color: var(--color-orange); }
        .icon-blue { background-color: #eff6ff; color: #2563eb; }
        .icon-purple { background-color: #f5f3ff; color: #7c3aed; }
        .icon-pink { background-color: #fdf2f8; color: #db2777; }

        .mega-card-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .mega-card-title {
          font-size: 0.875rem;
          font-weight: 800;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
          line-height: 1.3;
        }

        .mega-card-desc {
          font-size: 0.725rem;
          color: var(--color-text-muted);
          line-height: 1.35;
          margin: 0;
        }

        .mega-tag {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          line-height: 1;
          white-space: nowrap;
        }

        .tag-hot { background-color: #fee2e2; color: #dc2626; }
        .tag-save { background-color: var(--color-primary-soft); color: var(--color-primary-dark); }
        .tag-standard { background-color: #f3f4f6; color: #4b5563; }

        /* Right Promo Rail — Perfectly Fitted Inside Container */
        .mega-promo-rail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.65rem;
          border-left: 1px solid var(--color-border);
          padding-left: 1.5rem;
        }

        .mega-promo-box {
          background: linear-gradient(145deg, #072e3b, #0d7647);
          border-radius: 14px;
          padding: 1rem 1.15rem;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          flex: 1;
          justify-content: space-between;
        }

        .promo-badge {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--color-primary-light);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .promo-title {
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
        }

        .promo-desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
          margin: 0;
        }

        .promo-points {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.725rem;
          color: rgba(255, 255, 255, 0.95);
        }

        .promo-point-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .promo-btn {
          margin-top: 0.25rem;
          background-color: #ffffff;
          color: var(--color-navy);
          font-size: 0.775rem;
          font-weight: 800;
          text-align: center;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background-color var(--transition-fast);
        }

        .promo-btn:hover {
          background-color: var(--color-primary-light);
        }

        .mega-hotline-card {
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 0.6rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .mega-hotline-card:hover {
          border-color: var(--color-orange);
          background-color: #fff9f5;
        }

        .hotline-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--color-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hotline-meta {
          display: flex;
          flex-direction: column;
        }

        .hotline-label {
          font-size: 0.675rem;
          color: var(--color-text-muted);
          font-weight: 600;
          line-height: 1.2;
        }

        .hotline-num {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.2;
        }

        /* Simple Dropdown for Knowledge */
        .dropdown-menu-simple {
          position: absolute;
          top: 100%;
          left: -30px;
          width: 310px;
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 14px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          padding: 0.65rem;
          z-index: 120;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          animation: megaFadeIn 0.18s ease-out;
        }

        .simple-dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.55rem 0.65rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color var(--transition-fast);
        }

        .simple-dropdown-item:hover {
          background-color: var(--color-primary-soft);
        }

        .item-main-text {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.25;
        }

        .item-sub-text {
          font-size: 0.725rem;
          color: var(--color-text-muted);
          line-height: 1.35;
          margin-top: 2px;
        }

        .dropdown-divider-line {
          border-top: 1px solid var(--color-border);
          padding-top: 0.35rem;
          margin-top: 0.25rem;
        }

        .dropdown-view-all {
          display: block;
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--color-primary);
          text-decoration: none;
          padding: 0.35rem 0.65rem;
        }

        /* Desktop Actions */
        .header-actions-desktop {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .header-quick-hotline {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-navy);
          text-decoration: none;
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-full);
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          transition: all var(--transition-fast);
        }

        .header-quick-hotline:hover {
          border-color: var(--color-orange);
          color: var(--color-orange-dark);
        }

        .header-cta-btn {
          font-size: 0.875rem !important;
          padding: 0.55rem 1.1rem !important;
          font-weight: 800 !important;
        }

        /* Mobile Controls */
        .mobile-menu-toggle-btn {
          display: none;
          background: none;
          border: none;
          padding: 0.4rem;
          color: var(--color-navy);
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .header-nav-desktop,
          .header-actions-desktop {
            display: none !important;
          }
          .mobile-menu-toggle-btn {
            display: block !important;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ffffff;
          z-index: 99;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .mobile-drawer-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 70px);
          justify-content: space-between;
          box-sizing: border-box;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mobile-nav-item {
          padding: 0.75rem 0.85rem;
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-navy);
          text-decoration: none;
          border-radius: 8px;
        }

        .mobile-nav-item.active {
          background-color: var(--color-primary-soft);
          color: var(--color-primary-dark);
        }

        .mobile-accordion {
          border-radius: 8px;
          background-color: #f8faf8;
          border: 1px solid var(--color-border);
          overflow: hidden;
          margin: 0.25rem 0;
        }

        .mobile-accordion-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0.85rem;
          background: none;
          border: none;
          font-size: 0.95rem;
          color: var(--color-navy);
          cursor: pointer;
        }

        .mobile-accordion-content {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 0.4rem 0.85rem 0.75rem;
          border-top: 1px solid var(--color-border);
          background-color: #ffffff;
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-navy);
          text-decoration: none;
          padding: 0.45rem 0;
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--color-border);
        }

        .mobile-drawer-hotline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.75rem;
          background-color: #fafbfa;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-navy);
          font-weight: 800;
          font-size: 0.875rem;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
