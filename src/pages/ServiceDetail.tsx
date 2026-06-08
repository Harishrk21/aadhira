import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/servicesData';
import {
  Activity, MessageSquare, GraduationCap, Lightbulb, Baby, Brain,
  CheckCircle2, ArrowLeft, Clock, Users, Target, ArrowRight, Phone,
  ChevronRight, Star, Sparkles,
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { BRAND_NAME, PHONE_PRIMARY_E164, PHONE_PRIMARY_DISPLAY } from '../config/brand';
import { getSiteUrl } from '../config/site';
import { clinicId } from '../config/structuredDataClinic';
import { getKeywordProfile } from '../config/keywordEngine';
import { bestLocalSeoTitle, serviceKeywords, serviceMetaDescription } from '../config/seoContent';
import { getDunmarkPathwaysForService } from '../config/dunmarkPathways';

// ─── Per-service colour theme ─────────────────────────────────
const SERVICE_THEME: Record<string, {
  gradient: string; softBg: string; border: string; text: string;
  badge: string; btnClass: string; icon: JSX.Element; emoji: string;
  tagline: string; heroSummary: string; heroHighlights: string[]; signs: string[]; whoFor: string[];
}> = {
  'occupational-therapy': {
    gradient: 'from-blue-500 to-indigo-600',
    softBg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700', btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    icon: <Activity className="w-7 h-7" />, emoji: '🖐️',
    tagline: 'From fine motor to full daily independence',
    heroSummary: 'Occupational Therapy helps children become more independent in daily routines by improving sensory regulation, motor planning, hand skills, and self-care confidence.',
    heroHighlights: ['Daily-life skill building', 'Sensory regulation support', 'Motor planning + coordination', 'Parent-guided home carryover'],
    signs: [
      'Difficulty with writing, drawing, or colouring',
      'Trouble with buttons, zips, or cutlery',
      'Sensitivity to touch, textures, or movement',
      'Poor coordination or balance',
      'Difficulty with self-care tasks like dressing',
      'Avoidance of fine motor activities',
    ],
    whoFor: [
      'Children with sensory processing difficulties',
      'Kids with fine or gross motor delays',
      'Children with autism or ADHD',
      'Those with developmental delays',
      'Children needing daily living skill support',
    ],
  },
  'speech-therapy': {
    gradient: 'from-emerald-500 to-teal-600',
    softBg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700', btnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    icon: <MessageSquare className="w-7 h-7" />, emoji: '🗣️',
    tagline: 'Every child deserves a confident voice',
    heroSummary: 'Speech Therapy strengthens speech clarity, language understanding, and expressive communication so children can connect, learn, and participate with confidence.',
    heroHighlights: ['Speech clarity + articulation', 'Language comprehension growth', 'Expressive communication confidence', 'Family communication strategies'],
    signs: [
      'Not babbling or cooing by 12 months',
      'No single words by 16–18 months',
      'Limited vocabulary compared to peers',
      'Difficulty understanding simple instructions',
      'Unclear or unintelligible speech for age',
      'Stuttering or other fluency issues',
    ],
    whoFor: [
      'Children with speech or language delay',
      'Kids with autism spectrum disorder',
      'Children with articulation difficulties',
      'Those with hearing impairment',
      'Children needing communication support',
    ],
  },
  'special-education': {
    gradient: 'from-violet-500 to-purple-700',
    softBg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700', btnClass: 'bg-violet-600 hover:bg-violet-700 text-white',
    icon: <GraduationCap className="w-7 h-7" />, emoji: '📐',
    tagline: 'Learning tailored to every unique mind',
    heroSummary: 'Special Education provides individualized, structured learning support that improves academic readiness, classroom participation, and day-to-day learning confidence.',
    heroHighlights: ['Individualized learning plans', 'Academic skill strengthening', 'Multisensory teaching methods', 'School readiness progression'],
    signs: [
      'Struggling to read, write, or do maths at grade level',
      'Difficulty remembering instructions or sequences',
      'Problems with organisation and time management',
      'Inconsistent performance at school',
      'Low confidence or avoidance of schoolwork',
      'Difficulty understanding abstract concepts',
    ],
    whoFor: [
      'Children with learning disabilities (dyslexia, dyscalculia)',
      'Kids with intellectual disabilities',
      'Children with autism needing academic support',
      'Those in need of individualised education plans',
      'Children preparing for mainstream education',
    ],
  },
  'aba-therapy': {
    gradient: 'from-orange-500 to-amber-600',
    softBg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700', btnClass: 'bg-orange-600 hover:bg-orange-700 text-white',
    icon: <Lightbulb className="w-7 h-7" />, emoji: '🎯',
    tagline: 'Evidence-based behaviour change that lasts',
    heroSummary: 'ABA Therapy uses evidence-based behavioural strategies to reduce challenging behaviours and build communication, social, and adaptive skills in real-life settings.',
    heroHighlights: ['Behaviour understanding + structure', 'Skill-based positive reinforcement', 'Communication and social growth', 'Home-school consistency support'],
    signs: [
      'Frequent tantrums or aggressive behaviour',
      'Difficulty following instructions or routines',
      'Self-injurious or repetitive behaviours',
      'Limited social interaction or play skills',
      'Communication challenges in social settings',
      'Difficulty transitioning between activities',
    ],
    whoFor: [
      'Children with autism spectrum disorder',
      'Kids with challenging or unsafe behaviours',
      'Children with limited social or communication skills',
      'Those needing structured skill-building programmes',
      'Families needing consistent home-based strategies',
    ],
  },
  'early-intervention': {
    gradient: 'from-sky-500 to-blue-600',
    softBg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700', btnClass: 'bg-sky-600 hover:bg-sky-700 text-white',
    icon: <Baby className="w-7 h-7" />, emoji: '🌱',
    tagline: 'The earlier we start, the greater the impact',
    heroSummary: 'Early Intervention supports infants and toddlers during critical developmental years by building communication, play, motor, and social foundations through family-centered care.',
    heroHighlights: ['Milestone-focused support', 'Play-led foundational learning', 'Family-centered goal setting', 'Strong preschool transition base'],
    signs: [
      'Not reaching motor milestones (sitting, crawling, walking)',
      'Delayed or absent babbling and early words',
      'Limited response to name or faces',
      'Unusual muscle tone (too stiff or too floppy)',
      'Lack of social smiling or eye contact',
      'Limited play or exploration behaviour',
    ],
    whoFor: [
      'Infants and toddlers aged 0–3 years',
      'Children at risk for developmental delay',
      'Premature babies needing developmental support',
      'Children with known genetic conditions',
      'Families concerned about missed milestones',
    ],
  },
  'brain-gym': {
    gradient: 'from-fuchsia-500 to-pink-600',
    softBg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-700',
    badge: 'bg-fuchsia-100 text-fuchsia-700', btnClass: 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white',
    icon: <Brain className="w-7 h-7" />, emoji: '🧠',
    tagline: 'Movement that unlocks learning potential',
    heroSummary: 'Brain Gym Activities use movement-based methods to improve focus, memory, coordination, and emotional regulation, helping children engage better in learning.',
    heroHighlights: ['Movement-based brain activation', 'Focus + memory enhancement', 'Classroom learning readiness', 'Stress and regulation support'],
    signs: [
      'Short attention span and easy distractibility',
      'Difficulty remembering multi-step instructions',
      'Poor coordination or body awareness',
      'Stress or anxiety around schoolwork',
      'Difficulty organising thoughts or tasks',
      'Resistance or disengagement in learning',
    ],
    whoFor: [
      'Children with attention and focus challenges',
      'Kids with learning difficulties',
      'Children experiencing school-related stress',
      'Those with coordination or movement difficulties',
      'Children needing cognitive performance support',
    ],
  },
};

const serviceIcons: Record<string, JSX.Element> = {
  'occupational-therapy': <Activity className="w-5 h-5" />,
  'speech-therapy': <MessageSquare className="w-5 h-5" />,
  'special-education': <GraduationCap className="w-5 h-5" />,
  'aba-therapy': <Lightbulb className="w-5 h-5" />,
  'early-intervention': <Baby className="w-5 h-5" />,
  'brain-gym': <Brain className="w-5 h-5" />,
};

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'behaviour-therapy': 'aba-therapy',
};

type ProcessStep = {
  title: string;
  description: string;
  assessments?: Array<{ name: string; measures: string }>;
};

const STANDARDISED_ASSESSMENTS: Record<string, Array<{ name: string; measures: string }>> = {
  'occupational-therapy': [
    { name: 'DAYC-2', measures: 'Developmental milestones in children 0-5 years' },
    { name: 'Sensory Profile 2', measures: 'Sensory processing patterns affecting daily life' },
    { name: 'Peabody Developmental Motor Scales (PDMS-2)', measures: 'Fine and gross motor skills' },
    { name: 'BOT-2 (Bruininks-Oseretsky Test)', measures: 'Motor proficiency in children 4-21 years' },
  ],
  'speech-therapy': [
    { name: 'SLSE', measures: 'Speech, language, fluency, and voice in school-age children' },
    { name: 'LEST', measures: 'Early language milestones (0-6 years), widely used in South India' },
    { name: 'REELS (Receptive-Expressive Emergent Language Scale)', measures: 'Early receptive and expressive language' },
    { name: 'GFTA-3 (Goldman-Fristoe Test of Articulation)', measures: 'Articulation and phonological skills' },
  ],
  'special-education': [
    { name: 'WISC-V (Wechsler Intelligence Scale for Children)', measures: 'Cognitive ability and intellectual functioning' },
    { name: 'Vineland Adaptive Behavior Scales (VABS-3)', measures: 'Adaptive behaviour and daily living skills' },
    { name: 'WRAT-5 (Wide Range Achievement Test)', measures: 'Reading, spelling, and math achievement' },
    { name: 'NIMHANS Index for Specific Learning Disabilities', measures: 'Learning disabilities screening (widely used in India)' },
  ],
  'aba-therapy': [
    { name: 'VB-MAPP', measures: 'Verbal behaviour milestones, language, and social skills' },
    { name: 'PEAK', measures: 'Advanced knowledge, symbolic learning, and problem solving' },
    { name: 'ABLLS-R (Assessment of Basic Language and Learning Skills)', measures: 'Language, learning readiness, and academic skills' },
    { name: 'AFLS (Assessment of Functional Living Skills)', measures: 'Real-world independent living skills' },
  ],
  'early-intervention': [
    { name: 'DASII', measures: 'Developmental norms for Indian infants and toddlers' },
    { name: 'DAYC-2', measures: 'Early developmental milestones' },
    { name: 'M-CHAT-R (Modified Checklist for Autism in Toddlers)', measures: 'Early autism screening (16-30 months)' },
    { name: 'Portage Guide to Early Education', measures: 'Developmental skills for early intervention planning' },
  ],
  'brain-gym': [
    { name: 'DTVP-3 (Developmental Test of Visual Perception)', measures: 'Visual-motor integration and perception' },
    { name: 'VMI (Beery-Buktenica Developmental Test)', measures: 'Visual-motor integration skills' },
    { name: 'TVPS-4 (Test of Visual Perceptual Skills)', measures: 'Visual processing without motor involvement' },
    { name: 'Sensory Profile 2', measures: 'Sensory processing patterns linked to movement and attention' },
  ],
};

const withAssessmentStep = (process: ProcessStep[], serviceId: string): ProcessStep[] => {
  const assessments = STANDARDISED_ASSESSMENTS[serviceId];
  if (!assessments?.length) return process;

  const assessmentStep = {
    title: 'Standardised Assessments Used',
    description: 'We use validated tools to identify baseline skills and create a precise therapy plan.',
    assessments,
  };

  const firstStep = process[0];
  const remainingSteps = process.slice(1);
  return firstStep ? [firstStep, assessmentStep, ...remainingSteps] : [assessmentStep];
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = slug ? decodeURIComponent(slug).trim().toLowerCase() : '';
  const resolvedSlug = normalizedSlug ? (SERVICE_SLUG_ALIASES[normalizedSlug] ?? normalizedSlug) : '';

  const service = services.find((s) => s.id === resolvedSlug);
  const theme = SERVICE_THEME[resolvedSlug] ?? SERVICE_THEME['occupational-therapy'];
  const serviceFrameworkSummary = `Each ${service?.title ?? 'therapy'} plan at Arura blends assessment-based goals, engaging sessions, and parent-guided practice so progress carries into home, school, and social routines.`;
  const serviceFrameworkIdeas = [
    { label: 'Primary Focus', text: theme.heroHighlights[0] ?? 'Goal-oriented intervention planning' },
    { label: 'Therapy Goal', text: theme.heroHighlights[1] ?? 'Skill growth tracked with regular reviews' },
    { label: 'Carryover Plan', text: theme.heroHighlights[2] ?? 'Parent coaching for daily routine practice' },
  ];

  const siteUrl = getSiteUrl();
  const servicePageUrl = service && siteUrl ? `${siteUrl}/services/${service.id}` : '';
  const serviceJsonLd = useMemo(() => {
    if (!siteUrl || !servicePageUrl || !service) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${servicePageUrl}#service`,
      name: `${service.title} — ${BRAND_NAME}`,
      description: service.longDescription,
      serviceType: service.title,
      url: servicePageUrl,
      provider: { '@id': clinicId(siteUrl) },
      areaServed: { '@type': 'City', name: 'Chennai' },
    };
  }, [siteUrl, servicePageUrl, service]);

  if (!service) {
    return (
      <section className="bg-white py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-neutral-900">Service Not Found</h1>
          <p className="mt-3 text-neutral-600">
            We could not find this therapy page. Please choose a service from the list below.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            View All Services
          </Link>
        </div>
      </section>
    );
  }
  const keywordProfile = getKeywordProfile(`/services/${service.id}`);
  const seoTitle = bestLocalSeoTitle(service.title);
  const seoDescription = serviceMetaDescription(service.title, service.shortDescription);

  const relatedServices = services.filter((s) => s.id !== resolvedSlug).slice(0, 3);
  const serviceProcessWithAssessments = withAssessmentStep(service.process, service.id);
  const processSteps = serviceProcessWithAssessments.some((step) => step.title.toLowerCase().includes('group session'))
    ? serviceProcessWithAssessments
    : [
      ...serviceProcessWithAssessments,
      {
        title: 'Group Sessions (When Suitable)',
        description: 'Small-group sessions are available to support peer interaction, communication, and shared skill practice.',
      },
    ];

  const dunmarkPathways = getDunmarkPathwaysForService(service.id);
  const ogImage = service.image.startsWith('http') ? service.image : siteUrl ? `${siteUrl}${service.image}` : service.image;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={serviceKeywords(service.title)} />
        {servicePageUrl ? <meta property="og:url" content={servicePageUrl} /> : null}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${service.title} support for children at ${BRAND_NAME}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        {serviceJsonLd ? (
          <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        ) : null}
      </Helmet>

      <PageHeader
        title={service.title}
        subtitle={theme.tagline}
        description={theme.heroSummary}
        backgroundImage={service.image}
        metaTitle={seoTitle}
        metaDescription={seoDescription}
        frameworkSummary={serviceFrameworkSummary}
        frameworkIdeas={serviceFrameworkIdeas}
      >
        <p className="max-w-3xl rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-medium leading-relaxed text-neutral-700 shadow-sm">
          Key focus:
          {theme.heroHighlights.map((item) => (
            <span key={item} className="font-semibold text-primary-800">
              {' '}
              {item}
              {item !== theme.heroHighlights[theme.heroHighlights.length - 1] ? ' |' : '.'}
            </span>
          ))}
        </p>
      </PageHeader>

      {/* ── Colour Banner ── */}
      <section className={`bg-gradient-to-r ${theme.gradient} py-5`}>
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/services" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <div className="flex flex-wrap items-center gap-3 justify-center">
                {[
                { icon: <Users className="w-4 h-4" />, label: `Ages: ${service.ageGroups}` },
                { icon: <Clock className="w-4 h-4" />, label: '45–60 min / session' },
                  { icon: <Target className="w-4 h-4" />, label: 'Frequency based on progress' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About + Signs + Who For ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white`}>
                    {theme.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">About {service.title}</h2>
                </div>
                <p className="text-neutral-700 leading-relaxed text-base">{service.longDescription}</p>
              </motion.div>

              {/* Signs + Who For — side by side */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-6 border-2 ${theme.border} ${theme.softBg}`}
                >
                  <h3 className={`font-extrabold text-base mb-4 flex items-center gap-2 ${theme.text}`}>
                    <span className="text-lg">🔍</span> Signs to Look For
                  </h3>
                  <ul className="space-y-2.5">
                    {theme.signs.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-6 border-2 ${theme.border} ${theme.softBg}`}
                >
                  <h3 className={`font-extrabold text-base mb-4 flex items-center gap-2 ${theme.text}`}>
                    <span className="text-lg">👶</span> Who Benefits
                  </h3>
                  <ul className="space-y-2.5">
                    {theme.whoFor.map((w) => (
                      <li key={w} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${theme.text}`} />
                        {w}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6"
              >
                <h3 className="font-extrabold text-xl text-neutral-900 mb-5 flex items-center gap-2">
                  <Sparkles className={`w-5 h-5 ${theme.text}`} /> Benefits of {service.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className={`flex items-start gap-3 ${theme.softBg} border ${theme.border} rounded-xl p-4`}>
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {i + 1}
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-extrabold text-xl text-neutral-900 mb-6 flex items-center gap-2">
                  <Target className={`w-5 h-5 ${theme.text}`} /> Our Therapy Process
                </h3>
                <div className="space-y-4">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${theme.gradient} text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md`}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className={`flex-1 rounded-xl p-4 border ${theme.border} ${theme.softBg}`}>
                        <p className={`font-bold text-sm ${theme.text} mb-1`}>{step.title}</p>
                        <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                        {step.assessments?.length ? (
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {step.assessments.map((assessment) => (
                              <div key={assessment.name} className="rounded-lg border border-white bg-white/80 p-3">
                                <p className="text-sm font-semibold text-neutral-900">{assessment.name}</p>
                                <p className="mt-1 text-xs leading-relaxed text-neutral-600">{assessment.measures}</p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">

                {/* Service quick-info card */}
                <div className={`rounded-2xl overflow-hidden shadow-xl border-2 ${theme.border}`}>
                  <div className={`bg-gradient-to-br ${theme.gradient} p-5 text-white`}>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        {theme.icon}
                      </div>
                      <div>
                        <p className="text-white/70 text-xs">Service</p>
                        <h3 className="font-extrabold text-base leading-tight">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className={`${theme.softBg} p-5 space-y-3`}>
                    {[
                      { icon: <Users className="w-4 h-4" />, label: 'Age Group', value: service.ageGroups },
                      { icon: <Clock className="w-4 h-4" />, label: 'Session Duration', value: '45–60 minutes' },
                      { icon: <Target className="w-4 h-4" />, label: 'Frequency', value: 'Planned based on your child’s progress' },
                      { icon: <Star className="w-4 h-4" />, label: 'Approach', value: 'Evidence-based, play-led' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-white shadow-sm">
                        <div className={`${theme.text} mt-0.5 shrink-0`}>{row.icon}</div>
                        <div>
                          <p className="text-xs text-neutral-500 font-medium">{row.label}</p>
                          <p className="text-sm font-bold text-neutral-800">{row.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/book-appointment"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-bold text-sm ${theme.btnClass} shadow-md transition-colors`}
                  >
                    Book an Assessment <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${PHONE_PRIMARY_E164}`}
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-bold text-sm border-2 ${theme.border} ${theme.text} hover:bg-white transition-colors`}
                  >
                    <Phone className="w-4 h-4" /> {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <Link
                    to="/services"
                    className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-sm border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors"
                  >
                    All Services
                  </Link>
                </div>

                {/* Why Arura snippet */}
                <div className="bg-primary-900 rounded-2xl p-5 text-white">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-3">Why Arura?</p>
                  <ul className="space-y-2">
                    {['Multidisciplinary team', 'Individualised therapy plans', 'Parent-involved progress reviews', '4 centres across Chennai'].map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-neutral-900 mb-2">Related Services</h2>
            <p className="text-neutral-600 text-sm">These therapies often work best when combined with {service.title}.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map((rel, idx) => {
              const relTheme = SERVICE_THEME[rel.id];
              return (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl border-2 ${relTheme.border} transition-all`}
                >
                  <div className={`bg-gradient-to-br ${relTheme.gradient} p-4 flex items-center gap-3`}>
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      {serviceIcons[rel.id]}
                    </div>
                    <h3 className="text-white font-extrabold text-sm leading-tight">{rel.title}</h3>
                  </div>
                  <div className={`${relTheme.softBg} p-4`}>
                    <p className="text-neutral-600 text-xs mb-3 leading-relaxed">{rel.shortDescription}</p>
                    <Link
                      to={`/services/${rel.id}`}
                      className={`flex items-center gap-1 text-xs font-bold ${relTheme.text} hover:underline`}
                    >
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {keywordProfile ? (
        <section className="bg-white py-12">
          <div className="container-custom">
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <h2 className="text-xl font-extrabold text-neutral-900">
                Popular {service.title} searches we support
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Families commonly reach this page while searching for {keywordProfile.primary}, plus nearby support in
                Villivakkam, Korattur, Anna Nagar, Ambattur, Kolathur, Perambur, and Ayanavaram.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[keywordProfile.primary, ...keywordProfile.secondary, ...keywordProfile.local.slice(0, 6)].map((keyword) => (
                  <span key={keyword} className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary-800">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-50 py-12">
        <div className="container-custom">
          <div className="rounded-2xl border border-sky-100 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">Arura x Dunmark Pathway</p>
            <h2 className="mt-2 text-xl font-extrabold text-neutral-900">Related Institute Courses for {service.title}</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Families often ask for both therapy support and future learning pathways. These Dunmark Institute course pages are relevant to this service area.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dunmarkPathways.map((pathway) => (
                <a
                  key={pathway.url}
                  href={pathway.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-sky-100 bg-sky-50 p-4 transition hover:border-sky-200 hover:bg-white"
                >
                  <p className="text-sm font-bold text-sky-800">{pathway.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">{pathway.reason}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Start ${service.title}?`}
        subtitle={`Book an assessment at ${BRAND_NAME} and our team will create a personalised plan for your child.`}
      />
    </>
  );
};

export default ServiceDetail;
