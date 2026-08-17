export type ConceptStyle = 'modern' | 'premium' | 'warm' | 'minimal';

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
    label: 'Hiện đại & rõ ràng',
    colorBg: '#ffffff',
    colorAccent: '#0d7647',
    colorText: '#0f172a',
    fontFamily: 'Inter, sans-serif',
    headerTagline: 'Hiện đại · Tốc độ · Rõ ràng'
  },
  {
    styleKey: 'premium',
    label: 'Sang trọng',
    colorBg: '#0f172a',
    colorAccent: '#f59e0b',
    colorText: '#ffffff',
    fontFamily: 'Outfit, serif',
    headerTagline: 'Đẳng cấp · Tinh tế · Uy tín'
  },
  {
    styleKey: 'warm',
    label: 'Ấm áp & gần gũi',
    colorBg: '#fdfbf7',
    colorAccent: '#ea580c',
    colorText: '#2c1e1a',
    fontFamily: 'Comfortaa, cursive',
    headerTagline: 'Ấm cúng · Thu hút · Dễ nhớ'
  },
  {
    styleKey: 'minimal',
    label: 'Tối giản',
    colorBg: '#f8fafc',
    colorAccent: '#0d7647',
    colorText: '#1e293b',
    fontFamily: 'Roboto, sans-serif',
    headerTagline: 'Gọn gàng · Rõ ràng · Dễ đọc'
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
  const name = input.businessName.trim() || 'Cửa Hàng Của Bạn';
  const ind = input.industry.trim() || 'Dịch vụ';
  const meta = CONCEPT_STYLES.find((s) => s.styleKey === input.style) || CONCEPT_STYLES[0];

  // SVG Web Mockup Screenshot Preview Template
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 640" width="1000" height="640">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${meta.colorBg}" />
          <stop offset="100%" stop-color="${meta.styleKey === 'premium' ? '#142035' : '#f0fdf4'}" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.12" />
        </filter>
      </defs>

      <!-- Browser Window Frame -->
      <rect x="0" y="0" width="1000" height="640" rx="16" fill="#ffffff" filter="url(#shadow)" />
      
      <!-- Top Browser Bar -->
      <rect x="0" y="0" width="1000" height="42" rx="16" fill="#f1f5f9" />
      <circle cx="24" cy="21" r="6" fill="#ef4444" />
      <circle cx="42" cy="21" r="6" fill="#f59e0b" />
      <circle cx="60" cy="21" r="6" fill="#10b981" />
      <rect x="180" y="10" width="640" height="22" rx="6" fill="#ffffff" />
      <text x="500" y="25" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">https://${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.localmate.vn</text>

      <!-- Web Page Content Canvas -->
      <rect x="0" y="42" width="1000" height="598" fill="url(#grad)" />

      <!-- Navbar -->
      <rect x="0" y="42" width="1000" height="60" fill="${meta.styleKey === 'premium' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255,255,255,0.95)'}" />
      <text x="50" y="78" font-family="${meta.fontFamily}" font-size="20" font-weight="bold" fill="${meta.colorAccent}">${name.toUpperCase()}</text>
      <text x="650" y="77" font-family="sans-serif" font-size="13" fill="${meta.colorText}">Trang chủ   Dịch vụ   Bảng giá   Liên hệ</text>
      <rect x="840" y="57" width="110" height="30" rx="6" fill="${meta.colorAccent}" />
      <text x="895" y="77" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Hotline / Zalo</text>

      <!-- Hero Section Container -->
      <rect x="50" y="140" width="480" height="28" rx="14" fill="${meta.colorAccent}" opacity="0.12" />
      <text x="65" y="159" font-family="sans-serif" font-size="12" font-weight="bold" fill="${meta.colorAccent}">✦ MẪU WEBSITE THAM KHẢO CHO ${ind.toUpperCase()}</text>

      <text x="50" y="210" font-family="${meta.fontFamily}" font-size="32" font-weight="800" fill="${meta.colorText}">${name}</text>
      <text x="50" y="248" font-family="${meta.fontFamily}" font-size="22" font-weight="700" fill="${meta.colorAccent}">Dịch Vụ Uy Tín · Giá Rõ Ràng</text>

      <text x="50" y="285" font-family="sans-serif" font-size="14" fill="${meta.colorText}" opacity="0.85">Giao diện xem nhanh trên điện thoại, có sẵn bảng giá và nút bấm gọi Zalo.</text>
      <text x="50" y="308" font-family="sans-serif" font-size="14" fill="${meta.colorText}" opacity="0.85">Tích hợp bản đồ chỉ đường Google Maps và hỗ trợ khách hàng nhanh chóng.</text>

      <!-- Hero CTA Buttons -->
      <rect x="50" y="340" width="180" height="44" rx="8" fill="${meta.colorAccent}" />
      <text x="140" y="367" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">GỌI TƯ VẤN NGAY</text>

      <rect x="245" y="340" width="160" height="44" rx="8" fill="none" stroke="${meta.colorAccent}" stroke-width="2" />
      <text x="325" y="367" font-family="sans-serif" font-size="14" font-weight="bold" fill="${meta.colorAccent}" text-anchor="middle">Xem Bảng Giá</text>

      <!-- Right Visual Mockup Card -->
      <rect x="620" y="130" width="330" height="280" rx="14" fill="#ffffff" filter="url(#shadow)" opacity="0.95" />
      <rect x="640" y="150" width="290" height="150" rx="10" fill="${meta.colorAccent}" opacity="0.1" />
      <circle cx="785" cy="225" r="32" fill="${meta.colorAccent}" />
      <polygon points="778,212 800,225 778,238" fill="#ffffff" />
      <text x="785" y="325" font-family="sans-serif" font-size="14" font-weight="bold" fill="${meta.colorText}" text-anchor="middle">${name}</text>
      <text x="785" y="345" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Website mẫu chuẩn LocalMate</text>

      <!-- Bottom Feature Section Cards -->
      <rect x="50" y="440" width="280" height="150" rx="12" fill="#ffffff" opacity="0.95" />
      <text x="70" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="${meta.colorText}">01. Chuẩn Điện Thoại</text>
      <text x="70" y="500" font-family="sans-serif" font-size="12" fill="#64748b">Mở nhanh trên iPhone &amp; Android.</text>

      <rect x="360" y="440" width="280" height="150" rx="12" fill="#ffffff" opacity="0.95" />
      <text x="380" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="${meta.colorText}">02. Lên Google Maps</text>
      <text x="380" y="500" font-family="sans-serif" font-size="12" fill="#64748b">Khách quanh khu vực tìm là thấy ngay.</text>

      <rect x="670" y="440" width="280" height="150" rx="12" fill="#ffffff" opacity="0.95" />
      <text x="690" y="475" font-family="sans-serif" font-size="15" font-weight="bold" fill="${meta.colorText}">03. Bảng Giá Minh Bạch</text>
      <text x="690" y="500" font-family="sans-serif" font-size="12" fill="#64748b">Khách xem rõ dịch vụ và chi phí.</text>
    </svg>
  `;

  const encodedSvg = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;

  return {
    businessName: name,
    industry: ind,
    style: input.style,
    styleMeta: meta,
    svgMockupDataUrl: encodedSvg,
    disclaimer: 'Bản mẫu tham khảo giao diện — chưa phải website hoàn thiện.'
  };
};
