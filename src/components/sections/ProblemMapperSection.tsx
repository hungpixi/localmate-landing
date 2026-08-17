import React from 'react';
import { Container } from '../ui/Container';
import { ArrowRight, HelpCircle, Globe, MapPin, Sparkles, FileText, ShoppingBag, Wrench } from 'lucide-react';
import { useRouter } from '../layout/Router';

export const ProblemMapperSection: React.FC = () => {
  const { navigate } = useRouter();

  const problemCards = [
    {
      id: 'no-web',
      category: 'Chưa có website',
      icon: Globe,
      title: 'Làm Website Giới Thiệu & Bán Hàng',
      desc: 'Website rõ ràng trên điện thoại, có bảng giá và nút gọi ngay cho khách đặt dịch vụ.',
      priceText: 'Từ 490.000đ',
      targetPath: '/dich-vu/thiet-ke-website'
    },
    {
      id: 'low-leads',
      category: 'Có web nhưng ít khách',
      icon: Wrench,
      title: 'Sửa Lỗi & Tối Ưu Nút Bấm Gọi',
      desc: 'Bố cục lại nội dung, tối ưu tốc độ tải và gắn nút gọi Hotline/Zalo nổi bật để khách dễ bấm.',
      priceText: 'Từ 99.000đ',
      targetPath: '/dich-vu/website-landing-page'
    },
    {
      id: 'google-maps',
      category: 'Cần khách gần tiệm',
      icon: MapPin,
      title: 'Đưa Doanh Nghiệp Lên Google Maps',
      desc: 'Tạo hoặc tối ưu vị trí bản đồ, hình ảnh mặt tiền và mã QR xin đánh giá 5 sao từ khách quen.',
      priceText: 'Từ 299.000đ',
      targetPath: '/dich-vu/google-maps'
    },
    {
      id: 'google-ads',
      category: 'Cần khách tìm kiếm ngay',
      icon: Sparkles,
      title: 'Quảng Cáo Google Tìm Kiếm',
      desc: 'Xuất hiện ngay trước mắt người đang chủ động tìm mua, chặn click bấm nhầm và kiểm soát chi phí.',
      priceText: 'Từ 390.000đ',
      targetPath: '/dich-vu/google-ads'
    },
    {
      id: 'no-time-content',
      category: 'Không có thời gian',
      icon: FileText,
      title: 'Viết Bài & Chăm Sóc Facebook',
      desc: 'Chuẩn bị 15 bài viết + 15 ảnh thiết kế mỗi tháng để trang Facebook luôn có nội dung mới đón khách.',
      priceText: 'Từ 990.000đ/tháng',
      targetPath: '/dich-vu/content-marketing'
    },
    {
      id: 'new-store',
      category: 'Mới mở cửa hàng',
      icon: ShoppingBag,
      title: 'Gói Khởi Tạo Hiện Diện Trọn Gói',
      desc: 'Làm trọn gói từ Website, Google Maps đến bài viết giới thiệu ban đầu, bàn giao từ 3–7 ngày.',
      priceText: '2.900.000đ trọn gói',
      targetPath: '/bang-gia'
    }
  ];

  return (
    <section
      style={{
        padding: 'clamp(3rem, 5vw, 5rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="can-lam-gi"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <HelpCircle size={14} /> CHỌN THEO NHU CẦU THỰC TẾ
          </span>
          <h2 style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Bạn đang cần giải quyết việc gì?
          </h2>
          <p className="subtitle" style={{ marginTop: '0.4rem' }}>
            Không cần hiểu thuật ngữ phức tạp. Chọn đúng tình trạng của bạn để xem giải pháp và mức giá phù hợp.
          </p>
        </div>

        {/* 6 Problem Cards in a Balanced 3x2 Grid */}
        <div className="problem-grid-3x2">
          {problemCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => navigate(item.targetPath)}
                className="problem-card interactive-card"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Top Eyebrow Category & Price Tag */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="problem-badge">
                      {item.category}
                    </span>

                    <span className="problem-price-tag">
                      {item.priceText}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <div className="problem-icon-box">
                      <Icon size={18} color="var(--color-primary)" />
                    </div>
                    <h3 style={{ fontSize: '1.075rem', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.35, margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Outcome Description */}
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="problem-card-footer">
                  <span>Xem giải pháp &amp; biểu phí</span>
                  <ArrowRight size={15} color="var(--color-primary)" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <style>{`
        .problem-grid-3x2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .problem-grid-3x2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .problem-grid-3x2 {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .problem-card {
          padding: clamp(1.25rem, 2.5vw, 1.6rem);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 1.25rem;
          cursor: pointer;
          min-height: 220px;
          box-sizing: border-box;
        }

        .problem-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          background-color: var(--color-primary-soft);
          border: 1px solid var(--color-primary-border);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .problem-price-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          background-color: var(--color-orange-soft);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .problem-icon-box {
          width: 32px;
          height: 32px;
          background-color: var(--color-primary-soft);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .problem-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px dashed var(--color-border);
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-primary-dark);
        }
      `}</style>
    </section>
  );
};
