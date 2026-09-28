
export const Research = () => {
  const papers = [
    { title: 'Physics-Informed Neural Networks for EM Waves', domain: 'AI & Physics', status: 'Ongoing' },
    { title: 'Quantum AI / VQC Algorithms', domain: 'Quantum Computing', status: 'Exploratory' },
    { title: 'Open-Source VLSI / EDA Tools', domain: 'Hardware Design', status: 'Active' },
    { title: 'AI-based Image/Video Enhancement', domain: 'Computer Vision', status: 'Completed' },
    { title: 'IoT / Smart Agriculture Architectures', domain: 'Embedded Systems', status: 'Published' }
  ];

  return (
    <section id="research" className="py-24 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Research & Technical Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((p, i) => (
            <div key={i} className="bg-[#0A1128] border border-white/10 p-6 rounded-lg hover:border-cyan-500/50 transition-colors">
              <span className="text-xs font-mono text-cyan-400 mb-2 block">{p.domain}</span>
              <h3 className="text-lg font-bold text-slate-200 mb-4">{p.title}</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-slate-500">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
