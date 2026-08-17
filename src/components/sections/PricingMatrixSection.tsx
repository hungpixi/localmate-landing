import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem, TECH_CATEGORIES, TechCategoryKey } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const PricingMatrixSection: React.FC = () => {
  const { navigate } = useRouter();
  const [services, setServices] = useState<CatalogServiceItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    setServices(getCatalogServices());
    const unsubscribe = subscribeCatalogChanges((updated) => {
      setServices(updated);
    });
    return unsubscribe;
  }, []);

  const activeServices = services.filter((s) => s.isActive);

  const displayedServices = activeServices.filter((srv) => {
    if (activeCategory === 'all') return true;
    return srv.categoryGroup === activeCategory;
  });

  // Sort: Gói in đậm viền / Khuyên dùng (isPopular) lên ĐẦU TIÊN
  const sortedServices = [...displayedServices].sort((a, b) => {
    if (a.isPopular && !b.isPopular) return -1;
    if (!a.isPopular && b.isPopular) return 1;
    return 0;
  });

  const getCategoryShortLabel = (key: TechCategoryKey) => {
    switch (key) {
      case 'website-landing':
        return 'Website';
      case 'website-fix':
        return 'Sửa lỗi';
      case 'google-seo':
        return 'Google Maps';
      case 'ads-conversion':
        return 'Google Ads';
      case 'analytics-tracking':
        return 'Đo lường';
      case 'crm-automation':
        return 'Tự động hóa';
      case 'ai-software':
        return 'Phần mềm';
      case 'legal-compliance':
        return 'Pháp lý';
      case 'digital-care':
        return 'Chăm sóc';
      default:
        return 'Dịch vụ';
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
        padding: 'clamp(3.5rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="bang-gia"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">
            <Sparkles size={14} /> BẢNG GIÁ NIÊM YẾT MINH BẠCH
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Chi phí rõ ràng, không phát sinh thêm
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            LocalMate chia nhỏ từng việc từ 99k (sửa lỗi nhỏ), 490k (website 1 trang) đến các gói làm website trọn gói.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="pricing-category-tabs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            Tất cả ({activeServices.length})
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
                {cat.title.split('. ')[1] || cat.title} ({count})
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid (Gói khuyên dùng / viền đậm lên đầu) */}
        <div className="pricing-cards-grid">
          {sortedServices.map((srv) => (
            <div
              key={srv.id}
              className={`catalog-service-card interactive-card ${srv.isPopular ? 'popular-card' : ''}`}
            >
              <div className="card-top-content">
                {/* Clean 1-Line Category / Popular Badge */}
                <div className="badge-row">
                  <span className="category-pill">
                    {getCategoryShortLabel(srv.categoryGroup)}
                  </span>
                  {srv.isPopular && (
                    <span className="popular-pill">
                      Khuyên dùng
                    </span>
                  )}
                </div>

                {/* Service Name & Scope */}
                <h3 className="service-title">
                  {srv.name}
                </h3>
                <p className="service-scope">
                  {srv.scope}
                </p>

                {/* Timeline info */}
                <div className="timeline-info">
                  <Check size={14} color="var(--color-primary)" className="check-icon" />
                  <span>Bàn giao: {srv.effort}</span>
                </div>
              </div>

              {/* Price & Action Bottom Row */}
              <div className="card-bottom-row">
                <div className="price-col">
                  <span className="service-price">
                    {srv.priceDisplay}
                  </span>
                  <span className="service-unit">
                    {formatServiceUnit(srv.unit)}
                  </span>
                </div>

                <button
                  onClick={() => navigate('/lien-he')}
                  className="btn-select-package"
                >
                  <span>Chọn gói</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Callout */}
        <div className="pricing-guarantee-banner">
          <ShieldCheck size={28} color="var(--color-primary)" style={{ flexShrink: 0 }} />
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary-dark)', margin: '0 0 0.25rem 0' }}>
              Nghiệm thu hài lòng rồi mới thanh toán · Bạn làm chủ 100% tài khoản
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: 0 }}>
              Xem trước website demo 0đ. Bàn giao 100% quyền quản trị tên miền, website và Google Maps chính chủ cho bạn.
            </p>
          </div>
        </div>
      </Container>

      <style>{`
        .pricing-category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .category-tab-btn {
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 600;
          background-color: #ffffff;
          color: var(--color-navy);
          border: 1px solid var(--color-border);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .category-tab-btn.active {
          font-weight: 700;
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 580px) {
          .pricing-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pricing-cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .catalog-service-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
          min-width: 0;
          box-sizing: border-box;
          transition: all var(--transition-fast);
        }

        .catalog-service-card.popular-card {
          border: 2px solid var(--color-primary);
          box-shadow: var(--shadow-md);
          background-color: #fcfffd;
        }

        .card-top-content {
          display: flex;
          flex-direction: column;
        }

        .badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.65rem;
          gap: 0.4rem;
        }

        .category-pill {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .popular-pill {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--color-orange-dark);
          background-color: #fff4eb;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .service-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-navy);
          margin: 0 0 0.4rem 0;
          line-height: 1.35;
        }

        .service-scope {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0 0 0.75rem 0;
          flex: 1;
        }

        .timeline-info {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .check-icon {
          flex-shrink: 0;
        }

        .card-bottom-row {
          padding-top: 0.85rem;
          border-top: 1px dashed var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }

        .price-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .service-price {
          font-size: 1.15rem;
          font-weight: 900;
          color: var(--color-orange-dark);
          line-height: 1.1;
          white-space: nowrap;
        }

        .service-unit {
          font-size: 0.725rem;
          color: var(--color-text-muted);
          margin-top: 2px;
          font-weight: 600;
        }

        .btn-select-package {
          padding: 0.5rem 0.85rem;
          background-color: var(--color-primary);
          color: #ffffff;
          border-radius: var(--radius-full);
          border: none;
          font-weight: 700;
          font-size: 0.775rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background-color var(--transition-fast);
        }

        .btn-select-package:hover {
          background-color: var(--color-primary-dark);
        }

        .pricing-guarantee-banner {
          background-color: var(--color-surface-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 1.25rem 1.75rem;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      `}</style>
    </section>
  );
};
