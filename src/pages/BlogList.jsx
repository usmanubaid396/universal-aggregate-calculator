import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const blogPosts = [
  // --- NUST BLOGS ---
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
  },

  // --- UET ECAT BLOGS ---
  {
    slug: 'uet-ecat-2026-phase-2-registration-final-chance',
    title: 'UET ECAT 2026 Phase 2 — Final Registration Window Closing Soon',
    description: 'UET ECAT Phase 2 registration details, exam schedules, and best-score policy guidelines.'
  },
  {
    slug: 'uet-ecat-2026-phase-1-result-analysis',
    title: 'UET ECAT 2026 Result Analysis — Why Phase 1 Scores Were Lower',
    description: 'Analysis of score distributions, difficulty shifts, and what Phase 2 candidates should expect.'
  },
  {
    slug: 'uet-lahore-vs-taxila-vs-faisalabad-2026-merit',
    title: 'UET Lahore vs UET Taxila vs UET Faisalabad — 2026 Merit Comparison',
    description: 'Compare UET campuses for 2026 admissions, merit trends, and smart preference ordering.'
  },
  {
    slug: 'uet-ecat-2026-computer-based-test-interface-guide',
    title: 'UET ECAT 2026 Computer-Based Test — New Interface & Preparation Guide',
    description: 'Learn about test interface features, navigation updates, and how to avoid technical errors.'
  },
  {
    slug: 'uet-fake-admission-ads-2026-scam-warning',
    title: 'Fake UET Admission Advertisements 2026 — How to Spot Scams',
    description: 'UET official warning regarding fraudulent admission ads, leftover seats, and how to stay safe.'
  },

  // --- MDCAT BLOGS ---
  {
    slug: 'mdcat-2026-date-rescheduled-september-20-pmdc',
    title: 'MDCAT 2026 Date Rescheduled to September 20 — PMDC New Timeline',
    description: 'PMDC rescheduled MDCAT 2026 to September 20, 2026. Registration details, fees, and merit impact.'
  },
  {
    slug: 'mdcat-2026-jrc-requirement-under-18-candidates',
    title: 'MDCAT 2026 New JRC Requirement — Under-18 Candidates Guide',
    description: 'PMDC introduced a new Juvenile Registration Certificate requirement for candidates under 18.'
  },
  {
    slug: 'mdcat-2026-syllabus-unchanged-repeaters-advantage',
    title: 'MDCAT 2026 Syllabus Unchanged — Why This Helps Repeaters',
    description: 'PMDC confirmed MDCAT 2026 syllabus remains identical to 2025. Subject weightage and breakdown.'
  },
  {
    slug: 'mdcat-2026-provincial-admission-bodies-uhs-kmu-duhs',
    title: 'MDCAT 2026 Provincial Admission Bodies — UHS, KMU, DUHS Explained',
    description: 'Understand UHS Punjab, KMU KPK, DUHS Sindh, and BUMHS Balochistan merit processes for 2026.'
  },
  {
    slug: 'mdcat-2026-score-validity-3-years-gap-year-students',
    title: 'MDCAT 2026 Score Validity Extended — The 3-Year Rule Explained',
    description: 'PMDC MDCAT scores are now valid for 3 years under Section 17 of the PM&DC Act 2022.'
  },

  // --- FAST NU TEST BLOGS ---
  {
    slug: 'fast-nu-admission-test-2026-dates-registration',
    title: 'FAST NU Admission Test 2026 — Registration Open, Test Dates July 4 & 11',
    description: 'FAST NU 2026 admissions open. NU Test dates, eligibility, test pattern, and negative marking rules.'
  },
  {
    slug: 'fast-negative-marking-strategy-2026-nu-test',
    title: 'FAST Negative Marking Explained — How to Avoid Losing Marks',
    description: 'Learn the exact penalty structure, skip strategies, and smart guessing techniques for FAST tests.'
  },
  {
    slug: 'fast-2026-closing-merit-predictions-cs-se-ai',
    title: 'FAST 2026 Closing Merit Predictions — CS, SE, and AI Programs Analysis',
    description: 'FAST expected closing merit for Computer Science, Software Engineering, and AI across campuses.'
  },
  {
    slug: 'fast-spring-vs-fall-2026-intake-comparison',
    title: 'FAST Spring 2026 vs Fall 2026 — Which Intake Should You Target?',
    description: 'Compare admission cycles, seat availability, and merit differences to choose the right intake.'
  },
  {
    slug: 'fast-campuses-compared-islamabad-lahore-karachi-peshawar-cfd-2026',
    title: 'FAST Campuses Compared — Islamabad, Lahore, Karachi, Peshawar, CFD',
    description: 'Compare all FAST campuses for 2026 admissions: programs, facilities, and ROI.'
  },

  // --- GIKI BLOGS ---
  {
    slug: 'giki-admission-test-2026-complete-schedule-test-pattern-registration-guide',
    title: 'GIKI Admission Test 2026 — Complete Schedule & Test Pattern',
    description: 'Complete guide to GIKI 2026 undergraduate admissions, test dates July 6-10, and formula.'
  },
  {
    slug: 'giki-admit-cards-2026-issued-what-candidates-must-know-before-july-6-10-test',
    title: 'GIKI Admit Cards 2026 Issued — What Candidates Must Know',
    description: 'Learn about test venues, reporting times, required documents, and last-minute preparation tips.'
  },
  {
    slug: 'giki-vs-nust-vs-fast-engineering-admission-test-comparison-2026',
    title: 'GIKI vs NUST vs FAST — Engineering Admission Test Comparison 2026',
    description: 'Detailed comparison of top engineering universities, test patterns, merit, and rankings.'
  },
  {
    slug: 'giki-financial-assistance-scholarships-2026-deadlines-and-eligibility',
    title: 'GIKI Financial Assistance & Scholarships 2026 — Deadlines & Eligibility',
    description: 'Complete guide to GIKI 2026 scholarships, need-based aid, and merit awards.'
  },
  {
    slug: 'how-to-prepare-for-giki-admission-test-2026-subject-wise-strategy',
    title: 'How to Prepare for GIKI Admission Test 2026 — Subject-wise Strategy',
    description: 'Proven preparation strategy for Mathematics, Physics, Chemistry, and English sections.'
  }
];

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 mb-4 border border-amber-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Admission Guides, News & Updates 2026
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Engineering & Medical Blog Resources</h1>
        <p className="text-slate-600 mt-2">Expert entry test guides, merit predictions, and official updates for Pakistani aspirants.</p>
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
                  <BookOpen className="w-3.5 h-3.5" /> Admission Guide
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
