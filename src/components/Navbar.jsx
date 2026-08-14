import { Link } from 'react-router-dom';
import { GraduationCap, Calculator } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900">
            Universal<span className="text-blue-600">Aggregate</span>
          </span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
          <Calculator className="w-3.5 h-3.5 text-blue-600" />
          <span>Verified Formulas</span>
        </div>
      </div>
    </header>
  );
}
