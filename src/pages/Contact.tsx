import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/ui/ContactForm';
import {
  MapPin, Phone, Mail, Clock, MessageCircle, Navigation,
  ChevronDown, ChevronUp, HeartHandshake, Star, CheckCircle2,
} from 'lucide-react';
import {
  BRAND_NAME,
  EMAIL,
  PHONE_PRIMARY_E164,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_E164,
  PHONE_SECONDARY_DISPLAY,
  ADDRESS_CHENNAI,
  CENTER_LOCATIONS,
} from '../config/brand';

const COMMON_PARTNER_NUMBERS = ['7200766120', '7200766143', '7200766720'];

const FAQ_ITEMS = [
  {
    q: 'How do I book a first appointment?',
    a: 'Call either of our numbers or fill out the enquiry form below. We will call back within one working day to confirm a slot and discuss your child\'s needs.',
  },
  {
    q: 'What should I bring for the first visit?',
    a: 'Bring any existing medical reports, school feedback, and a written list of your concerns. Previous therapy notes are also very helpful for our assessment team.',
  },
  {
    q: 'Do you offer home therapy sessions?',
    a: 'We primarily work from our centres, but a home-programme guidance session can be arranged after your child has been assessed and a therapy plan is in place.',
  },
  {
    q: 'Is there a waiting period for new patients?',
    a: 'Waiting times vary by therapy type. Speech and OT slots are usually available within a week; ABA and intensive programmes may have a 2–3 week wait.',
  },
  {
    q: 'Can both parents attend the session?',
    a: 'Yes! We strongly encourage both parents to attend — especially the initial assessment. Parent involvement is a core part of our therapy model.',
  },
  {
    q: 'Do you accept referrals from schools or paediatricians?',
    a: 'Absolutely. We welcome referrals and work closely with schools, paediatricians, and special educators to ensure coordinated care.',
  },
];

const centerConfig = [
  {
    ...CENTER_LOCATIONS[0],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    softBg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    textAccent: 'text-rose-600',
    badgeBg: 'bg-rose-100 text-rose-700',
    btnClass: 'bg-rose-500 hover:bg-rose-600 text-white',
    glowColor: 'shadow-rose-200',
    emoji: '🌟',
    tagline: 'Full-spectrum paediatric therapy hub',
    mapsQuery: 'TWINKLEZZ+Multispeciality+Therapy+Center+Valasaravakkam+Chennai',
  },
  {
    ...CENTER_LOCATIONS[1],
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    softBg: 'bg-gradient-to-br from-sky-50 to-indigo-50',
    borderColor: 'border-sky-200',
    textAccent: 'text-sky-600',
    badgeBg: 'bg-sky-100 text-sky-700',
    btnClass: 'bg-sky-500 hover:bg-sky-600 text-white',
    glowColor: 'shadow-sky-200',
    emoji: '💙',
    tagline: 'Serving children in Chengalpattu district',
    mapsQuery: 'UNICARE+Multispeciality+Therapy+Centre+Chengalpattu',
  },
  {
    ...CENTER_LOCATIONS[2],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    softBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    textAccent: 'text-emerald-600',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    btnClass: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    glowColor: 'shadow-emerald-200',
    emoji: '🌿',
    tagline: 'Central Chennai access for North & Central families',
    mapsQuery: 'SMINGA+Integral+Therapy+Services+Nungambakkam+Chennai',
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Contact Arura Integral Therapy Services | Book Appointment Chennai</title>
        <meta name="description" content="Contact Arura Integral Therapy Services in Chennai. HQ: Villivakkam + partner centres at Valasaravakkam (TWINKLEZZ), Chengalpattu (UNICARE), Nungambakkam (SMINGA). Call +91 82489 99216 or email info.dunmark@gmail.com." />
        <meta name="keywords" content="contact Arura therapy Chennai, book appointment paediatric therapy, Villivakkam therapy centre, TWINKLEZZ Valasaravakkam, UNICARE Chengalpattu, SMINGA Nungambakkam" />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle={`${BRAND_NAME} — Chennai Centres`}
        description="Connect with our therapy team for appointments, programme guidance, and centre information. Share your child's age, concerns, and goals — we'll guide you to the right starting plan."
        backgroundImage="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Contact Arura Integral Therapy Services: Villivakkam HQ + TWINKLEZZ, UNICARE, SMINGA partner centres across Chennai. Book a paediatric therapy appointment today."
      />

      {/* ── Quick-Connect Bar ── */}
      <section className="bg-primary-900 text-white py-5 sticky top-0 z-30 shadow-lg">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 flex-wrap">
            <a
              href={`tel:${PHONE_PRIMARY_E164}`}
              className="flex items-center gap-2.5 group rounded-xl px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center group-hover:bg-brand-yellow/40 transition-colors">
                <Phone className="w-4 h-4 text-brand-yellow" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-none">Primary</p>
                <p className="font-bold text-brand-yellow group-hover:text-white transition-colors text-sm">{PHONE_PRIMARY_DISPLAY}</p>
              </div>
            </a>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            <a
              href={`tel:${PHONE_SECONDARY_E164}`}
              className="flex items-center gap-2.5 group rounded-xl px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center group-hover:bg-brand-yellow/40 transition-colors">
                <Phone className="w-4 h-4 text-brand-yellow" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-none">Alternate</p>
                <p className="font-bold text-brand-yellow group-hover:text-white transition-colors text-sm">{PHONE_SECONDARY_DISPLAY}</p>
              </div>
            </a>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2.5 group rounded-xl px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center group-hover:bg-blue-400/40 transition-colors">
                <Mail className="w-4 h-4 text-blue-300" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-none">Email</p>
                <p className="font-semibold text-blue-300 group-hover:text-white transition-colors text-sm">{EMAIL}</p>
              </div>
            </a>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            <a
              href={`https://wa.me/${PHONE_PRIMARY_E164.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 group rounded-xl px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
                <MessageCircle className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-none">WhatsApp</p>
                <p className="font-semibold text-green-400 group-hover:text-white transition-colors text-sm">Chat Now</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Partner Centres — Rainbow Cards ── */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4 tracking-wide">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Find Your Nearest Centre
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-base">
              Arura operates through our main HQ in Villivakkam and three partner centres across Chennai — expert paediatric therapy closer to your neighbourhood.
            </p>
          </motion.div>

          {/* HQ Card — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-primary-100"
          >
            <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">🏠</div>
                <div>
                  <span className="text-white/60 text-xs uppercase tracking-widest block">Main Clinic — Headquarters</span>
                  <h3 className="text-white font-extrabold text-xl">{BRAND_NAME}</h3>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Thiru+Nagar+13th+Street+Villivakkam+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-yellow text-primary-900 font-bold text-sm py-2 px-5 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
            <div className="bg-white p-6 grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1">Address</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {ADDRESS_CHENNAI.street}<br />
                    {ADDRESS_CHENNAI.locality}, {ADDRESS_CHENNAI.city} — {ADDRESS_CHENNAI.postalCode}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1">Phone</p>
                  <a href={`tel:${PHONE_PRIMARY_E164}`} className="block text-primary-600 hover:text-primary-800 font-semibold text-sm transition-colors">
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a href={`tel:${PHONE_SECONDARY_E164}`} className="block text-primary-600 hover:text-primary-800 font-semibold text-sm transition-colors">
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1">Clinic Hours</p>
                  <p className="text-neutral-600 text-sm">Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p className="text-neutral-600 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                  <p className="text-red-500 text-sm font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 Partner Centre Rainbow Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {centerConfig.map((center, idx) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl ${center.glowColor} transition-all duration-300 border ${center.borderColor}`}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${center.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{center.emoji}</span>
                      <div>
                        <p className="text-white/70 text-xs uppercase tracking-widest leading-none mb-0.5">Partner Centre</p>
                        <h3 className="font-extrabold text-2xl text-white tracking-wide">{center.name}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm">{center.descriptor}</p>
                    <p className="text-white/70 text-xs mt-1 italic">{center.tagline}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className={`${center.softBg} p-5 space-y-4`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${center.badgeBg} flex items-center justify-center shrink-0`}>
                      <MapPin className={`w-4 h-4 ${center.textAccent}`} />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Location</p>
                      <p className="text-neutral-800 font-semibold text-sm">{center.locality}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${center.badgeBg} flex items-center justify-center shrink-0`}>
                      <Phone className={`w-4 h-4 ${center.textAccent}`} />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wide font-medium mb-1">Phone</p>
                      <p className="text-sm text-neutral-600">Use common partner numbers below.</p>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${center.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 w-full justify-center text-sm font-bold py-2.5 px-4 rounded-xl ${center.btnClass} transition-colors shadow-sm`}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-primary-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">Common clinical partner numbers</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {COMMON_PARTNER_NUMBERS.map((ph) => (
                <a
                  key={ph}
                  href={`tel:+91${ph}`}
                  className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-700 transition hover:bg-primary-100"
                >
                  +91 {ph}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Book a Consultation + Sidebar ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4 tracking-wide">
              Book a Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">
              Start Your Child's Journey
            </h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Share a few details and our care coordinators will reach out to match your child to the right therapist and centre.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Hours */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-neutral-900">Clinic Hours</h3>
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
                    { day: 'Saturday', time: '9:00 AM – 1:00 PM', open: true },
                    { day: 'Sunday', time: 'Closed', open: false },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between">
                      <span className="text-neutral-600">{row.day}</span>
                      <span className={`font-semibold ${row.open ? 'text-neutral-800' : 'text-red-500'}`}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact — dark card */}
              <div className="bg-primary-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <h3 className="font-bold">Prefer to talk directly?</h3>
                </div>
                <p className="text-white/70 text-sm mb-5">Our team is available Mon–Sat during clinic hours.</p>

                <a href={`tel:${PHONE_PRIMARY_E164}`} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors mb-2 group">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span className="font-bold text-brand-yellow group-hover:text-white transition-colors">{PHONE_PRIMARY_DISPLAY}</span>
                </a>
                <a href={`tel:${PHONE_SECONDARY_E164}`} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors mb-2 group">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span className="font-bold text-brand-yellow group-hover:text-white transition-colors">{PHONE_SECONDARY_DISPLAY}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors mb-2 group">
                  <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="text-blue-300 group-hover:text-white transition-colors font-medium text-sm break-all">{EMAIL}</span>
                </a>
                <a
                  href={`https://wa.me/${PHONE_PRIMARY_E164.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-green-600/20 hover:bg-green-600/40 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-green-400 group-hover:text-white transition-colors font-semibold text-sm">WhatsApp Chat</span>
                </a>
              </div>

              {/* Why Choose Us snippet */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                  <h3 className="font-bold text-neutral-800">Why Families Trust Us</h3>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {[
                    'Evidence-based, child-centred therapy',
                    'Structured goals with measurable outcomes',
                    'Parent-involved progress reviews',
                    'Multi-disciplinary team approach',
                    '4 accessible centres across Chennai',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                <h3 className="font-bold text-neutral-800 mb-3 text-sm">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#1d4ed8" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-full hover:bg-pink-200 transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#db2777" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full hover:bg-red-200 transition-colors" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
                  </a>
                  <a
                    href={`https://wa.me/${PHONE_PRIMARY_E164.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#16a34a" viewBox="0 0 24 24">
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.754.966-.924 1.164-.17.199-.34.223-.64.075-.301-.15-1.269-.467-2.419-1.483-.893-.795-1.484-1.77-1.654-2.059-.172-.289-.018-.445.13-.584.134-.124.3-.326.45-.488.149-.162.199-.273.298-.446.099-.174.05-.325-.025-.475-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172 0-.371-.011-.571-.011-.2 0-.523.074-.797.359-.273.285-1.045 1.019-1.045 2.484s1.07 2.883 1.219 3.082c.149.2 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.2-.57-.35m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-2">Find Us on the Map</h2>
            <p className="text-neutral-600">Main HQ: Villivakkam, Chennai — easily accessible by road, rail, and bus</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0851017001037!2d80.19916081464523!3d13.10246869075978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822b9f3%3A0xd8999e6aad7ae91f!2sVillivakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635152086578!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arura Integral Therapy Services — Chennai Villivakkam"
            />
          </div>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🚌', title: 'By Bus', text: 'Villivakkam Bus Station — 10-min walk from our centre.' },
              { icon: '🚆', title: 'By Train', text: 'Villivakkam Railway Station — 1.5 km, auto-rickshaws available.' },
              { icon: '🚗', title: 'By Car', text: '13th Street, Thiru Nagar. Limited on-site parking available.' },
              { icon: '📍', title: 'Landmark', text: 'Near Thiru Nagar Park. Look for the Arura signboard.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex items-start gap-3 hover:shadow-md transition-shadow">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{item.title}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4 tracking-wide">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Common Questions</h2>
            <p className="text-white/70">
              Quick answers to help you take the first step with confidence.
            </p>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  {openFaq === idx
                    ? <ChevronUp className="w-5 h-5 text-brand-yellow shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-white/40 shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-white/75 text-sm leading-relaxed border-t border-white/10 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-5">Still have questions? Reach out directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_PRIMARY_E164}`}
                className="flex items-center gap-2 justify-center bg-brand-yellow text-primary-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE_PRIMARY_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 justify-center border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
