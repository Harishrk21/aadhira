import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';
import { blogPosts } from '../data/blogPostsData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'speech' | 'autism' | 'adhd'>('all');
  const filteredPosts = useMemo(
    () => blogPosts.filter((post) => activeCategory === 'all' || post.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Parent guides and therapy insights"
        description="Read practical articles for child development, therapy support, and home-based strategies."
        backgroundImage="https://images.pexels.com/photos/8612996/pexels-photo-8612996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Blog articles from Arura Paediatric Therapy Services."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <SectionTitle
            title="Latest Articles"
            subtitle="Short reads made for busy parents"
          />
          <div className="mb-6 flex flex-wrap gap-2">
            {(['all', 'speech', 'autism', 'adhd'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${activeCategory === cat ? 'bg-primary-700 text-white' : 'bg-primary-50 text-primary-700 border border-primary-200'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
                <img src={post.image} alt={post.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-6">
                <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-700">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-neutral-900">{post.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase text-primary-700">{post.category}</p>
                <ul className="mt-3 space-y-1">
                  {post.hooks.slice(0, 2).map((hook) => (
                    <li key={hook} className="text-sm font-medium text-neutral-700">- {hook}</li>
                  ))}
                </ul>
                <p className="mt-3 text-neutral-600">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center font-semibold text-primary-700 hover:text-primary-900">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Blog;
