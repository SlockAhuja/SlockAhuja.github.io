import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#060910] text-slate-600 dark:text-slate-400 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                {profileData.monogram}
              </div>
              <span className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              ICT Engineering • Research • Technology
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#research" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Research</a>
            <a href="#work" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Selected Work</a>
            <a href="#publications" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Publications</a>
            <a href="#achievements" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {profileData.socials.github && (
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {profileData.socials.email && (
              <a
                href={profileData.socials.email}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email Slock Ahuja"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs font-mono"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Small Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2">
          <span>© 2026 Slock Ahuja</span>
          <span>Marwadi University, Rajkot, Gujarat, India</span>
        </div>

      </div>
    </footer>
  );
};
