import { getCatalogServices } from './pricingStorage';
import { CatalogServiceItem } from '../data/servicesCatalog';

export interface BusinessOption {
  id: string;
  label: string;
  icon: string;
}

export interface AssetOption {
  id: string;
  label: string;
}

export interface ProblemOption {
  id: string;
  label: string;
  targetServiceIds: string[];
}

export interface GoalOption {
  id: string;
  label: string;
  targetServiceIds: string[];
}

export interface BudgetOption {
  id: string;
  label: string;
  maxAmount: number;
}

export const BUSINESS_TYPES: BusinessOption[] = [
  { id: 'fnb', label: 'Nhà hàng / F&B / Quán ăn', icon: 'Utensils' },
  { id: 'education', label: 'Giáo dục / Trường học / Mầm non', icon: 'GraduationCap' },
  { id: 'retail', label: 'Bán lẻ / Cửa hàng / Shop online', icon: 'Store' },
  { id: 'spa', label: 'Spa / Nail / Làm đẹp / Salon', icon: 'Sparkles' },
  { id: 'services', label: 'Dịch vụ chuyên môn / Khai phóng / Tư vấn', icon: 'Briefcase' },
  { id: 'construction', label: 'Xây dựng / Nội thất / Cơ khí', icon: 'Building2' },
  { id: 'freelancer', label: 'Freelancer / Cá nhân / KTS', icon: 'User' },
  { id: 'b2b', label: 'Doanh nghiệp B2B / Xuất khẩu', icon: 'Globe' },
  { id: 'other', label: 'Lĩnh vực khác', icon: 'HelpCircle' }
];

export const EXISTING_ASSETS: AssetOption[] = [
  { id: 'none', label: 'Chưa có gì (bắt đầu từ đầu)' },
  { id: 'website', label: 'Website (nhưng cũ/chưa hiệu quả)' },
  { id: 'facebook', label: 'Trang Facebook Fanpage' },
  { id: 'tiktok', label: 'Kênh TikTok' },
  { id: 'gmaps', label: 'Vị trí Google Maps' },
  { id: 'gads', label: 'Đang chạy Google Ads' },
  { id: 'meta_ads', label: 'Đang chạy Facebook Ads' },
  { id: 'crm', label: 'Danh sách khách hàng trong Excel/Zalo' },
  { id: 'booking', label: 'Hệ thống nhận lịch hẹn' }
];

export const PROBLEM_OPTIONS: ProblemOption[] = [
  {
    id: 'no_website',
    label: 'Tôi chưa có website hoặc landing page',
    targetServiceIds: ['01', '02', '04']
  },
  {
    id: 'old_website',
    label: 'Website hiện tại nhìn cũ, không chuyên nghiệp',
    targetServiceIds: ['08', '02', '10']
  },
  {
    id: 'no_leads',
    label: 'Website có nhưng không ra khách/cuộc gọi',
    targetServiceIds: ['03', '25', '31']
  },
  {
    id: 'invisible_google',
    label: 'Khách tìm Google không thấy tôi',
    targetServiceIds: ['19', '20', '21', '22']
  },
  {
    id: 'want_ads',
    label: 'Tôi muốn bắt đầu chạy quảng cáo',
    targetServiceIds: ['28', '29', '02']
  },
  {
    id: 'unmeasured_ads',
    label: 'Đang chạy quảng cáo nhưng không biết khách từ đâu',
    targetServiceIds: ['23', '24', '25', '27']
  },
  {
    id: 'manual_tasks',
    label: 'Tôi mất nhiều thời gian nhập tin nhắn/đơn thủ công',
    targetServiceIds: ['32', '34', '14']
  },
  {
    id: 'hard_booking',
    label: 'Tôi khó quản lý lịch hẹn và nhắc khách',
    targetServiceIds: ['33', '35', '38']
  },
  {
    id: 'ai_bot',
    label: 'Tôi muốn có AI trả lời khách 24/7',
    targetServiceIds: ['37', '38']
  },
  {
    id: 'dont_know',
    label: 'Tôi chưa biết mình cần gì, nhờ LocalMate chọn giúp',
    targetServiceIds: ['02', '19', '27']
  }
];

export const GOAL_OPTIONS: GoalOption[] = [
  {
    id: 'online_presence',
    label: 'Có hiện diện online uy tín, chuyên nghiệp',
    targetServiceIds: ['02', '12', '19']
  },
  {
    id: 'more_customers',
    label: 'Có thêm khách hàng mới nhanh hơn',
    targetServiceIds: ['20', '28', '29']
  },
  {
    id: 'increase_booking',
    label: 'Tăng lượt đặt bàn / đặt lịch hẹn',
    targetServiceIds: ['06', '33', '25']
  },
  {
    id: 'reduce_ads_waste',
    label: 'Đo lường & giảm lãng phí chi phí quảng cáo',
    targetServiceIds: ['27', '31']
  },
  {
    id: 'automation',
    label: 'Tự động hóa công việc & quản lý khách hàng',
    targetServiceIds: ['32', '34', '37']
  },
  {
    id: 'longterm_care',
    label: 'Có người chăm sóc kỹ thuật & nội dung lâu dài',
    targetServiceIds: ['40', '22']
  }
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  { id: 'b_under_500k', label: 'Dưới 500.000đ (Fix lỗi / Nền tảng)', maxAmount: 500000 },
  { id: 'b_500k_1m', label: '500.000đ – 1.000.000đ (Landing / Tracking)', maxAmount: 1000000 },
  { id: 'b_1m_3m', label: '1.000.000đ – 3.000.000đ (Gói Khởi Tạo Trọn Gói)', maxAmount: 3000000 },
  { id: 'b_3m_5m', label: '3.000.000đ – 5.000.000đ (Website + SEO + Ads Setup)', maxAmount: 5000000 },
  { id: 'b_above_5m', label: 'Trên 5.000.000đ (Hệ thống / CRM / Software)', maxAmount: 15000000 },
  { id: 'b_unknown', label: 'Chưa biết, hãy đề xuất lộ trình phù hợp', maxAmount: 99999999 }
];

export interface AdvisorAnswers {
  businessType: string;
  existingAssets: string[];
  problems: string[];
  goal: string;
  budget: string;
}

export interface ServiceRecommendationItem {
  service: CatalogServiceItem;
  reason: string;
  priority: 'P0' | 'P1' | 'P2';
  phase: 1 | 2 | 3;
}

export interface NotRecommendedItem {
  serviceName: string;
  reason: string;
}

export interface AdvisorRoadmapResult {
  businessSummary: string;
  phase1: ServiceRecommendationItem[];
  phase2: ServiceRecommendationItem[];
  phase3: ServiceRecommendationItem[];
  notRecommended: NotRecommendedItem[];
  phase1TotalCost: number;
  phase1TotalDisplay: string;
  deliveryDaysEstimate: string;
}

export const generateAdvisorRoadmap = (answers: AdvisorAnswers): AdvisorRoadmapResult => {
  const allServices = getCatalogServices();
  const activeServices = allServices.filter((s) => s.isActive);

  const scores: Record<string, number> = {};
  const reasons: Record<string, string> = {};

  activeServices.forEach((srv) => {
    scores[srv.id] = 0;
    reasons[srv.id] = '';
  });

  // 1. Problem Matching (+40 points)
  answers.problems.forEach((probId) => {
    const probOpt = PROBLEM_OPTIONS.find((p) => p.id === probId);
    if (probOpt) {
      probOpt.targetServiceIds.forEach((sId) => {
        if (scores[sId] !== undefined) {
          scores[sId] += 40;
          if (!reasons[sId]) {
            reasons[sId] = `Giải quyết trực tiếp vấn đề: "${probOpt.label}"`;
          }
        }
      });
    }
  });

  // 2. Goal Matching (+30 points)
  const goalOpt = GOAL_OPTIONS.find((g) => g.id === answers.goal);
  if (goalOpt) {
    goalOpt.targetServiceIds.forEach((sId) => {
      if (scores[sId] !== undefined) {
        scores[sId] += 30;
        if (!reasons[sId]) {
          reasons[sId] = `Hướng tới mục tiêu: "${goalOpt.label}"`;
        }
      }
    });
  }

  // 3. Industry Specific Boosts (+15 points)
  if (answers.businessType === 'fnb') {
    if (scores['06'] !== undefined) scores['06'] += 25; // Website F&B
    if (scores['20'] !== undefined) scores['20'] += 15; // Google Maps
    if (scores['33'] !== undefined) scores['33'] += 15; // Booking
  } else if (answers.businessType === 'spa' || answers.businessType === 'retail') {
    if (scores['02'] !== undefined) scores['02'] += 15;
    if (scores['20'] !== undefined) scores['20'] += 20;
  } else if (answers.businessType === 'construction') {
    if (scores['04'] !== undefined) scores['04'] += 15;
    if (scores['20'] !== undefined) scores['20'] += 15;
  }

  // 4. Asset Filter Logic ("Chưa Cần Làm" Filter)
  const notRecommended: NotRecommendedItem[] = [];
  const hasGoodWebsite = answers.existingAssets.includes('website') && !answers.problems.includes('no_website');

  if (hasGoodWebsite) {
    // If client already has a working website and didn't complain about building a new one
    notRecommended.push({
      serviceName: 'Thiết kế lại toàn bộ Website',
      reason: 'Website hiện tại của anh/chị đã có thể tận dụng tốt, chưa cần tốn chi phí đập đi làm lại.'
    });
  }

  if (answers.existingAssets.includes('none') || answers.existingAssets.length === 0) {
    notRecommended.push({
      serviceName: 'Hệ thống CRM & Phần mềm quản lý phức tạp',
      reason: 'Chưa cần thiết ở giai đoạn mới bắt đầu. Nên tập trung làm landing page + Google Maps trước.'
    });
  }

  // Select Recommended Items sorted by Score
  const ranked = activeServices
    .map((srv) => ({
      service: srv,
      score: scores[srv.id] || 0,
      reason: reasons[srv.id] || 'Tối ưu hiệu quả hiện diện số'
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Group into Phase 1 (Now), Phase 2 (Stabilize), Phase 3 (Growth)
  const phase1: ServiceRecommendationItem[] = [];
  const phase2: ServiceRecommendationItem[] = [];
  const phase3: ServiceRecommendationItem[] = [];

  // Guarantee logical flow (Dependency Graph)
  const needsWeb = !answers.existingAssets.includes('website') && answers.problems.includes('no_website');
  
  if (needsWeb) {
    const webSrv = activeServices.find((s) => s.id === '02') || activeServices.find((s) => s.id === '01');
    if (webSrv && !phase1.some((p) => p.service.id === webSrv.id)) {
      phase1.push({
        service: webSrv,
        reason: 'Hiện tại chưa có nơi đón khách từ quảng cáo/tìm kiếm. Cần làm trước tiên.',
        priority: 'P0',
        phase: 1
      });
    }
  }

  ranked.forEach((item) => {
    if (phase1.some((p) => p.service.id === item.service.id)) return;

    if (item.service.categoryGroup === 'website-landing' || item.service.id === '27' || item.service.id === '19') {
      if (phase1.length < 3) {
        phase1.push({ ...item, priority: 'P0', phase: 1 });
      } else {
        phase2.push({ ...item, priority: 'P1', phase: 2 });
      }
    } else if (item.service.categoryGroup === 'google-seo' || item.service.categoryGroup === 'ads-conversion' || item.service.categoryGroup === 'crm-automation') {
      if (phase2.length < 3) {
        phase2.push({ ...item, priority: 'P1', phase: 2 });
      } else {
        phase3.push({ ...item, priority: 'P2', phase: 3 });
      }
    } else if (item.service.categoryGroup === 'digital-care' || item.service.categoryGroup === 'ai-software') {
      phase3.push({ ...item, priority: 'P2', phase: 3 });
    } else {
      if (phase1.length < 3) {
        phase1.push({ ...item, priority: 'P0', phase: 1 });
      } else {
        phase2.push({ ...item, priority: 'P1', phase: 2 });
      }
    }
  });

  // Fallback defaults if empty
  if (phase1.length === 0) {
    const defaultSrv = activeServices.find((s) => s.id === '02') || activeServices[0];
    phase1.push({
      service: defaultSrv,
      reason: 'Chuẩn hóa nền móng hiện diện thương hiệu.',
      priority: 'P0',
      phase: 1
    });
  }

  // Calculate Phase 1 Cost
  const phase1TotalCost = phase1.reduce((sum, item) => sum + (item.service.numericPrice || 0), 0);

  const formatPriceVND = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toLocaleString('vi-VN')} triệu`;
    }
    return `${(num / 1000).toLocaleString('vi-VN')}k`;
  };

  const bizTypeLabel = BUSINESS_TYPES.find((b) => b.id === answers.businessType)?.label || 'Doanh nghiệp';

  return {
    businessSummary: `Mô hình: ${bizTypeLabel} • Mục tiêu: ${goalOpt?.label || 'Tăng trưởng online'}`,
    phase1,
    phase2,
    phase3,
    notRecommended,
    phase1TotalCost,
    phase1TotalDisplay: formatPriceVND(phase1TotalCost),
    deliveryDaysEstimate: '1 – 3 ngày làm việc'
  };
};
