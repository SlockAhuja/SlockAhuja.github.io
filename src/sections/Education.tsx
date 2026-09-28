
export const Education = () => {
  return (
    <section className="py-20 bg-[#050B14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Education</h2>
        <div className="bg-[#0A1128] border border-white/10 p-8 rounded-2xl inline-block text-left max-w-2xl w-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">Marwadi University</h3>
            <span className="text-cyan-400 font-mono text-sm">Graduation: 2028</span>
          </div>
          <p className="text-lg text-slate-300 font-medium mb-4">B.Tech — Information and Communication Technology</p>
          <p className="text-slate-400 text-sm">Focus: Artificial Intelligence, Communication Systems, Embedded Hardware, VLSI.</p>
        </div>
      </div>
    </section>
  );
};
