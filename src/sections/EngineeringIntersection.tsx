import { motion } from 'framer-motion';
import { BrainCircuit, Radio, Cpu, FlaskConical } from 'lucide-react';

export const EngineeringIntersection = () => {
  const domains = [
    {
      num: '01',
      title: 'ARTIFICIAL INTELLIGENCE',
      icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />,
      desc: 'Developing Physics-Informed Neural Networks, Quantum AI models, and computer vision pipelines for complex data processing.'
    },
    {
      num: '02',
      title: 'NEXT-GENERATION COMMUNICATION',
      icon: <Radio className="w-8 h-8 text-blue-400" />,
      desc: 'Researching resource management in 6G and Non-Terrestrial Networks (NTN) using AI-driven optimization.'
    },
    {
      num: '03',
      title: 'EMBEDDED & HARDWARE SYSTEMS',
      icon: <Cpu className="w-8 h-8 text-violet-400" />,
      desc: 'Designing IoT architectures, PCB layouts, and integrating AI inference directly onto edge devices and microcontrollers.'
    },
    {
      num: '04',
      title: 'RESEARCH & INNOVATION',
      icon: <FlaskConical className="w-8 h-8 text-gold-400" />,
      desc: 'Publishing academic findings, presenting at IEEE conferences, and driving student initiatives as an IEEE ComSoc leader.'
    }
  ];

  return (
    <section className="py-24 bg-[#050B14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering at the Intersection</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">My technical foundation spans across four critical domains of modern technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0A1128] border border-white/5 p-8 rounded-xl hover:border-white/20 transition-all relative group"
            >
              <div className="text-5xl font-extrabold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors">
                {d.num}
              </div>
              <div className="mb-6">{d.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};