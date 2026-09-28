import { profileData } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 text-lg text-slate-300 leading-relaxed space-y-6"
          >
            <p>
              {profileData.about}
            </p>
            <p>
              Currently pursuing a <span className="text-white font-medium">{profileData.degree}</span> at <span className="text-white font-medium">{profileData.university}</span>. 
              My research and engineering projects focus on creating intelligent, efficient, and robust systems that bridge the gap between algorithmic AI and physical hardware realities.
            </p>
            <p>
              Beyond technical development, I am deeply involved in fostering engineering communities as the <span className="text-cyan-400 font-medium">IEEE ComSoc Student Ambassador for Region 10</span> and the Chair of the IEEE ComSoc Marwadi University Student Branch Chapter.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy-800 border border-navy-700 rounded-xl p-6 h-fit"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b border-navy-700 pb-2">Quick Facts</h3>
            <ul className="space-y-4">
              <li>
                <span className="block text-sm text-slate-500 mb-1">Education</span>
                <span className="text-slate-300">{profileData.degree}</span>
              </li>
              <li>
                <span className="block text-sm text-slate-500 mb-1">University</span>
                <span className="text-slate-300">{profileData.university}</span>
              </li>
              <li>
                <span className="block text-sm text-slate-500 mb-1">Expected Graduation</span>
                <span className="text-slate-300">{profileData.expectedGraduation}</span>
              </li>
              <li>
                <span className="block text-sm text-slate-500 mb-1">Core Focus</span>
                <span className="text-slate-300">AI, 6G/NTN, Hardware Integration</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
