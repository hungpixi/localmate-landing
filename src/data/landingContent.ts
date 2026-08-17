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

export const COMPANY_INFO = {
  legalName: 'CÔNG TY TNHH LOCALMATE',
  taxCode: '4001337934',
  taxAddress: '03 Trường Chinh, Phường Hội An Tây, TP. Đà Nẵng, Việt Nam',
  officeAddress: 'TP. Hồ Chí Minh & Hỗ trợ trực tuyến Toàn quốc (24/7)',
  taxAuthority: 'Thuế cơ sở 7 thành phố Đà Nẵng',
  establishedDate: '10/08/2026',
  status: 'Đang hoạt động',
  phoneDisplay: '0834.422.439 (Hotline / Zalo 24/7)',
  phoneRaw: '0834422439',
  email: 'hotro@localmate.vn',
  website: 'https://localmate.vn',
  bctStatus: 'Đã thông báo Bộ Công Thương'
};

export const CONTACT_INFO = {
  phoneDisplay: '0834.422.439 / Zalo 24/7',
  phone: '0834.422.439 / Zalo 24/7',
  phoneRaw: '0834422439',
  zaloUrl: 'https://zalo.me',
  mailtoUrl: 'mailto:hotro@localmate.vn',
  email: 'hotro@localmate.vn',
  address: '03 Trường Chinh, P. Hội An Tây, TP. Đà Nẵng | VP: TP. Hồ Chí Minh & Online Toàn quốc'
};

export const NAV_LINKS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Bảng giá', href: '/bang-gia' },
  { label: 'Dự án đã làm', href: '/du-an' },
  { label: 'Kiến thức Marketing', href: '/kien-thuc' },
  { label: 'Về LocalMate', href: '/gioi-thieu' },
  { label: 'Liên hệ', href: '/lien-he' }
];

export const PAIN_POINTS = [
  {
    number: '01',
    title: 'Chưa biết nên làm gì trước?',
    desc: 'Bạn đang có Facebook nhưng chưa biết nên làm website, Google Maps hay quảng cáo trước.',
    cta: 'Xem gợi ý bước đầu',
    link: '#lo-trinh'
  },
  {
    number: '02',
    title: 'Không có thời gian viết bài',
    desc: 'Bận rộn phục vụ khách, không kịp chụp ảnh hay cập nhật thông tin lên mạng.',
    cta: 'Xem gói bài viết từ 990k',
    link: '#goi-cham-soc'
  },
  {
    number: '03',
    title: 'Sợ bị vẽ thêm chi phí',
    desc: 'Từng lo lắng bị báo giá thấp rồi phát sinh thêm nhiều khoản phức tạp.',
    cta: 'Giá chốt trước khi làm',
    link: '#cam-ket'
  },
  {
    number: '04',
    title: 'Khách tìm xung quanh không thấy',
    desc: 'Khách ở gần tìm dịch vụ trên Google Maps nhưng chưa thấy quán của bạn.',
    cta: 'Đưa tiệm lên Google Maps',
    link: '/dich-vu/google-maps'
  }
];

export const SOLUTION_STEPS = [
  {
    step: '01',
    label: 'BƯỚC 1',
    title: 'Làm rõ thông tin',
    subtitle: 'Nền móng ban đầu',
    desc: 'Có website hoặc trang giới thiệu để khách biết bạn bán gì, giá bao nhiêu và liên hệ ở đâu.',
    outcome: 'Khách xem là hiểu.'
  },
  {
    step: '02',
    label: 'BƯỚC 2',
    title: 'Để khách tìm thấy bạn',
    subtitle: 'Khách tìm là thấy',
    desc: 'Hoàn thiện Google Maps, thông tin doanh nghiệp và những nơi khách thường tìm kiếm.',
    outcome: 'Tìm trên Google là thấy.'
  },
  {
    step: '03',
    label: 'BƯỚC 3',
    title: 'Tăng thêm khách hàng',
    subtitle: 'Duy trì & tìm thêm khách',
    desc: 'Khi nền tảng đã ổn, mới bắt đầu quảng cáo và chăm sóc nội dung đều đặn.',
    outcome: 'Chi tiền quảng cáo đúng lúc.'
  }
];

export const BEFORE_AFTER = {
  before: [
    'Khách chỉ đến từ người quen hoặc khách vãng lai đi ngang.',
    'Thông tin dịch vụ, bảng giá gửi qua tin nhắn Zalo lộn xộn.',
    'Không có nơi để khách xem bảng giá minh bạch.',
    'Không có ai phụ trách viết bài, trang Facebook bỏ trống.',
    'Chưa có vị trí trên Google Maps để khách bấm chỉ đường.',
    'Chủ cơ sở phải tự mày mò tất cả mọi thứ.'
  ],
  after: [
    'Có website đẹp giới thiệu dịch vụ rõ ràng, chuyên nghiệp.',
    'Nút gọi Hotline, nhắn tin Zalo hiển thị ngay khi mở trang.',
    'Khách xung quanh mở Google Maps là thấy địa chỉ và đánh giá 5 sao.',
    'Bài viết và hình ảnh được đăng tải đều đặn mỗi tuần.',
    'Chủ doanh nghiệp làm chủ 100% tài khoản và dữ liệu.',
    'Có đội ngũ kỹ thuật hỗ trợ nhanh qua Zalo bất cứ khi nào cần.'
  ]
};

export const STARTER_PACKAGE = {
  name: 'Gói Khởi Tạo Đầy Đủ Cho Cửa Hàng',
  title: 'Gói Khởi Tạo Hiện Diện Cho Cửa Hàng',
  subtitle: 'Xây dựng trang web giới thiệu uy tín, đưa lên Google Maps và hoàn thiện kênh bán hàng chỉ trong 3–7 ngày',
  price: '2.900.000',
  unit: 'đ / trọn gói',
  badge: 'Phổ biến nhất cho người mới bắt đầu',
  timeline: '3–7 ngày làm việc',
  revisions: 'Chỉnh sửa thoải mái đến khi ưng ý',
  description: 'Dành cho hộ kinh doanh, tiệm dịch vụ, nhà thầu muốn có sự hiện diện online đầy đủ, chuyên nghiệp mà không cần tốn nhiều chi phí hay thời gian.',
  deliverables: [
    '01 Website giới thiệu tinh gọn (Trang chủ + Dịch vụ + Bảng giá + Liên hệ)',
    'Đưa địa chỉ cửa hàng lên Google Maps chuẩn thông tin & hình ảnh',
    'Chuẩn hóa trang Facebook và biên tập 05 bài viết giới thiệu ban đầu',
    'Tích hợp thanh nút bấm gọi Hotline, nhắn Zalo trực tiếp',
    'Bàn giao toàn bộ tài khoản và hướng dẫn tự cập nhật dễ dàng'
  ],
  commitments: [
    'Hoàn thành trong 03–07 ngày làm việc',
    'Bàn giao 100% quyền làm chủ tài khoản chính chủ',
    'Không chi phí ẩn, báo giá trọn gói trước khi làm',
    'Hỗ trợ kỹ thuật chu đáo sau khi bàn giao'
  ],
  groups: [
    {
      category: '1. Website & Nút Liên Hệ',
      title: '1. Website & Nút Liên Hệ',
      items: ['Giao diện chữ to, dễ đọc trên điện thoại', 'Nút bấm gọi Hotline, nhắn Zalo một chạm']
    },
    {
      category: '2. Google Maps & Facebook',
      title: '2. Google Maps & Facebook',
      items: ['Đưa vị trí lên Google Maps để khách tìm đường', 'Biên tập 05 bài viết giới thiệu quán']
    }
  ]
};

export const CONTENT_PACKAGE = {
  title: 'Gói Chăm Sóc Bài Viết Facebook Hàng Tháng',
  subtitle: 'Duy trì bài viết & hình ảnh đẹp mắt mỗi tuần',
  price: '990.000',
  unit: 'đ / tháng',
  badge: 'Kênh luôn tươi mới',
  description: 'Dành cho doanh nghiệp, cửa hàng bận rộn không có thời gian viết bài và làm hình ảnh chăm sóc Facebook.',
  stats: [
    { value: '15+', label: 'Bài viết / tháng' },
    { value: '15+', label: 'Hình ảnh thiết kế' },
    { value: '02', label: 'Video ngắn TikTok/Reels' }
  ],
  deliverables: [
    '15 bài viết nội dung giới thiệu dịch vụ, mẹo hay và ưu đãi',
    '15 hình ảnh hoặc banner thiết kế có gắn logo tiệm',
    '02 video ngắn (Reels/TikTok) dựng từ video quay tại tiệm',
    'Cập nhật thông tin món mới/dịch vụ mới khi bạn yêu cầu',
    'Kiểm tra định kỳ đảm bảo website luôn hoạt động tốt'
  ],
  terms: [
    'Thanh toán theo từng tháng linh hoạt',
    'Bài viết gửi bạn xem và duyệt trước khi đăng',
    'Báo cáo kết quả và lượt xem vào cuối mỗi tháng'
  ]
};

export const SPECIALIZED_SERVICES = [
  {
    id: 'web-landing',
    title: 'Thiết Kế Website & Trang Giới Thiệu',
    desc: 'Làm website giới thiệu tiệm, trang bán hàng 1 trang từ 490k, mở nhanh trên điện thoại, có sẵn nút gọi Zalo.',
    description: 'Làm website giới thiệu tiệm, trang bán hàng 1 trang từ 490k, mở nhanh trên điện thoại, có sẵn nút gọi Zalo.',
    priceFrom: 'Từ 490.000đ',
    icon: 'Globe'
  },
  {
    id: 'google-maps',
    title: 'Đưa Doanh Nghiệp Lên Google Maps',
    desc: 'Tạo mới hoặc chuẩn hóa vị trí trên bản đồ, thêm ảnh mặt tiền, giờ mở cửa và mã QR xin đánh giá 5 sao.',
    description: 'Tạo mới hoặc chuẩn hóa vị trí trên bản đồ, thêm ảnh mặt tiền, giờ mở cửa và mã QR xin đánh giá 5 sao.',
    priceFrom: 'Từ 299.000đ',
    icon: 'MapPin'
  },
  {
    id: 'google-ads',
    title: 'Quảng Cáo Google Ads Tìm Khách',
    desc: 'Cài đặt quảng cáo xuất hiện đúng người đang gõ tìm trên Google, lọc sạch từ bấm nhầm, gắn nút gọi trực tiếp.',
    description: 'Cài đặt quảng cáo xuất hiện đúng người đang gõ tìm trên Google, lọc sạch từ bấm nhầm, gắn nút gọi trực tiếp.',
    priceFrom: 'Từ 390.000đ',
    icon: 'Sparkles'
  },
  {
    id: 'content-monthly',
    title: 'Viết Bài & Chăm Sóc Facebook',
    desc: 'Soạn 15 bài viết + 15 hình ảnh thiết kế mỗi tháng để trang Facebook luôn có bài mới đón khách.',
    description: 'Soạn 15 bài viết + 15 hình ảnh thiết kế mỗi tháng để trang Facebook luôn có bài mới đón khách.',
    priceFrom: 'Từ 990.000đ/tháng',
    icon: 'FileText'
  },
  {
    id: 'fix-technical',
    title: 'Sửa Lỗi Website & Kỹ Thuật Nhanh',
    desc: 'Sửa lỗi giao diện, tăng tốc độ mở trang, cài đặt tên miền và bảo mật cho website.',
    description: 'Sửa lỗi giao diện, tăng tốc độ mở trang, cài đặt tên miền và bảo mật cho website.',
    priceFrom: 'Từ 99.000đ',
    icon: 'Wrench'
  },
  {
    id: 'analytics-tracking',
    title: 'Cài Đặt Đếm Lượt Gọi & Tin Nhắn',
    desc: 'Cài đặt công cụ đo lường để biết mỗi ngày có bao nhiêu người bấm nút gọi hoặc nhắn Zalo trên website.',
    description: 'Cài đặt công cụ đo lường để biết mỗi ngày có bao nhiêu người bấm nút gọi hoặc nhắn Zalo trên website.',
    priceFrom: 'Từ 99.000đ',
    icon: 'BarChart'
  }
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'website-solution',
    title: 'Website & Trang Bán Hàng',
    tagline: 'Mặt tiền kinh doanh uy tín trên internet',
    iconName: 'Globe',
    description: 'Website gọn nhẹ, hiển thị đẹp trên điện thoại, có sẵn bảng giá và nút gọi Hotline/Zalo.',
    services: [
      'Website 1 trang từ 490k',
      'Website giới thiệu dịch vụ 1.290k',
      'Website doanh nghiệp trọn gói 1.990k',
      'Website nhà hàng / Spa / Quán ăn 2.490k',
      'Website bán hàng nhiều danh mục 3.490k'
    ],
    startingPrice: 'Từ 490.000đ',
    slug: 'website-tinh-gon'
  },
  {
    id: 'google-presence',
    title: 'Đưa Lên Google Maps',
    tagline: 'Khách tìm quanh khu vực là thấy tiệm ngay',
    iconName: 'MapPin',
    description: 'Đưa vị trí cửa hàng lên Google Maps để khách dễ xem đường đi, số điện thoại và đánh giá.',
    services: [
      'Đăng ký mới Google Maps 299k',
      'Tối ưu hoàn thiện hồ sơ Maps 390k',
      'Tạo mã QR xin đánh giá 5 sao 99k',
      'Chăm sóc vị trí Maps hàng tháng 490k'
    ],
    startingPrice: 'Từ 299.000đ',
    slug: 'google-maps-seo'
  },
  {
    id: 'google-ads-hub',
    title: 'Chạy Quảng Cáo Google Ads',
    tagline: 'Đưa dịch vụ đến đúng người đang tìm mua',
    iconName: 'Sparkles',
    description: 'Cài đặt quảng cáo nhắm đúng khách có nhu cầu, chặn click bấm nhầm và tối ưu chi phí cuộc gọi.',
    services: [
      'Cài đặt chiến dịch quảng cáo từ khóa 390k',
      'Lọc từ khóa bấm nhầm & tối ưu 490k',
      'Cài đặt đo lường cuộc gọi từ quảng cáo 199k',
      'Quản trị quảng cáo theo tháng linh hoạt'
    ],
    startingPrice: 'Từ 390.000đ',
    slug: 'quang-cao-google'
  },
  {
    id: 'content-operations',
    title: 'Viết Bài & Chăm Sóc Nội Dung',
    tagline: 'Kênh online luôn có bài mới đều đặn',
    iconName: 'FileText',
    description: 'Chuẩn bị bài viết và hình ảnh thiết kế sẵn để bạn không phải tự nghĩ bài đăng mỗi ngày.',
    services: [
      'Gói chăm sóc Facebook 15 bài/tháng 990k',
      'Thiết kế banner & hình ảnh lẻ từ 99k/ảnh',
      'Dựng video ngắn TikTok/Reels từ 299k/video',
      'Viết bài giới thiệu sản phẩm theo yêu cầu'
    ],
    startingPrice: 'Từ 990.000đ/tháng',
    slug: 'cham-soc-care'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'fnb',
    title: 'Nhà Hàng, Quán Ăn & Cafe',
    badge: 'Ẩm thực & Quán ăn',
    description: 'Đưa quán lên Google Maps để khách tìm đường, xem thực đơn đẹp mắt và bấm gọi đặt bàn trước.',
    keyFeatures: [
      'Menu điện tử hình ảnh rõ nét, mở nhanh',
      'Nút gọi đặt bàn & nhắn Zalo nổi bật',
      'Vị trí Google Maps hiển thị chỉ đường',
      'Đánh giá 5 sao từ khách quen'
    ],
    recommendedPackage: 'Website quán ăn 1.990.000đ + Google Maps 299k',
    slug: 'nha-hang-quan-an',
    color: '#0FA99A'
  },
  {
    id: 'construction',
    title: 'Nhà Thầu Xây Dựng & Xưởng Nội Thất',
    badge: 'Xây dựng & Nội thất',
    description: 'Trình bày hình ảnh công trình đã hoàn thiện, bảng giá tham khảo và nút nhận tư vấn dự toán nhanh.',
    keyFeatures: [
      'Bộ ảnh công trình thực tế đã thi công',
      'Form đăng ký tư vấn nhận báo giá',
      'Thông tin năng lực và địa chỉ xưởng',
      'Nút gọi Hotline trực tiếp cho thợ chính'
    ],
    recommendedPackage: 'Website nhà thầu 1.990.000đ + Google Maps 299k',
    slug: 'xay-dung-noi-that',
    color: '#E0A852'
  },
  {
    id: 'beauty-spa',
    title: 'Spa, Salon Tóc & Thẩm Mỹ',
    badge: 'Làm đẹp & Chăm sóc',
    description: 'Công khai bảng giá các gói làm đẹp, nút đặt lịch hẹn chọn giờ và vị trí bản đồ chỉ đường đến tiệm.',
    keyFeatures: [
      'Bảng giá dịch vụ làm đẹp rõ ràng',
      'Nút đặt lịch hẹn trước tránh chờ đợi',
      'Đánh giá thực tế từ khách hàng',
      'Liên kết Zalo tư vấn 24/7'
    ],
    recommendedPackage: 'Website làm đẹp 1.990.000đ + Google Maps 299k',
    slug: 'spa-nail-lam-dep',
    color: '#e06d53'
  },
  {
    id: 'education',
    title: 'Trường Học, Mầm Non & Trung Tâm',
    badge: 'Giáo dục & Đào tạo',
    description: 'Giới thiệu cơ sở vật chất, lịch học, học phí minh bạch và nhận thông tin phụ huynh đăng ký học thử.',
    keyFeatures: [
      'Bảng học phí và lịch khai giảng rõ ràng',
      'Form phụ huynh để lại số điện thoại tư vấn',
      'Hình ảnh lớp học và hoạt động của trường',
      'Vị trí bản đồ chính xác tại địa phương'
    ],
    recommendedPackage: 'Website tuyển sinh 1.990.000đ + Google Maps 299k',
    slug: 'giao-duc-trung-tam',
    color: '#2563eb'
  }
];

export const DEMO_SHOWCASES = [
  {
    id: 'xeo-restaurant',
    title: 'Nhà Hàng Ẩm Thực XÈO',
    industry: 'Nhà hàng / Ẩm thực',
    category: 'fnb',
    image: '/demo/xeo.jpg',
    liveUrl: 'https://xeorestaurant.localmate.vn',
    url: 'https://xeorestaurant.localmate.vn',
    domain: 'xeorestaurant.localmate.vn',
    tags: ['Thực Đơn Trực Quan', 'Đặt Bàn Nhanh', 'Google Maps'],
    features: ['Menu điện tử tải nhanh', 'Google Maps chỉ đường', 'Nút gọi đặt bàn'],
    color: '#0FA99A',
    summary: 'Website quán ăn rõ thực đơn, giúp khách dễ bấm gọi đặt bàn và tìm đường đến quán.'
  },
  {
    id: 'nam-phat-build',
    title: 'Xây Dựng Nam Phát',
    industry: 'Xây dựng / Nội thất',
    category: 'construction',
    image: '/demo/namphat.jpg',
    liveUrl: 'https://namphatbuild.localmate.vn',
    url: 'https://namphatbuild.localmate.vn',
    domain: 'namphatbuild.localmate.vn',
    tags: ['Hình Ảnh Công Trình', 'Báo Giá Dự Toán', 'Hồ Sơ Năng Lực'],
    features: ['Bộ ảnh công trình thật', 'Bảng giá dự toán', 'Form tư vấn nhanh'],
    color: '#E0A852',
    summary: 'Trang web giới thiệu công trình thực tế giúp nhà thầu tạo niềm tin và nhận nhiều cuộc gọi hỏi giá.'
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
    features: ['Đặt lịch trực tuyến', 'Bảng giá rõ ràng', 'Đánh giá 5 sao'],
    color: '#e06d53',
    summary: 'Website làm đẹp sang trọng, rõ bảng giá các gói liệu trình và dễ dàng đặt hẹn trước.'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Tôi chỉ cần làm một việc nhỏ (sửa lỗi web, đổi số điện thoại) có được không?',
    answer: 'Có! LocalMate nhận xử lý mọi việc nhỏ từ 99k như sửa lỗi giao diện, đổi thông tin, cài đặt tên miền hoặc đưa tiệm lên Google Maps.'
  },
  {
    id: 'faq-2',
    question: 'Tôi có được xem thử mẫu website trước khi quyết định làm không?',
    answer: 'Có! Bạn được xem bản website mẫu 0đ phù hợp với ngành nghề của bạn trước khi quyết định hợp tác.'
  },
  {
    id: 'faq-3',
    question: 'Quy trình thanh toán của LocalMate như thế nào?',
    answer: 'Giá luôn được báo trước rõ ràng. Với các gói thiết kế website, bạn nghiệm thu kiểm tra trang web hoạt động mượt mà trên điện thoại rồi mới thanh toán phần còn lại.'
  },
  {
    id: 'faq-4',
    question: 'Sau khi làm xong, tôi có được làm chủ tài khoản không?',
    answer: 'Có, 100%. Toàn bộ tài khoản Google Maps, tên miền, website đều thuộc quyền sở hữu của bạn. LocalMate bàn giao đầy đủ và hướng dẫn bạn tự quản lý dễ dàng.'
  }
];

export const TRUST_COMMITMENTS = [
  {
    title: '1. Xem website mẫu 0đ trước khi quyết định',
    desc: 'Xem trước giao diện thực tế phù hợp với ngành nghề kinh doanh của bạn trước khi chốt làm.'
  },
  {
    title: '2. Báo giá trước rõ ràng, không tự phát sinh',
    desc: 'Mọi đầu việc đều có giá niêm yết rõ ràng. Bạn biết chính xác mình trả bao nhiêu tiền và nhận được những gì.'
  },
  {
    title: '3. Hiển thị chuẩn trên mọi dòng điện thoại',
    desc: 'Website được tối ưu chữ to rõ, hình ảnh nét và mở nhanh dưới 2 giây trên cả iPhone và Android.'
  },
  {
    title: '4. Đầy đủ số điện thoại Hotline và nút Zalo',
    desc: 'Khách hàng bấm một nút là gọi điện thoại hoặc nhắn tin Zalo cho bạn được ngay, không phải copy số.'
  },
  {
    title: '5. Bạn sở hữu 100% tài khoản và dữ liệu',
    desc: 'Bàn giao đầy đủ quyền quản trị Google Maps, website, tên miền chính chủ cho bạn làm chủ.'
  },
  {
    title: '6. Có người thật hỗ trợ kỹ thuật sau bàn giao',
    desc: 'Đội ngũ kỹ thuật hỗ trợ nhanh qua Zalo, sẵn sàng giải đáp thắc mắc và hỗ trợ bạn trong suốt quá trình kinh doanh.'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Kể cho LocalMate bạn đang làm gì',
    desc: 'Gửi thông tin quán, dịch vụ hoặc bảng giá đơn giản qua Zalo mà không cần chuẩn bị phức tạp.'
  },
  {
    number: '02',
    title: 'Xem bản website mẫu 0đ',
    desc: 'LocalMate dựng bản mẫu thực tế để bạn xem trước cách trình bày trên điện thoại.'
  },
  {
    number: '03',
    title: 'Triển khai hoàn thiện',
    desc: 'Điền đầy đủ thông tin, đưa lên Google Maps và kiểm tra các nút bấm gọi điện thoại.'
  },
  {
    number: '04',
    title: 'Kiểm tra & Nghiệm thu',
    desc: 'Bạn mở thử trên điện thoại, ưng ý và hài lòng rồi mới tiến hành thanh toán hợp đồng.'
  },
  {
    number: '05',
    title: 'Đồng hành & Hỗ trợ kỹ thuật',
    desc: 'Bàn giao tài khoản, hướng dẫn sử dụng và hỗ trợ kỹ thuật nhanh qua Zalo bất cứ khi nào bạn cần.',
    highlight: true
  }
];

export const KNOWLEDGE_ARTICLES = [
  {
    id: 'post-1',
    title: 'Cách kiểm tra khách đã tìm gì trước khi bấm quảng cáo Google',
    category: 'Quảng Cáo Google',
    date: '10 Tháng 8, 2026',
    excerpt: 'Hướng dẫn đọc cụm từ tìm kiếm trong Google Ads và loại bỏ những từ khóa không mang lại khách hàng.',
    desc: 'Hướng dẫn đọc cụm từ tìm kiếm trong Google Ads và loại bỏ những từ khóa không mang lại khách hàng.',
    readTime: '6 phút đọc',
    slug: 'cach-doc-search-terms-google-ads'
  },
  {
    id: 'post-2',
    title: 'Cách tối ưu Google Maps để khách địa phương dễ tìm thấy doanh nghiệp',
    category: 'Google Maps',
    date: '08 Tháng 8, 2026',
    excerpt: 'Các bước điền thông tin chuẩn, tải ảnh thực tế và thu hút đánh giá 5 sao từ khách quen xung quanh.',
    desc: 'Các bước điền thông tin chuẩn, tải ảnh thực tế và thu hút đánh giá 5 sao từ khách quen xung quanh.',
    readTime: '7 phút đọc',
    slug: 'huong-dan-toi-uu-google-business-profile'
  },
  {
    id: 'post-3',
    title: 'Website bán dịch vụ cần có gì để khách dễ gọi điện và nhắn tin?',
    category: 'Thiết Kế Website',
    date: '05 Tháng 8, 2026',
    excerpt: '7 phần quan trọng trên một trang web giúp khách hiểu ngay bạn làm gì, giá bao nhiêu và bấm gọi ngay.',
    desc: '7 phần quan trọng trên một trang web giúp khách hiểu ngay bạn làm gì, giá bao nhiêu và bấm gọi ngay.',
    readTime: '5 phút đọc',
    slug: 'cau-truc-landing-page-chuyen-doi-cao'
  }
];
