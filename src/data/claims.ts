export type ClaimStatus =
  | 'FACT'
  | 'CASE_STUDY'
  | 'BENCHMARK'
  | 'ESTIMATE'
  | 'HYPOTHESIS'
  | 'UNVERIFIED'
  | 'PROHIBITED_AS_GUARANTEE';

export interface MarketingClaim {
  id: string;
  claimText: string;
  category: 'pricing' | 'process' | 'performance' | 'ownership' | 'legal';
  status: ClaimStatus;
  evidence: string;
  approvedForMarketing: boolean;
  notes?: string;
}

export const APPROVED_CLAIMS: MarketingClaim[] = [
  {
    id: 'claim-payment-after-delivery',
    claimText: 'Nghiệm thu hài lòng rồi mới thanh toán',
    category: 'pricing',
    status: 'FACT',
    evidence: 'Chính sách thực tế của LocalMate: Khách hàng được xem bản demo và kiểm tra website hoạt động mượt mà trên điện thoại rồi mới thanh toán.',
    approvedForMarketing: true
  },
  {
    id: 'claim-no-hidden-fees',
    claimText: 'Báo giá trước rõ ràng, không tự phát sinh chi phí ẩn',
    category: 'pricing',
    status: 'FACT',
    evidence: 'Toàn bộ dịch vụ và gói combo đều được niêm yết công khai đơn giá tại /bang-gia.',
    approvedForMarketing: true
  },
  {
    id: 'claim-full-account-ownership',
    claimText: 'Bàn giao 100% quyền quản trị chính chủ cho khách hàng',
    category: 'ownership',
    status: 'FACT',
    evidence: 'Khách hàng là chủ sở hữu duy nhất của tài khoản Google Maps, Google Ads, Domain và Mã nguồn website.',
    approvedForMarketing: true
  },
  {
    id: 'claim-timeline-delivery',
    claimText: 'Nhiều hạng mục hoàn thành nhanh từ 1 đến 7 ngày làm việc',
    category: 'process',
    status: 'FACT',
    evidence: 'Quy trình chuẩn hóa rút ngắn thời gian thu thập thông tin và bàn giao giao diện.',
    approvedForMarketing: true
  },
  {
    id: 'claim-real-business-entity',
    claimText: 'Pháp nhân CÔNG TY TNHH LOCALMATE bảo hộ hợp đồng và xuất hóa đơn VAT',
    category: 'legal',
    status: 'FACT',
    evidence: 'Giấy chứng nhận đăng ký kinh doanh và Mã số thuế doanh nghiệp tại Việt Nam.',
    approvedForMarketing: true
  },
  {
    id: 'claim-prohibited-top1-guarantee',
    claimText: 'Cam kết Top 1 Google hoặc Tăng 300% doanh thu',
    category: 'performance',
    status: 'PROHIBITED_AS_GUARANTEE',
    evidence: 'Hành vi mua sắm và vị trí tìm kiếm phụ thuộc nhiều yếu tố thị trường, LocalMate cam kết chuẩn kỹ thuật và tối ưu hiển thị, không đưa ra cam kết ảo vô căn cứ.',
    approvedForMarketing: false,
    notes: 'TUYỆT ĐỐI KHÔNG xuất hiện trên giao diện người dùng.'
  },
  {
    id: 'claim-prohibited-lifetime-warranty',
    claimText: 'Bảo hành trọn đời vô điều kiện',
    category: 'process',
    status: 'PROHIBITED_AS_GUARANTEE',
    evidence: 'Dịch vụ công nghệ phụ thuộc hosting và cập nhật nền tảng, LocalMate cam kết bảo hành kỹ thuật 30 ngày sau bàn giao và hỗ trợ liên tục qua các gói chăm sóc định kỳ.',
    approvedForMarketing: false,
    notes: 'Thay thế bằng: Có hỗ trợ kỹ thuật sau bàn giao.'
  }
];

export const isClaimApproved = (claimId: string): boolean => {
  const claim = APPROVED_CLAIMS.find((c) => c.id === claimId);
  return claim ? claim.approvedForMarketing : false;
};
