import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// This is where you will add your blog content
const blogs = {
  'nust-net-2026-series-4-registration-extended': {
    title: "NUST NET 2026 Series 4 Registration Extended",
    content: "The National University of Sciences and Technology (NUST) has officially extended the registration deadline for NET-2026 Series 4..."
  },
  // Add other blogs here in the same format
};

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs[slug];

  if (!blog) return <div className="p-20 text-center">Blog not found.</div>;

  return (
    <article className="py-20 px-4 max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-2 text-amber-600 mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">{blog.title}</h1>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
        {blog.content}
      </div>
    </article>
  );
}
