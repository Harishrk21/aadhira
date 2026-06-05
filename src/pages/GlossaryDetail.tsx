import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { glossaryTerms } from '../data/glossaryTermsData';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { BRAND_NAME } from '../config/brand';

const GlossaryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const term = glossaryTerms.find((item) => item.slug === slug);

  useEffect(() => {
    if (!term) navigate('/glossary');
  }, [term, navigate]);

  if (!term) return null;

  const title = `${term.term} | ${BRAND_NAME} Glossary`;
  const description = term.shortDefinition;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <PageHeader
        title={term.term}
        subtitle="Parent-friendly therapy explanation"
        description={term.shortDefinition}
        backgroundImage="/images/pages/specialised_therapy.png"
        metaTitle={title}
        metaDescription={description}
      />
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <p className="text-sm leading-relaxed text-neutral-700">{term.explanation}</p>
            <h2 className="mt-6 text-lg font-extrabold text-neutral-900">Who it commonly helps</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              {term.whoItHelps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-6 text-lg font-extrabold text-neutral-900">Related pages</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {term.relatedLinks.map((item) => (
                <Link key={item.href} to={item.href} className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary-800 hover:border-primary-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Need support for your child?" subtitle="Book an assessment and get a personalised therapy roadmap." />
    </>
  );
};

export default GlossaryDetail;
