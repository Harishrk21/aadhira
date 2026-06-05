import { Award, ClipboardCheck, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { BRAND_NAME } from '../../config/brand';

const trustItems = [
  {
    icon: ClipboardCheck,
    title: 'Assessment-led planning',
    text: 'Each therapy plan starts with a child profile, family concerns, and measurable functional goals.',
  },
  {
    icon: Users,
    title: 'Multidisciplinary coordination',
    text: 'OT, speech, ABA, early intervention, special education, and parent guidance are coordinated where needed.',
  },
  {
    icon: HeartHandshake,
    title: 'Parent partnership',
    text: 'Families receive home strategies so progress continues beyond the clinic session.',
  },
  {
    icon: ShieldCheck,
    title: 'Child-safe environment',
    text: 'Sessions are planned around regulation, comfort, participation, and age-appropriate therapeutic engagement.',
  },
  {
    icon: Award,
    title: 'Evidence-informed care',
    text: 'Programmes use structured methods, progress reviews, and therapy goals that connect to real daily routines.',
  },
];

const TrustSignals = () => (
  <section className="bg-white py-16">
    <div className="container-custom">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-primary-700">Why families trust Arura</p>
        <h2 className="mt-2 text-3xl font-extrabold text-neutral-900">Clinical clarity before every therapy decision</h2>
        <p className="mt-3 text-neutral-600">
          {BRAND_NAME} focuses on practical, family-visible progress: clear assessment, coordinated goals, and home carryover.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item) => (
          <article key={item.title} className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="font-extrabold text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSignals;

