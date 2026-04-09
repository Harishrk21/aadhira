import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { BRAND_NAME } from '../config/brand';
import { parentPrograms } from '../data/parentProgramsData';

const ParentProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = parentPrograms.find((item) => item.id === slug);

  if (!program) {
    return (
      <section className="bg-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-neutral-900">Parent Program Not Found</h1>
          <p className="mt-3 text-neutral-600">The program you are looking for does not exist.</p>
          <Link to="/parent-programs" className="mt-6 inline-flex rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white">
            Back to Parent Programs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{program.title} | {BRAND_NAME}</title>
        <meta name="description" content={program.summary} />
      </Helmet>

      <PageHeader
        title={program.title}
        subtitle={program.subtitle}
        description={program.summary}
        backgroundImage={program.image}
        metaDescription={program.summary}
        frameworkSummary={`${program.title} helps families convert therapy recommendations into consistent home actions with practical guidance and measurable follow-through.`}
        frameworkIdeas={[
          { label: 'Session Outcome', text: program.outcomes[0] ?? 'Personalized parent action plan' },
          { label: 'Home Application', text: program.outcomes[1] ?? 'Simple daily carryover strategies' },
          { label: 'Progress Review', text: program.outcomes[2] ?? 'Regular review and plan adjustment' },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <Link to="/parent-programs" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Parent Programs
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl">{program.title}</h1>
              <p className="mt-4 leading-relaxed text-neutral-700">{program.summary}</p>

              <h2 className="mt-8 text-2xl font-bold text-neutral-900">Expected Outcomes</h2>
              <ul className="mt-4 space-y-3">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <h2 className="text-lg font-bold text-primary-900">Program Snapshot</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-primary-700">Duration</dt>
                  <dd className="text-neutral-700">{program.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary-700">Mode</dt>
                  <dd className="text-neutral-700">{program.mode}</dd>
                </div>
              </dl>
              <Link
                to="/book-appointment"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                Book Parent Consultation
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ParentProgramDetail;

