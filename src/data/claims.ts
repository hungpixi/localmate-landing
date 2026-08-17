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
    claimText: 'Bàn giao rồi mới thanh toán',
    category: 'pricing',
    status: 'FACT',
    evidence: 'Chính sách nghiệm thu thực tế của LocalMate: Khách hàng chỉ thanh toán khi đã duyệt bản demo và website hoạt động đúng thỏa thuận.',
    approvedForMarketing: true
  },
  {
    id: 'claim-no-hidden-fees',
    claimText: 'Báo giá niêm yết minh bạch, không phí ẩn',
    category: 'pricing',
    status: 'FACT',
    evidence: 'Toàn bộ 40 đầu mục dịch vụ và gói combo đều được công khai đơn giá tại /bang-gia.',
    approvedForMarketing: true
  },
  {
    id: 'claim-full-account-ownership',
    claimText: 'Bàn giao 100% quyền quản trị và dữ liệu cho khách hàng',
    category: 'ownership',
    status: 'FACT',
    evidence: 'Khách hàng là chủ sở hữu duy nhất của tài khoản Google Business Profile, Google Ads, Domain và Mã nguồn website.',
    approvedForMarketing: true
  },
  {
    id: 'claim-timeline-starter',
    claimText: 'Thời gian hoàn thiện Gói Khởi Tạo từ 7 đến 10 ngày làm việc',
    category: 'process',
    status: 'FACT',
    evidence: 'Quy trình 5 bước chuẩn hóa thời gian thu thập dữ liệu và dựng giao diện.',
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
    evidence: 'Thuật toán tìm kiếm và hành vi mua sắm phụ thuộc nhiều yếu tố thị trường, LocalMate cam kết chuẩn kỹ thuật và tối ưu tỷ lệ chuyển đổi, không đưa ra cam kết ảo vô căn cứ.',
    approvedForMarketing: false,
    notes: 'TUYỆT ĐỐI KHÔNG xuất hiện trên giao diện người dùng.'
  }
];

export const isClaimApproved = (claimId: string): boolean => {
  const claim = APPROVED_CLAIMS.find((c) => c.id === claimId);
  return claim ? claim.approvedForMarketing : false;
};
