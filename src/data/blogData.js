export const blogs = {
  // --- NUST BLOGS (Existing) ---
  'nust-net-2026-series-4-registration-extended': {
    title: "NUST NET 2026 Series 4 Registration Extended — Last Chance for Fall Admissions",
    description: "NUST NET Series 4 registration deadline extended to June 18, 2026. Learn about test dates, CBNET vs PBNET formats, and how to calculate your merit with our NUST aggregate calculator.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          The National University of Sciences and Technology (NUST) has officially extended the registration deadline for NET-2026 Series 4...
        </p>
        {/* Rest of NUST Blog 1 content */}
      </div>
    )
  },
  // ... (Include your other 4 NUST blogs here)

  // --- UET ECAT BLOGS (New 5 Blogs) ---
  'uet-ecat-2026-phase-2-registration-final-chance': {
    title: "UET ECAT 2026 Phase 2 — Final Registration Window Closing Soon",
    description: "UET ECAT Phase 2 registration open until June 13, 2026. Exam dates June 16–21. Best score policy applies. Calculate your UET aggregate with our ECAT merit calculator.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          The University of Engineering and Technology (UET) Lahore has opened ECAT Phase 2 (Second) registration for Fall 2026 admissions, and this is officially the final confirmed testing cycle for the year. If you missed Phase 1 or want to improve your score, this is your last opportunity.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Official Phase 2 Schedule</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Event</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Registration Opens</td>
                <td className="border border-slate-200 p-3">April 13, 2026</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">Registration Last Date</td>
                <td className="border border-slate-200 p-3">June 13, 2026</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Admit Cards Available</td>
                <td className="border border-slate-200 p-3">June 24, 2026 (Evening)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">Exam Dates</td>
                <td className="border border-slate-200 p-3">June 16 – 21, 2026</td>
              </tr>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">Result Announcement</td>
                <td className="border border-slate-200 p-3">June 30, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Best-Score Policy: Your Safety Net</h2>
        <p>
          UET has confirmed that the best score between ECAT Phase 1 and Phase 2 will be considered for merit. This means Phase 1 low scorers can safely reattempt with no penalty, as your highest score automatically counts.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Will There Be Phase 3?</h2>
        <p>
          No. UET has not announced any Phase 3 for 2026. Relying on a third phase is risky and unverified.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Programs Covered & Acceptance</h2>
        <p>ECAT is mandatory for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>BSc Engineering (Civil, Mechanical, Electrical, Chemical, etc.)</li>
          <li>BSc Computing (Computer Science, AI, Software Engineering, Cyber Security)</li>
          <li>Architecture, City Planning, DPT, and Medical Lab Technology</li>
        </ul>
        <p className="mt-2">
          Universities accepting ECAT include UET Lahore, UET Taxila, UET Faisalabad, UET Narowal, BZU Multan, IUB Bahawalpur, and NFC-IET Multan.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Calculate Your UET Merit</h2>
        <p>
          UET's aggregate formula weights ECAT at 30%, Matric at 25%, and Intermediate at 45%. Use our <Link to="/calculator/uet" className="text-amber-600 font-bold hover:underline">UET Aggregate Calculator</Link> to compute your exact merit percentage and compare it against previous years' closing merits.
        </p>
      </div>
    )
  },
  'uet-ecat-2026-phase-1-result-analysis': {
    title: "UET ECAT 2026 Result Analysis — Why Phase 1 Scores Were Lower Than Expected",
    description: "UET ECAT Phase 1 results announced April 13, 2026. Analysis of score distributions, why averages dropped, and what Phase 2 candidates should expect.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          When UET announced ECAT Phase 1 results on April 13, 2026, the engineering student community noticed something unexpected — average scores were notably lower than the 2025 cycle. The test, conducted from March 30 to April 3, 2026, left many candidates shocked and prompted a surge in Phase 2 registrations.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Scores Dropped</h2>
        <p>Factors included increased test difficulty, computer-based testing software adjustments, and breadth of syllabus coverage.</p>
        <p className="mt-4">
          Check your standing for admissions via our <Link to="/calculator/uet" className="text-amber-600 font-bold hover:underline">UET Aggregate Calculator</Link>.
        </p>
      </div>
    )
  },
  'uet-lahore-vs-taxila-vs-faisalabad-2026-merit': {
    title: "UET Lahore vs UET Taxila vs UET Faisalabad — 2026 Merit Comparison",
    description: "Compare UET campuses for 2026 admissions. Merit trends, program availability, and which campus offers the best value.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          UET Lahore may be the flagship, but UET Taxila and UET Faisalabad are increasingly attractive options with lower closing merits and strong regional industry links.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Campus Overview</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Campus</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Location</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Key Programs</th>
                <th className="border border-slate-200 p-3 font-bold text-slate-900">Notable Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 p-3 font-semibold">UET Lahore</td>
                <td className="border border-slate-200 p-3">GT Road, Lahore</td>
                <td className="border border-slate-200 p-3">All engineering + computing</td>
                <td className="border border-slate-200 p-3">Highest merit, best research facilities</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 p-3 font-semibold">UET Taxila</td>
                <td className="border border-slate-200 p-3">Taxila, Punjab</td>
                <td className="border border-slate-200 p-3">Engineering, CS, AI</td>
                <td className="border border-slate-200 p-3">Strong industry partnerships</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          All UET campuses accept the same ECAT score. Use our <Link to="/calculator/uet" className="text-amber-600 font-bold hover:underline">UET Aggregate Calculator</Link> to test your scores against estimated campus closing requirements.
        </p>
      </div>
    )
  },
  'uet-ecat-2026-computer-based-test-interface-guide': {
    title: "UET ECAT 2026 Computer-Based Test — New Interface Features and How to Prepare",
    description: "UET ECAT 2026 is fully computer-based. Learn about the new test interface, navigation features, and how to avoid common technical mistakes on exam day.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          UET Lahore transitioned ECAT to a computer-based format several years ago, but 2026 brings refinements to the testing interface. Admit cards for Phase 2 will be available on June 24, 2026 (evening), and results will be announced on June 30, 2026.
        </p>
        <p className="mt-4">
          Compute your exact merit using our <Link to="/calculator/uet" className="text-amber-600 font-bold hover:underline">UET Aggregate Calculator</Link>.
        </p>
      </div>
    )
  },
  'uet-fake-admission-ads-2026-scam-warning': {
    title: "Fake UET Admission Advertisements 2026 — How to Spot Scams and Protect Your Future",
    description: "UET Lahore warns students about fake admission ads for 2026. Learn how to identify scams, verify official notices, and stay safe.",
    content: (
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed">
          In August 2026, UET Lahore issued an urgent warning: "UET Lahore has not authorized or endorsed the circulated advertisement regarding 'Leftover Seats – Admission 2026.'" Always verify via the official website admission.uet.edu.pk or ecat.uet.edu.pk. Official contact numbers include +92-42-99029216.
        </p>
        <p className="mt-4">
          Stay safe and analyze your true standing via our verified <Link to="/calculator/uet" className="text-amber-600 font-bold hover:underline">UET Aggregate Calculator</Link>.
        </p>
      </div>
    )
  }
};
