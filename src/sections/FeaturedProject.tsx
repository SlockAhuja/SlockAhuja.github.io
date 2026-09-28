
import { GithubIcon } from '../components/Icons';

export const FeaturedProject = () => {
  return (
    <section id="projects" className="py-24 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Project Laboratory</h2>
        
        <div className="bg-[#0A1128] border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="text-xs font-mono text-cyan-400 mb-4 uppercase tracking-wider">Featured Project</div>
              <h3 className="text-4xl font-bold text-white mb-6">EnhanceX</h3>
              <p className="text-slate-400 mb-6 text-lg">
                An advanced AI video and image enhancement pipeline capable of stabilization, super-resolution, denoising, and frame interpolation utilizing high-performance hardware acceleration.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['C++', 'CUDA', 'ONNX', 'TensorRT', 'Python'].map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-300 font-mono">{t}</span>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
                <GithubIcon className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#03060B] rounded-xl border border-white/5 p-6 flex flex-col items-center justify-center gap-4">
                 <div className="text-center font-mono text-slate-500 text-sm mb-2">Technical Pipeline</div>
                 
                 <div className="w-full flex items-center justify-between">
                   <div className="w-24 h-16 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-xs text-slate-400 font-mono">Raw Input</div>
                   <div className="flex-1 h-px bg-gradient-to-r from-slate-700 via-cyan-500/50 to-slate-700 mx-2" />
                   <div className="w-32 h-20 bg-blue-900/30 border border-blue-500/50 rounded flex flex-col items-center justify-center text-xs text-cyan-400 font-bold font-mono">
                     <span>CUDA + TensorRT</span>
                     <span className="text-[10px] font-normal text-blue-300 mt-1">Inference Engine</span>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-slate-700 via-emerald-500/50 to-slate-700 mx-2" />
                   <div className="w-24 h-16 bg-emerald-900/20 border border-emerald-500/30 rounded flex items-center justify-center text-xs text-emerald-400 font-mono">Enhanced</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
