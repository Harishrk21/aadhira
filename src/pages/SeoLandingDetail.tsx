import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { seoLandingPages } from '../data/seoLandingPagesData';
import { BRAND_NAME } from '../config/brand';

const SeoLandingDetail = () => {
  const { seoSlug } = useParams<{ seoSlug: string }>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const resolvedSlug = seoSlug ?? pathname.replace(/^\/|\/$/g, '');
  const page = seoLandingPages.find((item) => item.slug === resolvedSlug);

  useEffect(() => {
    if (!page) navigate('/services');
  }, [page, navigate]);

  if (!page) return null;

  const title = `${page.title} | ${BRAND_NAME}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.searchIntent.join(', ')} />
      </Helmet>
      <PageHeader
        title={page.title}
        subtitle={page.subtitle}
        description={page.description}
        backgroundImage="/images/pages/specialised_therapy.png"
        metaTitle={title}
        metaDescription={page.description}
      />
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <h2 className="text-xl font-extrabold text-neutral-900">Search intent we address</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {page.searchIntent.map((item) => (
                <span key={item} className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary-800">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={page.primaryLink.href} className="rounded-xl bg-primary-700 px-4 py-2 text-sm font-bold text-white hover:bg-primary-800">
                {page.primaryLink.label}
              </Link>
              {page.secondaryLinks.map((item) => (
                <Link key={item.href} to={item.href} className="rounded-xl border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800 hover:border-primary-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Book an assessment today" subtitle="Our team will guide you to the right therapy plan for your child." />
    </>
  );
};

export default SeoLandingDetail;
