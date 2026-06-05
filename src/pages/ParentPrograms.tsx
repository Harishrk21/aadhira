import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { parentPrograms } from '../data/parentProgramsData';
import { localSeoTitle } from '../config/seoContent';

const ParentPrograms = () => {
  const seoTitle = localSeoTitle('Parent Training and Guidance Programs');
  const seoDescription = 'Parent guidance, home program training, and child progress reviews at Arura Integral Therapy Services in Villivakkam, Chennai for stronger home carryover.';

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content={seoDescription}
        />
      </Helmet>

      <PageHeader
        title="Parent Programs"
        subtitle="Family-centered support pathways"
        description="Dedicated parent support services to improve consistency, confidence, and carryover between home and therapy sessions."
        backgroundImage="https://images.pexels.com/photos/8363182/pexels-photo-8363182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaTitle={seoTitle}
        metaDescription={seoDescription}
        frameworkSummary="Our parent programs are designed to turn therapy goals into everyday routines through guided coaching, practical home plans, and regular review checkpoints."
        frameworkIdeas={[
          { label: 'Parent Coaching', text: 'Clear therapist guidance for everyday implementation' },
          { label: 'Home Strategy', text: 'Simple routines that reinforce clinic goals' },
          { label: 'Review Cycle', text: 'Progress checks to adjust next-step actions' },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <h1 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">All Parent Support Programs</h1>
          <p className="mb-10 max-w-3xl text-neutral-600">
            These family-centered programs work alongside our therapy services to ensure practical home implementation and better child outcomes.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parentPrograms.map((program) => (
              <article key={program.id} className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
                <img src={program.image} alt={program.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-neutral-900">{program.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary-700">{program.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">{program.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-4 grid gap-2 text-sm">
                    <div>
                      <dt className="font-semibold text-primary-700">Duration</dt>
                      <dd className="text-neutral-700">{program.duration}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary-700">Mode</dt>
                      <dd className="text-neutral-700">{program.mode}</dd>
                    </div>
                  </dl>
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

export default ParentPrograms;
