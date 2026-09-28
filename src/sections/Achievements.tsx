
export const Achievements = () => {
  return (
    <section className="py-20 bg-[#0A1128] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Achievements & Recognition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'IEEE ACROSET 2026 Author/Presenter',
            'eDC IIT Delhi Gold Tier (Top 10%)',
            'DRDO Research Internship',
            'Patent Filed: Automated Load Carrier System',
            'Startup & Innovation 4.0 Participant',
            'IEEE ComSoc Region 10 Leadership'
          ].map((a, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center">
              <div className="w-2 h-2 bg-gold-400 rounded-full mr-3" />
              <span className="text-slate-200 font-medium text-sm">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
