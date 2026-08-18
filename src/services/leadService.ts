import { getAttribution, trackLeadCreated } from '../analytics/tracker';

export interface LeadSubmissionPayload {
  name: string;
  phone: string;
  businessName?: string;
  serviceInterest?: string;
  message?: string;
  sourcePage?: string;
  facebookUrl?: string;
}

// Google Apps Script Web App Webhook for direct Google Sheets synchronization
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxH5cdJvXwsQZ0wvIfY5SW1MU_JwYdPQz0izBPiOezapBIZnlu1WmwEXTItIA1mKnwg/exec';

export const submitLead = async (payload: LeadSubmissionPayload): Promise<{ success: boolean; leadId: string }> => {
  const leadId = 'LM-' + Date.now();
  const createdAt = new Date().toISOString();
  const attribution = getAttribution();

  const formattedPayload = {
    id: leadId,
    createdAt: createdAt,
    fullName: payload.name.trim(),
    phone: payload.phone.trim(),
    businessName: payload.businessName?.trim() || 'Chưa nhập',
    cityCountry: 'Việt Nam',
    businessCategory: payload.businessName?.trim() || 'Chưa phân loại',
    priorityGoal: 'Tư vấn & Nhận Web Demo 0đ',
    packageInterest: payload.serviceInterest || 'Tư vấn giải pháp Website & Marketing',
    status: 'new',
    source: payload.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '/'),
    utmSource: attribution.utm_source || '',
    utmMedium: attribution.utm_medium || '',
    utmCampaign: attribution.utm_campaign || '',
    utmTerm: attribution.utm_term || '',
    utmContent: attribution.utm_content || '',
    gclid: attribution.gclid || '',
    referrer: attribution.referrer || (typeof document !== 'undefined' ? document.referrer : ''),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    note: payload.message?.trim() || (payload.facebookUrl?.trim() ? `Link Fanpage: ${payload.facebookUrl.trim()}` : 'Khách đăng ký qua Website'),
    sheetSynced: true
  };

  try {
    // 1. Post to Google Sheets via Apps Script Webhook (no-cors for browser cross-origin)
    if (GOOGLE_APPS_SCRIPT_URL) {
      fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedPayload)
      }).catch((err) => {
        console.debug('Google Sheets sync warning:', err);
      });
    }

    // 2. Dispatch Conversion Event to GA4, GTM, Meta Pixel
    trackLeadCreated({
      lead_name: payload.name,
      lead_phone: payload.phone,
      service_interest: payload.serviceInterest,
      page_source: payload.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '/')
    });

    return { success: true, leadId };
  } catch (error) {
    console.error('Lead Submission Error:', error);
    // Still trigger tracking even if sheet webhook has a network glitch
    trackLeadCreated({
      lead_name: payload.name,
      lead_phone: payload.phone,
      service_interest: payload.serviceInterest,
      page_source: payload.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '/')
    });
    return { success: true, leadId };
  }
};
