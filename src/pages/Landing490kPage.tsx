import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  BarChart2, 
  Layers, 
  RefreshCw, 
  ShieldCheck, 
  Smartphone, 
  PhoneCall, 
  MessageSquare, 
  FileText, 
  Search, 
  Clock, 
  Globe, 
  Lock, 
  HelpCircle, 
  Send,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';

export const Landing490kPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    notes: ''
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const trackingFeatures = [
    {
      title: 'Bao nhiêu người vào trang',
      desc: 'Biết chính xác có bao nhiêu người đã xem trang bán hàng của bạn.',
      icon: '👁️',
      colorBg: '#e8f5ed'
    },
    {
      title: 'Bao nhiêu người bấm gọi điện',
      desc: 'Biết có bao nhiêu người thực sự quan tâm và bấm nút gọi Hotline ngay.',
      icon: '📞',
      colorBg: '#e0f2fe'
    },
    {
      title: 'Bao nhiêu người bấm chat',
      desc: 'Biết có bao nhiêu người bấm mở Zalo hoặc Messenger để trao đổi.',
      icon: '💬',
      colorBg: '#ccfbf1'
    },
    {
      title: 'Bao nhiêu người bắt đầu điền form',
      desc: 'Biết có bao nhiêu khách hàng bắt đầu chạm tay vào form để lại thông tin.',
      icon: '📝',
      colorBg: '#fef3c7'
    },
    {
      title: 'Bao nhiêu người gửi thông tin',
      desc: 'Ghi nhận chính xác số lượng đơn đăng ký hoặc yêu cầu tư vấn thành công.',
      icon: '🚀',
      colorBg: '#f3e8ff'
    }
  ];

  const inclusions = [
    { title: '01 Landing Page (3 section)', desc: 'Cấu trúc tinh gọn: Giới thiệu ➔ Sản phẩm/Lợi ích ➔ Liên hệ', icon: <FileText size={20} color="var(--color-primary)" /> },
    { title: 'Tối ưu Mobile & PC', desc: 'Hiển thị đẹp, tải trang cực nhanh trên điện thoại và máy tính', icon: <Smartphone size={20} color="var(--color-primary)" /> },
    { title: 'Nút Gọi, Chat & Form', desc: 'Nút bấm gọi hotline, mở Zalo và form thu thập thông tin khách', icon: <PhoneCall size={20} color="var(--color-primary)" /> },
    { title: 'Google Analytics 4 (GA4)', desc: 'Cài đặt tài khoản và luồng dữ liệu GA4 chuẩn chỉnh', icon: <BarChart2 size={20} color="var(--color-primary)" /> },
    { title: 'Google Tag Manager (GTM)', desc: 'Khởi tạo container GTM để quản lý toàn bộ thẻ đo lường', icon: <Layers size={20} color="var(--color-primary)" /> },
    { title: 'Cài Tracking Chuyển Đổi', desc: 'Cài đặt sự kiện click call, click chat, submit form hoàn tất', icon: <Search size={20} color="var(--color-primary)" /> },
    { title: 'Kết nối Domain có sẵn', desc: 'Hỗ trợ trỏ domain hoặc subdomain (khuyenmai.tenmien.vn)', icon: <Globe size={20} color="var(--color-primary)" /> },
    { title: 'Chứng chỉ bảo mật SSL', desc: 'Bảo mật HTTPS miễn phí, an tâm cho khách truy cập', icon: <Lock size={20} color="var(--color-primary)" /> },
    { title: '01 Vòng chỉnh sửa', desc: 'Điều chỉnh text, màu sắc và hình ảnh theo ý kiến phản hồi', icon: <RefreshCw size={20} color="var(--color-primary)" /> },
    { title: 'Bàn giao trong 24 giờ', desc: 'Hoàn thành nhanh sau khi nhận đủ nội dung từ bạn', icon: <Clock size={20} color="var(--color-primary)" /> }
  ];

  const faqs = [
    {
      q: '1. Thời gian bàn giao 24 giờ tính từ khi nào?',
      a: 'Thời gian 24 giờ được tính từ lúc bạn gửi đủ thông tin (tên sản phẩm, hình ảnh, hotline/Zalo và nội dung cơ bản). LocalMate sẽ bắt tay vào dựng ngay và gửi link demo cho bạn duyệt trong vòng 24 giờ.'
    },
    {
      q: '2. Tôi chưa có tên miền riêng thì có làm được không?',
      a: 'Được bạn nhé! Bạn có thể sử dụng subdomain miễn phí do LocalMate cấp tạm (ví dụ: tenban.localmate.vn), hoặc nếu bạn đã có tên miền riêng, LocalMate sẽ hỗ trợ kết nối miễn phí.'
    },
    {
      q: '3. Gói 490k đã gồm tiền chạy quảng cáo chưa?',
      a: 'Gói 490k là phí thiết kế, lập trình landing page và cài đặt hạ tầng đo lường (GA4, GTM, tracking chuyển đổi). Phí này chưa bao gồm ngân sách bạn tự nạp vào tài khoản Google Ads hoặc Meta Ads để chạy quảng cáo.'
    },
    {
      q: '4. Tôi có được chỉnh sửa sau khi bàn giao không?',
      a: 'Gói đã bao gồm 01 vòng chỉnh sửa hoàn chỉnh để bạn rà soát lại thông tin, số điện thoại, giá cả hoặc hình ảnh sao cho ưng ý nhất trước khi chạy quảng cáo chính thức.'
    },
    {
      q: '5. Sau này tôi muốn nâng cấp thêm nhiều section hoặc tính năng thì sao?',
      a: 'Rất thuận tiện. Khi quy mô kinh doanh mở rộng, bạn có thể dễ dàng nâng cấp lên các gói website doanh nghiệp đầy đủ của LocalMate mà vẫn giữ nguyên toàn bộ dữ liệu đo lường đã tích lũy.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng nhập họ tên và số điện thoại!');
      return;
    }

    const message = `Chào LocalMate, tôi muốn đăng ký Gói Landing Page 490k.\n- Họ tên: ${formData.name}\n- SĐT: ${formData.phone}\n- Dịch vụ: ${formData.service || 'Chưa điền'}\n- Ghi chú: ${formData.notes || 'Không'}`;
    const encodedMsg = encodeURIComponent(message);
    const zaloUrl = `https://zalo.me/0834422439?text=${encodedMsg}`;

    setToastMessage(`Cảm ơn ${formData.name}! Đang chuyển hướng sang Zalo để kết nối ngay...`);
    setTimeout(() => {
      window.open(zaloUrl, '_blank');
      setToastMessage(null);
    }, 1200);
  };

  const scrollToForm = () => {
    const el = document.getElementById('order-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'var(--color-primary-dark)',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 10000,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span>✅</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT */}
      <div
        style={{
          backgroundColor: 'var(--color-primary-dark)',
          color: '#ffffff',
          fontSize: '0.85rem',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span
          style={{
            backgroundColor: 'var(--color-orange)',
            color: '#000000',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 800
          }}
        >
          Gói Siêu Tốc
        </span>
        <span>⚡ Bàn giao hoàn thiện & sẵn sàng chạy quảng cáo trong <strong>24 giờ</strong>!</span>
      </div>

      {/* SECTION 1: HERO */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', borderBottom: '1px solid var(--color-border)' }}>
        <Container size="lg">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.825rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  width: 'fit-content'
                }}
              >
                🌿 DÀNH CHO CỬA HÀNG & DOANH NGHIỆP ĐỊA PHƯƠNG
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
                  fontWeight: 900,
                  color: 'var(--color-primary-dark)',
                  lineHeight: 1.18,
                  margin: 0
                }}
              >
                LANDING PAGE CHẠY QUẢNG CÁO – <span style={{ color: 'var(--color-primary)' }}>490.000Đ</span>
              </h1>

              <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
                Có trang bán hàng gọn gàng để bắt đầu chạy quảng cáo ngay hôm nay.
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Bạn gửi 1 sản phẩm hoặc dịch vụ, LocalMate sẽ thiết kế landing page đơn giản, rõ ràng, tối ưu cho quảng cáo và sẵn sàng thu hút khách hàng.
              </p>

              {/* Delivery Time Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#e6f7ef',
                  border: '1.5px solid #a7f3d0',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  color: 'var(--color-primary-dark)',
                  width: 'fit-content'
                }}
              >
                <Clock size={18} color="var(--color-primary)" />
                <span>Bàn giao hoàn thiện trong <strong>24 giờ</strong></span>
              </div>

              {/* 5 Quick Features Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(65px, 1fr))',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 0.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center',
                  gap: '0.5rem'
                }}
              >
                <div>
                  <FileText size={22} color="var(--color-primary)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>3 section</div>
                </div>
                <div>
                  <BarChart2 size={22} color="var(--color-primary)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>GA4</div>
                </div>
                <div>
                  <Layers size={22} color="var(--color-primary)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>GTM</div>
                </div>
                <div>
                  <Search size={22} color="var(--color-primary)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>Tracking</div>
                </div>
                <div>
                  <RefreshCw size={22} color="var(--color-primary)" style={{ margin: '0 auto 4px auto' }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>1 vòng sửa</div>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Button variant="primary" size="lg" onClick={scrollToForm}>
                  <Rocket size={18} /> Làm Landing Page 490K
                </Button>
                <Button variant="white" size="lg" onClick={() => window.open(CONTACT_INFO.zaloUrl, '_blank')}>
                  <MessageSquare size={18} color="var(--color-primary)" /> Tư vấn qua Zalo
                </Button>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={16} color="var(--color-primary)" /> Giá rõ ràng
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Rocket size={16} color="var(--color-primary)" /> Dễ triển khai
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" /> Sẵn sàng chạy ads
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid var(--color-primary-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(1rem, 3vw, 1.75rem)',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center'
              }}
            >
              <img
                src="/assets/landing-490k/hero-490k.png"
                alt="Hero Landing Page 490K"
                style={{
                  width: '100%',
                  maxHeight: '480px',
                  objectFit: 'contain',
                  margin: '0 auto'
                }}
              />
              <div
                style={{
                  marginTop: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  display: 'inline-block'
                }}
              >
                ✨ Giao diện tối ưu Mobile-First cho khách bấm gọi &amp; để lại thông tin
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHY TRACKING */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="ĐO LƯỜNG HIỆU QUẢ"
            title="Tracking để làm gì?"
            subtitle="Hiểu đơn giản: LocalMate giúp bạn biết khách đã làm gì trên trang để không lãng phí ngân sách quảng cáo."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Visual Image */}
            <div
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <img
                src="/assets/landing-490k/why-tracking.png"
                alt="Tracking để làm gì"
                style={{ maxHeight: '440px', margin: '0 auto', objectFit: 'contain' }}
              />
            </div>

            {/* Tracking List Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {trackingFeatures.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: item.colorBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary-dark)', margin: '0 0 2px 0' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div
            style={{
              marginTop: '2rem',
              backgroundColor: '#ecfdf5',
              border: '1.5px solid #a7f3d0',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <span style={{ fontSize: '1.75rem' }}>💡</span>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#065f46', margin: '0 0 4px 0' }}>
                Nhờ tracking, sau này tối ưu quảng cáo dễ hơn
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#047857', margin: 0, lineHeight: 1.5 }}>
                Biết rõ từ khóa hay chiến dịch nào thực sự tạo ra khách gọi và điền form để đầu tư đúng chỗ, tiết kiệm chi phí và tăng doanh số.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: GA4 & GTM */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="HẠ TẦNG ĐO LƯỜNG"
            title="GA4 và GTM là gì?"
            subtitle="Hiểu đơn giản để bắt đầu làm landing page và tối ưu quảng cáo Google/Meta hiệu quả hơn."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  fontSize: '2rem'
                }}
              >
                📊
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                Google Analytics 4 (GA4)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Giúp bạn theo dõi chi tiết khách vào website từ đâu, xem trang nào và thực hiện tương tác gì.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  fontSize: '2rem'
                }}
              >
                🏷️
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                Google Tag Manager (GTM)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Giúp cài đặt và quản lý các thẻ đo lường (Pixel, Google Tag) linh hoạt mà không phải can thiệp sửa mã nguồn website mỗi lần.
              </p>
            </div>
          </div>

          {/* Process Flow Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid var(--color-primary-border)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              Có tự tối ưu quảng cáo luôn không?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
              Có nền tracking sẵn để máy học Google Ads / Meta Ads tự động tìm đúng người có khả năng mua hàng nhất:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              <div style={{ backgroundColor: '#f8faf9', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>💻</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Landing Page</div>
              </div>
              <div style={{ backgroundColor: '#f8faf9', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>👥</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Khách truy cập</div>
              </div>
              <div style={{ backgroundColor: '#f8faf9', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🔍</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Tracking ghi nhận</div>
              </div>
              <div style={{ backgroundColor: '#f8faf9', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📢</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Ads nhận data</div>
              </div>
              <div style={{ backgroundColor: '#f8faf9', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1rem 0.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📈</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Tối ưu quảng cáo</div>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <Button variant="primary" size="lg" onClick={scrollToForm}>
                Hiểu rồi, bắt đầu làm landing page ➔
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: PACKAGE INCLUDES */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="PHẠM VI CÔNG VIỆC"
            title="490.000đ bao gồm những gì?"
            subtitle="Một mức giá minh bạch, trọn gói đầy đủ tính năng kỹ thuật cốt lõi để bạn bán hàng."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: 10 Inclusions Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                gap: '12px'
              }}
            >
              {inclusions.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--color-primary-dark)', margin: '0 0 2px 0' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual Box */}
            <div
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '2px solid var(--color-primary-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <img
                src="/assets/landing-490k/package-includes.png"
                alt="Chi tiết gói 490k"
                style={{ maxHeight: '460px', margin: '0 auto', objectFit: 'contain' }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: REQUIREMENTS & ORDER FORM */}
      <section id="order-form-section" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: 'var(--color-primary-soft)', borderBottom: '1px solid var(--color-primary-border)' }}>
        <Container size="lg">
          <SectionHeader
            eyebrow="CHUẨN BỊ ĐƠN GIẢN"
            title="Bạn cần gửi gì cho LocalMate?"
            subtitle="Chỉ cần gửi những thông tin dưới đây, LocalMate sẽ lo trọn gói phần còn lại!"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              alignItems: 'start'
            }}
          >
            {/* Left: 6 Items Checklist */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                📋 6 Thông tin cơ bản bạn gửi qua:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: '1. Tên sản phẩm hoặc dịch vụ', req: true },
                  { name: '2. Hình ảnh sản phẩm / cửa hàng thực tế', req: true },
                  { name: '3. Nội dung cơ bản / điểm nổi bật', req: true },
                  { name: '4. Giá bán hoặc ưu đãi khuyến mãi', req: false },
                  { name: '5. Hotline và kênh chat Zalo', req: true },
                  { name: '6. Logo thương hiệu (nếu có)', req: false }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color="var(--color-primary)" />
                      {item.name}
                    </span>
                    {!item.req && (
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#e2e8f0', color: '#475569', padding: '2px 8px', borderRadius: '9999px' }}>
                        Tùy chọn
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* 3 Steps Structure */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--color-border)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.75rem', textAlign: 'center' }}>
                  🌿 Cấu trúc 3 Section chuẩn:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: 'var(--radius-sm)', padding: '8px 4px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>01</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Giới thiệu</div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: 'var(--radius-sm)', padding: '8px 4px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>02</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Sản phẩm</div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: 'var(--radius-sm)', padding: '8px 4px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>03</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Liên hệ</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Registration Form */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2.5px solid var(--color-primary)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-primary-soft)',
                  color: 'var(--color-primary-dark)',
                  border: '1px solid var(--color-primary-border)',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-block',
                  marginBottom: '0.75rem'
                }}
              >
                GÓI LANDING PAGE QUẢNG CÁO
              </div>

              <div style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>
                490.000đ <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>/ trọn gói</span>
              </div>

              <form onSubmit={handleFormSubmit} style={{ marginTop: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text)' }}>Họ và tên của bạn:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Tuấn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text)' }}>Số điện thoại / Zalo:</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text)' }}>Sản phẩm / Dịch vụ cần làm:</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Nhôm kính, Vệ sinh sofa, Cà phê..."
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-text)' }}>Ghi chú thêm:</label>
                  <textarea
                    placeholder="Nhập thêm link FB hoặc yêu cầu..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginTop: '4px', minHeight: '60px' }}
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" style={{ width: '100%', marginTop: '6px', fontWeight: 800 }}>
                  <Send size={18} /> Đăng Ký Gói 490K – Bàn Giao 24h
                </Button>

                <Button
                  variant="white"
                  size="md"
                  type="button"
                  onClick={() => window.open(CONTACT_INFO.zaloUrl, '_blank')}
                  style={{ width: '100%', marginTop: '2px', fontWeight: 700 }}
                >
                  <MessageSquare size={16} color="var(--color-primary)" /> Nhắn tin Zalo với LocalMate
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: FAQ */}
      <section style={{ padding: 'clamp(3rem, 5vw, 5rem) 0', backgroundColor: '#ffffff' }}>
        <Container size="md">
          <SectionHeader
            eyebrow="GIẢI ĐÁP THẮC MẮC"
            title="Câu hỏi thường gặp"
            subtitle="Những thông tin cần biết trước khi bắt đầu làm landing page với LocalMate."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    backgroundColor: activeFaq === idx ? 'var(--color-primary-soft)' : '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '16px 20px', fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.6, backgroundColor: '#ffffff' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
};
