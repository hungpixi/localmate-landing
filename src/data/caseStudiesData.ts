export interface CaseStudyEntity {
  id: string;
  slug: string;
  clientDisplayName: string;
  anonymized: boolean;
  industry: string;
  industryKey: string;
  location: string;
  heroImage: string;
  
  problem: string;
  startingState: string[];
  
  servicesUsed: {
    serviceName: string;
    serviceSlug: string;
  }[];
  
  workDone: string[];
  deliverables: string[];
  
  period: string;
  evidence: {
    metric: string;
    value: string;
    label: string;
  }[];
  
  resultsSummary: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  
  claimStatus: 'CASE_STUDY';
  relatedServiceSlugs: string[];
}

export const CASE_STUDIES: CaseStudyEntity[] = [
  {
    id: 'mam-non-tu-thuc-tphcm',
    slug: 'mam-non-tu-thuc-tphcm',
    clientDisplayName: 'Trường Mầm Non Tư Thục (TP.HCM)',
    anonymized: true,
    industry: 'Giáo Dục & Mầm Non',
    industryKey: 'giao-duc',
    location: 'Quận 7, TP. Hồ Chí Minh',
    heroImage: '/assets/illustrations/hero-store-phone.png',
    problem: 'Trường chuẩn bị mở cơ sở mới nhưng website cũ chỉ là một trang blog đơn sơ, không có thông tin biểu phí rõ ràng, phụ huynh tìm kiếm quanh khu vực không thấy vị trí trên Google Maps.',
    startingState: [
      'Website cũ tải chậm trên điện thoại, không có form đăng ký tham quan trường',
      'Hồ sơ Google Maps chưa xác minh, thường xuyên bị khách hàng nhầm lẫn với cơ sở khác',
      'Toàn bộ phụ huynh mới đều phải hỏi qua người quen, tỷ lệ tiếp cận tự nhiên rất thấp'
    ],
    servicesUsed: [
      { serviceName: 'Thiết Kế Landing Page Tuyển Sinh', serviceSlug: 'website-landing-page' },
      { serviceName: 'Tối Ưu SEO Google Maps', serviceSlug: 'google-maps' },
      { serviceName: 'Tracking Chuyển Đổi Form Đăng Ký', serviceSlug: 'analytics-tracking' }
    ],
    workDone: [
      'Thiết kế Landing Page tuyển sinh với hình ảnh cơ sở vật chất thực tế và bảng học phí minh bạch',
      'Xác minh vị trí chính chủ trên Google Business Profile và cập nhật bộ ảnh 360 độ trường học',
      'Gắn mã theo dõi form đăng ký tham quan và nút gọi tư vấn hotline trực tiếp vào Zalo ban giám hiệu'
    ],
    deliverables: [
      '01 Landing page tuyển sinh tối ưu chuyển đổi di động',
      '01 Hồ sơ Google Maps chuẩn SEO với 25 đánh giá thật từ phụ huynh',
      'Hệ thống thông báo tức thì khi phụ huynh để lại số điện thoại về nhóm Zalo tuyển sinh'
    ],
    period: 'Triển khai trong 10 ngày làm việc (Tháng 5/2026)',
    evidence: [
      { metric: 'Tỷ lệ để lại SĐT', value: '+85%', label: 'So với giai đoạn chỉ dùng Fanpage' },
      { metric: 'Lượt tìm thấy trên Maps', value: '1.450+', label: 'Lượt hiển thị tìm kiếm mỗi tháng' },
      { metric: 'Phụ huynh đăng ký mới', value: '38 hồ sơ', label: 'Trong đợt tuyển sinh hè' }
    ],
    resultsSummary: 'Trường đã lấp đầy 90% chỉ tiêu lớp mầm non mới chỉ sau 45 ngày nhờ sự kết hợp giữa Landing Page rõ biểu phí và vị trí Google Maps nổi bật tại Quận 7.',
    testimonial: {
      quote: 'Phụ huynh thời nay tìm trường cho con rất kỹ trên điện thoại. Nhờ LocalMate làm trang web rõ ràng và đưa trường lên Google Maps, phụ huynh đến xem trường đông hơn hẳn mà không cần phát tờ rơi như trước.',
      author: 'Cô Mai Lan',
      role: 'Hiệu trưởng cơ sở'
    },
    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['website-landing-page', 'google-maps', 'analytics-tracking']
  },
  {
    id: 'nha-khoa-nucuoiduyen-tphcm',
    slug: 'nha-khoa-nucuoiduyen-tphcm',
    clientDisplayName: 'Phòng Khám Nha Khoa Nụ Cười Xinh (TP.HCM)',
    anonymized: true,
    industry: 'Y Tế, Nha Khoa & Spa',
    industryKey: 'spa',
    location: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
    heroImage: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Tự chạy quảng cáo Google Ads tốn 15 triệu/tháng nhưng nhận về phần lớn là click rác, cuộc gọi hỏi những dịch vụ phòng khám không cung cấp.',
    startingState: [
      'Ngân sách Google Ads bị phân bổ vào các từ khóa quá rộng như "răng đẹp", "nha sĩ giỏi"',
      'Chưa từng cài đặt danh sách từ khóa phủ định (Negative Keywords)',
      'Không biết từ khóa nào thực sự tạo ra khách đến nhổ răng khôn hoặc niềng răng'
    ],
    servicesUsed: [
      { serviceName: 'Cài Đặt & Tối Ưu Google Ads', serviceSlug: 'google-ads' },
      { serviceName: 'Landing Page Đặt Lịch Khám 0đ', serviceSlug: 'website-landing-page' },
      { serviceName: 'Cài Đặt GA4 & GTM Tracking', serviceSlug: 'analytics-tracking' }
    ],
    workDone: [
      'Lọc sạch 120+ từ khóa tìm kiếm rác, chuyển sang từ khóa chính xác có ý định đặt lịch cao',
      'Thiết kế trang đích đặt lịch khám có bảng giá dịch vụ niêm yết rõ ràng theo quy định',
      'Cài đặt theo dõi lượt bấm gọi hotline và form đăng ký tư vấn niềng răng'
    ],
    deliverables: [
      'Cấu trúc tài khoản Google Ads chuẩn hóa với 3 nhóm dịch vụ mũi nhọn',
      'Landing page chuyên biệt cho dịch vụ Niềng răng & Nhổ răng khôn không đau',
      'Bảng báo cáo hiệu quả chi phí trên từng lượt đặt lịch thành công'
    ],
    period: 'Triển khai trong 7 ngày, theo dõi tối ưu 30 ngày (Tháng 6/2026)',
    evidence: [
      { metric: 'Chi phí trên mỗi cuộc gọi', value: '-42%', label: 'Giảm từ 180k xuống 104k/cuộc gọi' },
      { metric: 'Tỷ lệ khách đến khám', value: '68%', label: 'Khách gọi điện có nhu cầu thật' },
      { metric: 'Lượt đặt lịch thành công', value: '54 ca', label: 'Chỉ tính riêng trong tháng đầu tiên' }
    ],
    resultsSummary: 'Phòng khám tiết kiệm được gần 40% ngân sách quảng cáo vô bổ, đồng thời tăng gấp đôi số lượng ca khám dịch vụ răng hàm mặt chuyên sâu.',
    testimonial: {
      quote: 'Lúc trước chạy ads cứ thấy tiền trừ vèo vèo mà không có khách. Sau khi được LocalMate lọc từ khóa và gắn theo dõi cuộc gọi, tôi mới biết tiền của mình đi đâu về đâu.',
      author: 'Bác sĩ Tuấn',
      role: 'Chủ phòng khám'
    },
    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['google-ads', 'analytics-tracking', 'website-landing-page']
  },
  {
    id: 'quan-an-ong-tam-saigon',
    slug: 'quan-an-ong-tam-saigon',
    clientDisplayName: 'Quán Ăn Đặc Sản Nam Bộ Ông Tám (Sài Gòn)',
    anonymized: true,
    industry: 'Nhà Hàng & F&B',
    industryKey: 'nha-hang',
    location: 'Quận 3, TP. Hồ Chí Minh',
    heroImage: '/assets/illustrations/mascot-local-map.png',
    problem: 'Quán ăn lâu năm có chất lượng món ăn ngon nhưng khách du lịch và nhân viên văn phòng xung quanh không biết vị trí, hồ sơ Google Maps bị mất quyền quản trị.',
    startingState: [
      'Hồ sơ Google Maps do khách hàng tự tạo bị sai số điện thoại và địa chỉ',
      'Không có hình ảnh menu và không gian quán được cập nhật mới',
      'Khách du lịch tìm quán ăn gần đây thường chọn các quán có nhiều review 5 sao hơn'
    ],
    servicesUsed: [
      { serviceName: 'Khởi Tạo & Khôi Phục Google Maps', serviceSlug: 'google-maps' },
      { serviceName: 'Chụp & Thiết Kế Menu Số', serviceSlug: 'website-landing-page' },
      { serviceName: 'Bộ Công Cụ Mã QR Xin Review 5 Sao', serviceSlug: 'google-maps' }
    ],
    workDone: [
      'Claim lại quyền sở hữu chính chủ Google Business Profile cho chủ quán',
      'Chụp và đăng tải 20 bức ảnh món ăn thực tế bắt mắt kèm giá bán công khai',
      'In bảng mica có mã QR để tại từng bàn ăn khuyến khích khách hàng đánh giá thật'
    ],
    deliverables: [
      'Hồ sơ Google Maps chính chủ chuẩn SEO với đầy đủ menu và giờ mở cửa',
      'Website menu số xem trên điện thoại cực nhanh qua mã QR',
      '50 đánh giá 5 sao thật từ thực khách trải nghiệm tại quán trong 30 ngày'
    ],
    period: 'Hoàn thiện trong 5 ngày (Tháng 4/2026)',
    evidence: [
      { metric: 'Lượt tìm kiếm chỉ đường', value: '+215%', label: 'Tăng đột biến trên Google Maps' },
      { metric: 'Lượt xem menu online', value: '3.200+', label: 'Lượt quét mã QR mỗi tháng' },
      { metric: 'Đánh giá 5 sao mới', value: '+74 review', label: 'Tất cả đều là khách ăn tại bàn' }
    ],
    resultsSummary: 'Quán trở thành điểm đến gợi ý hàng đầu trong danh mục "Quán ăn Nam Bộ gần đây" tại khu vực Quận 3, thu hút đông đảo khách văn phòng và khách du lịch.',
    testimonial: {
      quote: 'Khách đến quán giờ hay bảo là nhìn trên Google thấy hình menu hấp dẫn với nhiều review tốt nên ghé thử. Rất cảm ơn đội ngũ LocalMate!',
      author: 'Anh Hùng',
      role: 'Quản lý quán'
    },
    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'content-marketing']
  },
  {
    id: 'nha-thau-nhom-kinh-binh-duong',
    slug: 'nha-thau-nhom-kinh-binh-duong',
    clientDisplayName: 'Cơ Sở Nhôm Kính & Sắt Mỹ Thuật (Bình Dương)',
    anonymized: true,
    industry: 'Nhà Thầu & Xây Dựng',
    industryKey: 'xay-dung',
    location: 'Thủ Dầu Một, Bình Dương',
    heroImage: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Chủ xưởng có tay nghề cơ khí cao nhưng trước giờ chỉ nhận việc qua thầu phụ bị ép giá, không có hồ sơ năng lực online để khách hàng trực tiếp tin tưởng.',
    startingState: [
      'Chưa từng có website, hình ảnh công trình hoàn thiện lưu rải rác trong điện thoại',
      'Khách hỏi báo giá thì chỉ nhắn tin miệng qua Zalo, thiếu tính chuyên nghiệp',
      'Muốn tiếp cận các chủ nhà xây biệt thự, nhà phố trực tiếp tại Bình Dương'
    ],
    servicesUsed: [
      { serviceName: 'Gói Khởi Tạo Hiện Diện Số 2.9M', serviceSlug: 'website-landing-page' },
      { serviceName: 'Gói Chăm Sóc Bài Viết Công Trình', serviceSlug: 'content-marketing' }
    ],
    workDone: [
      'Tuyển chọn và biên tập 30 hình ảnh công trình thực tế (cửa nhôm Xingfa, lan can kính, cổng sắt)',
      'Xây dựng website giới thiệu năng lực xưởng và quy trình thi công 4 bước rõ ràng',
      'Định kỳ đăng tải bài viết chia sẻ kinh nghiệm chọn vật tư nhôm kính chuẩn'
    ],
    deliverables: [
      '01 Website hồ sơ năng lực chuẩn di động có bảng giá tham khảo chi tiết',
      '01 Trang Google Business Profile cho xưởng sản xuất',
      '15 bài viết giới thiệu công trình thực tế mỗi tháng'
    ],
    period: 'Triển khai trong 8 ngày làm việc (Tháng 3/2026)',
    evidence: [
      { metric: 'Hợp đồng nhận trực tiếp', value: '07 công trình', label: 'Trong quý đầu tiên sau khi có web' },
      { metric: 'Giá trị hợp đồng', value: '+35%', label: 'Nhờ không qua khâu trung gian' },
      { metric: 'Lượt gửi link hồ sơ', value: '120+ lần', label: 'Gửi khách xem mẫu trực tiếp' }
    ],
    resultsSummary: 'Xưởng đã chủ động tìm kiếm được khách hàng gia chủ trực tiếp tại Thủ Dầu Một và Dĩ An, nâng cao biên lợi nhuận đáng kể nhờ không bị cắt phế.',
    testimonial: {
      quote: 'Có trang web với hình ảnh công trình rõ ràng, mình gửi cho chủ nhà xem là họ tin tưởng ngay. Báo giá có quy cách đàng hoàng nên chốt hợp đồng dễ hơn hẳn.',
      author: 'Anh Minh',
      role: 'Chủ cơ sở nhôm kính'
    },
    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['website-landing-page', 'content-marketing', 'google-maps']
  },
  {
    id: 'gara-o-to-autocare-thuduc',
    slug: 'gara-o-to-autocare-thuduc',
    clientDisplayName: 'Trung Tâm Chăm Sóc & Sửa Chữa Ô Tô (TP. Thủ Đức)',
    anonymized: true,
    industry: 'Dịch Vụ & Ô Tô',
    industryKey: 'doanh-nghiep-nho',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    heroImage: '/assets/illustrations/pricing-laptop-analytics.png',
    problem: 'Gara đầu tư trang thiết bị hiện đại nhưng khách vãng lai ít, các dịch vụ chăm sóc xe cao cấp (phủ ceramic, dán phim cách nhiệt) chưa tiếp cận được tệp chủ xe xung quanh.',
    startingState: [
      'Chưa có bảng giá dịch vụ niêm yết online, khách sợ bị "chém giá" nên ngại hỏi',
      'Quảng cáo trên Facebook tốn kém nhưng ít người đem xe đến gara',
      'Thiếu hệ thống đặt lịch hẹn bảo dưỡng trước'
    ],
    servicesUsed: [
      { serviceName: 'Website Giới Thiệu & Bảng Giá Dịch Vụ', serviceSlug: 'website-landing-page' },
      { serviceName: 'Quảng Cáo Google Tìm Kiếm Địa Phương', serviceSlug: 'google-ads' },
      { serviceName: 'Hệ Thống Đặt Lịch Hẹn Zalo Booking', serviceSlug: 'crm-automation' }
    ],
    workDone: [
      'Thiết kế website công khai chi tiết giá bảo dưỡng từng dòng xe (Sedan, SUV, Bán tải)',
      'Chạy chiến dịch Google Ads cho các từ khóa cấp thiết: "Cứu hộ ô tô Thủ Đức", "Bảo dưỡng ô tô gần đây"',
      'Tích hợp form đặt lịch hẹn chọn ngày giờ nhận xe và gửi thông báo trực tiếp về điện thoại quản lý'
    ],
    deliverables: [
      'Website chuyên nghiệp với module bảng giá tra cứu minh bạch',
      'Chiến dịch Google Ads nhắm trúng chủ xe trong bán kính 7km',
      'Quy trình đặt hẹn tự động giảm thiểu thời gian chờ đợi của khách hàng'
    ],
    period: 'Hoàn thiện trong 7 ngày (Tháng 6/2026)',
    evidence: [
      { metric: 'Lượt đặt lịch hẹn trước', value: '45 xe/tháng', label: 'Tăng tính chủ động cho gara' },
      { metric: 'Chi phí chuyển đổi Ads', value: '75.000đ', label: 'Trên mỗi khách gọi cứu hộ/bảo dưỡng' },
      { metric: 'Doanh thu dịch vụ', value: '+40%', label: 'Nhờ tăng trưởng dịch vụ chăm sóc cao cấp' }
    ],
    resultsSummary: 'Gara duy trì lượng xe vào xưởng ổn định mỗi ngày, tối ưu hóa công suất làm việc của đội ngũ kỹ thuật viên.',
    testimonial: {
      quote: 'Khách đi ô tô rất quan tâm đến sự minh bạch về giá và chất lượng. Làm việc với LocalMate rất chuyên nghiệp, các bạn hiểu rõ khách hàng cần xem gì trước khi quyết định mang xe tới.',
      author: 'Anh Quốc Dũng',
      role: 'Giám đốc trung tâm AutoCare'
    },
    claimStatus: 'CASE_STUDY',
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'google-maps']
  }
];

export const getAllCaseStudies = (): CaseStudyEntity[] => {
  return CASE_STUDIES;
};

export const getCaseStudyBySlug = (slug: string): CaseStudyEntity | undefined => {
  return CASE_STUDIES.find((c) => c.slug === slug);
};
