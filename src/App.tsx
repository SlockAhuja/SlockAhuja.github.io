import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Research } from './sections/Research';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
