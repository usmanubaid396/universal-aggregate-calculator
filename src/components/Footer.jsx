export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Universal Aggregate Calculator. Built for precision academic tracking.</p>
      </div>
    </footer>
  );
}
