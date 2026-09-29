import React from 'react';
import { 
  Sprout, 
  Database
} from 'lucide-react';

export const FarmerFriendSection: React.FC = () => {
  const datasetFields = [
    'Farm ID',
    'Soil pH',
    'Soil Moisture (%)',
    'Ambient Temperature (°C)',
    'Rainfall (mm)',
    'Crop Type',
    'Fertilizer Usage (kg/ha)',
    'Pesticide Usage (L/ha)',
    'Crop Yield (tons/ha)',
    'Sustainability Score'
  ];

  const technologies = [
    'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 
    'Joblib', 'FastAPI', 'React', 'n8n', 'ESP32 / NodeMCU'
  ];

  return (
    <section className="py-24 relative tech-grid-bg border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container */}
        <div className="glass-card p-6 sm:p-12 rounded-3xl relative overflow-hidden border-t-2 border-t-emerald-500">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                <Sprout className="w-3.5 h-3.5" /> Intelligent Agritech System
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white dark:text-white light:text-slate-950">
                Farmer Friend AI
              </h2>
              <p className="text-sm sm:text-base font-mono font-medium text-emerald-400 dark:text-emerald-400 light:text-emerald-700">
                Intelligent Multi-Stage Agriculture Decision-Support System
              </p>
            </div>

            <span className="px-3.5 py-1 text-xs font-mono font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Experimental Project Results
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-8 max-w-4xl">
            Farmer Friend AI bridges low-cost field IoT telemetry with deterministic agronomic rules and predictive machine learning models. The system generates high-accuracy crop recommendations and yield estimations, explaining its rationale through contextual natural language synthesis.
          </p>

          {/* Reported Experiment Metrics (Clearly Labeled) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Augmented Dataset Volume
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                10,010 Samples
              </div>
              <span className="text-[11px] font-mono text-emerald-400 mt-1 block">
                Validated cross-field agronomic dataset
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Crop Recommendation Accuracy
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">
                98.79%
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                Random Forest Classifier Evaluation
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Crop Yield Model Fit (R²)
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-cyan-400">
                0.9973 R²
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                High-precision yield regression
              </span>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="p-6 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 mb-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-2">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                Decision Pipeline Architecture Flow
              </span>
              <span className="text-[11px] font-mono text-slate-400">Multi-Stage Inference</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs font-mono">
              {[
                { title: '1. Farmer Data', desc: 'IoT Sensors & Inputs' },
                { title: '2. Data Preproc', desc: 'Outlier & Normalization' },
                { title: '3. Rules Engine', desc: 'Agronomic Constraints' },
                { title: '4. ML Models', desc: 'Random Forest Inference' },
                { title: '5. LLM Explanation', desc: 'Contextual Rationale' },
                { title: '6. Recommendation', desc: 'Actionable Advice' },
              ].map((step) => (
                <div key={step.title} className="p-3 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <div className="text-emerald-400 font-bold text-xs mb-0.5">{step.title}</div>
                  <div className="text-[10px] text-slate-400">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dataset Fields Grid */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Database className="w-4 h-4 text-emerald-400" /> Agronomic Dataset Fields:
            </div>
            <div className="flex flex-wrap gap-2">
              {datasetFields.map((field) => (
                <span
                  key={field}
                  className="px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>

          {/* Technology Stack Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              System Technologies:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-emerald-400 border border-slate-800 dark:border-slate-800 light:border-slate-300"
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
