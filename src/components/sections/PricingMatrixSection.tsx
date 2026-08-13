import React from 'react';
import { Container } from '../ui/Container';
import { PRICING_TABLE } from '../../data/landingContent';
import { CheckCircle2, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const PricingMatrixSection: React.FC = () => {
  const { navigate } = useRouter();

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
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              display: 'inline-block',
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
            BẢNG GIÁ KHỞI ĐIỂM MINH BẠCH
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Chi Phí Rõ Ràng — Không Phát Sinh Phí Ẩn
          </h2>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Lựa chọn sản phẩm hoặc gói dịch vụ phù hợp với giai đoạn phát triển của doanh nghiệp bạn. Báo giá minh bạch trước khi triển khai.
          </p>
        </div>

        {/* Pricing Matrix Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {PRICING_TABLE.map((group, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Tag size={20} color="var(--color-teal-dark)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                    {group.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {group.services.map((srv, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        paddingBottom: '1rem',
                        borderBottom: sIdx === group.services.length - 1 ? 'none' : '1px dashed var(--color-border)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                          {srv.name}
                        </h4>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>
                            {srv.price}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>
                            / {srv.period}
                          </span>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                        {srv.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => navigate('/lien-he')}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--color-teal-soft)',
                    border: '1px solid rgba(15, 169, 154, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-teal-dark)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-navy)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-teal-soft)';
                    e.currentTarget.style.color = 'var(--color-teal-dark)';
                  }}
                >
                  <span>Nhận báo giá theo nghiệp vụ</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Note */}
        <div
          style={{
            backgroundColor: '#f0f7f5',
            border: '1px solid #d2e4e0',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            maxWidth: '840px',
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
              Cam kết giá niêm yết — Nghiệm thu xong mới thanh toán
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
              Mọi báo giá đều ghi rõ từng mục tài khoản, số lượng bài viết, lượt hỗ trợ. LocalMate cam kết 100% không phát sinh chi phí ngoài hợp đồng.
            </p>
          </div>
          <button
            onClick={() => navigate('/bang-gia')}
            style={{
              padding: '0.65rem 1.25rem',
              backgroundColor: 'var(--color-navy)',
              color: '#ffffff',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Xem bảng giá đầy đủ →
          </button>
        </div>
      </Container>
    </section>
  );
};
