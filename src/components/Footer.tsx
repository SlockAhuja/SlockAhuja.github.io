import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-[#03060B] py-12 border-t border-white/5 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Slock Ahuja</h3>
            <p className="text-slate-400 text-sm mb-1">ICT Engineering • AI • Communication Systems • Embedded Technology</p>
            <p className="text-slate-500 text-sm">Marwadi University, Rajkot, Gujarat, India</p>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="flex space-x-4 mb-4 justify-center md:justify-end">
              <a href="https://github.com/SlockAhuja" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/slock-ahuja-32839b315" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Slock Ahuja. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};