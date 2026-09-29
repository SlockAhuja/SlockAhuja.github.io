import React from 'react';
import { Cpu, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

export const SemiconductorSection: React.FC = () => {
  const circuits = [
    { name: 'CMOS Inverter Chains', desc: 'Propagation delay optimization & noise margin characterization.' },
    { name: 'SR Latch Sequential Logic', desc: 'Cross-coupled NAND/NOR gate physical layout & state transitions.' },
    { name: 'NAND-Based Arithmetic Cells', desc: 'Universal logic decomposition & silicon area minimization.' },
    { name: 'Microwind Layout Rules', desc: 'Design rule checking (DRC) and physical silicon verification.' }
  ];

  return (
    <section className="py-24 relative tech-grid-bg border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" /> Silicon & Integrated Circuits
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white light:text-slate-950">
            Semiconductor & VLSI Engineering
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on CMOS layout synthesis, open-source EDA toolchains, sequential digital circuit design, and advocating for democratized semiconductor education.
          </p>
        </div>

        {/* Featured Publication Highlight Box */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl mb-12 border-l-4 border-l-cyan-500 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Published Article</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Future of VLSI Design Using Open-Source EDA Tools
                </h3>
              </div>
            </div>
            <span className="px-3.5 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              INFOMATRIX Magazine 2025, Vol. 4
            </span>
          </div>

          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
            Authored a comprehensive analytical article in <span className="font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900">INFOMATRIX Magazine 2025 (Volume 4)</span> addressing the transformative potential of open-source Electronic Design Automation (EDA) toolchains. Explores how accessible layout suites (such as Microwind and open EDA stacks) eliminate licensing barriers for students and bridge the gap between academic VLSI coursework and practical industry tape-out workflows.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
            {['CMOS Design', 'VLSI', 'Microwind', 'Open-Source EDA', 'Semiconductor Engineering', 'INFOMATRIX 2025'].map(t => (
              <span key={t} className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-400 border border-slate-800 dark:border-slate-800 light:border-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Silicon Layout & Digital Circuits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {circuits.map((circ) => (
            <div
              key={circ.name}
              className="glass-card p-5 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 group hover:border-cyan-500/40 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 w-fit mb-3">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="text-sm font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1.5">
                {circ.name}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {circ.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Industry-Academia Vision */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <GraduationCap className="w-4 h-4" /> Semiconductor Education Advocacy
            </div>
            <h3 className="text-lg font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Industry-Academia Collaboration in Silicon Design
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              Actively focused on developing practical educational material, circuit simulation labs, and open EDA methodologies to make semiconductor physical design intuitive and accessible for early-stage engineering researchers.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 whitespace-nowrap bg-emerald-500/10 px-4 py-2.5 rounded-xl border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4" />
            <span>Open-Source EDA Advocate</span>
          </div>
        </div>

      </div>
    </section>
  );
};
