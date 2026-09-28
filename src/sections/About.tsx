import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#03060B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors z-10" />
              <img src={heroImg} alt="Slock Ahuja" className="w-full h-full object-cover" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#050B14] to-transparent z-20">
                 <p className="text-cyan-400 font-mono text-sm">B.Tech ICT Engineering</p>
                 <p className="text-white font-semibold">Marwadi University '28</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Building intelligent systems for the real world.</h3>
            
            <div className="space-y-4 text-slate-400 text-lg">
              <p>
                I am an Information and Communication Technology engineering student at Marwadi University. I specialize in bridging the gap between hardware and software, leveraging artificial intelligence to optimize communication networks and embedded systems.
              </p>
              <p>
                My work focuses on combining software engineering, hardware architecture, communication protocols, and AI models to build robust real-world systems. I am particularly interested in the challenges of next-generation networks and edge intelligence.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Artificial Intelligence', '6G Communication', 'Non-Terrestrial Networks', 'Embedded Systems', 'IoT', 'Computer Vision', 'VLSI', 'Hardware-AI Integration', 'Intelligent Automation'].map(item => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};