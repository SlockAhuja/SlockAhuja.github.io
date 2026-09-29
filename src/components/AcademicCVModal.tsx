import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Crown, 
  Code2
} from 'lucide-react';
import { profileData } from '../data/profile';
import { publicationsData } from '../data/publications';
import { patentsData } from '../data/patents';
import { achievementsData } from '../data/achievements';
import { skillCategories } from '../data/skills';

interface AcademicCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicCVModal: React.FC<AcademicCVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
CURRICULUM VITAE — SLOCK AHUJA
ICT Engineering Student • Researcher • Developer
Email: ahujaslock321@gmail.com | GitHub: https://github.com/SlockAhuja
Location: Rajkot, Gujarat, India

ACADEMIC BACKGROUND
B.Tech in Information and Communication Technology (ICT)
Marwadi University, Rajkot, Gujarat, India
Expected Graduation: 2028 | Current Semester: 5th Semester

INTERNSHIP & RESEARCH EXPOSURE
- Internship — Defence Research and Development Organisation (DRDO)
  Technical and research exposure through an internship with the Defence Research and Development Organisation.

PUBLICATIONS & RESEARCH PAPERS
1. "AI-Enabled Resource Management for NTN Integrated 6G Communication Systems" — Accepted at IEEE ACROSET 2026
2. "Future of VLSI Design Using Open-Source EDA Tools" — INFOMATRIX Magazine 2025, Vol. 4
3. "Physics-Informed Neural Network Solution of the Nonlinear Fisher Reaction-Diffusion Equation: An Audited High-Precision SIREN Framework" — Research Work

PATENT APPLICATIONS
1. "Magnetic Roller-Based Load Transfer System" — Application ID: MU_1943 (2025)

LEADERSHIP & RECOGNITION
- IEEE Region 10 Ambassador (IEEE Region 10 • 2026)
- Chairperson — IEEE ComSoc Gujarat Student Chapter (2026)
- Student Member — IEEE Communications Society (ComSoc • 2026)
- Campus Ambassador (Top 10% — Gold Tier) — BECON 2026, IIT Delhi
- Letter of Recommendation — Entrepreneurship Development Cell (EDC • 2025–2026)
- ISRO Robotics Challenge — NakshatraX Participant (2025–2026)
- Robo Fest Participant (2025)
- Tata Imagination Challenge Participant (2025)
- Startup & Innovation 4.0 Participant (2025–2026)

SELECTED WORK & TECHNICAL PROJECTS
- AI-Enabled Resource Management for NTN 6G (Interactive Web Simulation Deployed)
- Exponential Cubic B-Spline DQM for Multidimensional Convection-Diffusion Equations
- Quantum AI & Smart-City Security (VQC-8q-L3 on Edge-IIoTset: 98.67% Test Acc)
- EnhanceX AI Video & Image Enhancement Library (EnhanceX-IR-1, 17,379 parameters)
- Farmer Friend AI Agritech Decision-Support Concept (10,010 samples, 98.79% crop acc)
- Semiconductor & VLSI Design using Open-Source EDA (Microwind, SR Latch, NAND logic)
- Smart Pot IoT Closed-Loop Irrigation (ESP32, Capacitive Moisture Sensor, Pump)
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Action Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
              {profileData.monogram}
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                Academic Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Engineering & Research Dossier</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs font-mono flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content (Academic Format) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-800 dark:text-slate-200 print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 space-y-1">
            <h1 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-900 dark:text-slate-100">
              {profileData.name}
            </h1>
            <p className="text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400">
              {profileData.headline}
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-3 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
              <span>{profileData.institution}</span>
              <span>•</span>
              <span>{profileData.degree}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 font-bold">
              <GraduationCap className="w-3.5 h-3.5" /> Academic Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Bachelor of Technology in Information and Communication Technology (ICT)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Marwadi University, Rajkot, Gujarat, India</p>
              </div>
              <div className="text-right font-mono text-xs text-slate-500">
                <span>Class of 2028 (Expected)</span>
                <p className="text-slate-600 dark:text-slate-400">5th Semester</p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 font-bold">
              <BookOpen className="w-3.5 h-3.5" /> Publications & Research Papers
            </h2>
            <div className="space-y-2 text-xs">
              {publicationsData.map((pub, idx) => (
                <div key={pub.id} className="space-y-0.5">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {idx + 1}. {pub.title}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="text-blue-600 dark:text-cyan-400 font-medium">{pub.venue}</span> ({pub.year}) — <span>{pub.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Patents */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> Patent Applications
            </h2>
            <div className="space-y-1.5 text-xs">
              {patentsData.map((pat) => (
                <div key={pat.id}>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {pat.title}
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    Application ID: <span className="text-amber-700 dark:text-amber-300 font-medium">{pat.applicationNumber}</span> • Year: {pat.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Honors */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 font-bold">
              <Crown className="w-3.5 h-3.5" /> Leadership & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {achievementsData.map((ach) => (
                <div key={ach.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{ach.title}</p>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-cyan-400">{ach.organization}{ach.year ? ` • ${ach.year}` : ''}</p>
                  {ach.tier && <p className="text-amber-700 dark:text-amber-300 font-mono text-[10px] font-bold">{ach.tier}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-1 font-bold">
              <Code2 className="w-3.5 h-3.5" /> Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="space-y-0.5">
                  <span className="text-slate-500 text-[10px] font-bold uppercase">{cat.name}:</span>
                  <p className="text-slate-800 dark:text-slate-200 text-[11px]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
