import { motion } from 'framer-motion';
import { Award, ClipboardCheck, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { BRAND_NAME } from '../../config/brand';

const trustItems = [
  {
    icon: ClipboardCheck,
    title: 'Assessment-led planning',
    text: 'Each therapy plan starts with a child profile, family concerns, and measurable functional goals.',
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-700',
    accentBar: 'bg-primary-400',
  },
  {
    icon: Users,
    title: 'Multidisciplinary coordination',
    text: 'OT, speech, ABA, early intervention, special education, and parent guidance are coordinated where needed.',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    accentBar: 'bg-amber-400',
  },
  {
    icon: HeartHandshake,
    title: 'Parent partnership',
    text: 'Families receive home strategies so progress continues beyond the clinic session.',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
    accentBar: 'bg-rose-400',
  },
  {
    icon: ShieldCheck,
    title: 'Child-safe environment',
    text: 'Sessions are planned around regulation, comfort, participation, and age-appropriate therapeutic engagement.',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    accentBar: 'bg-sky-400',
  },
  {
    icon: Award,
    title: 'Evidence-informed care',
    text: 'Programmes use structured methods, progress reviews, and therapy goals that connect to real daily routines.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    accentBar: 'bg-emerald-400',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const TrustSignals = () => (
  <section className="bg-gradient-to-b from-white to-primary-50/60 py-16 md:py-20">
    <div className="container-custom">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-primary-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
          Why families trust Arura
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-neutral-900 md:text-4xl">
          Clinical clarity before every therapy decision
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-neutral-600">
          {BRAND_NAME} focuses on practical, family-visible progress: clear assessment, coordinated goals, and home carryover.
        </p>
      </div>

      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {trustItems.map((item) => (
          <motion.article
            key={item.title}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className={`absolute left-0 top-0 h-1 w-full ${item.accentBar}`} aria-hidden />
            <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor} shadow-sm`}>
              <item.icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-extrabold leading-snug text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustSignals;
