import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NustCalculator from './pages/NustCalculator';
import UetCalculator from './pages/UetCalculator';
import MdcatCalculator from './pages/MdcatCalculator';
import FastCalculator from './pages/FastCalculator';
import GikiCalculator from './pages/GikiCalculator';
import ComsatsCalculator from './pages/ComsatsCalculator';
import PieasCalculator from './pages/PieasCalculator';
import NedCalculator from './pages/NedCalculator';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList'; // <--- Added import for the blog list index page

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-white bg-cream-50 font-['Plus_Jakarta_Sans'] text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} /> {/* <--- Added route for viewing all 5 blogs */}
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/calculator/nust" element={<NustCalculator />} />
            <Route path="/calculator/uet" element={<UetCalculator />} />
            <Route path="/calculator/mdcat" element={<MdcatCalculator />} />
            <Route path="/calculator/fast" element={<FastCalculator />} />
            <Route path="/calculator/giki" element={<GikiCalculator />} />
            <Route path="/calculator/comsats" element={<ComsatsCalculator />} />
            <Route path="/calculator/pieas" element={<PieasCalculator />} />
            <Route path="/calculator/ned" element={<NedCalculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
