import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { PainPointsSection } from './components/sections/PainPointsSection';
import { SolutionJourneySection } from './components/sections/SolutionJourneySection';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { StarterPackageSection } from './components/sections/StarterPackageSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ContentPackageSection } from './components/sections/ContentPackageSection';
import { SpecializedServicesSection } from './components/sections/SpecializedServicesSection';
import { TrustSection } from './components/sections/TrustSection';
import { DemoShowcaseSection } from './components/sections/DemoShowcaseSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

export const App: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#register-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="localmate-app">
      <Header onOpenDemoForm={scrollToForm} />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionJourneySection />
        <BeforeAfterSection />
        <StarterPackageSection />
        <ProcessSection />
        <ContentPackageSection />
        <SpecializedServicesSection />
        <TrustSection />
        <DemoShowcaseSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
