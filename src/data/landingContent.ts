export interface PackageItem {
  category: string;
  title?: string;
  items: string[];
}

export interface ServiceGroup {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  services: string[];
  startingPrice: string;
  slug: string;
}

export interface IndustrySolution {
  id: string;
  title: string;
  badge: string;
  description: string;
  keyFeatures: string[];
  recommendedPackage: string;
  slug: string;
  color: string;
}

export const CONTACT_INFO = {
  phoneDisplay: '0988.358.xxx / Zalo 24/7',
  phone: '0988.358.xxx / Zalo 24/7',
  phoneRaw: '0988358xxx',
  zaloUrl: 'https://zalo.me/',
  mailtoUrl: 'mailto:hotro@localmate.vn',
  email: 'hotro@localmate.vn',
  address: 'Hồ Chí Minh & Toàn quốc (Hỗ trợ Online 24/7)'
};

export const NAV_LINKS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Giải pháp', href: '/giai-phap' },
  { label: 'Dự án', href: '/du-an' },
  { label: 'Bảng giá', href: '/bang-gia' },
  { label: 'Kiến thức', href: '/kien-thuc' },
  { label: 'Về LocalMate', href: '/gioi-thieu' },
];

export const PAIN_POINTS = [
  {
    number: '01',
    title: 'Không biết bắt đầu từ đâu',
    desc: 'Có Facebook nhưng chưa rõ phải làm website, nội dung hay quảng cáo trước.'
  },
  {
    number: '02',
    title: 'Không có thời gian tự làm',
    desc: 'Ban ngày làm nghề, ban đêm xử lý khách, không thể học thêm công nghệ.'
  },
  {
    number: '03',
    title: 'Thuê ngoài khó kiểm soát',
    desc: 'Báo giá mơ hồ, phát sinh nhiều, không biết mình đang trả tiền cho gì.'
  },
  {
    number: '04',
    title: 'Khách hàng ngày càng ở online',
    desc: 'Nếu không xuất hiện đúng lúc, khách sẽ chọn đơn vị khác dễ tìm thấy hơn.'
  }
];

export const SOLUTION_STEPS = [
  {
    step: '01',
    title: 'Chuẩn hóa',
    subtitle: 'Xây nền móng rõ ràng',
    items: ['Thương hiệu', 'Dịch vụ & Bảng giá', 'Thông tin liên hệ', 'Hình ảnh sản phẩm', 'Điểm khác biệt']
  },
  {
    step: '02',
    title: 'Số hóa',
    subtitle: 'Thiết lập điểm chạm online',
    items: ['Website chuẩn SEO', 'Facebook & TikTok', 'Google Maps địa phương', 'Form & Chatbot tự động']
  },
  {
    step: '03',
    title: 'Đồng hành',
    subtitle: 'Duy trì & tăng trưởng',
    items: ['Viết & đăng bài đều', 'Cập nhật sản phẩm', 'Quay dựng nội dung', 'Quảng cáo & SEO']
  }
];

export const BEFORE_AFTER = {
  before: [
    'Khách chỉ đến từ người quen hoặc truyền miệng.',
    'Thông tin sản phẩm nằm rời rạc trong Zalo.',
    'Không có nơi xem bảng giá minh bạch.',
    'Không rõ ai phụ trách làm nội dung.',
    'Website cũ lỗi thời hoặc chưa từng có.',
    'Chủ doanh nghiệp phải tự làm tất cả.'
  ],
  after: [
    'Có website giới thiệu sản phẩm rõ ràng, chuyên nghiệp.',
    'Nút gọi, nhắn Zalo, đặt lịch hiển thị ngay lập tức.',
    'Nội dung hình ảnh & bài viết được cập nhật đều đặn.',
    'Chủ doanh nghiệp làm chủ toàn bộ tài khoản & dữ liệu.',
    'Có người đồng hành hỗ trợ kỹ thuật khi cần.'
  ]
};

export const STARTER_PACKAGE = {
  name: 'Gói Khởi Tạo Hiện Diện Số',
  title: 'Gói Khởi Tạo Hiện Diện Số',
  subtitle: 'Xây dựng nền móng xuất hiện uy tín trên internet cho người mới bắt đầu',
  price: '2.900.000',
  unit: 'đ / một lần',
  badge: 'Phổ biến nhất cho người mới bắt đầu',
  timeline: '7–10 ngày làm việc',
  revisions: 'Chỉnh sửa không giới hạn trong scope',
  description: 'Dành cho hộ kinh doanh, nhà thầu, người làm nghề muốn có sự hiện diện online đầy đủ, chuyên nghiệp mà không cần tốn nhiều chi phí hay thời gian.',
  deliverables: [
    '01 Website giới thiệu tinh gọn (Homepage + Sản phẩm/Dịch vụ + Liên hệ)',
    'Khởi tạo & tối ưu 03 kênh mạng xã hội (Facebook, Google Maps, TikTok)',
    'Biên tập 05 bài viết giới thiệu thương hiệu chuẩn nhận diện',
    'Tích hợp Chatbot tư vấn tự động & nút gọi/Zalo trên website',
    'Hướng dẫn tự cập nhật nội dung cơ bản sau khi bàn giao'
  ],
  commitments: [
    'Hoàn thành trong 07-10 ngày làm việc',
    'Bàn giao 100% quyền quản trị toàn bộ các kênh',
    'Không chi phí ẩn, báo giá trọn gói trước khi triển khai',
    'Hỗ trợ kỹ thuật 30 ngày sau bàn giao'
  ],
  groups: [
    {
      category: '1. Website & Điểm Chạm',
      title: '1. Website & Điểm Chạm',
      items: ['Thiết kế giao diện chuẩn di động', 'Tích hợp nút Zalo, Hotline, Google Maps']
    },
    {
      category: '2. Nội Dung & Hình Ảnh',
      title: '2. Nội Dung & Hình Ảnh',
      items: ['Biên tập 05 bài viết thương hiệu', 'Thiết kế banner nhận diện chuẩn']
    }
  ]
};

export const CONTENT_PACKAGE = {
  title: 'Gói Đồng Hành Nội Dung',
  subtitle: 'Duy trì thương hiệu số & cập nhật bài viết hàng tháng',
  price: '990.000',
  unit: 'đ / tháng',
  badge: 'Duy trì thương hiệu số đều đặn',
  description: 'Dành cho doanh nghiệp đã có kênh online nhưng không có thời gian viết bài, chăm sóc nội dung hàng tháng.',
  stats: [
    { value: '15+', label: 'Bài viết / tháng' },
    { value: '15+', label: 'Banner thiết kế' },
    { value: '02', label: 'Video ngắn Reels/TikTok' }
  ],
  deliverables: [
    '15 bài viết nội dung chăm sóc Fanpage & Website',
    '15 hình ảnh thiết kế banner/thương hiệu đi kèm',
    '02 video ngắn (Reels/TikTok) dựng từ tư liệu có sẵn',
    'Cập nhật thông tin sản phẩm/dịch vụ mới khi có yêu cầu',
    'Hỗ trợ kỹ thuật website & tối ưu chuẩn SEO địa phương'
  ],
  terms: [
    'Tối thiểu hợp đồng 03 tháng',
    'Nội dung duyệt trước theo tuần',
    'Bàn giao báo cáo hiệu quả cuối tháng'
  ]
};

export const SPECIALIZED_SERVICES = [
  {
    id: 'web-landing',
    title: 'Thiết Kế Website & Landing Page',
    desc: 'Xây dựng website giới thiệu thương hiệu, landing page bán hàng chuẩn di động, tối ưu tốc độ tải trang.',
    description: 'Xây dựng website giới thiệu thương hiệu, landing page bán hàng chuẩn di động, tối ưu tốc độ tải trang.',
    priceFrom: 'Từ 590.000đ',
    icon: 'Globe'
  },
  {
    id: 'fix-technical',
    title: 'Sửa Lỗi Website & Kỹ Thuật 99k',
    desc: 'Sửa lỗi giao diện 99k, tối ưu tốc độ 299k, trỏ tên miền DNS, cài SSL và tối ưu responsive di động.',
    description: 'Sửa lỗi giao diện 99k, tối ưu tốc độ 299k, trỏ tên miền DNS, cài SSL và tối ưu responsive di động.',
    priceFrom: 'Từ 99.000đ',
    icon: 'Wrench'
  },
  {
    id: 'google-maps',
    title: 'SEO & Google Maps Địa Phương',
    desc: 'Đưa địa chỉ doanh nghiệp lên Google Maps 299k, tối ưu từ khóa ngành và xác minh Google Business Profile.',
    description: 'Đưa địa chỉ doanh nghiệp lên Google Maps 299k, tối ưu từ khóa ngành và xác minh Google Business Profile.',
    priceFrom: 'Từ 199.000đ',
    icon: 'MapPin'
  },
  {
    id: 'analytics-tracking',
    title: 'Cài Đặt GA4, GTM & Tracking Ads',
    desc: 'Cài đặt mã GA4 99k, GTM 99k, Meta Pixel 149k và đo lường chính xác từng lượt bấm gọi/đặt hàng.',
    description: 'Cài đặt mã GA4 99k, GTM 99k, Meta Pixel 149k và đo lường chính xác từng lượt bấm gọi/đặt hàng.',
    priceFrom: 'Từ 99.000đ',
    icon: 'BarChart'
  },
  {
    id: 'crm-automation',
    title: 'Tự Động Hóa & CRM Doanh Nghiệp',
    desc: 'Tự động gửi thông báo đơn về Telegram 299k, form đặt lịch 690k và mini CRM lưu thông tin khách hàng.',
    description: 'Tự động gửi thông báo đơn về Telegram 299k, form đặt lịch 690k và mini CRM lưu thông tin khách hàng.',
    priceFrom: 'Từ 299.000đ',
    icon: 'Cpu'
  },
  {
    id: 'digital-care',
    title: 'Chăm Sóc Kỹ Thuật & Care Hàng Tháng',
    desc: 'Gói chăm sóc website, bảo trì sao lưu, cập nhật bài viết và hỗ trợ kỹ thuật ưu tiên hàng tháng.',
    description: 'Gói chăm sóc website, bảo trì sao lưu, cập nhật bài viết và hỗ trợ kỹ thuật ưu tiên hàng tháng.',
    priceFrom: 'Từ 290.000đ/tháng',
    icon: 'ShieldCheck'
  }
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'website-solution',
    title: 'Website & Landing Page Tinh Gọn',
    tagline: 'Mặt tiền thương hiệu chuyên nghiệp trên internet',
    iconName: 'Globe',
    description: 'Website không chỉ đẹp mà phải giúp khách hàng dễ tìm thấy, dễ bấm gọi và tin tưởng thương hiệu của bạn.',
    services: [
      'Landing Page Starter 590k (4-5 section)',
      'Landing Page Business 790k (6-8 section ⭐)',
      'Website Doanh Nghiệp 1 Trang 1.290k',
      'Website Doanh Nghiệp 3-5 Trang 1.990k (Tặng bộ Tech 496k)',
      'Website F&B / Nhà Hàng / Spa 2.490k',
      'Website Bán Hàng / Catalogue 3.490k'
    ],
    startingPrice: 'Từ 590.000đ',
    slug: 'website-tinh-gon'
  },
  {
    id: 'google-presence',
    title: 'SEO & Google Maps Địa Phương',
    tagline: 'Xuất hiện ngay khi khách hàng tìm kiếm quanh bạn',
    iconName: 'MapPin',
    description: 'Đưa doanh nghiệp xuất hiện trên Google Maps và tìm kiếm Google khi khách cần dịch vụ tại khu vực.',
    services: [
      'Xác minh & tạo Google Business Profile 299k',
      'Tối ưu Google Maps đưa vị trí lên Top 390k',
      'Tối ưu Technical SEO & Sitemap 299k',
      'Khai báo dữ liệu cấu trúc Schema 199k',
      'Local SEO & Đồng hành duy trì thứ hạng 990k/tháng'
    ],
    startingPrice: 'Từ 199.000đ',
    slug: 'google-maps-seo'
  },
  {
    id: 'analytics-tracking-hub',
    title: 'Analytics & Tracking Quảng Cáo',
    tagline: 'Biết chính xác từng đồng quảng cáo mang lại bao nhiêu khách',
    iconName: 'BarChart',
    description: 'Cài đặt mã đo lường hành vi lượt bấm gọi, nhắn Zalo, điền form để biết chi phí quảng cáo hiệu quả đến đâu.',
    services: [
      'Cài đặt Google Analytics 4 (GA4) 99k',
      'Cài đặt Google Tag Manager (GTM) 99k',
      'Cài đặt Facebook Meta Pixel 149k',
      'Theo dõi nút bấm cuộc gọi & Zalo 199k',
      'Full Ads Tracking Pack 390k'
    ],
    startingPrice: 'Từ 99.000đ',
    slug: 'tracking-analytics'
  },
  {
    id: 'automation-crm-hub',
    title: 'Tự Động Hóa & Mini CRM',
    tagline: 'Giảm bớt công việc thủ công, không bỏ sót khách hàng',
    iconName: 'Cpu',
    description: 'Tự động gửi thông báo khách đặt đơn về Telegram, form đặt lịch 24/7 và lưu danh sách khách hàng tự động.',
    services: [
      'Tự động gửi tin báo đơn về Telegram 299k',
      'Google Sheets Mini CRM lưu khách 490k',
      'Hệ thống đặt lịch hẹn Booking Mini 690k',
      'Kịch bản Chatbot AI tư vấn 24/7 990k+',
      'Mini CRM + Dashboard doanh thu 1.490k+'
    ],
    startingPrice: 'Từ 299.000đ',
    slug: 'tu-dong-hoa-crm'
  },
  {
    id: 'legal-compliance-hub',
    title: 'Pháp Lý & Compliance BCT (Dịch vụ #41)',
    tagline: 'Chuẩn hóa pháp nhân & thủ tục Bộ Công Thương',
    iconName: 'ShieldCheck',
    description: 'LocalMate hỗ trợ hoàn thiện kỹ thuật & thủ tục khai báo trực tuyến trên online.gov.vn cho website bán hàng/booking.',
    services: [
      'BCT Compliance Check 99k (Rà soát hồ sơ)',
      'Gắn thông tin pháp nhân Footer 149k',
      'Website Policy Pack 299k (Bộ 4 trang chính sách)',
      'Hỗ trợ thủ tục thông báo BCT 390k',
      'Trọn gói Website Compliance Pack 590k ⭐'
    ],
    startingPrice: 'Từ 99.000đ',
    slug: 'phap-ly-bo-cong-thuong'
  },
  {
    id: 'digital-care-operations',
    title: 'Chăm Sóc Kỹ Thuật LocalMate Care',
    tagline: 'Phòng kỹ thuật thuê ngoài đồng hành dài lâu',
    iconName: 'HeartHandshake',
    description: 'Bảo trì website, sao lưu dữ liệu, dọn dẹp virus, cập nhật sản phẩm và hỗ trợ ưu tiên với chi phí cố định.',
    services: [
      'Care Mini 290k/tháng (2 task/tháng)',
      'Care Business 590k/tháng ⭐ (4 task/tháng)',
      'Care Growth 990k/tháng (6-8 task/tháng)',
      'Digital Partner 1.490k/tháng (Ưu tiên hỗ trợ)'
    ],
    startingPrice: 'Từ 290.000đ/tháng',
    slug: 'cham-soc-care'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'fnb',
    title: 'Nhà Hàng, Quán Ăn & Cafe (F&B)',
    badge: 'F&B & ẩm thực',
    description: 'Tăng lượt đặt bàn trực tiếp, đưa quán lên Top Google Maps và hiển thị menu điện tử mượt mà trên di động.',
    keyFeatures: [
      'Menu điện tử định dạng WebP tải nhanh',
      'Nút gọi bàn, đặt tiệc & nhắn Zalo nổi bật',
      'Tối ưu vị trí Google Maps nhận chỉ đường',
      'Form đặt bàn tự động báo về Telegram'
    ],
    recommendedPackage: 'Website F&B 2.490.000đ + Google Maps 390k',
    slug: 'nha-hang-quan-an',
    color: '#0FA99A'
  },
  {
    id: 'construction',
    title: 'Nhà Thầu Xây Dựng & Nội Thất',
    badge: 'Xây dựng & Kiến trúc',
    description: 'Trình bày hồ sơ năng lực (Portfolio) uy tín, công trình đã thi công và nút nhận báo giá dự toán nhanh.',
    keyFeatures: [
      'Thư viện ảnh công trình đã hoàn thiện',
      'Form đăng ký tư vấn & nhận báo giá',
      'Trang giới thiệu năng lực nhà thầu',
      'Tích hợp bản đồ địa chỉ văn phòng'
    ],
    recommendedPackage: 'Website Business 790k + Mini CRM Sheets 490k',
    slug: 'xay-dung-noi-that',
    color: '#E0A852'
  },
  {
    id: 'beauty-spa',
    title: 'Spa, Nail & Thẩm Mỹ Viện',
    badge: 'Làm đẹp & Wellness',
    description: 'Trình bày bảng giá dịch vụ làm đẹp minh bạch, thu hút lượt đặt lịch hẹn trước và tích hợp bản đồ chỉ đường.',
    keyFeatures: [
      'Bảng giá các gói dịch vụ làm đẹp rõ ràng',
      'Hệ thống đặt lịch chọn ngày giờ trực tuyến',
      'Tích hợp đánh giá uy tín từ Google Maps',
      'Gửi tin nhắn xác nhận lịch hẹn tự động'
    ],
    recommendedPackage: 'Website 1.990.000đ + Booking Mini 690k',
    slug: 'spa-nail-lam-dep',
    color: '#e06d53'
  },
  {
    id: 'education',
    title: 'Giáo Dục, Trường Học & Trung Tâm',
    badge: 'Giáo dục & Đào tạo',
    description: 'Giới thiệu chương trình học, lịch khai giảng, giảng viên và thu hút học viên đăng ký tư vấn trải nghiệm.',
    keyFeatures: [
      'Lịch khai giảng & học phí minh bạch',
      'Form đăng ký học thử & nhận tài liệu',
      'Tracking theo dõi lượt bấm đăng ký Ads',
      'Tự động phân loại lead học viên về CRM'
    ],
    recommendedPackage: 'Website 1.990.000đ + Full Tracking Pack 390k',
    slug: 'giao-duc-trung-tam',
    color: '#2563eb'
  },
  {
    id: 'b2b-trading',
    title: 'Doanh Nghiệp B2B & Xuất Nhập Khẩu',
    badge: 'B2B & Thương mại',
    description: 'Xây dựng hình ảnh doanh nghiệp quốc tế uy tín, catalogue sản phẩm xuất khẩu và form nhận yêu cầu báo giá (RFQ).',
    keyFeatures: [
      'Website đa ngôn ngữ (Việt - Anh)',
      'Catalogue sản phẩm & thông số kỹ thuật',
      'Form yêu cầu báo giá (RFQ) chuyển tiếp email',
      'Khởi tạo mã dữ liệu Schema B2B'
    ],
    recommendedPackage: 'Website E-commerce 3.490.000đ + BCT Pack 590k',
    slug: 'b2b-xuat-nhap-khau',
    color: '#052F3D'
  }
];

export const DEMO_SHOWCASES = [
  {
    id: 'xeo-restaurant',
    title: 'XÈO Restaurant - Nhà Hàng Ẩm Thực',
    industry: 'Nhà hàng / F&B',
    category: 'fnb',
    image: '/demo/xeo.jpg',
    liveUrl: 'https://xeorestaurant.localmate.vn',
    url: 'https://xeorestaurant.localmate.vn',
    domain: 'xeorestaurant.localmate.vn',
    tags: ['Menu Đa Ngôn Ngữ', 'Đặt Bàn Trực Tuyến', 'Google Maps Top 3'],
    features: ['Menu điện tử WebP', 'Tích hợp Google Maps', 'Form báo Telegram'],
    color: '#0FA99A',
    summary: 'Website nhà hàng chuẩn chuyển đổi với menu trực quan và hệ thống đặt bàn tự động.'
  },
  {
    id: 'nam-phat-build',
    title: 'Xây Dựng Nam Phát - Nhà Thầu Thi Công',
    industry: 'Xây dựng / Nội thất',
    category: 'construction',
    image: '/demo/namphat.jpg',
    liveUrl: 'https://namphatbuild.localmate.vn',
    url: 'https://namphatbuild.localmate.vn',
    domain: 'namphatbuild.localmate.vn',
    tags: ['Hồ Sơ Năng Lực', 'Dự Toán Nhanh', 'Công Trình Đã Làm'],
    features: ['Portfolio dự án', 'Bảng tính báo giá', 'Form nhận bản vẽ'],
    color: '#E0A852',
    summary: 'Showcase dự án công trình uy tín giúp nhà thầu tăng lượt yêu cầu tư vấn.'
  },
  {
    id: 'huong-sen-spa',
    title: 'Hương Sen Beauty & Spa',
    industry: 'Spa / Làm đẹp',
    category: 'beauty-spa',
    image: '/demo/huongsen.jpg',
    liveUrl: 'https://huongsenspa.localmate.vn',
    url: 'https://huongsenspa.localmate.vn',
    domain: 'huongsenspa.localmate.vn',
    tags: ['Đặt Lịch Hẹn', 'Bảng Giá Dịch Vụ', 'Đánh Giá Google'],
    features: ['Booking theo khung giờ', 'Bảng giá spa', 'Đánh giá khách hàng'],
    color: '#e06d53',
    summary: 'Website dịch vụ làm đẹp sang trọng tích hợp hệ thống đặt lịch hẹn tự động 24/7.'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Tôi chỉ cần sửa một lỗi nhỏ trên website có được không?',
    answer: 'Có! LocalMate có dòng dịch vụ Nền kinh tế 99k hỗ trợ xử lý ngay các task nhỏ như fix lỗi giao diện 99k, cài GA4 99k, trỏ DNS 149k, nén tốc độ 299k.'
  },
  {
    id: 'faq-2',
    question: 'Tôi có được xem thử giao diện trước khi quyết định ký cọc không?',
    answer: 'Có! Bạn có thể nhập tên thương hiệu để AI Concept Generator tạo bản mockup screenshot định hướng 0đ tức thời mà không phải để lại SĐT trước.'
  },
  {
    id: 'faq-3',
    question: 'Chính sách đặt cọc và thanh toán của LocalMate thế nào?',
    answer: 'Các dịch vụ từ 500k trở lên đều áp dụng mốc: Cọc 50% khi chốt scope triển khai -> Hoàn thiện kiểm tra nghiệm thu mới thanh toán 50% còn lại.'
  },
  {
    id: 'faq-4',
    question: 'LocalMate có hỗ trợ thủ tục thông báo website với Bộ Công Thương không?',
    answer: 'Có! Dịch vụ #41 hỗ trợ rà soát hồ sơ, tạo bộ 4 trang chính sách pháp lý (299k) và hướng dẫn khai báo trực tuyến trên online.gov.vn (Gói Compliance Pack 590k).'
  }
];

export const TRUST_COMMITMENTS = [
  {
    title: '1. Xem concept cá nhân hóa 0đ trước khi quyết định',
    desc: 'Nhập tên doanh nghiệp để xem ngay bản mockup screenshot định hướng phù hợp phong cách thương hiệu trước khi chốt làm.'
  },
  {
    title: '2. Báo giá & phạm vi minh bạch 100% (Cọc 50%)',
    desc: 'Báo giá niêm yết trước khi triển khai, chỉ cọc 50% khi chốt scope. Hoàn thiện nghiệm thu mới thanh toán 50% còn lại.'
  },
  {
    title: '3. Giao diện chuẩn di động & tốc độ nén WebP',
    desc: 'Tất cả website đều được tối ưu hiển thị mượt trên di động iPhone/Android và nén ảnh nạp nhanh dưới 1.5 giây.'
  },
  {
    title: '4. Khởi tạo SEO & dữ liệu cấu trúc Schema nền tảng',
    desc: 'Khai báo chuẩn Title, Meta Description, Sitemap.xml và mã Schema LocalBusiness giúp Google dễ dàng lập chỉ mục.'
  },
  {
    title: '5. Cài đặt sẵn hệ thống đo lường (GA4/GTM/Pixel)',
    desc: 'Nhúng sẵn các mã tracking giúp bạn biết chính xác có bao nhiêu người vào web, bấm nút gọi hay điền form.'
  },
  {
    title: '6. Bạn sở hữu 100% tài khoản, tên miền & mã nguồn',
    desc: 'Bàn giao đầy đủ toàn bộ quyền quản trị tên miền, website, fanpage và Google Maps cho bạn nắm giữ.'
  },
  {
    title: '7. Khả năng mở rộng linh hoạt: CRM / Booking / BCT',
    desc: 'Xây dựng theo mô đun Lego (LocalMate Add-ons), khi kinh doanh phát triển có thể mua thêm gói tự động hóa & BCT.'
  },
  {
    title: '8. Người thật đồng hành hỗ trợ sau bàn giao (LocalMate Care)',
    desc: 'Có đội ngũ hỗ trợ kỹ thuật lâu dài, sửa lỗi nhanh qua Zalo và hướng dẫn sử dụng chi tiết sau khi bàn giao.'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Xem concept 0đ & Advisor',
    desc: 'Nhập thông tin để xem bản concept định hướng hoặc trả lời 4 câu hỏi để LocalMate lập lộ trình giải pháp.'
  },
  {
    number: '02',
    title: 'Chốt scope & Cọc 50%',
    desc: 'LocalMate gọi xác nhận thông tin nhận diện, thống nhất báo giá niêm yết và chốt mức cọc 50% để bắt đầu code.'
  },
  {
    number: '03',
    title: 'Triển khai kỹ thuật',
    desc: 'Biên tập nội dung, tối ưu hình ảnh WebP, tích hợp nút Zalo, mã tracking Ads và chuẩn hóa SEO nền tảng.'
  },
  {
    number: '04',
    title: 'Nghiệm thu & Bàn giao',
    desc: 'Khách hàng duyệt kiểm tra giao diện chạy mượt trên điện thoại, thanh toán 50% còn lại và nhận 100% tài khoản.'
  },
  {
    number: '05',
    title: 'Chăm sóc & Đồng hành',
    desc: 'Hướng dẫn sử dụng chi tiết và đồng hành bảo trì kỹ thuật hàng tháng qua các gói LocalMate Care.',
    highlight: true
  }
];

export const KNOWLEDGE_ARTICLES = [
  {
    id: 'post-1',
    title: 'Doanh nghiệp nhỏ có thật sự cần website khi đã có Facebook?',
    category: 'Chiến lược Digital',
    date: '10 Tháng 8, 2026',
    excerpt: 'Facebook là nơi tạo phễu thu hút, nhưng website mới là điểm chốt đơn uy tín, lưu giữ thông tin khách hàng và không phụ thuộc thuật toán.',
    desc: 'Facebook là nơi tạo phễu thu hút, nhưng website mới là điểm chốt đơn uy tín, lưu giữ thông tin khách hàng và không phụ thuộc thuật toán.',
    readTime: '5 phút đọc',
    slug: 'co-can-website-khi-co-facebook'
  },
  {
    id: 'post-2',
    title: 'Hướng dẫn đưa vị trí cửa hàng lên Google Maps đạt Top 3 địa phương',
    category: 'SEO Google Maps',
    date: '08 Tháng 8, 2026',
    excerpt: 'Các bước tối ưu tên doanh nghiệp, danh mục sản phẩm, đăng ảnh NAP và thu hút đánh giá 5 sao từ khách hàng quanh khu vực.',
    desc: 'Các bước tối ưu tên doanh nghiệp, danh mục sản phẩm, đăng ảnh NAP và thu hút đánh giá 5 sao từ khách hàng quanh khu vực.',
    readTime: '7 phút đọc',
    slug: 'huong-dan-top-3-google-maps'
  },
  {
    id: 'post-3',
    title: 'Vì sao chạy quảng cáo Facebook/Google mà không biết khách từ đâu?',
    category: 'Analytics & Tracking',
    date: '05 Tháng 8, 2026',
    excerpt: 'Cách cài đặt mã GA4, GTM và Conversion Tracking để đo lường chính xác từng lồng nhấp gọi điện và chi phí cho 1 lead.',
    desc: 'Cách cài đặt mã GA4, GTM và Conversion Tracking để đo lường chính xác từng lồng nhấp gọi điện và chi phí cho 1 lead.',
    readTime: '6 phút đọc',
    slug: 'vi-sao-quang-cao-khong-do-luong-duoc'
  }
];
