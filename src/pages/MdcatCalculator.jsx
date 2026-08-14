import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, RotateCcw } from 'lucide-react';

export default function MdcatCalculator() {
  const [matricObt, setMatricObt] = useState('');
  const [matricTot, setMatricTot] = useState('1100');
  const [fscObt, setFscObt] = useState('');
  const [fscTot, setFscTot] = useState('1100');
  const [mdcatObt, setMdcatObt] = useState('');
  const [mdcatTot, setMdcatTot] = useState('180');
  const [aggregate, setAggregate] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const matricScore = (Number(matricObt) / Number(matricTot)) * 10;
    const fscScore = (Number(fscObt) / Number(fscTot)) * 40;
    const mdcatScore = (Number(mdcatObt) / Number(mdcatTot)) * 50;
    setAggregate((matricScore + fscScore + mdcatScore).toFixed(4));
  };

  const handleReset = () => {
    setMatricObt('');
    setFscObt('');
    setMdcatObt('');
    setAggregate(null);
  };

  return (
    <div className="page-transition py-10 px-4 sm:px-6 max-w-2xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-purple-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Calculators
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">MDCAT Public Medical Calculator</h1>
            <p className="text-sm text-slate-500 mt-1">Formula: 50% MDCAT + 40% FSc Pre-Medical + 10% Matric</p>
          </div>
          <button onClick={handleReset} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition" title="Reset Form">
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleCalculate} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Matric Obtained</label>
              <input type="number" value={matricObt} onChange={(e) => setMatricObt(e.target.value)} placeholder="e.g. 1050" className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Matric Total</label>
              <input type="number" value={matricTot} onChange={(e) => setMatricTot(e.target.value)} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">FSc Pre-Med Obtained</label>
              <input type="number" value={fscObt} onChange={(e) => setFscObt(e.target.value)} placeholder="e.g. 950" className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">FSc Pre-Med Total</label>
              <input type="number" value={fscTot} onChange={(e) => setFscTot(e.target.value)} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">MDCAT Obtained</label>
              <input type="number" value={mdcatObt} onChange={(e) => setMdcatObt(e.target.value)} placeholder="e.g. 150" className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">MDCAT Total</label>
              <input type="number" value={mdcatTot} onChange={(e) => setMdcatTot(e.target.value)} className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition" required />
            </div>
          </div>

          <button type="submit" className="w-full mt-2 py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5" /> Calculate MDCAT Aggregate
          </button>
        </form>

        {aggregate !== null && (
          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Your Final MDCAT Aggregate</p>
            <p className="text-4xl font-extrabold text-emerald-600 mt-2">{aggregate}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
