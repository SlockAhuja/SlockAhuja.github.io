import React from 'react';
import { 
  Sparkles, 
  Zap, 
  Box
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon } from './Icons';

export const EnhanceXSection: React.FC = () => {
  const capabilities = [
    { name: 'Video Stabilization', desc: 'Smoothing camera jitters and high-frequency motion perturbations.' },
    { name: 'Super-Resolution', desc: 'High-frequency detail hallucination and edge reconstruction.' },
    { name: 'Neural Denoising', desc: 'Zero-shot and trained artifact reduction in low-light environments.' },
    { name: 'Frame Interpolation', desc: 'Motion-compensated temporal frame synthesis for high FPS video.' },
    { name: 'Image Enhancement', desc: 'Dynamic range enhancement and chromatic aberration correction.' },
    { name: 'GPU Acceleration', desc: 'Optimized CUDA kernels, ONNX Runtime, and TensorRT pipelines.' }
  ];

  const techStack = ['C++', 'CUDA', 'Python', 'ONNX', 'TensorRT', 'OpenCV', 'PyTorch'];

  return (
    <section className="py-24 relative border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Showcase Container */}
        <div className="glass-card p-6 sm:p-12 rounded-3xl relative overflow-hidden border-t-2 border-t-cyan-500">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Open-Source AI Library
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white dark:text-white light:text-slate-950">
                EnhanceX
              </h2>
              <p className="text-sm sm:text-base font-mono font-medium text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                AI Video & Image Enhancement Library
              </p>
            </div>

            {profileData.socials.github && (
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white border border-slate-700 dark:border-slate-700 light:border-slate-300 font-mono text-xs font-semibold hover:border-cyan-500/50 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository Hub</span>
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-8 max-w-4xl">
            EnhanceX is an open-source, performance-critical computer vision library engineered for low-latency visual restoration. Designed for both embedded edge nodes and high-throughput server pipelines, EnhanceX combines compact neural architectures with custom hardware acceleration.
          </p>

          {/* Core Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {capabilities.map((cap) => (
              <div
                key={cap.name}
                className="p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200"
              >
                <div className="flex items-center gap-2 font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm mb-1">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>{cap.name}</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Prototype Architecture Showcase Card: EnhanceX-IR-1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-cyan-500/30 mb-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Box className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Featured Model Architecture: <span className="font-mono text-cyan-400">EnhanceX-IR-1</span>
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 dark:bg-slate-900 light:bg-white px-2.5 py-1 rounded border border-slate-800 dark:border-slate-800 light:border-slate-300">
                Backbone: proposed_compact_naf_v0
              </span>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <span className="text-slate-400 text-[10px] block">CHANNEL WIDTH</span>
                <span className="text-base font-bold text-cyan-400">32 Channels</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <span className="text-slate-400 text-[10px] block">NAF BLOCKS</span>
                <span className="text-base font-bold text-cyan-400">4 Blocks</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <span className="text-slate-400 text-[10px] block">PARAMETER COUNT</span>
                <span className="text-base font-bold text-emerald-400">17,379 Params</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <span className="text-slate-400 text-[10px] block">MODEL SIZE</span>
                <span className="text-base font-bold text-emerald-400">~0.0673 MB</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
              Designed as an ultra-lightweight Nonlinear Activation-Free Network (NAFNet) derivative, enabling near zero-latency restoration on low-power edge microprocessors and embedded GPUs without sacrificing structural PSNR.
            </p>
          </div>

          {/* Technology Direction Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technology Stack Direction:
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
