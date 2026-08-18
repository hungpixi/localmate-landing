/**
 * LocalMate Canonical Analytics & Attribution Tracker
 * Supported Events: page_view, service_view, article_view, pricing_view, cta_click, phone_click, zalo_click, messenger_click, form_start, generate_lead, lead_created
 */

// Interface for UTM Parameters & Click Attribution
export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  gbraid?: string;
  wbraid?: string;
  referrer?: string;
  landing_page?: string;
  first_seen?: string;
}

const STORAGE_KEY = 'localmate_attribution';

// 1. Capture and store UTMs on first load
export const initAttribution = () => {
  if (typeof window === 'undefined') return;

  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    const urlParams = new URLSearchParams(window.location.search);

    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmTerm = urlParams.get('utm_term');
    const utmContent = urlParams.get('utm_content');
    const gclid = urlParams.get('gclid');
    const fbclid = urlParams.get('fbclid');
    const gbraid = urlParams.get('gbraid');
    const wbraid = urlParams.get('wbraid');

    if (!existing || utmSource || gclid || fbclid) {
      const attribution: AttributionData = {
        utm_source: utmSource || urlParams.get('source') || (document.referrer.includes('google') ? 'google' : document.referrer.includes('facebook') ? 'facebook' : 'direct'),
        utm_medium: utmMedium || (gclid ? 'cpc' : fbclid ? 'social_ads' : 'organic'),
        utm_campaign: utmCampaign || undefined,
        utm_term: utmTerm || undefined,
        utm_content: utmContent || undefined,
        gclid: gclid || undefined,
        fbclid: fbclid || undefined,
        gbraid: gbraid || undefined,
        wbraid: wbraid || undefined,
        referrer: document.referrer || 'direct',
        landing_page: window.location.pathname,
        first_seen: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    }
  } catch (err) {
    console.debug('Attribution storage error:', err);
  }
};

// 2. Retrieve attribution payload for lead submission
export const getAttribution = (): AttributionData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { referrer: 'direct', landing_page: typeof window !== 'undefined' ? window.location.pathname : '/' };
  } catch {
    return { referrer: 'direct', landing_page: typeof window !== 'undefined' ? window.location.pathname : '/' };
  }
};

// 3. Dispatch GA4 / GTM / Meta Pixel / DataLayer event
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    ...params,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...getAttribution()
  };

  // Push to GTM dataLayer if present
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push(eventPayload);
  }

  // Push to gtag if present
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, eventPayload);
  }

  // Push to Meta Pixel if present
  if (typeof (window as any).fbq === 'function') {
    if (eventName === 'lead_created' || eventName === 'generate_lead') {
      (window as any).fbq('track', 'Lead', {
        content_name: params.service_interest || 'LocalMate Service',
        status: 'completed'
      });
    } else if (eventName === 'page_view') {
      (window as any).fbq('track', 'PageView');
    } else {
      (window as any).fbq('trackCustom', eventName, eventPayload);
    }
  }

  console.debug(`[Analytics Track] ${eventName}:`, eventPayload);
};

// Canonical Event Helpers
export const trackPageView = (path: string, title?: string) => {
  trackEvent('page_view', { page_location: path, page_title: title || document.title });
};

export const trackServiceView = (serviceSlug: string, serviceName: string) => {
  trackEvent('service_view', { service_slug: serviceSlug, service_name: serviceName });
};

export const trackArticleView = (articleSlug: string, articleTitle: string) => {
  trackEvent('article_view', { article_slug: articleSlug, article_title: articleTitle });
};

export const trackPricingView = (tier?: string) => {
  trackEvent('pricing_view', { tier: tier || 'all' });
};

export const trackCTAClick = (ctaLabel: string, position: string, targetService?: string) => {
  trackEvent('cta_click', { cta_label: ctaLabel, cta_position: position, target_service: targetService });
};

export const trackPhoneClick = (position: string = 'header') => {
  trackEvent('phone_click', { click_position: position });
};

export const trackZaloClick = (position: string = 'floating_bar') => {
  trackEvent('zalo_click', { click_position: position });
};

export const trackMessengerClick = (position: string = 'floating_bar') => {
  trackEvent('messenger_click', { click_position: position });
};

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', { form_name: formName });
};

export const trackLeadCreated = (leadData: {
  lead_name?: string;
  lead_phone?: string;
  service_interest?: string;
  page_source?: string;
}) => {
  // Push both lead_created and standard GA4 generate_lead for 100% Ads conversion alignment
  trackEvent('generate_lead', {
    ...leadData,
    attribution: getAttribution()
  });
  trackEvent('lead_created', {
    ...leadData,
    attribution: getAttribution()
  });
};

