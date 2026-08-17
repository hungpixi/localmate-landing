import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem, TECH_CATEGORIES, TechCategoryKey } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Search,
  Globe,
  Wrench,
  MapPin,
  TrendingUp,
  BarChart2,
  Cpu,
  Bot,
  Scale,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from '../layout/Router';

export const PricingMatrixSection: React.FC = () => {
  const { navigate } = useRouter();
  const [services, setServices] = useState<CatalogServiceItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setServices(getCatalogServices());
    const unsubscribe = subscribeCatalogChanges((updated) => {
      setServices(updated);
    });
    return unsubscribe;
  }, []);

  const activeServices = services.filter((s) => s.isActive);

  // Filter by category and search query
  const filteredServices = useMemo(() => {
    return activeServices.filter((srv) => {
      // Category match
      const matchCategory = activeCategory === 'all' || srv.categoryGroup === activeCategory;
      if (!matchCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      return (
        srv.name.toLowerCase().includes(query) ||
        srv.scope.toLowerCase().includes(query) ||
        srv.priceDisplay.toLowerCase().includes(query) ||
        srv.code.toLowerCase().includes(query)
      );
    });
  }, [activeServices, activeCategory, searchQuery]);

  // Sort: Gói in đậm viền / Khuyên dùng (isPopular) lên ĐẦU TIÊN
  const sortedServices = useMemo(() => {
    return [...filteredServices].sort((a, b) => {
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;
      return 0;
    });
  }, [filteredServices]);

  const getCategoryMeta = (key: TechCategoryKey) => {
    switch (key) {
      case 'website-landing':
        return { label: 'Website', icon: Globe, colorClass: 'cat-green' };
      case 'website-fix':
        return { label: 'Sửa lỗi 99k', icon: Wrench, colorClass: 'cat-orange' };
      case 'google-seo':
        return { label: 'Google Maps', icon: MapPin, colorClass: 'cat-blue' };
      case 'ads-conversion':
        return { label: 'Quảng cáo Ads', icon: TrendingUp, colorClass: 'cat-pink' };
      case 'analytics-tracking':
        return { label: 'Đo lường', icon: BarChart2, colorClass: 'cat-teal' };
      case 'crm-automation':
        return { label: 'Tự động hóa', icon: Cpu, colorClass: 'cat-purple' };
      case 'ai-software':
        return { label: 'Phần mềm & AI', icon: Bot, colorClass: 'cat-indigo' };
      case 'legal-compliance':
        return { label: 'Pháp lý BCT', icon: Scale, colorClass: 'cat-emerald' };
      case 'digital-care':
        return { label: 'Chăm sóc tháng', icon: Clock, colorClass: 'cat-amber' };
      default:
        return { label: 'Dịch vụ', icon: Sparkles, colorClass: 'cat-green' };
    }
  };

  const formatServiceUnit = (unit: string) => {
    if (!unit || unit === 'trọn gói' || unit === 'lần') return 'Trọn gói';
    if (unit === 'tháng' || unit === '/ tháng') return '/ tháng';
    if (unit === 'dự án') return 'Trọn gói';
    return unit.startsWith('/') ? unit : `/${unit}`;
  };

  return (
    <section
      style={{
        padding: 'clamp(3.5rem, 5vw, 5.5rem) 0',
        backgroundColor: '#fbfcfb',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="bang-gia"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} /> BẢNG GIÁ NIÊM YẾT MINH BẠCH
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bảng Giá Dịch Vụ Niêm Yết Công Khai
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem', maxWidth: '700px', margin: '0.4rem auto 0 auto' }}>
            Không chi phí ẩn. Báo giá rõ ràng từng việc từ <strong>99.000đ</strong> (sửa lỗi nhỏ), <strong>299.000đ</strong> (Google Maps), <strong>490.000đ</strong> (Website 1 trang) đến các gói trọn gói.
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="pricing-toolbar">
          {/* Quick Search Input */}
          <div className="pricing-search-box">
            <Search size={17} className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm nhanh dịch vụ (ví dụ: Google Maps, Sửa web, 99k, Zalo, Ads, BCT...)"
              className="pricing-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}
          </div>

          {/* Minimal Category Filter Tabs */}
          <div className="pricing-category-tabs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              <span>⭐ Tất cả ({activeServices.length})</span>
            </button>
            {TECH_CATEGORIES.map((cat) => {
              const count = activeServices.filter((s) => s.categoryGroup === cat.key).length;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span>{cat.title} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid (3 Columns on Desktop, Clean & Spacious) */}
        {sortedServices.length > 0 ? (
          <div className="pricing-cards-grid-v2">
            {sortedServices.map((srv) => {
              const catMeta = getCategoryMeta(srv.categoryGroup);
              const CatIcon = catMeta.icon;

              return (
                <div
                  key={srv.id}
                  className={`service-matrix-card ${srv.isPopular ? 'popular-matrix-card' : ''}`}
                >
                  {/* Card Top: Category badge & Icon */}
                  <div className="matrix-card-header">
                    <div className={`matrix-icon-box ${catMeta.colorClass}`}>
                      <CatIcon size={18} />
                    </div>
                    <div className="matrix-badge-group">
                      <span className={`matrix-cat-pill ${catMeta.colorClass}`}>
                        {catMeta.label}
                      </span>
                      {srv.isPopular && (
                        <span className="matrix-popular-badge">
                          ⭐ Khuyên dùng
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content: Title & Scope */}
                  <div className="matrix-card-body">
                    <h3 className="matrix-service-name">
                      {srv.name}
                    </h3>
                    <p className="matrix-service-scope">
                      {srv.scope}
                    </p>

                    {/* Timeline Commitment */}
                    <div className="matrix-timeline-row">
                      <CheckCircle2 size={14} color="var(--color-primary)" className="check-icon-svg" />
                      <span>Thời gian bàn giao: <strong>{srv.effort}</strong></span>
                    </div>
                  </div>

                  {/* Card Bottom: Price & CTA Action */}
                  <div className="matrix-card-footer">
                    <div className="matrix-price-wrap">
                      <span className="matrix-price-val">
                        {srv.priceDisplay}
                      </span>
                      <span className="matrix-price-unit">
                        {formatServiceUnit(srv.unit)}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate('/lien-he')}
                      className="matrix-action-btn"
                      title={`Tư vấn dịch vụ ${srv.name}`}
                    >
                      <span>Tư vấn ngay</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-services-found">
            <p>Không tìm thấy dịch vụ nào khớp với từ khóa <strong>"{searchQuery}"</strong>.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-reset-filter"
            >
              Xem tất cả dịch vụ
            </button>
          </div>
        )}

        {/* Guarantee Callout */}
        <div className="pricing-guarantee-banner">
          <ShieldCheck size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary-dark)', margin: '0 0 0.3rem 0' }}>
              Cam kết báo giá rõ ràng · Không phát sinh chi phí · Bàn giao 100% tài khoản
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
              Khách hàng xem thử website demo trước khi thanh toán. Toàn bộ mã nguồn, tài khoản Google Maps và quyền sở hữu thuộc về bạn.
            </p>
          </div>
        </div>
      </Container>

      <style>{`
        /* Toolbar */
        .pricing-toolbar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.75rem;
        }

        .pricing-search-box {
          position: relative;
          width: 100%;
          max-width: 580px;
        }

        .search-icon {
          position: absolute;
          left: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }

        .pricing-search-input {
          width: 100%;
          padding: 0.8rem 2.8rem 0.8rem 2.8rem;
          font-size: 0.925rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background-color: #ffffff;
          color: var(--color-navy);
          box-sizing: border-box;
          outline: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all var(--transition-fast);
        }

        .pricing-search-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px var(--color-primary-soft);
        }

        .search-clear-btn {
          position: absolute;
          right: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          font-size: 0.85rem;
          padding: 0.2rem;
        }

        .pricing-category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .category-tab-btn {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 700;
          background-color: #ffffff;
          color: var(--color-navy);
          border: 1px solid var(--color-border);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .category-tab-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        .category-tab-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 2px 8px rgba(13, 118, 71, 0.25);
        }

        /* 3-Column Modern Grid */
        .pricing-cards-grid-v2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .pricing-cards-grid-v2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .pricing-cards-grid-v2 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card Item */
        .service-matrix-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .service-matrix-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
          border-color: var(--color-primary-border, #dcefe4);
        }

        .service-matrix-card.popular-matrix-card {
          border: 2px solid var(--color-primary);
          background-color: #ffffff;
          box-shadow: 0 6px 20px rgba(13, 118, 71, 0.1);
        }

        /* Card Header */
        .matrix-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .matrix-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .matrix-badge-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .matrix-cat-pill {
          font-size: 0.725rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .matrix-popular-badge {
          font-size: 0.725rem;
          font-weight: 800;
          color: #b45309;
          background-color: #fef3c7;
          border: 1px solid #fde68a;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        /* Color classes */
        .cat-green { background-color: var(--color-primary-soft, #f4fbf7); color: var(--color-primary, #0d7647); }
        .cat-orange { background-color: #fff4eb; color: var(--color-orange, #e06d10); }
        .cat-blue { background-color: #eff6ff; color: #2563eb; }
        .cat-pink { background-color: #fdf2f8; color: #db2777; }
        .cat-teal { background-color: #f0fdfa; color: #0d9488; }
        .cat-purple { background-color: #f5f3ff; color: #7c3aed; }
        .cat-indigo { background-color: #eef2ff; color: #4f46e5; }
        .cat-emerald { background-color: #ecfdf5; color: #059669; }
        .cat-amber { background-color: #fffbeb; color: #d97706; }

        /* Card Body */
        .matrix-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }

        .matrix-service-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0;
        }

        .matrix-service-scope {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }

        .matrix-timeline-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--color-navy);
          margin-top: 0.4rem;
          padding-top: 0.6rem;
          border-top: 1px dashed var(--color-border);
        }

        .check-icon-svg {
          flex-shrink: 0;
        }

        /* Card Footer */
        .matrix-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 0.95rem;
          border-top: 1px solid var(--color-border);
        }

        .matrix-price-wrap {
          display: flex;
          flex-direction: column;
        }

        .matrix-price-val {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--color-primary-dark, #0a5c37);
          line-height: 1.1;
        }

        .matrix-price-unit {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 2px;
        }

        .matrix-action-btn {
          padding: 0.55rem 1rem;
          background-color: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: background-color var(--transition-fast);
          flex-shrink: 0;
        }

        .matrix-action-btn:hover {
          background-color: var(--color-primary-dark);
        }

        .pricing-guarantee-banner {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 18px;
          padding: 1.5rem 2rem;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .no-services-found {
          text-align: center;
          padding: 3rem 1rem;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px dashed var(--color-border);
          margin-bottom: 2rem;
        }

        .btn-reset-filter {
          margin-top: 0.75rem;
          padding: 0.5rem 1.25rem;
          background-color: var(--color-primary);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};
