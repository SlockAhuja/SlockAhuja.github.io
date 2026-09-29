import React from 'react';
import { 
  Brain, 
  Atom, 
  Radio, 
  Binary, 
  Sigma, 
  Cpu, 
  Wifi, 
  Layers
} from 'lucide-react';
import { researchAreas } from '../data/research';
import type { ResearchArea } from '../data/research';

export const ResearchIdentity: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-600 dark:text-cyan-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Sigma': return <Sigma className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-slate-700 dark:text-slate-300" />;
      default: return <Brain className="w-5 h-5 text-blue-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="research" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Focus Areas & Core Themes
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Research Interests
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Interconnected computational and hardware research directions targeting rigorous mathematical formulations and functional prototypes.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {researchAreas.map((area: ResearchArea) => (
            <div
              key={area.id}
              className="academic-card p-5 flex flex-col justify-between space-y-4 hover:border-blue-400 dark:hover:border-cyan-500 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {getIcon(area.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {area.category}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100 mb-1.5">
                  {area.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Topics List */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
                {area.topics.map((t) => (
                  <div key={t} className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
