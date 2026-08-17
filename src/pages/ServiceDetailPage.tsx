import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getServiceBySlug, getAllServices, ServiceEntity } from '../data/servicesData';
import { getCaseStudyBySlug } from '../data/caseStudiesData';
import { getArticleBySlug, ArticleEntity } from '../data/articlesData';
import { useRouter, Link } from '../components/layout/Router';
import {
  Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck,
  Clock, HelpCircle, FileText, Check, Phone, MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';

interface ServiceDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1 style={{ fontSize: '2rem', color: 'var(--color-text)', fontWeight: 800 }}>
            Dịch vụ không tồn tại hoặc đang được cập nhật
          </h1>
          <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem 0' }}>
            Vui lòng quay lại trang danh mục dịch vụ để khám phá các giải pháp khác của LocalMate.
          </p>
          <Button variant="primary" onClick={() => navigate('/dich-vu')}>
            Xem tất cả dịch vụ
          </Button>
        </Container>
      </div>
    );
  }

  const proofCaseStudy = service.proofCaseStudySlug ? getCaseStudyBySlug(service.proofCaseStudySlug) : undefined;
  const relatedServices = service.relatedServiceSlugs
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((s): s is ServiceEntity => Boolean(s));
  const relatedArticles = service.relatedArticleSlugs
    .map((aSlug) => getArticleBySlug(aSlug))
    .filter((a): a is ArticleEntity => Boolean(a));

  const handleCTA = () => {
    if (onOpenConsultForm) {
      onOpenConsultForm(service.name);
    } else {
      navigate('/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      {/* SEO & Structured Data */}
      <SEOHead
        title={`${service.name} | LocalMate`}
        description={service.description}
        canonicalPath={`/dich-vu/${service.slug}`}
        breadcrumbs={[
          { name: 'Dịch vụ', url: '/dich-vu' },
          { name: service.shortName, url: `/dich-vu/${service.slug}` }
        ]}
        schemaType="Service"
        schemaData={{
          name: service.name,
          serviceType: service.category,
          provider: {
            '@type': 'ProfessionalService',
            name: 'LocalMate',
            url: 'https://localmate.vn'
          },
          offers: {
            '@type': 'Offer',
            price: service.startingPrice.replace(/[^0-9]/g, '') || '299000',
            priceCurrency: 'VND'
          },
          description: service.description
        }}
      />

      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Dịch vụ', url: '/dich-vu' },
            { name: service.shortName, url: `/dich-vu/${service.slug}` }
          ]}
        />

        {/* 1. Hero Section (Clear Outcome, Price & CTA) */}
        <div
          style={{
            backgroundColor: '#f8fbfa',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            {service.badge && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '1rem'
                }}
              >
                <Sparkles size={14} color="var(--color-primary)" /> {service.badge}
              </span>
            )}

            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.4rem)',
                color: 'var(--color-text)',
                fontWeight: 800,
                lineHeight: 1.25,
                marginBottom: '1rem'
              }}
            >
              {service.name}
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {service.outcome}
            </p>

            {/* Price & Turnaround Badge */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '2rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block', fontWeight: 600 }}>Chi phí bắt đầu</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>{service.startingPrice}</span>
              </div>
              <div style={{ width: 1, height: 36, backgroundColor: 'var(--color-border)' }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block', fontWeight: 600 }}>Thời gian hoàn thành</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)' }}>{service.sla}</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <Button variant="primary" size="lg" onClick={handleCTA} style={{ fontWeight: 700 }}>
                {service.primaryCTA}
              </Button>
              <a
                href={CONTACT_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--color-primary-soft)',
                  border: '1px solid var(--color-primary-border)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--color-primary-dark)',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={16} /> Chat Zalo Tư Vấn
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={service.heroAsset}
              alt={service.name}
              style={{
                maxWidth: '100%',
                maxHeight: '340px',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)'
              }}
            />
          </div>
        </div>

        {/* 2. Problem / Symptoms & Who This Is For */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {/* Who This Is For */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <CheckCircle2 size={22} color="var(--color-primary)" /> Phù hợp nhất với:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.suitableFor.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-text)', lineHeight: 1.55 }}>
                  <Check size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It Is NOT For */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#c62828', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <XCircle size={22} color="#c62828" /> Chưa cần thiết nếu:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.notSuitableFor.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  <XCircle size={16} color="#c62828" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. What Customer Receives (Deliverables) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              KẾT QUẢ BÀN GIAO THỰC TẾ
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.35rem' }}>
              Bạn Sẽ Nhận Được Những Gì Khi Nghiệm Thu?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              Mọi hạng mục công việc đều được kiểm tra kỹ lưỡng và bàn giao 100% tài khoản chính chủ cho bạn.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Check size={15} color="var(--color-primary-dark)" />
                </div>
                <span style={{ fontSize: '0.925rem', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 5-Step Process & Timeline */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              QUY TRÌNH THỰC HIỆN
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.35rem' }}>
              5 Bước Làm Việc Minh Bạch &amp; Nhanh Gọn
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {service.process.map((step) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary-dark)' }}>
                  {step.step}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-text)', margin: 0 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. What Customer Needs To Prepare */}
        <div
          style={{
            backgroundColor: '#f8fbfa',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.5rem',
            marginBottom: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
              Bạn cần chuẩn bị những gì trước khi bắt đầu?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {service.requirements.map((req, idx) => (
                <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-orange-dark)', fontWeight: 800 }}>•</span> {req}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button variant="primary" size="md" onClick={handleCTA} style={{ fontWeight: 700 }}>
              Gửi thông tin cho LocalMate
            </Button>
          </div>
        </div>

        {/* 6. Proof & Case Study Highlight */}
        {proofCaseStudy && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '3.5rem'
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
              DỰ ÁN THỰC TẾ ĐÃ LÀM
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              {proofCaseStudy.clientDisplayName}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {service.proofHighlight || proofCaseStudy.resultsSummary}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {proofCaseStudy.evidence.map((ev, idx) => (
                <div key={idx} style={{ backgroundColor: '#f8fbfa', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-orange-dark)' }}>{ev.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{ev.metric}</div>
                </div>
              ))}
            </div>

            <Link
              to={`/du-an/${proofCaseStudy.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)',
                textDecoration: 'none'
              }}
            >
              <span>Xem chi tiết câu chuyện dự án này</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* 7. FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div style={{ marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-text)', textAlign: 'center', marginBottom: '2rem' }}>
              Giải Đáp Thắc Mắc Về {service.shortName}
            </h3>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f8fbfa',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HelpCircle size={18} color="var(--color-primary)" /> {faq.question}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0, paddingLeft: '1.6rem' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Related Knowledge Articles */}
        {relatedArticles.length > 0 && (
          <div style={{ marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Bài Viết Hướng Dẫn Liên Quan
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  to={`/kien-thuc/${art.slug}`}
                  style={{
                    backgroundColor: '#f8fbfa',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.25rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>{art.category}</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.35rem', lineHeight: 1.4 }}>
                      {art.title}
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    Đọc hướng dẫn <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 9. Final CTA Box */}
        <div
          style={{
            backgroundColor: '#083B4C',
            color: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Bắt Đầu Với Dịch Vụ {service.shortName} Cùng LocalMate
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Bàn giao nghiệm thu thực tế rồi mới thanh toán. 100% tài khoản chính chủ bàn giao cho bạn.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={handleCTA} style={{ fontWeight: 700 }}>
              {service.primaryCTA}
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.75rem 1.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 'var(--radius-full)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.925rem',
                textDecoration: 'none'
              }}
            >
              <Phone size={16} /> Gọi 0834.422.439
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
