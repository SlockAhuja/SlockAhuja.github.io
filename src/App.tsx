import { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ResearchIdentity } from './components/ResearchIdentity';
import { MajorProjects } from './components/MajorProjects';
import { PublicationsSection } from './components/PublicationsSection';
import { PatentsSection } from './components/PatentsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectTimeline } from './components/ProjectTimeline';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AcademicCVModal } from './components/AcademicCVModal';

export function App() {
  // First-class default theme: LIGHT
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  // Sync theme with HTML root class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-[#fafaf9] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200 antialiased font-sans selection:bg-blue-600 selection:text-white">
      {/* Background subtle network particle canvas */}
      <BackgroundCanvas isDark={isDark} />

      {/* Sticky Navigation Header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* 2. About Me Section & 4 Approach Principles */}
        <About />

        {/* 3. Research Interests (8 Core Domains) */}
        <ResearchIdentity />

        {/* 4. Selected Work (Research, AI, 6G NTN, Quantum, VLSI, IoT, Hardware) */}
        <MajorProjects />

        {/* 5. Publications & Research Papers (Citation List) */}
        <PublicationsSection />

        {/* 6. Patent Applications */}
        <PatentsSection />

        {/* 7. Achievements & Leadership */}
        <AchievementsSection />

        {/* 8. Skills Matrix & Engineering Environment */}
        <SkillsSection />

        {/* 9. Academic & Technical Journey Timeline */}
        <ProjectTimeline />

        {/* 10. Research Focus & Long-Term Directions */}
        <CurrentlyExploring />

        {/* 11. Contact & Academic Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Academic CV Dossier Modal */}
      <AcademicCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

export default App;
