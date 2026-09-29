import React, { useState } from 'react';
import { 
  ExternalLink, 
  Radio, 
  Binary, 
  Sigma, 
  Atom, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle, 
  ShieldX, 
  Sparkles, 
  Sprout, 
  Cpu, 
  CircuitBoard,
  Droplet,
  Plane,
  ScanLine,
  Magnet,
  Footprints,
  Volume2
} from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../data/projects';

export const MajorProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeTrustScore, setActiveTrustScore] = useState<number>(0.92);

  const getDecisionState = (score: number) => {
    if (score >= 0.85) return { state: 'ALLOW', color: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800', icon: CheckCircle2, desc: 'Normal Operations Permitted' };
    if (score >= 0.60) return { state: 'MONITOR', color: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800', icon: AlertCircle, desc: 'Elevated Logging & Rate Limiting' };
    if (score >= 0.35) return { state: 'ISOLATE', color: 'text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800', icon: ShieldAlert, desc: 'Restricted Sandboxed VLAN' };
    return { state: 'REVOKE', color: 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800', icon: ShieldX, desc: 'Device Key Revoked on Ledger' };
  };

  const decision = getDecisionState(activeTrustScore);
  const DecisionIcon = decision.icon;

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'communications', label: '6G & NTN' },
    { id: 'scientific-computing', label: 'Scientific Computing' },
    { id: 'quantum', label: 'Quantum AI' },
    { id: 'ai', label: 'AI & Systems' },
    { id: 'vlsi', label: 'Semiconductor / VLSI' },
    { id: 'hardware', label: 'Hardware & Circuits' },
    { id: 'iot', label: 'IoT Work' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const getHardwareIcon = (id: string) => {
    switch (id) {
      case 'smart-pot-iot': return <Droplet className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'soil-analysis-drone-concept': return <Plane className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'handheld-soil-scanner': return <ScanLine className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'magnetic-roller-load-transfer': return <Magnet className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'pedometer-circuit': return <Footprints className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'mosquito-repellent-circuit': return <Volume2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      default: return <CircuitBoard className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <section id="work" className="py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Research, Engineering & Software
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Selected Work
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Technical projects, computational research, hardware prototypes, and empirical evaluations across multiple domains.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Selected Work List */}
        <div className="space-y-8">
          
          {/* Project 1: 6G NTN AI Resource Management */}
          {filteredProjects.find(p => p.id === '6g-ntn-resource-management') && (
            <div className="academic-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-blue-900">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Communications & 6G NTN</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      AI-Enabled Resource Management for NTN Integrated 6G Communication Systems
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                  Accepted — IEEE ACROSET 2026
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                AI-enabled resource management for Non-Terrestrial Network (NTN) integrated 6G communication systems. Formulates predictive resource scheduling across high-mobility LEO satellite constellations and terrestrial base stations to minimize end-to-end packet transmission latency and mitigate Doppler shifts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">NETWORK DOMAIN</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">6G NTN Cellular Links</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">METHODOLOGY</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Predictive AI Power & Spectrum</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">STATUS</span>
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold">Accepted IEEE ACROSET 2026</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {['AI', '6G', 'NTN', 'Wireless Communications', 'Resource Management'].map(t => (
                    <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://slockahuja.github.io/AI_Based_resource_management/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-semibold transition-colors"
                >
                  <span>Interactive Demonstration</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Project 2: Exponential Cubic B-Spline DQM */}
          {filteredProjects.find(p => p.id === 'exponential-bspline-dqm') && (
            <div className="academic-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                    <Binary className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Scientific Computing</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      Exponential Cubic B-Spline DQM for Multidimensional PDEs
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  Research Work
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Numerical investigation of multidimensional convection-diffusion equations using exponential cubic B-splines, differential quadrature methods (DQM) and Strong Stability Preserving Runge-Kutta (SSP-RK54) time integration. Addresses boundary layer oscillations in stiff convection-dominated regimes with an adaptive p-method.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">SPATIAL SCHEME</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Exponential Cubic B-Spline DQM</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">TIME INTEGRATION</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">SSP-RK54 (5-Stage, 4th Order)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">VALIDATION</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">2D & 3D Error Norm Analysis</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {['Exponential Cubic B-Spline', 'Differential Quadrature Method', 'SSP-RK54', '2D PDE', '3D PDE', 'Adaptive p-method', 'Error Analysis'].map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 3: PINNs */}
          {filteredProjects.find(p => p.id === 'pinn-fisher-siren') && (
            <div className="academic-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                    <Sigma className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Scientific Machine Learning</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      Physics-Informed Neural Networks for Nonlinear Reaction-Diffusion
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Research Work
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Research and experimentation involving physics-informed neural networks (PINNs) and Sinusoidal Representation Networks (SIREN) for differential equations and scientific machine learning. Evaluates GPU-accelerated automatic differentiation for solving nonlinear Fisher reaction-diffusion equations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">ACTIVATION</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">SIREN (Periodic Sine)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">TARGET EQUATION</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Nonlinear Fisher Wave</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">OPTIMIZATION</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">GPU Autograd Residuals</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {['PINNs', 'SIREN', 'Numerical PDEs', 'GPU Acceleration', 'Scientific Machine Learning'].map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 4: Quantum AI & Smart-City Security */}
          {filteredProjects.find(p => p.id === 'quantum-ai-blockchain-security') && (
            <div className="academic-card p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900">
                    <Atom className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Quantum Machine Learning</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      Quantum AI & Smart-City Security Framework
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Technical & Research Work
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                A framework integrating Variational Quantum Circuits (VQC) with a blockchain ledger for adaptive trust scoring and anomaly mitigation in smart city IoT systems.
              </p>

              {/* Architecture Pipeline Flow */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                  System Architecture Flow:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center font-mono text-xs">
                  {['IoT Data', 'Quantum AI', 'Threat Prob', 'Blockchain Layer', 'Dynamic Trust', 'Adaptive Decision'].map((step, idx) => (
                    <div key={step} className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <span className="text-[10px] text-slate-400 block">{idx + 1}</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Trust Simulator */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                    Interactive Trust Score Simulator:
                  </span>
                  <div className={`px-3 py-1 rounded-md border text-xs font-mono font-bold flex items-center gap-1.5 ${decision.color}`}>
                    <DecisionIcon className="w-3.5 h-3.5" />
                    <span>POLICY: {decision.state}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span>Trust Score: {(activeTrustScore * 100).toFixed(0)}%</span>
                    <span>{decision.desc}</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.01"
                    value={activeTrustScore}
                    onChange={(e) => setActiveTrustScore(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="grid grid-cols-4 text-center font-mono text-[10px] text-slate-500">
                    <span>REVOKE (&lt;0.35)</span>
                    <span>ISOLATE (0.35-0.60)</span>
                    <span>MONITOR (0.60-0.85)</span>
                    <span>ALLOW (&gt;0.85)</span>
                  </div>
                </div>
              </div>

              {/* Benchmark Results */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  VQC-8q-L3 Benchmark Details:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">QUBITS / LAYERS</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">8 Qubits • 3 Layers</span>
                  </div>
                  <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">PARAMETERS</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">49 Trainable Weights</span>
                  </div>
                  <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">TEST ACCURACY</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">98.67% (1,480/1,500)</span>
                  </div>
                  <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block">PCA RETENTION</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">92.11% (8 Components)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project 5: EnhanceX */}
          {filteredProjects.find(p => p.id === 'enhancex-ai-library') && (
            <div className="academic-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-blue-900">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Computer Vision & Inference</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      EnhanceX — AI Video & Image Enhancement Library
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Software Project
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                A software project exploring AI-based video and image enhancement techniques including stabilization, super-resolution, denoising and frame interpolation. Designed for high-throughput inference with compact neural architectures and GPU acceleration.
              </p>

              {/* Technical Model Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">MODEL CODE</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">EnhanceX-IR-1</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">BACKBONE</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">proposed_compact_naf_v0</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">CHANNELS & BLOCKS</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">32 Width • 4 NAF Blocks</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">PARAMETERS & SIZE</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">17,379 (~0.0673 MB)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {['C++', 'CUDA', 'Python', 'ONNX', 'TensorRT', 'OpenCV', 'PyTorch'].map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 6: Farmer Friend AI */}
          {filteredProjects.find(p => p.id === 'farmer-friend-ai') && (
            <div className="academic-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Applied AI & Agritech</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      Farmer Friend AI — Decision-Support Concept
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Reported Experiment Results
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                An AI-assisted agricultural decision-support concept combining structured agricultural data, deterministic rules, machine learning and natural-language explanations.
              </p>

              {/* Reported Experiment Results */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">AUGMENTED DATASET</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">10,010 Samples</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">CROP RECOMMENDATION ACCURACY</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">98.79%</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block">YIELD MODEL FIT (R²)</span>
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold">0.9973 R²</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span className="text-slate-500 font-semibold block text-[10px] uppercase mb-1">Dataset Fields:</span>
                <span>Farm ID, Soil pH, Soil Moisture, Temperature, Rainfall, Crop Type, Fertilizer Usage, Pesticide Usage, Crop Yield, Sustainability Score</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Joblib', 'FastAPI', 'React', 'n8n', 'ESP32/NodeMCU'].map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 7: Semiconductor & VLSI */}
          {filteredProjects.find(p => p.id === 'open-source-eda-cmos-vlsi') && (
            <div className="academic-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-900">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Semiconductor & Silicon</span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-slate-100">
                      Semiconductor & VLSI Design with Open-Source EDA
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Published in INFOMATRIX 2025, Vol. 4
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Explores physical CMOS layout design, digital logic cells (SR latches, NAND gates, inverter chains), and utilizing open-source Electronic Design Automation (EDA) toolchains to broaden access to semiconductor training.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {['CMOS Design', 'VLSI', 'Microwind', 'Open-source EDA', 'Digital Circuits', 'CMOS Logic', 'SR Latch', 'Semiconductor Engineering'].map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hardware & IoT Work Grid */}
          {(selectedCategory === 'all' || selectedCategory === 'hardware' || selectedCategory === 'iot') && (
            <div className="space-y-4 pt-4">
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">
                  Physical Systems & Electronics
                </span>
                <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-slate-100">
                  Hardware & IoT Work
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsData.filter(p => p.category === 'hardware' || p.category === 'iot').map((item) => (
                  <div key={item.id} className="academic-card p-5 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          {getHardwareIcon(item.id)}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {item.typeLabel}
                        </span>
                      </div>

                      <h4 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
