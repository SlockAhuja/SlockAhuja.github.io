import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-navy-900 relative overflow-hidden">
      {/* Abstract Background element */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute right-[-10%] bottom-[-20%] w-96 h-96 border-[40px] border-cyan-500 rounded-full rounded-tl-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's build, research, and connect<span className="text-cyan-400">.</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Available for research collaborations, technical projects, IEEE initiatives, and internships.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <LinkedinIcon className="mr-3 h-5 w-5" />
                Connect on LinkedIn
              </a>
              
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white border border-navy-600 hover:border-cyan-500/50 font-bold rounded-lg transition-all"
              >
                <GithubIcon className="mr-3 h-5 w-5" />
                View GitHub
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-400">
              <div className="p-4 bg-navy-800 rounded-lg border border-navy-700">Research Collaboration</div>
              <div className="p-4 bg-navy-800 rounded-lg border border-navy-700">Technical Projects</div>
              <div className="p-4 bg-navy-800 rounded-lg border border-navy-700">IEEE Initiatives</div>
              <div className="p-4 bg-navy-800 rounded-lg border border-navy-700">Internships</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
