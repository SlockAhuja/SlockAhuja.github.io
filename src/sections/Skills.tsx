import { SectionHeading } from '../components/SectionHeading';
import { skillsData } from '../data/skills';
import { motion } from 'framer-motion';

export const Skills = () => {
  const categories = [
    { id: 'aiMl', title: 'AI & Machine Learning', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
    { id: 'communications', title: 'Communications (6G/NTN)', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { id: 'embeddedHardware', title: 'Embedded & Hardware', color: 'text-gold-400', bg: 'bg-gold-400/10', border: 'border-gold-400/20' },
    { id: 'engineering', title: 'Engineering & Simulation', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
    { id: 'programming', title: 'Programming Languages', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
    { id: 'web', title: 'Web Development', color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/20' },
  ];

  return (
    <section id="skills" className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="Core competencies across software, hardware, and research domains." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            // @ts-ignore
            const skills = skillsData[cat.id] as string[];
            
            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${cat.border} bg-navy-800/50 backdrop-blur-sm`}
              >
                <h3 className={`text-lg font-bold mb-4 ${cat.color}`}>{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span 
                      key={skill} 
                      className={`text-sm font-medium px-3 py-1.5 rounded-lg ${cat.bg} ${cat.color} border ${cat.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
