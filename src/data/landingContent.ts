export interface PackageItem {
  category: string;
  items: string[];
}

export const NAV_LINKS = [
  { label: 'Dịch vụ', href: '#dich-vu' },
  { label: 'Quy trình', href: '#quy-trinh' },
  { label: 'Bảng giá', href: '#bang-gia' },
  { label: 'Cam kết', href: '#cam-ket' },
  { label: 'FAQ', href: '#faq' },
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

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Gửi thông tin',
    desc: 'Bạn chỉ cần kể cho chúng tôi về ngành nghề, sản phẩm và dịch vụ hiện có.'
  },
  {
    number: '02',
    title: 'Tư vấn 60 phút',
    desc: 'LocalMate tìm hiểu chi tiết khách hàng mục tiêu và điểm mạnh độc đáo của bạn.'
  },
  {
    number: '03',
    title: 'Làm web demo',
    desc: 'Khách hàng trực tiếp xem trước cấu trúc, giao diện và phong cách hiển thị.'
  },
  {
    number: '04',
    title: 'Hoàn thiện',
    desc: 'Hai bên phối hợp tối ưu nội dung và chi tiết đúng phạm vi thống nhất.'
  },
  {
    number: '05',
    title: 'Bàn giao & Thanh toán',
    desc: 'Khách hàng nhận website hoàn chỉnh, tài khoản quản trị và tài liệu rồi mới thanh toán.',
    highlight: true
  }
];

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

export const TRUST_COMMITMENTS = [
  { title: 'Không ép mua thêm', desc: 'Chỉ làm đúng những thứ thực sự cần thiết và phù hợp ngân sách.' },
  { title: 'Không phát sinh', desc: 'Mọi chi phí đều báo trước, tuyệt đối không âm thầm thu phụ phí.' },
  { title: 'Phạm vi công việc rõ', desc: 'Mỗi gói cước ghi rõ chi tiết số lượng sản phẩm, bài viết và tính năng.' },
  { title: 'Số lần chỉnh sửa rõ ràng', desc: 'Đảm bảo tiến độ bàn giao đúng hạn với 2 vòng phản hồi kỹ lưỡng.' },
  { title: 'Khách giữ tài khoản', desc: 'Bàn giao 100% quyền sở hữu tên miền, tài khoản social và quản trị.' },
  { title: 'Không hứa hẹn vô cơ sở', desc: 'Nói thực, làm thực, tập trung vào hiện diện và sự tin tưởng của khách.' }
];

export const DEMO_SHOWCASES = [
  {
    id: 'sao-sang-edu',
    industry: 'Giáo dục & Mầm non',
    title: 'Mầm Non Sao Sáng Kindergarten',
    domain: 'saosangedu.com',
    url: 'https://saosangedu.com/',
    tags: ['Mầm non', 'Hệ thống 4 CS', 'Hóc Môn'],
    features: ['Giới thiệu hệ thống 4 cơ sở', 'Chương trình bán trú & Năng khiếu', 'Đăng ký tham quan & Tuyển sinh'],
    color: '#0fa99a'
  },
  {
    id: 'do-nha-chu-xanh',
    industry: 'Du lịch & Trải nghiệm',
    title: 'Đò Nhà Chú Xanh - Phá Tam Giang',
    domain: 'donhachuxanh.vercel.app',
    url: 'https://donhachuxanh.vercel.app/',
    tags: ['Du lịch', 'Huế', 'Tour trải nghiệm'],
    features: ['Tour ghe gỗ & Chèo SUP Tam Giang', 'Đặt lịch chòi nổi & Hải sản tươi', 'Bảng giá dịch vụ niêm yết'],
    color: '#083b4c'
  },
  {
    id: 'smentor',
    industry: 'Tư vấn & Khởi nghiệp',
    title: 'Smentor - Khai Phóng Tiềm Năng Trẻ',
    domain: 'master.smentor.pages.dev',
    url: 'https://master.smentor.pages.dev/',
    tags: ['Khởi nghiệp', 'Mentoring', 'TS. Phan Huỳnh Anh'],
    features: ['Hệ sinh thái kết nối Mentor', 'Lộ trình phát triển sự nghiệp', 'Đăng ký tư vấn 1:1 trực tuyến'],
    color: '#ff8a00'
  },
  {
    id: 'exportmate',
    industry: 'Xuất nhập khẩu B2B',
    title: 'ExportMate.vn - Lộ Trình Xuất Khẩu SME',
    domain: 'exportmate.vn',
    url: 'http://exportmate.vn/',
    tags: ['B2B', 'Xuất khẩu', 'Hồ sơ C/O & FDA'],
    features: ['Đánh giá Readiness 30 ngày', 'Chuẩn hóa hồ sơ & chứng nhận', 'Kết nối nhà mua hàng quốc tế'],
    color: '#052f3d'
  },
  {
    id: 'sugar-polish',
    industry: 'Làm đẹp & Spa',
    title: 'Sugar Polish Nail Bar (Newnan, GA)',
    domain: 'sugarpolishnewnan.com',
    url: 'https://sugarpolishnewnan.com/',
    tags: ['Làm đẹp', 'Spa Pedicure', 'Newnan, GA Mỹ'],
    features: ['Đặt lịch hẹn Online (Book Now)', 'Bảng dịch vụ Nail & Custom Art', 'Tích hợp bản đồ & Đánh giá Google'],
    color: '#e87500'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'demo-fee',
    question: 'Demo trước có mất phí không?',
    answer: 'Hoàn toàn không mất phí. LocalMate sẽ dựng bản web demo dựa trên thông tin ngành nghề của bạn để bạn duyệt trước cấu trúc và giao diện.'
  },
  {
    id: 'payment-time',
    question: 'Khi nào mới phải thanh toán?',
    answer: 'Bạn chỉ thanh toán khi đã duyệt bản demo, nghiệm thu xong website và nhận bàn giao toàn bộ tài khoản quản trị.'
  },
  {
    id: 'no-logo',
    question: 'Tôi chưa có logo và hình ảnh chuyên nghiệp thì sao?',
    answer: 'Đừng lo! Gói 2.900.000đ của LocalMate đã bao gồm việc tư vấn thiết kế logo cơ bản, tạo 01 ảnh đại diện và 02 ảnh bìa chuẩn nhận diện.'
  },
  {
    id: 'customer-input',
    question: 'Tôi phải cung cấp những gì khi bắt đầu?',
    answer: 'Bạn chỉ cần kể cho chúng tôi nghe bạn đang bán sản phẩm/dịch vụ gì, địa chỉ, số điện thoại và gửi ảnh sản phẩm sẵn có (ảnh chụp điện thoại vẫn dùng tốt).'
  },
  {
    id: 'website-edit',
    question: 'Tôi có tự sửa website sau khi bàn giao được không?',
    answer: 'Có. Chúng tôi chọn giải pháp quản trị cực kỳ đơn giản, đồng thời cung cấp 01 tài liệu hướng dẫn + 01 buổi hướng dẫn trực tiếp 60 phút để bạn tự làm chủ.'
  },
  {
    id: 'domain-hosting',
    question: 'Chi phí Hosting và Tên miền được tính thế nào?',
    answer: 'LocalMate hỗ trợ tư vấn và cài đặt tên miền + hosting tối ưu chi phí nhất cho bạn (chỉ từ vài trăm nghìn/năm), không nâng giá hay thu phí chênh lệch.'
  },
  {
    id: 'account-ownership',
    question: 'Tôi có nắm giữ toàn bộ tài khoản không?',
    answer: 'Cam kết 100%! Sau khi bàn giao, toàn bộ quyền quản trị tên miền, website, fanpage Facebook và Google Maps đều thuộc về bạn.'
  },
  {
    id: 'sales-guarantee',
    question: 'LocalMate có cam kết bán được ngay bao nhiêu đơn hàng không?',
    answer: 'Chúng tôi cam kết xây dựng sự hiện diện uy tín, minh bạch để khách tìm thấy bạn sẽ tin tưởng và dễ liên hệ nhất. Chúng tôi không đưa ra những lời hứa doanh thu ảo thiếu cơ sở.'
  },
  {
    id: 'post-handover-support',
    question: 'Có hỗ trợ kỹ thuật sau khi bàn giao không?',
    answer: 'Có! LocalMate đồng hành lâu dài cùng bạn, hỗ trợ giải đáp thắc mắc kỹ thuật và bảo hành hệ thống liên tục.'
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

