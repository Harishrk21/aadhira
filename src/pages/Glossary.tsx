import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { glossaryTerms } from '../data/glossaryTermsData';
import { BRAND_NAME } from '../config/brand';

const Glossary = () => {
  const title = `Therapy Glossary | ${BRAND_NAME}`;
  const description = 'Simple explanations of paediatric therapy terms used in occupational therapy, speech therapy, ABA, early intervention, sensory integration, and special education.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <PageHeader
        title="Therapy Glossary"
        subtitle={`${BRAND_NAME} Knowledge Hub`}
        description="Understand key child development and therapy terms in simple parent-friendly language."
        backgroundImage="/images/pages/blog_post.png"
        metaTitle={title}
        metaDescription={description}
      />
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {glossaryTerms.map((term) => (
              <Link key={term.slug} to={`/glossary/${term.slug}`} className="rounded-xl border border-primary-100 bg-primary-50 p-4 transition hover:border-primary-300 hover:bg-white">
                <h2 className="font-bold text-primary-900">{term.term}</h2>
                <p className="mt-2 text-sm text-neutral-700">{term.shortDefinition}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Glossary;
