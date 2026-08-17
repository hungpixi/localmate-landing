import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  schemaType?: 'Organization' | 'ProfessionalService' | 'Service' | 'Article' | 'FAQPage';
  schemaData?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogImage = 'https://localmate.vn/logo.png',
  ogType = 'website',
  breadcrumbs,
  schemaType = 'ProfessionalService',
  schemaData
}) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title.includes('LocalMate') ? title : `${title} | LocalMate`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical URL
    const canonicalUrl = `https://localmate.vn${canonicalPath === '/' ? '' : canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    const updateOrCreateMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    updateOrCreateMeta('property', 'og:title', fullTitle);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    updateOrCreateMeta('property', 'og:image', ogImage);
    updateOrCreateMeta('property', 'og:type', ogType);

    updateOrCreateMeta('name', 'twitter:title', fullTitle);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:image', ogImage);

    // 5. Injected Structured Data (JSON-LD)
    const jsonLdScripts: Record<string, any>[] = [];

    // Base Organization / ProfessionalService
    const baseOrgSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'LocalMate',
      image: 'https://localmate.vn/logo.png',
      url: 'https://localmate.vn',
      telephone: '+84834422439',
      email: 'contact@localmate.vn',
      description: 'Đơn vị thiết kế Website, SEO, Marketing & Phần mềm cho doanh nghiệp nhỏ. Bàn giao rồi mới thanh toán.',
      priceRange: '490.000 - 6.900.000 VNĐ',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'VN'
      }
    };
    jsonLdScripts.push(baseOrgSchema);

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: `https://localmate.vn${b.url}`
        }))
      };
      jsonLdScripts.push(breadcrumbSchema);
    }

    // Contextual Page Schema (Service / Article / FAQ)
    if (schemaData) {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': schemaType,
        ...schemaData
      });
    }

    // Insert or update dynamic script tag in head
    let scriptTag = document.getElementById('dynamic-jsonld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLdScripts);
  }, [title, description, canonicalPath, ogImage, ogType, breadcrumbs, schemaType, schemaData]);

  return null;
};
