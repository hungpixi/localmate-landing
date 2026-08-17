export interface PolicyDocument {
  id: string;
  slug: string;
  title: string;
  lastUpdated: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const LEGAL_POLICIES: Record<string, PolicyDocument> = {
  'chinh-sach-bao-mat': {
    id: 'privacy-policy',
    slug: 'chinh-sach-bao-mat',
    title: 'Chính Sách Bảo Mật Thông Tin & Dữ Liệu Khách Hàng',
    lastUpdated: '15/08/2026',
    summary: 'LocalMate cam kết tôn trọng và bảo vệ tuyệt đối quyền riêng tư, thông tin cá nhân và dữ liệu kinh doanh của khách hàng theo quy định pháp luật Việt Nam.',
    sections: [
      {
        heading: '1. Mục đích thu thập thông tin',
        content: [
          'LocalMate chỉ thu thập các thông tin cần thiết phục vụ cho việc tư vấn, lập dự toán và triển khai dịch vụ kỹ thuật theo yêu cầu của khách hàng, bao gồm: Họ tên, Số điện thoại (Zalo), Tên doanh nghiệp/cơ sở kinh doanh, Địa chỉ và Nhu cầu dịch vụ cụ thể.',
          'Mọi thông tin liên hệ do khách hàng cung cấp qua form đăng ký hoặc hotline chỉ được sử dụng cho mục đích liên lạc phản hồi trực tiếp giữa chuyên viên LocalMate và khách hàng.'
        ]
      },
      {
        heading: '2. Quyền sở hữu tài khoản & Dữ liệu tối cao',
        content: [
          'Khách hàng là chủ sở hữu hợp pháp duy nhất của mọi tài khoản số (Google Business Profile, Google Ads, Meta Ads, Tên miền và Mã nguồn Website) do LocalMate khởi tạo hoặc hỗ trợ tối ưu.',
          'Sau khi nghiệm thu và bàn giao, LocalMate cam kết chuyển giao 100% quyền quản trị chính (Primary Owner/Admin) và xóa bỏ các quyền truy cập nhạy cảm nếu khách hàng yêu cầu.'
        ]
      },
      {
        heading: '3. Bảo mật thông tin kinh doanh',
        content: [
          'LocalMate cam kết không bán, chia sẻ hay tiết lộ danh sách khách hàng, doanh thu, chiến lược từ khóa hoặc dữ liệu khách hàng tiềm năng cho bất kỳ bên thứ ba nào vì mục đích thương mại.',
          'Các case study hiển thị trên website đều đã được sự đồng ý của khách hàng hoặc được ẩn danh (anonymized) theo đúng quy tắc bảo vệ đối tác.'
        ]
      },
      {
        heading: '4. Đơn vị thu thập và quản lý thông tin',
        content: [
          'CÔNG TY TNHH LOCALMATE',
          'Hotline hỗ trợ: 0834.422.439',
          'Email tiếp nhận: hotro@localmate.vn / hungphamphunguyen@gmail.com',
          'Phạm vi hỗ trợ: Toàn quốc (Online 24/7).'
        ]
      }
    ]
  },
  'dieu-khoan': {
    id: 'terms-of-service',
    slug: 'dieu-khoan',
    title: 'Điều Khoản Dịch Vụ & Thỏa Thuận Sử Dụng',
    lastUpdated: '15/08/2026',
    summary: 'Quy định về quyền lợi, nghĩa vụ và nguyên tắc hợp tác giữa Khách hàng và LocalMate nhằm đảm bảo tính minh bạch, công bằng và hiệu quả.',
    sections: [
      {
        heading: '1. Nguyên tắc hợp tác "Minh bạch - Nói thực - Làm thực"',
        content: [
          'LocalMate cung cấp dịch vụ kỹ thuật số, thiết kế trang web và tư vấn tối ưu chuyển đổi theo phạm vi công việc (Scope of Work) được thống nhất bằng văn bản/báo giá trước khi thực hiện.',
          'LocalMate cam kết nỗ lực tối đa theo chuẩn chuyên môn kỹ thuật (Technical SEO, Core Web Vitals, Responsive Design). Chúng tôi không đưa ra những lời hứa ảo vô căn cứ về việc cam kết vị trí Top 1 cố định hay doanh thu bán hàng tuyệt đối.'
        ]
      },
      {
        heading: '2. Quy trình demo và thanh toán',
        content: [
          'Khách hàng được xem bản Web Demo định hướng 0đ để duyệt cấu trúc và phong cách giao diện.',
          'Việc thanh toán hợp đồng chỉ diễn ra sau khi hai bên đã nghiệm thu tính năng website hoạt động ổn định trên thực tế và nhận bàn giao tài khoản quản trị.'
        ]
      },
      {
        heading: '3. Quyền sở hữu trí tuệ',
        content: [
          'Sau khi hoàn tất thanh toán, khách hàng sở hữu toàn bộ bản quyền mã nguồn, nội dung bài viết và hình ảnh banner được thiết kế riêng cho dự án.',
          'Khách hàng có toàn quyền chuyển đổi đơn vị lưu trữ hosting hoặc tự cập nhật nội dung mà không phải chịu bất kỳ khoản phí phạt ràng buộc nào.'
        ]
      }
    ]
  },
  'chinh-sach-dich-vu': {
    id: 'service-sla-policy',
    slug: 'chinh-sach-dich-vu',
    title: 'Chính Sách Dịch Vụ, SLA & Giới Hạn Chỉnh Sửa',
    lastUpdated: '15/08/2026',
    summary: 'Quy định chi tiết về thời gian phản hồi (SLA), chính sách hỗ trợ kỹ thuật sau bàn giao và hạn mức vòng chỉnh sửa nhằm bảo vệ tiến độ dự án.',
    sections: [
      {
        heading: '1. Thời gian bàn giao cam kết (SLA)',
        content: [
          'Gói Landing Page Mini 490k: Bàn giao trong vòng 24–48 giờ làm việc kể từ khi nhận đủ thông tin.',
          'Gói Khởi Tạo Hiện Diện Số 2.9M: Bàn giao trong vòng 07–10 ngày làm việc.',
          'Các dịch vụ kỹ thuật nhỏ (Setup GA4, GTM, Maps 299k): Hoàn thành trong vòng 24–72 giờ.'
        ]
      },
      {
        heading: '2. Quy định về số vòng chỉnh sửa (Revision Policy)',
        content: [
          'Mỗi dự án thiết kế website bao gồm tối đa 02 vòng chỉnh sửa lớn (thay đổi cấu trúc, bố cục trang) và không giới hạn các chỉnh sửa nhỏ về chính tả, hình ảnh trong phạm vi scope đã thống nhất.',
          'Cá nhân hóa cao không có nghĩa là chỉnh sửa vô hạn. Mọi yêu cầu phát sinh ngoài phạm vi hợp đồng ban đầu sẽ được thông báo chi phí trước khi thực hiện.'
        ]
      },
      {
        heading: '3. Chính sách bảo hành & Hỗ trợ sau bàn giao',
        content: [
          'Mọi website do LocalMate thiết kế đều được bảo hành kỹ thuật 30 ngày miễn phí sau bàn giao (sửa lỗi hiển thị, lỗi form, hỗ trợ cấu hình tên miền).',
          'Khách hàng sử dụng gói chăm sóc định kỳ (Digital Care) được hỗ trợ kỹ thuật và giám sát uptime liên tục 24/7 qua kênh Zalo riêng.'
        ]
      }
    ]
  }
};
