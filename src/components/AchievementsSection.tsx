import React, { useState } from 'react';
import { 
  Award, 
  Crown, 
  Medal, 
  FileCheck, 
  Bot, 
  Trophy, 
  Lightbulb,
  Globe2,
  Radio,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { achievementsData } from '../data/achievements';
import type { AchievementItem, AchievementCategory } from '../data/achievements';

type FilterType = 'all' | AchievementCategory;

export const AchievementsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'ieee-region-10-ambassador':
        return <Globe2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />;
      case 'ieee-comsoc-chair':
        return <Crown className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'ieee-comsoc-member':
        return <Radio className="w-4 h-4 text-blue-600 dark:text-cyan-400" />;
      case 'drdo-internship':
        return <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'iit-delhi-becon':
        return <Medal className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
      case 'edc-lor':
        return <FileCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'isro-robotics-challenge':
        return <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'robo-fest':
        return <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'tata-imagination-challenge':
        return <Lightbulb className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      case 'startup-innovation-4':
        return <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Award className="w-4 h-4 text-blue-600 dark:text-cyan-400" />;
    }
  };

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'ieee', label: 'IEEE' },
    { id: 'recognition', label: 'Recognition & LOR' },
    { id: 'internship', label: 'Internship' },
    { id: 'competition', label: 'Competitions' },
  ];

  const filteredAchievements = achievementsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categories.includes(activeFilter);
  });

  return (
    <section id="achievements" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Service & Appointments
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Achievements & Leadership
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            A selection of leadership roles, professional society appointments, institutional recognition, research exposure, internships, and technical competitions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => {
            const count = tab.id === 'all' 
              ? achievementsData.length 
              : achievementsData.filter(item => item.categories.includes(tab.id as AchievementCategory)).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === tab.id
                    ? 'bg-blue-500/50 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((item: AchievementItem) => {
            const isFeatured = item.featured;

            return (
              <div
                key={item.id}
                className={`academic-card p-5 space-y-3 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'border-blue-300 dark:border-blue-600/60 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/50 dark:from-blue-950/20 dark:via-slate-900/80 dark:to-slate-900 ring-1 ring-blue-500/20'
                    : ''
                }`}
              >
                <div>
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg border ${
                      isFeatured 
                        ? 'bg-blue-100/80 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700' 
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}>
                      {getAchievementIcon(item.id)}
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      {item.tier && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          {item.tier}
                        </span>
                      )}
                      {item.badge && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                          item.badge === 'Regional Leadership' || item.badge === 'Elected Leadership'
                            ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700 font-semibold'
                            : item.badge === 'Internship & Research Exposure'
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-sans font-bold text-sm mb-1 ${
                    isFeatured 
                      ? 'text-blue-950 dark:text-blue-100 text-base' 
                      : 'text-slate-900 dark:text-slate-100'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Organization & Year */}
                  <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-2 font-medium">
                    {item.organization}{item.year ? ` • ${item.year}` : ''}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Key Responsibilities / Details */}
                {item.details && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Key Responsibilities
                    </div>
                    {item.details.map((d, i) => (
                      <div key={i} className="text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-blue-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
