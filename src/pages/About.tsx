import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';
import { Heart, Award, Users, Lightbulb, CalendarDays, Flag, Milestone, Stethoscope } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, EMAIL } from '../config/brand';

const journeyMilestones = [
  { year: 'Founded', title: 'Child-first vision begins', text: 'A focused paediatric therapy setup started with one mission: early support with dignity and measurable progress.' },
  { year: 'Phase 2', title: 'Multidisciplinary team expansion', text: 'Occupational therapy, speech, ABA, special education, and parent coaching were aligned under one care pathway.' },
  { year: 'Phase 3', title: 'Structured growth model', text: 'Assessment frameworks, weekly goal tracking, and cross-therapist planning were standardized for every child profile.' },
  { year: 'Today', title: '4-centre collaborative network', text: 'Families now access coordinated support across Chennai touchpoints with continuity from intake to transition planning.' },
];

const teamMembers = [
  { name: 'Clinical Lead', role: 'Paediatric Therapy Director', image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1000' },
  { name: 'Speech Specialist', role: 'Communication & Language', image: 'https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=1000' },
  { name: 'Occupational Specialist', role: 'Sensory & Daily Living', image: 'https://images.pexels.com/photos/8363065/pexels-photo-8363065.jpeg?auto=compress&cs=tinysrgb&w=1000' },
  { name: 'Behaviour Specialist', role: 'ABA & Social Skills', image: 'https://images.pexels.com/photos/8613120/pexels-photo-8613120.jpeg?auto=compress&cs=tinysrgb&w=1000' },
];

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle={`${BRAND_NAME} — ${BRAND_TAGLINE}`}
        description="We are a child-focused multidisciplinary team serving Chennai centers (Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam), combining structured assessment, family coaching, and practical interventions so every child can build communication, learning, behavioural, and daily-living skills with confidence."
        backgroundImage="https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Arura Integral Therapy Services — paediatric therapy for children in Chennai centers including Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam. Learn our mission, approach, and team."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-700">
                <Flag className="h-4 w-4" />
                Founder Story
              </p>
              <h2 className="mb-4 text-3xl font-black text-neutral-900 md:text-4xl">Built on purpose, grown with families</h2>
              <p className="mb-4 text-neutral-700">
                {BRAND_NAME} was shaped to solve a real gap: families needed one trusted place for
                {' '}<span className="font-semibold text-primary-800">assessment</span>,
                {' '}<span className="font-semibold text-primary-800">therapy planning</span>, and
                {' '}<span className="font-semibold text-primary-800">continuous child progress tracking</span>.
              </p>
              <p className="mb-5 text-neutral-700">
                Today, our model combines clinical structure with child-friendly sessions, so development is not random; it is guided, measured, and sustained through parent partnership.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Care Model', value: 'Multidisciplinary' },
                  { label: 'Coverage', value: '4 Chennai centres' },
                  { label: 'Focus', value: 'Outcome-oriented care' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-primary-100 bg-primary-50/50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">{item.label}</p>
                    <p className="text-sm font-bold text-neutral-900">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Link to="/contact" className="btn-primary">Talk to our team</Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-100 to-sky-100 blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8944024/pexels-photo-8944024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=2"
                  alt="Founder and clinical leadership vision for paediatric therapy"
                  className="h-[420px] w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="mt-3 rounded-xl border border-primary-100 bg-primary-50/70 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Leadership note</p>
                  <p className="mt-1 text-sm text-neutral-700">We are committed to compassionate, evidence-based therapy that families can trust and children can enjoy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-primary-100 bg-primary-50 py-16 md:py-20">
        <div className="container-custom">
          <SectionTitle title="From foundation to today" subtitle="A growth timeline that reflects how our care model evolved" />
          <div className="mx-auto max-w-5xl">
            <div className="relative grid gap-5 md:grid-cols-2">
              <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary-200 md:block" aria-hidden />
              {journeyMilestones.map((item) => (
                <article key={item.title} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
                  <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.year}
                  </p>
                  <h3 className="text-lg font-extrabold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <SectionTitle title="Our core approach" subtitle={`What makes ${BRAND_NAME} different for children and families`} />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Heart className="h-10 w-10" />, title: 'Child-centred', body: 'Therapy is customized to each child’s pace, needs, and interests.' },
              { icon: <Users className="h-10 w-10" />, title: 'Family-focused', body: 'Parents receive practical carryover strategies for home and school.' },
              { icon: <Award className="h-10 w-10" />, title: 'Evidence-based', body: 'Clinical decisions are guided by data, observation, and outcomes.' },
              { icon: <Lightbulb className="h-10 w-10" />, title: 'Holistic', body: 'We align communication, behavior, learning, and daily skills together.' },
            ].map((card) => (
              <article key={card.title} className="rounded-2xl border border-primary-100 bg-gradient-to-b from-white to-primary-50/60 p-6 shadow-sm">
                <div className="mb-4 text-primary-600">{card.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900">{card.title}</h3>
                <p className="text-neutral-700">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container-custom">
          <SectionTitle title="Meet the team" subtitle="Specialists across OT, speech, ABA, special education, and developmental therapy" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
                <img src={member.image} alt={`${member.name} at ${BRAND_NAME}`} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <p className="text-base font-bold text-neutral-900">{member.name}</p>
                  <p className="text-sm text-primary-700">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-700">
              Official brochure and training details are available in{' '}
              <Link to="/services#brochure-programs" className="font-semibold text-primary-700 hover:underline">Services</Link>.
              {' '}Reach us at <a href={`mailto:${EMAIL}`} className="font-semibold text-primary-700 hover:underline">{EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary-100 bg-gradient-to-r from-primary-50 via-white to-sky-50 p-8 text-center shadow-sm">
            <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-700">
              <Milestone className="h-4 w-4" />
              Our Promise
            </p>
            <p className="text-xl italic leading-relaxed text-neutral-700">
              &ldquo;Every child deserves support that respects their pace, potential, and family context. We deliver practical therapy that creates real-life progress.&rdquo;
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
              <Stethoscope className="h-4 w-4" />
              {BRAND_NAME}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Visit Arura Across Chennai Centers"
        subtitle="Schedule a consultation to learn how we can support your child."
      />
    </>
  );
};

export default About;
