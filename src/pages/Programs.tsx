import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { additionalPrograms } from '../data/additionalProgramsData';
import { BRAND_NAME } from '../config/brand';

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Explore Arura therapy and support programs including school readiness, sensory integration, handwriting training, mindfulness, feeding support, and more."
        />
      </Helmet>

      <PageHeader
        title="Programs"
        subtitle="Therapy and support pathways"
        description="Browse our child development programs and choose the right pathway for your child's communication, learning, behavior, and daily-life goals."
        backgroundImage="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Arura programs for school readiness, sensory integration, cognitive skills, parent coaching, feeding support, and more."
        frameworkSummary="Our programs are designed as focused pathways that strengthen school readiness, regulation, learning, and participation through structured therapist-family collaboration."
        frameworkIdeas={[
          { label: 'Program Mapping', text: 'Choose a pathway based on your child’s functional goals' },
          { label: 'Skill Building', text: 'Targeted modules for attention, behaviour, communication, and daily living' },
          { label: 'Family Carryover', text: 'Home strategies to sustain progress beyond sessions' },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">All Programs</h1>
          <p className="text-neutral-600 max-w-3xl mb-10">
            These programs complement our <Link to="/services" className="text-primary-700 font-semibold hover:underline">core therapy services</Link> and are built for real-world progress at home, school, and in social settings.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalPrograms.map((program) => (
              <article key={program.id} className="rounded-2xl border border-primary-100 bg-white shadow-sm overflow-hidden">
                <img src={program.image} alt={program.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-neutral-900">{program.title}</h2>
                  <p className="text-sm text-primary-700 font-semibold mt-1">Ages: {program.ageGroups}</p>
                  <p className="text-neutral-600 mt-3 text-sm">{program.shortDescription}</p>
                  <ul className="mt-4 space-y-2">
                    {program.benefits.slice(0, 2).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/programs/${program.id}`} className="mt-5 inline-flex items-center font-semibold text-primary-700 hover:text-primary-900">
                    View program details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary-100 bg-primary-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-primary-900">Need Parent-Focused Support?</h2>
            <p className="mt-2 max-w-3xl text-neutral-700">
              Explore our dedicated parent support pathways including guidance sessions, home program coaching, and scheduled child progress reviews.
            </p>
            <Link to="/parent-programs" className="mt-5 inline-flex items-center font-semibold text-primary-700 hover:text-primary-900">
              Explore Parent Programs
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Programs;
