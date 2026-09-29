import React from 'react';
import { Magnet, CheckCircle2 } from 'lucide-react';
import { patentsData } from '../data/patents';

export const PatentsSection: React.FC = () => {
  return (
    <section id="patents" className="py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Intellectual Property
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Patent Applications
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Engineered hardware mechanisms designed to optimize directional load dynamics.
          </p>
        </div>

        {/* Patent Card */}
        <div className="space-y-4">
          {patentsData.map((patent) => (
            <div
              key={patent.id}
              className="academic-card p-6 sm:p-7 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                    <Magnet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Application Ref: {patent.applicationNumber} • Year: {patent.year}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      {patent.title}
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  Application Filed ({patent.year})
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {patent.summary}
              </p>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  Core Engineering Principles:
                </span>
                {patent.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
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
