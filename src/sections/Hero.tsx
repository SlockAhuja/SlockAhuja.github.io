import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { profileData } from '../data/profile';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-cyan-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{profileData.badges[2]}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {profileData.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>
            
            <div className="flex flex-col space-y-2 mb-8 text-slate-400">
              <p className="flex items-center"><span className="w-2 h-2 rounded-full bg-gold-400 mr-2"></span>{profileData.badges[0]}</p>
              <p className="flex items-center"><span className="w-2 h-2 rounded-full bg-gold-400 mr-2"></span>{profileData.badges[1]}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#research" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-navy-900 font-bold hover:bg-cyan-400 transition-colors">
                Explore Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy-800 text-white font-medium border border-navy-700 hover:border-cyan-500/50 hover:bg-navy-700 transition-all">
                View Projects
              </a>
              
              <div className="flex items-center gap-4 ml-4">
                <a href={profileData.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[600px] w-full"
          >
            {/* Abstract Tech Visual since no verified photo provided */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-full h-full max-w-md max-h-md">
                 {/* Orbit rings */}
                 <div className="absolute inset-0 border border-navy-700 rounded-full animate-[spin_20s_linear_infinite]" />
                 <div className="absolute inset-4 border border-navy-600 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                 <div className="absolute inset-12 border border-cyan-900/30 rounded-full animate-[spin_10s_linear_infinite]" />
                 
                 {/* Center node */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-navy-800 rounded-full border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
                      SA
                    </span>
                 </div>
                 
                 {/* Satellite nodes */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                 <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                 <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full shadow-[0_0_10px_rgba(229,193,88,0.8)]" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
