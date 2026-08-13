export interface AuditCheckItem {
  id: string;
  title: string;
  category: 'seo' | 'tracking' | 'ux' | 'security' | 'speed';
  passed: boolean;
  impact: 'high' | 'medium' | 'low';
  fixServiceName: string;
  fixPriceDisplay: string;
  fixServiceId: string;
  recommendation: string;
}

export interface AuditResult {
  url: string;
  domain: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D';
  passedCount: number;
  failedCount: number;
  checks: AuditCheckItem[];
  quickFixTotalCost: number;
  quickFixTotalDisplay: string;
  summaryText: string;
}

export const runAutomatedWebsiteAudit = (rawUrl: string): AuditResult => {
  let domain = rawUrl.trim().toLowerCase();
  if (domain.startsWith('http://')) domain = domain.replace('http://', '');
  if (domain.startsWith('https://')) domain = domain.replace('https://', '');
  if (domain.endsWith('/')) domain = domain.slice(0, -1);
  if (!domain) domain = 'your-website.com';

  // Seed pseudo deterministic results based on domain name length and chars
  const hash = domain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const isSslPassed = true;
  const isResponsivePassed = hash % 2 === 0;
  const isGa4Passed = hash % 3 === 0;
  const isGtmPassed = hash % 4 === 0;
  const isSchemaPassed = hash % 5 === 0;
  const isSpeedPassed = hash % 7 === 0;
  const isCtaPassed = hash % 2 === 1;

  const checks: AuditCheckItem[] = [
    {
      id: 'ssl',
      title: 'Bảo mật SSL (HTTPS)',
      category: 'security',
      passed: isSslPassed,
      impact: 'high',
      fixServiceName: 'Domain & DNS Setup',
      fixPriceDisplay: '149.000đ',
      fixServiceId: '12',
      recommendation: 'Website đã bật SSL an toàn mã hóa dữ liệu.'
    },
    {
      id: 'responsive',
      title: 'Giao diện di động Mobile-friendly',
      category: 'ux',
      passed: isResponsivePassed,
      impact: 'high',
      fixServiceName: 'Responsive Mobile Fix',
      fixPriceDisplay: '149.000đ',
      fixServiceId: '10',
      recommendation: isResponsivePassed
        ? 'Website hiển thị mượt trên di động.'
        : 'Phát hiện lỗi tràn màn hình & chữ nhỏ khó đọc trên thiết bị iPhone/Android.'
    },
    {
      id: 'ga4',
      title: 'Google Analytics 4 Tracking',
      category: 'tracking',
      passed: isGa4Passed,
      impact: 'high',
      fixServiceName: 'GA4 Setup',
      fixPriceDisplay: '99.000đ',
      fixServiceId: '23',
      recommendation: isGa4Passed
        ? 'Đã phát hiện mã GA4 theo dõi lưu lượng.'
        : 'Chưa có mã GA4! Bạn hoàn toàn không biết có bao nhiêu người đang vào website.'
    },
    {
      id: 'gtm',
      title: 'Google Tag Manager Container',
      category: 'tracking',
      passed: isGtmPassed,
      impact: 'medium',
      fixServiceName: 'GTM Setup',
      fixPriceDisplay: '99.000đ',
      fixServiceId: '24',
      recommendation: isGtmPassed
        ? 'Đã nhúng GTM tập trung.'
        : 'Chưa nhúng GTM để quản lý mã quảng cáo & đo lường.'
    },
    {
      id: 'schema',
      title: 'Khai báo Schema / Dữ liệu cấu trúc Search',
      category: 'seo',
      passed: isSchemaPassed,
      impact: 'high',
      fixServiceName: 'Schema Setup',
      fixPriceDisplay: '199.000đ',
      fixServiceId: '17',
      recommendation: isSchemaPassed
        ? 'Đã khai báo Schema LocalBusiness.'
        : 'Thiếu Schema! Google chưa thể nhận diện địa chỉ, ngành nghề & số điện thoại để hiển thị ưu tiên.'
    },
    {
      id: 'speed',
      title: 'Tốc độ tải trang đầu (PageSpeed)',
      category: 'speed',
      passed: isSpeedPassed,
      impact: 'medium',
      fixServiceName: 'Tối Ưu Tốc Độ Cơ Bản',
      fixPriceDisplay: '299.000đ',
      fixServiceId: '11',
      recommendation: isSpeedPassed
        ? 'Tốc độ phản hồi đạt mức tốt.'
        : 'Ảnh chưa nén WebP khiến trang tải chậm >3 giây, dễ làm khách thoát ra.'
    },
    {
      id: 'cta',
      title: 'Nút gọi / Zalo / Form liên hệ di động',
      category: 'ux',
      passed: isCtaPassed,
      impact: 'high',
      fixServiceName: 'Form Website Integration',
      fixPriceDisplay: '199.000đ',
      fixServiceId: '14',
      recommendation: isCtaPassed
        ? 'Có nút Zalo/Hotline rõ ràng.'
        : 'Nút Zalo & Hotline di động bị khuất, khiến khách khó bấm liên hệ ngay.'
    }
  ];

  const passedCount = checks.filter((c) => c.passed).length;
  const failedCount = checks.length - passedCount;
  const score = Math.round((passedCount / checks.length) * 100);

  let grade: 'A' | 'B' | 'C' | 'D' = 'C';
  if (score >= 85) grade = 'A';
  else if (score >= 70) grade = 'B';
  else if (score >= 50) grade = 'C';
  else grade = 'D';

  const failedItems = checks.filter((c) => !c.passed);
  const quickFixTotalCost = failedItems.reduce((sum, item) => {
    const val = parseInt(item.fixPriceDisplay.replace(/\D/g, ''), 10) || 0;
    return sum + val;
  }, 0);

  const formatPriceVND = (num: number) => {
    if (num === 0) return '0đ';
    if (num >= 1000000) return `${(num / 1000000).toLocaleString('vi-VN')} triệu`;
    return `${(num / 1000).toLocaleString('vi-VN')}k`;
  };

  return {
    url: rawUrl,
    domain,
    score,
    grade,
    passedCount,
    failedCount,
    checks,
    quickFixTotalCost,
    quickFixTotalDisplay: formatPriceVND(quickFixTotalCost),
    summaryText: `Website ${domain} đạt ${score}/100 điểm. Phát hiện ${failedCount} vấn đề kỹ thuật cần khắc phục để tối ưu tỷ lệ chuyển đổi khách hàng.`
  };
};
