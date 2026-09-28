
export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#050B14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
        <div className="space-y-12">
          {[
            { role: 'Research Internship', org: 'DRDO', desc: 'Conducted advanced research in communication systems and hardware integration.' },
            { role: 'Campus Ambassador (Gold Tier — Top 10%)', org: 'eDC IIT Delhi, BECON 2026', desc: 'Promoted entrepreneurial initiatives and represented the institution at a national level.' },
            { role: 'Chair', org: 'IEEE ComSoc Student Branch Chapter, Marwadi University', desc: 'Led student initiatives and technical workshops.' },
            { role: 'Student Ambassador, Region 10', org: 'IEEE Communications Society', desc: 'Regional leadership and outreach.' }
          ].map((e, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
              <div className="md:w-1/3 text-cyan-400 font-bold text-lg">{e.org}</div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-white mb-2">{e.role}</h4>
                <p className="text-slate-400">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
