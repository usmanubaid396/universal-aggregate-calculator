import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles, BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Universal<span className="text-blue-400">Aggregate</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 ml-4">
            <Link to="/blogs" className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Blogs</span>
            </Link>
          </nav>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700/80 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>60 FPS Optimized Engine</span>
        </div>
      </div>
    </header>
  );
}
