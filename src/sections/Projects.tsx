import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { projectsData } from '../data/projects';
import { ExternalLink, Activity } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="Engineering solutions across AI, Embedded Systems, and Web Technologies." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} delay={index * 0.1} className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  {project.name}
                </h3>
                <div className="flex space-x-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Live Demo">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-cyan-400 text-sm font-medium mb-4">{project.tagline}</p>
              
              <div className="space-y-3 text-slate-300 text-sm mb-6 flex-grow">
                <p><strong className="text-white block mb-1">Problem:</strong> {project.problem}</p>
                <p><strong className="text-white block mb-1">Solution:</strong> {project.solution}</p>
              </div>
              
              <div className="bg-navy-900/50 p-3 rounded-lg flex items-start mt-auto mb-4 border border-navy-700/50">
                <Activity className="h-5 w-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-semibold">Research connection:</span> {project.researchConnection}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-700">
                {project.technology.map(tech => (
                  <span key={tech} className="text-xs font-medium px-2 py-1 bg-navy-800 border border-navy-600 text-slate-300 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
