
export const Projects = () => {
  const projects = [
    { title: 'Farmer Friend AI', desc: 'Intelligent agricultural assistance using machine learning.', tech: ['Python', 'ML', 'IoT'] },
    { title: 'Smart Pot IoT', desc: 'Automated plant monitoring and care system via embedded sensors.', tech: ['ESP32', 'C', 'Sensors'] },
    { title: 'Magnetic Roller Load System', desc: 'Patent-pending hardware design for automated load transfer.', tech: ['Hardware', 'CAD', 'Mechanics'] },
  ];

  return (
    <section className="py-12 bg-[#050B14] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
              <p className="text-slate-400 text-sm mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map(t => <span key={t} className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-2 py-1 rounded">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
