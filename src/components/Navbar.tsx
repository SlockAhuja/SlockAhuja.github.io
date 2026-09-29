import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark, onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Work', href: '#work' },
    { name: 'Publications', href: '#publications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'research', 'work', 'publications', 'achievements', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Name / Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          aria-label="Slock Ahuja - Academic Profile"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
            {profileData.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              ICT • AI • Hardware
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/40'
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (CV Modal, Theme Switcher, Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Academic CV Trigger Button */}
          <button
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-all shadow-2xs"
            aria-label="View Academic CV"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">Academic</span> CV
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-mono transition-all"
            aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
            title={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline text-[11px]">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline text-[11px]">Dark</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
            <span className="font-mono text-slate-500">Marwadi University • 2028</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1 font-mono"
            >
              Academic CV <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
