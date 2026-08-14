import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { CatalogServiceItem, TECH_CATEGORIES, TechCategoryKey } from '../../data/servicesCatalog';
import { getCatalogServices, subscribeCatalogChanges } from '../../services/pricingStorage';
import { ArrowRight, Tag, ShieldCheck, Check, Sparkles } from 'lucide-react';
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

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="bang-gia"
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.75rem'
            }}
          >
            <Sparkles size={14} color="var(--color-teal)" /> BẢNG GIÁ DỊCH VỤ 40 MÓN MINH BẠCH
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Chi Phí Niêm Yết — Không Phát Sinh Phí Ẩn
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            LocalMate chia nhỏ dịch vụ với chi phí linh hoạt từ 99.000đ (sửa lỗi), 490.000đ (landing page) đến gói tự động hóa nghiệp vụ.
          </p>
        </div>

        {/* Technical Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '0.55rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: activeCategory === 'all' ? 700 : 600,
              backgroundColor: activeCategory === 'all' ? 'var(--color-navy)' : '#ffffff',
              color: activeCategory === 'all' ? '#ffffff' : 'var(--color-navy)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer'
            }}
          >
            Tất cả 40 dịch vụ ({activeServices.length})
          </button>
          {TECH_CATEGORIES.map((cat) => {
            const count = activeServices.filter((s) => s.categoryGroup === cat.key).length;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 600,
                  backgroundColor: isActive ? 'var(--color-navy)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-navy)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer'
                }}
              >
                {cat.title.split('. ')[1]} ({count})
              </button>
            );
          })}
        </div>

        {/* Pricing Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'var(--space-gap)',
            marginBottom: '3rem'
          }}
        >
          {displayedServices.map((srv) => (
            <div
              key={srv.id}
              style={{
                backgroundColor: '#ffffff',
                border: srv.isPopular ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-card-p, clamp(1rem, 3vw, 1.5rem))',
                boxShadow: srv.isPopular ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                position: 'relative',
                boxSizing: 'border-box',
                minWidth: 0
              }}
              className="interactive-card"
            >
              <div>
                {/* Header Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.2rem 0.5rem', borderRadius: 4 }}>
                    #{srv.id} [{srv.code}]
                  </span>
                  {srv.isPopular && (
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-orange-dark)', backgroundColor: '#fff4eb', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                      Khuyên dùng
                    </span>
                  )}
                </div>

                {/* Service Name & Scope */}
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {srv.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {srv.scope}
                </p>

                {/* Effort Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.775rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  <Check size={14} color="var(--color-teal-dark)" /> Effort mục tiêu: {srv.effort}
                </div>
              </div>

              {/* Price & Action */}
              <div style={{ paddingTop: '1rem', borderTop: '1px dashed var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>
                    {srv.priceDisplay}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>
                    / {srv.unit}
                  </span>
                </div>

                <button
                  onClick={() => navigate('/lien-he')}
                  style={{
                    padding: '0.55rem 1.1rem',
                    backgroundColor: 'var(--color-navy)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.825rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>Chọn gói</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Callout */}
        <div
          style={{
            backgroundColor: '#f0f7f5',
            border: '1px solid #d2e4e0',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            maxWidth: '860px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}
        >
          <ShieldCheck size={32} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-navy)' }}>
              Nghiệm thu thực tế mới thanh toán — Khách hàng làm chủ 100% dữ liệu
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
              Duyệt web demo mượt trước 0đ. Bàn giao đầy đủ quyền quản trị tên miền, website, fanpage và Google Maps.
            </p>
          </div>
          <button
            onClick={() => navigate('/admin/pricing')}
            style={{
              padding: '0.65rem 1.25rem',
              backgroundColor: 'var(--color-teal-dark)',
              color: '#ffffff',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.825rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Quản trị CMS Bảng giá ⚙️
          </button>
        </div>
      </Container>
    </section>
  );
};
