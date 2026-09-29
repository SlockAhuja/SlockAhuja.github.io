import React from 'react';
import { 
  CircuitBoard, 
  Droplet, 
  Plane, 
  ScanLine, 
  Magnet, 
  Footprints, 
  Volume2
} from 'lucide-react';
import { projectsData } from '../data/projects';

export const HardwareIoTSection: React.FC = () => {
  const hardwareProjects = projectsData.filter((p) => p.category === 'hardware');

  const getHardwareIcon = (id: string) => {
    switch (id) {
      case 'smart-pot-iot': return <Droplet className="w-5 h-5 text-cyan-400" />;
      case 'soil-analysis-drone-concept': return <Plane className="w-5 h-5 text-indigo-400" />;
      case 'handheld-soil-scanner': return <ScanLine className="w-5 h-5 text-emerald-400" />;
      case 'magnetic-roller-load-transfer': return <Magnet className="w-5 h-5 text-amber-400" />;
      case 'pedometer-circuit': return <Footprints className="w-5 h-5 text-blue-400" />;
      case 'mosquito-repellent-circuit': return <Volume2 className="w-5 h-5 text-rose-400" />;
      default: return <CircuitBoard className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <CircuitBoard className="w-3.5 h-3.5" /> Physical Systems & Embedded Electronics
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white light:text-slate-950">
            IoT & Hardware Engineering
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Tangible cyber-physical prototypes, microcontroller automation, discrete analog/digital electronics, and patented load-transfer mechanisms.
          </p>
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 group-hover:scale-110 transition-transform">
                    {getHardwareIcon(project.id)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-slate-700 light:border-slate-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Specs if available */}
                {project.specs && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 font-mono text-[11px] mb-4">
                    {project.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between text-slate-400">
                        <span>{spec.label}:</span>
                        <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 border border-slate-800 dark:border-slate-800 light:border-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
