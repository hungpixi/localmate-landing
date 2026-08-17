export interface ArticleEntity {
  id: string;
  slug: string;
  title: string;
  pillar: string;
  pillarKey: 'google-ads' | 'google-maps' | 'website' | 'content' | 'tracking';
  category: string;
  
  primaryIntent: 'HOW_TO' | 'COMPARISON' | 'COST' | 'MISTAKES' | 'CHECKLIST';
  funnelStage: 'TOFU' | 'MOFU' | 'BOFU';
  
  primaryKeyword: string;
  summary: string;
  
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  heroImage: string;
  
  tableOfContents: {
    id: string;
    title: string;
  }[];
  
  contentSections: {
    headingId?: string;
    heading?: string;
    paragraphs: string[];
    callout?: {
      type: 'tip' | 'warning' | 'info';
      title: string;
      text: string;
    };
    listItems?: string[];
  }[];
  
  faqs?: {
    question: string;
    answer: string;
  }[];
  
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    targetServiceSlug: string;
  };
}

export const ARTICLES: ArticleEntity[] = [
  {
    id: 'art-01',
    slug: 'cach-doc-search-terms-google-ads',
    title: 'Cách Đọc Search Terms Google Ads Để Cắt Giảm 40% Chi Phí Click Rác',
    pillar: 'Google Ads cho Doanh Nghiệp Nhỏ',
    pillarKey: 'google-ads',
    category: 'Quảng Cáo Google',
    primaryIntent: 'HOW_TO',
    funnelStage: 'MOFU',
    primaryKeyword: 'cách đọc search terms google ads',
    summary: 'Hướng dẫn từng bước cách kiểm tra cụm từ tìm kiếm thực tế của người dùng để phát hiện click ảo và thêm từ khóa phủ định đúng cách.',
    author: {
      name: 'Nguyễn Văn Hùng',
      role: 'Chuyên gia Tối ưu Chuyển đổi tại LocalMate'
    },
    publishedAt: '2026-07-15',
    updatedAt: '2026-08-10',
    readTime: '6 phút đọc',
    heroImage: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    tableOfContents: [
      { id: 'search-terms-la-gi', title: '1. Search Terms khác gì với Keywords?' },
      { id: 'tai-sao-lang-phi-ngan-sach', title: '2. Vì sao tài khoản của bạn bị đốt tiền vô ích?' },
      { id: '3-buoc-loc-tu-khoa-rac', title: '3. 3 bước lọc sạch Search Terms trong 10 phút' },
      { id: 'cach-them-negative-keywords', title: '4. Cách thêm từ khóa phủ định chuẩn xác' },
      { id: 'loi-khuyen-thuc-te', title: '5. Lời khuyên tối ưu ngân sách từ LocalMate' }
    ],
    contentSections: [
      {
        headingId: 'search-terms-la-gi',
        heading: '1. Search Terms khác gì với Keywords?',
        paragraphs: [
          'Rất nhiều chủ doanh nghiệp lầm tưởng rằng khi cài đặt từ khóa "sửa máy lạnh", quảng cáo sẽ chỉ xuất hiện khi khách hàng gõ đúng 3 chữ đó. Thực tế, theo cơ chế đối sánh mở rộng (Broad Match) của Google, quảng cáo của bạn có thể hiện ra khi ai đó tìm "học nghề sửa máy lạnh miễn phí" hay "sách hướng dẫn sửa máy lạnh cũ".',
          'Search Terms (Cụm từ tìm kiếm) chính là những từ chính xác 100% mà người dùng gõ vào ô tìm kiếm Google trước khi bấm vào quảng cáo của bạn.'
        ],
        callout: {
          type: 'warning',
          title: 'Điểm mù ngân sách',
          text: 'Nếu không kiểm tra Search Terms hàng tuần, bạn có thể đang chi trả hàng triệu đồng cho những người tìm kiếm tài liệu học tập hoặc tìm việc làm chứ không hề có nhu cầu thuê dịch vụ!'
        }
      },
      {
        headingId: 'tai-sao-lang-phi-ngan-sach',
        heading: '2. Vì sao tài khoản của bạn bị đốt tiền vô ích?',
        paragraphs: [
          'Khi xem báo cáo Search Terms của các khách hàng mới chuyển sang LocalMate, chúng tôi thường phát hiện 30% đến 50% số lượt click đến từ các cụm từ không có giá trị thương mại, bao gồm:',
          'Chỉ cần chặn những nhóm từ này, bạn sẽ lập tức tiết kiệm được một nửa ngân sách để dồn vào những khách hàng đang thực sự cần thuê thợ ngay!'
        ],
        listItems: [
          'Từ khóa tìm kiếm tuyển dụng: "tuyển thợ", "mức lương", "việc làm"',
          'Từ khóa tìm kiếm miễn phí: "hướng dẫn tự làm", "cách làm 0đ", "phần mềm crack"',
          'Từ khóa so sánh giá sỉ: "bán sỉ", "nhập hàng Trung Quốc", "thanh lý đồ cũ"',
          'Từ khóa tìm địa điểm quá xa: Bạn ở TP.HCM nhưng click đến từ người tìm tại Hà Nội hoặc Đà Nẵng'
        ]
      },
      {
        headingId: '3-buoc-loc-tu-khoa-rac',
        heading: '3. 3 bước lọc sạch Search Terms trong 10 phút',
        paragraphs: [
          'Bạn có thể tự làm việc này ngay trong giao diện Google Ads theo các bước đơn giản sau:',
          'Bước 1: Đăng nhập vào tài khoản Google Ads, chọn Chiến dịch đang chạy và bấm vào mục "Cụm từ tìm kiếm" (Search Terms) ở cột menu bên trái.',
          'Bước 2: Sắp xếp danh sách theo cột "Số lượt nhấp" (Clicks) hoặc "Chi phí" (Cost) giảm dần để xem những từ nào đang ngốn nhiều tiền nhất.',
          'Bước 3: Tích chọn những từ khóa không liên quan và chọn "Thêm làm từ khóa phủ định" (Add as negative keyword).'
        ]
      },
      {
        headingId: 'cach-them-negative-keywords',
        heading: '4. Cách thêm từ khóa phủ định chuẩn xác',
        paragraphs: [
          'Khi phủ định, hãy chú ý chọn cấp độ "Chiến dịch" (Campaign level) để từ khóa đó không bao giờ kích hoạt quảng cáo ở bất kỳ nhóm nào.',
          'Nên phủ định theo cụm từ gốc. Ví dụ: Nếu thấy từ "tuyển dụng thợ sửa máy lạnh", bạn chỉ cần phủ định từ "tuyển dụng" và "tuyển thợ", Google sẽ tự động chặn mọi biến thể có chứa các từ này.'
        ],
        callout: {
          type: 'tip',
          title: 'Mẹo LocalMate',
          text: 'Hãy tạo một "Danh sách từ khóa phủ định dùng chung" chứa sẵn các từ rác phổ biến (miễn phí, tuyển dụng, pdf, crack, cũ...) để áp dụng cho mọi chiến dịch mới chỉ với 1 cú nhấp chuột.'
        }
      },
      {
        headingId: 'loi-khuyen-thuc-te',
        heading: '5. Lời khuyên tối ưu ngân sách từ LocalMate',
        paragraphs: [
          'Quảng cáo Google Ads cho doanh nghiệp nhỏ không cần phải chi hàng chục triệu mới có kết quả. Bí quyết nằm ở việc: Đúng từ khóa nhu cầu cao + Loại trừ tuyệt đối từ khóa rác + Trang đích tải nhanh có nút gọi rõ ràng.',
          'Nếu bạn không có thời gian theo dõi tài khoản mỗi tuần, hãy để đội ngũ kỹ thuật của LocalMate hỗ trợ rà soát và thiết lập lại hệ thống từ khóa chuẩn cho bạn.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Bao lâu nên vào kiểm tra Search Terms một lần?',
        answer: 'Trong 2 tuần đầu khi mới bật chiến dịch, bạn nên kiểm tra mỗi 2-3 ngày. Khi chiến dịch đã ổn định, chỉ cần rà soát 1 lần mỗi tuần.'
      },
      {
        question: 'Thêm từ khóa phủ định có làm giảm số lượng khách gọi không?',
        answer: 'Không. Từ khóa phủ định chỉ chặn những người không có nhu cầu mua. Lượng khách tiềm năng thật sự vẫn nhìn thấy và gọi cho bạn bình thường.'
      }
    ],
    relatedServiceSlugs: ['google-ads', 'analytics-tracking', 'website-landing-page'],
    relatedArticleSlugs: ['chay-google-ads-bao-nhieu-tien', 'tai-sao-chay-quang-cao-khong-co-khach'],
    cta: {
      title: 'Bạn Muốn Kiểm Tra Tài Khoản Google Ads Miễn Phí?',
      subtitle: 'LocalMate hỗ trợ rà soát Search Terms và chỉ ra các lỗ hổng đang làm thất thoát ngân sách quảng cáo của bạn trong 30 phút.',
      buttonText: 'Đăng Ký Audit Google Ads 0đ',
      targetServiceSlug: 'google-ads'
    }
  },
  {
    id: 'art-02',
    slug: 'huong-dan-toi-uu-google-business-profile',
    title: 'Hướng Dẫn Tối Ưu Google Business Profile Chuẩn SEO Để Lên Top 3 Google Maps',
    pillar: 'Google Maps & Local SEO',
    pillarKey: 'google-maps',
    category: 'SEO Google Maps',
    primaryIntent: 'HOW_TO',
    funnelStage: 'TOFU',
    primaryKeyword: 'hướng dẫn tối ưu google business profile',
    summary: 'Cách điền thông tin doanh nghiệp, lựa chọn danh mục chuẩn, gắn geotag hình ảnh và xây dựng quy trình xin đánh giá 5 sao từ khách hàng thật.',
    author: {
      name: 'Phạm Minh Quân',
      role: 'Trưởng bộ phận Local SEO tại LocalMate'
    },
    publishedAt: '2026-07-20',
    updatedAt: '2026-08-12',
    readTime: '7 phút đọc',
    heroImage: '/assets/illustrations/mascot-local-map.png',
    tableOfContents: [
      { id: 'tam-quan-trong-cua-google-maps', title: '1. Tại sao Google Maps là kênh kiếm khách rẻ nhất?' },
      { id: 'chon-danh-muc-chuan', title: '2. Cách chọn danh mục chính và danh mục phụ' },
      { id: 'chuan-hoa-nap', title: '3. Chuẩn hóa NAP (Tên - Địa chỉ - Điện thoại)' },
      { id: 'hinh-anh-va-geotag', title: '4. Tải ảnh thực tế và mẹo gắn tọa độ' },
      { id: 'quy-trinh-xin-review', title: '5. Bí quyết xin 30 review 5 sao thật trong 1 tháng' }
    ],
    contentSections: [
      {
        headingId: 'tam-quan-trong-cua-google-maps',
        heading: '1. Tại sao Google Maps là kênh kiếm khách rẻ nhất?',
        paragraphs: [
          'Khi người dùng mở điện thoại tìm "quán ăn ngon gần đây", "tiệm sửa xe máy gần nhất" hoặc "nha khoa quận 7", Google sẽ ưu tiên hiển thị khung 3 vị trí trên bản đồ (Local 3-Pack) ngay trên đầu kết quả tìm kiếm.',
          'Khác với quảng cáo phải trả tiền cho từng lượt click, khách hàng tìm thấy bạn trên Google Maps và bấm nút Gọi hoặc Chỉ đường hoàn toàn MIỄN PHÍ 100%.'
        ]
      },
      {
        headingId: 'chon-danh-muc-chuan',
        heading: '2. Cách chọn danh mục chính và danh mục phụ',
        paragraphs: [
          'Danh mục chính (Primary Category) là yếu tố quyết định 60% khả năng hiển thị của bạn khi khách hàng tìm kiếm từ khóa ngành. Hãy chọn danh mục sát nhất với dịch vụ mang lại doanh thu chủ lực của bạn.',
          'Ví dụ: Nếu bạn là xưởng làm nhôm kính, hãy chọn danh mục chính là "Dịch vụ lắp ráp kính" hoặc "Nhà thầu xây dựng", sau đó bổ sung các danh mục phụ như "Dịch vụ gia công kim loại", "Cửa hàng vật liệu xây dựng".'
        ]
      },
      {
        headingId: 'chuan-hoa-nap',
        heading: '3. Chuẩn hóa NAP (Tên - Địa chỉ - Điện thoại)',
        paragraphs: [
          'NAP là viết tắt của Name (Tên), Address (Địa chỉ) và Phone (Điện thoại). Nguyên tắc số một của SEO địa phương là tính đồng nhất.',
          'Tên và địa chỉ trên Google Maps phải trùng khớp 100% với thông tin trên Biển hiệu thực tế, Website và Trang Fanpage. Không nên cố tình nhồi nhét quá nhiều từ khóa vào tên (ví dụ: "Nha Khoa ABC - Nhổ Răng Giá Rẻ Uy Tín Nhất Sài Gòn") vì rất dễ bị thuật toán Google quét tạm ngưng hồ sơ.'
        ]
      },
      {
        headingId: 'hinh-anh-va-geotag',
        heading: '4. Tải ảnh thực tế và mẹo gắn tọa độ',
        paragraphs: [
          'Google rất thích những hồ sơ có hình ảnh thật từ cuộc sống hàng ngày. Hãy tải lên ít nhất 15 bức ảnh chất lượng cao bao gồm:',
          'Mặt tiền có biển hiệu rõ ràng chụp từ ngoài đường vào, không gian làm việc bên trong, hình ảnh đội ngũ nhân viên đang phục vụ khách và các sản phẩm/công trình đã hoàn thiện.'
        ]
      },
      {
        headingId: 'quy-trinh-xin-review',
        heading: '5. Bí quyết xin 30 review 5 sao thật trong 1 tháng',
        paragraphs: [
          'Đừng bao giờ mua review ảo! Hãy tạo mã QR dẫn thẳng đến trang đánh giá của Google và in ra để tại quầy thu ngân hoặc dán trên bàn.',
          'Thời điểm tốt nhất để xin đánh giá là ngay sau khi khách hàng khen ngợi dịch vụ hoặc vừa nhận bàn giao sản phẩm ưng ý. Kèm theo một lời cảm ơn chân thành, tỷ lệ khách sẵn sàng để lại 5 sao sẽ lên tới trên 70%.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Bao lâu sau khi tối ưu thì hồ sơ lên Top 3 Maps?',
        answer: 'Thông thường từ 2 đến 4 tuần sau khi hoàn thiện thông tin, tải đủ ảnh và có từ 10-15 đánh giá thật đầu tiên.'
      },
      {
        question: 'Làm sao để biết hồ sơ Maps có đang mang lại khách hay không?',
        answer: 'Trong mục "Hiệu suất" của Google Business Profile, bạn có thể xem chính xác số lượng cuộc gọi, số lượt nhấp chỉ đường và số lượt truy cập website mỗi tháng.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'google-ads'],
    relatedArticleSlugs: ['co-nen-mua-review-google-maps-khong', 'vi-sao-cua-hang-khong-xuat-hien-tren-maps'],
    cta: {
      title: 'Cần Khởi Tạo & Tối Ưu Hồ Sơ Google Maps Chuyên Nghiệp?',
      subtitle: 'LocalMate giúp bạn xác minh chính chủ, chuẩn hóa SEO và thiết lập mã QR xin đánh giá 5 sao trọn gói chỉ từ 299.000đ.',
      buttonText: 'Tối Ưu Google Maps Ngay',
      targetServiceSlug: 'google-maps'
    }
  },
  {
    id: 'art-03',
    slug: 'cau-truc-landing-page-chuyen-doi-cao',
    title: '7 Thành Phần Bắt Buộc Của Một Landing Page Bán Dịch Vụ Chuyển Đổi Cao',
    pillar: 'Website & Landing Page Chuyển Đổi',
    pillarKey: 'website',
    category: 'Thiết Kế Website',
    primaryIntent: 'CHECKLIST',
    funnelStage: 'MOFU',
    primaryKeyword: 'cấu trúc landing page chuyển đổi cao',
    summary: 'Phân tích cấu trúc trang đích giúp khách hàng hiểu ngay bạn đang làm gì, giá bao nhiêu, vì sao nên tin và bấm liên hệ ngay lập tức.',
    author: {
      name: 'Nguyễn Văn Hùng',
      role: 'Principal Product Architect tại LocalMate'
    },
    publishedAt: '2026-07-28',
    updatedAt: '2026-08-14',
    readTime: '5 phút đọc',
    heroImage: '/assets/illustrations/hero-store-phone.png',
    tableOfContents: [
      { id: 'sai-lam-thuong-gap', title: '1. Sai lầm khiến website không ra đơn' },
      { id: '7-thanh-phan-chuan', title: '2. 7 khối cấu trúc chuẩn thuyết phục' },
      { id: 'mobile-first', title: '3. Tối ưu trải nghiệm bấm gọi trên điện thoại' },
      { id: 'tam-quan-trong-toc-do', title: '4. Tốc độ tải trang: Chậm 1 giây mất 20% khách' },
      { id: 'ket-luan', title: '5. Bắt đầu với bản web demo 0đ cùng LocalMate' }
    ],
    contentSections: [
      {
        headingId: 'sai-lam-thuong-gap',
        heading: '1. Sai lầm khiến website không ra đơn',
        paragraphs: [
          'Nhiều doanh nghiệp chi hàng chục triệu làm website rất hoành tráng nhưng khách vào xem 5 giây rồi thoát. Lý do phổ biến nhất là website viết quá nhiều từ hoa mỹ ("Kiến tạo tương lai", "Đỉnh cao chất lượng") mà không chịu nói rõ:',
          'Tôi làm nghề gì? Giá khởi điểm bao nhiêu? Khách hàng nhận được gì? Và phải bấm đâu để liên hệ?'
        ]
      },
      {
        headingId: '7-thanh-phan-chuan',
        heading: '2. 7 khối cấu trúc chuẩn thuyết phục',
        paragraphs: [
          'Một trang đích hiệu quả cần được thiết kế như một hành trình trò chuyện trực tiếp với khách hàng theo thứ tự:',
          '1. Khối Đầu Trang (Hero): Nêu rõ dịch vụ + Lợi ích cốt lõi + Nút gọi hành động ngay.',
          '2. Khối Nhận Diện Vấn Đề (Pain Points): Kể đúng những khó khăn khách đang gặp phải.',
          '3. Khối Giải Pháp & Đầu Ra (Deliverables): Khách trả tiền thì sẽ nhận được những gì.',
          '4. Khối Bảng Giá Minh Bạch: Mức giá bắt đầu, không giấu giá khiến khách e ngại.',
          '5. Khối Quy Trình Làm Việc: 3-5 bước tinh gọn giúp khách an tâm về tiến độ.',
          '6. Khối Bằng Chứng Thực Tế (Social Proof): Hình ảnh dự án thật, đánh giá khách hàng thật.',
          '7. Khối Kêu Gọi Hành Động (Final CTA): Lời mời tư vấn kèm cam kết không rủi ro.'
        ]
      },
      {
        headingId: 'mobile-first',
        heading: '3. Tối ưu trải nghiệm bấm gọi trên điện thoại',
        paragraphs: [
          'Hơn 85% khách hàng tìm kiếm dịch vụ địa phương sử dụng điện thoại thông minh. Nút bấm gọi Hotline và Chat Zalo phải luôn ghim ở vị trí thuận tiện dưới góc màn hình để khách có thể bấm bằng một ngón tay cái mà không cần phải copy số.'
        ]
      },
      {
        headingId: 'tam-quan-trong-toc-do',
        heading: '4. Tốc độ tải trang: Chậm 1 giây mất 20% khách',
        paragraphs: [
          'Khi chạy quảng cáo, mỗi lượt nhấp chuột đều tốn tiền. Nếu trang web mất quá 3 giây để tải xong hình ảnh, khách hàng sẽ lập tức bấm quay lại và chuyển sang đối thủ cạnh tranh.',
          'LocalMate cam kết tối ưu mã nguồn tinh gọn, nén ảnh chuẩn WebP để website mở lên tức thì trong vòng 1.5 giây.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Làm Landing page mất bao lâu?',
        answer: 'Tại LocalMate, Gói Khởi Tạo hoàn thiện trong vòng 7-10 ngày làm việc. Riêng bản Web Demo 0đ được dựng xong chỉ sau 24-48h.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'analytics-tracking'],
    relatedArticleSlugs: ['website-nhanh-anh-huong-khach-hang-the-nao', 'doanh-nghiep-nho-can-chuan-bi-gi-khi-lam-web'],
    cta: {
      title: 'Xem Thử Bản Web Demo Miễn Phí Cho Ngành Của Bạn',
      subtitle: 'LocalMate dựng sẵn giao diện thực tế phù hợp với ngành nghề để bạn duyệt cấu trúc trước khi quyết định hợp tác.',
      buttonText: 'Nhận Web Demo 0đ',
      targetServiceSlug: 'website-landing-page'
    }
  },
  {
    id: 'art-04',
    slug: 'cach-len-lich-dang-bai-khong-bi-bi-y-tuong',
    title: 'Ma Trận 15 Ý Tưởng Nội Dung Giúp Chủ Cửa Hàng Đăng Bài Đều Cả Tháng',
    pillar: 'Quản Trị Nội Dung & Vận Hành Kênh',
    pillarKey: 'content',
    category: 'Content Marketing',
    primaryIntent: 'HOW_TO',
    funnelStage: 'TOFU',
    primaryKeyword: 'cách lên lịch đăng bài fanpage',
    summary: 'Cách chia nhóm nội dung chuyên môn, hậu trường làm nghề và phản hồi của khách hàng để không bao giờ bị cạn kiệt ý tưởng đăng Fanpage & Website.',
    author: {
      name: 'Trần Thị Thu Trang',
      role: 'Content Strategy Lead tại LocalMate'
    },
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-15',
    readTime: '5 phút đọc',
    heroImage: '/assets/illustrations/roadmap-flag-path.png',
    tableOfContents: [
      { id: 'sai-lam-chi-dang-ban-hang', title: '1. Vì sao chỉ đăng bài bán hàng thì không ai like?' },
      { id: 'cong-thuc-3-nhom-noi-dung', title: '2. Công thức 3 nhóm nội dung vàng' },
      { id: '15-y-tuong-mau', title: '3. 15 ý tưởng mẫu áp dụng ngay cho mọi ngành' },
      { id: 'giai-phap-thue-ngoai-tinh-gon', title: '4. Giải pháp chăm sóc nội dung trọn gói 990k/tháng' }
    ],
    contentSections: [
      {
        headingId: 'sai-lam-chi-dang-ban-hang',
        heading: '1. Vì sao chỉ đăng bài bán hàng thì không ai like?',
        paragraphs: [
          'Khách hàng lên mạng xã hội để giải trí, học hỏi kinh nghiệm hoặc tìm giải pháp cho vấn đề của họ. Nếu ngày nào trang của bạn cũng đăng "Mua ngay", "Giảm giá sốc", khách hàng sẽ dần cảm thấy nhàm chán và bỏ theo dõi.',
          'Trang kinh doanh uy tín là trang biết cân bằng giữa chia sẻ kiến thức làm nghề và giới thiệu sản phẩm một cách khéo léo.'
        ]
      },
      {
        headingId: 'cong-thuc-3-nhom-noi-dung',
        heading: '2. Công thức 3 nhóm nội dung vàng',
        paragraphs: [
          'Hãy phân chia bài đăng trong tháng theo tỷ lệ 40 - 40 - 20:',
          '• 40% Nội dung Chuyên môn & Hướng dẫn: Cách phân biệt hàng thật/giả, mẹo bảo quản, giải đáp thắc mắc thường gặp.',
          '• 40% Nội dung Bằng chứng & Hậu trường: Hình ảnh thợ đang thi công, ảnh khách nhận hàng, góc làm việc thực tế.',
          '• 20% Nội dung Giới thiệu dịch vụ & Ưu đãi: Bảng giá chi tiết, khuyến mãi tháng mới, lời mời liên hệ tư vấn.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Một tuần nên đăng bao nhiêu bài là đủ?',
        answer: 'Với doanh nghiệp nhỏ và cửa hàng địa phương, duy trì đều đặn 3 đến 4 bài viết chất lượng mỗi tuần (12-15 bài/tháng) là tần suất lý tưởng nhất.'
      }
    ],
    relatedServiceSlugs: ['content-marketing', 'website-landing-page', 'google-maps'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'chu-doanh-nghiep-tu-lam-content-hay-thue-ngoai'],
    cta: {
      title: 'Không Có Thời Gian Viết Bài & Thiết Kế Hình Ảnh?',
      subtitle: 'Để LocalMate chăm sóc Fanpage & Website của bạn với 15 bài viết chuẩn nhận diện trọn gói chỉ 990.000đ/tháng.',
      buttonText: 'Xem Gói Chăm Sóc 990k',
      targetServiceSlug: 'content-marketing'
    }
  }
];

export const getAllArticles = (): ArticleEntity[] => {
  return ARTICLES;
};

export const getArticleBySlug = (slug: string): ArticleEntity | undefined => {
  return ARTICLES.find((a) => a.slug === slug);
};
