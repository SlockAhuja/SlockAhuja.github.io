
export const Skills = () => {
  const groups = [
    { title: 'PROGRAMMING', items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'] },
    { title: 'AI / ML', items: ['PyTorch', 'OpenCV', 'Scikit-learn', 'PyTorch Geometric', 'Reinforcement Learning'] },
    { title: 'WEB', items: ['React', 'Vite', 'Tailwind CSS', 'Node.js'] },
    { title: 'HARDWARE', items: ['ESP32', 'Arduino', 'ATmega32A', 'PCB Design', 'Embedded C', 'Microchip Studio'] },
    { title: 'COMMUNICATION & RESEARCH', items: ['6G', 'NTN', 'IoT', 'VLSI', 'Numerical Methods', 'PINNs', 'Quantum AI'] }
  ];

  return (
    <section className="py-24 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 bg-[#050B14]">
              <h3 className="text-sm font-bold font-mono text-cyan-400 mb-6 uppercase tracking-wider">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-sm text-slate-300 font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
