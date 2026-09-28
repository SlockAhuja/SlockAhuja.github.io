import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { experienceData } from '../data/experience';
import { Briefcase, Award } from 'lucide-react';

export const Experience = () => {
  const getIcon = (type: string) => {
    return type === 'Leadership' ? <Award className="h-6 w-6 text-gold-400" /> : <Briefcase className="h-6 w-6 text-cyan-400" />;
  };

  return (
    <section id="experience" className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience & Leadership" subtitle="Professional internships and community leadership roles." />
        
        <div className="space-y-6 max-w-4xl">
          {experienceData.map((exp, index) => (
            <Card key={exp.id} delay={index * 0.1} className="relative overflow-hidden group">
              {/* Subtle gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-navy-900 rounded-lg border border-navy-700">
                  {getIcon(exp.type)}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium">{exp.organization}</p>
                    </div>
                    <div className="mt-1 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-navy-800 border border-navy-600 rounded-full text-xs font-semibold text-slate-300">
                        {exp.dates}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
