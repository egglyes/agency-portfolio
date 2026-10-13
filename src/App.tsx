import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './data/projects';
import { CaseStudyData } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudyData | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<{ title: string; requestId: number } | null>(null);

  // Keep navigation in sync with the section actually in view.
  useEffect(() => {
    const updateSection = () => {
      const sections = ['hero', 'work', 'about', 'services', 'contact']
        .map(id => document.getElementById(id))
        .filter((section): section is HTMLElement => !!section);
      const threshold = window.innerHeight * 0.35;
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= threshold);
      setActiveSection(current?.id ?? 'hero');
    };
    updateSection();
    window.addEventListener('scroll', updateSection, { passive: true });
    window.addEventListener('resize', updateSection);
    return () => {
      window.removeEventListener('scroll', updateSection);
      window.removeEventListener('resize', updateSection);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const behavior = 'auto';
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior });
      }
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    setSelectedServiceForContact(previous => ({ title: serviceTitle, requestId: (previous?.requestId ?? 0) + 1 }));
    handleNavigate('contact');
  };

  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0000FF] selection:text-white">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* 2. Main Content Sections */}
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <Hero 
          onExploreWork={() => handleNavigate('work')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* Selected Work Section */}
        <SelectedWork 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About & Philosophy Section */}
        <AboutSection />

        {/* Services & Commercial Value Section */}
        <ServicesSection 
          onInquireService={handleInquireService}
        />

        {/* Contact & Enquiry Section */}
        <ContactSection 
          initialService={selectedServiceForContact?.title}
          inquiryRequest={selectedServiceForContact?.requestId}
        />
      </main>

      {/* 3. Footer */}
      <Footer 
        onScrollTop={() => handleNavigate('hero')}
      />

      {/* 4. Case Study Detail Modal Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={closeProject}
        onSelectNext={(nextProj) => setSelectedProject(nextProj)}
        allProjects={PROJECTS_DATA}
      />
    </div>
  );
};

export default App;
