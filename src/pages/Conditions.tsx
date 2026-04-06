import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import {
  Puzzle, Zap, BookOpen, Activity, Heart, Brain, Mic2, CheckCircle2,
  ChevronRight, Users, Lightbulb, GraduationCap, Target, Star,
  ArrowRight, Phone,
} from 'lucide-react';
import {
  BRAND_NAME, PHONE_PRIMARY_E164, PHONE_PRIMARY_DISPLAY,
} from '../config/brand';

// ─── Conditions ───────────────────────────────────────────────
const CONDITIONS = [
  {
    id: 'autism',
    label: 'Autism Spectrum Disorder',
    short: 'ASD',
    emoji: '🧩',
    gradient: 'from-violet-500 to-purple-600',
    softBg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    icon: <Puzzle className="w-6 h-6" />,
    description:
      'A neurodevelopmental condition affecting social interaction, communication, behaviour, and sensory processing. Early intervention can make a profound positive impact.',
    signs: [
      'Delayed speech or language skills',
      'Difficulty with social interaction and eye contact',
      'Repetitive behaviours or restricted interests',
      'Sensory sensitivities (sounds, lights, textures)',
      'Challenges with changes in routine',
    ],
    approach: [
      'Applied Behaviour Analysis (ABA) Therapy',
      'Speech and Language Therapy',
      'Occupational Therapy for sensory processing',
      'Social Skills Training',
      'Special Education support',
    ],
    image: '/ASD.png',
  },
  {
    id: 'adhd',
    label: 'ADHD',
    short: 'ADHD',
    emoji: '⚡',
    gradient: 'from-amber-400 to-orange-500',
    softBg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
    icon: <Zap className="w-6 h-6" />,
    description:
      'Persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily functioning. With the right support, children with ADHD can thrive.',
    signs: [
      'Difficulty sustaining attention in tasks or play',
      'Excessive physical movement — fidgeting, running',
      'Easily distracted by external stimuli',
      'Difficulty waiting turns or interrupting others',
      'Forgetfulness in daily tasks',
    ],
    approach: [
      'Behavioural Therapy',
      'Parent Training and Education',
      'Occupational Therapy for self-regulation',
      'Brain Gym Activities for focus and attention',
      'School accommodation planning',
    ],
    image: '/ADHD.png',
  },
  {
    id: 'speech-delay',
    label: 'Speech Delay',
    short: 'Speech',
    emoji: '💬',
    gradient: 'from-sky-500 to-blue-600',
    softBg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    icon: <Mic2 className="w-6 h-6" />,
    description:
      'When a child does not meet typical speech and language milestones. Early speech therapy can close developmental gaps and build confident communicators.',
    signs: [
      'Not babbling by 12 months',
      'No single words by 16 months',
      'Limited vocabulary compared to peers',
      'Difficulty understanding instructions',
      'Unclear or unintelligible speech for age',
    ],
    approach: [
      'Speech Delay Intervention',
      'Language Development Therapy',
      'Articulation Therapy',
      'Communication Therapy for Autism',
      'Oral Motor Therapy',
    ],
    image: '/speech_delay.png',
  },
  {
    id: 'learning-disabilities',
    label: 'Learning Disabilities',
    short: 'Learning',
    emoji: '📚',
    gradient: 'from-emerald-500 to-teal-600',
    softBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    icon: <BookOpen className="w-6 h-6" />,
    description:
      'Neurologically-based challenges with reading, writing, or maths. Often unrelated to intelligence — children with learning disabilities frequently have average or above-average IQs.',
    signs: [
      'Difficulty with reading, writing, or mathematics',
      'Problems with attention, memory, or organisation',
      'Trouble following directions or sequences',
      'Poor coordination or spatial awareness',
      'Inconsistent school performance',
    ],
    approach: [
      'Learning Disability Intervention',
      'Academic Skill Development',
      'Reading & Writing Skill Training',
      'Math Skill Development',
      'Assistive Technology support',
    ],
    image: '/Learning_disabiliites.png',
  },
  {
    id: 'developmental-delay',
    label: 'Developmental Delay',
    short: 'Dev. Delay',
    emoji: '🌱',
    gradient: 'from-teal-500 to-cyan-600',
    softBg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700',
    icon: <Activity className="w-6 h-6" />,
    description:
      'When a child does not reach developmental milestones in one or more areas — motor, language, social, or cognitive. Early support enables significant catch-up.',
    signs: [
      'Late walking, crawling, or motor milestones',
      'Delayed language development',
      'Difficulty with social interactions',
      'Shorter attention span than peers',
      'Challenges with self-care and daily routines',
    ],
    approach: [
      'Early Intervention services',
      'Occupational Therapy for motor skills',
      'Speech and Language Therapy',
      'Special Education with individualised plans',
      'Parent coaching and home programmes',
    ],
    image: '/developmental_Delay.png',
  },
  {
    id: 'sensory-processing',
    label: 'Sensory Processing',
    short: 'Sensory',
    emoji: '🌀',
    gradient: 'from-rose-500 to-pink-600',
    softBg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-700',
    icon: <Brain className="w-6 h-6" />,
    description:
      'When the brain has trouble receiving and responding to information from the senses. Can lead to over- or under-sensitivity affecting daily functioning and behaviour.',
    signs: [
      'Extreme sensitivity to sounds, textures, or lights',
      'Seeking intense sensory input (crashing, spinning)',
      'Difficulty with clothing textures or food textures',
      'Poor body awareness and coordination',
      'Meltdowns in busy or loud environments',
    ],
    approach: [
      'Sensory Integration Therapy',
      'Sensory Diet programming',
      'Occupational Therapy',
      'Mindfulness and self-regulation techniques',
      'Parent education on sensory strategies',
    ],
    image: '/sensory.png',
  },
  {
    id: 'behavioural-challenges',
    label: 'Behavioural Challenges',
    short: 'Behaviour',
    emoji: '🤝',
    gradient: 'from-red-500 to-rose-600',
    softBg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
    icon: <Heart className="w-6 h-6" />,
    description:
      'Persistent behaviours that interfere with learning, social interaction, or daily life. Our behaviour team identifies root causes and builds positive strategies for the whole family.',
    signs: [
      'Frequent outbursts or tantrums beyond expected age',
      'Aggressive behaviour toward self or others',
      'Severe non-compliance with routines',
      'Difficulty with emotional regulation',
      'Withdrawal and refusal at school or home',
    ],
    approach: [
      'Behaviour Modification programmes',
      'Autism Behaviour Support',
      'Emotional Regulation Training',
      'Social Skills Development',
      'ABA Therapy',
    ],
    image: '/behaviural_challenges.png',
  },
];

// ─── Therapy Services (from brochure) ─────────────────────────
const THERAPY_SERVICES = [
  {
    title: 'Occupational Therapy',
    gradient: 'from-blue-500 to-indigo-600',
    softBg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    icon: <Activity className="w-7 h-7" />,
    emoji: '🖐️',
    link: '/services/occupational-therapy',
    items: [
      'Sensory Integration Therapy',
      'Fine Motor Skill Training',
      'Hand Function Training',
      'Activities of Daily Living Training',
      'Motor Coordination Therapy',
    ],
  },
  {
    title: 'Speech & Language Therapy',
    gradient: 'from-emerald-500 to-teal-600',
    softBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    icon: <Mic2 className="w-7 h-7" />,
    emoji: '🗣️',
    link: '/services/speech-therapy',
    items: [
      'Speech Delay Intervention',
      'Language Development Therapy',
      'Articulation Therapy',
      'Communication Therapy for Autism',
      'Oral Motor Therapy',
    ],
  },
  {
    title: 'Special Education',
    gradient: 'from-violet-500 to-purple-700',
    softBg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    icon: <GraduationCap className="w-7 h-7" />,
    emoji: '📐',
    link: '/services/special-education',
    items: [
      'Learning Disability Intervention',
      'Academic Skill Development',
      'Reading & Writing Skill Training',
      'Math Skill Development',
      'Individualised Education Plans',
    ],
  },
  {
    title: 'Behaviour Therapy',
    gradient: 'from-orange-500 to-amber-600',
    softBg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    icon: <Target className="w-7 h-7" />,
    emoji: '🎯',
    link: '/services/aba-therapy',
    items: [
      'Behaviour Modification',
      'Autism Behaviour Support',
      'Emotional Regulation Training',
      'Social Skills Development',
      'Applied Behaviour Analysis (ABA)',
    ],
  },
];

// ─── Special Programs ──────────────────────────────────────────
const SPECIAL_PROGRAMS = [
  {
    title: 'School Readiness Program',
    tag: '3-Hour Program',
    gradient: 'from-sky-500 to-blue-600',
    softBg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    emoji: '🏫',
    link: '/school-readiness-program',
    items: [
      'Attention & Concentration Training',
      'Pre-Writing & Fine Motor Skills',
      'Communication Development',
      'Classroom Behaviour Training',
      'Social Interaction Skills',
    ],
  },
  {
    title: 'Brain Gym & Mindfulness',
    tag: 'Group Sessions',
    gradient: 'from-fuchsia-500 to-pink-600',
    softBg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-700',
    emoji: '🧠',
    link: '/services/brain-gym',
    items: [
      'Brain Gym Exercises',
      'Coordination Activities',
      'Breathing Exercises',
      'Emotional Regulation Training',
      'Mindfulness Training',
    ],
  },
  {
    title: 'Handwriting Training',
    tag: 'Fine Motor Program',
    gradient: 'from-teal-500 to-cyan-600',
    softBg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    emoji: '✏️',
    link: '/programs/handwriting-fine-motor',
    items: [
      'Pencil Grip',
      'Letter Formation',
      'Writing Speed',
      'Writing Clarity',
      'Fine Motor Strengthening',
    ],
  },
  {
    title: 'Parent Support Services',
    tag: 'Family Programme',
    gradient: 'from-rose-500 to-pink-600',
    softBg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    emoji: '👨‍👩‍👧',
    link: '/programs/parent-caregiver-training',
    items: [
      'Parent Guidance Sessions',
      'Home Program Training',
      'Child Progress Reviews',
      'Caregiver Training Programs',
      'Family-Centred Goal Setting',
    ],
  },
];

// ─── Why Choose Arura ─────────────────────────────────────────
const WHY_CHOOSE = [
  { icon: <Users className="w-6 h-6" />, title: 'Multidisciplinary Therapy Team', desc: 'OT, Speech, ABA, Special Education, and more — all under one roof.' },
  { icon: <Target className="w-6 h-6" />, title: 'Individualised Therapy Plans', desc: 'Every child gets a custom plan with measurable goals and regular reviews.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Child-Friendly Environment', desc: 'Welcoming, engaging spaces designed to make therapy feel like play.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Evidence-Based Interventions', desc: 'All approaches are grounded in the latest research and clinical standards.' },
  { icon: <Star className="w-6 h-6" />, title: 'Parent Involvement in Therapy', desc: 'We coach families to carry progress home — making therapy 24/7.' },
];

// ─── Additional Services (from banner) ────────────────────────
const ADDITIONAL_SERVICES = [
  'Developmental Therapy', 'Play Therapy', 'Feeding & Oral Motor Therapy',
  'Cognitive & Learning Skills', 'Group Therapy', 'Sensory Integration Therapy',
  'Assistive Technology Consultation', 'Parent & Caregiver Training Programs',
  'Handwriting & Fine Motor Skill Training', 'Early Intervention',
];

const Conditions = () => {
  const [active, setActive] = useState(CONDITIONS[0].id);
  const selected = CONDITIONS.find((c) => c.id === active) || CONDITIONS[0];

  return (
    <>
      <Helmet>
        <title>Conditions We Treat | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Arura Integral Therapy Services supports children with Autism, ADHD, Speech Delay, Learning Disabilities, Developmental Delay, Sensory Processing Difficulties, and Behavioural Challenges across Chennai centres."
        />
        <meta
          name="keywords"
          content="autism therapy Chennai, ADHD treatment Villivakkam, speech delay therapy, learning disabilities, developmental delay, sensory processing, behaviour therapy, Arura therapy"
        />
      </Helmet>

      <PageHeader
        title="Conditions We Treat"
        subtitle="Specialised therapy for every developmental journey"
        description="Our multidisciplinary team supports children with autism, ADHD, speech delay, learning differences, sensory processing challenges, and behavioural difficulties — using integrated, evidence-based frameworks tailored to each child."
        backgroundImage="/specialised_therapy.png"
        metaDescription="Arura Integral Therapy Services — support for Autism, ADHD, Speech Delay, Learning Disabilities, Sensory Processing, and Behavioural Challenges across Chennai."
      />

      {/* ── Condition Selector + Detail ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Conditions We Support
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Understanding Developmental Conditions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Early diagnosis and intervention can make a life-changing difference. Select a condition below to learn about signs and our approach.
            </p>
          </motion.div>

          {/* Condition Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {CONDITIONS.map((c, idx) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.06 }}
                viewport={{ once: true }}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all border-2 ${
                  active === c.id
                    ? `bg-gradient-to-r ${c.gradient} text-white border-transparent shadow-lg`
                    : `${c.softBg} ${c.text} ${c.border} hover:shadow-md`
                }`}
              >
                <span>{c.emoji}</span>
                {c.short}
              </motion.button>
            ))}
          </div>

          {/* Condition Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-5 gap-8 items-start"
            >
              {/* Left Image + Summary */}
              <div className="lg:col-span-2">
                <div className={`rounded-2xl overflow-hidden shadow-xl border-2 ${selected.border}`}>
                  <div className={`bg-gradient-to-br ${selected.gradient} p-5 flex items-center gap-4`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      {selected.icon}
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-widest">Condition</p>
                      <h3 className="text-white font-extrabold text-lg leading-tight">{selected.label}</h3>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={selected.image}
                      alt={selected.label}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className={`${selected.softBg} p-5`}>
                    <p className="text-neutral-700 text-sm leading-relaxed">{selected.description}</p>
                    <Link
                      to="/book-appointment"
                      className={`mt-4 flex items-center gap-2 text-sm font-bold ${selected.text} hover:underline`}
                    >
                      Book an Assessment <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Signs + Approach */}
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                <div className={`rounded-2xl p-6 border ${selected.border} ${selected.softBg}`}>
                  <h4 className={`font-extrabold text-base mb-4 flex items-center gap-2 ${selected.text}`}>
                    <span className="text-lg">🔍</span> Common Signs
                  </h4>
                  <ul className="space-y-3">
                    {selected.signs.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl p-6 border border-primary-100 bg-primary-50">
                  <h4 className="font-extrabold text-base mb-4 flex items-center gap-2 text-primary-700">
                    <span className="text-lg">💡</span> Our Approach
                  </h4>
                  <ul className="space-y-3">
                    {selected.approach.map((a, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All conditions quick nav */}
                <div className="sm:col-span-2 bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-3">All Conditions</p>
                  <div className="flex flex-wrap gap-2">
                    {CONDITIONS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActive(c.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          active === c.id
                            ? `bg-gradient-to-r ${c.gradient} text-white shadow`
                            : `${c.badge} hover:shadow`
                        }`}
                      >
                        {c.emoji} {c.short}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Therapy Services (from brochure) ── */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Therapy Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Our Core Therapy Disciplines
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Four specialist disciplines — working together as one integrated team to deliver comprehensive care for your child.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THERAPY_SERVICES.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${svc.border}`}
              >
                <div className={`bg-gradient-to-br ${svc.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      {svc.icon}
                    </div>
                    <div>
                      <span className="text-white/60 text-xs">Core Service</span>
                      <h3 className="text-white font-extrabold text-base leading-tight">{svc.title}</h3>
                    </div>
                  </div>
                </div>
                <div className={`${svc.softBg} p-5`}>
                  <ul className="space-y-2 mb-4">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                        <ChevronRight className={`w-4 h-4 ${svc.text} shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={svc.link}
                    className={`flex items-center justify-center gap-2 w-full text-sm font-bold py-2.5 rounded-xl border-2 ${svc.border} ${svc.text} hover:bg-white transition-colors`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Special Programs ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Special Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Structured Programmes for Every Need
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Beyond one-on-one therapy — group programmes, school preparation, and parent education to make progress a family journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_PROGRAMS.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${prog.border}`}
              >
                <div className={`bg-gradient-to-br ${prog.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="relative z-10">
                    <span className="inline-block text-white/70 text-xs bg-white/10 px-2 py-0.5 rounded-full mb-2">{prog.tag}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{prog.emoji}</span>
                      <h3 className="text-white font-extrabold text-base leading-tight">{prog.title}</h3>
                    </div>
                  </div>
                </div>
                <div className={`${prog.softBg} p-5`}>
                  <ul className="space-y-2 mb-4">
                    {prog.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                        <ChevronRight className={`w-4 h-4 ${prog.text} shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={prog.link}
                    className={`flex items-center justify-center gap-2 w-full text-sm font-bold py-2.5 rounded-xl border-2 ${prog.border} ${prog.text} hover:bg-white transition-colors`}
                  >
                    View Programme <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Also Offered (Banner Services) ── */}
      <section className="py-14 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">Also Available at Arura</h3>
            <p className="text-neutral-600 text-sm">Our full service range covers every aspect of child development.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {ADDITIONAL_SERVICES.map((svc) => (
              <span
                key={svc}
                className="px-4 py-2 bg-white border border-primary-200 text-primary-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-primary-600 hover:text-white transition-all cursor-default"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Arura ── */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Why Families Trust Arura</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              We are a child development and rehabilitation centre dedicated to supporting children with developmental, learning, behavioural, and communication challenges.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {WHY_CHOOSE.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-brand-yellow" />
                </div>
                <h3 className="font-extrabold text-xl text-brand-yellow">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To provide <strong className="text-white">early identification</strong>, high-quality therapy services, and family-centred support so that <strong className="text-white">every child can reach their developmental potential</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="font-extrabold text-xl text-blue-300">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To become a <strong className="text-white">leading child development centre</strong> providing integrated therapy and school readiness programmes for children <strong className="text-white">across the community</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Early Intervention ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5905720/pexels-photo-5905720.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=2"
                  alt="Early intervention paediatric therapy session"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-brand-yellow rounded-2xl p-5 shadow-xl">
                  <p className="text-primary-900 font-extrabold text-2xl leading-none">0–3</p>
                  <p className="text-primary-700 text-xs font-semibold">Critical Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
                Early Intervention is Key
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">
                The Earlier, the Better
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Research consistently shows that <strong>early intervention</strong> significantly improves outcomes. The brain's neuroplasticity — its ability to form new connections — is at its highest during early childhood, making this the most critical window for therapeutic support.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Brain Plasticity', body: 'Early therapy capitalises on the brain\'s natural ability to rewire during critical developmental periods.' },
                  { title: 'Preventing Secondary Issues', body: 'Timely intervention can prevent or significantly reduce challenges that develop later.' },
                  { title: 'Family Empowerment', body: 'Parents learn effective strategies early — making support continuous at home.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-primary-50 rounded-xl p-4 border border-primary-100">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-primary-800 text-sm">{item.title}</p>
                      <p className="text-neutral-600 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book-appointment"
                  className="flex items-center gap-2 justify-center bg-primary-700 hover:bg-primary-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Schedule an Assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${PHONE_PRIMARY_E164}`}
                  className="flex items-center gap-2 justify-center border-2 border-primary-200 text-primary-700 hover:bg-primary-50 font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_PRIMARY_DISPLAY}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Is Your Child Showing Signs of a Developmental Condition?`}
        subtitle="Our team at ${BRAND_NAME} can help with assessment, diagnosis, and a personalised therapy plan. Reach out today."
      />
    </>
  );
};

export default Conditions;
