import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import {
  Activity, MessageSquare, GraduationCap, Lightbulb, Baby, Brain,
  Search, ChevronRight, ArrowRight, CheckCircle2, Star, Users, Clock,
  MapPin, Phone, Filter, Sparkles, BookOpen, Heart, Target,
} from 'lucide-react';
import {
  BRAND_NAME, PHONE_PRIMARY_E164, PHONE_PRIMARY_DISPLAY, EMAIL,
} from '../config/brand';
import { additionalPrograms } from '../data/additionalProgramsData';

// ─── Core services with rich metadata ────────────────────────
const CORE_SERVICES = [
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    tagline: 'From fine motor to daily independence',
    shortDesc: 'Building the skills children need for school, play, and everyday life.',
    ageRange: '1 – 18 yrs',
    gradient: 'from-blue-500 to-indigo-600',
    softBg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    icon: <Activity className="w-6 h-6" />,
    emoji: '🖐️',
    category: 'therapy',
    subItems: [
      'Sensory Integration Therapy',
      'Fine Motor Skill Training',
      'Hand Function Training',
      'Activities of Daily Living',
      'Motor Coordination Therapy',
    ],
    image: '/occupationa_therapy.png',
    link: '/services/occupational-therapy',
  },
  {
    id: 'speech-therapy',
    title: 'Speech & Language Therapy',
    tagline: 'Every child deserves a confident voice',
    shortDesc: 'Improving speech clarity, language development, and communication.',
    ageRange: '1 – 15 yrs',
    gradient: 'from-emerald-500 to-teal-600',
    softBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    icon: <MessageSquare className="w-6 h-6" />,
    emoji: '🗣️',
    category: 'therapy',
    subItems: [
      'Speech Delay Intervention',
      'Language Development Therapy',
      'Articulation Therapy',
      'Communication Therapy for Autism',
      'Oral Motor Therapy',
    ],
    image: '/speech_therapy.png',
    link: '/services/speech-therapy',
  },
  {
    id: 'special-education',
    title: 'Special Education',
    tagline: "Learning tailored to your child's style",
    shortDesc: 'Customised academic support for children with diverse learning needs.',
    ageRange: '3 – 16 yrs',
    gradient: 'from-violet-500 to-purple-700',
    softBg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    icon: <GraduationCap className="w-6 h-6" />,
    emoji: '📐',
    category: 'training',
    subItems: [
      'Learning Disability Intervention',
      'Academic Skill Development',
      'Reading & Writing Skill Training',
      'Math Skill Development',
      'Individualised Education Plans',
    ],
    image: '/Learning_disabiliites.png',
    link: '/services/special-education',
  },
  {
    id: 'aba-therapy',
    title: 'Behaviour Therapy (ABA)',
    tagline: 'Evidence-based behaviour change',
    shortDesc: 'Reducing challenging behaviours, building social and communication skills.',
    ageRange: '2 – 15 yrs',
    gradient: 'from-orange-500 to-amber-600',
    softBg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    icon: <Lightbulb className="w-6 h-6" />,
    emoji: '🎯',
    category: 'therapy',
    subItems: [
      'Behaviour Modification',
      'Autism Behaviour Support',
      'Emotional Regulation Training',
      'Social Skills Development',
      'Parent-implemented ABA',
    ],
    image: '/behaviural_challenges.png',
    link: '/services/aba-therapy',
  },
  {
    id: 'early-intervention',
    title: 'Early Intervention',
    tagline: 'The earlier, the greater the impact',
    shortDesc: 'Proactive therapy for infants and toddlers during the critical 0–3 window.',
    ageRange: '0 – 3 yrs',
    gradient: 'from-sky-500 to-blue-600',
    softBg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    icon: <Baby className="w-6 h-6" />,
    emoji: '🌱',
    category: 'therapy',
    subItems: [
      'Developmental Screening',
      'Family-Centred Planning',
      'Play-Based Intervention',
      'Parent Coaching',
      'Milestone Progress Tracking',
    ],
    image: '/developmental_Delay.png',
    link: '/services/early-intervention',
  },
  {
    id: 'brain-gym',
    title: 'Brain Gym & Mindfulness',
    tagline: 'Movement that unlocks learning',
    shortDesc: 'Simple movement exercises enhancing focus, memory, and emotional balance.',
    ageRange: '3 – 18 yrs',
    gradient: 'from-fuchsia-500 to-pink-600',
    softBg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-700',
    badge: 'bg-fuchsia-100 text-fuchsia-700',
    icon: <Brain className="w-6 h-6" />,
    emoji: '🧠',
    category: 'specialized',
    subItems: [
      'Brain Gym Exercises',
      'Coordination Activities',
      'Breathing Exercises',
      'Emotional Regulation Training',
      'Mindfulness Practices',
    ],
    image: '/brain_gym.png',
    link: '/services/brain-gym',
  },
];

// ─── All programs (brochure) ──────────────────────────────────
type ProgramCategory = 'all' | 'therapy' | 'training' | 'specialized';

const ALL_PROGRAMS = [
  // Therapy
  { title: 'Occupational Therapy', category: 'therapy' as ProgramCategory, emoji: '🖐️', link: '/services/occupational-therapy', desc: 'Daily life skills, fine motor, sensory' },
  { title: 'Speech & Language Therapy', category: 'therapy' as ProgramCategory, emoji: '🗣️', link: '/services/speech-therapy', desc: 'Communication, articulation, language' },
  { title: 'Behaviour Therapy (ABA)', category: 'therapy' as ProgramCategory, emoji: '🎯', link: '/services/aba-therapy', desc: 'Behaviour modification, social skills' },
  { title: 'Sensory Integration', category: 'therapy' as ProgramCategory, emoji: '🌀', link: '/programs/sensory-integration', desc: 'Sensory processing, regulation' },
  { title: 'Developmental & Early Intervention', category: 'therapy' as ProgramCategory, emoji: '🌱', link: '/services/early-intervention', desc: 'Critical 0-3 year developmental window' },
  // Training
  { title: 'Special Education', category: 'training' as ProgramCategory, emoji: '📐', link: '/services/special-education', desc: 'Academic skills, learning strategies' },
  { title: 'School Readiness Program', category: 'training' as ProgramCategory, emoji: '🏫', link: '/programs/school-readiness', desc: '3-hour program for classroom readiness' },
  { title: 'Parent & Caregiver Training', category: 'training' as ProgramCategory, emoji: '👨‍👩‍👧', link: '/programs/parent-caregiver-training', desc: 'Practical strategies for home support' },
  { title: 'Cognitive & Learning Skills', category: 'training' as ProgramCategory, emoji: '💡', link: '/programs/cognitive-learning-skills', desc: 'Attention, memory, reasoning' },
  { title: 'Handwriting & Fine Motor', category: 'training' as ProgramCategory, emoji: '✏️', link: '/programs/handwriting-fine-motor', desc: 'Pencil grip, letter formation, speed' },
  // Specialized
  { title: 'Play Therapy', category: 'specialized' as ProgramCategory, emoji: '🧩', link: '/programs/play-therapy', desc: 'Emotional expression through play' },
  { title: 'Brain Gym', category: 'specialized' as ProgramCategory, emoji: '🧠', link: '/services/brain-gym', desc: 'Movement-based cognitive enhancement' },
  { title: 'Mindfulness', category: 'specialized' as ProgramCategory, emoji: '🧘', link: '/programs/mindfulness', desc: 'Breathing, focus, self-regulation' },
  { title: 'Feeding & Oral Motor Therapy', category: 'specialized' as ProgramCategory, emoji: '🥣', link: '/programs/feeding-oral-motor', desc: 'Chewing, swallowing, selective eating' },
  { title: 'Assistive Technology Consultation', category: 'specialized' as ProgramCategory, emoji: '🖥️', link: '/programs/assistive-technology-support', desc: 'AAC, visual schedules, learning aids' },
];

const CATEGORY_CONFIG = {
  all: { label: 'All Services', color: 'bg-primary-600 text-white', light: 'bg-primary-50 text-primary-700 border-primary-200' },
  therapy: { label: 'Therapy', color: 'bg-blue-600 text-white', light: 'bg-blue-50 text-blue-700 border-blue-200' },
  training: { label: 'Training & Education', color: 'bg-violet-600 text-white', light: 'bg-violet-50 text-violet-700 border-violet-200' },
  specialized: { label: 'Specialised Programs', color: 'bg-fuchsia-600 text-white', light: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200' },
};

// ─── Therapy Process ──────────────────────────────────────────
const PROCESS_STEPS = [
  { step: '01', title: 'Initial Enquiry', desc: 'Call or fill our form. We call back within 1 working day to understand your child\'s needs.', icon: <Phone className="w-5 h-5" />, color: 'text-sky-500' },
  { step: '02', title: 'Assessment', desc: 'A thorough multi-disciplinary evaluation identifies strengths, challenges, and therapy priorities.', icon: <Search className="w-5 h-5" />, color: 'text-blue-500' },
  { step: '03', title: 'Personalised Plan', desc: 'We create a specific goal-oriented therapy plan tailored to your child and family routines.', icon: <Target className="w-5 h-5" />, color: 'text-violet-500' },
  { step: '04', title: 'Therapy Sessions', desc: 'Regular sessions at your chosen centre, using play-based and evidence-based techniques.', icon: <Heart className="w-5 h-5" />, color: 'text-fuchsia-500' },
  { step: '05', title: 'Progress Reviews', desc: 'Regular reviews track milestones, adjust goals, and keep parents informed and involved.', icon: <Star className="w-5 h-5" />, color: 'text-emerald-500' },
];

// ─── Age Guide ────────────────────────────────────────────────
const AGE_GUIDE = [
  {
    range: '0 – 3 years',
    label: 'Infant & Toddler',
    emoji: '👶',
    color: 'from-sky-400 to-blue-500',
    softBg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    services: ['Early Intervention', 'Feeding & Oral Motor', 'Sensory Integration', 'Parent & Caregiver Training'],
  },
  {
    range: '3 – 7 years',
    label: 'Pre-school & Kindergarten',
    emoji: '🧒',
    color: 'from-emerald-400 to-teal-500',
    softBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    services: ['Occupational Therapy', 'Speech Therapy', 'Play Therapy', 'School Readiness', 'ABA Therapy'],
  },
  {
    range: '7 – 12 years',
    label: 'School Age',
    emoji: '📚',
    color: 'from-violet-400 to-purple-500',
    softBg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    services: ['Special Education', 'Handwriting & Fine Motor', 'Cognitive & Learning Skills', 'Brain Gym', 'Behaviour Therapy'],
  },
  {
    range: '12 – 18 years',
    label: 'Teen & Adolescent',
    emoji: '🧑‍🎓',
    color: 'from-orange-400 to-amber-500',
    softBg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    services: ['Assistive Technology', 'Mindfulness', 'Social Skills Development', 'Vocational Readiness', 'Cognitive Skills'],
  },
];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState<ProgramCategory>('all');
  const [search, setSearch] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredPrograms = ALL_PROGRAMS.filter((p) => {
    const matchCat = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Our Services | {BRAND_NAME}</title>
        <meta
          name="description"
          content="Arura Integral Therapy Services offers occupational therapy, speech therapy, ABA, special education, early intervention, school readiness, brain gym, play therapy, sensory integration, and more — across 4 Chennai centres."
        />
        <meta
          name="keywords"
          content="occupational therapy Chennai, speech therapy Villivakkam, ABA therapy, special education, early intervention, school readiness, brain gym, sensory integration, paediatric therapy Chennai"
        />
      </Helmet>

      <PageHeader
        title="Our Services"
        subtitle={`${BRAND_NAME}`}
        description="Evidence-based occupational therapy, speech & language, ABA, sensory integration, early intervention, and 15+ specialised programmes — all coordinated into one child-specific plan across clinic, home, and school."
        backgroundImage="https://images.pexels.com/photos/8941590/pexels-photo-8941590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Arura Integral Therapy Services: 15+ services including occupational therapy, speech, ABA, sensory integration, special education, school readiness, brain gym, mindfulness, feeding & oral motor, assistive technology — Chennai."
      />

      {/* ── Stats Bar ── */}
      <section className="bg-primary-900 text-white py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '15+', label: 'Services & Programmes', icon: <Sparkles className="w-5 h-5" /> },
              { value: '0–18', label: 'Years — All Ages Covered', icon: <Users className="w-5 h-5" /> },
              { value: '4', label: 'Centres Across Chennai', icon: <MapPin className="w-5 h-5" /> },
              { value: '100%', label: 'Evidence-Based Approaches', icon: <Star className="w-5 h-5" /> },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div className="text-brand-yellow mb-1">{stat.icon}</div>
                <p className="text-3xl font-extrabold text-brand-yellow">{stat.value}</p>
                <p className="text-white/70 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core 6 Services ── */}
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
              Core Therapy Disciplines
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Six Pillars of Arura Therapy
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our six core services are delivered by specialist therapists and work together as one integrated plan for your child. Click any service to expand details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 ${svc.border} cursor-pointer`}
                onClick={() => setExpandedService(expandedService === svc.id ? null : svc.id)}
              >
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${svc.gradient} opacity-70`} />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{svc.emoji}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/20 text-white`}>{svc.ageRange}</span>
                    </div>
                    <h3 className="text-white font-extrabold text-xl leading-tight">{svc.title}</h3>
                    <p className="text-white/80 text-xs italic mt-0.5">{svc.tagline}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className={`${svc.softBg} p-5`}>
                  <p className="text-neutral-700 text-sm mb-4 leading-relaxed">{svc.shortDesc}</p>

                  <AnimatePresence>
                    {expandedService === svc.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-white/50 mb-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">What we cover</p>
                          <ul className="space-y-1.5">
                            {svc.subItems.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                                <CheckCircle2 className={`w-3.5 h-3.5 ${svc.text} shrink-0`} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => { e.stopPropagation(); setExpandedService(expandedService === svc.id ? null : svc.id); }}
                      className={`text-xs font-semibold ${svc.text} flex items-center gap-1`}
                    >
                      {expandedService === svc.id ? 'Show less ▲' : 'What we cover ▼'}
                    </button>
                    <Link
                      to={svc.link}
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-1 text-sm font-bold ${svc.text} hover:underline`}
                    >
                      Full Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All 15 Programs — Filterable ── */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Complete Programme Library
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              All 15 Services — Searchable &amp; Filterable
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Every programme in our brochure now has an individual page with benefits, process, and age suitability.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search programmes…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 shadow-sm"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="w-4 h-4 text-neutral-500" />
              {(['all', 'therapy', 'training', 'specialized'] as ProgramCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    activeFilter === cat
                      ? CATEGORY_CONFIG[cat].color
                      : `bg-white ${CATEGORY_CONFIG[cat].light}`
                  }`}
                >
                  {CATEGORY_CONFIG[cat].label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-neutral-500 mb-5">
            Showing <strong>{filteredPrograms.length}</strong> of {ALL_PROGRAMS.length} services
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + search}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((prog) => {
                  const catCfg = CATEGORY_CONFIG[prog.category];
                  return (
                    <Link
                      key={prog.title}
                      to={prog.link}
                      className="group bg-white rounded-xl p-5 border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all"
                    >
                      <div className="text-3xl mb-3">{prog.emoji}</div>
                      <h4 className="font-bold text-neutral-800 text-sm leading-tight mb-1.5 group-hover:text-primary-700 transition-colors">
                        {prog.title}
                      </h4>
                      <p className="text-neutral-500 text-xs leading-relaxed mb-3">{prog.desc}</p>
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${catCfg.light}`}>
                        {catCfg.label}
                      </span>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-neutral-500 mb-3">No programmes match your search.</p>
                  <button onClick={() => { setSearch(''); setActiveFilter('all'); }} className="text-primary-600 font-semibold hover:underline text-sm">
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Additional Programs with Images ── */}
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
              Specialised Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Deep-Dive Programme Pages
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Each of these programmes has a dedicated page with full details — benefits, process steps, and age suitability.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 transition-all"
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      Ages: {prog.ageGroups}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-neutral-900 mb-2 leading-tight">{prog.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3 leading-relaxed">{prog.shortDescription}</p>
                  <div className="mb-4">
                    <p className="text-xs text-neutral-500 uppercase tracking-wide font-semibold mb-1.5">Key benefits</p>
                    <ul className="space-y-1">
                      {prog.benefits.slice(0, 2).map((b) => (
                        <li key={b} className="flex items-start gap-1.5 text-xs text-neutral-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/programs/${prog.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-900 group-hover:gap-3 transition-all"
                  >
                    View Full Programme <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Therapy Process ── */}
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
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Your Child's Therapy Journey</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              From first call to measurable progress — a clear, parent-friendly process.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/10 z-0" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="text-brand-yellow font-black text-xs mb-1 tracking-widest">STEP {step.step}</div>
                  <h4 className="font-extrabold text-white mb-2">{step.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA inside dark section */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-appointment"
                className="flex items-center gap-2 justify-center bg-brand-yellow text-primary-900 font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                Start Step 1 — Book Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${PHONE_PRIMARY_E164}`}
                className="flex items-center gap-2 justify-center border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> {PHONE_PRIMARY_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Age Guide ── */}
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
              Age Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Services by Age Group
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Not sure which service to start with? Use this guide to find programmes suited to your child's age.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGE_GUIDE.map((group, idx) => (
              <motion.div
                key={group.range}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg border ${group.border}`}
              >
                <div className={`bg-gradient-to-br ${group.color} p-5 text-white`}>
                  <div className="text-3xl mb-2">{group.emoji}</div>
                  <p className="font-extrabold text-xl leading-none">{group.range}</p>
                  <p className="text-white/80 text-sm mt-1">{group.label}</p>
                </div>
                <div className={`${group.softBg} p-5`}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">Recommended services</p>
                  <ul className="space-y-2">
                    {group.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-neutral-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${group.color} shrink-0`} />
                        {svc}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-4 flex items-center gap-1 text-xs font-bold ${group.text} hover:underline`}
                  >
                    Ask our team <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Therapy Approach ── */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-200 text-primary-800 text-sm font-semibold mb-5">
                Our Philosophy
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 mb-5">
                Integrated. Individualised. Impactful.
              </h2>
              <p className="text-neutral-700 mb-7 leading-relaxed">
                At {BRAND_NAME}, we believe in a holistic, integrated approach to therapy that addresses each child's unique needs. Our services work together, creating a comprehensive support system across clinic, home, and school.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Individualised Assessment', body: 'Comprehensive evaluations to understand strengths, learning styles, and priority needs.', icon: <Search className="w-4 h-4" /> },
                  { title: 'Goal-Oriented Therapy', body: 'Clear, measurable goals tracked throughout the therapy journey with regular reviews.', icon: <Target className="w-4 h-4" /> },
                  { title: 'Play-Based Interventions', body: 'Play as the primary learning vehicle — engaging, effective, and child-friendly.', icon: <Sparkles className="w-4 h-4" /> },
                  { title: 'Family Collaboration', body: 'We partner with parents so therapy benefits extend into everyday life — 24/7.', icon: <Heart className="w-4 h-4" /> },
                  { title: 'School Coordination', body: 'We liaise with schools and teachers to ensure consistent academic support.', icon: <BookOpen className="w-4 h-4" /> },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-primary-100">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-primary-800 text-sm">{item.title}</p>
                      <p className="text-neutral-600 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72">
                <img
                  src="https://images.pexels.com/photos/8943225/pexels-photo-8943225.jpeg?auto=compress&cs=tinysrgb&w=1000&dpr=2"
                  alt="Children in an Arura therapy session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-extrabold text-xl">Building skills that last a lifetime.</p>
                  <p className="text-white/80 text-sm mt-1">Every session is a step forward.</p>
                </div>
              </div>

              {/* Quick enquiry prompt */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-primary-100">
                <h3 className="font-extrabold text-neutral-900 mb-2">Not sure where to start?</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Share your child's age and main concern — we'll recommend the right programme.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                  >
                    Ask Our Team <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-primary-200 text-primary-700 hover:bg-primary-50 font-bold py-3 rounded-xl text-sm transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Child's Therapy Journey?"
        subtitle={`Book an assessment at ${BRAND_NAME} and our multidisciplinary team will create a personalised therapy plan for your child.`}
      />
    </>
  );
};

export default Services;
