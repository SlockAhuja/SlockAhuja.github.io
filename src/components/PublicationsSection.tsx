import React, { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Quote
} from 'lucide-react';
import { publicationsData } from '../data/publications';
import type { PublicationItem } from '../data/publications';

export const PublicationsSection: React.FC = () => {
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);
  const [selectedBibtex, setSelectedBibtex] = useState<{ title: string; bibtex: string } | null>(null);

  const handleCopyBibtex = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtexId(id);
    setTimeout(() => setCopiedBibtexId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Academic Dissemination
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Publications & Research Papers
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Academic manuscripts, peer-reviewed conference articles, and published technical papers.
          </p>
        </div>

        {/* Academic Publication List */}
        <div className="space-y-4">
          {publicationsData.map((pub: PublicationItem, idx: number) => (
            <div
              key={pub.id}
              className="academic-card p-5 sm:p-6 flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-800 dark:text-slate-200">[{idx + 1}]</span>
                  <span className="font-semibold text-blue-600 dark:text-cyan-400">{pub.year}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {pub.type}
                  </span>
                  <span>•</span>
                  <span>{pub.venue}</span>
                </div>

                <h3 className="font-sans font-bold text-base text-slate-900 dark:text-slate-100">
                  {pub.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-3xl">
                  {pub.abstract}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {pub.topics.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap md:flex-col gap-2 shrink-0 pt-2 md:pt-0">
                {pub.demoUrl && (
                  <a
                    href={pub.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-semibold transition-colors"
                  >
                    <span>Interactive Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {pub.bibtex && (
                  <button
                    onClick={() => setSelectedBibtex({ title: pub.title, bibtex: pub.bibtex! })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-xs transition-colors"
                  >
                    <Quote className="w-3 h-3 text-slate-400" />
                    <span>Cite (BibTeX)</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* BibTeX Citation Modal */}
      {selectedBibtex && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-xl w-full shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Quote className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>BibTeX Citation Entry</span>
              </span>
              <button
                onClick={() => setSelectedBibtex(null)}
                className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
              >
                Close (ESC)
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono line-clamp-1">
              {selectedBibtex.title}
            </p>

            <pre className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-cyan-300 font-mono text-xs overflow-x-auto">
              {selectedBibtex.bibtex}
            </pre>

            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={() => handleCopyBibtex(selectedBibtex.title, selectedBibtex.bibtex)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                {copiedBibtexId === selectedBibtex.title ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
