export interface CatalogServiceItem {
  id: string; // 01 to 40
  code: string;
  name: string;
  categoryGroup: TechCategoryKey;
  goalGroup: GoalCategoryKey;
  scope: string;
  effort: string;
  priceDisplay: string;
  numericPrice?: number;
  unit: string;
  isActive: boolean;
  isPopular?: boolean;
  notes?: string;
}

export type TechCategoryKey =
  | 'website-landing'
  | 'website-fix'
  | 'google-seo'
  | 'analytics-tracking'
  | 'ads-conversion'
  | 'crm-automation'
  | 'ai-software'
  | 'digital-care';

export type GoalCategoryKey =
  | 'bat-dau-online'
  | 'co-them-khach'
  | 'biet-khach-tu-dau'
  | 'do-lam-thu-cong'
  | 'van-hanh-lau-dai';

export interface TechCategoryMeta {
  key: TechCategoryKey;
  title: string;
  description: string;
  badge: string;
}

export interface GoalCategoryMeta {
  key: GoalCategoryKey;
  title: string;
  question: string;
  startingPrice: string;
  description: string;
  iconName: string;
  featuredServiceIds: string[];
}

export interface DigitalCareTier {
  id: string;
  name: string;
  priceDisplay: string;
  unit: string;
  badge?: string;
  description: string;
  tasksQuota: string;
  features: string[];
  isRecommended?: boolean;
}

export const TECH_CATEGORIES: TechCategoryMeta[] = [
  {
    key: 'website-landing',
    title: '1. Website & Landing Page',
    description: 'Thiết kế trang giới thiệu, landing page chuyển đổi và website doanh nghiệp chuẩn SEO di động.',
    badge: '8 dịch vụ'
  },
  {
    key: 'website-fix',
    title: '2. Website Fix & Technical',
    description: 'Sửa lỗi nhỏ, tối ưu tốc độ, responsive di động, cấu hình DNS và Cloudflare nhanh gọn.',
    badge: '7 dịch vụ'
  },
  {
    key: 'google-seo',
    title: '3. Google, SEO, GEO & Local',
    description: 'Tối ưu hiện diện Google Maps, xác minh GBP, SEO kỹ thuật và tối ưu tìm kiếm AI (GEO).',
    badge: '7 dịch vụ'
  },
  {
    key: 'analytics-tracking',
    title: '4. Analytics, Tracking & Ads Infra',
    description: 'Cài đặt GA4, GTM, Meta Pixel và theo dõi lượt nhấp/cuộc gọi chính xác 100%.',
    badge: '5 dịch vụ'
  },
  {
    key: 'ads-conversion',
    title: '5. Ads & Conversion (CRO)',
    description: 'Khởi tạo chiến dịch Google Ads, Meta Ads và audit tối ưu tỷ lệ chuyển đổi.',
    badge: '4 dịch vụ'
  },
  {
    key: 'crm-automation',
    title: '6. CRM, Booking & Automation',
    description: 'Tự động gửi thông báo Telegram, booking online và hệ thống CRM quản lý khách hàng.',
    badge: '5 dịch vụ'
  },
  {
    key: 'ai-software',
    title: '7. AI & Custom Software',
    description: 'Chatbot AI hỏi đáp, trợ lý booking tự động và lập trình phần mềm quản lý theo yêu cầu.',
    badge: '3 dịch vụ'
  },
  {
    key: 'digital-care',
    title: '8. Recurring Digital Operations',
    description: 'Dịch vụ chăm sóc, bảo trì và đồng hành vận hành digital hàng tháng cho doanh nghiệp nhỏ.',
    badge: 'Dịch vụ #40'
  }
];

export const GOAL_CATEGORIES: GoalCategoryMeta[] = [
  {
    key: 'bat-dau-online',
    title: '1. Bắt đầu kinh doanh online',
    question: 'Tôi cần một website hoặc landing page ban đầu',
    startingPrice: 'Từ 490.000đ',
    description: 'Xây dựng hiện diện thương hiệu rõ ràng, hiển thị chuẩn di động, tích hợp ngay các nút gọi Zalo.',
    iconName: 'Globe',
    featuredServiceIds: ['01', '02', '04', '12', '19']
  },
  {
    key: 'co-them-khach',
    title: '2. Có thêm khách hàng',
    question: 'Tôi muốn khách tìm thấy mình trên Google & Mạng xã hội',
    startingPrice: 'Từ 299.000đ',
    description: 'Đưa vị trí cửa hàng lên Google Maps, SEO từ khóa ngành và chạy quảng cáo tìm kiếm hiệu quả.',
    iconName: 'TrendingUp',
    featuredServiceIds: ['19', '20', '21', '28', '29']
  },
  {
    key: 'biet-khach-tu-dau',
    title: '3. Biết khách đến từ đâu',
    question: 'Tôi chạy quảng cáo nhưng không biết có hiệu quả không',
    startingPrice: 'Từ 99.000đ',
    description: 'Cài đặt GA4, GTM, Meta Pixel và đo lường từng lượt gọi, form đăng ký và chi phí/lead.',
    iconName: 'BarChart2',
    featuredServiceIds: ['23', '24', '25', '26', '27']
  },
  {
    key: 'do-lam-thu-cong',
    title: '4. Đỡ phải làm thủ công',
    question: 'Tôi muốn tự động hóa quản lý khách và lịch hẹn',
    startingPrice: 'Từ 299.000đ',
    description: 'Tự động gửi thông báo đơn về Telegram, form đặt lịch hẹn 24/7 và chatbot tư vấn trả lời khách.',
    iconName: 'Cpu',
    featuredServiceIds: ['32', '33', '34', '35', '37']
  },
  {
    key: 'van-hanh-lau-dai',
    title: '5. Vận hành lâu dài',
    question: 'Tôi cần người chăm sóc digital hàng tháng',
    startingPrice: 'Từ 290.000đ/tháng',
    description: 'Gói chăm sóc website, bảo trì kỹ thuật, sao lưu và hỗ trợ ưu tiên với hạn mức task rõ ràng.',
    iconName: 'ShieldCheck',
    featuredServiceIds: ['40-mini', '40-business', '40-growth', '40-partner', '22']
  }
];

export const DIGITAL_CARE_TIERS: DigitalCareTier[] = [
  {
    id: 'care-mini',
    name: 'Care Mini',
    priceDisplay: '290.000đ',
    unit: '/ tháng',
    description: 'Dành cho website nhỏ cần giám sát hoạt động và bảo trì cơ bản.',
    tasksQuota: '2 thay đổi nhỏ / tháng',
    features: [
      'Giám sát website uptime 24/7',
      'Sao lưu (Backup) dữ liệu định kỳ',
      'Hỗ trợ sửa 02 lỗi/thay đổi nhỏ',
      'Hỗ trợ kỹ thuật qua Zalo'
    ]
  },
  {
    id: 'care-business',
    name: 'Care Business',
    priceDisplay: '590.000đ',
    unit: '/ tháng',
    badge: 'Phổ biến nhất',
    isRecommended: true,
    description: 'Dành cho doanh nghiệp cần cập nhật nội dung và tối ưu hiện diện Google Maps.',
    tasksQuota: '4 task nhỏ / tháng',
    features: [
      'Toàn bộ quyền lợi gói Care Mini',
      'Cập nhật sản phẩm / bài viết mới',
      'Chăm sóc Google Business Profile basic',
      'Health check hệ thống form & tracking',
      'Hỗ trợ 04 task nội dung/kỹ thuật'
    ]
  },
  {
    id: 'care-growth',
    name: 'Care Growth',
    priceDisplay: '990.000đ',
    unit: '/ tháng',
    description: 'Dành cho cửa hàng/công ty muốn tăng trưởng lượt tìm kiếm Local SEO.',
    tasksQuota: '6 - 8 task / tháng',
    features: [
      'Toàn bộ quyền lợi gói Care Business',
      'Local SEO & Tối ưu Google Maps',
      'Tối ưu tỷ lệ chuyển đổi (CRO basic)',
      'Biên tập 04 bài viết chuẩn SEO',
      'Báo cáo hiệu quả & lượt gọi hàng tháng'
    ]
  },
  {
    id: 'digital-partner',
    name: 'Digital Partner',
    priceDisplay: '1.490.000đ',
    unit: '/ tháng',
    badge: 'Đồng hành toàn diện',
    description: 'Thay thế phòng Marketing/IT thuê ngoài trọn gói cho doanh nghiệp nhỏ.',
    tasksQuota: 'Ưu tiên hỗ trợ không giới hạn task nhỏ',
    features: [
      'Toàn bộ quyền lợi gói Care Growth',
      'Xử lý ưu tiên trong 2-4 giờ làm việc',
      'Tối ưu Ads campaign & tracking nâng cao',
      'Tư vấn định hướng Digital & Automation',
      'Báo cáo chiến lược định kỳ 1:1'
    ]
  }
];

export const INITIAL_SERVICES_CATALOG: CatalogServiceItem[] = [
  // 1. WEBSITE & LANDING PAGE (01 - 08)
  {
    id: '01',
    code: 'WEB-MINI',
    name: 'Landing Page Mini',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: '1 trang 4–5 section, CTA gọi/Zalo, responsive di động, deploy hoàn chỉnh',
    effort: '1.5–2h',
    priceDisplay: '490.000đ',
    numericPrice: 490000,
    unit: 'lần',
    isActive: true,
    isPopular: true
  },
  {
    id: '02',
    code: 'WEB-BIZ',
    name: 'Landing Page Business',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: '6–8 section, form tư vấn, tích hợp bản đồ Google Maps, CTA, basic SEO',
    effort: '2.5–3h',
    priceDisplay: '690.000đ',
    numericPrice: 690000,
    unit: 'lần',
    isActive: true,
    isPopular: true
  },
  {
    id: '03',
    code: 'WEB-CRO',
    name: 'Landing Page Conversion',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Landing page tối ưu chuyển đổi + cài đặt tracking + cấu trúc Schema + conversion event',
    effort: '3–4h',
    priceDisplay: '890.000đ',
    numericPrice: 890000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '04',
    code: 'WEB-1PAGE',
    name: 'Website Doanh Nghiệp 1 Trang',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Homepage doanh nghiệp đầy đủ 8–10 section, giới thiệu, quy trình, bảng giá, liên hệ',
    effort: '4–5h',
    priceDisplay: '1.290.000đ',
    numericPrice: 1290000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '05',
    code: 'WEB-MULTIPAGE',
    name: 'Website Doanh Nghiệp 3–5 Trang',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Trang chủ, Giới thiệu, Dịch vụ chi tiết, Bài viết/Tin tức, Liên hệ',
    effort: '6–8h',
    priceDisplay: '1.990.000đ',
    numericPrice: 1990000,
    unit: 'lần',
    isActive: true,
    isPopular: true
  },
  {
    id: '06',
    code: 'WEB-FNB',
    name: 'Website F&B / Nhà Hàng',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Menu điện tử, form đặt bàn online, chỉ đường Google Maps, hotline, thư viện món ăn',
    effort: '7–10h',
    priceDisplay: '2.490.000đ',
    numericPrice: 2490000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '07',
    code: 'WEB-ECOM',
    name: 'Website Bán Hàng Cơ Bản',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Catalogue sản phẩm, bộ lọc danh mục, chi tiết sản phẩm, giỏ hàng/đặt hàng đơn giản',
    effort: '10–15h',
    priceDisplay: '3.490.000đ',
    numericPrice: 3490000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '08',
    code: 'WEB-REDESIGN',
    name: 'Redesign Website Cũ',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Nâng cấp toàn bộ UI/UX + tối ưu chuẩn di động + bổ sung nút chuyển đổi Zalo/gọi',
    effort: '4–12h',
    priceDisplay: '990.000đ+',
    numericPrice: 990000,
    unit: 'lần',
    isActive: true
  },

  // 2. WEBSITE FIX & TECHNICAL (09 - 15)
  {
    id: '09',
    code: 'FIX-BUG',
    name: 'Sửa Lỗi Website Nhỏ',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Fix lỗi hiển thị layout, nút bấm không hoạt động, hỏng link, lỗi form ngắn',
    effort: '≤30m',
    priceDisplay: '99.000đ+',
    numericPrice: 99000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '10',
    code: 'FIX-MOBILE',
    name: 'Responsive Mobile Fix',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Sửa lỗi giao diện hiển thị vỡ trên điện thoại iPhone / Android / Tablet',
    effort: '0.5–1.5h',
    priceDisplay: '149.000đ+',
    numericPrice: 149000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '11',
    code: 'FIX-SPEED',
    name: 'Tối Ưu Tốc Độ Cơ Bản',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Nén ảnh WebP, dọn dẹp asset dư thừa, tối ưu lazy loading & dọn dẹp code',
    effort: '1–2h',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '12',
    code: 'FIX-DNS',
    name: 'Domain & DNS Setup',
    categoryGroup: 'website-fix',
    goalGroup: 'bat-dau-online',
    scope: 'Trỏ tên miền .vn/.com, cấu hình bản ghi DNS A/CNAME, kích hoạt chứng chỉ SSL miễn phí',
    effort: '30–60m',
    priceDisplay: '149.000đ',
    numericPrice: 149000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '13',
    code: 'FIX-CF',
    name: 'Cloudflare Setup',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Cấu hình Cloudflare DNS, bật SSL HTTPS, cài đặt bảo mật và route tăng tốc',
    effort: '30–60m',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '14',
    code: 'FIX-FORM',
    name: 'Form Website Integration',
    categoryGroup: 'website-fix',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Tích hợp form liên hệ đẩy dữ liệu tự động về Email / Google Sheets / Telegram',
    effort: '30–60m',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '15',
    code: 'FIX-AUDIT',
    name: 'Website Technical Audit',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Rà soát toàn bộ UI, luồng đặt hàng, lỗi mobile và báo cáo kỹ thuật',
    effort: '30–90m',
    priceDisplay: 'Miễn phí - 299.000đ',
    numericPrice: 0,
    unit: 'lần',
    isActive: true
  },

  // 3. GOOGLE, SEO, GEO & LOCAL (16 - 22)
  {
    id: '16',
    code: 'SEO-TECH',
    name: 'SEO Technical Setup',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Tối ưu Title, Meta Description, tạo Sitemap.xml, Robots.txt và Canonical URL chuẩn SEO',
    effort: '1–1.5h',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '17',
    code: 'SEO-SCHEMA',
    name: 'Schema / Structured Data',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Khai báo mã dữ liệu cấu trúc Schema (LocalBusiness, Product, ProfessionalService, FAQPage)',
    effort: '30–60m',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '18',
    code: 'SEO-GSC',
    name: 'Google Search Console Setup',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Xác minh Google Search Console, khai báo Sitemap và yêu cầu lập chỉ mục (Indexing)',
    effort: '~30m',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '19',
    code: 'SEO-GBP',
    name: 'Google Business Profile Setup',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Khởi tạo & chuẩn hóa trang Google Doanh Nghiệp (GBP), nhập giờ mở cửa & thông tin nhận diện',
    effort: '1h',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'lần',
    isActive: true,
    isPopular: true
  },
  {
    id: '20',
    code: 'SEO-MAPS',
    name: 'Google Maps Optimization',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Tối ưu danh mục dịch vụ, đăng ảnh sản phẩm chuẩn vị trí NAP, tạo link nhận đánh giá',
    effort: '1–2h',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '21',
    code: 'SEO-GEO',
    name: 'GEO / AI Search Optimization',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Cấu trúc lại thông tin Entity & Schema giúp thương hiệu xuất hiện khi người dùng tra cứu AI Search',
    effort: '1–3h',
    priceDisplay: '490.000đ',
    numericPrice: 490000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '22',
    code: 'SEO-MONTHLY',
    name: 'Local SEO Monthly',
    categoryGroup: 'google-seo',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Đồng hành duy trì thứ hạng Google Maps + viết bài chuẩn SEO địa phương hàng tháng',
    effort: '3–5h/tháng',
    priceDisplay: '990.000đ',
    numericPrice: 990000,
    unit: 'tháng',
    isActive: true,
    isPopular: true
  },

  // 4. ANALYTICS, TRACKING & ADS INFRASTRUCTURE (23 - 27)
  {
    id: '23',
    code: 'TRACK-GA4',
    name: 'Google Analytics 4 Setup',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Khởi tạo tài khoản GA4 Property và nhúng mã theo dõi toàn bộ lưu lượng truy cập website',
    effort: '~30m',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '24',
    code: 'TRACK-GTM',
    name: 'Google Tag Manager Setup',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Tạo container GTM và nhúng thẻ quản lý quảng cáo/tracking tập trung',
    effort: '~30m',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '25',
    code: 'TRACK-CONVERSION',
    name: 'Conversion Tracking Setup',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Cài đặt theo dõi hành vi chuyển đổi: Lượt bấm gọi điện, nút Zalo, form đăng ký, bấm đặt bàn',
    effort: '30–60m',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '26',
    code: 'TRACK-PIXEL',
    name: 'Meta Pixel Setup',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Cài đặt Facebook Meta Pixel & nhúng các sự kiện theo dõi cơ bản',
    effort: '30–60m',
    priceDisplay: '149.000đ',
    numericPrice: 149000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '27',
    code: 'TRACK-PACK',
    name: 'Full Ads Tracking Pack',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Combo hoàn chỉnh: GA4 + GTM + Google Ads Conversion + Meta Pixel + Bảng đo lường lead',
    effort: '1–2h',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'lần',
    isActive: true,
    isPopular: true
  },

  // 5. ADS & CONVERSION (28 - 31)
  {
    id: '28',
    code: 'ADS-GADS',
    name: 'Google Ads Initial Setup',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Khởi tạo tài khoản quảng cáo, cài đặt 01 chiến dịch Google Tìm Kiếm (Search), mẫu chữ & từ khóa',
    effort: '1–2h',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '29',
    code: 'ADS-META',
    name: 'Meta Ads Initial Setup',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Thiết lập tài khoản quảng cáo Facebook/Instagram, tập đối tượng mục tiêu & kiểm tra Pixel',
    effort: '1–2h',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '30',
    code: 'ADS-MGMT-LITE',
    name: 'Ads Management Lite',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Theo dõi & điều chỉnh thông số chiến dịch quảng cáo quy mô nhỏ hàng tháng (chưa gồm ngân sách chạy)',
    effort: '2–3h/tháng',
    priceDisplay: '690.000đ',
    numericPrice: 690000,
    unit: 'tháng',
    isActive: true
  },
  {
    id: '31',
    code: 'ADS-CRO',
    name: 'Landing Page CRO Audit',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Đánh giá giao diện UX, vị trí CTA, các yếu tố uy tín và đề xuất tối ưu tỷ lệ chuyển đổi',
    effort: '1h',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'lần',
    isActive: true
  },

  // 6. CRM, BOOKING & AUTOMATION (32 - 36)
  {
    id: '32',
    code: 'AUTO-CRM-SHEETS',
    name: 'Google Sheets Mini CRM',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Form đăng ký tự động đẩy dữ liệu khách về Google Sheets, phân loại trạng thái tư vấn',
    effort: '1–2h',
    priceDisplay: '490.000đ',
    numericPrice: 490000,
    unit: 'lần',
    isActive: true,
    isPopular: true
  },
  {
    id: '33',
    code: 'AUTO-BOOKING',
    name: 'Booking System Mini',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Hệ thống đặt lịch hẹn chọn giờ trực tuyến, lưu cơ sở dữ liệu và tự động báo về email/Zalo',
    effort: '2–3h',
    priceDisplay: '690.000đ',
    numericPrice: 690000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '34',
    code: 'AUTO-TELEGRAM',
    name: 'Telegram Business Notification',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Mỗi khi có khách điền form / đặt hàng trên web, nhận ngay tin nhắn thông báo vào Telegram',
    effort: '30–60m',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '35',
    code: 'AUTO-WORKFLOW',
    name: 'Automated Follow-up Workflow',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Quy trình nhắc lịch tự động, gửi email/tin nhắn chăm sóc khách sau đăng ký',
    effort: '2–4h',
    priceDisplay: '690.000đ+',
    numericPrice: 690000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '36',
    code: 'AUTO-DASHBOARD',
    name: 'Mini CRM + Dashboard',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Trang Dashboard quản lý danh sách lead, theo dõi doanh thu và báo cáo tổng quan trực quan',
    effort: '4–6h',
    priceDisplay: '1.490.000đ+',
    numericPrice: 1490000,
    unit: 'lần',
    isActive: true
  },

  // 7. AI & CUSTOM SOFTWARE (37 - 39)
  {
    id: '37',
    code: 'AI-FAQ-BOT',
    name: 'AI FAQ / Lead Chatbot',
    categoryGroup: 'ai-software',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Kịch bản Chatbot AI tự động trả lời thắc mắc ngành nghề 24/7 và thu thập số điện thoại khách',
    effort: '3–5h',
    priceDisplay: '990.000đ+',
    numericPrice: 990000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '38',
    code: 'AI-RECEPT',
    name: 'AI Receptionist Assistant',
    categoryGroup: 'ai-software',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Trợ lý AI phân loại nhu cầu khách hàng, xác nhận thời gian rảnh và đẩy lịch hẹn vào CRM',
    effort: '5–8h',
    priceDisplay: '1.990.000đ+',
    numericPrice: 1990000,
    unit: 'lần',
    isActive: true
  },
  {
    id: '39',
    code: 'SW-CUSTOM',
    name: 'Phần Mềm Quản Lý Theo Yêu Cầu',
    categoryGroup: 'ai-software',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Lập trình ứng dụng quản lý nghiệp vụ riêng (Dashboard, CSDL, Phân quyền, Báo cáo chuyên sâu)',
    effort: 'Dự án',
    priceDisplay: 'từ 3.900.000đ',
    numericPrice: 3900000,
    unit: 'dự án',
    isActive: true
  },

  // 8. RECURRING DIGITAL OPERATIONS (#40)
  {
    id: '40',
    code: 'CARE-ALL',
    name: 'LocalMate Digital Care',
    categoryGroup: 'digital-care',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Gói chăm sóc & đồng hành số định kỳ hàng tháng (Modular Care 290k - 1.49m/tháng)',
    effort: 'Hàng tháng',
    priceDisplay: '290.000đ/tháng+',
    numericPrice: 290000,
    unit: 'tháng',
    isActive: true,
    isPopular: true
  }
];
