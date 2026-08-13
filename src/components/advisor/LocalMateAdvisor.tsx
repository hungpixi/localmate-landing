import React, { useState, useMemo } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import {
  BUSINESS_TYPES,
  EXISTING_ASSETS,
  PROBLEM_OPTIONS,
  GOAL_OPTIONS,
  BUDGET_OPTIONS,
  AdvisorAnswers,
  generateAdvisorRoadmap
} from '../../services/advisorEngine';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  Zap,
  ShieldCheck,
  Ban,
  Clock,
  Check,
  ChevronRight
} from 'lucide-react';

interface LocalMateAdvisorProps {
  onComplete?: () => void;
  compact?: boolean;
}

export const LocalMateAdvisor: React.FC<LocalMateAdvisorProps> = ({ onComplete, compact = false }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<AdvisorAnswers>({
    businessType: 'fnb',
    existingAssets: ['facebook'],
    problems: ['no_website', 'unmeasured_ads'],
    goal: 'online_presence',
    budget: 'b_1m_3m'
  });

  const [leadForm, setLeadForm] = useState({
    fullName: '',
    phone: '',
    note: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Realtime Roadmap Calculation
  const roadmap = useMemo(() => {
    return generateAdvisorRoadmap(answers);
  }, [answers]);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(6); // Proposal & Lead Form
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleAsset = (assetId: string) => {
    if (assetId === 'none') {
      setAnswers((prev) => ({ ...prev, existingAssets: ['none'] }));
      return;
    }
    const current = answers.existingAssets.filter((a) => a !== 'none');
    if (current.includes(assetId)) {
      setAnswers((prev) => ({
        ...prev,
        existingAssets: current.filter((a) => a !== assetId)
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        existingAssets: [...current, assetId]
      }));
    }
  };

  const toggleProblem = (probId: string) => {
    const current = answers.problems;
    if (current.includes(probId)) {
      setAnswers((prev) => ({
        ...prev,
        problems: current.filter((p) => p !== probId)
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        problems: [...current, probId]
      }));
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onComplete) onComplete();
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden'
      }}
    >
      {/* Top Banner Header */}
      <div
        style={{
          backgroundColor: 'var(--color-navy)',
          color: '#ffffff',
          padding: compact ? '1.25rem 1.5rem' : '1.75rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-soft)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <Sparkles size={13} /> LOCALMATE ADVISOR (SOLUTIONS COMPOSER)
          </span>
          <h2 style={{ fontSize: compact ? '1.25rem' : '1.5rem', fontWeight: 800, color: '#ffffff', marginTop: '0.35rem', margin: 0 }}>
            Tìm Gói Phù Hợp Với Doanh Nghiệp Của Bạn
          </h2>
        </div>

        {/* Step Indicator Pill */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 'var(--radius-full)',
            padding: '0.35rem 0.9rem',
            fontSize: '0.825rem',
            fontWeight: 700,
            color: 'var(--color-teal-soft)'
          }}
        >
          {currentStep <= 5 ? `Bước ${currentStep} / 5` : 'Lộ Trình Đề Xuất'}
        </div>
      </div>

      {/* Main 2-Column Desktop Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'stretch'
        }}
      >
        {/* Left Column: Adaptive Question Flow */}
        <div style={{ padding: compact ? '1.5rem' : '2.25rem', borderRight: '1px solid var(--color-border)' }}>
          {currentStep === 1 && (
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                BƯỚC 1 CỦA 5
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                1. Bạn đang kinh doanh trong lĩnh vực nào?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Chọn đúng ngành nghề để LocalMate kích hoạt mô hình tối ưu chuẩn xác.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
                {BUSINESS_TYPES.map((b) => {
                  const isSelected = answers.businessType === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setAnswers({ ...answers, businessType: b.id })}
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: isSelected ? 700 : 600,
                        backgroundColor: isSelected ? 'var(--color-teal-soft)' : '#f8fbfa',
                        color: isSelected ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--color-teal)' : 'var(--color-border)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <span>{b.label}</span>
                      {isSelected && <Check size={16} color="var(--color-teal-dark)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                BƯỚC 2 CỦA 5
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                2. Hiện tại bạn đã có sẵn những kênh nào?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Chọn tất cả tài sản sẵn có (LocalMate tuyệt đối không ép bạn làm lại thứ đã có).
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
                {EXISTING_ASSETS.map((asset) => {
                  const isSelected = answers.existingAssets.includes(asset.id);
                  return (
                    <button
                      key={asset.id}
                      onClick={() => toggleAsset(asset.id)}
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.85rem',
                        fontWeight: isSelected ? 700 : 600,
                        backgroundColor: isSelected ? 'var(--color-teal-soft)' : '#f8fbfa',
                        color: isSelected ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--color-teal)' : 'var(--color-border)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{asset.label}</span>
                      {isSelected && <Check size={16} color="var(--color-teal-dark)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                BƯỚC 3 CỦA 5 (QUAN TRỌNG NHẤT)
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                3. Vấn đề lớn nhất bạn muốn tìm LocalMate giải quyết?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Bạn có thể chọn nhiều vấn đề đang gặp phải.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {PROBLEM_OPTIONS.map((prob) => {
                  const isSelected = answers.problems.includes(prob.id);
                  return (
                    <button
                      key={prob.id}
                      onClick={() => toggleProblem(prob.id)}
                      style={{
                        textAlign: 'left',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: isSelected ? 700 : 600,
                        backgroundColor: isSelected ? '#fff4eb' : '#f8fbfa',
                        color: isSelected ? 'var(--color-orange-dark)' : 'var(--color-navy)',
                        border: '1px solid',
                        borderColor: isSelected ? '#ffd8be' : 'var(--color-border)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>"{prob.label}"</span>
                      {isSelected && <Check size={16} color="var(--color-orange-dark)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                BƯỚC 4 CỦA 5
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                4. Trong 3–6 tháng tới, mục tiêu quan trọng nhất là gì?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                LocalMate sẽ định hướng dịch vụ phù hợp nhất để đạt mục tiêu này.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {GOAL_OPTIONS.map((g) => {
                  const isSelected = answers.goal === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setAnswers({ ...answers, goal: g.id })}
                      style={{
                        textAlign: 'left',
                        padding: '0.85rem 1.1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        fontWeight: isSelected ? 700 : 600,
                        backgroundColor: isSelected ? 'var(--color-teal-soft)' : '#f8fbfa',
                        color: isSelected ? 'var(--color-teal-dark)' : 'var(--color-navy)',
                        border: '1px solid',
                        borderColor: isSelected ? 'var(--color-teal)' : 'var(--color-border)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{g.label}</span>
                      {isSelected && <Check size={18} color="var(--color-teal-dark)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                BƯỚC 5 CỦA 5
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                5. Bạn muốn bắt đầu ở mức đầu tư nào?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Mức ngân sách giúp LocalMate phân bổ thứ tự ưu tiên Phase 1 vừa sức nhất.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {BUDGET_OPTIONS.map((b) => {
                  const isSelected = answers.budget === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setAnswers({ ...answers, budget: b.id })}
                      style={{
                        textAlign: 'left',
                        padding: '0.85rem 1.1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        fontWeight: isSelected ? 700 : 600,
                        backgroundColor: isSelected ? '#fff4eb' : '#f8fbfa',
                        color: isSelected ? 'var(--color-orange-dark)' : 'var(--color-navy)',
                        border: '1px solid',
                        borderColor: isSelected ? '#ffd8be' : 'var(--color-border)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{b.label}</span>
                      {isSelected && <Check size={18} color="var(--color-orange-dark)" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-teal-soft)', color: 'var(--color-teal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                    Đã Gửi Kế Hoạch &amp; Yêu Cầu!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Chuyên viên LocalMate sẽ liên hệ qua Zalo/Điện thoại trong 1-2 giờ để gửi bản Demo 0đ và bản Proposal chi tiết theo đúng lộ trình này.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    style={{
                      padding: '0.65rem 1.25rem',
                      backgroundColor: 'var(--color-teal-soft)',
                      color: 'var(--color-teal-dark)',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Tạo lộ trình mới
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', textTransform: 'uppercase' }}>
                    HOÀN TẤT ĐỂ NHẬN BẢN DEMO 0Đ
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                    Nhận Kế Hoạch Đề Xuất Chi Tiết
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Nhập thông tin liên hệ để LocalMate gửi bản Proposal chính thức và dựng khung Web Demo mượt đúng tên thương hiệu của bạn.
                  </p>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={leadForm.fullName}
                      onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                      Số điện thoại / Zalo nhận kế hoạch *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0988.xxx.xxx"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.3rem' }}>
                      Tên thương hiệu / Địa chỉ kinh doanh
                    </label>
                    <input
                      type="text"
                      placeholder="VD: Tiệm Bánh Xèo Bà Tám Q.1..."
                      value={leadForm.note}
                      onChange={(e) => setLeadForm({ ...leadForm, note: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem 0.9rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" fullWidth className="btn-primary">
                    <Send size={18} />
                    <span>Nhận Kế Hoạch &amp; Web Demo 0đ</span>
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* Navigation Controls Bar */}
          {currentStep <= 5 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
              {currentStep > 1 ? (
                <button
                  onClick={handlePrevStep}
                  style={{
                    padding: '0.6rem 1.1rem',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: 'var(--color-navy)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ArrowLeft size={16} /> Quay lại
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNextStep}
                style={{
                  padding: '0.7rem 1.5rem',
                  backgroundColor: 'var(--color-orange)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                <span>{currentStep === 5 ? 'Xem Lộ Trình & Báo Giá' : 'Tiếp theo'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Realtime Live Plan Breakdown */}
        <div style={{ backgroundColor: '#f8fbfa', padding: compact ? '1.5rem' : '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                Lộ Trình Đề Xuất Cho Bạn
              </h4>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                Realtime Update ⚡
              </span>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {roadmap.businessSummary}
            </p>

            {/* Phase 1: Làm Ngay (P0) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.825rem', fontWeight: 800, color: 'var(--color-orange-dark)', marginBottom: '0.75rem' }}>
                <Zap size={15} /> GIAI ĐOẠN 1 — LÀM NGAY (CẤP THIẾT)
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {roadmap.phase1.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <div>
                      <strong style={{ color: 'var(--color-navy)' }}>{item.service.name}</strong>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.reason}</span>
                    </div>
                    <span style={{ fontWeight: 800, color: 'var(--color-navy)', flexShrink: 0 }}>{item.service.priceDisplay}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--color-navy)' }}>Tổng đầu tư Phase 1:</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>{roadmap.phase1TotalDisplay}</span>
              </div>
            </div>

            {/* Phase 2: Khi Nền Tảng Ổn */}
            {roadmap.phase2.length > 0 && (
              <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} color="var(--color-teal-dark)" /> Giai đoạn 2 — Khi nền tảng đã ổn (Nên làm sau)
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {roadmap.phase2.slice(0, 2).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      <span>• {item.service.name}</span>
                      <span style={{ fontWeight: 600 }}>{item.service.priceDisplay}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* "Chưa Cần Làm" Trust Section */}
            {roadmap.notRecommended.length > 0 && (
              <div style={{ backgroundColor: '#fff8f8', border: '1px solid #ffcdd2', borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#c62828', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Ban size={14} /> CHƯA CẦN LÀM Ở QUY MÔ HIỆN TẠI
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {roadmap.notRecommended.map((item, idx) => (
                    <div key={idx} style={{ fontSize: '0.775rem', color: 'var(--color-text-muted)' }}>
                      <strong style={{ color: 'var(--color-navy)' }}>{item.serviceName}:</strong> {item.reason}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Guarantee */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', fontSize: '0.775rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={18} color="var(--color-teal-dark)" style={{ flexShrink: 0 }} />
            <span>Thời gian triển khai Phase 1: {roadmap.deliveryDaysEstimate}. Bàn giao mới thanh toán.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
