import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { achievementsData, patentData } from '../data/achievements';
import { Trophy, FileText, CheckCircle2 } from 'lucide-react';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements & Patents" subtitle="Recognitions, milestones, and innovations." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Trophy className="mr-3 h-6 w-6 text-gold-400" />
              Timeline
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-700 before:to-transparent">
              {achievementsData.map((ach, index) => (
                <div key={ach.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-navy-600 bg-navy-800 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  </div>
                  
                  <Card delay={index * 0.1} className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                    <div className="flex flex-col">
                      <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">{ach.year}</span>
                      <h4 className="text-lg font-bold text-white leading-tight mb-1">{ach.title}</h4>
                      <p className="text-slate-400 text-sm">{ach.organization}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Patents */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FileText className="mr-3 h-6 w-6 text-cyan-400" />
              Patents & Innovation
            </h3>
            
            <div className="space-y-6">
              {patentData.map((patent, index) => (
                <Card key={index} delay={index * 0.1} className="border-cyan-900/50 bg-gradient-to-br from-navy-800 to-navy-800/50">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-800">
                      {patent.status}
                    </span>
                    <span className="text-sm text-slate-500">{patent.year}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4">{patent.title}</h4>
                  
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-400">
                      <strong className="text-slate-300">Inventors:</strong> {patent.inventors.join(', ')}
                    </p>
                    <p className="text-slate-400">
                      <strong className="text-slate-300">Source:</strong> {patent.source}
                    </p>
                    {patent.number && (
                      <p className="text-slate-400">
                        <strong className="text-slate-300">Application Number:</strong> {patent.number}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
