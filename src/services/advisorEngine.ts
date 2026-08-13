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
    id: 'bct_compliance',
    label: 'Cần hoàn thiện thủ tục thông báo website với Bộ Công Thương',
    targetServiceIds: ['41e', '41c', '41d']
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
    id: 'dont_know',
    label: 'Tôi chưa biết mình cần gì, nhờ LocalMate chọn giúp',
    targetServiceIds: ['02', '19', '27']
  }
];

export const GOAL_OPTIONS: GoalOption[] = [
  {
    id: 'online_presence',
    label: 'Có hiện diện online uy tín & hoàn thiện BCT',
    targetServiceIds: ['02', '12', '19', '41e']
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

export interface AdvisorAnswers {
  businessType: string;
  existingAssets: string[];
  problems: string[];
  goal: string;
}

export interface RecommendationTier {
  id: 'starter' | 'recommended' | 'growth';
  title: string;
  badge?: string;
  isPopular?: boolean;
  services: { service: CatalogServiceItem; reason: string }[];
  totalCost: number;
  totalDisplay: string;
  deliveryDaysDisplay: string;
  description: string;
}

export interface NotRecommendedItem {
  serviceName: string;
  reason: string;
}

export interface AdvisorRoadmapResult {
  businessSummary: string;
  tiers: RecommendationTier[];
  recommendedTierId: string;
  notRecommended: NotRecommendedItem[];
}

export const generateAdvisorRoadmap = (answers: AdvisorAnswers): AdvisorRoadmapResult => {
  const allServices = getCatalogServices();
  const activeServices = allServices.filter((s) => s.isActive);

  // Asset Filter Logic ("Chưa Cần Làm" Filter)
  const notRecommended: NotRecommendedItem[] = [];
  const hasGoodWebsite = answers.existingAssets.includes('website') && !answers.problems.includes('no_website');

  if (hasGoodWebsite) {
    notRecommended.push({
      serviceName: 'Thiết kế lại toàn bộ Website',
      reason: 'Website hiện tại của anh/chị đã có thể tận dụng tốt, chưa cần đập đi làm lại. Ưu tiên cài Tracking + Google Maps + BCT Compliance.'
    });
  }

  if (answers.existingAssets.includes('none') || answers.existingAssets.length === 0) {
    notRecommended.push({
      serviceName: 'Hệ thống CRM & Phần mềm quản lý phức tạp',
      reason: 'Chưa cần thiết ở giai đoạn mới bắt đầu. Nên tập trung làm Landing Page Business (790k) + Google Maps (299k) trước.'
    });
  }

  // Find candidate services
  const landingBiz = activeServices.find((s) => s.id === '02') || activeServices[0]; // 790k
  const landingStarter = activeServices.find((s) => s.id === '01') || activeServices[0]; // 590k
  const trackingPack = activeServices.find((s) => s.id === '27') || activeServices[0]; // 390k
  const gmapsOpt = activeServices.find((s) => s.id === '20') || activeServices[0]; // 390k
  const gbpSetup = activeServices.find((s) => s.id === '19') || activeServices[0]; // 299k
  const gadsSetup = activeServices.find((s) => s.id === '28') || activeServices[0]; // 390k
  const bctPack = activeServices.find((s) => s.id === '41e') || activeServices.find((s) => s.id === '41c') || activeServices[0]; // 590k

  const formatPriceVND = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toLocaleString('vi-VN')} triệu`;
    }
    return `${(num / 1000).toLocaleString('vi-VN')}k`;
  };

  // 1. Starter Tier (Bắt đầu)
  const starterServices = [
    { service: landingStarter, reason: 'Có nền tảng hiện diện online uy tín ban đầu' }
  ];
  if (!hasGoodWebsite) {
    starterServices.push({ service: gbpSetup, reason: 'Xuất hiện thông tin địa điểm trên Google' });
  } else {
    starterServices.push({ service: activeServices.find((s) => s.id === '23') || trackingPack, reason: 'Nhúng GA4 đo lường người truy cập' });
  }

  const starterTotal = starterServices.reduce((sum, i) => sum + (i.service.numericPrice || 0), 0);

  // 2. Recommended Tier (Khuyến nghị ⭐ - Middle Option target)
  const recommendedServices = [
    { service: landingBiz, reason: 'Landing Page Business tối ưu giao diện di động & form liên hệ' },
    { service: gmapsOpt, reason: 'Tối ưu vị trí Google Maps đưa khách quanh khu vực tìm đến' },
    { service: trackingPack, reason: 'Full Ads Tracking Pack để biết chính xác khách từ đâu tới' }
  ];

  const recommendedTotal = recommendedServices.reduce((sum, i) => sum + (i.service.numericPrice || 0), 0);

  // 3. Growth Tier (Tăng trưởng & Compliance)
  const growthServices = [
    ...recommendedServices,
    { service: bctPack, reason: 'Website Compliance Pack: Bộ chính sách pháp lý & hỗ trợ thủ tục Bộ Công Thương' },
    { service: gadsSetup, reason: 'Thiết lập chiến dịch Google Ads tìm kiếm thu hút khách ngay' }
  ];

  const growthTotal = growthServices.reduce((sum, i) => sum + (i.service.numericPrice || 0), 0);

  const tiers: RecommendationTier[] = [
    {
      id: 'starter',
      title: 'Bắt đầu (Starter)',
      description: 'Đủ để có nền tảng xuất hiện uy tín trên internet.',
      services: starterServices,
      totalCost: starterTotal,
      totalDisplay: formatPriceVND(starterTotal),
      deliveryDaysDisplay: '1 ngày'
    },
    {
      id: 'recommended',
      title: 'Khuyến nghị (Recommended)',
      badge: 'NÊN CHỌN ⭐',
      isPopular: true,
      description: 'Gói tối ưu nhất: Có website đẹp + Google Maps + Đo lường hiệu quả.',
      services: recommendedServices,
      totalCost: recommendedTotal,
      totalDisplay: formatPriceVND(recommendedTotal),
      deliveryDaysDisplay: '1–2 ngày'
    },
    {
      id: 'growth',
      title: 'Tăng trưởng & Compliance',
      badge: 'Đầy đủ hệ thống & BCT',
      description: 'Trọn gói từ website, quảng cáo đến hoàn thiện chuẩn pháp lý Bộ Công Thương.',
      services: growthServices,
      totalCost: growthTotal,
      totalDisplay: formatPriceVND(growthTotal),
      deliveryDaysDisplay: '2–3 ngày'
    }
  ];

  const bizTypeLabel = BUSINESS_TYPES.find((b) => b.id === answers.businessType)?.label || 'Doanh nghiệp';
  const goalOpt = GOAL_OPTIONS.find((g) => g.id === answers.goal);

  return {
    businessSummary: `Mô hình: ${bizTypeLabel} • Mục tiêu: ${goalOpt?.label || 'Tăng trưởng online'}`,
    tiers,
    recommendedTierId: 'recommended',
    notRecommended
  };
};
