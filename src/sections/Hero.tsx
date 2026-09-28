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