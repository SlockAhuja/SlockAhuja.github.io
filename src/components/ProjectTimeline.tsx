import React from 'react';
import { 
  Crown, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Layers
} from 'lucide-react';
import { timelineData } from '../data/timeline';
import type { TimelineMilestone } from '../data/timeline';

export const ProjectTimeline: React.FC = () => {
  const getTimelineIcon = (category: string) => {
    switch (category) {
      case 'leadership': return <Crown className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />;
      case 'publication': return <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />;
      case 'patent': return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
      case 'research': return <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />;
      default: return <Zap className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Progression & Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Academic & Technical Journey
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Chronological progression of academic leadership, conference acceptances, technical publications, and patent filings.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-24 space-y-8">
          {timelineData.map((milestone: TimelineMilestone, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              
              {/* Year marker for desktop */}
              <div className="hidden md:flex absolute -left-24 top-0.5 w-16 justify-end font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                <span>{milestone.year}</span>
              </div>

              {/* Node Icon on vertical line */}
              <div className="absolute -left-3 top-0.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center shadow-2xs">
                {getTimelineIcon(milestone.category)}
              </div>

              {/* Milestone Card */}
              <div className="academic-card p-5 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="md:hidden text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                      {milestone.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {milestone.categoryLabel}
                    </span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                  {milestone.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {milestone.tags.map(t => (
                    <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
