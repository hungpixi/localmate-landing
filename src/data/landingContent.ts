export interface PackageItem {
  category: string;
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
  name: 'GÓI KHỞI TẠO',
  badge: 'GÓI PHÙ HỢP NHẤT ĐỂ BẮT ĐẦU',
  price: '2.900.000đ',
  unit: '/ lần',
  subtitle: 'Dành cho người chưa có nền tảng online hoặc thông tin đang thiếu và chưa đồng bộ.',
  timeline: '7 - 10 ngày',
  revisions: '2 vòng phản hồi',
  groups: [
    {
      title: 'Tư vấn & Chuẩn hóa',
      items: [
        '01 buổi khảo sát 60 phút',
        '01 bộ mô tả thương hiệu và dịch vụ'
      ]
    },
    {
      title: 'Hiện diện số',
      items: [
        '03 kênh được thiết lập hoặc tối ưu (Facebook, Maps, Web)',
        '01 landing page giới thiệu sản phẩm chuẩn di động',
        'Cập nhật đến 10 sản phẩm hoặc dịch vụ',
        '01 ảnh đại diện + 02 ảnh bìa thiết kế chuẩn',
        'Tích hợp Chatbot và nút liên hệ nhanh'
      ]
    },
    {
      title: 'Bàn giao',
      items: [
        '01 tài liệu hướng dẫn vận hành',
        '01 buổi bàn giao 60 phút',
        'Toàn bộ tài khoản và quyền quản trị cho khách giữ'
      ]
    }
  ]
};

export const CONTENT_PACKAGE = {
  title: 'Gói Đồng Hành Nội Dung',
  subtitle: 'Có kênh online rồi nhưng không có thời gian duy trì bài viết?',
  price: '990.000đ',
  unit: '/ tháng',
  stats: [
    { value: '15', label: 'Bài viết nội dung' },
    { value: '15', label: 'Hình ảnh thiết kế' },
    { value: '02', label: 'Video ngắn (Reels/TikTok)' },
    { value: '02', label: 'Giờ hỗ trợ kỹ thuật' },
    { value: '02', label: 'Kênh đăng bài' },
    { value: '01', label: 'Báo cáo hiệu quả' }
  ],
  terms: [
    'Sử dụng hình ảnh và tư liệu sản phẩm do khách hàng cung cấp.',
    'Chưa bao gồm ngân sách chạy quảng cáo trả phí.',
    'Chưa bao gồm chi phí ekip di chuyển quay chụp tại địa điểm.'
  ]
};

export const SPECIALIZED_SERVICES = [
  {
    id: 'anh-san-pham',
    title: 'Thiết kế ảnh sản phẩm',
    desc: 'Tạo banner, chỉnh sửa bộ ảnh dịch vụ/sản phẩm chuyên nghiệp đăng web & social.',
    priceFrom: 'Từ 500.000đ'
  },
  {
    id: 'quay-chup',
    title: 'Quay chụp tại địa điểm',
    desc: 'Ekip hỗ trợ đến tận cửa hàng/xưởng sản xuất để chụp hình và quay video chân thực.',
    priceFrom: 'Từ 1.500.000đ'
  },
  {
    id: 'web-nhieu-trang',
    title: 'Website nhiều trang',
    desc: 'Mở rộng landing page thành website tin tức, catalogue hàng trăm sản phẩm.',
    priceFrom: 'Từ 4.500.000đ'
  },
  {
    id: 'seo-dia-phuong',
    title: 'SEO Google Maps địa phương',
    desc: 'Đưa vị trí cửa hàng lên top tìm kiếm địa phương trên Google Search & Maps.',
    priceFrom: 'Từ 1.200.000đ'
  },
  {
    id: 'quan-ly-ads',
    title: 'Quản lý quảng cáo',
    desc: 'Cài đặt và tối ưu chiến dịch quảng cáo Facebook, Google tìm kiếm đúng đối tượng.',
    priceFrom: 'Từ 2.000.000đ/tháng'
  },
  {
    id: 'chatbot-automation',
    title: 'Chatbot & Tự động hóa',
    desc: 'Thiết lập kịch bản tự trả lời tin nhắn Zalo/Messenger 24/7 để không bỏ lỡ khách.',
    priceFrom: 'Từ 800.000đ'
  }
];

export const PROBLEM_MAPPER = [
  {
    id: 'no-website',
    problem: 'Tôi chưa có website',
    solution: 'Thiết kế website doanh nghiệp & bán hàng',
    description: 'Xây mới website chuẩn nhận diện, hiển thị đẹp trên điện thoại, bàn giao trọn gói.',
    link: '/dich-vu/thiet-ke-website',
    badge: 'Xây mới 0đ demo'
  },
  {
    id: 'old-website',
    problem: 'Website cũ hoặc chưa hiệu quả',
    solution: 'Redesign & tối ưu hiệu năng website',
    description: 'Nâng cấp giao diện hiện đại, tăng tốc độ tải trang, bổ sung nút nhắn Zalo & gọi điện.',
    link: '/dich-vu/thiet-ke-website',
    badge: 'Làm mới giao diện'
  },
  {
    id: 'invisible-google',
    problem: 'Khách tìm Google không thấy tôi',
    solution: 'SEO website & Google Maps địa phương',
    description: 'Đưa từ khóa dịch vụ & vị trí cửa hàng lên top Google Search và Google Maps.',
    link: '/dich-vu/seo',
    badge: 'Tăng lượng tìm kiếm'
  },
  {
    id: 'fast-leads',
    problem: 'Tôi muốn có khách nhanh hơn',
    solution: 'Google Ads & Meta Ads tối ưu chuyển đổi',
    description: 'Thiết lập chiến dịch quảng cáo đúng đối tượng mục tiêu, đo lường từng lượt nhấp & cuộc gọi.',
    link: '/dich-vu/quang-cao',
    badge: 'Có khách ngay'
  },
  {
    id: 'no-web-manager',
    problem: 'Tôi không có người quản lý website',
    solution: 'Dịch vụ Quản trị & Chăm sóc website',
    description: 'Cập nhật sản phẩm, đăng bài viết, sao lưu dữ liệu và hỗ trợ kỹ thuật hàng tháng.',
    link: '/dich-vu/quan-tri-website',
    badge: 'Đồng hành hàng tháng'
  },
  {
    id: 'automation-need',
    problem: 'Tôi muốn tự động hóa công việc',
    solution: 'CRM, Chatbot & Workflow Automation',
    description: 'Tự động gửi thông báo đơn hàng qua Zalo/Telegram, kịch bản trả lời khách 24/7.',
    link: '/dich-vu/phan-mem-automation',
    badge: 'Tiết kiệm thời gian'
  }
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'thiet-ke-website',
    title: 'Thiết kế Website',
    tagline: 'Chuẩn nhận diện · Tối ưu di động · Bàn giao trọn gói',
    iconName: 'Layout',
    description: 'Website doanh nghiệp, trang bán hàng, landing page chạy quảng cáo và các giao diện thiết kế riêng theo ngành.',
    services: [
      'Thiết kế website doanh nghiệp',
      'Website bán hàng / Catalogue',
      'Landing page chuyển đổi cao',
      'Website nhà hàng / F&B / Spa',
      'Website giáo dục / Trường học',
      'Website xây dựng / Nội thất',
      'Website cá nhân / Freelancer',
      'Redesign & Tối ưu website cũ'
    ],
    startingPrice: 'Từ 2.900.000đ',
    slug: '/dich-vu/thiet-ke-website'
  },
  {
    id: 'seo',
    title: 'SEO & Google',
    tagline: 'Lên top từ khóa · Tăng uy tín địa phương · Chuẩn GEO/AI',
    iconName: 'Search',
    description: 'Đưa thương hiệu xuất hiện ở vị trí hàng đầu khi khách hàng chủ động tìm kiếm giải pháp trên Google.',
    services: [
      'SEO website tổng thể',
      'SEO Local & Google Maps địa phương',
      'Xác minh & Tối ưu Google Business Profile',
      'Technical SEO & Tối ưu tốc độ',
      'Viết nội dung chuẩn SEO',
      'Tối ưu dữ liệu cấu trúc Schema',
      'Tối ưu tìm kiếm AI (GEO Search)'
    ],
    startingPrice: 'Từ 2.000.000đ/tháng',
    slug: '/dich-vu/seo'
  },
  {
    id: 'quang-cao',
    title: 'Quảng cáo Online',
    tagline: 'Đúng đối tượng · Tiếp cận nhanh · Đo lường chuyển đổi',
    iconName: 'TrendingUp',
    description: 'Chạy quảng cáo tìm kiếm và mạng xã hội hiệu quả, tập trung tạo ra lượt gọi, nhắn tin và lead thật.',
    services: [
      'Quảng cáo Google Search & Display',
      'Quảng cáo Meta Ads (Facebook & Instagram)',
      'Thiết kế Landing page quảng cáo',
      'Cài đặt Tracking GA4 & GTM',
      'Đo lường Conversion & Lượt gọi',
      'Tối ưu chi phí trên mỗi đơn vị lead'
    ],
    startingPrice: 'Theo ngân sách',
    slug: '/dich-vu/quang-cao'
  },
  {
    id: 'noi-dung',
    title: 'Nội dung & Thương hiệu',
    tagline: 'Bài viết chuẩn hóa · Hình ảnh đẹp · Hồ sơ uy tín',
    iconName: 'FileText',
    description: 'Xây dựng thông tin sản phẩm và nội dung truyền thông nhất quán giúp khách hàng ngay lập tức tin tưởng.',
    services: [
      'Biên tập nội dung website',
      'Quản trị bài viết & fanpage',
      'Sáng tạo nội dung Social Media',
      'Thiết kế hình ảnh & Banner',
      'Hồ sơ năng lực / Company Profile',
      'Tư vấn định vị thương hiệu địa phương'
    ],
    startingPrice: 'Từ 990.000đ/tháng',
    slug: '/dich-vu/noi-dung'
  },
  {
    id: 'phan-mem-automation',
    title: 'Phần mềm & Automation',
    tagline: 'Số hóa quy trình · Tự động phản hồi · Tiết kiệm nguồn lực',
    iconName: 'Cpu',
    description: 'Công cụ phần mềm và kịch bản tự động hỗ trợ quản lý khách hàng, lịch hẹn và thông báo đơn hàng.',
    services: [
      'CRM quản lý khách hàng đơn giản',
      'Phần mềm quản lý theo yêu cầu',
      'Form đặt lịch / Booking online',
      'Chatbot trả lời khách 24/7',
      'Thông báo Zalo / Telegram tự động',
      'Tự động hóa quy trình kinh doanh (Workflow)'
    ],
    startingPrice: 'Báo giá theo nghiệp vụ',
    slug: '/dich-vu/phan-mem-automation'
  },
  {
    id: 'quan-tri-website',
    title: 'Chăm sóc Website',
    tagline: 'Vận hành ổn định · Bảo mật an toàn · Hỗ trợ nhanh chóng',
    iconName: 'ShieldCheck',
    description: 'Dịch vụ kỹ thuật đồng hành giúp website luôn chạy mượt, an toàn, được sao lưu và cập nhật liên tục.',
    services: [
      'Quản trị & Cập nhật nội dung',
      'Bảo trì kỹ thuật & Sửa lỗi',
      'Sao lưu (Backup) dữ liệu định kỳ',
      'Tối ưu Hosting & Tên miền',
      'Giám sát hoạt động 24/7 (Monitoring)',
      'Hỗ trợ kỹ thuật ưu tiên'
    ],
    startingPrice: 'Từ 990.000đ/tháng',
    slug: '/dich-vu/quan-tri-website'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'nha-hang',
    title: 'Nhà hàng & F&B',
    badge: 'Ẩm thực & Quán ăn',
    description: 'Website hiển thị thực đơn hấp dẫn, tích hợp chỉ đường Google Maps, nút đặt bàn và liên hệ giao hàng tận nơi.',
    keyFeatures: ['Menu điện tử trực quan', 'Google Maps chuẩn vị trí', 'Nút gọi & Zalo đặt bàn nhanh', 'Schema đánh giá món ăn'],
    recommendedPackage: 'Website + Google Maps',
    slug: '/giai-phap/nha-hang',
    color: '#0fa99a'
  },
  {
    id: 'giao-duc',
    title: 'Mầm non & Giáo dục',
    badge: 'Trường học & Trung tâm',
    description: 'Giao diện thân thiện với phụ huynh, giới thiệu chương trình học, hình ảnh cơ sở vật chất và form đăng ký tư vấn.',
    keyFeatures: ['Giới thiệu các cơ sở', 'Form đăng ký tham quan', 'Lịch học & Học phí minh bạch', 'Trang tuyển sinh'],
    recommendedPackage: 'Website + Nội dung',
    slug: '/giai-phap/giao-duc',
    color: '#083b4c'
  },
  {
    id: 'xay-dung',
    title: 'Xây dựng & Nội thất',
    badge: 'Nhà thầu & Xưởng sản xuất',
    description: 'Showcase công trình thực tế, bảng giá vật liệu, hồ sơ năng lực và nút nhận báo giá tận nơi cho khách hàng.',
    keyFeatures: ['Thư viện dự án đã thi công', 'Bảng giá vật liệu & nhân công', 'Form đăng ký khảo sát tận nơi', 'PDF Hồ sơ năng lực'],
    recommendedPackage: 'Website + SEO Local',
    slug: '/giai-phap/xay-dung',
    color: '#ff6b00'
  },
  {
    id: 'spa',
    title: 'Spa & Làm đẹp',
    badge: 'Nail, Salon & thẩm mỹ',
    description: 'Trang giới thiệu dịch vụ chăm sóc sắc đẹp, tích hợp form booking hẹn giờ, bảng giá dịch vụ và review từ khách.',
    keyFeatures: ['Đặt lịch hẹn online', 'Bảng giá dịch vụ niêm yết', 'Bộ sưu tập mẫu & trước/sau', 'Đánh giá khách hàng thật'],
    recommendedPackage: 'Website + Ads',
    slug: '/giai-phap/spa',
    color: '#e87500'
  },
  {
    id: 'cua-hang',
    title: 'Cửa hàng & Retail',
    badge: 'Shop & Đại lý địa phương',
    description: 'Trang catalogue sản phẩm rõ ràng, hỗ trợ khách xem giá, lọc danh mục và liên hệ mua hàng qua Zalo/Điện thoại.',
    keyFeatures: ['Catalogue sản phẩm theo nhóm', 'Tìm kiếm & Lọc nhanh', 'Nút Zalo chat nhận giá sỉ/lẻ', 'Tối ưu Google Maps tiệm'],
    recommendedPackage: 'Website + SEO',
    slug: '/giai-phap/cua-hang',
    color: '#0fa99a'
  },
  {
    id: 'doanh-nghiep-nho',
    title: 'Doanh nghiệp nhỏ & SME',
    badge: 'Công ty & Dịch vụ B2B',
    description: 'Trang web thương hiệu uy tín, giới thiệu dịch vụ trọn gói, quy trình làm việc và cam kết chất lượng chuẩn mực.',
    keyFeatures: ['Giới thiệu công ty & Đội ngũ', 'Mô tả dịch vụ chi tiết', 'Báo giá minh bạch', 'Tích hợp tracking GA4'],
    recommendedPackage: 'Gói Hiện Diện Số Trọn Gói',
    slug: '/giai-phap/doanh-nghiep-nho',
    color: '#052f3d'
  }
];

export const PRICING_TABLE = [
  {
    category: 'Thiết kế Website',
    services: [
      { name: 'Landing Page đơn (Giới thiệu / Sản phẩm)', price: '2.900.000đ', period: 'lần', note: 'Đã bao gồm 03 kênh + thiết lập 10 sản phẩm' },
      { name: 'Website Doanh Nghiệp (3 - 5 trang)', price: '4.900.000đ', period: 'lần', note: 'Chuẩn SEO, đa trang, hỗ trợ bài viết' },
      { name: 'Website Bán Hàng / Catalogue đầy đủ', price: '6.900.000đ', period: 'lần', note: 'Quản lý kho đơn giản, lọc sản phẩm' },
      { name: 'Redesign & Tối ưu Website cũ', price: 'từ 2.500.000đ', period: 'lần', note: 'Đánh giá & làm mới toàn bộ UX/UI' }
    ]
  },
  {
    category: 'SEO & Google Search',
    services: [
      { name: 'SEO Local & Google Maps địa phương', price: '2.000.000đ', period: 'tháng', note: 'Tăng sự xuất hiện tại khu vực phục vụ' },
      { name: 'SEO Website Từ Khóa Ngành', price: 'từ 3.500.000đ', period: 'tháng', note: 'Tối ưu nội dung & kỹ thuật top Google' },
      { name: 'Tối ưu Google Business Profile trọn gói', price: '1.500.000đ', period: 'lần', note: 'Xác minh, tối ưu thông tin & hình ảnh' }
    ]
  },
  {
    category: 'Quản trị & Nội dung',
    services: [
      { name: 'Gói Chăm Sóc Nội Dung Hàng Tháng', price: '990.000đ', period: 'tháng', note: '15 bài + 15 hình ảnh + 2 video + 2h hỗ trợ' },
      { name: 'Quản trị & Bảo trì Kỹ thuật Website', price: '990.000đ', period: 'tháng', note: 'Backup, bảo mật, theo dõi uptime 24/7' },
      { name: 'Viết Bài Chuẩn SEO Ngành Nghề', price: '150.000đ', period: 'bài', note: 'Nội dung thực tế, chuẩn ngữ pháp & từ khóa' }
    ]
  },
  {
    category: 'Quảng cáo & Automation',
    services: [
      { name: 'Cài đặt Quảng cáo Google Ads / Meta Ads', price: 'từ 1.500.000đ', period: 'lần', note: 'Thiết lập tài khoản, mẫu quảng cáo & pixel' },
      { name: 'Phần mềm / CRM & Chatbot theo yêu cầu', price: 'Báo giá riêng', period: 'dự án', note: 'Tùy theo quy trình nghiệp vụ thực tế' }
    ]
  }
];

export const DEMO_SHOWCASES = [
  {
    id: 'xeo-restaurant',
    industry: 'Nhà hàng & Ẩm thực',
    title: 'XÈO Restaurant - Bánh Xèo Bánh Khọt Nam Bộ',
    domain: 'xeorestaurant.com',
    url: 'https://xeorestaurant.com/',
    tags: ['Ẩm thực', 'SEO Maps', 'Google Ads Tracking', 'Schema'],
    features: ['Website hiển thị thực đơn Nam Bộ', 'Tích hợp GA4 & Conversion Tracking', 'Google Maps chuẩn xác vị trí'],
    color: '#ff6b00',
    summary: 'Dự án website & marketing tổng thể giúp nhà hàng thu hút hơn 2.500 lượt tìm kiếm địa phương mỗi tháng.'
  },
  {
    id: 'sao-sang-edu',
    industry: 'Giáo dục & Mầm non',
    title: 'Mầm Non Sao Sáng Kindergarten',
    domain: 'saosangedu.com',
    url: 'https://saosangedu.com/',
    tags: ['Mầm non', 'Hệ thống 4 CS', 'Hóc Môn'],
    features: ['Giới thiệu hệ thống 4 cơ sở', 'Chương trình bán trú & Năng khiếu', 'Đăng ký tham quan & Tuyển sinh'],
    color: '#0fa99a',
    summary: 'Hệ thống giới thiệu mầm non giúp trường kết nối hiệu quả với phụ huynh và tăng lượt đăng ký tuyển sinh.'
  },
  {
    id: 'do-nha-chu-xanh',
    industry: 'Du lịch & Trải nghiệm',
    title: 'Đò Nhà Chú Xanh - Phá Tam Giang',
    domain: 'donhachuxanh.vercel.app',
    url: 'https://donhachuxanh.vercel.app/',
    tags: ['Du lịch', 'Huế', 'Tour trải nghiệm'],
    features: ['Tour ghe gỗ & Chèo SUP Tam Giang', 'Đặt lịch chòi nổi & Hải sản tươi', 'Bảng giá dịch vụ niêm yết'],
    color: '#083b4c',
    summary: 'Xây dựng hiện diện số giới thiệu dịch vụ du lịch địa phương tại Huế, giúp du khách dễ dàng liên hệ đặt tour.'
  },
  {
    id: 'smentor',
    industry: 'Tư vấn & Khởi nghiệp',
    title: 'Smentor - Khai Phóng Tiềm Năng Trẻ',
    domain: 'master.smentor.pages.dev',
    url: 'https://master.smentor.pages.dev/',
    tags: ['Khởi nghiệp', 'Mentoring', 'TS. Phan Huỳnh Anh'],
    features: ['Hệ sinh thái kết nối Mentor', 'Lộ trình phát triển sự nghiệp', 'Đăng ký tư vấn 1:1 trực tuyến'],
    color: '#ff8a00',
    summary: 'Platform cố vấn sự nghiệp và kết nối chuyên gia hàng đầu dành cho sinh viên và startup trẻ.'
  },
  {
    id: 'exportmate',
    industry: 'Xuất nhập khẩu B2B',
    title: 'ExportMate.vn - Lộ Trình Xuất Khẩu SME',
    domain: 'exportmate.vn',
    url: 'http://exportmate.vn/',
    tags: ['B2B', 'Xuất khẩu', 'Hồ sơ C/O & FDA'],
    features: ['Đánh giá Readiness 30 ngày', 'Chuẩn hóa hồ sơ & chứng nhận', 'Kết nối nhà mua hàng quốc tế'],
    color: '#052f3d',
    summary: 'Hệ thống nền tảng tư vấn chuẩn hóa chứng từ xuất khẩu dành cho các doanh nghiệp vừa và nhỏ.'
  },
  {
    id: 'sugar-polish',
    industry: 'Làm đẹp & Spa',
    title: 'Sugar Polish Nail Bar (Newnan, GA)',
    domain: 'sugarpolishnewnan.com',
    url: 'https://sugarpolishnewnan.com/',
    tags: ['Làm đẹp', 'Spa Pedicure', 'Newnan, GA Mỹ'],
    features: ['Đặt lịch hẹn Online (Book Now)', 'Bảng dịch vụ Nail & Custom Art', 'Tích hợp bản đồ & Đánh giá Google'],
    color: '#e87500',
    summary: 'Website đặt lịch dịch vụ làm đẹp tại thị trường Mỹ, giúp cửa hàng tăng 35% lượt hẹn trực tuyến.'
  }
];

export const TRUST_COMMITMENTS = [
  { title: 'Xem định hướng trước & Cọc 50%', desc: 'Duyệt bản concept mockup 0đ, chốt scope rồi mới cọc 50% triển khai. Hoàn thiện nghiệm thu mới thanh toán phần còn lại.' },
  { title: 'Không phí ẩn phát sinh', desc: 'Mọi chi phí đều báo trước minh bạch, không âm thầm thu thêm phụ phí.' },
  { title: 'Khách sở hữu 100% tài khoản', desc: 'Bàn giao quyền quản trị tên miền, website, fanpage và Google Maps cho khách nắm giữ.' },
  { title: 'Có concept xem trước 0đ', desc: 'Dựng trước khung mockup giao diện đúng phong cách thương hiệu trước khi bạn chốt làm.' },
  { title: 'Phạm vi công việc rõ ràng', desc: 'Ghi chi tiết số lượng sản phẩm, bài viết và tính năng trong cam kết dịch vụ.' },
  { title: 'Mở rộng linh hoạt theo quy mô', desc: 'Bắt đầu từ gói nhỏ cơ bản, khi kinh doanh phát triển có thể nâng cấp thêm tính năng.' }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tư vấn nhu cầu',
    desc: 'Trao đổi 30-60 phút để hiểu rõ sản phẩm, khách hàng mục tiêu và mục tiêu kinh doanh của bạn.'
  },
  {
    number: '02',
    title: 'Làm web demo',
    desc: 'LocalMate dựng bản web demo thực tế để bạn trực tiếp duyệt cấu trúc, màu sắc và giao diện.'
  },
  {
    number: '03',
    title: 'Báo giá & Phạm vi',
    desc: 'Thống nhất hạng mục công việc, thời gian triển khai và chi phí trọn gói không phát sinh.'
  },
  {
    number: '04',
    title: 'Triển khai hoàn thiện',
    desc: 'Biên tập nội dung, tối ưu hình ảnh, cài đặt các nút liên hệ Zalo, lượt gọi và chuẩn hóa SEO.'
  },
  {
    number: '05',
    title: 'Bàn giao & Đồng hành',
    desc: 'Bàn giao 100% tài khoản, hướng dẫn sử dụng và hỗ trợ kỹ thuật lâu dài sau nghiệm thu.',
    highlight: true
  }
];

export const KNOWLEDGE_ARTICLES = [
  {
    id: 'checklist-web-doanh-nghiep',
    category: 'Website',
    title: 'Checklist 7 mục bắt buộc phải có trên website doanh nghiệp nhỏ',
    desc: 'Tránh lỗi làm web xong không ai gọi: những thông tin cốt lõi khách hàng tìm kiếm trước khi ra quyết định mua.',
    date: '10/08/2026',
    readTime: '5 phút đọc',
    slug: '/kien-thuc/checklist-web-doanh-nghiep'
  },
  {
    id: 'seo-local-google-maps',
    category: 'SEO & Google',
    title: 'Hướng dẫn đưa cửa hàng lên Top 3 Google Maps trong 30 ngày',
    desc: 'Cách tối ưu Google Business Profile đơn giản giúp khách xung quanh khu vực dễ tìm thấy tiệm của bạn nhất.',
    date: '08/08/2026',
    readTime: '7 phút đọc',
    slug: '/kien-thuc/seo-local-google-maps'
  },
  {
    id: 'tiet-kiem-chi-phi-quang-cao',
    category: 'Quảng cáo',
    title: 'Cách chạy Google Ads tiết kiệm cho ngân sách nhỏ dưới 5 triệu/tháng',
    desc: 'Tập trung vào từ khóa tìm kiếm có ý định mua cao thay vì lãng phí tiền vào các từ khóa rộng không ra lead.',
    date: '05/08/2026',
    readTime: '6 phút đọc',
    slug: '/kien-thuc/tiet-kiem-chi-phi-quang-cao'
  },
  {
    id: 'tu-dong-hoa-zalo-notification',
    category: 'AI & Automation',
    title: 'Tự động gửi thông báo khách đặt lịch qua Zalo mà không tốn tiền phần mềm đắt đỏ',
    desc: 'Ứng dụng công cụ tự động hóa quy trình đơn giản giúp chủ tiệm nhận ngay tin nhắn khi có khách đăng ký.',
    date: '01/08/2026',
    readTime: '4 phút đọc',
    slug: '/kien-thuc/tu-dong-hoa-zalo-notification'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'what-is-localmate',
    question: 'LocalMate làm những dịch vụ gì cho doanh nghiệp nhỏ?',
    answer: 'LocalMate là đơn vị cung cấp giải pháp trọn gói bao gồm: Thiết kế Website, SEO & Google Maps, Quảng cáo Google/Meta Ads, Biên tập nội dung & Quản trị website, cùng các Giải pháp Phần mềm & Tự động hóa phù hợp với ngân sách của doanh nghiệp vừa và nhỏ.'
  },
  {
    id: 'demo-fee',
    question: 'Demo trước có mất phí không?',
    answer: 'Hoàn toàn 0đ. LocalMate sẽ dựng bản web demo dựa trên thông tin ngành nghề của bạn để bạn xem trước cấu trúc và giao diện trước khi quyết định hợp tác.'
  },
  {
    id: 'payment-time',
    question: 'Khi nào mới phải thanh toán?',
    answer: 'Bạn chỉ thanh toán khi đã duyệt bản demo, nghiệm thu xong website thực tế và nhận bàn giao đầy đủ tài khoản quản trị.'
  },
  {
    id: 'no-logo',
    question: 'Tôi chưa có logo và hình ảnh chuyên nghiệp thì sao?',
    answer: 'Đừng lo! LocalMate hỗ trợ tư vấn thiết kế logo cơ bản, chuẩn hóa hình ảnh sẵn có từ điện thoại của bạn thành bộ ảnh đăng web & bài viết chuyên nghiệp.'
  },
  {
    id: 'website-edit',
    question: 'Tôi có tự sửa website sau khi bàn giao được không?',
    answer: 'Có. Giao diện quản trị cực kỳ đơn giản. Chúng tôi có tài liệu hướng dẫn từng bước kèm 01 buổi bàn giao trực tiếp để bạn tự làm chủ thông tin sản phẩm.'
  },
  {
    id: 'domain-hosting',
    question: 'Chi phí Hosting và Tên miền được tính thế nào?',
    answer: 'LocalMate tư vấn cài đặt tên miền + hosting tối ưu nhất theo đúng nhu cầu của bạn, hỗ trợ cấu hình miễn phí và bàn giao lại tài khoản chính chủ.'
  },
  {
    id: 'account-ownership',
    question: 'Tôi có nắm giữ toàn bộ tài khoản không?',
    answer: 'Cam kết 100%! Toàn bộ quyền sở hữu tên miền, website, fanpage Facebook và vị trí Google Maps đều thuộc về bạn.'
  }
];

export const CONTACT_INFO = {
  phone: '0834422439',
  phoneDisplay: '0834.422.439',
  zaloUrl: 'https://zalo.me/0834422439',
  email: 'hungphamphunguyen@gmail.com',
  mailtoUrl: 'mailto:hungphamphunguyen@gmail.com',
  address: 'Hà Nội & TP. Hồ Chí Minh'
};
