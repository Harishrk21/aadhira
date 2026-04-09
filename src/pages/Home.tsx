import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { services } from '../data/servicesData';
import { additionalPrograms } from '../data/additionalProgramsData';
import { getSiteUrl } from '../config/site';
import {
  BRAND_NAME,
  BRAND_SHORT,
  BRAND_TAGLINE,
  ADDRESS_CHENNAI,
  PHONE_PRIMARY_E164,
  PHONE_PRIMARY_DISPLAY,
} from '../config/brand';
import {
  Activity,
  MessageSquare,
  GraduationCap,
  Lightbulb,
  Baby,
  Brain,
  ArrowRight,
  Shield,
  HeartHandshake,
  Sparkles,
  Phone,
  MapPin,
  ClipboardList,
  Target,
  Home as HomeIcon,
  ChevronDown,
  Stethoscope,
} from 'lucide-react';
import AreasWeServe from '../components/seo-growth/AreasWeServe';
import TestimonialPreview from '../components/seo-growth/TestimonialPreview';
import SearchIntentLinks from '../components/seo-growth/SearchIntentLinks';

const serviceIcons: Record<string, JSX.Element> = {
  'occupational-therapy': <Activity className="w-6 h-6" />,
  'speech-therapy': <MessageSquare className="w-6 h-6" />,
  'special-education': <GraduationCap className="w-6 h-6" />,
  'aba-therapy': <Lightbulb className="w-6 h-6" />,
  'early-intervention': <Baby className="w-6 h-6" />,
  'brain-gym': <Brain className="w-6 h-6" />,
};

/** Hero — local brand imagery (paediatric therapy at Arura) */
const HERO_MAIN = '/specialised_therapy.png';
const HERO_CHILD_A = '/speech_therapy.png';
const HERO_CHILD_B = '/occupationa_therapy.png';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const faqItems: { q: string; a: string }[] = [
  {
    q: 'What is paediatric therapy, and who is it for?',
    a: `Paediatric therapy helps children build motor, communication, learning, and daily-living skills when development looks different from typical milestones. At ${BRAND_NAME} in Villivakkam, Chennai, we support infants through teens with structured assessments and family-friendly sessions.`,
  },
  {
    q: 'Do you serve only Villivakkam, or all of Chennai?',
    a: 'Our centre is in Villivakkam (Thiru Nagar). Families visit us from across North Chennai and nearby areas. Call us to discuss your location and appointment options.',
  },
  {
    q: 'How is occupational therapy different from speech therapy?',
    a: 'Occupational therapy (OT) focuses on sensory processing, fine motor skills, self-care, and participation in daily activities. Speech therapy targets clarity of speech, language, and communication. Many children benefit from both; we recommend programmes after an assessment.',
  },
  {
    q: 'What is early intervention?',
    a: 'Early intervention is therapy for very young children (often under 3) to support milestones in movement, communication, and play. Starting early in a Chennai-based programme like ours can improve long-term outcomes.',
  },
  {
    q: 'Do you offer ABA therapy in Chennai?',
    a: 'Yes. We provide Applied Behaviour Analysis (ABA) as part of our services for children who need structured behaviour and skill-building support. Details and suitability are discussed after assessment.',
  },
  {
    q: 'How do I book an appointment?',
    a: `Use our online booking page or call ${PHONE_PRIMARY_DISPLAY}. We will guide you on what to bring and what to expect at your first visit — Villivakkam, Valasaravakkam, Chengalpattu, or Nungambakkam.`,
  },
];

const journeySteps = [
  {
    icon: <ClipboardList className="h-7 w-7 text-primary-700" />,
    title: 'Assessment & discussion',
    text: 'We review development, strengths, and family priorities so therapy matches your child’s real life in Chennai—not a generic checklist.',
  },
  {
    icon: <Target className="h-7 w-7 text-amber-600" />,
    title: 'Goals you can track',
    text: 'Clear targets for OT, speech, ABA, or learning—aligned with school and home routines across Villivakkam and nearby neighbourhoods.',
  },
  {
    icon: <Stethoscope className="h-7 w-7 text-primary-700" />,
    title: 'Evidence-based sessions',
    text: 'Play-led, structured sessions in-clinic with strategies you can repeat at home for lasting progress.',
  },
  {
    icon: <HomeIcon className="h-7 w-7 text-amber-600" />,
    title: 'Home & school carryover',
    text: 'Parent coaching and practical tips so skills transfer beyond our therapy rooms.',
  },
];

const Home = () => {
  const siteUrl = getSiteUrl();
  const canonical = siteUrl ? `${siteUrl}/` : undefined;
  const ogUrl = canonical ?? undefined;
  const ogImage = siteUrl ? `${siteUrl}/specialised_therapy.png` : '/specialised_therapy.png';
  const totalTherapyPrograms = services.length + additionalPrograms.length + 1; // + School Readiness Program

  const faqStructuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }),
    [],
  );

  const pageTitle = `Paediatric Therapy Chennai Centers | ${BRAND_NAME}`;
  const pageDescription = `${BRAND_NAME} (${BRAND_TAGLINE}). Villivakkam, Valasaravakkam, Chengalpattu, Nungambakkam: OT, speech & language, ABA, sensory integration, early intervention, special education, school readiness, parent training, play therapy, Brain Gym, mindfulness, feeding & oral motor, assistive technology.`;

  return (
    <div className="bg-brand-cream text-neutral-800">
      <Helmet htmlAttributes={{ lang: 'en-IN' }}>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Arura Integral Therapy, paediatric therapy Chennai, Villivakkam, Valasaravakkam, Chengalpattu, Nungambakkam, occupational therapy, speech language therapy, ABA, sensory integration, early intervention, special education, play therapy, Brain Gym, mindfulness, Arura"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={BRAND_NAME} />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Villivakkam, Chennai" />
        {canonical ? <link rel="canonical" href={canonical} /> : null}

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`Paediatric therapy session with a child at ${BRAND_NAME}, Chennai`} />
        <meta property="og:locale" content="en_IN" />
        {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {/* Hero — glossy blue glass behind child imagery */}
      <section className="relative flex min-h-[min(90vh,880px)] items-center overflow-hidden bg-gradient-to-br from-primary-50 via-sky-50/90 to-primary-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,151,255,0.25),transparent)]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-primary-300/30 blur-3xl" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A7FEB' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 w-full pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
          <div className="rounded-[2rem] border border-white/80 bg-white/45 p-6 shadow-[0_8px_40px_rgba(26,127,235,0.12)] backdrop-blur-2xl ring-1 ring-primary-200/50 md:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
                className="text-center lg:text-left"
              >
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-100/80 px-4 py-1.5 text-sm font-semibold text-amber-900 shadow-sm backdrop-blur-sm"
                >
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  Paediatric therapy centre · Villivakkam, Chennai
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="mb-6 font-heading text-4xl font-bold leading-tight text-primary-950 md:text-5xl lg:text-[3.1rem] lg:leading-[1.12]"
                >
                  Where children{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-primary-700">grow brighter</span>
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-3 rounded bg-amber-400/50 md:h-4"
                      aria-hidden
                    />
                  </span>{' '}
                  <span className="text-neutral-800">every day</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-neutral-700 lg:mx-0 lg:max-w-lg"
                >
                  Evidence-based occupational therapy, speech therapy, ABA, special education, early intervention, and
                  Brain Gym — structured for families in Chennai who want clear goals, warm therapists, and skills that
                  carry into home and school.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="mb-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
                >
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-8 py-3.5 text-base font-bold text-primary-950 shadow-md shadow-amber-600/15 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-white/80"
                  >
                    Book a consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-primary-300/80 bg-white/60 px-8 py-3.5 text-base font-semibold text-primary-800 shadow-sm backdrop-blur-sm transition hover:border-primary-400 hover:bg-white/90"
                  >
                    Explore all services
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.55 }}
                  className="grid grid-cols-3 gap-4 rounded-2xl border border-primary-200/60 bg-white/50 px-3 py-6 backdrop-blur-md sm:gap-6 sm:px-4"
                >
                  {[
                    { label: 'Therapy programs', value: `${totalTherapyPrograms}` },
                    { label: 'Families since', value: '2015' },
                    { label: 'Clinic', value: 'Villivakkam' },
                  ].map((item) => (
                    <div key={item.label} className="text-center lg:text-left">
                      <p className="font-heading text-2xl font-bold text-primary-800 md:text-3xl">{item.value}</p>
                      <p className="text-xs text-neutral-600 sm:text-sm">{item.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="relative mx-auto w-full max-w-lg lg:max-w-none"
              >
                <div className="relative">
                  {/* Large glossy transparent blue plate — pediatric “glass” backdrop */}
                  <div
                    className="absolute -inset-8 z-0 rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-sky-200/55 via-primary-300/40 to-primary-500/45 shadow-[inset_0_2px_24px_rgba(255,255,255,0.45)] backdrop-blur-3xl"
                    aria-hidden
                  />
                  <div
                    className="absolute -inset-4 z-0 rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.5)_0%,rgba(59,151,255,0.12)_45%,rgba(14,116,200,0.18)_100%)] opacity-90"
                    aria-hidden
                  />
                  <div className="absolute -left-6 top-1/2 z-0 h-48 w-48 -translate-y-1/2 rounded-full bg-primary-400/25 blur-3xl" aria-hidden />
                  <div className="absolute -right-4 bottom-0 z-0 h-40 w-40 rounded-full bg-sky-300/30 blur-2xl" aria-hidden />

                  <div className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white/90 bg-white/25 shadow-2xl ring-1 ring-primary-200/50 backdrop-blur-md">
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-primary-600/20 via-transparent to-sky-300/25 mix-blend-soft-light"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-primary-900/20 via-transparent to-white/20"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[4] bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.45)_48%,rgba(255,255,255,0.08)_55%,transparent_65%)]"
                      aria-hidden
                    />
                    <img
                      src={HERO_MAIN}
                      alt={`Paediatric therapist with a child during a therapy activity at ${BRAND_NAME}, Villivakkam Chennai`}
                      className="relative z-[1] aspect-[4/3] w-full object-cover object-[center_28%] md:aspect-[5/4]"
                      width={720}
                      height={576}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>

                  <div className="absolute -left-4 top-6 z-20 w-[32%] max-w-[140px] sm:-left-6 sm:max-w-[160px] md:top-10">
                    <div className="overflow-hidden rounded-2xl border-2 border-white/90 bg-white/75 shadow-lg backdrop-blur-md ring-2 ring-amber-300/50">
                      <img
                        src={HERO_CHILD_A}
                        alt="Speech and language therapy session supporting communication skills at our Chennai centre"
                        className="aspect-square w-full object-cover"
                        width={160}
                        height={160}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="absolute -right-2 bottom-8 z-20 w-[34%] max-w-[150px] sm:-right-4 sm:max-w-[170px] md:bottom-10">
                    <div className="overflow-hidden rounded-2xl border-2 border-white/90 bg-white/75 shadow-lg backdrop-blur-md ring-2 ring-primary-300/55">
                      <img
                        src={HERO_CHILD_B}
                        alt="Occupational therapy session — fine motor and daily-living skills at Arura, Chennai"
                        className="aspect-square w-full object-cover"
                        width={170}
                        height={170}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="relative z-30 mx-auto mt-4 max-w-md rounded-2xl border border-primary-200/60 bg-white/70 px-4 py-3 text-center shadow-md backdrop-blur-md sm:px-5">
                    <p className="font-heading text-base font-bold text-primary-950 md:text-lg">{BRAND_NAME}</p>
                    <p className="mt-1 text-xs text-neutral-600">{BRAND_TAGLINE}</p>
                    <p className="mt-1 flex items-center justify-center gap-2 text-sm text-neutral-700">
                      <MapPin className="h-4 w-4 shrink-0 text-primary-600" />
                      {ADDRESS_CHENNAI.street}, {ADDRESS_CHENNAI.locality}, {ADDRESS_CHENNAI.city} {ADDRESS_CHENNAI.postalCode}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO + value prop */}
      <section className="border-b border-primary-100 bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">
              Paediatric therapy in Villivakkam, Chennai
            </h2>
            <p className="text-lg text-neutral-600 md:text-xl">
              {BRAND_NAME} is a dedicated children&apos;s therapy centre serving families in{' '}
              <strong className="font-semibold text-neutral-800">Villivakkam</strong>,{' '}
              <strong className="font-semibold text-neutral-800">North Chennai</strong>, and across the wider{' '}
              <strong className="font-semibold text-neutral-800">Chennai</strong> metro. Whether your paediatrician has
              suggested therapy or you have questions about milestones, we combine assessments, evidence-based methods,
              and parent coaching so progress continues at home—not only in sessions.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Shield className="h-7 w-7 text-primary-700" />,
                title: 'Evidence-based methods',
                body: 'OT, speech, ABA, special education, early intervention, and Brain Gym—chosen to match each child’s profile.',
              },
              {
                icon: <HeartHandshake className="h-7 w-7 text-amber-600" />,
                title: 'Parents as partners',
                body: 'Practical strategies for families in Chennai so skills transfer to school, play, and daily routines.',
              },
              {
                icon: <Sparkles className="h-7 w-7 text-primary-700" />,
                title: 'Play-led sessions',
                body: 'Engaging activities that build motor, language, learning, and behaviour skills in a child-friendly space.',
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-primary-100 bg-gradient-to-b from-white to-primary-50/80 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-amber-100/80 p-3 text-amber-800 ring-1 ring-amber-200/60">
                  {block.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-neutral-900">{block.title}</h3>
                <p className="text-neutral-600">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect — journey */}
      <section className="border-b border-primary-100 bg-primary-50/80 py-16 md:py-24">
        <div className="container-custom">
          <SectionTitle
            title={`What to expect at ${BRAND_SHORT}`}
            subtitle="A clear path from your first visit to ongoing paediatric therapy — Villivakkam, Valasaravakkam, Chengalpattu, Nungambakkam, and nearby regions."
          />
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {journeySteps.map((step) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-100 ring-1 ring-primary-200/80">
                  {step.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                  <p className="text-neutral-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-center text-sm text-neutral-600">
            <Link to="/about" className="font-semibold text-primary-800 underline-offset-4 hover:underline">
              About our team
            </Link>
            <span className="text-neutral-300" aria-hidden>
              ·
            </span>
            <Link to="/contact" className="font-semibold text-primary-800 underline-offset-4 hover:underline">
              Contact & directions
            </Link>
            <span className="text-neutral-300" aria-hidden>
              ·
            </span>
            <Link to="/book-appointment" className="font-semibold text-primary-800 underline-offset-4 hover:underline">
              Book appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionTitle
            title="Programs we offer"
            subtitle="Six specialised pathways — assessments, individualised goals, and measurable progress for children from infancy through adolescence."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-amber-400/40"
              >
                <Link to={`/services/${service.id}`} className="block overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary-100">
                    <img
                      src={service.image}
                      alt={`${service.title} — paediatric therapy at ${BRAND_NAME} Chennai`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                      <span className="inline-flex rounded-lg bg-amber-400/95 px-2.5 py-1 text-xs font-bold text-primary-950 shadow-sm">
                        {service.ageGroups}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700 ring-1 ring-primary-200/80">
                      {serviceIcons[service.id]}
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-neutral-900 md:text-xl">{service.title}</h3>
                  </div>
                  <p className="mb-5 flex-1 text-neutral-600">{service.shortDescription}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center font-semibold text-primary-700 transition hover:text-primary-900"
                  >
                    View program details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/conditions"
              className="mr-4 inline-flex items-center text-base font-semibold text-primary-800 underline-offset-4 hover:underline"
            >
              Conditions we support
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              to="/testimonials"
              className="ml-4 inline-flex items-center text-base font-semibold text-primary-800 underline-offset-4 hover:underline"
            >
              Family stories
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — FAQPage schema in Helmet */}
      <section className="border-t border-primary-100 bg-white py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <SectionTitle
            title="Questions about paediatric therapy in Chennai"
            subtitle="Straight answers for families considering OT, speech, ABA, or early intervention in Villivakkam and nearby areas."
          />
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-primary-100 bg-primary-50/50 px-5 py-4 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-neutral-900">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary-600 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 border-t border-primary-100/80 pt-3 text-neutral-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AreasWeServe />
      <TestimonialPreview />
      <SearchIntentLinks
        problemHref="/blog/early-signs-speech-therapy"
        solutionHref="/services/speech-therapy"
        trustHref="/testimonials"
      />

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-primary-200/60 bg-gradient-to-br from-primary-100/80 via-primary-50 to-sky-100/70 py-16 md:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" aria-hidden />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/80 bg-white/50 px-6 py-10 text-center shadow-[0_8px_32px_rgba(26,127,235,0.1)] backdrop-blur-xl md:px-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary-950 md:text-4xl">
              Meet In Real or book online
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Same-week enquiries welcome. Ask about assessments, wait times, and which programme fits your child.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                to="/book-appointment"
                className="inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-8 py-3.5 text-base font-bold text-primary-950 shadow-md shadow-amber-600/15 transition hover:bg-amber-300 sm:w-auto"
              >
                Schedule an appointment
              </Link>
              <a
                href={`tel:${PHONE_PRIMARY_E164}`}
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary-300/80 bg-white/70 px-8 py-3.5 text-base font-semibold text-primary-900 shadow-sm backdrop-blur-sm transition hover:border-primary-400 hover:bg-white sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5 text-primary-600" />
                {PHONE_PRIMARY_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
