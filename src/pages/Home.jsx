import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Sparkles, ShieldCheck, Zap, Award } from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';

const universities = [
  {
    id: 'nust',
    name: 'NUST Islamabad',
    category: 'Engineering & Computing',
    weight: '75% NET + 15% HSSC-I + 10% Matric',
    path: '/calculator/nust',
    accent: 'from-blue-500 to-indigo-600',
    badge: 'Most Popular',
  },
  {
    id: 'uet',
    name: 'UET Lahore',
    category: 'Engineering & Technology',
    weight: '33% ECAT + 50% FSc Part-I + 17% Matric',
    path: '/calculator/uet',
    accent: 'from-emerald-500 to-teal-600',
    badge: 'Verified Formula',
  },
  {
    id: 'mdcat',
    name: 'MDCAT (Public Medical)',
    category: 'Medical & Dental (PMDC)',
    weight: '50% MDCAT + 40% FSc Pre-Med + 10% Matric',
    path: '/calculator/mdcat',
    accent: 'from-purple-500 to-pink-600',
    badge: 'PMDC Criteria',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen page-transition py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* 3D WebGL Background Graphics */}
      <HeroCanvas />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20 shadow-inner backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> Next-Gen Three.js 3D Academic Engine
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Aggregate Calculator</span>
        </h1>
        
        <p className="mt-6 text-lg text-slate-400 leading-relaxed">
          Select your target institution below to compute your precise merit percentage instantly with reactive UI calculation models.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Official Weightages</div>
          <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-400" /> 60 FPS Live Rendering</div>
          <div className="flex items-center gap-2"><Award className="w-4 h-4 text-purple-400" /> 4-Decimal Accuracy</div>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {universities.map((uni) => (
          <Link
            key={uni.id}
            to={uni.path}
            className="group relative glass-panel rounded-3xl p-7 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-blue-500 to-purple-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${uni.accent} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase bg-slate-900/90 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                  {uni.badge}
                </span>
              </div>

              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                {uni.category}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                {uni.name}
              </h2>
              
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Weightage Breakdown
                </p>
                <p className="mt-1.5 text-sm font-medium text-slate-300 leading-snug">
                  {uni.weight}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-bold text-blue-400 group-hover:text-blue-300">
              <span>Launch Calculator</span>
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
