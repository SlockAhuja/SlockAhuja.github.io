
import { Mail } from 'lucide-react';
import { GithubIcon as CustomGit, LinkedinIcon as CustomLinked } from '../components/Icons';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#050B14] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-white rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-white rounded-full" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Build Something Meaningful.</h2>
        <p className="text-xl text-slate-400 mb-12">
          Open to research collaborations, technical projects, IEEE initiatives, and internship opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:ahujaslock321@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white text-navy-900 font-bold rounded hover:bg-slate-200 transition-colors flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            ahujaslock321@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/slock-ahuja-32839b315" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center">
            <CustomLinked className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a href="https://github.com/SlockAhuja" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center">
            <CustomGit className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
