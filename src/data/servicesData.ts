export interface ServiceEntity {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categorySlug: string;
  badge?: string;
  heroAsset: string;
  
  // 7 Conversion Questions & Positioning (Customer-first, no technical jargon)
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
    name: 'Chạy Google Ads — Đưa dịch vụ đến đúng người đang tìm',
    shortName: 'Quảng Cáo Google Ads',
    category: 'Quảng Cáo & Tìm Khách',
    categorySlug: 'quang-cao-google',
    badge: 'Khách Tìm Kiếm ⭐',
    heroAsset: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    problem: 'Quảng cáo tiêu tốn tiền hàng ngày nhưng chỉ toàn người bấm nhầm, không tạo ra cuộc gọi, tin nhắn hay khách hàng thực tế.',
    outcome: 'Đưa dịch vụ của bạn xuất hiện ngay trước mắt những người đang chủ động tìm kiếm trên Google, tập trung vào cuộc gọi, tin nhắn và khách hàng có nhu cầu thật.',
    promise: 'Kiểm tra rõ ràng từng từ khóa tìm kiếm thực tế của khách, chặn từ khóa bấm nhầm, cài đặt đo lường cuộc gọi và tin nhắn chính xác.',
    description: 'LocalMate trực tiếp khảo sát nhu cầu, lên danh sách từ khóa sát với người mua, viết mẫu quảng cáo rõ giá & ưu đãi, cấu hình nút bấm gọi ngay trên điện thoại để bạn biết rõ đồng tiền quảng cáo mang lại bao nhiêu khách hàng.',
    startingPrice: 'Từ 390.000đ',
    priceNote: 'Gói cài đặt ban đầu hoặc phí chăm sóc tối ưu theo tháng linh hoạt.',
    sla: '3–5 ngày làm việc',
    suitableFor: [
      'Doanh nghiệp dịch vụ, nhà thầu, thợ sửa chữa, phòng khám, trung tâm cần khách gọi ngay khi có nhu cầu',
      'Người đã từng tự chạy quảng cáo nhưng bị lỗ do nhiều click ảo và từ khóa không đúng người cần',
      'Cửa hàng muốn kiểm soát ngân sách minh bạch từ vài chục nghìn/ngày'
    ],
    notSuitableFor: [
      'Sản phẩm mới lạ hoàn toàn chưa có ai gõ tìm trên Google (nên dùng mạng xã hội để giới thiệu trước)',
      'Cơ sở chưa có số hotline trực tiếp hoặc chưa có người trực nghe điện thoại'
    ],
    deliverables: [
      'Khảo sát và chọn danh sách từ khóa có người tìm kiếm thực tế để mua hàng',
      'Thiết lập danh sách chặn các từ khóa tìm việc, tìm tài liệu miễn phí để tránh mất tiền oan',
      'Viết 03–05 mẫu quảng cáo rõ dịch vụ, rõ ưu đãi và lời mời gọi điện trực tiếp',
      'Cài đặt nút gọi Hotline và chỉ đường Google Maps hiển thị ngay trong mẫu quảng cáo',
      'Cài mã đo lường để đếm số cuộc gọi và tin nhắn từ quảng cáo',
      'Bàn giao 100% quyền làm chủ tài khoản quảng cáo chính chủ của bạn'
    ],
    process: [
      {
        step: '01',
        title: 'Khảo sát dịch vụ & Từ khóa',
        description: 'Phân tích dịch vụ chủ lực và tìm những câu khách hàng hay gõ khi cần mua.'
      },
      {
        step: '02',
        title: 'Cài đặt chiến dịch & Nút gọi',
        description: 'Tạo quảng cáo, cài ngân sách mỗi ngày và gắn số điện thoại nhận cuộc gọi.'
      },
      {
        step: '03',
        title: 'Cài đặt đo lường cuộc gọi',
        description: 'Thiết lập để biết chính xác từ khóa nào mang lại cuộc gọi và tin nhắn thật.'
      },
      {
        step: '04',
        title: 'Bật quảng cáo & Lọc từ khóa rác',
        description: 'Theo dõi những gì khách vừa gõ để loại bỏ ngay những từ bấm nhầm.'
      },
      {
        step: '05',
        title: 'Báo cáo kết quả & Bàn giao',
        description: 'Gửi bảng tổng kết số cuộc gọi, chi phí và hướng dẫn bạn tự theo dõi dễ dàng.'
      }
    ],
    requirements: [
      'Trang web hoặc trang giới thiệu dịch vụ đã hoạt động',
      'Số điện thoại Hotline hoặc link Zalo nhận tư vấn',
      'Ngân sách quảng cáo dự kiến trả cho Google mỗi ngày'
    ],
    proofCaseStudySlug: 'nha-khoa-nucuoiduyen-tphcm',
    proofHighlight: 'Giảm đáng kể chi phí bấm nhầm sau khi lọc sạch từ khóa không liên quan và gắn nút gọi hotline trực tiếp.',
    faqs: [
      {
        question: 'Tôi có phải tự nạp tiền cho Google không?',
        answer: 'Có. Bạn trực tiếp thêm thẻ thanh toán (Visa/Mastercard) vào tài khoản Google của chính bạn. LocalMate không giữ tiền quảng cáo của khách hàng.'
      },
      {
        question: 'Bao lâu thì quảng cáo bắt đầu có khách gọi?',
        answer: 'Ngay khi quảng cáo được Google duyệt (thường sau vài giờ kể từ lúc bật), dịch vụ của bạn sẽ xuất hiện khi có người tìm kiếm.'
      },
      {
        question: 'LocalMate có cam kết doanh thu không?',
        answer: 'LocalMate cam kết quảng cáo xuất hiện đúng người đang tìm và tối ưu để có nhiều cuộc gọi/tin nhắn nhất. Doanh thu thực tế phụ thuộc vào giá bán và cách tư vấn của bạn.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'content-marketing'],
    relatedArticleSlugs: ['cach-doc-search-terms-google-ads', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Tư Vấn Chạy Google Ads',
    secondaryCTA: 'Xem Bảng Giá Quảng Cáo',
    status: 'ACTIVE'
  },
  {
    id: 'google-maps',
    slug: 'google-maps',
    name: 'Đưa cửa hàng lên Google Maps',
    shortName: 'Google Maps',
    category: 'Bản Đồ & Khách Địa Phương',
    categorySlug: 'google-maps',
    badge: 'Khách Địa Phương ⭐',
    heroAsset: '/assets/illustrations/mascot-local-map.png',
    problem: 'Khách hàng xung quanh mở điện thoại tìm dịch vụ nhưng chỉ thấy quán của đối thủ, vị trí của bạn không có trên bản đồ hoặc thiếu số điện thoại, thiếu hình ảnh.',
    outcome: 'Hoàn thiện hồ sơ Google Maps để khách quanh khu vực dễ dàng tìm thấy địa chỉ, số điện thoại, giờ mở cửa, hình ảnh và bấm chỉ đường đến tiệm.',
    promise: 'Xác minh vị trí chính chủ bằng Gmail của bạn, điền đúng thông tin ngành nghề, tạo mã QR xin đánh giá 5 sao từ khách quen.',
    description: 'LocalMate giúp bạn tạo mới hoặc tối ưu lại vị trí trên Google Maps, cập nhật đầy đủ hình ảnh thực tế, dịch vụ, số hotline để bất kỳ ai tìm kiếm gần bạn đều thấy cửa hàng trông uy tín và dễ liên hệ.',
    startingPrice: 'Từ 299.000đ',
    priceNote: 'Khởi tạo mới hoặc chuẩn hóa hồ sơ Google Maps có sẵn.',
    sla: '3–7 ngày làm việc',
    suitableFor: [
      'Quán ăn, quán cafe, spa, salon tóc, phòng khám, nha khoa, gara ô tô, cửa hàng bán lẻ có địa chỉ đón khách',
      'Đơn vị làm dịch vụ tại nhà (sửa điện nước, sửa khoá, chuyển nhà) phục vụ theo từng quận huyện',
      'Cơ sở chưa có trên bản đồ hoặc vị trí bị sai tên, sai số điện thoại'
    ],
    notSuitableFor: [
      'Bán hàng online 100% không có địa chỉ tiếp khách hoặc không có kho hàng'
    ],
    deliverables: [
      'Đăng ký hoặc nhận quyền quản trị Google Maps chính chủ bằng Gmail của bạn',
      'Chuẩn hóa tên cửa hàng, danh mục ngành nghề, địa chỉ, số điện thoại và giờ mở cửa',
      'Đưa 10–15 hình ảnh thực tế rõ đẹp (biển hiệu, không gian tiệm, sản phẩm) lên hồ sơ',
      'Tạo đường link ngắn và mã QR Code xin đánh giá 5 sao chuyên nghiệp đặt tại quầy',
      'Cài đặt sẵn các câu hỏi và giải đáp thường gặp trên Google Maps'
    ],
    process: [
      {
        step: '01',
        title: 'Kiểm tra địa điểm',
        description: 'Xác định tọa độ chính xác của cửa hàng và kiểm tra tình trạng xác minh.'
      },
      {
        step: '02',
        title: 'Điền thông tin chuẩn',
        description: 'Cập nhật đúng ngành nghề, mô tả dịch vụ dễ hiểu và số hotline gọi ngay.'
      },
      {
        step: '03',
        title: 'Tải hình ảnh thực tế',
        description: 'Tải lên hình ảnh mặt tiền, bảng hiệu và bên trong quán để tạo độ tin cậy.'
      },
      {
        step: '04',
        title: 'Làm mã QR xin Review',
        description: 'Tạo mã QR in ra để bàn giúp khách quen quét là đánh giá 5 sao được ngay.'
      },
      {
        step: '05',
        title: 'Nghiệm thu & Bàn giao',
        description: 'Kiểm tra hiển thị trên điện thoại và bàn giao toàn quyền sở hữu cho bạn.'
      }
    ],
    requirements: [
      'Tên cửa hàng, địa chỉ chính xác và số điện thoại nhận cuộc gọi',
      '3–5 bức ảnh chụp rõ biển hiệu mặt tiền và không gian bên trong cửa hàng'
    ],
    proofCaseStudySlug: 'quan-an-ong-tam-saigon',
    proofHighlight: 'Tăng lượng khách gọi điện và bấm chỉ đường đến quán sau khi hoàn thiện đầy đủ hình ảnh và thu thập đánh giá thật.',
    faqs: [
      {
        question: 'LocalMate có bán đánh giá (review) ảo không?',
        answer: 'Tuyệt đối KHÔNG. Mua review ảo dễ khiến hồ sơ bị Google khóa vĩnh viễn. LocalMate hướng dẫn cách xin đánh giá thật từ khách hàng đã đến trải nghiệm dịch vụ.'
      },
      {
        question: 'Tôi có được làm chủ vị trí Google Maps không?',
        answer: 'Có, 100%. Bạn là Chủ sở hữu chính (Primary Owner) bằng tài khoản Gmail của chính bạn.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'content-marketing'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đưa Cửa Hàng Lên Google Maps',
    secondaryCTA: 'Xem Báo Giá Maps',
    status: 'ACTIVE'
  },
  {
    id: 'website-landing-page',
    slug: 'website-landing-page',
    name: 'Thiết kế website bán hàng và giới thiệu dịch vụ',
    shortName: 'Website & Trang Bán Hàng',
    category: 'Website & Bán Hàng',
    categorySlug: 'thiet-ke-website',
    badge: 'Nền Móng Online ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chưa có website hoặc website cũ tải chậm, chữ nhỏ khó đọc trên điện thoại, khách vào xem không thấy bảng giá và không biết bấm đâu để gọi.',
    outcome: 'Có ngay trang web đẹp, rõ dịch vụ, rõ giá, tải nhanh trên điện thoại, khách bấm một nút là gọi Hotline hoặc nhắn Zalo được ngay.',
    promise: 'Xem thử mẫu website demo 0đ cho ngành nghề của bạn, hài lòng mới triển khai, nghiệm thu hoạt động tốt rồi mới thanh toán.',
    description: 'LocalMate làm website theo tiêu chí: Dễ hiểu — Rõ giá — Dễ liên hệ. Giao diện mở nhanh trong 2 giây trên điện thoại, có sẵn nút gọi Zalo, form báo giá và hướng dẫn tự chỉnh sửa cực kỳ đơn giản.',
    startingPrice: 'Từ 490.000đ (1 trang) / 2.900.000đ (Trọn gói)',
    priceNote: 'Giá báo trước, không tự phát sinh. Bàn giao đầy đủ tài khoản và quyền làm chủ.',
    sla: '3–7 ngày làm việc',
    suitableFor: [
      'Hộ kinh doanh, chủ tiệm, nhà thầu, xưởng sản xuất cần một trang web uy tín để gửi cho khách xem',
      'Doanh nghiệp chạy quảng cáo Google/Facebook cần trang giới thiệu tải nhanh và có nút gọi rõ ràng',
      'Cơ sở dịch vụ muốn công khai bảng giá, hình ảnh công trình và nhận tin nhắn tư vấn 24/7'
    ],
    notSuitableFor: [
      'Các sàn thương mại điện tử đa người bán khổng lồ như Shopee/Lazada'
    ],
    deliverables: [
      'Website hoàn chỉnh hiển thị đẹp trên cả điện thoại, máy tính bảng và máy tính',
      'Bố cục nội dung rõ ràng: Giới thiệu, Sản phẩm/Dịch vụ, Bảng giá, Quy trình, Liên hệ',
      'Thanh nút bấm liên hệ nhanh: Gọi Hotline, Nhắn tin Zalo, Form yêu cầu báo giá',
      'Tối ưu tốc độ mở trang nhanh dưới 2 giây và chứng chỉ bảo mật (ổ khóa xanh SSL)',
      'Tích hợp sẵn công cụ đếm số lượng người vào xem trang web mỗi ngày',
      'Bàn giao toàn bộ quyền quản trị và video hướng dẫn thay đổi nội dung dễ dàng'
    ],
    process: [
      {
        step: '01',
        title: 'Trao đổi nhu cầu',
        description: 'Bạn gửi thông tin dịch vụ, bảng giá hoặc trao đổi nhanh để chốt nội dung cần đưa lên web.'
      },
      {
        step: '02',
        title: 'Xem bản website mẫu 0đ',
        description: 'LocalMate dựng bản mẫu thực tế để bạn xem trước giao diện và cách trình bày.'
      },
      {
        step: '03',
        title: 'Hoàn thiện nội dung & Nút gọi',
        description: 'Điền đầy đủ thông tin, giá bán, hình ảnh và kiểm tra các nút bấm gọi điện.'
      },
      {
        step: '04',
        title: 'Kiểm tra trên điện thoại',
        description: 'Mở thử trên điện thoại thật để đảm bảo chữ to rõ, bấm gọi mượt mà.'
      },
      {
        step: '05',
        title: 'Bàn giao & Hướng dẫn',
        description: 'Bàn giao tài khoản, hướng dẫn sử dụng và thanh toán sau khi bạn đã ưng ý.'
      }
    ],
    requirements: [
      'Tên cửa hàng, ngành nghề kinh doanh và số điện thoại/Zalo',
      'Danh sách dịch vụ/sản phẩm chính và mức giá tham khảo (nếu có)',
      'Một vài hình ảnh thực tế của quán hoặc xưởng làm việc'
    ],
    proofCaseStudySlug: 'mam-non-tu-thuc-tphcm',
    proofHighlight: 'Phụ huynh dễ dàng xem học phí và bấm gọi tư vấn nhờ trang web rõ ràng, tải nhanh trên điện thoại.',
    faqs: [
      {
        question: 'Xem website demo 0đ có bị ép mua không?',
        answer: 'Hoàn toàn không. Nếu xem bản demo thấy không ưng ý, bạn có thể dừng lại mà không mất bất kỳ chi phí nào.'
      },
      {
        question: 'Chi phí duy trì hàng năm gồm những gì?',
        answer: 'Chỉ gồm tiền Tên miền (.vn hoặc .com) và nơi lưu trữ web (Hosting) theo đúng giá gốc của nhà cung cấp. LocalMate không thu thêm phí bản quyền hàng tháng.'
      }
    ],
    relatedServiceSlugs: ['google-ads', 'google-maps', 'content-marketing'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'cach-doc-search-terms-google-ads'],
    primaryCTA: 'Nhận Website Demo 0đ',
    secondaryCTA: 'Xem Mẫu Website',
    status: 'ACTIVE'
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    name: 'Viết bài và chăm sóc Facebook, Google mỗi tháng',
    shortName: 'Viết Bài & Chăm Sóc Nội Dung',
    category: 'Chăm Sóc & Duy Trì',
    categorySlug: 'viet-bai-cham-soc',
    badge: 'Chăm Sóc Đều Đặn ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Chủ cơ sở bận rộn làm nghề, không có thời gian viết bài, làm hình ảnh khiến trang Facebook và Google bị bỏ trống nhiều tháng, khách vào xem thấy thiếu tin tưởng.',
    outcome: 'Trang Facebook và Google luôn có bài viết mới đều đặn, hình ảnh sản phẩm đẹp mắt, thể hiện sự chuyên nghiệp và uy tín khi khách hàng tìm hiểu.',
    promise: 'Gửi lịch bài viết và hình ảnh cho bạn duyệt trước khi đăng, hỗ trợ sửa đổi nhanh qua Zalo.',
    description: 'LocalMate chuẩn bị nội dung, thiết kế hình ảnh và lên lịch đăng bài định kỳ để bạn không phải vắt óc suy nghĩ "hôm nay đăng gì". Kênh bán hàng của bạn luôn hoạt động và sẵn sàng đón khách.',
    startingPrice: 'Từ 990.000đ / tháng',
    priceNote: 'Gói chăm sóc hàng tháng linh hoạt, có thể tạm dừng bất cứ lúc nào.',
    sla: 'Hỗ trợ nhanh trong vòng 4–24h qua Zalo',
    suitableFor: [
      'Doanh nghiệp, cửa hàng đã có Fanpage hoặc Website nhưng không có thời gian viết bài đều',
      'Chủ tiệm muốn chia sẻ kiến thức làm nghề, kinh nghiệm thực tế để khách tin tưởng hơn',
      'Đơn vị cần có người hỗ trợ cập nhật thông tin sản phẩm và kiểm tra website hàng tuần'
    ],
    notSuitableFor: [
      'Nhu cầu thuê cả đoàn làm phim quay TVC quảng cáo truyền hình lớn'
    ],
    deliverables: [
      'Kế hoạch bài đăng chi tiết trong tháng (chủ đề, nội dung, ngày đăng)',
      '12–15 bài viết giới thiệu dịch vụ, chia sẻ mẹo hay và giải đáp thắc mắc của khách',
      '12–15 hình ảnh hoặc banner thiết kế chỉn chu có gắn logo cửa hàng',
      'Cập nhật thông tin ưu đãi hoặc sản phẩm mới khi bạn có yêu cầu',
      'Kiểm tra định kỳ để đảm bảo website hoạt động ổn định và không bị lỗi'
    ],
    process: [
      {
        step: '01',
        title: 'Thống nhất chủ đề tháng',
        description: 'Trao đổi xem tháng này tiệm có món mới, dịch vụ mới hay ưu đãi gì cần giới thiệu.'
      },
      {
        step: '02',
        title: 'Viết bài & Làm hình ảnh',
        description: 'Đội ngũ LocalMate soạn bài, thiết kế hình ảnh và gửi cho bạn duyệt.'
      },
      {
        step: '03',
        title: 'Đăng bài theo lịch',
        description: 'Lên lịch đăng đều đặn mỗi tuần lên Facebook, Website và Google Maps.'
      },
      {
        step: '04',
        title: 'Kiểm tra kỹ thuật',
        description: 'Kiểm tra tốc độ trang web và đảm bảo nút gọi hotline luôn hoạt động tốt.'
      },
      {
        step: '05',
        title: 'Báo cáo cuối tháng',
        description: 'Gửi bảng tổng kết những bài đã đăng và kế hoạch cho tháng tiếp theo.'
      }
    ],
    requirements: [
      'Quyền đăng bài lên Fanpage/Website hoặc tài khoản cộng tác viên',
      'Ảnh chụp sản phẩm hoặc công việc thực tế (nếu có) để bài viết chân thật hơn'
    ],
    proofCaseStudySlug: 'nha-thau-nhom-kinh-binh-duong',
    proofHighlight: 'Đăng bài hình ảnh thi công thực tế đều đặn giúp khách hàng tin tưởng và gọi hỏi báo giá nhiều hơn.',
    faqs: [
      {
        question: 'Tôi có phải ký hợp đồng nhiều tháng không?',
        answer: 'Không bắt buộc. Bạn có thể thanh toán theo từng tháng. Khi muốn dừng, chỉ cần báo trước 7 ngày.'
      },
      {
        question: 'Tôi có được duyệt bài trước khi đăng không?',
        answer: 'Có. Tất cả bài viết và hình ảnh đều được gửi cho bạn xem và đồng ý qua Zalo trước khi bấm đăng.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-maps', 'google-ads'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong', 'cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đăng Ký Chăm Sóc Nội Dung',
    secondaryCTA: 'Xem Kế Hoạch Mẫu',
    status: 'ACTIVE'
  },
  // Dedicated Landing Pages for Specific Search Intents
  {
    id: 'thiet-ke-website',
    slug: 'thiet-ke-website',
    name: 'Dịch vụ thiết kế website cho doanh nghiệp nhỏ & cửa hàng',
    shortName: 'Thiết Kế Website',
    category: 'Website & Bán Hàng',
    categorySlug: 'thiet-ke-website',
    badge: 'Website Chuẩn Di Động ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chưa có website để khách xem thông tin hoặc website cũ quá rườm rà, xem trên điện thoại bị vỡ khung, không thấy giá cả rõ ràng.',
    outcome: 'Sở hữu website gọn nhẹ, trình bày sản phẩm đẹp mắt, hiển thị chuẩn trên mọi điện thoại, khách bấm một nút là gọi hotline hoặc chat Zalo.',
    promise: 'Dựng bản demo thực tế 0đ, duyệt xong mới làm, nghiệm thu hài lòng mới thanh toán.',
    description: 'LocalMate thiết kế website cho hộ kinh doanh, cửa hàng, công ty nhỏ với đầy đủ trang giới thiệu, danh mục sản phẩm, bảng giá, quy trình làm việc và nút gọi điện thuận tiện.',
    startingPrice: 'Từ 490.000đ (1 trang) / 2.900.000đ (Trọn gói)',
    priceNote: 'Báo giá một lần, không phát sinh chi phí ẩn.',
    sla: '3–7 ngày làm việc',
    suitableFor: [
      'Cửa hàng, tiệm làm đẹp, xưởng sản xuất, nhà thầu xây dựng cần có web uy tín gửi khách',
      'Doanh nghiệp mới mở cần hiện diện trên Google nhanh chóng và tiết kiệm'
    ],
    notSuitableFor: [
      'Sàn thương mại điện tử đa người bán quy mô lớn'
    ],
    deliverables: [
      'Website chuẩn di động, mở nhanh dưới 2 giây',
      'Đầy đủ thông tin giới thiệu, sản phẩm, bảng giá và liên hệ',
      'Nút gọi Hotline và Chat Zalo ghim cố định dễ bấm',
      'Chứng chỉ bảo mật SSL và mã nguồn bàn giao 100%'
    ],
    process: [
      { step: '01', title: 'Tiếp nhận thông tin', description: 'Gửi tên quán, dịch vụ và số hotline.' },
      { step: '02', title: 'Lên website mẫu 0đ', description: 'Xem trước giao diện trên điện thoại.' },
      { step: '03', title: 'Hoàn thiện nội dung', description: 'Điền thông tin bảng giá và sản phẩm.' },
      { step: '04', title: 'Nghiệm thu & Bàn giao', description: 'Kiểm tra hoạt động tốt rồi thanh toán.' }
    ],
    requirements: ['Tên cơ sở, số hotline/Zalo, thông tin sản phẩm và một số hình ảnh thực tế'],
    faqs: [
      { question: 'Làm web xong tôi có tự sửa chữ hay đổi giá được không?', answer: 'Có, LocalMate hướng dẫn bạn tự thay đổi câu chữ, bảng giá rất đơn giản.' }
    ],
    relatedServiceSlugs: ['google-maps', 'google-ads', 'content-marketing'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Nhận Mẫu Website 0đ',
    secondaryCTA: 'Xem Bảng Giá Web',
    status: 'ACTIVE'
  },
  {
    id: 'landing-page',
    slug: 'landing-page',
    name: 'Thiết kế trang giới thiệu 1 trang (Landing Page) giá từ 490k',
    shortName: 'Website 1 Trang',
    category: 'Website & Bán Hàng',
    categorySlug: 'thiet-ke-website',
    badge: 'Tiết Kiệm & Nhanh Gọn ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Chỉ cần một trang đơn giản để giới thiệu 1 dịch vụ hoặc chạy quảng cáo mà không muốn tốn nhiều triệu đồng làm website lớn.',
    outcome: 'Có ngay một trang web 1 trang tinh gọn, tập trung giới thiệu đúng thứ bạn bán, có bảng giá và nút gọi ngay.',
    promise: 'Bàn giao nhanh trong 24–48h, giá chỉ từ 490.000đ, không chi phí ẩn.',
    description: 'Giải pháp cực kỳ phù hợp cho người mới mở quán, thợ làm nghề, người chạy quảng cáo thử nghiệm cần một trang đích rõ ràng và chốt khách nhanh.',
    startingPrice: 'Từ 490.000đ',
    priceNote: 'Trọn gói trang giới thiệu 1 trang hoàn chỉnh.',
    sla: '24–48 giờ làm việc',
    suitableFor: [
      'Chạy quảng cáo cho 1 chương trình khuyến mãi hoặc 1 dịch vụ mũi nhọn',
      'Người làm nghề tự do, hộ kinh doanh cần trang thông tin ngắn gọn để khách bấm gọi'
    ],
    notSuitableFor: [
      'Website có hàng trăm sản phẩm bán lẻ cần giỏ hàng phức tạp'
    ],
    deliverables: [
      'Trang giới thiệu 1 trang chuẩn di động',
      'Nút gọi Hotline và Chat Zalo trực tiếp',
      'Bảng giá và form nhận thông tin khách hàng',
      'Bàn giao đầy đủ quyền quản trị'
    ],
    process: [
      { step: '01', title: 'Gửi nội dung', description: 'Gửi thông tin dịch vụ và hình ảnh cần đưa lên trang.' },
      { step: '02', title: 'Dựng trang nhanh', description: 'LocalMate hoàn thiện giao diện trong 1–2 ngày.' },
      { step: '03', title: 'Kiểm tra & Bàn giao', description: 'Duyệt thử trên điện thoại và nhận bàn giao.' }
    ],
    requirements: ['Tên dịch vụ, số hotline nhận cuộc gọi, bảng giá và ưu đãi (nếu có)'],
    faqs: [
      { question: 'Website 1 trang có xem được trên điện thoại không?', answer: 'Có, hiển thị cực kỳ đẹp mắt và tải rất nhanh trên mọi dòng điện thoại.' }
    ],
    relatedServiceSlugs: ['google-ads', 'google-maps', 'website-landing-page'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Làm Website 1 Trang 490k',
    secondaryCTA: 'Xem Mẫu Trang 490k',
    status: 'ACTIVE'
  },
  {
    id: 'seo-google-maps',
    slug: 'seo-google-maps',
    name: 'Tối ưu Google Maps để khách hàng địa phương dễ tìm thấy',
    shortName: 'Tối Ưu Google Maps',
    category: 'Bản Đồ & Khách Địa Phương',
    categorySlug: 'google-maps',
    badge: 'Tối Ưu Vị Trí ⭐',
    heroAsset: '/assets/illustrations/mascot-local-map.png',
    problem: 'Đã có vị trí trên Google Maps nhưng ít người thấy, thiếu hình ảnh, thiếu đánh giá và không có ai gọi điện.',
    outcome: 'Hoàn thiện hồ sơ chuẩn, tăng độ uy tín để khi khách xung quanh tìm kiếm ngành nghề của bạn sẽ dễ nhìn thấy và bấm gọi hơn.',
    promise: 'Tối ưu toàn diện thông tin, hình ảnh và tạo mã QR xin review thật từ khách hàng.',
    description: 'LocalMate chuẩn hóa toàn bộ hồ sơ Google Maps của bạn từ danh mục ngành nghề, mô tả dịch vụ, hình ảnh thực tế đến quy trình xin đánh giá 5 sao từ khách quen.',
    startingPrice: 'Từ 299.000đ',
    priceNote: 'Tối ưu nâng cấp hồ sơ Google Maps.',
    sla: '3–5 ngày làm việc',
    suitableFor: [
      'Cửa hàng, quán ăn, nha khoa, spa đã có map nhưng chưa tối ưu chuẩn'
    ],
    notSuitableFor: [
      'Cơ sở kinh doanh không có địa chỉ thực tế'
    ],
    deliverables: [
      'Chuẩn hóa thông tin hồ sơ Google Maps',
      'Tải bộ ảnh thực tế rõ đẹp',
      'Mã QR xin đánh giá 5 sao đặt tại bàn/quầy',
      'Hướng dẫn duy trì hồ sơ luôn tươi mới'
    ],
    process: [
      { step: '01', title: 'Đánh giá hồ sơ hiện tại', description: 'Xem những điểm còn thiếu sót trên Maps.' },
      { step: '02', title: 'Cập nhật thông tin chuẩn', description: 'Bổ sung danh mục, mô tả và hình ảnh đẹp.' },
      { step: '03', title: 'Tạo mã QR Review', description: 'Gửi file mã QR in để bàn xin đánh giá.' }
    ],
    requirements: ['Quyền quản trị Google Maps và ảnh thực tế cửa hàng'],
    faqs: [
      { question: 'Có cần đưa mật khẩu Gmail cho LocalMate không?', answer: 'Không cần. Bạn chỉ cần thêm Gmail của LocalMate làm người quản lý (Manager).' }
    ],
    relatedServiceSlugs: ['google-maps', 'website-landing-page'],
    relatedArticleSlugs: ['huong-dan-toi-uu-google-business-profile'],
    primaryCTA: 'Tối Ưu Google Maps Ngay',
    secondaryCTA: 'Xem Báo Giá Maps',
    status: 'ACTIVE'
  },
  {
    id: 'quan-tri-facebook',
    slug: 'quan-tri-facebook',
    name: 'Dịch vụ quản trị Fanpage Facebook cho cửa hàng & doanh nghiệp nhỏ',
    shortName: 'Quản Trị Facebook',
    category: 'Chăm Sóc & Duy Trì',
    categorySlug: 'viet-bai-cham-soc',
    badge: 'Chăm Sóc Fanpage ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Fanpage nhiều tháng không đăng bài, thông tin cũ kỹ khiến khách hàng vào xem nghĩ cửa hàng đã đóng cửa.',
    outcome: 'Trang Facebook luôn có bài viết và hình ảnh mới đều đặn mỗi tuần, tạo cảm giác uy tín và thu hút khách hàng tương tác.',
    promise: 'Duyệt bài trước khi đăng, hình ảnh thiết kế đồng bộ, hỗ trợ nhanh qua Zalo.',
    description: 'LocalMate chuẩn bị nội dung và hình ảnh bài đăng định kỳ để Fanpage của bạn luôn hoạt động sôi nổi mà bạn không phải tốn thời gian tự viết mỗi ngày.',
    startingPrice: 'Từ 990.000đ / tháng',
    priceNote: 'Gói chăm sóc hàng tháng linh hoạt.',
    sla: 'Hỗ trợ 24/7 qua Zalo',
    suitableFor: [
      'Chủ shop, chủ quán bận rộn không có thời gian chăm sóc Facebook'
    ],
    notSuitableFor: ['Dự án truyền thông lớn cần đội ngũ quay phim trực tiếp hàng ngày'],
    deliverables: [
      '12–15 bài viết chuẩn nhận diện mỗi tháng',
      '12–15 banner hình ảnh thiết kế đẹp mắt',
      'Lên lịch đăng bài đều đặn mỗi tuần'
    ],
    process: [
      { step: '01', title: 'Lên lịch chủ đề', description: 'Thống nhất nội dung trong tháng.' },
      { step: '02', title: 'Soạn bài & Làm ảnh', description: 'Gửi bạn duyệt trước khi đăng.' },
      { step: '03', title: 'Đăng bài đều đặn', description: 'Xuất bản bài viết theo lịch cố định.' }
    ],
    requirements: ['Quyền biên tập viên trên Fanpage'],
    faqs: [
      { question: 'Có được yêu cầu sửa bài không?', answer: 'Có, bạn xem và yêu cầu chỉnh sửa thoải mái trước khi đăng.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'website-landing-page'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đăng Ký Quản Trị Fanpage',
    secondaryCTA: 'Xem Kế Hoạch Mẫu',
    status: 'ACTIVE'
  },
  {
    id: 'viet-bai-facebook',
    slug: 'viet-bai-facebook',
    name: 'Dịch vụ viết bài Facebook & bài viết bán hàng theo yêu cầu',
    shortName: 'Viết Bài Facebook',
    category: 'Chăm Sóc & Duy Trì',
    categorySlug: 'viet-bai-cham-soc',
    badge: 'Nội Dung Bán Hàng ⭐',
    heroAsset: '/assets/illustrations/roadmap-flag-path.png',
    problem: 'Muốn đăng bài giới thiệu sản phẩm hay ưu đãi nhưng không biết viết thế nào cho cuốn hút và dễ hiểu.',
    outcome: 'Có sẵn những bài viết bán hàng hấp dẫn, rõ ưu đãi, đúng tâm lý người mua và có lời mời gọi hành động rõ ràng.',
    promise: 'Viết đúng ngành nghề, từ ngữ gần gũi, giao bài đúng hẹn.',
    description: 'LocalMate nhận viết bài lẻ hoặc theo gói cho Fanpage, trang web hoặc bài quảng cáo với văn phong đời thường, dễ đọc và kích thích khách hàng gọi điện/nhắn tin.',
    startingPrice: 'Từ 990.000đ / tháng (15 bài)',
    priceNote: 'Gói bài viết kèm hình ảnh thiết kế sẵn.',
    sla: 'Giao bài trong 24–48h',
    suitableFor: [
      'Cửa hàng cần bài viết bán hàng chất lượng để đăng Facebook hoặc gửi cho khách'
    ],
    notSuitableFor: ['Bài viết nghiên cứu khoa học hàn lâm'],
    deliverables: [
      'Bài viết hoàn chỉnh kèm gợi ý tiêu đề thu hút',
      'Hình ảnh minh họa thiết kế có gắn logo',
      'Hashtag và lời kêu gọi nhắn tin/gọi điện'
    ],
    process: [
      { step: '01', title: 'Gửi yêu cầu', description: 'Cung cấp sản phẩm hoặc ưu đãi cần viết.' },
      { step: '02', title: 'Soạn bài viết', description: 'Viết nội dung và thiết kế ảnh đi kèm.' },
      { step: '03', title: 'Bàn giao & Đăng tải', description: 'Gửi bài hoàn chỉnh để bạn duyệt và sử dụng.' }
    ],
    requirements: ['Thông tin sản phẩm và chương trình ưu đãi cần viết'],
    faqs: [
      { question: 'Có viết bài theo đợt khuyến mãi ngắn ngày không?', answer: 'Có, LocalMate hỗ trợ viết bài theo từng đợt sự kiện hoặc khai trương.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'quan-tri-facebook'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đặt Viết Bài Facebook',
    secondaryCTA: 'Xem Mẫu Bài Viết',
    status: 'ACTIVE'
  },
  {
    id: 'thiet-ke-hinh-anh',
    slug: 'thiet-ke-hinh-anh',
    name: 'Dịch vụ thiết kế banner & hình ảnh quảng cáo cho cửa hàng',
    shortName: 'Thiết Kế Hình Ảnh',
    category: 'Hình Ảnh & Nhận Diện',
    categorySlug: 'thiet-ke-hinh-anh',
    badge: 'Hình Ảnh Bắt Mắt ⭐',
    heroAsset: '/assets/illustrations/pricing-laptop-analytics.png',
    problem: 'Hình ảnh chụp bằng điện thoại chưa bắt mắt, thiếu logo, chữ chèn lên bị xấu khiến bảng hiệu và bài đăng trông kém chuyên nghiệp.',
    outcome: 'Sở hữu bộ hình ảnh và banner đẹp mắt, màu sắc đồng bộ, nổi bật sản phẩm và giá bán để đăng Facebook hoặc làm bảng quảng cáo.',
    promise: 'Thiết kế nhanh, chỉnh sửa theo ý bạn, giao file chất lượng cao.',
    description: 'LocalMate thiết kế banner sự kiện, ảnh bìa Fanpage, menu sản phẩm và ảnh bài đăng Facebook chuẩn kích thước hiển thị trên điện thoại.',
    startingPrice: 'Từ 99.000đ / ảnh (hoặc theo gói tháng)',
    priceNote: 'Nhận thiết kế ảnh lẻ hoặc trọn gói bộ nhận diện.',
    sla: '24 giờ làm việc',
    suitableFor: [
      'Cửa hàng cần thiết kế ảnh bìa, menu, banner khuyến mãi khai trương'
    ],
    notSuitableFor: ['Vẽ minh họa 3D hoạt hình phức tạp'],
    deliverables: [
      'File ảnh chất lượng cao chuẩn hiển thị di động',
      'Đồng bộ màu sắc nhận diện và logo cửa hàng'
    ],
    process: [
      { step: '01', title: 'Gửi ảnh & Nội dung', description: 'Gửi ảnh sản phẩm và câu chữ cần đưa vào banner.' },
      { step: '02', title: 'Thiết kế mẫu', description: 'LocalMate dựng bản thiết kế và gửi bạn xem.' },
      { step: '03', title: 'Bàn giao file nét', description: 'Xuất file ảnh chất lượng cao để bạn sử dụng.' }
    ],
    requirements: ['Ảnh sản phẩm và nội dung khuyến mãi'],
    faqs: [
      { question: 'Có in ấn luôn không?', answer: 'LocalMate xuất file in ấn chuẩn chất lượng cao để bạn mang ra tiệm in ngay gần nhà.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'website-landing-page'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao'],
    primaryCTA: 'Đặt Thiết Kế Hình Ảnh',
    secondaryCTA: 'Xem Mẫu Banner',
    status: 'ACTIVE'
  },
  {
    id: 'video-ngan',
    slug: 'video-ngan',
    name: 'Dịch vụ dựng video ngắn TikTok & Reels từ hình ảnh có sẵn',
    shortName: 'Dựng Video Ngắn',
    category: 'Hình Ảnh & Nhận Diện',
    categorySlug: 'video-ngan',
    badge: 'Video Ngắn Thu Hút ⭐',
    heroAsset: '/assets/illustrations/hero-store-phone.png',
    problem: 'Khách hàng thích xem video ngắn trên TikTok/Reels nhưng bạn không biết cắt ghép hay chèn nhạc.',
    outcome: 'Có ngay các video ngắn 15–30s sinh động giới thiệu quán, món ăn hoặc quy trình làm việc để đăng TikTok, Facebook Reels.',
    promise: 'Dựng từ video/hình ảnh bạn tự quay bằng điện thoại, chèn nhạc bắt tai và chữ phụ đề rõ ràng.',
    description: 'LocalMate nhận tư liệu quay đơn giản từ điện thoại của bạn để cắt ghép, chỉnh màu, chèn chữ giá bán và lồng nhạc hot trend giúp video trông chuyên nghiệp hơn.',
    startingPrice: 'Từ 299.000đ / video',
    priceNote: 'Dựng video ngắn từ tư liệu khách hàng cung cấp.',
    sla: '24–48 giờ làm việc',
    suitableFor: [
      'Quán ăn, quán cafe, spa, xưởng làm nghề muốn có video ngắn đăng Reels/TikTok'
    ],
    notSuitableFor: ['Phim điện ảnh hoặc TVC cần đạo diễn trường quay'],
    deliverables: [
      'Video ngắn chuẩn khung dọc (9:16) cho TikTok/Reels',
      'Chèn nhạc hot trend và phụ đề chữ to dễ đọc'
    ],
    process: [
      { step: '01', title: 'Gửi video/ảnh quay', description: 'Gửi các đoạn clip ngắn quay bằng điện thoại qua Zalo/Drive.' },
      { step: '02', title: 'Dựng & Chèn nhạc', description: 'Cắt ghép, thêm hiệu ứng chữ và chèn nhạc phù hợp.' },
      { step: '03', title: 'Bàn giao video', description: 'Gửi file hoàn chỉnh để bạn đăng lên mạng xã hội.' }
    ],
    requirements: ['Clip ngắn hoặc hình ảnh quay chụp tại quán'],
    faqs: [
      { question: 'Tôi quay bằng điện thoại thường có dựng được không?', answer: 'Được, chỉ cần quay rõ nét và đủ sáng là dựng thành video rất đẹp.' }
    ],
    relatedServiceSlugs: ['content-marketing', 'quan-tri-facebook'],
    relatedArticleSlugs: ['cach-len-lich-dang-bai-khong-bi-bi-y-tuong'],
    primaryCTA: 'Đặt Dựng Video Ngắn',
    secondaryCTA: 'Xem Mẫu Video',
    status: 'ACTIVE'
  }
];

export const getAllServices = (): ServiceEntity[] => {
  return CORE_P0_SERVICES;
};

export const getServiceBySlug = (slug: string): ServiceEntity | undefined => {
  // Direct match
  const directMatch = CORE_P0_SERVICES.find((s) => s.slug === slug);
  if (directMatch) return directMatch;

  // Slug aliases mapping
  const aliasMap: Record<string, string> = {
    'thiet-ke-website': 'website-landing-page',
    'landing-page': 'landing-page',
    'google-ads': 'google-ads',
    'google-maps': 'google-maps',
    'seo-google-maps': 'seo-google-maps',
    'quan-tri-facebook': 'quan-tri-facebook',
    'viet-bai-facebook': 'viet-bai-facebook',
    'thiet-ke-hinh-anh': 'thiet-ke-hinh-anh',
    'video-ngan': 'video-ngan',
    'content-marketing': 'content-marketing',
    'analytics-tracking': 'google-ads'
  };

  const targetSlug = aliasMap[slug];
  if (targetSlug) {
    return CORE_P0_SERVICES.find((s) => s.slug === targetSlug);
  }

  return undefined;
};
