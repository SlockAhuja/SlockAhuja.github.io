import React from 'react';
import { 
  Code2, 
  Brain, 
  Globe, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { profileData } from '../data/profile';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />;
      case 'Brain': return <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default: return <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Technical Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Skills & Toolchains
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Categorized technical stack spanning scientific programming, machine learning frameworks, EDA layout suites, and AI infrastructure.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skillCategories.map((category: SkillCategory) => (
            <div
              key={category.id}
              className="academic-card p-5 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                    {category.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-xs"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Environment */}
        <div className="academic-card p-6 space-y-4">
          <div className="flex items-center gap-2.5 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                Engineering & Compute Environment
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Validated local development and acceleration stack</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">HARDWARE ACCELERATION</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{profileData.environment.gpu}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">CUDA matrix compute & PINN residual minimization</p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">PLATFORM & SUBSYSTEM</span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{profileData.environment.os}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">{profileData.environment.subsystem}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">TOOLCHAINS</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {profileData.environment.tools.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 text-[10px] rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
