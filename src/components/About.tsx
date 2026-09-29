import React from 'react';
import { 
  MapPin, 
  Calendar, 
  BookOpen, 
  Cpu, 
  Activity, 
  FileText
} from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const approachSteps = [
    {
      title: "Understand",
      tagline: "First Principles",
      description: "Build conceptual understanding before implementation. Derive mathematical foundations and understand physical hardware constraints.",
      icon: BookOpen
    },
    {
      title: "Build",
      tagline: "Implementation",
      description: "Convert concepts into working technical systems across silicon layouts, firmware, and software architectures.",
      icon: Cpu
    },
    {
      title: "Validate",
      tagline: "Empirical Rigor",
      description: "Measure, test and reproduce results with systematic benchmarking, error metrics, and audited validation.",
      icon: Activity
    },
    {
      title: "Document",
      tagline: "Clarity",
      description: "Record methodology, results, codebases, and limitations clearly for academic and technical peer review.",
      icon: FileText
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Academic Background & Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            About Me
          </h2>
        </div>

        {/* Academic Card & Interest Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Academic Info Card */}
          <div className="lg:col-span-7 academic-card p-6 sm:p-7 space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 shadow-2xs">
                <img
                  src="/slock-portrait.webp"
                  alt="Slock Ahuja"
                  className="w-full h-full object-cover object-[50%_15%]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-slate-900 dark:text-slate-100">
                  B.Tech in Information and Communication Technology
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Marwadi University, Rajkot, Gujarat, India
                </p>
              </div>
            </div>

            {/* Academic Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-[10px]">PROGRAM</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">ICT Engineering</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block text-[10px] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-blue-600 dark:text-cyan-400" /> TIMELINE
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">5th Sem • Class of 2028</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-slate-500 dark:text-slate-400 block text-[10px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" /> LOCATION
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">Rajkot, Gujarat, India</span>
              </div>
            </div>

            {/* Concise Academic Paragraph */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              I am an Information and Communication Technology undergraduate at Marwadi University focused on building deep systems across artificial intelligence, machine learning, quantum AI, IoT, hardware design, semiconductor/VLSI, 6G/NTN communications, numerical PDEs, scientific computing, physics-informed neural networks, computer vision, and automation.
            </p>
          </div>

          {/* Core Technical Domains Matrix */}
          <div className="lg:col-span-5 academic-card p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                Technical Domains
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Interconnected engineering and computational disciplines:
              </p>

              <div className="flex flex-wrap gap-1.5 max-h-[220px] overflow-y-auto pr-1">
                {profileData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>{profileData.interests.length} Domains</span>
              <span className="text-blue-600 dark:text-cyan-400 font-medium">Fact & Rigor Driven</span>
            </div>
          </div>

        </div>

        {/* Approach Section: 4 Research Principles */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">
              Research & Engineering Philosophy
            </div>
            <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-slate-100">
              Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {approachSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="academic-card p-5 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                      {step.tagline}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
