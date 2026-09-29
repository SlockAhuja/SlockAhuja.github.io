import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Mail, 
  FileText,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon } from './Icons';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section 
      id="home" 
      className="min-h-[85vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20 subtle-grid-bg border-b border-slate-200 dark:border-slate-800 relative overflow-hidden"
    >
      {/* Subtle Ambient Background Accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Academic & Professional Identity */}
          <div className="lg:col-span-7 space-y-6 text-left order-1">
            
            {/* Verified Academic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
              <span>Marwadi University • B.Tech ICT • IEEE Leader</span>
            </div>

            {/* Name & Professional Designation */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                {profileData.name}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-mono font-semibold text-blue-600 dark:text-cyan-400">
                ICT Engineering Student · Researcher · Developer
              </p>
            </div>

            {/* Concise Professional Introduction */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              {profileData.supportingText}
            </p>

            {/* Small Professional Identity Line */}
            <div className="pt-1">
              <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-slate-500 dark:text-slate-400 py-1.5 px-3 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <span className="font-medium text-slate-700 dark:text-slate-300">AI</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">Hardware</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">Communications</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">Scientific Computing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href="#research"
                className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explore Research</span>
              </a>

              <a
                href="#work"
                className="px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 font-medium text-xs flex items-center gap-2 transition-all shadow-2xs"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href="#contact"
                className="px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Contact</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="px-3.5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 font-medium text-xs flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Academic CV</span>
              </button>

              {profileData.socials.github && (
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}
            </div>

            {/* Quick Verification Line */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified Academic Profile</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>IEEE ACROSET 2026 Author</span>
              </span>
            </div>

          </div>

          {/* Right Column: Refined Editorial Portrait Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
              
              {/* Subtle Understated Engineering Geometric Backdrop */}
              <div 
                className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-gradient-to-tr from-slate-100/60 to-blue-50/30 dark:from-slate-800/40 dark:to-slate-900/40 -z-10" 
                aria-hidden="true"
              />
              
              {/* Technical Corner Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-blue-500/60 dark:border-cyan-400/60 z-20 pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-blue-500/60 dark:border-cyan-400/60 z-20 pointer-events-none" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] aspect-[4/5] w-full">
                
                <picture>
                  <source srcSet="/slock-portrait.webp" type="image/webp" />
                  <source srcSet="/slock-portrait.jpg" type="image/jpeg" />
                  <img
                    src="/slock-portrait.jpg"
                    alt="Slock Ahuja — ICT Engineering Student, Researcher, and Developer"
                    width={683}
                    height={1024}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[50%_14%] transform transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </picture>

                {/* Subtle Bottom Information Strip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pt-8 pb-3 px-4 text-left">
                  <div className="flex items-center justify-between text-white text-xs font-mono">
                    <span className="font-semibold text-[11px] tracking-wide text-white/90">
                      Slock Ahuja
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 backdrop-blur-xs text-white/90 border border-white/20">
                      Marwadi University
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Caption Tag Underneath */}
              <div className="mt-3 flex items-center justify-between px-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Rajkot, Gujarat, India</span>
                </span>
                <span>Class of 2028</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
