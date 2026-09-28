
export const TechnologyConstellation = () => {
  return (
    <section className="py-24 bg-[#03060B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-12">Technology Constellation</h2>
        <div className="relative h-96 w-full max-w-3xl mx-auto flex items-center justify-center">
          <div className="absolute inset-0 border-t border-b border-white/5 rounded-[100%] opacity-20" />
          
          <div className="z-10 bg-cyan-500/20 border border-cyan-400 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <span className="text-white font-bold tracking-widest uppercase">SLOCK AHUJA</span>
          </div>
          
          {/* Static representation for performance */}
          {[
            { label: 'AI', top: '20%', left: '20%' },
            { label: '6G NTN', top: '20%', right: '20%' },
            { label: 'Embedded', bottom: '20%', left: '25%' },
            { label: 'VLSI', bottom: '20%', right: '25%' },
            { label: 'Quantum AI', top: '50%', left: '10%' },
            { label: 'Research', top: '50%', right: '10%' },
            { label: 'Web', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
          ].map((node, i) => (
            <div key={i} className="absolute text-cyan-200 font-mono text-xs border border-white/10 px-3 py-1 bg-[#0A1128] rounded-full hover:bg-cyan-900/50 hover:border-cyan-400 transition-colors cursor-default" style={node}>
              {node.label}
            </div>
          ))}
          
          {/* SVG lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
             <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#00D1FF" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#00D1FF" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};
