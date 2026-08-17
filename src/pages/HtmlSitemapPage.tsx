import React from 'react';
import { Container } from '../components/ui/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SEOHead } from '../components/seo/SEOHead';
import { getAllServices } from '../data/servicesData';
import { getAllArticles } from '../data/articlesData';
import { getAllCaseStudies } from '../data/caseStudiesData';
import { Link } from '../components/layout/Router';
import { Map } from 'lucide-react';

export const HtmlSitemapPage: React.FC = () => {
  const services = getAllServices();
  const articles = getAllArticles();
  const caseStudies = getAllCaseStudies();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2.5rem 0 5rem 0' }}>
      <SEOHead
        title="Sơ Đồ Website (HTML Sitemap) | LocalMate"
        description="Toàn bộ cấu trúc liên kết và danh mục dịch vụ, bài viết hướng dẫn, dự án thực tế trên LocalMate.vn."
        canonicalPath="/sitemap"
        breadcrumbs={[
          { name: 'Sơ đồ website', url: '/sitemap' }
        ]}
      />

      <Container size="lg">
        <Breadcrumbs
          items={[
            { name: 'Sơ đồ website', url: '/sitemap' }
          ]}
        />

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)', backgroundColor: 'var(--color-primary-soft)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Map size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> SƠ ĐỒ WEBSITE
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 800, color: 'var(--color-text)', marginTop: '0.75rem' }}>
            Toàn Bộ Cấu Trúc Website LocalMate.vn
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {/* Main Pages */}
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              1. Các Trang Chính
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <li><Link to="/" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Trang chủ (/)</Link></li>
              <li><Link to="/gioi-thieu" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Giới thiệu LocalMate (/gioi-thieu)</Link></li>
              <li><Link to="/dich-vu" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Danh mục dịch vụ (/dich-vu)</Link></li>
              <li><Link to="/bang-gia" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Bảng giá niêm yết (/bang-gia)</Link></li>
              <li><Link to="/du-an" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Dự án thực tế (/du-an)</Link></li>
              <li><Link to="/kien-thuc" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Hướng dẫn &amp; Kiến thức (/kien-thuc)</Link></li>
              <li><Link to="/landing-490k" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Gói Website 1 trang 490k (/landing-490k)</Link></li>
              <li><Link to="/lien-he" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>• Liên hệ tư vấn (/lien-he)</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              2. Dịch Vụ Cốt Lõi
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              {services.map((srv) => (
                <li key={srv.id}>
                  <Link to={`/dich-vu/${srv.slug}`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                    • {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge Articles */}
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              3. Bài Viết Hướng Dẫn
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              {articles.map((art) => (
                <li key={art.id}>
                  <Link to={`/kien-thuc/${art.slug}`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                    • {art.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies & Legal */}
          <div style={{ backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              4. Dự Án &amp; Pháp Lý
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              {caseStudies.map((cs) => (
                <li key={cs.id}>
                  <Link to={`/du-an/${cs.slug}`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                    • Dự án: {cs.clientDisplayName}
                  </Link>
                </li>
              ))}
              <li style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                <Link to="/chinh-sach-bao-mat" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                  • Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link to="/dieu-khoan" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                  • Điều khoản dịch vụ &amp; hợp đồng
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-dich-vu" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                  • Hỗ trợ kỹ thuật sau bàn giao
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
