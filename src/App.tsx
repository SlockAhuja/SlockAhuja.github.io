import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { EngineeringIntersection } from './sections/EngineeringIntersection';
import { FeaturedResearch } from './sections/FeaturedResearch';
import { Research } from './sections/Research';
import { Publications } from './sections/Publications';
import { IEEELeadership } from './sections/IEEELeadership';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { FeaturedProject } from './sections/FeaturedProject';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { TechnologyConstellation } from './sections/TechnologyConstellation';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-[#050B14] min-h-screen text-slate-300 selection:bg-cyan-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringIntersection />
        <FeaturedResearch />
        <Research />
        <Publications />
        <IEEELeadership />
        <Experience />
        <Education />
        <Achievements />
        <FeaturedProject />
        <Projects />
        <Skills />
        <TechnologyConstellation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;