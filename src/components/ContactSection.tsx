import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Building2, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold mb-1">
            Communication & Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-slate-100">
            Contact & Academic Inquiries
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Open to research collaborations, technical discussions, and academic inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="academic-card p-6 space-y-4">
              <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100">
                Direct Channels
              </h3>

              <div className="space-y-3">
                {/* Email Direct */}
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-blue-900">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Direct Email</span>
                      <p className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                        ahujaslock321@gmail.com
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:ahujaslock321@gmail.com"
                    className="text-xs font-mono text-blue-600 dark:text-cyan-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Write</span> <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {/* GitHub */}
                {profileData.socials.github && (
                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">GitHub</span>
                        <p className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                          github.com/SlockAhuja
                        </p>
                      </div>
                    </div>
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-blue-600 dark:text-cyan-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Visit</span> <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* Institution Location */}
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                  <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Affiliation</span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Marwadi University, Rajkot, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Message Form */}
          <div className="lg:col-span-7">
            <div className="academic-card p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="font-sans font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <span>Send a Direct Message</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500">Typical response within 24-48h</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-sans font-bold text-sm text-emerald-800 dark:text-emerald-300">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono">
                    Thank you. You can also contact directly via email at <span className="font-bold">ahujaslock321@gmail.com</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-mono text-slate-700 dark:text-slate-300 block text-[11px]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. Jane Doe / Recruiter"
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-slate-700 dark:text-slate-300 block text-[11px]">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane.doe@university.edu"
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-slate-700 dark:text-slate-300 block text-[11px]">Subject / Topic</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="6G NTN Research / Semiconductor Work / Internship"
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-slate-700 dark:text-slate-300 block text-[11px]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your research inquiry, discussion topic, or collaboration proposal..."
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold font-mono text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
