import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { BRAND_NAME } from '../config/brand';
import { parentPrograms } from '../data/parentProgramsData';

const ParentPrograms = () => {
  return (
    <>
      <Helmet>
        <title>Parent Programs | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Explore Arura parent support programs including parent guidance sessions, home program training, and child progress reviews."
        />
      </Helmet>

      <PageHeader
        title="Parent Programs"
        subtitle="Family-centered support pathways"
        description="Dedicated parent support services to improve consistency, confidence, and carryover between home and therapy sessions."
        backgroundImage="https://images.pexels.com/photos/8363182/pexels-photo-8363182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Parent support programs at Arura: guidance sessions, home training, and progress reviews."
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
                  <ul className="mt-4 space-y-2">
                    {program.outcomes.slice(0, 2).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/parent-programs/${program.id}`}
                    className="mt-5 inline-flex items-center font-semibold text-primary-700 hover:text-primary-900"
                  >
                    View details
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

export default ParentPrograms;

