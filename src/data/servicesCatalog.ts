export interface CatalogServiceItem {
  id: string; // 01 to 41
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
  includedFreeAddons?: string[];
  disclaimer?: string;
}

export type TechCategoryKey =
  | 'website-landing'
  | 'website-fix'
  | 'google-seo'
  | 'analytics-tracking'
  | 'ads-conversion'
  | 'crm-automation'
  | 'ai-software'
  | 'legal-compliance'
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
    title: 'Website & Bán Hàng',
    description: 'Thiết kế trang giới thiệu, landing page bán hàng và website doanh nghiệp chuẩn di động.',
    badge: '8 dịch vụ'
  },
  {
    key: 'website-fix',
    title: 'Sửa Nhanh Từ 99k',
    description: 'Sửa lỗi nhỏ 99k, tăng tốc web 299k, sửa giao diện điện thoại 149k, trỏ tên miền và cài SSL.',
    badge: '7 dịch vụ'
  },
  {
    key: 'google-seo',
    title: 'Google Maps & Local SEO',
    description: 'Tạo vị trí Google Maps 299k, tối ưu lên top tìm kiếm gần, tạo mã QR đánh giá 5 sao.',
    badge: '7 dịch vụ'
  },
  {
    key: 'ads-conversion',
    title: 'Quảng Cáo Google & Facebook',
    description: 'Khởi tạo chiến dịch Google Ads, Facebook Ads từ 390k và tối ưu tỷ lệ khách gọi.',
    badge: '4 dịch vụ'
  },
  {
    key: 'analytics-tracking',
    title: 'Đo Lường & Cài Đặt Mã',
    description: 'Cài đặt Google Analytics 99k, đo lượt bấm gọi/Zalo 199k, gắn mã Pixel Facebook.',
    badge: '5 dịch vụ'
  },
  {
    key: 'crm-automation',
    title: 'Tự Động Hóa & Báo Đơn',
    description: 'Báo đơn về Telegram 299k, đặt lịch hẹn online 690k và lưu khách vào Google Sheets.',
    badge: '5 dịch vụ'
  },
  {
    key: 'ai-software',
    title: 'Phần Mềm & Trợ Lý AI',
    description: 'Chatbot AI trả lời tự động 24/7, phần mềm quản lý nội bộ theo yêu cầu riêng.',
    badge: '3 dịch vụ'
  },
  {
    key: 'legal-compliance',
    title: 'Pháp Lý Bộ Công Thương',
    description: 'Bộ 4 trang chính sách chuẩn, hỗ trợ thủ tục khai báo và gắn huy hiệu Bộ Công Thương.',
    badge: '5 dịch vụ'
  },
  {
    key: 'digital-care',
    title: 'Chăm Sóc Hàng Tháng',
    description: 'Gói đồng hành bảo trì, cập nhật nội dung và tối ưu thứ hạng website định kỳ.',
    badge: 'Gói tháng'
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
    description: 'Cài đặt GA4 99k, GTM 99k, Meta Pixel 149k và đo lường từng lượt gọi, form đăng ký.',
    iconName: 'BarChart2',
    featuredServiceIds: ['23', '24', '25', '26', '27']
  },
  {
    key: 'do-lam-thu-cong',
    title: '4. Đỡ phải làm thủ công',
    question: 'Tôi muốn tự động hóa quản lý khách và lịch hẹn',
    startingPrice: 'Từ 299.000đ',
    description: 'Tự động gửi thông báo đơn về Telegram 299k, form đặt lịch hẹn 24/7 và chatbot tư vấn trả lời khách.',
    iconName: 'Cpu',
    featuredServiceIds: ['32', '33', '34', '35', '37']
  },
  {
    key: 'van-hanh-lau-dai',
    title: '5. Vận hành lâu dài & Pháp lý BCT',
    question: 'Tôi cần chăm sóc website & hoàn thiện thủ tục pháp lý BCT',
    startingPrice: 'Từ 290.000đ/tháng',
    description: 'Gói chăm sóc website, bảo trì kỹ thuật và hỗ trợ thủ tục thông báo website với Bộ Công Thương.',
    iconName: 'ShieldCheck',
    featuredServiceIds: ['40', '41a', '41b', '41c', '41d', '41e']
  }
];

export const DIGITAL_CARE_TIERS: DigitalCareTier[] = [
  {
    id: 'care-mini',
    name: 'Care Mini',
    priceDisplay: '290.000đ',
    unit: 'tháng',
    description: 'Dành cho website nhỏ cần giám sát hoạt động và bảo trì cơ bản.',
    tasksQuota: '2 thay đổi nhỏ / tháng',
    features: [
      'Giám sát website hoạt động 24/7',
      'Sao lưu (Backup) dữ liệu định kỳ',
      'Hỗ trợ sửa 02 lỗi/thay đổi nhỏ',
      'Hỗ trợ kỹ thuật nhanh qua Zalo'
    ]
  },
  {
    id: 'care-business',
    name: 'Care Business',
    priceDisplay: '590.000đ',
    unit: 'tháng',
    badge: 'Phổ biến nhất ⭐',
    isRecommended: true,
    description: 'Dành cho doanh nghiệp cần cập nhật nội dung và tối ưu hiện diện Google Maps.',
    tasksQuota: '4 task nhỏ / tháng',
    features: [
      'Toàn bộ quyền lợi gói Care Mini',
      'Cập nhật sản phẩm / bài viết mới',
      'Chăm sóc Google Maps định kỳ',
      'Kiểm tra hệ thống form & nút gọi',
      'Hỗ trợ 04 việc nội dung/kỹ thuật'
    ]
  },
  {
    id: 'care-growth',
    name: 'Care Growth',
    priceDisplay: '990.000đ',
    unit: 'tháng',
    description: 'Dành cho cửa hàng/công ty muốn tăng trưởng lượt tìm kiếm Local SEO.',
    tasksQuota: '6 - 8 task / tháng',
    features: [
      'Toàn bộ quyền lợi gói Care Business',
      'Local SEO & Tối ưu Google Maps',
      'Tối ưu tỷ lệ chuyển đổi nút bấm',
      'Biên tập 04 bài viết chuẩn SEO',
      'Báo cáo hiệu quả & lượt gọi hàng tháng'
    ]
  },
  {
    id: 'digital-partner',
    name: 'Digital Partner',
    priceDisplay: '1.490.000đ',
    unit: 'tháng',
    badge: 'Đồng hành toàn diện',
    description: 'Thay thế phòng Marketing/IT thuê ngoài trọn gói cho doanh nghiệp nhỏ.',
    tasksQuota: 'Ưu tiên hỗ trợ không giới hạn việc nhỏ',
    features: [
      'Toàn bộ quyền lợi gói Care Growth',
      'Xử lý ưu tiên trong 2-4 giờ làm việc',
      'Tối ưu chiến dịch quảng cáo & theo dõi',
      'Tư vấn tự động hóa quy trình khách hàng',
      'Báo cáo chiến lược định kỳ 1:1'
    ]
  }
];

export const INITIAL_SERVICES_CATALOG: CatalogServiceItem[] = [
  // 1. WEBSITE & LANDING PAGE (01 - 08)
  {
    id: '01',
    code: 'WEB-STARTER',
    name: 'Website 1 Trang Bán Hàng (Gói Khởi Đầu)',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Gồm 4–5 phần chuẩn: Giới thiệu, bảng giá dịch vụ, hình ảnh, nút bấm gọi điện & chat Zalo ngay.',
    effort: '1–2 ngày',
    priceDisplay: '490.000đ',
    numericPrice: 490000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '02',
    code: 'WEB-BIZ',
    name: 'Website Giới Thiệu Doanh Nghiệp & Dịch Vụ',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Gồm 6–8 phần đầy đủ: Giới thiệu, bảng giá chi tiết, form tư vấn, bản đồ chỉ đường Google Maps & chuẩn SEO.',
    effort: '2–3 ngày',
    priceDisplay: '790.000đ',
    numericPrice: 790000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '03',
    code: 'WEB-CRO',
    name: 'Website Tối Ưu Tỷ Lệ Chuyển Đổi (CRO)',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Trang bán hàng chuyên sâu + gắn mã theo dõi chuyển đổi + tối ưu nút bấm kêu gọi hành động để tăng khách gọi.',
    effort: '2–3 ngày',
    priceDisplay: '990.000đ',
    numericPrice: 990000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '04',
    code: 'WEB-1PAGE',
    name: 'Website Công Ty 1 Trang Hoàn Chỉnh',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Trang chủ công ty 8–10 phần: Giới thiệu năng lực, quy trình làm việc, dự án tiêu biểu, bảng giá & liên hệ.',
    effort: '3–4 ngày',
    priceDisplay: '1.290.000đ',
    numericPrice: 1290000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '05',
    code: 'WEB-MULTIPAGE',
    name: 'Website Doanh Nghiệp Nhiều Trang (3–5 Trang)',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Trang chủ, Giới thiệu, Từng trang dịch vụ riêng, Tin tức/Blog, Liên hệ. TẶNG KÈM bộ cài đặt SEO & đo lường 496k.',
    effort: '4–6 ngày',
    priceDisplay: '1.990.000đ',
    numericPrice: 1990000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true,
    includedFreeAddons: ['Cài đặt GA4 (99k)', 'Cài đặt GTM (99k)', 'Xác minh Google Search (99k)', 'Khai báo Schema (199k)']
  },
  {
    id: '06',
    code: 'WEB-FNB',
    name: 'Website Quán Ăn, Nhà Hàng & Spa',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Menu điện tử hình ảnh đẹp, form đặt bàn/đặt hẹn trực tuyến, chỉ đường Google Maps, hotline & góc ảnh không gian.',
    effort: '3–5 ngày',
    priceDisplay: '2.490.000đ',
    numericPrice: 2490000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '07',
    code: 'WEB-ECOM',
    name: 'Website Danh Mục & Bán Hàng Online',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Trưng bày catalogue sản phẩm, bộ lọc danh mục, trang chi tiết sản phẩm, giỏ hàng & đặt hàng nhanh qua Zalo.',
    effort: '5–7 ngày',
    priceDisplay: '3.490.000đ',
    numericPrice: 3490000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '08',
    code: 'WEB-LAUNCH',
    name: 'Gói Khởi Tạo Số Trọn Gói (Website + Maps + Ads)',
    categoryGroup: 'website-landing',
    goalGroup: 'bat-dau-online',
    scope: 'Trọn gói chìa khóa trao tay: Website Doanh nghiệp + Tạo Google Maps chuẩn + Bộ đo lường Ads + SEO cơ bản.',
    effort: '5–7 ngày',
    priceDisplay: '2.490.000đ',
    numericPrice: 2490000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },

  // 2. SỬA NHANH TỪ 99K (09 - 15)
  {
    id: '09',
    code: 'FIX-BUG',
    name: 'Sửa Lỗi Giao Diện / Lỗi Nhỏ Website',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Sửa nút bấm bị liệt, đổi giá/menu, thay banner, sửa lỗi hiển thị chữ, sửa form không gửi được tin.',
    effort: '15–30 phút',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '10',
    code: 'FIX-MOBILE',
    name: 'Sửa Lỗi Vỡ Giao Diện Trên Điện Thoại',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Khắc phục lỗi trang web bị tràn mép, chữ quá nhỏ, nút bấm khó chạm trên iPhone / Android / iPad.',
    effort: '30–60 phút',
    priceDisplay: '149.000đ',
    numericPrice: 149000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '11',
    code: 'FIX-SPEED',
    name: 'Tăng Tốc Độ Tải Trang Web',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Nén hình ảnh dung lượng nhẹ, dọn dẹp mã nguồn thừa, giúp website mở tức thì dưới 2 giây trên điện thoại.',
    effort: '1–2 giờ',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '12',
    code: 'FIX-DNS',
    name: 'Trỏ Tên Miền & Cài Đặt Khóa Bảo Mật SSL',
    categoryGroup: 'website-fix',
    goalGroup: 'bat-dau-online',
    scope: 'Kết nối tên miền .vn/.com vào hosting/website, bật ổ khóa bảo mật HTTPS (SSL) miễn phí trọn đời.',
    effort: '30–45 phút',
    priceDisplay: '149.000đ',
    numericPrice: 149000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '13',
    code: 'FIX-CF',
    name: 'Cài Đặt Cloudflare Tăng Tốc & Chống Hack',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Cấu hình Cloudflare DNS miễn phí, kích hoạt lớp tường lửa bảo vệ website và tăng tốc độ truy cập.',
    effort: '30–60 phút',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '14',
    code: 'FIX-FORM',
    name: 'Tích Hợp Form Đặt Bàn / Liên Hệ Tự Động',
    categoryGroup: 'website-fix',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Tạo form để khách điền thông tin, dữ liệu tự động gửi ngay về Email, Google Sheets hoặc Telegram của bạn.',
    effort: '30–60 phút',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '15',
    code: 'FIX-AUDIT',
    name: 'Kiểm Tra & Đánh Giá Toàn Diện Website',
    categoryGroup: 'website-fix',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Rà soát toàn bộ tốc độ, lỗi hiển thị mobile, nút gọi, tính năng đặt hàng và gửi báo cáo chi tiết kèm giải pháp.',
    effort: '30–60 phút',
    priceDisplay: 'Miễn phí',
    numericPrice: 0,
    unit: 'trọn gói',
    isActive: true
  },

  // 3. GOOGLE MAPS & LOCAL SEO (16 - 22)
  {
    id: '16',
    code: 'SEO-TECH',
    name: 'Cài Đặt SEO Kỹ Thuật Chuẩn Google',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Tối ưu tiêu đề, mô tả tìm kiếm, tạo sitemap.xml, khai báo robots.txt giúp Google nhanh chóng tìm thấy web.',
    effort: '1–2 giờ',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '17',
    code: 'SEO-SCHEMA',
    name: 'Khai Báo Dữ Liệu Doanh Nghiệp (Schema)',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Khai báo mã dữ liệu chuẩn giúp Google hiển thị địa chỉ, giờ mở cửa, số điện thoại và đánh giá sao trên kết quả tìm kiếm.',
    effort: '30–60 phút',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '18',
    code: 'SEO-GSC',
    name: 'Xác Minh Website Trên Google Search Console',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Khai báo quyền sở hữu website với Google, gửi sơ đồ trang web và yêu cầu Google lập chỉ mục các bài viết.',
    effort: '30 phút',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '19',
    code: 'SEO-GBP',
    name: 'Tạo Mới & Đưa Địa Điểm Lên Google Maps',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Tạo trang doanh nghiệp trên Google Maps, điền đầy đủ số điện thoại, giờ mở cửa, địa chỉ chuẩn xác và đăng ảnh đại diện.',
    effort: '1–2 giờ',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '20',
    code: 'SEO-MAPS',
    name: 'Tối Ưu & Tăng Đánh Giá Google Maps',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Tối ưu danh mục ngành nghề, gắn từ khóa tìm kiếm, đăng ảnh sản phẩm chuẩn vị trí và tạo link rút gọn xin đánh giá 5 sao.',
    effort: '1–2 giờ',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '21',
    code: 'SEO-GEO',
    name: 'Tối Ưu Hiển Thị Trên AI (ChatGPT / Gemini)',
    categoryGroup: 'google-seo',
    goalGroup: 'co-them-khach',
    scope: 'Cấu trúc thông tin thương hiệu để các công cụ AI (ChatGPT, Google AI, Gemini) nhận diện và gợi ý quán của bạn khi khách hỏi.',
    effort: '1–3 giờ',
    priceDisplay: '490.000đ',
    numericPrice: 490000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '22',
    code: 'SEO-MONTHLY',
    name: 'Duy Trì Top Tìm Kiếm Google Maps Hàng Tháng',
    categoryGroup: 'google-seo',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Đăng bài cập nhật, thêm ảnh sản phẩm định kỳ, tối ưu từ khóa và hỗ trợ phản hồi đánh giá để giữ vị trí top đầu khu vực.',
    effort: 'Hàng tháng',
    priceDisplay: '990.000đ',
    numericPrice: 990000,
    unit: 'tháng',
    isActive: true,
    isPopular: true
  },

  // 4. ĐO LƯỜNG & THEO DÕI (23 - 27)
  {
    id: '23',
    code: 'TRACK-GA4',
    name: 'Cài Đặt Thống Kê Khách Vào Web (GA4)',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Cài đặt Google Analytics 4 để xem mỗi ngày có bao nhiêu người vào web, họ ở tỉnh thành nào và xem trang nào nhiều nhất.',
    effort: '30 phút',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '24',
    code: 'TRACK-GTM',
    name: 'Cài Trình Quản Lý Thẻ (Google Tag Manager)',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Cài đặt Google Tag Manager giúp gắn các mã quảng cáo (Facebook, Google, TikTok) dễ dàng mà không cần sửa code web.',
    effort: '30 phút',
    priceDisplay: '99.000đ',
    numericPrice: 99000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '25',
    code: 'TRACK-CONVERSION',
    name: 'Đo Lường Lượt Bấm Gọi & Nhắn Tin Zalo',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Gắn mã theo dõi chính xác có bao nhiêu khách bấm nút Gọi, nút Zalo, điền form hoặc bấm xem bản đồ chỉ đường.',
    effort: '30–60 phút',
    priceDisplay: '199.000đ',
    numericPrice: 199000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '26',
    code: 'TRACK-PIXEL',
    name: 'Gắn Mã Theo Dõi Facebook (Meta Pixel)',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Cài đặt mã Facebook Pixel trên web để lưu lại những người đã xem sản phẩm và phục vụ chạy quảng cáo bám đuổi (Remarketing).',
    effort: '30–60 phút',
    priceDisplay: '149.000đ',
    numericPrice: 149000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '27',
    code: 'TRACK-PACK',
    name: 'Trọn Gói Cài Đặt Đo Lường Toàn Diện',
    categoryGroup: 'analytics-tracking',
    goalGroup: 'biet-khach-tu-dau',
    scope: 'Combo hoàn chỉnh: Cài GA4 + GTM + Đo nút gọi Zalo + Gắn Pixel Facebook + Bảng theo dõi số lượng khách liên hệ.',
    effort: '1–2 giờ',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },

  // 5. QUẢNG CÁO GOOGLE & FACEBOOK (28 - 31)
  {
    id: '28',
    code: 'ADS-GADS',
    name: 'Khởi Tạo Quảng Cáo Google Tìm Kiếm (Google Ads)',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Tạo tài khoản chính chủ, chọn lọc từ khóa đúng người đang cần mua, viết mẫu quảng cáo hấp dẫn và cài đặt ngân sách phù hợp.',
    effort: '1–2 ngày',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '29',
    code: 'ADS-META',
    name: 'Khởi Tạo Quảng Cáo Facebook Nhắn Tin',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Thiết lập chiến dịch quảng cáo nhắn tin Fanpage, nhắm đúng khách hàng theo khu vực quận/huyện và độ tuổi mục tiêu.',
    effort: '1–2 ngày',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '30',
    code: 'ADS-MGMT-LITE',
    name: 'Chăm Sóc & Tối Ưu Quảng Cáo Hàng Tháng',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Theo dõi chi tiêu hàng tuần, loại trừ các từ khóa tìm kiếm rác lãng phí tiền và tối ưu giá thầu để nhận nhiều cuộc gọi nhất.',
    effort: 'Hàng tháng',
    priceDisplay: '690.000đ',
    numericPrice: 690000,
    unit: 'tháng',
    isActive: true
  },
  {
    id: '31',
    code: 'ADS-CRO',
    name: 'Đánh Giá & Tối Ưu Nút Bấm Chuyển Đổi',
    categoryGroup: 'ads-conversion',
    goalGroup: 'co-them-khach',
    scope: 'Rà soát xem tại sao khách vào web mà không bấm gọi, sắp xếp lại vị trí bảng giá, số điện thoại để tăng số người liên hệ.',
    effort: '1 giờ',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'trọn gói',
    isActive: true
  },

  // 6. TỰ ĐỘNG HÓA & CRM (32 - 36)
  {
    id: '32',
    code: 'AUTO-CRM-SHEETS',
    name: 'Tự Động Đẩy Thông Tin Khách Về Google Sheets',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Mỗi khi có khách điền form, toàn bộ tên, SĐT và nhu cầu tự động điền vào 1 bảng tính Google Sheets để bạn dễ gọi điện tư vấn.',
    effort: '1–2 giờ',
    priceDisplay: '490.000đ',
    numericPrice: 490000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '33',
    code: 'AUTO-BOOKING',
    name: 'Hệ Thống Đặt Lịch Hẹn / Đặt Bàn Tự Động',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Khách hàng tự chọn ngày, giờ và dịch vụ trực tiếp trên web, hệ thống tự động khóa lịch trùng và gửi thông báo cho chủ tiệm.',
    effort: '1–2 ngày',
    priceDisplay: '690.000đ',
    numericPrice: 690000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '34',
    code: 'AUTO-TELEGRAM',
    name: 'Báo Tin Nhắn Khách Đặt Hàng Về Telegram',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Có khách gửi yêu cầu là điện thoại của bạn reng chuông Telegram báo ngay lập tức, không lo bị bỏ sót khách hàng.',
    effort: '30–60 phút',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '35',
    code: 'AUTO-WORKFLOW',
    name: 'Tự Động Gửi Tin Nhắn / Email Xác Nhận',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Tự động gửi tin nhắn cảm ơn hoặc email xác nhận lịch hẹn cho khách ngay sau khi khách bấm đăng ký trên website.',
    effort: '1–2 ngày',
    priceDisplay: '690.000đ',
    numericPrice: 690000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '36',
    code: 'AUTO-DASHBOARD',
    name: 'Bảng Điều Khiển Quản Lý Khách Hàng',
    categoryGroup: 'crm-automation',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Trang quản lý riêng giúp bạn xem danh sách khách, phân loại trạng thái đã gọi/chưa gọi và thống kê doanh thu trực quan.',
    effort: '2–3 ngày',
    priceDisplay: '1.490.000đ',
    numericPrice: 1490000,
    unit: 'trọn gói',
    isActive: true
  },

  // 7. PHẦN MỀM & AI (37 - 39)
  {
    id: '37',
    code: 'AI-FAQ-BOT',
    name: 'Chatbot AI Tư Vấn & Lấy Số Điện Thoại 24/7',
    categoryGroup: 'ai-software',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Trợ lý AI tự động trả lời giá cả, địa chỉ, giải đáp câu hỏi thường gặp của khách 24/7 và xin số điện thoại để bạn gọi lại.',
    effort: '2–3 ngày',
    priceDisplay: '990.000đ',
    numericPrice: 990000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '38',
    code: 'AI-RECEPT',
    name: 'Trợ Lý AI Tiếp Nhận & Sắp Xếp Lịch Hẹn',
    categoryGroup: 'ai-software',
    goalGroup: 'do-lam-thu-cong',
    scope: 'AI thông minh tự động hỏi giờ rảnh của khách, xác nhận dịch vụ cần làm và sắp xếp lịch vào hệ thống quản lý.',
    effort: '3–5 ngày',
    priceDisplay: '1.990.000đ',
    numericPrice: 1990000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '39',
    code: 'SW-CUSTOM',
    name: 'Lập Trình Phần Mềm / Web App Theo Yêu Cầu',
    categoryGroup: 'ai-software',
    goalGroup: 'do-lam-thu-cong',
    scope: 'Thiết kế và lập trình phần mềm quản lý nội bộ, tính năng tra cứu đặc thù hoặc ứng dụng web theo đúng quy trình riêng của bạn.',
    effort: 'Theo dự án',
    priceDisplay: 'Từ 3.900.000đ',
    numericPrice: 3900000,
    unit: 'trọn gói',
    isActive: true
  },

  // 8. PHÁP LÝ & BỘ CÔNG THƯƠNG (41a - 41e)
  {
    id: '41a',
    code: 'COMP-CHECK',
    name: 'Kiểm Tra Tiêu Chuẩn Pháp Lý Website',
    categoryGroup: 'legal-compliance',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Kiểm tra thông tin pháp nhân, mã số thuế và các quy định bắt buộc trước khi nộp hồ sơ lên Cổng thông tin Bộ Công Thương.',
    effort: '30 phút',
    priceDisplay: 'Miễn phí',
    numericPrice: 0,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '41b',
    code: 'COMP-FOOTER',
    name: 'Chuẩn Hóa Thông Tin Pháp Lý Chân Trang (Footer)',
    categoryGroup: 'legal-compliance',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Cập nhật chân trang đúng quy định pháp luật: Tên công ty/hộ kinh doanh, mã số thuế, địa chỉ trụ sở, người đại diện & hotline.',
    effort: '30–60 phút',
    priceDisplay: '149.000đ',
    numericPrice: 149000,
    unit: 'trọn gói',
    isActive: true
  },
  {
    id: '41c',
    code: 'COMP-POLICY',
    name: 'Bộ 4 Trang Chính Sách Pháp Lý Chuẩn Mực',
    categoryGroup: 'legal-compliance',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Tạo 4 trang chuẩn: Chính sách bảo mật dữ liệu, Điều khoản dịch vụ, Chính sách thanh toán và Chính sách bảo hành/đổi trả.',
    effort: '1–2 giờ',
    priceDisplay: '299.000đ',
    numericPrice: 299000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true
  },
  {
    id: '41d',
    code: 'COMP-BCT-SUPP',
    name: 'Hỗ Trợ Thủ Tục Thông Báo Website Bộ Công Thương',
    categoryGroup: 'legal-compliance',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Checklist hồ sơ, chuẩn hóa website, hướng dẫn thao tác khai báo online.gov.vn & kiểm tra trước khi gửi',
    effort: '1–2h',
    priceDisplay: '390.000đ',
    numericPrice: 390000,
    unit: 'trọn gói',
    isActive: true,
    disclaimer: 'LocalMate hỗ trợ hoàn thiện kỹ thuật & thủ tục khai báo trực tuyến trên online.gov.vn'
  },
  {
    id: '41e',
    code: 'COMP-BCT-PACK',
    name: 'Trọn Gói Website Compliance & BCT Pack',
    categoryGroup: 'legal-compliance',
    goalGroup: 'van-hanh-lau-dai',
    scope: 'Combo trọn gói: Audit BCT + Bộ 4 trang chính sách + Compliance Footer + Hỗ trợ khai báo BCT + Gắn logo/link xác nhận sau khi duyệt',
    effort: '2–3h',
    priceDisplay: '590.000đ',
    numericPrice: 590000,
    unit: 'trọn gói',
    isActive: true,
    isPopular: true,
    disclaimer: 'Bao gồm hỗ trợ điều chỉnh kỹ thuật hồ sơ theo yêu cầu Bộ Công Thương & gắn mốc xác nhận sau cấp phép'
  },

  // 9. RECURRING DIGITAL OPERATIONS (#40)
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
