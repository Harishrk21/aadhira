import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { services } from '../data/servicesData';
import { additionalPrograms } from '../data/additionalProgramsData';
import { locationSeoPages } from '../data/locationSeoData';
import { BRAND_NAME, ADDRESS_CHENNAI, PHONE_PRIMARY_DISPLAY } from '../config/brand';
import { getSiteUrl } from '../config/site';
import { clinicId } from '../config/structuredDataClinic';

const priorityLinks = [
  { label: 'Speech Therapy', href: '/services/speech-therapy' },
  { label: 'Occupational Therapy', href: '/services/occupational-therapy' },
  { label: 'ABA Therapy', href: '/services/aba-therapy' },
  { label: 'Early Intervention', href: '/services/early-intervention' },
  { label: 'School Readiness', href: '/programs/school-readiness' },
  { label: 'Sensory Integration', href: '/programs/sensory-integration' },
];

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const page = locationSeoPages.find((item) => item.slug === slug);
  const siteUrl = getSiteUrl();

  useEffect(() => {
    if (!page) navigate('/contact');
  }, [page, navigate]);

  const localBusinessJsonLd = useMemo(() => {
    if (!page || !siteUrl) return null;
    const pageUrl = `${siteUrl}/locations/${page.slug}`;
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      '@id': `${pageUrl}#clinic-location-page`,
      name: `${BRAND_NAME} - ${page.area}`,
      url: pageUrl,
      description: page.summary,
      parentOrganization: { '@id': clinicId(siteUrl) },
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_CHENNAI.street,
        addressLocality: `${ADDRESS_CHENNAI.locality}, ${ADDRESS_CHENNAI.city}`,
        addressRegion: ADDRESS_CHENNAI.region,
        postalCode: ADDRESS_CHENNAI.postalCode,
        addressCountry: ADDRESS_CHENNAI.country,
      },
      areaServed: { '@type': 'AdministrativeArea', name: page.area },
      medicalSpecialty: ['Pediatric Occupational Therapy', 'Speech-Language Pathology', 'Applied Behavior Analysis'],
    };
  }, [page, siteUrl]);

  if (!page) return null;

  const pageTitle = `${page.title} | ${BRAND_NAME}`;
  const pageDescription = `${page.summary} ${page.nearbyContext}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={page.searchFocus.join(', ')} />
        {localBusinessJsonLd ? <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script> : null}
      </Helmet>

      <PageHeader
        title={page.title}
        subtitle={`${BRAND_NAME} for ${page.area} families`}
        description={page.summary}
        backgroundImage="/images/pages/specialised_therapy.png"
        metaTitle={pageTitle}
        metaDescription={pageDescription}
        frameworkSummary={page.nearbyContext}
        frameworkIdeas={[
          { label: 'Assessment First', text: 'Start with a clear profile of strengths, concerns, and priorities' },
          { label: 'Integrated Plan', text: 'Coordinate OT, speech, ABA, learning, and parent guidance where needed' },
          { label: 'Local Carryover', text: 'Home and school strategies matched to daily routines' },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <Link to="/contact" className="mb-8 inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to contact
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-900">Therapy support for children in and around {page.area}</h2>
              <p className="mt-4 leading-relaxed text-neutral-700">{page.nearbyContext}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {priorityLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group rounded-xl border border-primary-100 bg-primary-50 p-4 transition hover:border-primary-300 hover:bg-white hover:shadow-sm"
                  >
                    <p className="font-bold text-primary-900">{item.label}</p>
                    <p className="mt-1 text-sm text-neutral-600">View service details for Chennai families</p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary-700">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary-700" />
                <div>
                  <h3 className="font-extrabold text-neutral-900">Primary clinic address</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {ADDRESS_CHENNAI.street}
                    <br />
                    {ADDRESS_CHENNAI.locality}, {ADDRESS_CHENNAI.city}, {ADDRESS_CHENNAI.region} {ADDRESS_CHENNAI.postalCode}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-primary-800">Call: {PHONE_PRIMARY_DISPLAY}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-primary-200 pt-6">
                <h3 className="font-extrabold text-neutral-900">Common searches covered</h3>
                <ul className="mt-3 space-y-2">
                  {page.searchFocus.map((keyword) => (
                    <li key={keyword} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-extrabold text-neutral-900">Full therapy and programme coverage</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ...services.map((item) => ({ ...item, href: `/services/${item.id}` })),
              ...additionalPrograms.map((item) => ({ ...item, href: `/programs/${item.id}` })),
            ].map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="rounded-lg border border-primary-100 bg-white px-4 py-3 text-sm font-semibold text-primary-800 transition hover:border-primary-300 hover:text-primary-950"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Looking for therapy near ${page.area}?`} subtitle="Book an assessment and our team will guide you to the right starting plan." />
    </>
  );
};

export default LocationDetail;
