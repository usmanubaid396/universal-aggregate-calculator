import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    slug: 'nust-net-2026-series-4-registration-extended',
    title: 'NUST NET 2026 Series 4 Registration Extended — Last Chance',
    description: 'Registration deadline extended to June 18, 2026. Learn about test dates, CBNET vs PBNET formats.'
  },
  {
    slug: 'nust-net-2026-merit-list-predictions-engineering',
    title: 'NUST NET 2026 Merit List Predictions — Engineering Closing Merit',
    description: 'Analysis of NUST NET merit trends, seat matrix, and closing merit predictions.'
  },
  {
    slug: 'nust-vs-other-engineering-universities-2026',
    title: 'NUST vs Other Engineering Universities — Why NET Dominates',
    description: 'Compare NUST NET with ECAT, GIKI, and FAST tests and weightage criteria.'
  },
  {
    slug: 'nust-net-2026-test-pattern-changes',
    title: 'NUST NET 2026 Test Pattern Decoded — What Changed?',
    description: 'Complete breakdown of subject distributions, MCQ weights, and time management strategies.'
  },
  {
    slug: 'nust-pnec-karachi-campus-2026-merit-programs',
    title: 'NUST Karachi Campus (PNEC) — Why Choose It in 2026',
    description: 'Explore PNEC programs, rising merit trends, and the Karachi testing advantage.'
  }
];

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 mb-4 border border-amber-500/20">
          <Sparkles className="w-3.5 h-3.5" /> NUST Admission Guides & News
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">NUST NET 2026 Blog & Resources</h1>
        <p className="text-slate-600 mt-2">Expert guides, merit predictions, and test patterns for Pakistani aspirants.</p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link 
            key={post.slug} 
            to={`/blog/${post.slug}`}
            className="group block bg-white p-6 sm:p-8 rounded-2xl border border-amber-100 hover:border-amber-400 transition shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-3.5 h-3.5" /> NUST Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="hidden sm:flex w-10 h-10 rounded-full bg-amber-50 items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition shrink-0 ml-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
