import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, CheckCircle2, Clock, Target, Users, ArrowRight,
  Phone, ChevronRight, Sparkles, Star,
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import CTASection from '../components/ui/CTASection';
import { additionalPrograms } from '../data/additionalProgramsData';
import { BRAND_NAME, PHONE_PRIMARY_E164, PHONE_PRIMARY_DISPLAY } from '../config/brand';

const PROGRAM_THEME: Record<string, {
  gradient: string; softBg: string; border: string; text: string;
  btnClass: string; emoji: string; tagline: string; signs: string[]; whoFor: string[];
}> = {
  'sensory-integration': {
    gradient: 'from-rose-500 to-pink-600',
    softBg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700',
    btnClass: 'bg-rose-600 hover:bg-rose-700 text-white',
    emoji: '🌀', tagline: 'Helping children feel calm and in control',
    signs: ['Extreme sensitivity to sounds, textures, or lights', 'Seeking intense sensory input (spinning, crashing)', 'Difficulty with clothing textures or food textures', 'Meltdowns in busy or noisy environments', 'Poor body awareness and coordination', 'Difficulty transitioning between activities'],
    whoFor: ['Children with sensory over- or under-sensitivity', 'Kids with autism or ADHD', 'Children with developmental delay', 'Those with frequent meltdowns or behaviour issues', 'Children needing regulation support'],
  },
  'parent-caregiver-training': {
    gradient: 'from-teal-500 to-cyan-600',
    softBg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700',
    btnClass: 'bg-teal-600 hover:bg-teal-700 text-white',
    emoji: '👨‍👩‍👧', tagline: 'Empowering families to drive progress at home',
    signs: ['Struggling to implement therapy goals at home', 'Inconsistency between clinic and home behaviour', 'Unsure how to support communication or learning', 'Feeling overwhelmed by your child\'s needs', 'Wanting to be more involved in therapy', 'Difficulty managing routines or transitions at home'],
    whoFor: ['Parents and caregivers of children in therapy', 'Families wanting to support clinic goals at home', 'Grandparents or extended family involved in care', 'Single parents needing practical guidance', 'Families of newly diagnosed children'],
  },
  'cognitive-learning-skills': {
    gradient: 'from-amber-400 to-orange-500',
    softBg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700',
    btnClass: 'bg-amber-500 hover:bg-amber-600 text-white',
    emoji: '💡', tagline: 'Building the thinking skills behind every task',
    signs: ['Short attention span and easy distractibility', 'Difficulty remembering multi-step instructions', 'Poor problem-solving or planning skills', 'Trouble with reading comprehension or maths reasoning', 'Inconsistent classroom performance', 'Difficulty organising work or belongings'],
    whoFor: ['Children with learning disabilities', 'Kids with ADHD or attention difficulties', 'Children with mild intellectual disability', 'Those needing academic readiness support', 'Children returning to school after a gap'],
  },
  'handwriting-fine-motor': {
    gradient: 'from-violet-500 to-purple-700',
    softBg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700',
    btnClass: 'bg-violet-600 hover:bg-violet-700 text-white',
    emoji: '✏️', tagline: 'Making writing easier, clearer, and less frustrating',
    signs: ['Unusual or painful pencil grip', 'Illegible handwriting for age', 'Avoidance of writing tasks', 'Difficulty with letter formation or spacing', 'Slow writing speed affecting schoolwork', 'Fatigue or hand pain during writing'],
    whoFor: ['Children with dysgraphia', 'Kids with developmental coordination disorder', 'Children with fine motor delays', 'Those struggling to keep up in class with writing', 'Children with autism or ADHD needing writing support'],
  },
  'play-therapy': {
    gradient: 'from-emerald-500 to-green-600',
    softBg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700',
    btnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    emoji: '🧩', tagline: "Play is a child's most natural language",
    signs: ['Difficulty expressing feelings verbally', 'Withdrawal, shyness, or social avoidance', 'Frequent emotional outbursts or crying', 'Anxiety in social situations or new environments', 'Aggressive or destructive play behaviour', 'Low self-esteem or confidence'],
    whoFor: ['Children aged 3–12 with emotional difficulties', 'Kids experiencing trauma or family changes', 'Children with anxiety or social challenges', 'Those who struggle to communicate verbally', 'Children with autism needing social-emotional support'],
  },
  mindfulness: {
    gradient: 'from-sky-500 to-indigo-600',
    softBg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700',
    btnClass: 'bg-sky-600 hover:bg-sky-700 text-white',
    emoji: '🧘', tagline: 'Calm, focused, and ready to learn',
    signs: ['Difficulty calming down after being upset', 'High levels of stress or school anxiety', 'Impulsive behaviour with difficulty waiting', 'Poor sleep routines or bedtime anxiety', 'Difficulty sitting still or staying on task', 'Emotional dysregulation during transitions'],
    whoFor: ['Children with anxiety or stress', 'Kids with ADHD or impulsivity challenges', 'Children with emotional regulation difficulties', 'Those with trauma or adjustment difficulties', 'Children aged 5–16 needing coping skills'],
  },
  'feeding-oral-motor': {
    gradient: 'from-orange-500 to-amber-600',
    softBg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700',
    btnClass: 'bg-orange-600 hover:bg-orange-700 text-white',
    emoji: '🥣', tagline: 'Safe, positive mealtimes for every child',
    signs: ['Gagging or vomiting at new foods or textures', 'Refusing to eat most foods (very selective eating)', 'Difficulty chewing or swallowing safely', 'Excessive drooling beyond typical age', 'Prolonged bottle or soft food dependency', 'Stressful mealtimes for the whole family'],
    whoFor: ['Infants and toddlers with feeding difficulties', 'Children with oral-motor weakness', 'Kids with extreme food selectivity', 'Children with autism or sensory food aversions', 'Children with neurological or physical conditions affecting eating'],
  },
  'assistive-technology-support': {
    gradient: 'from-indigo-500 to-purple-700',
    softBg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700',
    btnClass: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    emoji: '🖥️', tagline: 'The right tools unlock independence',
    signs: ['Difficulty communicating verbally or with gestures', 'Inability to keep up with classroom demands', 'Dependence on physical assistance for daily tasks', 'Frustration due to communication barriers', 'Difficulty using standard learning materials', 'Limited independence in home or school routines'],
    whoFor: ['Non-verbal or minimally verbal children', 'Children with cerebral palsy or physical disabilities', 'Kids with autism using or needing AAC', 'Children with visual or learning impairments', 'Families wanting to increase child independence'],
  },
  'school-readiness': {
    gradient: 'from-sky-500 to-blue-600',
    softBg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700',
    btnClass: 'bg-sky-600 hover:bg-sky-700 text-white',
    emoji: '🏫', tagline: 'Building confidence for classroom success',
    signs: ['Difficulty with attention and classroom routines', 'Limited pre-writing and fine motor readiness', 'Challenges with social interaction in groups', 'Behaviour regulation concerns in structured settings', 'Need for stronger self-care and school independence'],
    whoFor: ['Children preparing to enter preschool or primary school', 'Kids with developmental delays', 'Children needing classroom readiness support', 'Families who want school transition guidance', 'Children needing structured routine training'],
  },
};

const DEFAULT_THEME = PROGRAM_THEME['sensory-integration'];
const PROGRAM_SLUG_ALIASES: Record<string, string> = {
  'handwriting-training': 'handwriting-fine-motor',
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const resolvedSlug = slug ? (PROGRAM_SLUG_ALIASES[slug] ?? slug) : '';

  const program = additionalPrograms.find((item) => item.id === resolvedSlug);
  const theme = PROGRAM_THEME[resolvedSlug] ?? DEFAULT_THEME;

  useEffect(() => {
    if (!program) navigate('/programs');
  }, [program, navigate]);

  if (!program) return null;

  const related = additionalPrograms.filter((p) => p.id !== program.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{program.title} | {BRAND_NAME}</title>
        <meta name="description" content={`${program.title} at ${BRAND_NAME}. ${program.shortDescription} Evidence-based programme for children in Chennai.`} />
      </Helmet>

      <PageHeader
        title={program.title}
        subtitle={theme.tagline}
        description={`This ${program.title.toLowerCase()} programme combines targeted clinic sessions and family guidance to improve real-world participation, confidence, and functional outcomes for children.`}
        backgroundImage={program.image}
        metaDescription={`${program.title} at ${BRAND_NAME}. ${program.shortDescription}`}
      />

      <section className={`bg-gradient-to-r ${theme.gradient} py-5`}>
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/programs" className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Programs
            </Link>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              {[{ icon: <Users className="w-4 h-4" />, label: `Ages: ${program.ageGroups}` }, { icon: <Clock className="w-4 h-4" />, label: '45–60 min / session' }, { icon: <Target className="w-4 h-4" />, label: 'Individualised plan' }].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-2xl`}>{theme.emoji}</div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">About {program.title}</h2>
                </div>
                <p className="text-neutral-700 leading-relaxed text-base">{program.longDescription}</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ once: true }} className={`rounded-2xl p-6 border-2 ${theme.border} ${theme.softBg}`}>
                  <h3 className={`font-extrabold text-base mb-4 flex items-center gap-2 ${theme.text}`}><span className="text-lg">🔍</span> Signs to Look For</h3>
                  <ul className="space-y-2.5">{theme.signs.map((s) => (<li key={s} className="flex items-start gap-2.5 text-sm text-neutral-700"><div className={`w-5 h-5 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center shrink-0 mt-0.5`}><div className="w-1.5 h-1.5 rounded-full bg-white" /></div>{s}</li>))}</ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }} className="rounded-2xl p-6 border-2 border-primary-100 bg-primary-50">
                  <h3 className="font-extrabold text-base mb-4 flex items-center gap-2 text-primary-700"><span className="text-lg">👶</span> Who Benefits</h3>
                  <ul className="space-y-2.5">{theme.whoFor.map((w) => (<li key={w} className="flex items-start gap-2.5 text-sm text-neutral-700"><CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />{w}</li>))}</ul>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ once: true }} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
                <h3 className="font-extrabold text-xl text-neutral-900 mb-5 flex items-center gap-2"><Sparkles className={`w-5 h-5 ${theme.text}`} /> Benefits of {program.title}</h3>
                <div className="grid sm:grid-cols-2 gap-3">{program.benefits.map((b, i) => (<div key={i} className={`flex items-start gap-3 ${theme.softBg} border ${theme.border} rounded-xl p-4`}><div className={`w-7 h-7 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{i + 1}</div><p className="text-sm text-neutral-700 leading-relaxed">{b}</p></div>))}</div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className={`rounded-2xl overflow-hidden shadow-xl border-2 ${theme.border}`}>
                  <div className={`bg-gradient-to-br ${theme.gradient} p-5 text-white`}><div className="flex items-center gap-3"><span className="text-3xl">{theme.emoji}</span><div><p className="text-white/70 text-xs">Programme</p><h3 className="font-extrabold text-base leading-tight">{program.title}</h3></div></div></div>
                  <div className={`${theme.softBg} p-5 space-y-3`}>
                    {[{ icon: <Users className="w-4 h-4" />, label: 'Age Group', value: program.ageGroups }, { icon: <Clock className="w-4 h-4" />, label: 'Session Duration', value: '45–60 min (child plan)' }, { icon: <Star className="w-4 h-4" />, label: 'Approach', value: 'Evidence-based, play-led' }].map((row) => (
                      <div key={row.label} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-white shadow-sm"><div className={`${theme.text} mt-0.5 shrink-0`}>{row.icon}</div><div><p className="text-xs text-neutral-500 font-medium">{row.label}</p><p className="text-sm font-bold text-neutral-800">{row.value}</p></div></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <Link to="/book-appointment" className={`flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-bold text-sm ${theme.btnClass} shadow-md transition-colors`}>Book an Assessment <ArrowRight className="w-4 h-4" /></Link>
                  <a href={`tel:${PHONE_PRIMARY_E164}`} className={`flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-bold text-sm border-2 ${theme.border} ${theme.text} hover:bg-white transition-colors`}><Phone className="w-4 h-4" /> {PHONE_PRIMARY_DISPLAY}</a>
                  <Link to="/programs" className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-sm border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">All Programs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container-custom">
          <div className="text-center mb-10"><h2 className="text-2xl font-extrabold text-neutral-900 mb-2">Related Programmes</h2><p className="text-neutral-600 text-sm">These programmes often complement {program.title}.</p></div>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((rel, idx) => {
              const relTheme = PROGRAM_THEME[rel.id] ?? DEFAULT_THEME;
              return (
                <motion.div key={rel.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.4 }} viewport={{ once: true }} className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl border-2 ${relTheme.border} transition-all`}>
                  <div className={`bg-gradient-to-br ${relTheme.gradient} p-4 flex items-center gap-3`}><span className="text-2xl">{relTheme.emoji}</span><h3 className="text-white font-extrabold text-sm leading-tight">{rel.title}</h3></div>
                  <div className={`${relTheme.softBg} p-4`}>
                    <p className="text-neutral-600 text-xs mb-3 leading-relaxed">{rel.shortDescription}</p>
                    <Link to={`/programs/${rel.id}`} className={`flex items-center gap-1 text-xs font-bold ${relTheme.text} hover:underline`}>Learn More <ChevronRight className="w-3.5 h-3.5" /></Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to Start ${program.title}?`} subtitle={`Book an assessment at ${BRAND_NAME} and our team will create a personalised plan for your child.`} />
    </>
  );
};

export default ProgramDetail;
