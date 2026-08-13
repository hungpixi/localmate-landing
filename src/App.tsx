import React from 'react';
import { RouterProvider, useRouter } from './components/layout/Router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PricingPage } from './pages/PricingPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPricingPage } from './pages/AdminPricingPage';

const MainContent: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  const handleOpenDemoForm = () => {
    navigate('/lien-he');
  };

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath.startsWith('/admin/pricing')) {
      return <AdminPricingPage />;
    }
    if (currentPath.startsWith('/dich-vu')) {
      return <ServicesPage />;
    }
    if (currentPath.startsWith('/giai-phap')) {
      return <SolutionsPage />;
    }
    if (currentPath.startsWith('/du-an')) {
      return <ProjectsPage />;
    }
    if (currentPath.startsWith('/bang-gia')) {
      return <PricingPage />;
    }
    if (currentPath.startsWith('/kien-thuc')) {
      return <KnowledgePage />;
    }
    if (currentPath.startsWith('/gioi-thieu')) {
      return <AboutPage />;
    }
    if (currentPath.startsWith('/lien-he')) {
      return <ContactPage />;
    }

    return <HomePage />;
  };

  return (
    <div className="localmate-app">
      <Header onOpenDemoForm={handleOpenDemoForm} />
      <main>{renderPage()}</main>
      <Footer />
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
