export type ConceptStyle = 'modern' | 'premium' | 'minimal' | 'warm';

export interface ConceptInput {
  businessName: string;
  industry: string;
  style: ConceptStyle;
  websiteUrl?: string;
}

export interface ConceptPresetMeta {
  styleKey: ConceptStyle;
  label: string;
  colorBg: string;
  colorAccent: string;
  colorText: string;
  fontFamily: string;
  headerTagline: string;
}

export const CONCEPT_STYLES: ConceptPresetMeta[] = [
  {
    styleKey: 'modern',
    label: 'Hiện Đại & Năng Động',
    colorBg: '#ffffff',
    colorAccent: '#0FA99A',
    colorText: '#052F3D',
    fontFamily: 'Inter, sans-serif',
    headerTagline: 'Hiện Đại · Tốc Độ · Chuẩn Di Động'
  },
  {
    styleKey: 'premium',
    label: 'Sang Trọng & Cao Cấp',
    colorBg: '#0b1320',
    colorAccent: '#E0A852',
    colorText: '#ffffff',
    fontFamily: 'Outfit, serif',
    headerTagline: 'Đẳng Cấp · Tinh Tế · Định Vị Cao'
  },
  {
    styleKey: 'warm',
    label: 'Ấm Áp & Thân Thiện (F&B/Spa)',
    colorBg: '#fdfbf7',
    colorAccent: '#e06d53',
    colorText: '#2c1e1a',
    fontFamily: 'Comfortaa, cursive',
    headerTagline: 'Ấm Cúng · Thu Hút · Tăng Booking'
  },
  {
    styleKey: 'minimal',
    label: 'Tối Giản & Chuyên Nghiệp',
    colorBg: '#f8fbfa',
    colorAccent: '#052F3D',
    colorText: '#1e293b',
    fontFamily: 'Roboto, sans-serif',
    headerTagline: 'Gọn Gàng · Rõ Ràng · Tối Ưu Chuyển Đổi'
  }
];

export interface GeneratedConceptResult {
  businessName: string;
  industry: string;
  style: ConceptStyle;
  styleMeta: ConceptPresetMeta;
  svgMockupDataUrl: string;
  disclaimer: string;
}

export const generateWebsiteConceptMockup = (input: ConceptInput): GeneratedConceptResult => {
  const name = input.businessName.trim() || 'Thương Hiệu Của Bạn';
  const ind = input.industry.trim() || 'Dịch vụ chuyên nghiệp';
  const meta = CONCEPT_STYLES.find((s) => s.styleKey === input.style) || CONCEPT_STYLES[0];

  // SVG Web Mockup Screenshot Preview Template
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 640" width="1000" height="640">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${meta.colorBg}" />
          <stop offset="100%" stop-color="${meta.styleKey === 'premium' ? '#142035' : '#f0f7f5'}" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.15" />
        </filter>
      </defs>

      <!-- Browser Window Frame -->
      <rect x="0" y="0" width="1000" height="640" rx="16" fill="#ffffff" filter="url(#shadow)" />
      
      <!-- Top Browser Bar -->
      <rect x="0" y="0" width="1000" height="42" rx="16" fill="#e2e8f0" />
      <circle cx="24" cy="21" r="6" fill="#ef4444" />
      <circle cx="42" cy="21" r="6" fill="#f59e0b" />
      <circle cx="60" cy="21" r="6" fill="#10b981" />
      <rect x="180" y="10" width="640" height="22" rx="6" fill="#ffffff" />
      <text x="500" y="25" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">https://${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.localmate.vn</text>

      <!-- Web Page Content Canvas -->
      <rect x="0" y="42" width="1000" height="598" fill="url(#grad)" />

      <!-- Navbar -->
      <rect x="0" y="42" width="1000" height="60" fill="${meta.styleKey === 'premium' ? 'rgba(11, 19, 32, 0.9)' : 'rgba(255,255,255,0.9)'}" />
      <text x="50" y="78" font-family="${meta.fontFamily}" font-size="20" font-weight="bold" fill="${meta.colorAccent}">${name.toUpperCase()}</text>
      <text x="650" y="77" font-family="sans-serif" font-size="13" fill="${meta.colorText}">Trang chủ   Dịch vụ   Dự án   Liên hệ</text>
      <rect x="840" y="57" width="110" height="30" rx="15" fill="${meta.colorAccent}" />
      <text x="895" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Hotline / Zalo</text>

      <!-- Hero Section Container -->
      <rect x="50" y="140" width="520" height="28" rx="14" fill="${meta.colorAccent}" opacity="0.15" />
      <text x="65" y="159" font-family="sans-serif" font-size="12" font-weight="bold" fill="${meta.colorAccent}">✦ MẪU THIẾT KẾ ĐỊNH HƯỚNG MIỄN PHÍ DÀNH CHO ${ind.toUpperCase()}</text>

      <text x="50" y="210" font-family="${meta.fontFamily}" font-size="34" font-weight="800" fill="${meta.colorText}">${name}</text>
      <text x="50" y="250" font-family="${meta.fontFamily}" font-size="24" font-weight="700" fill="${meta.colorAccent}">Giải Pháp Digital &amp; Hiện Diện Uy Tín</text>

      <text x="50" y="290" font-family="sans-serif" font-size="14" fill="${meta.colorText}" opacity="0.8">Giao diện tối ưu trải nghiệm di động, tích hợp nút đặt hàng/gọi Zalo tức thời.</text>
      <text x="50" y="312" font-family="sans-serif" font-size="14" fill="${meta.colorText}" opacity="0.8">Đã cài đặt mã đo lường chuyển đổi &amp; định vị Google Maps.</text>

      <!-- Hero CTA Buttons -->
      <rect x="50" y="340" width="180" height="46" rx="23" fill="${meta.colorAccent}" />
      <text x="140" y="368" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">ĐẶT LỊCH / TƯ VẤN</text>

      <rect x="245" y="340" width="160" height="46" rx="23" fill="none" stroke="${meta.colorAccent}" stroke-width="2" />
      <text x="325" y="368" font-family="sans-serif" font-size="14" font-weight="bold" fill="${meta.colorAccent}" text-anchor="middle">Xem Bảng Giá</text>

      <!-- Right Visual Mockup Card -->
      <rect x="620" y="130" width="330" height="280" rx="16" fill="#ffffff" filter="url(#shadow)" opacity="0.95" />
      <rect x="640" y="150" width="290" height="150" rx="10" fill="${meta.colorAccent}" opacity="0.1" />
      <circle cx="785" cy="225" r="35" fill="${meta.colorAccent}" />
      <polygon points="778,210 800,225 778,240" fill="#ffffff" />
      <text x="785" y="325" font-family="sans-serif" font-size="14" font-weight="bold" fill="${meta.colorText}" text-anchor="middle">${name} - Showcase</text>
      <text x="785" y="345" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Giao diện độc quyền chuẩn LocalMate</text>

      <!-- Bottom Feature Section Cards -->
      <rect x="50" y="440" width="280" height="150" rx="12" fill="#ffffff" opacity="0.9" />
      <text x="70" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="${meta.colorText}">01. Chuẩn Di Động 100%</text>
      <text x="70" y="500" font-family="sans-serif" font-size="12" fill="#64748b">Tải nhanh dưới 1.5s trên 4G di động.</text>

      <rect x="360" y="440" width="280" height="150" rx="12" fill="#ffffff" opacity="0.9" />
      <text x="380" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="${meta.colorText}">02. Định Vị Google Maps</text>
      <text x="380" y="500" font-family="sans-serif" font-size="12" fill="#64748b">Khách quanh khu vực tìm là thấy ngay.</text>

      <rect x="670" y="440" width="280" height="150" rx="12" fill="#ffffff" opacity="0.9" />
      <text x="690" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="${meta.colorText}">03. Đo Lường Khách Hàng</text>
      <text x="690" y="500" font-family="sans-serif" font-size="12" fill="#64748b">Tự động báo đơn về Zalo &amp; Telegram.</text>
    </svg>
  `;

  const encodedSvg = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;

  return {
    businessName: name,
    industry: ind,
    style: input.style,
    styleMeta: meta,
    svgMockupDataUrl: encodedSvg,
    disclaimer: 'Bản thiết kế định hướng miễn phí — chưa phải website hoàn thiện.'
  };
};
