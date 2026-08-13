import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { getCatalogServices } from '../services/pricingStorage';
import { TECH_CATEGORIES, CatalogServiceItem } from '../data/servicesCatalog';
import { Sparkles, Check, Ban, ArrowRight, Clock, HelpCircle, ShieldCheck } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();
  const services = getCatalogServices().filter((s) => s.isActive);
  const [selectedService, setSelectedService] = useState<CatalogServiceItem>(services[1] || services[0]);

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
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
            <Sparkles size={15} color="var(--color-teal)" /> KHUNG 7 CÂU HỎI CHUYỂN ĐỔI CHI TIẾT
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Chi Tiết Danh Mục 40 Dịch Vụ LocalMate
          </h1>
          <p className="subtitle" style={{ marginTop: '0.5rem' }}>
            Minh bạch tuyệt đối từ phạm vi công việc, thời gian hoàn thành đến giá niêm yết trước khi triển khai.
          </p>
        </div>

        {/* 2-Column Master-Detail Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Left Column: Service Selector List */}
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
              Danh sách 40 dịch vụ ({services.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '650px', overflowY: 'auto' }}>
              {services.map((srv) => {
                const isSelected = selectedService.id === srv.id;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    style={{
                      textAlign: 'left',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? '#ffffff' : 'transparent',
                      border: isSelected ? '1px solid var(--color-teal)' : '1px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: isSelected ? 'var(--shadow-sm)' : 'none'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-teal-dark)', display: 'block' }}>
                        #{srv.id} [{srv.code}]
                      </span>
                      <strong style={{ fontSize: '0.85rem', color: 'var(--color-navy)' }}>{srv.name}</strong>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>
                      {srv.priceDisplay}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 7 Conversion Questions Detail Card */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.85rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.2rem 0.6rem', borderRadius: 4 }}>
                  #{selectedService.id} · {selectedService.code}
                </span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.35rem', margin: 0 }}>
                  {selectedService.name}
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>
                  {selectedService.priceDisplay}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>/ {selectedService.unit}</span>
              </div>
            </div>

            {/* 7 Questions Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Q1 */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <HelpCircle size={16} color="var(--color-teal-dark)" /> 1. Dịch vụ này giải quyết vấn đề gì?
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem', lineHeight: 1.55 }}>
                  {selectedService.scope}
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <Check size={16} color="var(--color-teal-dark)" /> 2. Ai nên dùng?
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem', lineHeight: 1.55 }}>
                  Doanh nghiệp nhỏ, cửa hàng F&amp;B, spa, dịch vụ cần khởi tạo hoặc tối ưu hiệu quả chuyển đổi online.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#c62828', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <Ban size={16} color="#c62828" /> 3. Ai CHƯA cần dùng?
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem', lineHeight: 1.55 }}>
                  Doanh nghiệp đã có hệ thống đo lường hoặc website vận hành ổn định không phát sinh lỗi.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <ShieldCheck size={16} color="var(--color-teal-dark)" /> 4. Bạn nhận được gì (Deliverables)?
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem', lineHeight: 1.55 }}>
                  Bàn giao 100% quyền quản trị, mã nguồn/mã tracking đã được nghiệm thu chạy mượt trên thực tế.
                </p>
              </div>

              {/* Q5 */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <Sparkles size={16} color="var(--color-orange-dark)" /> 5. Giá bao nhiêu?
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem', lineHeight: 1.55 }}>
                  Niêm yết cố định <strong>{selectedService.priceDisplay}</strong> /{selectedService.unit}. Cam kết không phát sinh bất kỳ phí ẩn nào.
                </p>
              </div>

              {/* Q6 */}
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <Clock size={16} color="var(--color-teal-dark)" /> 6. Bao lâu có kết quả?
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem', lineHeight: 1.55 }}>
                  Effort dự kiến: {selectedService.effort}. Hoàn thành bàn giao thường trong 1-2 ngày làm việc.
                </p>
              </div>

              {/* Q7 */}
              <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px dashed var(--color-border)' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  7. Bước tiếp theo là gì?
                </h4>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navigate('/advisor')}
                    style={{
                      padding: '0.65rem 1.25rem',
                      backgroundColor: 'var(--color-orange)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    <span>Lên lộ trình cùng Advisor</span> <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => navigate('/lien-he')}
                    style={{
                      padding: '0.65rem 1.25rem',
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-teal-dark)',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    Đăng ký gói {selectedService.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
