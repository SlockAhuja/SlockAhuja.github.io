import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const FeaturedResearch = () => {
  return (
    <section className="py-24 bg-[#03060B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-8">Featured Research</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0A1128] to-[#050B14] rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 w-max border border-blue-500/20">
                IEEE ACROSET 2026
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                This research addresses the complex challenge of resource allocation in 6G architectures integrating Low Earth Orbit (LEO) satellites and ground networks. By leveraging advanced machine learning, we optimize spectrum utilization and minimize latency for ground users, establishing a framework for global connectivity.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                <button className="inline-flex items-center px-5 py-2.5 bg-white text-navy-900 text-sm font-bold rounded hover:bg-slate-200 transition-colors">
                  View Research
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
                <button className="inline-flex items-center px-5 py-2.5 bg-transparent border border-white/20 text-white text-sm font-bold rounded hover:bg-white/5 transition-colors">
                  Interactive Demo
                </button>
              </div>
            </div>
            
            <div className="relative min-h-[300px] lg:min-h-full bg-[#050B14] border-l border-white/5 flex items-center justify-center overflow-hidden p-8">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050B14] to-[#050B14]" />
               
               {/* Technical Visualization */}
               <div className="relative w-full max-w-sm flex flex-col items-center gap-6">
                 {/* LEO Satellite layer */}
                 <div className="flex justify-center gap-12 w-full">
                   <div className="w-12 h-6 bg-slate-800 rounded border border-slate-600 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-bounce" style={{animationDuration: '4s'}}>
                     <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                   </div>
                   <div className="w-12 h-6 bg-slate-800 rounded border border-slate-600 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                     <div className="w-2 h-2 bg-blue-400 rounded-full" />
                   </div>
                 </div>
                 
                 {/* Connection lines */}
                 <div className="h-16 w-px bg-gradient-to-b from-cyan-400/50 to-blue-500/50 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping" />
                 </div>
                 
                 {/* AI Node */}
                 <div className="w-24 h-12 bg-[#121F45] rounded border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10">
                   <span className="text-xs font-mono text-cyan-400 font-bold">AI Allocation</span>
                 </div>
                 
                 {/* Connection lines */}
                 <div className="h-16 w-full flex justify-around relative">
                   <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-emerald-400/50 -rotate-12" />
                   <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-emerald-400/50" />
                   <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-emerald-400/50 rotate-12" />
                 </div>
                 
                 {/* Ground layer */}
                 <div className="flex justify-between w-full px-4">
                   <div className="w-4 h-4 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                   <div className="w-4 h-4 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                   <div className="w-4 h-4 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center"><div className="w-1 h-1 bg-emerald-400 rounded-full" /></div>
                 </div>
                 <div className="w-full h-px bg-emerald-500/30 mt-2" />
                 <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase absolute -bottom-6">Ground Segment</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};