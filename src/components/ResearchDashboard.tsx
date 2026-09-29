import React, { useState } from 'react';
import { 
  Network, 
  ExternalLink
} from 'lucide-react';

interface MatrixNode {
  id: string;
  discipline: string;
  project: string;
  experiment: string;
  publication: string;
  software: string;
  demoStatus: string;
  demoUrl?: string;
}

export const ResearchDashboard: React.FC = () => {
  const [activeRow, setActiveRow] = useState<string>('ntn');

  const matrixData: MatrixNode[] = [
    {
      id: 'ntn',
      discipline: '6G & NTN Communications',
      project: 'AI-Based NTN Resource Management',
      experiment: 'Constellation Doppler & Handover Scheduling',
      publication: 'Accepted at IEEE ACROSET 2026',
      software: 'Python / Orbit Simulation',
      demoStatus: 'Live Interactive Web Demo',
      demoUrl: 'https://slockahuja.github.io/AI_Based_resource_management/'
    },
    {
      id: 'quantum',
      discipline: 'Quantum AI & Cybersecurity',
      project: 'Adaptive Quantum Zero-Trust Smart Cities',
      experiment: 'VQC-8q-L3 on Edge-IIoTset (98.67% Acc)',
      publication: 'Empirical Research Framework',
      software: 'Parameterized QML & Blockchain Ledger',
      demoStatus: 'Simulated State Machine'
    },
    {
      id: 'pinn',
      discipline: 'Physics-Informed Neural Networks',
      project: 'Nonlinear Fisher Reaction-Diffusion PINN',
      experiment: 'SIREN Periodic Sine Activation Residuals',
      publication: 'High-Precision Audited Direction',
      software: 'PyTorch / CUDA Autograd Engine',
      demoStatus: 'GPU Numerical Audits'
    },
    {
      id: 'dqm',
      discipline: 'Scientific Numerical PDEs',
      project: 'Adaptive Exponential B-Spline DQM',
      experiment: '2D & 3D Convection-Diffusion Convergence',
      publication: 'Numerical Mathematics Research',
      software: 'MATLAB / SSP-RK54 Time Integrator',
      demoStatus: 'Error Norm Verification'
    },
    {
      id: 'vlsi',
      discipline: 'Semiconductor & VLSI',
      project: 'CMOS Logic Synthesis & Open EDA',
      experiment: 'SR Latch & NAND Cell Layout DRC',
      publication: 'INFOMATRIX Magazine 2025, Vol. 4',
      software: 'Microwind & Open-Source EDA Toolchains',
      demoStatus: 'Physical Silicon Layouts'
    },
    {
      id: 'enhancex',
      discipline: 'Computer Vision & Inference',
      project: 'EnhanceX AI Video/Image Restoration',
      experiment: 'EnhanceX-IR-1 Compact NAF Model (~0.067 MB)',
      publication: 'Open-Source AI Library',
      software: 'C++, CUDA, TensorRT, OpenCV',
      demoStatus: 'Library Repository Hub'
    },
    {
      id: 'farmer',
      discipline: 'Applied Agritech AI & IoT',
      project: 'Farmer Friend AI Advisory Engine',
      experiment: '10,010 Samples (98.79% Rec Acc, 0.9973 R²)',
      publication: 'Agritech Multi-Stage Architecture',
      software: 'Random Forest, FastAPI, React, n8n',
      demoStatus: 'Operational Decision Matrix'
    }
  ];

  const selectedNode = matrixData.find((m) => m.id === activeRow) || matrixData[0];

  return (
    <section className="py-24 relative tech-grid-bg border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <Network className="w-3.5 h-3.5" /> Interactive Research Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white dark:text-white light:text-slate-950">
            Research Architecture Dashboard
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Trace how theoretical research disciplines map into projects, audited experiments, peer-reviewed publications, and deployed software.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl space-y-8">
          
          {/* Row Navigation Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {matrixData.map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveRow(node.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  activeRow === node.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/40'
                }`}
              >
                {node.discipline}
              </button>
            ))}
          </div>

          {/* Matrix Pipeline Flow for Selected Discipline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 font-mono text-xs">
            
            {/* Step 1: Discipline */}
            <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-[10px] text-slate-400 block mb-1">1. RESEARCH AREA</span>
              <p className="text-cyan-400 font-bold text-xs">{selectedNode.discipline}</p>
            </div>

            {/* Step 2: Project */}
            <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-[10px] text-slate-400 block mb-1">2. CORE PROJECT</span>
              <p className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-xs">{selectedNode.project}</p>
            </div>

            {/* Step 3: Experiment */}
            <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-[10px] text-slate-400 block mb-1">3. EXPERIMENT</span>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs">{selectedNode.experiment}</p>
            </div>

            {/* Step 4: Publication */}
            <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-[10px] text-slate-400 block mb-1">4. DISSEMINATION</span>
              <p className="text-indigo-400 font-semibold text-xs">{selectedNode.publication}</p>
            </div>

            {/* Step 5: Software */}
            <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-[10px] text-slate-400 block mb-1">5. SOFTWARE & TOOL</span>
              <p className="text-emerald-400 font-semibold text-xs">{selectedNode.software}</p>
            </div>

            {/* Step 6: Demo */}
            <div className="p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">6. DEMO STATUS</span>
                <p className="text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs font-semibold">{selectedNode.demoStatus}</p>
              </div>
              {selectedNode.demoUrl && (
                <a
                  href={selectedNode.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px] font-bold"
                >
                  <span>Open Live Demo</span> <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

          </div>

          {/* Full Pipeline Table */}
          <div className="overflow-x-auto pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400">
                  <th className="pb-3 font-semibold">Discipline</th>
                  <th className="pb-3 font-semibold">Project & Scope</th>
                  <th className="pb-3 font-semibold">Dissemination</th>
                  <th className="pb-3 font-semibold">Validation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 dark:divide-slate-800/60 light:divide-slate-200">
                {matrixData.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => setActiveRow(row.id)}
                    className={`cursor-pointer transition-colors ${
                      activeRow === row.id
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'hover:bg-slate-900/40 dark:hover:bg-slate-900/40 light:hover:bg-slate-50 text-slate-300 dark:text-slate-300 light:text-slate-700'
                    }`}
                  >
                    <td className="py-3 pr-4 font-semibold">{row.discipline}</td>
                    <td className="py-3 pr-4 text-slate-200 dark:text-slate-200 light:text-slate-800">{row.project}</td>
                    <td className="py-3 pr-4 text-slate-400">{row.publication}</td>
                    <td className="py-3 text-emerald-400 font-semibold">{row.demoStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
