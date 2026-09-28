
export const Publications = () => {
  return (
    <section className="py-20 bg-[#03060B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Publications</h2>
        <div className="border-l border-white/10 pl-6 space-y-8">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#03060B]" />
            <h4 className="text-lg font-bold text-white">AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems</h4>
            <p className="text-slate-400 text-sm mt-1">Authors: Slock Ahuja, et al.</p>
            <p className="text-slate-500 text-sm mt-1">Venue: IEEE ACROSET 2026</p>
            <span className="inline-block mt-3 px-2 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded">Accepted / Presented</span>
          </div>
        </div>
      </div>
    </section>
  );
};
