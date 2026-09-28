const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const sectionsDir = path.join(srcDir, 'sections');

// Ensure directories exist
[srcDir, componentsDir, sectionsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// App.tsx
const appTsx = `
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
`;
fs.writeFileSync(path.join(srcDir, 'App.tsx'), appTsx.trim());

// index.css
const indexCss = `
@import "tailwindcss";

@theme {
  --color-navy-900: #0A1128;
  --color-navy-800: #121F45;
  --color-navy-700: #1C2E63;
  --color-navy-950: #050B14;
  
  --color-cyan-400: #00F0FF;
  --color-cyan-500: #00D1FF;
  --color-cyan-900: #004D66;
  
  --color-gold-400: #E5C158;
  
  --color-violet-500: #8B5CF6;
  
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Roboto Mono', monospace;
}

body {
  background-color: var(--color-navy-950, #050B14);
  color: #E2E8F0;
}
`;
fs.writeFileSync(path.join(srcDir, 'index.css'), indexCss.trim());

// components/Navbar.tsx
const navbarTsx = `
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'IEEE', href: '#ieee' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={\`fixed top-0 w-full z-50 transition-all duration-300 \${isScrolled ? 'bg-[#050B14]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white">
            SLOCK<span className="text-cyan-400">AHUJA</span>
          </a>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="/CV.pdf" target="_blank" className="px-4 py-2 rounded border border-cyan-400/50 text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 transition-colors">
              Download CV
            </a>
          </nav>

          <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-[#050B14] border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">
                  {link.name}
                </a>
              ))}
              <a href="/CV.pdf" className="text-cyan-400 font-medium pt-4">Download CV</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
`;
fs.writeFileSync(path.join(componentsDir, 'Navbar.tsx'), navbarTsx.trim());

// components/Footer.tsx
const footerTsx = `
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-[#03060B] py-12 border-t border-white/5 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Slock Ahuja</h3>
            <p className="text-slate-400 text-sm mb-1">ICT Engineering • AI • Communication Systems • Embedded Technology</p>
            <p className="text-slate-500 text-sm">Marwadi University, Rajkot, Gujarat, India</p>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="flex space-x-4 mb-4 justify-center md:justify-end">
              <a href="https://github.com/SlockAhuja" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/slock-ahuja-32839b315" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Slock Ahuja. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
`;
fs.writeFileSync(path.join(componentsDir, 'Footer.tsx'), footerTsx.trim());

// sections/Hero.tsx
const heroTsx = `
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import heroImg from '../assets/hero.png';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050B14]">
      {/* Network Animation Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-cyan-500/20" strokeWidth="1" />
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              SLOCK AHUJA
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-400 font-mono mb-6">
              Information & Communication Technology Engineer
            </h2>
            
            <p className="text-lg text-slate-300 font-medium mb-6 leading-relaxed">
              Researcher • IEEE ComSoc Student Leader • AI & Embedded Systems Enthusiast
            </p>

            <div className="border-l-2 border-cyan-500/50 pl-4 py-2 mb-10">
              <p className="text-slate-400 italic">
                "Building intelligent systems at the intersection of AI, communication technologies, embedded hardware, and next-generation networks."
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#research" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#050B14] font-semibold hover:bg-slate-200 transition-colors">
                Explore My Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent text-white font-medium border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                View Projects
              </a>
              
              <div className="flex items-center gap-4 ml-2">
                <a href="https://www.linkedin.com/in/slock-ahuja-32839b315" target="_blank" rel="noreferrer" className="p-3 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all border border-white/5">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href="https://github.com/SlockAhuja" target="_blank" rel="noreferrer" className="p-3 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all border border-white/5">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Orbital Lines */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Frame */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10 p-2 bg-[#050B14]/50 backdrop-blur-sm">
                 <div className="w-full h-full rounded-full overflow-hidden bg-[#0A1128]">
                   <img src={heroImg} alt="Slock Ahuja" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
              </div>

              {/* Dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
              <div className="absolute bottom-1/4 right-0 translate-x-4 translate-y-4 w-2 h-2 bg-blue-500 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync(path.join(sectionsDir, 'Hero.tsx'), heroTsx.trim());

// sections/About.tsx
const aboutTsx = `
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#03060B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors z-10" />
              <img src={heroImg} alt="Slock Ahuja" className="w-full h-full object-cover" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#050B14] to-transparent z-20">
                 <p className="text-cyan-400 font-mono text-sm">B.Tech ICT Engineering</p>
                 <p className="text-white font-semibold">Marwadi University '28</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Building intelligent systems for the real world.</h3>
            
            <div className="space-y-4 text-slate-400 text-lg">
              <p>
                I am an Information and Communication Technology engineering student at Marwadi University. I specialize in bridging the gap between hardware and software, leveraging artificial intelligence to optimize communication networks and embedded systems.
              </p>
              <p>
                My work focuses on combining software engineering, hardware architecture, communication protocols, and AI models to build robust real-world systems. I am particularly interested in the challenges of next-generation networks and edge intelligence.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Artificial Intelligence', '6G Communication', 'Non-Terrestrial Networks', 'Embedded Systems', 'IoT', 'Computer Vision', 'VLSI', 'Hardware-AI Integration', 'Intelligent Automation'].map(item => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync(path.join(sectionsDir, 'About.tsx'), aboutTsx.trim());

// sections/EngineeringIntersection.tsx
const intersectionTsx = `
import { motion } from 'framer-motion';
import { BrainCircuit, Radio, Cpu, FlaskConical } from 'lucide-react';

export const EngineeringIntersection = () => {
  const domains = [
    {
      num: '01',
      title: 'ARTIFICIAL INTELLIGENCE',
      icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />,
      desc: 'Developing Physics-Informed Neural Networks, Quantum AI models, and computer vision pipelines for complex data processing.'
    },
    {
      num: '02',
      title: 'NEXT-GENERATION COMMUNICATION',
      icon: <Radio className="w-8 h-8 text-blue-400" />,
      desc: 'Researching resource management in 6G and Non-Terrestrial Networks (NTN) using AI-driven optimization.'
    },
    {
      num: '03',
      title: 'EMBEDDED & HARDWARE SYSTEMS',
      icon: <Cpu className="w-8 h-8 text-violet-400" />,
      desc: 'Designing IoT architectures, PCB layouts, and integrating AI inference directly onto edge devices and microcontrollers.'
    },
    {
      num: '04',
      title: 'RESEARCH & INNOVATION',
      icon: <FlaskConical className="w-8 h-8 text-gold-400" />,
      desc: 'Publishing academic findings, presenting at IEEE conferences, and driving student initiatives as an IEEE ComSoc leader.'
    }
  ];

  return (
    <section className="py-24 bg-[#050B14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering at the Intersection</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">My technical foundation spans across four critical domains of modern technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0A1128] border border-white/5 p-8 rounded-xl hover:border-white/20 transition-all relative group"
            >
              <div className="text-5xl font-extrabold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">
                {d.num}
              </div>
              <div className="mb-6">{d.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync(path.join(sectionsDir, 'EngineeringIntersection.tsx'), intersectionTsx.trim());

// sections/FeaturedResearch.tsx
const featResearchTsx = `
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedResearch = () => {
  return (
    <section className="py-24 bg-[#03060B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-8">Featured Research</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0A1128] to-[#050B14] rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 w-max border border-blue-500/20">
                IEEE ACROSET 2026
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                This research addresses the complex challenge of resource allocation in 6G architectures integrating Low Earth Orbit (LEO) satellites and ground networks. By leveraging advanced machine learning, we optimize spectrum utilization and minimize latency for ground users, establishing a framework for global connectivity.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                <button className="inline-flex items-center px-5 py-2.5 bg-white text-navy-900 text-sm font-bold rounded hover:bg-slate-200 transition-colors">
                  View Research
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
                <button className="inline-flex items-center px-5 py-2.5 bg-transparent border border-white/20 text-white text-sm font-bold rounded hover:bg-white/5 transition-colors">
                  Interactive Demo
                </button>
              </div>
            </div>
            
            <div className="relative min-h-[300px] lg:min-h-full bg-[#050B14] border-l border-white/5 flex items-center justify-center overflow-hidden p-8">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050B14] to-[#050B14]" />
               
               {/* Technical Visualization */}
               <div className="relative w-full max-w-sm flex flex-col items-center gap-6">
                 {/* LEO Satellite layer */}
                 <div className="flex justify-center gap-12 w-full">
                   <div className="w-12 h-6 bg-slate-800 rounded border border-slate-600 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-bounce" style={{animationDuration: '4s'}}>
                     <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                   </div>
                   <div className="w-12 h-6 bg-slate-800 rounded border border-slate-600 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                     <div className="w-2 h-2 bg-blue-400 rounded-full" />
                   </div>
                 </div>
                 
                 {/* Connection lines */}
                 <div className="h-16 w-px bg-gradient-to-b from-cyan-400/50 to-blue-500/50 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping" />
                 </div>
                 
                 {/* AI Node */}
                 <div className="w-24 h-12 bg-[#121F45] rounded border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10">
                   <span className="text-xs font-mono text-cyan-400 font-bold">AI Allocation</span>
                 </div>
                 
                 {/* Connection lines */}
                 <div className="h-16 w-full flex justify-around relative">
                   <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-emerald-400/50 -rotate-12" />
                   <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-emerald-400/50" />
                   <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-emerald-400/50 rotate-12" />
                 </div>
                 
                 {/* Ground layer */}
                 <div className="flex justify-between w-full px-4">
                   <div className="w-4 h-4 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                   <div className="w-4 h-4 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                   <div className="w-4 h-4 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                 </div>
                 <div className="w-full h-px bg-emerald-500/30 mt-2" />
                 <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase absolute -bottom-6">Ground Segment</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
`;
fs.writeFileSync(path.join(sectionsDir, 'FeaturedResearch.tsx'), featResearchTsx.trim());

// Remaining structural files
fs.writeFileSync(path.join(sectionsDir, 'Research.tsx'), `
export const Research = () => {
  const papers = [
    { title: 'Physics-Informed Neural Networks for EM Waves', domain: 'AI & Physics', status: 'Ongoing' },
    { title: 'Quantum AI / VQC Algorithms', domain: 'Quantum Computing', status: 'Exploratory' },
    { title: 'Open-Source VLSI / EDA Tools', domain: 'Hardware Design', status: 'Active' },
    { title: 'AI-based Image/Video Enhancement', domain: 'Computer Vision', status: 'Completed' },
    { title: 'IoT / Smart Agriculture Architectures', domain: 'Embedded Systems', status: 'Published' }
  ];

  return (
    <section id="research" className="py-24 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Research & Technical Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((p, i) => (
            <div key={i} className="bg-[#0A1128] border border-white/10 p-6 rounded-lg hover:border-cyan-500/50 transition-colors">
              <span className="text-xs font-mono text-cyan-400 mb-2 block">{p.domain}</span>
              <h3 className="text-lg font-bold text-slate-200 mb-4">{p.title}</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-slate-500">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Publications.tsx'), `
export const Publications = () => {
  return (
    <section className="py-20 bg-[#03060B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Publications</h2>
        <div className="border-l border-white/10 pl-6 space-y-8">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#03060B]" />
            <h4 className="text-lg font-bold text-white">AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems</h4>
            <p className="text-slate-400 text-sm mt-1">Authors: Slock Ahuja, et al.</p>
            <p className="text-slate-500 text-sm mt-1">Venue: IEEE ACROSET 2026</p>
            <span className="inline-block mt-3 px-2 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded">Accepted / Presented</span>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'IEEELeadership.tsx'), `
export const IEEELeadership = () => {
  return (
    <section id="ieee" className="py-24 bg-gradient-to-b from-[#050B14] to-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold tracking-widest text-[#00629B] uppercase mb-4">IEEE Communications Society</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-16">Student Leadership</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-left">
            <h4 className="text-xl font-bold text-white mb-2">Student Ambassador — Region 10</h4>
            <p className="text-[#00629B] font-medium mb-4">IEEE ComSoc</p>
            <p className="text-slate-400 text-sm">Representing the Asia-Pacific region, driving technical outreach, and engaging the student community in advanced communication technology initiatives.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-left">
            <h4 className="text-xl font-bold text-white mb-2">Chair — Student Branch Chapter</h4>
            <p className="text-[#00629B] font-medium mb-4">Marwadi University</p>
            <p className="text-slate-400 text-sm">Leading the university's ComSoc chapter, organizing technical symposiums, research workshops, and fostering regional community development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Experience.tsx'), `
export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#050B14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
        <div className="space-y-12">
          {[
            { role: 'Research Internship', org: 'DRDO', desc: 'Conducted advanced research in communication systems and hardware integration.' },
            { role: 'Campus Ambassador (Gold Tier — Top 10%)', org: 'eDC IIT Delhi, BECON 2026', desc: 'Promoted entrepreneurial initiatives and represented the institution at a national level.' },
            { role: 'Chair', org: 'IEEE ComSoc Student Branch Chapter, Marwadi University', desc: 'Led student initiatives and technical workshops.' },
            { role: 'Student Ambassador, Region 10', org: 'IEEE Communications Society', desc: 'Regional leadership and outreach.' }
          ].map((e, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
              <div className="md:w-1/3 text-cyan-400 font-bold text-lg">{e.org}</div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-white mb-2">{e.role}</h4>
                <p className="text-slate-400">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Achievements.tsx'), `
export const Achievements = () => {
  return (
    <section className="py-20 bg-[#0A1128] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Achievements & Recognition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'IEEE ACROSET 2026 Author/Presenter',
            'eDC IIT Delhi Gold Tier (Top 10%)',
            'DRDO Research Internship',
            'Patent Filed: Automated Load Carrier System',
            'Startup & Innovation 4.0 Participant',
            'IEEE ComSoc Region 10 Leadership'
          ].map((a, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center">
              <div className="w-2 h-2 bg-gold-400 rounded-full mr-3" />
              <span className="text-slate-200 font-medium text-sm">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'FeaturedProject.tsx'), `
import { GithubIcon } from '../components/Icons';

export const FeaturedProject = () => {
  return (
    <section id="projects" className="py-24 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Project Laboratory</h2>
        
        <div className="bg-[#0A1128] border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="text-xs font-mono text-cyan-400 mb-4 uppercase tracking-wider">Featured Project</div>
              <h3 className="text-4xl font-bold text-white mb-6">EnhanceX</h3>
              <p className="text-slate-400 mb-6 text-lg">
                An advanced AI video and image enhancement pipeline capable of stabilization, super-resolution, denoising, and frame interpolation utilizing high-performance hardware acceleration.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['C++', 'CUDA', 'ONNX', 'TensorRT', 'Python'].map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-300 font-mono">{t}</span>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
                <GithubIcon className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#03060B] rounded-xl border border-white/5 p-6 flex flex-col items-center justify-center gap-4">
                 <div className="text-center font-mono text-slate-500 text-sm mb-2">Technical Pipeline</div>
                 
                 <div className="w-full flex items-center justify-between">
                   <div className="w-24 h-16 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-xs text-slate-400 font-mono">Raw Input</div>
                   <div className="flex-1 h-px bg-gradient-to-r from-slate-700 via-cyan-500/50 to-slate-700 mx-2" />
                   <div className="w-32 h-20 bg-blue-900/30 border border-blue-500/50 rounded flex flex-col items-center justify-center text-xs text-cyan-400 font-bold font-mono">
                     <span>CUDA + TensorRT</span>
                     <span className="text-[10px] font-normal text-blue-300 mt-1">Inference Engine</span>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-slate-700 via-emerald-500/50 to-slate-700 mx-2" />
                   <div className="w-24 h-16 bg-emerald-900/20 border border-emerald-500/30 rounded flex items-center justify-center text-xs text-emerald-400 font-mono">Enhanced</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Projects.tsx'), `
export const Projects = () => {
  const projects = [
    { title: 'Farmer Friend AI', desc: 'Intelligent agricultural assistance using machine learning.', tech: ['Python', 'ML', 'IoT'] },
    { title: 'Smart Pot IoT', desc: 'Automated plant monitoring and care system via embedded sensors.', tech: ['ESP32', 'C', 'Sensors'] },
    { title: 'Magnetic Roller Load System', desc: 'Patent-pending hardware design for automated load transfer.', tech: ['Hardware', 'CAD', 'Mechanics'] },
  ];

  return (
    <section className="py-12 bg-[#050B14] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
              <p className="text-slate-400 text-sm mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map(t => <span key={t} className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-2 py-1 rounded">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Skills.tsx'), `
export const Skills = () => {
  const groups = [
    { title: 'PROGRAMMING', items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'] },
    { title: 'AI / ML', items: ['PyTorch', 'OpenCV', 'Scikit-learn', 'PyTorch Geometric', 'Reinforcement Learning'] },
    { title: 'WEB', items: ['React', 'Vite', 'Tailwind CSS', 'Node.js'] },
    { title: 'HARDWARE', items: ['ESP32', 'Arduino', 'ATmega32A', 'PCB Design', 'Embedded C', 'Microchip Studio'] },
    { title: 'COMMUNICATION & RESEARCH', items: ['6G', 'NTN', 'IoT', 'VLSI', 'Numerical Methods', 'PINNs', 'Quantum AI'] }
  ];

  return (
    <section className="py-24 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-[#050B14]">
              <h3 className="text-sm font-bold font-mono text-cyan-400 mb-6 uppercase tracking-wider">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-sm text-slate-300 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'TechnologyConstellation.tsx'), `
export const TechnologyConstellation = () => {
  return (
    <section className="py-24 bg-[#03060B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-12">Technology Constellation</h2>
        <div className="relative h-96 w-full max-w-3xl mx-auto flex items-center justify-center">
          <div className="absolute inset-0 border-t border-b border-white/5 rounded-[100%] opacity-20" />
          
          <div className="z-10 bg-cyan-500/20 border border-cyan-400 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <span className="text-white font-bold tracking-widest uppercase">SLOCK AHUJA</span>
          </div>
          
          {/* Static representation for performance */}
          {[
            { label: 'AI', top: '20%', left: '20%' },
            { label: '6G NTN', top: '20%', right: '20%' },
            { label: 'Embedded', bottom: '20%', left: '25%' },
            { label: 'VLSI', bottom: '20%', right: '25%' },
            { label: 'Quantum AI', top: '50%', left: '10%' },
            { label: 'Research', top: '50%', right: '10%' },
            { label: 'Web', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
          ].map((node, i) => (
            <div key={i} className="absolute text-cyan-200 font-mono text-xs border border-white/10 px-3 py-1 bg-[#0A1128] rounded-full hover:bg-cyan-900/50 hover:border-cyan-400 transition-colors cursor-default" style={node}>
              {node.label}
            </div>
          ))}
          
          {/* SVG lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
             <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#00D1FF" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Education.tsx'), `
export const Education = () => {
  return (
    <section className="py-20 bg-[#050B14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Education</h2>
        <div className="bg-[#0A1128] border border-white/10 p-8 rounded-2xl inline-block text-left max-w-2xl w-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">Marwadi University</h3>
            <span className="text-cyan-400 font-mono text-sm">Graduation: 2028</span>
          </div>
          <p className="text-lg text-slate-300 font-medium mb-4">B.Tech — Information and Communication Technology</p>
          <p className="text-slate-400 text-sm">Focus: Artificial Intelligence, Communication Systems, Embedded Hardware, VLSI.</p>
        </div>
      </div>
    </section>
  );
};
`);

fs.writeFileSync(path.join(sectionsDir, 'Contact.tsx'), `
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { GithubIcon as CustomGit, LinkedinIcon as CustomLinked } from '../components/Icons';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#050B14] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-white rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-white rounded-full" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Build Something Meaningful.</h2>
        <p className="text-xl text-slate-400 mb-12">
          Open to research collaborations, technical projects, IEEE initiatives, and internship opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:ahujaslock321@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white text-navy-900 font-bold rounded hover:bg-slate-200 transition-colors flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            ahujaslock321@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/slock-ahuja-32839b315" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center">
            <CustomLinked className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a href="https://github.com/SlockAhuja" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center">
            <CustomGit className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
`);
