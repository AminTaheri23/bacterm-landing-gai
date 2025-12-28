import React, { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import HeroSection from './components/sections/HeroSection';
import IntroductionSection from './components/sections/IntroductionSection';
import StructureSection from './components/sections/StructureSection';
import MethodsSection from './components/sections/MethodsSection';
import ResultsSection from './components/sections/ResultsSection';
import ImpactSection from './components/sections/ImpactSection';
import AuthorsSection from './components/sections/AuthorsSection';
import { useScroll } from './hooks/useScroll';

const App: React.FC = () => {
  const scrolled = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://bactermfinder.netlify.app/" />
      </Helmet>
      <div className="min-h-screen bg-[#F9F9F9] text-stone-800 selection:bg-science-teal selection:text-white">
      <Navigation 
        scrolled={scrolled} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        onScrollToSection={scrollToSection}
      />
      
      <HeroSection onScrollToSection={scrollToSection} />

      <main>
        <IntroductionSection />
        <StructureSection />
        <MethodsSection />
        <ResultsSection />
        <ImpactSection />
        <AuthorsSection />
      </main>

      <Footer />
    </div>
    </>
  );
};

export default App;