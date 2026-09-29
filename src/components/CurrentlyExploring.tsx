import React from 'react';
import { exploringTopics, futureVisionText } from '../data/futureVision';
import type { ExploringTopic } from '../data/futureVision';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Research Horizons
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Research Focus & Directions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Exploratory topics and core technical themes shaping long-term investigations.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {exploringTopics.map((topic: ExploringTopic) => (
            <div
              key={topic.title}
              className="academic-card p-5 space-y-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
                    {topic.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {topic.status}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Long-Term Theme Card */}
        <div className="academic-card p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold block">
              Long-Term Focus
            </span>
            <h3 className="text-lg sm:text-xl font-sans font-bold text-slate-900 dark:text-slate-100">
              Convergence Theme
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
              "{futureVisionText.theme}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            {futureVisionText.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1"
              >
                <h4 className="font-sans font-bold text-xs text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
                  <span>{pillar.title}</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
