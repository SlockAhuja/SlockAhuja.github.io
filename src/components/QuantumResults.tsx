import React from 'react';
import { Atom, Cpu, CheckCircle2, BarChart3, Database } from 'lucide-react';
import { quantumResultsData } from '../data/research';

export const QuantumResults: React.FC = () => {
  return (
    <section className="py-20 relative tech-grid-bg border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase tracking-widest">
            Empirical Benchmark Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white dark:text-white light:text-slate-950">
            Quantum AI Experimental Results
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Audited performance of the <span className="font-mono text-cyan-400 font-semibold">{quantumResultsData.architecture}</span> circuit evaluated on cybersecurity telemetry from the Edge-IIoTset benchmark.
          </p>
        </div>

        {/* Primary Metric Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Accuracy Card */}
          <div className="glass-card p-6 rounded-3xl border-t-2 border-t-cyan-400 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Test Accuracy</span>
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-cyan-400">
              {quantumResultsData.testAccuracy}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 font-mono">
              {quantumResultsData.correctClassifications} samples
            </p>
          </div>

          {/* Qubit & Layer Topology */}
          <div className="glass-card p-6 rounded-3xl border-t-2 border-t-purple-400 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Qubit Topology</span>
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <Atom className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-400">
              {quantumResultsData.qubits} Qubits
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 font-mono">
              {quantumResultsData.layers} Variational Entangling Layers
            </p>
          </div>

          {/* Parameter Efficiency */}
          <div className="glass-card p-6 rounded-3xl border-t-2 border-t-indigo-400 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Trainable Weights</span>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-indigo-400">
              {quantumResultsData.parameters}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 font-mono">
              Ultra-compact parameterized ansatz
            </p>
          </div>

          {/* PCA Variance Retained */}
          <div className="glass-card p-6 rounded-3xl border-t-2 border-t-emerald-400 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">PCA Variance</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-extrabold text-emerald-400">
              {quantumResultsData.varianceRetained}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 font-mono">
              24 flow features → 8 components
            </p>
          </div>

        </div>

        {/* Detailed Circuit Architecture & Pipeline Breakdown */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <Database className="w-4 h-4" /> Benchmark Dataset & Feature Extraction
            </div>
            <h3 className="text-xl font-display font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Edge-IIoTset Telemetry Processing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              The benchmark evaluates threat classification on Edge-IIoTset IoT/IIoT network flow traffic. 24 high-dimensional statistical flow features are reduced via Principal Component Analysis (PCA) to 8 orthogonal components, retaining <span className="text-cyan-400 font-mono font-semibold">92.11%</span> cumulative variance before angle-embedding into an 8-qubit quantum register.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {quantumResultsData.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Circuit Visual Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400">
              <span>CIRCUIT MANIFEST</span>
              <span className="text-purple-400">VQC-8q-L3</span>
            </div>

            <div className="space-y-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">State Vector Dimension:</span>
                <span>2^8 = 256 Hilbert Dim</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Ansatz Type:</span>
                <span>Strongly Entangling Layers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Rotational Gates:</span>
                <span>Rx, Ry, Rz (Parameterized)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Entanglement:</span>
                <span>Periodic CNOT Ring</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Measurement:</span>
                <span>Pauli-Z Expectation Values</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 text-[11px] text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Experiment fully audited without data leakage</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
