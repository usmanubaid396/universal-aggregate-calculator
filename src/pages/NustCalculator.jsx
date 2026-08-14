import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, RotateCcw } from 'lucide-react';

export default function NustCalculator() {
  const [matricObt, setMatricObt] = useState('');
  const [matricTot, setMatricTot] = useState('1100');
  const [fscObt, setFscObt] = useState('');
  const [fscTot, setFscTot] = useState('1100');
  const [netObt, setNetObt] = useState('');
  const [aggregate, setAggregate] = useState(null);
  const [breakdown, setBreakdown] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const mScore = (Number(matricObt) / Number(matricTot)) * 10;
    const fScore = (Number(fscObt) / Number(fscTot)) * 15;
    const tScore = (Number(netObt) / 200) * 75;
    const finalAgg = mScore + fScore + tScore;

    setAggregate(finalAgg.toFixed(4));
    setBreakdown({
      matric: mScore.toFixed(2),
      fsc: fScore.toFixed(2),
      net: tScore.toFixed(2)
    });
  };

  const handleReset = () => {
    setMatricObt('');
    setFscObt('');
    setNetObt('');
    setAggregate(null);
    setBreakdown(null);
  };

  return (
    <div className="page-transition py-10 px-4 sm:px-6 max-w-2xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-amber-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Calculators
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">NUST Islamabad Aggregate Calculator</h1>
            <p className="text-sm text-slate-500 mt-1">Official Weightage Formula: 75% NET + 15% HSSC-I + 10% Matric</p>
          </div>
          <button onClick={handleReset} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition" title="Reset Form">
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleCalculate} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Matric Obtained</label>
              <input type="number" value={matricObt} onChange={(e) => setMatricObt(e.target.value)} placeholder="e.g. 1020" className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Matric Total</label>
              <input type="number" value={matricTot} onChange={(e) => setMatricTot(e.target.value)} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">HSSC-I Obtained</label>
              <input type="number" value={fscObt} onChange={(e) => setFscObt(e.target.value)} placeholder="e.g. 450" className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">HSSC-I Total</label>
              <input type="number" value={fscTot} onChange={(e) => setFscTot(e.target.value)} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition" required />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">NET Score (Out of 200)</label>
            <input type="number" value={netObt} onChange={(e) => setNetObt(e.target.value)} placeholder="e.g. 145" className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition" required />
          </div>

          <button type="submit" className="w-full mt-2 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5" /> Calculate NUST Aggregate
          </button>
        </form>

        {aggregate !== null && (
          <div className="mt-8 p-6 bg-white border border-amber-100 rounded-2xl shadow-sm space-y-6">
            <div className="text-center">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Aggregate Result</span>
              <p className="text-5xl font-extrabold text-slate-900 mt-2">{aggregate}%</p>
            </div>

            {/* Circular Percentage Breakdown Chart */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4 border-t border-slate-100">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track */}
                  <path
                    className="text-slate-100"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* NET Slice (75%) */}
                  <path
                    className="text-amber-500"
                    strokeDasharray="75, 100"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* HSSC-I Slice (15%, offset by 75%) */}
                  <path
                    className="text-amber-300"
                    strokeDasharray="15, 100"
                    strokeDashoffset="-75"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Matric Slice (10%, offset by 90%) */}
                  <path
                    className="text-slate-400"
                    strokeDasharray="10, 100"
                    strokeDashoffset="-90"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-xs text-slate-400 font-medium block">WEIGHT</span>
                  <span className="text-lg font-bold text-slate-800">100%</span>
                </div>
              </div>

              <div className="space-y-2 text-sm w-full sm:w-auto">
                <div className="flex items-center justify-between sm:justify-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="text-slate-600 font-medium">NET Score (75%)</span>
                  </div>
                  <span className="font-bold text-slate-800">{breakdown?.net}%</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-300 inline-block"></span>
                    <span className="text-slate-600 font-medium">HSSC-I (15%)</span>
                  </div>
                  <span className="font-bold text-slate-800">{breakdown?.fsc}%</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-400 inline-block"></span>
                    <span className="text-slate-600 font-medium">Matric (10%)</span>
                  </div>
                  <span className="font-bold text-slate-800">{breakdown?.matric}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SEO Content Section for NUST Calculator */}
      <section className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-3">About NUST Entry Test (NET) Admission Merit</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          National University of Sciences and Technology (NUST) calculates undergraduate admission aggregates using an official weightage formula: <strong>75% NUST Entry Test (NET)</strong> score, <strong>15% HSSC Part-I (Intermediate)</strong> marks, and <strong>10% Matriculation</strong> marks.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Use our reliable calculator above to quickly compute your exact aggregate percentage and check your merit standing for engineering, computing, business, and natural sciences disciplines at NUST campuses.
        </p>
      </section>
    </div>
  );
}
