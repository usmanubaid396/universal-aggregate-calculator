import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Sparkles, ShieldCheck, Zap, Award } from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';

const universities = [
  {
    id: 'nust',
    name: 'NUST',
    category: 'Engineering & Computing',
    path: '/calculator/nust',
    accent: 'from-amber-500 to-amber-700',
    badge: 'Popular',
  },
  {
    id: 'uet',
    name: 'UET',
    category: 'Engineering & Technology',
    path: '/calculator/uet',
    accent: 'from-amber-600 to-yellow-600',
    badge: 'Verified',
  },
  {
    id: 'mdcat',
    name: 'MDCAT',
    category: 'Medical & Dental',
    path: '/calculator/mdcat',
    accent: 'from-yellow-500 to-amber-600',
    badge: 'PMDC',
  },
  {
    id: 'fast',
    name: 'FAST',
    category: 'Computing & Emerging Sciences',
    path: '/calculator/fast',
    accent: 'from-amber-500 to-orange-600',
    badge: 'Computing',
  },
  {
    id: 'giki',
    name: 'GIKI',
    category: 'Engineering Sciences',
    path: '/calculator/giki',
    accent: 'from-yellow-600 to-amber-700',
    badge: 'Test Based',
  },
  {
    id: 'comsats',
    name: 'COMSATS',
    category: 'IT & Sciences',
    path: '/calculator/comsats',
    accent: 'from-amber-400 to-yellow-500',
    badge: 'NTS / NAT',
  },
  {
    id: 'pieas',
    name: 'PIEAS',
    category: 'Applied Sciences',
    path: '/calculator/pieas',
    accent: 'from-amber-600 to-amber-800',
    badge: 'Entry Test',
  },
  {
    id: 'ned',
    name: 'NED',
    category: 'Engineering & Architecture',
    path: '/calculator/ned',
    accent: 'from-yellow-500 to-amber-600',
    badge: 'Test 60%',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen page-transition py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden bg-cream-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      {/* 3D WebGL Background Graphics */}
      <HeroCanvas />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 mb-6 border border-amber-500/20 shadow-inner backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> Universal Aggregate Calculator
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600">Aggregate Calculator</span>
        </h1>
        
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Select an institution below to compute your precise merit percentage instantly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-600" /> Official Weightages</div>
          <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-600" /> Live Calculations</div>
          <div className="flex items-center gap-2"><Award className="w-4 h-4 text-amber-600" /> High Accuracy</div>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {universities.map((uni) => (
          <Link
            key={uni.id}
            to={uni.path}
            className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-amber-100 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-amber-500 to-yellow-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${uni.accent} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200">
                  {uni.badge}
                </span>
              </div>

              <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                {uni.category}
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight group-hover:text-amber-700 transition-colors">
                {uni.name}
              </h2>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-amber-600 group-hover:text-amber-700">
              <span>Calculate</span>
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
