import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { blogPosts } from '../data/blogPostsData';
import { BRAND_NAME } from '../config/brand';
import RelatedServices from '../components/seo-growth/RelatedServices';
import RelatedConditions from '../components/seo-growth/RelatedConditions';
import RelatedBlogs from '../components/seo-growth/RelatedBlogs';
import SearchIntentLinks from '../components/seo-growth/SearchIntentLinks';
import { useTracking } from '../hooks/useTracking';
import { getKeywordProfile } from '../config/keywordEngine';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { trackEvent } = useTracking();
  const post = blogPosts.find((item) => item.slug === slug);
  const keywords = post ? getKeywordProfile(`/blog/${post.slug}`) : null;

  useEffect(() => {
    if (!post) navigate('/blog');
  }, [post, navigate]);

  if (!post) return null;

  return (
    <>
      <Helmet>
        <title>{post.title} | {BRAND_NAME}</title>
        <meta name="description" content={post.excerpt} />
        {keywords ? <meta name="keywords" content={[keywords.primary, ...keywords.secondary, ...keywords.local].join(', ')} /> : null}
      </Helmet>

      <PageHeader
        title={post.title}
        subtitle="Arura parent guide"
        description={post.excerpt}
        backgroundImage={post.image}
        metaDescription={post.excerpt}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="mb-6 inline-flex items-center text-primary-700 hover:text-primary-900 font-semibold">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-700">
            <CalendarDays className="h-4 w-4" />
            {post.date}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">{post.title}</h1>
          <div className="mt-5 overflow-hidden rounded-2xl border border-primary-100">
            <img src={post.image} alt={post.title} className="h-72 w-full object-cover" />
          </div>
          <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-4">
            <p className="text-sm font-semibold text-primary-800">Quick hooks</p>
            <ul className="mt-2 space-y-1">
              {post.hooks.map((hook) => (
                <li key={hook} className="text-sm text-neutral-700">- {hook}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-5 text-neutral-700 leading-relaxed">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-primary-100 bg-primary-50 p-5">
            <p className="font-semibold text-neutral-900 mb-2">Need support for your child?</p>
            <p className="text-neutral-700">
              Explore our <Link to="/services" className="text-primary-700 font-semibold hover:underline">services</Link> and
              <Link to="/programs" className="text-primary-700 font-semibold hover:underline"> programs</Link>, or book an assessment.
            </p>
            <Link
              to="/book-appointment"
              onClick={() => trackEvent('blog_cta_click', { slug: post.slug, category: post.category })}
              className="mt-4 inline-flex rounded-lg bg-primary-700 px-4 py-2 text-sm font-bold text-white hover:bg-primary-800"
            >
              Book appointment now
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <RelatedServices slugs={post.relatedServiceSlugs} />
            <RelatedConditions slugs={post.relatedConditionSlugs} />
            <RelatedBlogs slugs={post.relatedBlogSlugs} />
          </div>
          {post.sourceUrl ? (
            <p className="mt-6 text-xs text-neutral-500">
              Original source inspiration: <a href={post.sourceUrl} target="_blank" rel="noreferrer" className="text-primary-700 hover:underline">{post.sourceUrl}</a>
            </p>
          ) : null}
        </div>
      </section>

      <SearchIntentLinks
        problemHref="/blog"
        solutionHref={post.relatedServiceSlugs[0] ? `/services/${post.relatedServiceSlugs[0]}` : '/services'}
        trustHref="/testimonials"
      />
      <CTASection />
    </>
  );
};

export default BlogDetail;
