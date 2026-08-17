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
    title: 'Cách kiểm tra khách đã tìm gì trước khi bấm quảng cáo Google',
    pillar: 'Quảng Cáo Google Cho Doanh Nghiệp Nhỏ',
    pillarKey: 'google-ads',
    category: 'Quảng Cáo Google',
    primaryIntent: 'HOW_TO',
    funnelStage: 'MOFU',
    primaryKeyword: 'cách đọc search terms google ads',
    summary: 'Hướng dẫn đọc Search Terms trong Google Ads và loại bỏ những từ khóa không mang lại khách hàng.',
    author: {
      name: 'Nguyễn Văn Hùng',
      role: 'Chuyên viên kỹ thuật tại LocalMate'
    },
    publishedAt: '2026-07-15',
    updatedAt: '2026-08-10',
    readTime: '6 phút đọc',
    heroImage: '/assets/illustrations/mascot-ga4-gtm-ads.png',
    tableOfContents: [
      { id: 'search-terms-la-gi', title: '1. Khách hàng thực sự đã gõ những gì?' },
      { id: 'tai-sao-lang-phi-ngan-sach', title: '2. Vì sao tài khoản bị tốn tiền cho những click bấm nhầm?' },
      { id: '3-buoc-loc-tu-khoa-rac', title: '3. 3 bước kiểm tra và chặn từ khóa không liên quan' },
      { id: 'cach-them-negative-keywords', title: '4. Cách thêm từ khóa phủ định chính xác' },
      { id: 'loi-khuyen-thuc-te', title: '5. Lời khuyên tối ưu ngân sách từ LocalMate' }
    ],
    contentSections: [
      {
        headingId: 'search-terms-la-gi',
        heading: '1. Khách hàng thực sự đã gõ những gì?',
        paragraphs: [
          'Rất nhiều chủ tiệm lầm tưởng rằng khi cài từ khóa "sửa máy lạnh", quảng cáo sẽ chỉ hiện khi khách gõ đúng 3 chữ đó. Thực tế, Google có thể hiện quảng cáo của bạn cho những người tìm "học nghề sửa máy lạnh miễn phí" hay "sách hướng dẫn sửa máy lạnh cũ".',
          'Search Terms (Cụm từ tìm kiếm thực tế) chính là những chữ chính xác mà người dùng gõ vào ô tìm kiếm trước khi bấm vào quảng cáo của bạn.'
        ],
        callout: {
          type: 'warning',
          title: 'Lưu ý về ngân sách',
          text: 'Nếu không kiểm tra cụm từ tìm kiếm hàng tuần, bạn có thể đang trả tiền cho những người tìm việc làm hoặc tài liệu học tập chứ không hề có nhu cầu thuê thợ!'
        }
      },
      {
        headingId: 'tai-sao-lang-phi-ngan-sach',
        heading: '2. Vì sao tài khoản bị tốn tiền cho những click bấm nhầm?',
        paragraphs: [
          'Khi kiểm tra tài khoản của các khách hàng mới chuyển sang LocalMate, chúng tôi thường phát hiện một lượng lớn tiền quảng cáo rơi vào các từ khóa không có nhu cầu mua, bao gồm:',
          'Chỉ cần chặn những nhóm từ này, bạn sẽ dồn được ngân sách vào những khách hàng đang thực sự cần thuê thợ ngay!'
        ],
        listItems: [
          'Từ khóa tìm việc: "tuyển thợ", "mức lương", "việc làm"',
          'Từ khóa tìm đồ miễn phí: "hướng dẫn tự làm", "cách làm 0đ", "phần mềm tải về"',
          'Từ khóa tìm đồ sỉ: "bán sỉ", "nhập hàng Trung Quốc", "thanh lý đồ cũ"',
          'Từ khóa ở địa phương quá xa: Bạn ở TP.HCM nhưng người bấm lại ở Hà Nội hoặc Đà Nẵng'
        ]
      },
      {
        headingId: '3-buoc-loc-tu-khoa-rac',
        heading: '3. 3 bước kiểm tra và chặn từ khóa không liên quan',
        paragraphs: [
          'Bạn có thể tự làm việc này trong Google Ads theo các bước đơn giản sau:',
          'Bước 1: Đăng nhập vào Google Ads, chọn Chiến dịch đang chạy và bấm vào mục "Cụm từ tìm kiếm" (Search Terms).',
          'Bước 2: Sắp xếp theo cột "Số lượt nhấp" hoặc "Chi phí" để xem từ nào đang tiêu nhiều tiền nhất.',
          'Bước 3: Tích chọn những từ khóa không liên quan và chọn "Thêm làm từ khóa phủ định" (Add as negative keyword).'
        ]
      },
      {
        headingId: 'cach-them-negative-keywords',
        heading: '4. Cách thêm từ khóa phủ định chính xác',
        paragraphs: [
          'Khi chặn từ khóa, hãy chú ý chọn cấp độ "Chiến dịch" để từ đó không bao giờ kích hoạt quảng cáo nữa.',
          'Ví dụ: Nếu thấy từ "tuyển dụng thợ sửa máy lạnh", bạn chỉ cần chặn từ "tuyển dụng" và "tuyển thợ", Google sẽ tự động chặn mọi câu tìm kiếm có chứa các từ này.'
        ],
        callout: {
          type: 'tip',
          title: 'Mẹo từ LocalMate',
          text: 'Hãy tạo một danh sách các từ khóa chặn dùng chung (miễn phí, tuyển dụng, pdf, cũ, crack...) để áp dụng cho mọi quảng cáo mới chỉ với 1 cú bấm chuột.'
        }
      },
      {
        headingId: 'loi-khuyen-thuc-te',
        heading: '5. Lời khuyên tối ưu ngân sách từ LocalMate',
        paragraphs: [
          'Chạy Google Ads cho doanh nghiệp nhỏ không cần phải chi hàng chục triệu mới có kết quả. Bí quyết nằm ở: Chọn đúng từ khóa có nhu cầu mua + Chặn từ khóa bấm nhầm + Trang web mở nhanh có nút gọi to rõ.',
          'Nếu bạn không có thời gian tự theo dõi tài khoản mỗi tuần, hãy để đội ngũ kỹ thuật của LocalMate hỗ trợ rà soát và cài đặt chuẩn cho bạn.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Bao lâu nên vào kiểm tra từ khóa tìm kiếm một lần?',
        answer: 'Trong 2 tuần đầu mới bật quảng cáo, nên kiểm tra mỗi 2-3 ngày. Khi đã ổn định, chỉ cần xem lại 1 lần mỗi tuần.'
      },
      {
        question: 'Chặn từ khóa có làm giảm số lượng khách gọi không?',
        answer: 'Không. Chặn từ khóa chỉ ngăn những người bấm nhầm không mua. Những khách hàng thực sự cần dịch vụ vẫn nhìn thấy và gọi cho bạn bình thường.'
      }
    ],
    relatedServiceSlugs: ['google-ads', 'website-landing-page', 'google-maps'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'huong-dan-toi-uu-google-business-profile'],
    cta: {
      title: 'Bạn Muốn Kiểm Tra Tài Khoản Google Ads Miễn Phí?',
      subtitle: 'LocalMate hỗ trợ rà soát từ khóa và chỉ ra các lỗ hổng đang làm thất thoát tiền quảng cáo của bạn trong 30 phút.',
      buttonText: 'Tư Vấn Google Ads 0đ',
      targetServiceSlug: 'google-ads'
    }
  },
  {
    id: 'art-02',
    slug: 'huong-dan-toi-uu-google-business-profile',
    title: 'Cách tối ưu Google Maps để khách địa phương dễ tìm thấy doanh nghiệp',
    pillar: 'Google Maps & Khách Địa Phương',
    pillarKey: 'google-maps',
    category: 'Google Maps',
    primaryIntent: 'HOW_TO',
    funnelStage: 'TOFU',
    primaryKeyword: 'cách tối ưu google maps',
    summary: 'Cách điền thông tin doanh nghiệp, lựa chọn danh mục chuẩn, tải ảnh thực tế và xây dựng quy trình xin đánh giá 5 sao từ khách hàng thật.',
    author: {
      name: 'Phạm Minh Quân',
      role: 'Chuyên viên kỹ thuật Maps tại LocalMate'
    },
    publishedAt: '2026-07-20',
    updatedAt: '2026-08-12',
    readTime: '7 phút đọc',
    heroImage: '/assets/illustrations/mascot-local-map.png',
    tableOfContents: [
      { id: 'tam-quan-trong-cua-google-maps', title: '1. Tại sao Google Maps là kênh tìm khách hiệu quả nhất?' },
      { id: 'chon-danh-muc-chuan', title: '2. Cách chọn đúng danh mục ngành nghề' },
      { id: 'chuan-hoa-nap', title: '3. Chuẩn hóa Tên tiệm - Địa chỉ - Số điện thoại' },
      { id: 'hinh-anh-va-geotag', title: '4. Tải hình ảnh thực tế của cửa hàng' },
      { id: 'quy-trinh-xin-review', title: '5. Cách xin đánh giá 5 sao từ khách quen' }
    ],
    contentSections: [
      {
        headingId: 'tam-quan-trong-cua-google-maps',
        heading: '1. Tại sao Google Maps là kênh tìm khách hiệu quả nhất?',
        paragraphs: [
          'Khi người dùng mở điện thoại tìm "quán ăn gần đây", "tiệm sửa xe gần nhất" hoặc "nha khoa uy tín", Google sẽ ưu tiên hiển thị các vị trí trên bản đồ ngay trên đầu kết quả tìm kiếm.',
          'Khác với quảng cáo phải trả tiền cho từng lượt bấm, khách hàng tìm thấy bạn trên Google Maps và bấm nút Gọi hoặc Chỉ đường hoàn toàn MIỄN PHÍ.'
        ]
      },
      {
        headingId: 'chon-danh-muc-chuan',
        heading: '2. Cách chọn đúng danh mục ngành nghề',
        paragraphs: [
          'Danh mục chính là yếu tố quyết định hàng đầu xem cửa hàng của bạn có xuất hiện khi khách tìm kiếm hay không. Hãy chọn danh mục sát nhất với dịch vụ mang lại doanh thu chủ lực.',
          'Ví dụ: Nếu bạn là xưởng làm nhôm kính, hãy chọn danh mục chính là "Dịch vụ lắp ráp kính" hoặc "Nhà thầu xây dựng", sau đó thêm các danh mục phụ như "Cửa hàng vật liệu xây dựng".'
        ]
      },
      {
        headingId: 'chuan-hoa-nap',
        heading: '3. Chuẩn hóa Tên tiệm - Địa chỉ - Số điện thoại',
        paragraphs: [
          'Nguyên tắc số một của Google Maps là tính chính xác và nhất quán.',
          'Tên và địa chỉ trên Google Maps phải trùng khớp với Biển hiệu thực tế và trên trang Facebook. Không nên cố tình nhồi nhét quá nhiều từ khóa dài dòng vào tên vì dễ bị Google tạm khóa hồ sơ.'
        ]
      },
      {
        headingId: 'hinh-anh-va-geotag',
        heading: '4. Tải hình ảnh thực tế của cửa hàng',
        paragraphs: [
          'Google và khách hàng đều rất thích những hồ sơ có hình ảnh thật từ cuộc sống hàng ngày. Hãy tải lên ít nhất 10–15 bức ảnh rõ nét bao gồm:',
          'Mặt tiền có biển hiệu rõ ràng chụp từ ngoài đường vào, không gian làm việc bên trong, hình ảnh nhân viên đang phục vụ khách và các sản phẩm hoặc công trình đã hoàn thiện.'
        ]
      },
      {
        headingId: 'quy-trinh-xin-review',
        heading: '5. Cách xin đánh giá 5 sao từ khách quen',
        paragraphs: [
          'Đừng bao giờ mua đánh giá ảo! Hãy tạo mã QR dẫn thẳng đến trang đánh giá của Google và in ra để tại quầy thu ngân hoặc dán trên bàn.',
          'Thời điểm tốt nhất để xin đánh giá là ngay sau khi khách hàng khen ngợi dịch vụ hoặc vừa nhận bàn giao sản phẩm ưng ý. Kèm theo một lời cảm ơn chân thành, khách sẽ rất vui vẻ để lại 5 sao cho tiệm.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Bao lâu sau khi hoàn thiện thì vị trí hiển thị tốt hơn?',
        answer: 'Thông thường từ 2 đến 4 tuần sau khi hoàn thiện thông tin, tải đủ ảnh và có từ 10-15 đánh giá thật đầu tiên.'
      },
      {
        question: 'Làm sao để biết Google Maps có đang mang lại khách hay không?',
        answer: 'Trong mục "Hiệu suất" của Google Maps, bạn có thể xem chính xác số lượng cuộc gọi, số lượt nhấp chỉ đường và số lượt xem mỗi tháng.'
      }
    ],
    relatedServiceSlugs: ['google-maps', 'website-landing-page', 'google-ads'],
    relatedArticleSlugs: ['cach-doc-search-terms-google-ads', 'cau-truc-landing-page-chuyen-doi-cao'],
    cta: {
      title: 'Cần Đưa Cửa Hàng Lên Google Maps Chuyên Nghiệp?',
      subtitle: 'LocalMate giúp bạn xác minh vị trí chính chủ, điền thông tin chuẩn và thiết lập mã QR xin đánh giá 5 sao trọn gói chỉ từ 299.000đ.',
      buttonText: 'Tối Ưu Google Maps Ngay',
      targetServiceSlug: 'google-maps'
    }
  },
  {
    id: 'art-03',
    slug: 'cau-truc-landing-page-chuyen-doi-cao',
    title: 'Website bán dịch vụ cần có gì để khách dễ gọi điện và nhắn tin?',
    pillar: 'Website & Trang Bán Hàng',
    pillarKey: 'website',
    category: 'Thiết Kế Website',
    primaryIntent: 'CHECKLIST',
    funnelStage: 'MOFU',
    primaryKeyword: 'website bán dịch vụ cần những gì',
    summary: 'Phân tích 7 phần quan trọng trên một trang web giới thiệu dịch vụ giúp khách hàng hiểu ngay bạn làm gì, giá bao nhiêu và bấm gọi ngay.',
    author: {
      name: 'Nguyễn Văn Hùng',
      role: 'Chuyên viên kỹ thuật tại LocalMate'
    },
    publishedAt: '2026-07-28',
    updatedAt: '2026-08-14',
    readTime: '5 phút đọc',
    heroImage: '/assets/illustrations/hero-store-phone.png',
    tableOfContents: [
      { id: 'sai-lam-thuong-gap', title: '1. Sai lầm khiến khách vào website rồi thoát ngay' },
      { id: '7-thanh-phan-chuan', title: '2. 7 phần quan trọng một website dịch vụ cần có' },
      { id: 'mobile-first', title: '3. Nút bấm gọi điện thuận tiện trên di động' },
      { id: 'tam-quan-trong-toc-do', title: '4. Tốc độ mở trang web: Mở nhanh dưới 2 giây' },
      { id: 'ket-luan', title: '5. Nhận bản website mẫu 0đ cùng LocalMate' }
    ],
    contentSections: [
      {
        headingId: 'sai-lam-thuong-gap',
        heading: '1. Sai lầm khiến khách vào website rồi thoát ngay',
        paragraphs: [
          'Nhiều doanh nghiệp chi nhiều triệu làm website rất hoành tráng nhưng khách vào xem 5 giây rồi tắt. Lý do phổ biến nhất là website viết quá nhiều từ hoa mỹ ("Kiến tạo tương lai", "Đỉnh cao chất lượng") mà không chịu nói rõ:',
          'Tôi làm nghề gì? Giá khởi điểm khoảng bao nhiêu? Khách hàng nhận được gì? Và phải bấm đâu để gọi điện thoại?'
        ]
      },
      {
        headingId: '7-thanh-phan-chuan',
        heading: '2. 7 phần quan trọng một website dịch vụ cần có',
        paragraphs: [
          'Một trang web hiệu quả cần được thiết kế như một cuộc trò chuyện trực tiếp với khách hàng theo thứ tự rõ ràng:',
          '1. Phần Đầu Trang: Nêu rõ dịch vụ bạn làm + Lợi ích chính + Nút bấm gọi ngay.',
          '2. Phần Nhu Cầu Của Khách: Kể đúng những khó khăn khách đang gặp phải.',
          '3. Phần Bạn Sẽ Nhận Được Gì: Liệt kê rõ ràng những việc LocalMate sẽ làm.',
          '4. Phần Bảng Giá Minh Bạch: Mức giá bắt đầu, không giấu giá khiến khách e ngại.',
          '5. Phần Quy Trình Làm Việc: 3-5 bước đơn giản giúp khách an tâm về tiến độ.',
          '6. Phần Hình Ảnh Thực Tế: Hình ảnh cơ sở thật, công trình đã làm, đánh giá thật.',
          '7. Phần Kêu Gọi Liên Hệ: Lời mời tư vấn kèm cam kết rõ ràng không rủi ro.'
        ]
      },
      {
        headingId: 'mobile-first',
        heading: '3. Nút bấm gọi điện thuận tiện trên di động',
        paragraphs: [
          'Đa số khách hàng tìm kiếm dịch vụ đều dùng điện thoại di động. Nút bấm gọi Hotline và Chat Zalo phải luôn ghim ở vị trí thuận tiện dưới góc màn hình để khách có thể bấm bằng một ngón tay cái mà không cần phải copy số.'
        ]
      },
      {
        headingId: 'tam-quan-trong-toc-do',
        heading: '4. Tốc độ mở trang web: Mở nhanh dưới 2 giây',
        paragraphs: [
          'Khi chạy quảng cáo, mỗi lượt bấm đều tốn tiền. Nếu trang web mất quá lâu để mở xong hình ảnh, khách hàng sẽ lập tức bấm quay lại và chuyển sang tiệm khác.',
          'LocalMate cam kết tối ưu trang web tinh gọn, nén ảnh chất lượng cao để mở lên nhanh chóng trong vòng 1.5–2 giây.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Làm website mất bao lâu?',
        answer: 'Tại LocalMate, website 1 trang hoàn thiện chỉ trong 24–48h. Gói website trọn gói hoàn thành trong 3–7 ngày làm việc.'
      }
    ],
    relatedServiceSlugs: ['website-landing-page', 'google-ads', 'google-maps'],
    relatedArticleSlugs: ['cach-doc-search-terms-google-ads', 'huong-dan-toi-uu-google-business-profile'],
    cta: {
      title: 'Xem Thử Mẫu Website Miễn Phí Cho Ngành Của Bạn',
      subtitle: 'LocalMate dựng sẵn giao diện thực tế phù hợp với ngành nghề để bạn duyệt phong cách trước khi quyết định hợp tác.',
      buttonText: 'Nhận Mẫu Web 0đ',
      targetServiceSlug: 'website-landing-page'
    }
  },
  {
    id: 'art-04',
    slug: 'cach-len-lich-dang-bai-khong-bi-bi-y-tuong',
    title: '15 ý tưởng bài Facebook cho cửa hàng dùng cả tháng',
    pillar: 'Viết Bài & Chăm Sóc Nội Dung',
    pillarKey: 'content',
    category: 'Chăm Sóc Nội Dung',
    primaryIntent: 'HOW_TO',
    funnelStage: 'TOFU',
    primaryKeyword: 'ý tưởng đăng bài facebook cửa hàng',
    summary: 'Cách chia nhóm nội dung chuyên môn, hình ảnh làm nghề thực tế và phản hồi của khách hàng để luôn có bài đăng đều đặn mỗi tuần.',
    author: {
      name: 'Trần Thị Thu Trang',
      role: 'Phụ trách nội dung tại LocalMate'
    },
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-15',
    readTime: '5 phút đọc',
    heroImage: '/assets/illustrations/roadmap-flag-path.png',
    tableOfContents: [
      { id: 'sai-lam-chi-dang-ban-hang', title: '1. Vì sao chỉ đăng bài bán hàng thì ít người xem?' },
      { id: 'cong-thuc-3-nhom-noi-dung', title: '2. Công thức 3 nhóm nội dung dễ làm' },
      { id: '15-y-tuong-mau', title: '3. 15 ý tưởng mẫu áp dụng ngay cho cửa hàng' },
      { id: 'giai-phap-thue-ngoai-tinh-gon', title: '4. Gói chăm sóc bài đăng trọn gói từ 990k/tháng' }
    ],
    contentSections: [
      {
        headingId: 'sai-lam-chi-dang-ban-hang',
        heading: '1. Vì sao chỉ đăng bài bán hàng thì ít người xem?',
        paragraphs: [
          'Khách hàng lên mạng xã hội để giải trí, học hỏi kinh nghiệm hoặc tìm giải pháp cho vấn đề của họ. Nếu ngày nào trang của bạn cũng chỉ đăng "Mua ngay", "Giảm giá sốc", khách hàng sẽ dần cảm thấy nhàm chán.',
          'Trang kinh doanh uy tín là trang biết chia sẻ hình ảnh làm việc hàng ngày, kinh nghiệm làm nghề xen kẽ với giới thiệu sản phẩm.'
        ]
      },
      {
        headingId: 'cong-thuc-3-nhom-noi-dung',
        heading: '2. Công thức 3 nhóm nội dung dễ làm',
        paragraphs: [
          'Hãy phân chia bài đăng trong tháng theo tỷ lệ đơn giản:',
          '• 40% Nội dung Mẹo hay & Hướng dẫn: Cách phân biệt đồ tốt/xấu, mẹo sử dụng bền lâu, giải đáp câu hỏi khách hay hỏi.',
          '• 40% Nội dung Hình ảnh thực tế: Ảnh thợ đang làm việc tại tiệm, ảnh khách nhận hàng, góc làm việc ngăn nắp.',
          '• 20% Nội dung Bảng giá & Ưu đãi: Giới thiệu dịch vụ chi tiết, bảng giá rõ ràng và lời mời liên hệ tư vấn.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Một tuần nên đăng bao nhiêu bài là vừa?',
        answer: 'Với cửa hàng và doanh nghiệp nhỏ, duy trì đều đặn 3 đến 4 bài viết chất lượng mỗi tuần (khoảng 12–15 bài/tháng) là tần suất rất đẹp.'
      }
    ],
    relatedServiceSlugs: ['content-marketing', 'website-landing-page', 'google-maps'],
    relatedArticleSlugs: ['cau-truc-landing-page-chuyen-doi-cao', 'huong-dan-toi-uu-google-business-profile'],
    cta: {
      title: 'Không Có Thời Gian Tự Viết Bài & Làm Ảnh?',
      subtitle: 'Để LocalMate chuẩn bị sẵn 15 bài viết và hình ảnh thiết kế đồng bộ cho tiệm của bạn trọn gói chỉ từ 990.000đ/tháng.',
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
