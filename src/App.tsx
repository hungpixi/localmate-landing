import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './components/layout/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileFloatingCTA } from './components/layout/MobileFloatingCTA';
import { LeadModal } from './components/conversion/LeadModal';
import { initAttribution, trackPageView } from './analytics/tracker';

// Core Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { HtmlSitemapPage } from './pages/HtmlSitemapPage';
import { AdminPricingPage } from './pages/AdminPricingPage';
import { AdvisorPage } from './pages/AdvisorPage';
import { Landing490kPage } from './pages/Landing490kPage';

// Modals
import { AdvisorModal } from './components/advisor/AdvisorModal';
import { ConceptModal } from './components/concept/ConceptModal';

const MainContent: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [isConceptModalOpen, setIsConceptModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Tư vấn giải pháp Website & Marketing');

  // Initialize attribution and track page view on path change
  useEffect(() => {
    initAttribution();
    trackPageView(currentPath);
  }, [currentPath]);

  const handleOpenLeadForm = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceName(serviceName);
    }
    setIsLeadModalOpen(true);
  };

  const renderPage = () => {
    // 1. Root Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    // 2. Standalone Landing 490k
    if (currentPath.startsWith('/landing-490k') || currentPath.startsWith('/goi-490k')) {
      return <Landing490kPage />;
    }

    // 3. Admin & Advisor
    if (currentPath.startsWith('/advisor')) {
      return <AdvisorPage />;
    }
    if (currentPath.startsWith('/admin/pricing')) {
      return <AdminPricingPage />;
    }

    // 4. Services Hierarchy
    if (currentPath === '/dich-vu' || currentPath === '/dich-vu/') {
      return <ServicesPage />;
    }
    if (currentPath.startsWith('/dich-vu/')) {
      const slug = currentPath.replace('/dich-vu/', '').replace(/\/$/, '');
      return <ServiceDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 5. Knowledge Hub Hierarchy
    if (currentPath === '/kien-thuc' || currentPath === '/kien-thuc/') {
      return <KnowledgePage />;
    }
    if (currentPath.startsWith('/kien-thuc/')) {
      const slug = currentPath.replace('/kien-thuc/', '').replace(/\/$/, '');
      return <ArticleDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 6. Case Studies / Projects Hierarchy
    if (currentPath === '/du-an' || currentPath === '/du-an/') {
      return <ProjectsPage />;
    }
    if (currentPath.startsWith('/du-an/')) {
      const slug = currentPath.replace('/du-an/', '').replace(/\/$/, '');
      return <CaseStudyDetailPage slug={slug} onOpenConsultForm={handleOpenLeadForm} />;
    }

    // 7. Pricing
    if (currentPath.startsWith('/bang-gia')) {
      return <PricingPage />;
    }

    // 8. Industry Solutions
    if (currentPath.startsWith('/giai-phap')) {
      return <SolutionsPage />;
    }

    // 9. About & Contact
    if (currentPath.startsWith('/gioi-thieu')) {
      return <AboutPage />;
    }
    if (currentPath.startsWith('/lien-he')) {
      return <ContactPage />;
    }

    // 10. Legal & Compliance Policies
    if (currentPath.startsWith('/chinh-sach-bao-mat')) {
      return <LegalPage policyKey="chinh-sach-bao-mat" />;
    }
    if (currentPath.startsWith('/dieu-khoan')) {
      return <LegalPage policyKey="dieu-khoan" />;
    }
    if (currentPath.startsWith('/chinh-sach-dich-vu')) {
      return <LegalPage policyKey="chinh-sach-dich-vu" />;
    }

    // 11. HTML Sitemap
    if (currentPath.startsWith('/sitemap')) {
      return <HtmlSitemapPage />;
    }

    // Fallback to HomePage
    return <HomePage />;
  };

  return (
    <div className="localmate-app">
      <Header onOpenDemoForm={() => handleOpenLeadForm('Tư vấn Web Demo 0đ')} />
      <main id="main-content">{renderPage()}</main>
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <MobileFloatingCTA onOpenConsultForm={() => handleOpenLeadForm('Tư vấn Web Demo 0đ')} />

      {/* Global Modals */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultServiceName={selectedServiceName}
      />
      <AdvisorModal isOpen={isAdvisorModalOpen} onClose={() => setIsAdvisorModalOpen(false)} />
      <ConceptModal isOpen={isConceptModalOpen} onClose={() => setIsConceptModalOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <MainContent />
    </RouterProvider>
  );
};

export default App;
