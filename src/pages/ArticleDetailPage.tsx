import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getArticleBySlug, getAllArticles, ArticleEntity } from '../data/articlesData';
import { getServiceBySlug } from '../data/servicesData';
import { useRouter, Link } from '../components/layout/Router';
import {
  Clock, Calendar, User, ArrowRight, HelpCircle, CheckCircle2,
  AlertTriangle, Lightbulb, Info, BookOpen
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  onOpenConsultForm?: (serviceName?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onOpenConsultForm }) => {
  const { navigate } = useRouter();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '5rem 0', textAlign: 'center' }}>
        <Container size="md">
          <h1 style={{ fontSize: '2rem', color: 'var(--color-text)', fontWeight: 800 }}>
            Bài viết không tồn tại hoặc đã được cập nhật đường dẫn
          </h1>
          <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem 0' }}>
            Vui lòng quay lại chuyên mục Kiến thức để khám phá các bài viết hướng dẫn khác.
          </p>
          <Button variant="primary" onClick={() => navigate('/kien-thuc')}>
            Về chuyên mục Kiến Thức
          </Button>
        </Container>
      </div>
    );
  }

  const targetService = article.cta?.targetServiceSlug ? getServiceBySlug(article.cta.targetServiceSlug) : undefined;
  const relatedArticles = article.relatedArticleSlugs
    .map((aSlug) => getArticleBySlug(aSlug))
    .filter(Boolean) as ArticleEntity[];

  const handleCTAClick = () => {
    if (onOpenConsultForm && targetService) {
      onOpenConsultForm(targetService.name);
    } else {
      navigate(targetService ? `/dich-vu/${targetService.slug}` : '/lien-he');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem 0 5rem 0' }}>
      {/* SEO & Structured Data */}
      <SEOHead
        title={`${article.title} | LocalMate`}
        description={article.summary}
        canonicalPath={`/kien-thuc/${article.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Kiến thức', url: '/kien-thuc' },
          { name: article.category, url: '/kien-thuc' },
          { name: article.title, url: `/kien-thuc/${article.slug}` }
        ]}
        schemaType="Article"
        schemaData={{
          headline: article.title,
          description: article.summary,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          author: {
            '@type': 'Person',
            name: article.author.name,
            jobTitle: article.author.role
          },
          publisher: {
            '@type': 'Organization',
            name: 'LocalMate',
            logo: {
              '@type': 'ImageObject',
              url: 'https://localmate.vn/logo.png'
            }
          }
        }}
      />

      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Kiến thức', url: '/kien-thuc' },
            { name: article.category, url: '/kien-thuc' },
            { name: article.title, url: `/kien-thuc/${article.slug}` }
          ]}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Main Article Content Column */}
          <article style={{ maxWidth: '800px' }}>
            {/* Category & Metadata */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-dark)',
                  backgroundColor: 'var(--color-primary-soft)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {article.category}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={14} /> {article.readTime}
              </span>
              <span style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={14} /> Cập nhật: {article.updatedAt}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
                color: 'var(--color-text)',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}
            >
              {article.title}
            </h1>

            {/* Author Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.85rem 1.25rem',
                backgroundColor: '#f8fbfa',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--color-primary-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
                <User size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text)' }}>{article.author.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{article.author.role}</div>
              </div>
            </div>

            {/* Summary Callout */}
            <div
              style={{
                backgroundColor: '#f8fbfa',
                borderLeft: '4px solid var(--color-primary)',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                fontSize: '1.025rem',
                color: 'var(--color-text)',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '2rem'
              }}
            >
              {article.summary}
            </div>

            {/* Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2.5rem'
                }}
              >
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <BookOpen size={18} color="var(--color-primary)" /> Mục Lục Hướng Dẫn
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {article.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-primary-dark)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          lineHeight: 1.5
                        }}
                      >
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.75, color: '#334155', fontSize: '1.025rem' }}>
              {article.contentSections.map((sec, idx) => (
                <section key={idx} id={sec.headingId}>
                  {sec.heading && (
                    <h2
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: 'var(--color-text)',
                        marginBottom: '0.85rem',
                        marginTop: '0.5rem',
                        lineHeight: 1.35
                      }}
                    >
                      {sec.heading}
                    </h2>
                  )}

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} style={{ margin: '0 0 1rem 0' }}>
                      {p}
                    </p>
                  ))}

                  {sec.listItems && (
                    <ul style={{ paddingLeft: '1.25rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {sec.listItems.map((li, lIdx) => (
                        <li key={lIdx}>{li}</li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div
                      style={{
                        backgroundColor: sec.callout.type === 'warning' ? '#fff7ed' : '#f0fdf4',
                        border: '1px solid',
                        borderColor: sec.callout.type === 'warning' ? '#fdba74' : '#86efac',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.25rem',
                        margin: '1.25rem 0'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.9rem', color: sec.callout.type === 'warning' ? '#c2410c' : '#15803d', marginBottom: '0.35rem' }}>
                        {sec.callout.type === 'warning' ? <AlertTriangle size={18} /> : <Lightbulb size={18} />}
                        <span>{sec.callout.title}</span>
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text)', lineHeight: 1.55 }}>
                        {sec.callout.text}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Contextual FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
                  Câu Hỏi Thường Gặp
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {article.faqs.map((faq, idx) => (
                    <div key={idx} style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <HelpCircle size={16} color="var(--color-primary)" /> {faq.question}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.4rem' }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contextual CTA Box */}
            {article.cta && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '2px solid var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  marginTop: '3.5rem',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  {article.cta.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  {article.cta.subtitle}
                </p>
                <Button variant="primary" size="lg" onClick={handleCTAClick} style={{ fontWeight: 700 }}>
                  {article.cta.buttonText}
                </Button>
              </div>
            )}
          </article>

          {/* Right Sticky Sidebar (Related Service & Articles) */}
          <aside style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Target Service Card */}
            {targetService && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                  DỊCH VỤ LIÊN QUAN
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.65rem', marginBottom: '0.5rem' }}>
                  {targetService.name}
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                  {targetService.outcome}
                </p>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-orange-dark)', marginBottom: '1.25rem' }}>
                  {targetService.startingPrice}
                </div>
                <Link
                  to={`/dich-vu/${targetService.slug}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.65rem 1rem',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  Xem chi tiết dịch vụ
                </Link>
              </div>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div
                style={{
                  backgroundColor: '#f8fbfa',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
                  Bài viết cùng chủ đề
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/kien-thuc/${rel.slug}`}
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px dashed var(--color-border)'
                      }}
                    >
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.4 }}>
                        {rel.title}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {rel.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </div>
  );
};
