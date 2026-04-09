import React from 'react';
import {
  Award, BookOpen, Users, Briefcase, Building2, GraduationCap, HeartPulse, ShieldCheck, Linkedin, Facebook, Globe,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { BRAND_NAME } from '../config/brand';
const AravindImg = '/branding/aravind1.png';

const About: React.FC = () => {
  const whyChooseData = [
    { icon: Users, title: 'Multidisciplinary therapy team', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Briefcase, title: 'Individualized therapy plans', gradient: 'from-teal-500 to-cyan-600' },
    { icon: HeartPulse, title: 'Child-friendly therapy environment', gradient: 'from-blue-500 to-teal-600' },
    { icon: BookOpen, title: 'Parent involvement in therapy', gradient: 'from-emerald-500 to-teal-600' },
    { icon: Award, title: 'Evidence-based interventions', gradient: 'from-cyan-500 to-emerald-600' },
  ];

  const clinicHighlights = [
    { image: '/gallery/open_nag.png', title: 'Arura Clinic Exterior', description: 'A warm and welcoming therapy center designed for children and families.' },
    { image: '/gallery/interior2.png', title: 'Therapy Session Space', description: 'Child-friendly interiors that support focused, safe, and engaging sessions.' },
    { image: '/gallery/int3.png', title: 'Structured Learning Corner', description: 'Activity-based setup for speech, occupational, and developmental interventions.' },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
  } as const;

  return (
    <>
      <PageHeader
        title={`About ${BRAND_NAME}`}
        eyebrowText="Child-focused therapy support"
        subtitle="Excellence in healthcare education since 2020"
        description="Pioneering specialized healthcare education with innovation, hands-on training, and compassionate leadership."
        showFramework
        backgroundImage="https://images.pexels.com/photos/45842/clinic-medical-health-medicine-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="About Arura: mission, vision, leadership, facilities, and why families and students choose us."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp} transition={{ duration: 0.55 }}>
              <p className="inline-flex rounded-full bg-primary-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700">
                Welcome to Arura Integral Therapy Services
              </p>
              <h2 className="mt-4 text-4xl font-black text-neutral-900">Integrated Child Development & Rehabilitation Support</h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Arura Integral Therapy Services is a multidisciplinary child development centre dedicated to supporting children with developmental, learning,
                behavioural, and communication challenges through personalized and evidence-based care.
              </p>
              <p className="mt-4 text-neutral-700">
                We focus on early identification, individualized intervention plans, and parent-centered guidance so every child can build functional skills,
                confidence, and long-term independence.
              </p>
              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">We Provide Integrated Therapy Programs For</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Autism Spectrum Disorder',
                    'ADHD',
                    'Speech Delay',
                    'Learning Disabilities',
                    'Developmental Delay',
                    'Sensory Processing Difficulties',
                    'Behavioural Challenges',
                  ].map((condition) => (
                    <span key={condition} className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary-800">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, text: '5+ Years Experience' },
                  { icon: GraduationCap, text: 'Multidisciplinary Team' },
                  { icon: Building2, text: 'Child-Friendly Therapy Environment' },
                  { icon: HeartPulse, text: 'Parent Partnership Model' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-xl border border-primary-100 bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                      <item.icon size={18} />
                    </div>
                    <span className="text-sm font-semibold text-neutral-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-1">
                <article className="rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary-700">Parent Support Programs</h3>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                    <li>- Parent Guidance Sessions</li>
                    <li>- Home Program Training</li>
                    <li>- Child Progress Reviews</li>
                  </ul>
                  <Link
                    to="/parent-programs"
                    className="mt-4 inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-primary-700"
                  >
                    Explore Parent Programs
                  </Link>
                </article>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.1 }}>
              <div className="group relative overflow-hidden rounded-3xl border border-primary-100 bg-white p-3 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Institute overview"
                  className="h-[460px] w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-primary-900 py-20 text-white">
        <div className="container-custom">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Our Vision & Mission</h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-100">
              The foundation of how we support every child and family at Arura.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Award,
                title: 'Our Vision',
                description: 'To become a leading child development centre providing integrated therapy and school readiness programs for children across the community.',
              },
              {
                icon: HeartPulse,
                title: 'Our Mission',
                description: 'To provide early identification, high-quality therapy services, and family-centred support so that every child can reach their developmental potential.',
              },
            ].map((item, idx) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur"
              >
                <div className="mb-4 inline-flex rounded-full bg-brand-yellow/20 p-3 text-brand-yellow">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-50">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container-custom">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-14 text-center">
            <h2 className="text-4xl font-black text-neutral-900">{`Why Choose ${BRAND_NAME.toUpperCase()}?`}</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseData.map((item, idx) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white transition duration-300 group-hover:rotate-6`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-14 text-center">
            <h2 className="text-4xl font-black text-neutral-900">Our Leadership</h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
              Visionary leadership dedicated to transforming healthcare education with expertise and innovation.
            </p>
          </motion.div>
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-sky-50 shadow-2xl"
          >
            <div className="grid items-stretch lg:grid-cols-[360px_1fr]">
              <div className="relative">
                <img src={AravindImg} alt="Dr. AK Aravind" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <h3 className="text-2xl font-bold">Dr. AK Aravind</h3>
                  <p className="text-sm text-white/80">Chief Executive Officer</p>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h4 className="text-2xl font-bold text-primary-900">Distinguished Healthcare Leader</h4>
                <p className="mt-4 leading-relaxed text-neutral-700">
                  Dr. AK Aravind brings exceptional expertise as an Occupational Therapist, Mindfulness Trainer, and Brain Gym certified instructor.
                  With a Bachelor&apos;s degree in Occupational Therapy from TN Dr. M.G.R Medical University (2020), he combines clinical excellence with educational innovation.
                </p>
                <p className="mt-4 leading-relaxed text-neutral-700">
                  His specialized training in sensory integration, neurodevelopmental therapy, and behavioral interventions has positioned him as a thought leader in pediatric rehabilitation.
                </p>
                <div className="mt-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Key Expertise</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {['Sensory Integration', 'Brain Gym Training', 'Mindfulness Therapy', 'Pediatric Care'].map((skill) => (
                      <div key={skill} className="rounded-lg border border-primary-100 bg-white px-3 py-2 text-sm font-medium text-neutral-700">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Connect With Dr. Aravind</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {[
                      { href: 'https://www.linkedin.com/pub/dir/Dr.ak/Aravind', icon: Linkedin, label: 'LinkedIn' },
                      { href: 'https://www.facebook.com/aravind.bot.7/', icon: Facebook, label: 'Facebook' },
                      { href: 'https://akaravind369.blogspot.com/p/dr-ak-aravind.html', icon: Globe, label: 'Profile' },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow"
                      >
                        <link.icon size={16} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-14 text-center">
            <h2 className="text-4xl font-black text-neutral-900">Our Clinic & Therapy Sessions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
              A quick look at our real therapy environment and child-focused session spaces at Arura.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {clinicHighlights.map((facility, idx) => (
              <motion.article
                key={facility.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm"
              >
                <img src={facility.image} alt={facility.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-neutral-900">{facility.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{facility.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Our Therapy Environment', items: ['Safe and sensory-aware spaces for children', 'Structured stations for speech and occupational goals', 'Parent-friendly observation and discussion approach', 'Calm, welcoming atmosphere for better regulation'] },
              { title: 'How Sessions Are Delivered', items: ['Personalized plans based on clinical assessment', 'Goal-focused interventions with measurable progress', 'Play-based and evidence-informed therapy methods', 'Regular parent guidance and home-program support'] },
            ].map((section, idx) => (
              <motion.article
                key={section.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary-900">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-neutral-700">- {item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-900 py-20 text-white">
        <div className="container-custom">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 text-center">
            <h2 className="text-4xl font-black">Affiliations & Recognitions</h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-brand-yellow/20 p-4 text-brand-yellow">
                <Award size={40} />
              </div>
              <h3 className="text-3xl font-bold">Affiliated by Central Government of India</h3>
              <p className="mt-4 text-primary-100">
                Our programs are recognized and approved by relevant government bodies, ensuring high standards of education and professional credibility for our graduates.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { icon: Award, title: 'Quality Education', description: 'Meets national education standards' },
                { icon: GraduationCap, title: 'Recognized Diplomas', description: 'Nationally accepted qualifications' },
                { icon: Users, title: 'Industry Partners', description: 'Strong professional network' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center">
                  <item.icon className="mx-auto mb-3 text-brand-yellow" size={30} />
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="mt-1 text-sm text-primary-100">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Build Your Career With Confidence"
        subtitle="Join a learning ecosystem focused on practical excellence, compassion, and future-ready healthcare education."
      />
    </>
  );
};

export default About;
