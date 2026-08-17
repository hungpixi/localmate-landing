export interface ServiceEntity {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categorySlug: string;
  badge?: string;
  heroAsset: string;
  
  // 7 Conversion Questions & Positioning
  problem: string;
  outcome: string;
  promise: string;
  description: string;
  
  startingPrice: string;
  priceNote: string;
  sla: string;
  
  suitableFor: string[];
  notSuitableFor: string[];
  
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  requirements: string[];
  
  proofCaseStudySlug?: string;
  proofHighlight?: string;
  
  faqs: {
    question: string;
    answer: string;
  }[];
  
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  
  primaryCTA: string;
  secondaryCTA: string;
  status: 'ACTIVE' | 'DRAFT';
}

export const CORE_P0_SERVICES: ServiceEntity[] = [
  {
    id: 'google-ads',
    slug: 'google-ads',
    name: 'Dịch vụ Cài Đặt & Tối Ưu Quảng Cáo Google Ads',
    shortName: 'Google Ads',
    category: 'Ads & Conversion',
    categorySlug: 'ads-conversion',
    badge: 'Chuyển Đổi Cao ⭐',
    heroAsset: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Quảng cáo tiêu tốn ngân sách hàng tháng nhưng chỉ toàn click rác, không tạo ra cuộc gọi, tin nhắn hay khách hàng thực tế.',
    outcome: 'Tiếp cận chính xác khách hàng đang chủ động tìm kiếm dịch vụ của bạn trên Google, tối ưu chi phí trên mỗi cuộc gọi/tin nhắn.',
    promise: 'Rõ ràng từng từ khóa tìm kiếm (Search Terms), loại trừ từ khóa rác, cài đặt đo lường chuyển đổi chính xác 100%.',
    description: 'LocalMate trực tiếp khảo sát nhu cầu, lên bộ từ khóa chuẩn thương mại, viết mẫu quảng cáo hấp dẫn và cấu hình theo dõi lượt gọi/chat để bạn biết chính xác đồng tiền quảng cáo sinh lời ra sao.',
    startingPrice: 'Từ 390.000đ',
    priceNote: 'Gói khởi tạo chiến dịch hoặc phí quản trị tối ưu theo tháng linh hoạt.',
    sla: '3–5 ngày làm việc',
    suitableFor: [
      'Doanh nghiệp dịch vụ, nhà thầu, cửa hàng, phòng khám, trung tâm cần khách hàng có nhu cầu gấp',
      'Người đã từng tự chạy quảng cáo nhưng bị lỗ do nhiều click ảo và từ khóa không đúng nhu cầu',
      'Doanh nghiệp muốn kiểm soát ngân sách minh bạch từ 3 triệu đến 50 triệu/tháng'
    ],
    notSuitableFor: [
      'Sản phẩm mới hoàn toàn chưa có ai tìm kiếm trên Google (nên dùng kênh Social Media)',
      'Website chưa có thông tin rõ ràng hoặc không có nút liên hệ/gọi điện thuận tiện'
    ],
    deliverables: [
      'Khảo sát và lập bảng từ khóa tìm kiếm có ý định mua hàng cao (High Intent Keywords)',
      'Thiết lập danh sách từ khóa phủ định (Negative Keywords) để chặn tuyệt đối click rác',
      'Viết 03–05 mẫu quảng cáo Responsive Search Ads (RSA) chuẩn thông điệp và ưu đãi',
      'Cấu hình tiện ích mở rộng: Nút gọi hotline, địa chỉ Google Maps, đường dẫn trang con',
      'Tích hợp theo dõi chuyển đổi cuộc gọi và form qua Google Tag Manager (GTM)',
      'Bàn giao 100% quyền quản trị tài khoản quảng cáo chính chủ'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát & Lập từ khóa',
        description: 'Phân tích dịch vụ, đối thủ cạnh tranh và lọc danh sách từ khóa có lượng tìm kiếm thực tế.'
      },
      {
        step: '02',
        title: 'Cài đặt chiến dịch & Tiện ích',
        description: 'Thiết lập nhóm quảng cáo, tiện ích vị trí Maps, hotline và ngân sách hàng ngày.'
      },
      {
        step: '03',
        title: 'Cấu hình Tracking đo lường',
        description: 'Cài mã chuyển đổi để biết từ khóa nào mang lại cuộc gọi và tin nhắn thật.'
      },
      {
        step: '04',
        title: 'Bật chiến dịch & Tối ưu 7 ngày đầu',
        description: 'Theo dõi search terms thực tế, phủ định từ khóa rác và tối ưu giá thầu (CPC).'
      },
      {
        step: '05',
        title: 'Báo cáo & Bàn giao tài khoản',
        description: 'Gửi báo cáo số liệu minh bạch và hướng dẫn theo dõi ngân sách chủ động.'
      }
    ],
    requirements: [
      'Website hoặc Landing Page giới thiệu dịch vụ đã hoạt động',
      'Số điện thoại Hotline hoặc link Zalo nhận tư vấn',
      'Ngân sách quảng cáo dự kiến trả cho Google mỗi ngày'
    ],
    proofCaseStudySlug: 'nha-khoa-nucuoiduyen-tphcm',
    proofHighlight: 'Giảm 42% chi phí trên mỗi lượt đặt lịch sau khi làm sạch Search Terms và tối ưu Landing Page.',
    faqs: [
      {
        question: 'Tôi có phải tự nạp tiền cho Google không?',
        answer: 'Có. Bạn trực tiếp thêm thẻ thanh toán (Visa/Mastercard) vào tài khoản Google Ads của chính bạn. LocalMate không giữ tiền quảng cáo của khách hàng.'
      },
      {
        question: 'Bao lâu thì quảng cáo bắt đầu có khách gọi?',
        answer: 'Ngay khi chiến dịch được Google duyệt (thường sau 2-4 giờ từ lúc bật), quảng cáo sẽ xuất hiện trước mắt người tìm kiếm.'
      },
      {
        question: 'LocalMate có cam kết doanh thu không?',
        answer: 'LocalMate cam kết hiển thị đúng đối tượng tìm kiếm và tối ưu chi phí chuyển đổi. Doanh thu cuối cùng còn phụ thuộc vào giá bán và kỹ năng tư vấn chốt sale của bạn.'
      }
    ],
    relatedServiceSlugs: ['analytics-tracking', 'website-landing-page', 'google-maps'],
    relatedArticleSlugs: ['cach-doc-search-terms-google-ads', 'chay-google-ads-bao-nhieu-tien', 'tai-sao-chay-quang-cao-khong-co-khach'],
    primaryCTA: 'Nhận Tư Vấn Google Ads',
    secondaryCTA: 'Xem Bảng Giá Ads',
    status: 'ACTIVE'
  },
  {
    id: 'google-maps',
    slug: 'google-maps',
    name: 'Dịch vụ Khởi Tạo & Tối Ưu SEO Google Maps (Local SEO)',
    shortName: 'Google Maps',
    category: 'Google, SEO, GEO & Local',
    categorySlug: 'google-seo',
    badge: 'Khách Địa Phương ⭐',
    heroAsset: '/assets/illustrations/mascot-local-map.png',
    problem: 'Khách hàng xung quanh tìm kiếm sản phẩm trên điện thoại nhưng chỉ thấy đối thủ, vị trí cửa hàng của bạn không xuất hiện hoặc bị đánh giá thấp.',
    outcome: 'Đưa cửa hàng/doanh nghiệp của bạn xuất hiện nổi bật trong Top 3 Google Maps khi khách hàng tìm kiếm quanh khu vực.',
    promise: 'Chuẩn hóa hồ sơ Google Business Profile, xác minh vị trí chính chủ, xây dựng quy trình thu hút đánh giá 5 sao thật.',
    description: 'LocalMate tối ưu toàn diện từ danh mục ngành nghề, hình ảnh sản phẩm thực tế, từ khóa khu vực địa phương đến cấu hình liên kết website và nút chỉ đường nhanh.',
    startingPrice: 'Từ 299.000đ',
    priceNote: 'Khởi tạo mới hoặc tối ưu nâng cấp hồ sơ Google Business Profile có sẵn.',
    sla: '3–7 ngày làm việc',
    suitableFor: [
      'Cửa hàng bán lẻ, quán ăn, quán cafe, spa, salon tóc, phòng khám, gara ô tô có địa chỉ cụ thể',
      'Đơn vị kinh doanh dịch vụ tại nhà (sửa điện nước, chuyển nhà) phục vụ theo quận huyện',
      'Cơ sở chưa có hồ sơ Maps hoặc hồ sơ bị sai thông tin, thiếu hình ảnh'
    ],
    notSuitableFor: [
      'Kinh doanh online hoàn toàn không có địa chỉ tiếp khách hoặc kho hàng tại Việt Nam'
    ],
    deliverables: [
      'Khởi tạo hoặc claim quyền quản trị Google Business Profile chính chủ',
      'Chuẩn hóa tên doanh nghiệp, danh mục chính/phụ, địa chỉ, số hotline, giờ mở cửa',
      'Tối ưu hóa bộ từ khóa dịch vụ theo vị trí địa lý (Quận/Huyện/Tỉnh)',
      'Thiết kế và tải lên bộ 10–15 hình ảnh thực tế chất lượng cao (biển hiệu, không gian, sản phẩm)',
      'Tạo đường link ngắn và mã QR Code xin đánh giá 5 sao chuyên nghiệp',
      'Cấu hình bộ câu hỏi thường gặp (FAQ) tự động trên Google Maps'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát địa điểm & Hiện trạng',
        description: 'Kiểm tra tọa độ chính xác, tình trạng xác minh và đối thủ cạnh tranh trong bán kính 3–5km.'
      },
      {
        step: '02',
        title: 'Chuẩn hóa thông tin hồ sơ',
        description: 'Điền đúng danh mục ngành nghề, mô tả dịch vụ chuẩn SEO và liên kết hotline.'
      },
      {
        step: '03',
        title: 'Xử lý hình ảnh & Geotag',
        description: 'Tối ưu hình ảnh thực tế của cơ sở để tăng độ tin cậy với thuật toán Google.'
      },
      {
        step: '04',
        title: 'Thiết lập công cụ xin Review',
        description: 'Tạo mã QR để bàn tại cửa hàng và kịch bản nhắn tin xin đánh giá từ khách quen.'
      },
      {
        step: '05',
        title: 'Nghiệm thu & Bàn giao',
        description: 'Kiểm tra hiển thị thực tế trên Google Maps và bàn giao quyền sở hữu tối cao.'
      }
    ],
    requirements: [
      'Tên cửa hàng, địa chỉ chính xác và số điện thoại nhận cuộc gọi',
      '3–5 bức ảnh chụp biển hiệu mặt tiền và không gian bên trong cửa hàng'
    ],
    proofCaseStudySlug: 'quan-an-ong-tam-saigon',
    proofHighlight: 'Tăng 215% lượt nhấp gọi điện và chỉ đường sau 30 ngày tối ưu hồ sơ Google Maps và thu thập 35 đánh giá thật.',
    faqs: [
      {
        question: 'LocalMate có bán đánh giá (review) ảo không?',
        answer: 'Tuyệt đối KHÔNG. Mua review ảo dễ khiến hồ sơ bị Google khóa vĩnh viễn. LocalMate hỗ trợ công cụ và kịch bản để bạn thu thập đánh giá thật từ khách hàng đã trải nghiệm dịch vụ.'
      },
      {
        question: 'Tôi có được làm chủ tài khoản Google Maps không?',
        answer: 'Có, 100%. Bạn là Chủ sở hữu chính (Primary Owner) bằng tài khoản Gmail của bạn.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'content-marketing'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'co-nen-mua-review-google-maps-khong', 'vi-sao-cua-hang-khong-xuat-hien-tren-maps'],
    primaryCTA: 'Tối Ưu Google Maps Ngay',
    secondaryCTA: 'Xem Báo Giá Maps',
    status: 'ACTIVE'
  },
  {
    id: 'website-landing-page',
    slug: 'website-landing-page',
    name: 'Dịch vụ Thiết Kế Website & Landing Page Chuyển Đổi',
    shortName: 'Website / Landing Page',
    category: 'Website & Landing Page',
    categorySlug: 'website-landing',
    badge: 'Nền Móng Số ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chưa có website hoặc website cũ tải chậm, vỡ giao diện trên điện thoại, khách vào xem không hiểu giá cả và không biết bấm đâu để liên hệ.',
    outcome: 'Sở hữu trang web chuyên nghiệp, hiển thị mượt mà trên mọi thiết bị, có đầy đủ bảng giá minh bạch và nút gọi Zalo tức thì.',
    promise: 'Duyệt bản demo giao diện trước 0đ, nghiệm thu tính năng thực tế hoạt động mượt mà rồi mới thanh toán.',
    description: 'LocalMate thiết kế website theo triết lý "Đơn giản - Rõ ràng - Bán được hàng". Tập trung vào trải nghiệm khách hàng di động, tốc độ tải trang dưới 2 giây và chuẩn hóa SEO Google.',
    startingPrice: 'Từ 490.000đ (Landing mini) / 2.900.000đ (Trọn gói)',
    priceNote: 'Không phát sinh chi phí. Bàn giao đầy đủ mã nguồn và tài khoản quản trị.',
    sla: '5–10 ngày làm việc',
    suitableFor: [
      'Hộ kinh doanh, người làm nghề, nhà thầu xây dựng, xưởng sản xuất cần một trang web uy tín để gửi khách',
      'Doanh nghiệp chạy quảng cáo Google/Facebook cần Landing page tải nhanh và chuyển đổi cao',
      'Cơ sở dịch vụ muốn tích hợp bảng giá, form đặt lịch và nút liên hệ Zalo 24/7'
    ],
    notSuitableFor: [
      'Các sàn thương mại điện tử đa người bán khổng lồ như Shopee/Lazada (cần hệ thống enterprise riêng)'
    ],
    deliverables: [
      'Website hoàn chỉnh chuẩn responsive trên điện thoại, máy tính bảng và máy tính',
      'Biên tập cấu trúc nội dung: Giới thiệu, Dịch vụ/Sản phẩm, Bảng giá, Quy trình, Liên hệ',
      'Tích hợp thanh công cụ chuyển đổi nhanh: Gọi hotline, Nhắn tin Zalo, Form báo giá',
      'Tối ưu tốc độ tải trang cao (Core Web Vitals) và bảo mật SSL miễn phí',
      'Tích hợp sẵn Google Analytics 4 (GA4) và mã theo dõi chuyển đổi',
      'Bàn giao 100% mã nguồn và hướng dẫn chỉnh sửa dễ dàng'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát & Thu thập thông tin',
        description: 'Khách hàng gửi thông tin cơ bản hoặc trò chuyện 30 phút để chốt nội dung chính.'
      },
      {
        step: '02',
        title: 'Dựng bản thiết kế Demo',
        description: 'LocalMate lên giao diện thực tế để bạn xem trước phong cách và bố cục.'
      },
      {
        step: '03',
        title: 'Hoàn thiện nội dung & Tính năng',
        description: 'Điền đầy đủ thông tin dịch vụ, bảng giá, hình ảnh và gắn các nút liên hệ.'
      },
      {
        step: '04',
        title: 'Nghiệm thu thực tế',
        description: 'Kiểm tra tốc độ tải trang, khả năng hiển thị trên iPhone/Android và form nhận tin.'
      },
      {
        step: '05',
        title: 'Bàn giao & Thanh toán',
        description: 'Bàn giao tài khoản quản trị, hướng dẫn sử dụng và tiến hành thanh toán hợp đồng.'
      }
    ],
    requirements: [
      'Tên doanh nghiệp, ngành nghề và số hotline/Zalo',
      'Danh sách sản phẩm/dịch vụ chính và bảng giá cơ bản (nếu có)',
      'Hình ảnh thực tế hoặc LocalMate hỗ trợ lựa chọn bộ ảnh nhận diện phù hợp'
    ],
    proofCaseStudySlug: 'mam-non-tu-thuc-tphcm',
    proofHighlight: 'Tăng 85% tỷ lệ phụ huynh để lại thông tin tư vấn học phí nhờ Landing Page tinh gọn, rõ ràng.',
    faqs: [
      {
        question: 'Demo trước 0đ có bị ràng buộc gì không?',
        answer: 'Hoàn toàn không. Nếu bản demo không phù hợp với định hướng của bạn, bạn có quyền dừng lại mà không mất bất kỳ chi phí nào.'
      },
      {
        question: 'Chi phí duy trì hàng năm bao gồm những gì?',
        answer: 'Chỉ bao gồm phí gia hạn Tên miền (.vn hoặc .com) và Hosting lưu trữ theo biểu phí nhà cung cấp. LocalMate không thu phí ẩn bản quyền.'
      }
    ],
    relatedServiceSlugs: ['google-ads', 'google-maps', 'content-marketing', 'analytics-tracking'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'website-nhanh-anh-huong-khach-hang-the-nao', 'doanh-nghiep-nho-can-chuan-bi-gi-khi-lam-web'],
    primaryCTA: 'Nhận Bản Web Demo 0đ',
    secondaryCTA: 'Xem Các Mẫu Demo',
    status: 'ACTIVE'
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    name: 'Dịch vụ Quản Trị Nội Dung & Chăm Sóc Kênh Digital Hàng Tháng',
    shortName: 'Nội Dung & Chăm Sóc',
    category: 'Recurring Digital Operations',
    categorySlug: 'digital-care',
    badge: 'Đồng Hành Dài Lâu ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Chủ doanh nghiệp bận rộn làm nghề, không có thời gian viết bài, thiết kế hình ảnh và cập nhật thông tin khiến website và Fanpage bị bỏ hoang nhiều tháng.',
    outcome: 'Kênh online luôn tươi mới, đều đặn có bài viết chuyên môn, hình ảnh sản phẩm bắt mắt và được giám sát kỹ thuật 24/7.',
    promise: 'Lên lịch nội dung trước mỗi tháng, báo cáo minh bạch từng bài đăng và hỗ trợ sửa đổi nhanh qua Zalo.',
    description: 'Gói chăm sóc định kỳ đóng vai trò như một phòng marketing và kỹ thuật thuê ngoài tinh gọn. Chúng tôi giúp bạn biên tập bài viết chuẩn nhận diện, cập nhật sản phẩm mới và kiểm tra an toàn website.',
    startingPrice: 'Từ 990.000đ / tháng',
    priceNote: 'Gói chăm sóc định kỳ linh hoạt, có thể dừng hoặc nâng cấp bất cứ lúc nào.',
    sla: 'Hỗ trợ xử lý trong vòng 4–24h',
    suitableFor: [
      'Doanh nghiệp đã có website và Fanpage nhưng nhân sự bận không thể duy trì bài viết đều',
      'Cơ sở kinh doanh muốn xây dựng uy tín chuyên môn và chia sẻ kiến thức hữu ích cho khách hàng',
      'Đơn vị cần người trực kỹ thuật để sao lưu dữ liệu và xử lý sự cố website phát sinh'
    ],
    notSuitableFor: [
      'Yêu cầu quay dựng video TVC quy mô lớn tại phim trường chuyên nghiệp (sẽ tính theo dự án riêng)'
    ],
    deliverables: [
      'Kế hoạch nội dung chi tiết theo tháng (Chủ đề, thông điệp, ngày đăng)',
      '12–15 bài viết chất lượng cao chuẩn nhận diện thương hiệu',
      '12–15 hình ảnh/banner thiết kế đồng bộ màu sắc và logo',
      'Cập nhật sản phẩm, bảng giá hoặc ưu đãi mới lên website',
      'Giám sát kỹ thuật, sao lưu dữ liệu và kiểm tra form liên hệ định kỳ',
      'Báo cáo hiệu quả tương tác và lượt xem vào cuối mỗi tháng'
    ],
    process: [
      {
        step: '01',
        title: 'Lập kế hoạch tháng',
        description: 'Thống nhất các chủ đề, ưu đãi hoặc sản phẩm trọng tâm cần đẩy mạnh trong tháng.'
      },
      {
        step: '02',
        title: 'Biên tập & Thiết kế',
        description: 'Viết nội dung, thiết kế hình ảnh và gửi khách hàng duyệt trước.'
      },
      {
        step: '03',
        title: 'Đăng tải & Tối ưu',
        description: 'Lên lịch xuất bản đều đặn trên Website, Facebook và Google Business Profile.'
      },
      {
        step: '04',
        title: 'Bảo trì kỹ thuật',
        description: 'Kiểm tra tốc độ tải trang, cập nhật bảo mật và backup dữ liệu định kỳ.'
      },
      {
        step: '05',
        title: 'Báo cáo định kỳ',
        description: 'Tổng kết kết quả thực hiện và đề xuất phương án cho tháng tiếp theo.'
      }
    ],
    requirements: [
      'Quyền đăng bài lên Fanpage/Website hoặc tài khoản cộng tác viên',
      'Ảnh chụp sản phẩm/dịch vụ thực tế (nếu có) để đội ngũ thiết kế đưa vào bài'
    ],
    proofCaseStudySlug: 'nha-thau-nhom-kinh-binh-duong',
    proofHighlight: 'Duy trì đều đặn 15 bài viết chuyên môn mỗi tháng giúp tăng 140% lượng khách hàng tin tưởng gọi tư vấn dự án.',
    faqs: [
      {
        question: 'Tôi có phải ký hợp đồng dài hạn không?',
        answer: 'Không bắt buộc. Bạn có thể thanh toán theo từng tháng. Khi muốn dừng, chỉ cần thông báo trước 7 ngày.'
      },
      {
        question: 'Nếu tôi muốn chỉnh sửa bài viết thì sao?',
        answer: 'Mọi bài viết đều được gửi cho bạn duyệt trước khi đăng. Đội ngũ LocalMate hỗ trợ chỉnh sửa nhanh chóng qua nhóm Zalo riêng.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-maps', 'google-ads'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong', 'chu-doanh-nghiep-tu-lam-content-hay-thue-ngoai'],
    primaryCTA: 'Đăng Ký Gói Chăm Sóc',
    secondaryCTA: 'Xem Kế Hoạch Mẫu',
    status: 'ACTIVE'
  }
];

export const getAllServices = (): ServiceEntity[] => {
  return CORE_P0_SERVICES;
};

export const getServiceBySlug = (slug: string): ServiceEntity | undefined => {
  return CORE_P0_SERVICES.find((s) => s.slug === slug);
};
