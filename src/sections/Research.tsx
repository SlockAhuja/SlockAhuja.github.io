import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { researchData } from '../data/research';
import { ExternalLink, Database, Cpu, Network, Radar, Zap } from 'lucide-react';

export const Research = () => {
  const getIcon = (category: string) => {
    if (category.includes('6G')) return <Network className="h-6 w-6 text-cyan-400" />;
    if (category.includes('Physics')) return <Database className="h-6 w-6 text-cyan-400" />;
    if (category.includes('Vision')) return <Radar className="h-6 w-6 text-cyan-400" />;
    if (category.includes('Embedded') || category.includes('Hardware')) return <Cpu className="h-6 w-6 text-cyan-400" />;
    return <Zap className="h-6 w-6 text-cyan-400" />;
  };

  return (
    <section id="research" className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Research & Exploration" 
          subtitle="Exploring intelligent communication systems, AI, and hardware-enabled computing."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchData.map((item, index) => (
            <Card key={item.id} delay={index * 0.1} className={item.featured ? "md:col-span-2 border-cyan-900/50 bg-gradient-to-br from-navy-800 to-navy-900" : ""}>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-navy-900 rounded-lg">
                      {getIcon(item.category)}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">{item.category}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-navy-700 text-slate-300">
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                
                <div className="mb-4 text-slate-400 text-sm flex-grow">
                  <p className="mb-2"><strong className="text-slate-300">Problem:</strong> {item.problem}</p>
                  <p><strong className="text-slate-300">Approach:</strong> {item.approach}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-navy-700">
                  {item.technology.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 bg-navy-900 text-slate-400 rounded-md">
                      {tech}
                    </span>
                  ))}
                  
                  {item.demoLink && (
                    <a href={item.demoLink} target="_blank" rel="noreferrer" className="ml-auto flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      View Demo <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
