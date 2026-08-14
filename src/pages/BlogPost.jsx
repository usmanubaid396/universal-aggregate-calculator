import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calculator } from 'lucide-react';

const blogs = {
  'nust-net-2026-series-4-registration-extended': {
    title: "NUST NET 2026 Series 4 Registration Extended — Last Chance for Fall Admissions",
    description: "NUST NET Series 4 registration deadline extended to June 18, 2026. Learn about test dates, CBNET vs PBNET formats, and how to calculate your merit with our NUST aggregate calculator.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          The National University of Sciences and Technology (NUST) has officially extended the registration deadline for NET-2026 Series 4, giving thousands of aspirants a final opportunity to secure admission to Pakistan's top-ranked engineering and computing university. According to the official NUST undergraduate admission portal, the last date for Series 4 registration is now June 18, 2026, with computer-based tests (CBNET) commencing from June 13, 2026, onwards at the Islamabad campus, and paper-based tests (PBNET) scheduled for July 18–22, 2026, in Karachi and July 18–20, 2026, in Gilgit.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What's New in NET-2026 Series 4?</h2>
        <p>
          Unlike previous years where Series 4 was limited to Islamabad, NUST has expanded Series 4 to all four test locations — Islamabad, Karachi, Quetta, and Gilgit. The Quetta CBNET dates are set for July 27–29, 2026. This expansion is significant for students from Balochistan and northern areas who previously had limited access to later series.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">CBNET vs PBNET: Key Differences</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Feature</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">CBNET (Islamabad/Quetta)</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">PBNET (Karachi/Gilgit)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Format</td>
                <td className="border border-slate-200 p-3">Computer-based</td>
                <td className="border border-slate-200 p-3">Paper-based</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">Result Speed</td>
                <td className="border border-slate-200 p-3">Faster upload</td>
                <td className="border border-slate-200 p-3">Standard processing</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Scheduling</td>
                <td className="border border-slate-200 p-3">Choose your slot</td>
                <td className="border border-slate-200 p-3">Fixed date</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">Locations</td>
                <td className="border border-slate-200 p-3">NUST Campus, Islamabad; Quetta</td>
                <td className="border border-slate-200 p-3">Karachi, Gilgit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Best-Score Policy: Why Series 4 Matters</h2>
        <p>
          NUST's best-score policy remains one of the most student-friendly features among Pakistani universities. You can attempt NET multiple times across different series, and only your highest score will be considered for the merit list. This means even if you scored poorly in Series 1, 2, or 3, Series 4 is your redemption arc.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Merit Calculation Update</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>NET Score:</strong> 75%</li>
          <li><strong>HSSC/Equivalent:</strong> 15%</li>
          <li><strong>SSC:</strong> 10%</li>
        </ul>
        <p className="mt-4">
          With NET carrying the heaviest weight, a strong Series 4 performance can dramatically shift your aggregate. Use our <Link to="/calculator/nust" className="text-amber-600 font-bold hover:underline">NUST Aggregate Calculator</Link> to estimate where you stand before the merit lists drop in August 2026.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ACT/SAT Alternative Route</h2>
        <p>
          For students who missed NET entirely, NUST still accepts ACT and SAT scores. The ACT institutional code is 2915 and SAT code is 2790, with scores valid for two years. The last date to receive ACT/SAT scores is July 25, 2026.
        </p>
      </div>
    )
  },
  'nust-net-2026-merit-list-predictions-engineering': {
    title: "NUST NET 2026 Merit List Predictions — Why Engineering Closing Merit Might Drop This Year",
    description: "Analysis of NUST NET 2026 merit trends. Will engineering closing merit drop? Explore Series 1-4 performance data and calculate your exact aggregate with our NUST merit calculator.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          Every year, thousands of students obsessively refresh the NUST merit list page, hoping their name appears. For NET-2026, early indicators suggest a potential shift in closing merit trends — particularly for engineering programs at the Islamabad campus.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Series 1–3 Data Picture</h2>
        <p>
          Series 1 and 2 of NET-2026 were conducted between November 2025 and March 2026. Series 3 ran from April 4 to May 2, 2026, with results already uploaded. Based on community discussions and prep platform analytics, Series 3 saw a higher-than-average number of high scorers in the 160–180/200 range, which typically inflates the merit list. However, Series 4 is showing a more distributed score spread.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Merit Might Drop for Select Programs</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Expanded Seat Matrix:</strong> NUST has incrementally increased seats in emerging fields like Artificial Intelligence, Cyber Security, and Data Science at SEECS and NBS, absorbing pressure from traditional engineering tracks.</li>
          <li><strong>ACT/SAT Diversion:</strong> More international-board students are applying via ACT/SAT, creating a parallel merit list that doesn't compete with NET-based candidates.</li>
          <li><strong>Campus Diversification:</strong> With PNEC Karachi, MCS Rawalpindi, and CAE Risalpur gaining strong reputations, top scorers are spreading across regional campuses.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Programs to Watch</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Program</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Predicted Closing Merit (2026)</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">BS Computer Engineering (SCEE)</td>
                <td className="border border-slate-200 p-3">78–81%</td>
                <td className="border border-slate-200 p-3 text-emerald-600 font-bold">Stable / ↑</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">BS Software Engineering (SEECS)</td>
                <td className="border border-slate-200 p-3">76–79%</td>
                <td className="border border-slate-200 p-3 text-amber-600 font-bold">Slight ↓</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">BS Electrical Engineering</td>
                <td className="border border-slate-200 p-3">74–77%</td>
                <td className="border border-slate-200 p-3 text-emerald-600 font-bold">Stable</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">BS Artificial Intelligence</td>
                <td className="border border-slate-200 p-3">72–75%</td>
                <td className="border border-slate-200 p-3 text-blue-600 font-bold">New / Volatile</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">BS Civil Engineering</td>
                <td className="border border-slate-200 p-3">70–73%</td>
                <td className="border border-slate-200 p-3 text-red-500 font-bold">↓ (Higher supply)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Want to know where you stand? Input your scores into our <Link to="/calculator/nust" className="text-amber-600 font-bold hover:underline">NUST Merit Calculator</Link> to see your exact percentage instantly.
        </p>
      </div>
    )
  },
  'nust-vs-other-engineering-universities-2026': {
    title: "NUST vs Other Engineering Universities — Why NET Still Dominates in 2026",
    description: "Compare NUST NET with ECAT, GIKI, and FAST tests. Discover why NUST remains Pakistan's #1 choice for engineering in 2026 and calculate your NUST merit instantly.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          When Pakistani pre-engineering students list their dream universities, NUST consistently sits at the top. But with UET Lahore's ECAT, GIKI's independent test, and FAST's computing-focused exam all vying for attention, why does NUST NET remain the gold standard in 2026?
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">NET's Unique Advantages</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Multiple Attempts (Best Score Counts):</strong> Unlike ECAT or GIKI, NUST allows four series per year, and only your highest score is counted.</li>
          <li><strong>Computer-Based Testing (CBNET):</strong> Transparent, modern testing infrastructure with rapid result uploads.</li>
          <li><strong>ACT/SAT Parallel Track:</strong> A dedicated admission route for international-board students.</li>
        </ol>

        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Merit Weightage Comparison</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-3 font-bold text-slate-900">University</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Test Weight</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Academics Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">NUST</td>
                <td className="border border-slate-200 p-3">75% (NET)</td>
                <td className="border border-slate-200 p-3">25% (SSC + HSSC)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">UET</td>
                <td className="border border-slate-200 p-3">30% (ECAT)</td>
                <td className="border border-slate-200 p-3">70% (Matric + Inter)</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">GIKI</td>
                <td className="border border-slate-200 p-3">80–85% (Test)</td>
                <td className="border border-slate-200 p-3">15–20%</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">FAST</td>
                <td className="border border-slate-200 p-3">50% (NU Test)</td>
                <td className="border border-slate-200 p-3">50%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Ready to verify your standing? Use our <Link to="/calculator/nust" className="text-amber-600 font-bold hover:underline">NUST Aggregate Calculator</Link> today.
        </p>
      </div>
    )
  },
  'nust-net-2026-test-pattern-changes': {
    title: "NUST NET 2026 Test Pattern Decoded — What Changed from 2025?",
    description: "Complete breakdown of NUST NET 2026 test pattern. Subjects, MCQ distribution, time limits, and what's new compared to 2025. Calculate your expected merit with our NUST calculator.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          The NUST Entry Test (NET) remains conceptually consistent, but 2026 brings subtle yet important shifts. Whether taking CBNET in Islamabad or PBNET in Karachi, understanding the blueprint is essential.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">NET 2026 Subject Distribution (Engineering/Computing)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Mathematics:</strong> 40% (Calculus, Algebra, Trigonometry, Analytical Geometry)</li>
          <li><strong>Physics:</strong> 30% (Mechanics, Electricity & Magnetism, Modern Physics)</li>
          <li><strong>Chemistry / Computer Science:</strong> 20% (Based on FSc group)</li>
          <li><strong>English:</strong> 10% (Vocabulary, Grammar, Comprehension)</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Core Policies</h2>
        <p>
          <strong>No Negative Marking:</strong> NUST continues its no-negative-marking policy, meaning you should never leave blanks. The exam relies strictly on intermediate textbook syllabi, making your FSc notes the best preparation tool.
        </p>

        <p className="mt-4">
          Convert your target test scores into a finalized merit percentage using our <Link to="/calculator/nust" className="text-amber-600 font-bold hover:underline">NUST Merit Calculator</Link>.
        </p>
      </div>
    )
  },
  'nust-pnec-karachi-campus-2026-merit-programs': {
    title: "NUST Karachi Campus (PNEC) — Why More Students Are Choosing It in 2026",
    description: "PNEC Karachi is becoming a top choice for NUST aspirants. Explore programs, merit trends, and why NUST's Karachi campus is outperforming expectations in 2026.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          For decades, NUST Islamabad was the undisputed destination. In 2026, Pakistan Navy Engineering College (PNEC) in Karachi is seeing surging applications and rising closing merit across multiple programs.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Programs Offered at PNEC</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Electrical Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Software Engineering</li>
          <li>Computer Science</li>
        </ul>

        <p className="mt-4">
          PNEC degrees carry the exact same prestige as Islamabad campus degrees, with the added advantage of Karachi's industrial ecosystem for internships. Check your eligibility using our <Link to="/calculator/nust" className="text-amber-600 font-bold hover:underline">NUST Aggregate Calculator</Link>.
        </p>
      </div>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs[slug];

  if (!blog) {
    return (
      <div className="py-28 px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
        <p className="text-slate-600 mb-6">The article you are looking for does not exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-amber-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <header className="mb-10 pb-6 border-b border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{blog.title}</h1>
        <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">{blog.description}</p>
      </header>

      <div className="text-slate-700 leading-relaxed space-y-6">
        {blog.content}
      </div>

      {/* Internal Conversion CTA Box */}
      <div className="mt-16 p-6 sm:p-8 bg-amber-50 rounded-2xl border border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-amber-900">Ready to calculate your NUST Merit?</h3>
          <p className="text-amber-700 text-sm mt-1">Compute your exact aggregate percentage down to 4 decimal places.</p>
        </div>
        <Link to="/calculator/nust" className="whitespace-nowrap px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow transition flex items-center gap-2">
          <Calculator className="w-4 h-4" /> Launch NUST Calculator
        </Link>
      </div>
    </article>
  );
}
