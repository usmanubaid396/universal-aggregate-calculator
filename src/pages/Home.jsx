import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';

const universities = [
  {
    id: 'nust',
    name: 'NUST Islamabad',
    category: 'Engineering & Computing',
    weight: '75% NET + 15% FSc + 10% Matric',
    path: '/calculator/nust',
    accent: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'uet',
    name: 'UET Lahore',
    category: 'Engineering & Technology',
    weight: '33% ECAT + 50% FSc Part-I + 17% Matric',
    path: '/calculator/uet',
    accent: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'mdcat',
    name: 'MDCAT (Public Medical)',
    category: 'Medical & Dental (PMDC)',
    weight: '50% MDCAT + 40% FSc + 10% Matric',
    path: '/calculator/mdcat',
    accent: 'from-purple-600 to-violet-700',
  },
];

export default function Home() {
  return (
    <div className="page-transition py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-4 border border-blue-100 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> High Precision Merit Engines
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Universal Aggregate Calculator
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Select your target institution to compute your precise merit percentage instantly using official institutional criteria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {universities.map((uni) => (
          <Link
            key={uni.id}
            to={uni.path}
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uni.accent} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform`}>
                <Calculator className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                {uni.category}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                {uni.name}
              </h2>
              <p className="mt-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
                Weightage Breakdown
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {uni.weight}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600">
              <span>Launch Calculator</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
