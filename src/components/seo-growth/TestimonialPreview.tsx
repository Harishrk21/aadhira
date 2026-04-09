import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

const TestimonialPreview = () => {
  const preview = testimonials.slice(0, 2);
  return (
    <section className="bg-primary-50 py-10">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-neutral-900">What parents say</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {preview.map((item) => (
            <article key={item.id} className="rounded-xl border border-primary-100 bg-white p-5">
              <div className="mb-2 flex items-center gap-1 text-amber-500">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-neutral-700 text-sm">&quot;{item.quote}&quot;</p>
              <p className="mt-3 text-sm font-semibold text-neutral-900">{item.author}</p>
            </article>
          ))}
        </div>
        <Link to="/testimonials" className="mt-4 inline-flex text-primary-700 font-semibold hover:underline">Read all testimonials</Link>
      </div>
    </section>
  );
};

export default TestimonialPreview;
