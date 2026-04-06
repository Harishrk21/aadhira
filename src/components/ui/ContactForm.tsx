import { useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

type FormData = {
  parentName: string;
  childName: string;
  email: string;
  phone: string;
  childAge: string;
  concern: string;
  preferredCentre: string;
  preferredTime: string;
  message: string;
};

const INITIAL: FormData = {
  parentName: '',
  childName: '',
  email: '',
  phone: '',
  childAge: '',
  concern: '',
  preferredCentre: '',
  preferredTime: '',
  message: '',
};

const AGE_RANGES = [
  '0 – 1 year',
  '1 – 2 years',
  '2 – 3 years',
  '3 – 5 years',
  '5 – 8 years',
  '8 – 12 years',
  '12 – 18 years',
  '18+ years',
];

const CONCERNS = [
  'Speech & Language Delay',
  'Occupational Therapy',
  'Applied Behaviour Analysis (ABA)',
  'Special Education',
  'Early Intervention',
  'Brain Gym / Cognitive Development',
  'Sensory Processing',
  'Play Therapy',
  'Mindfulness & Emotional Regulation',
  'School Readiness',
  'Not Sure — Need Assessment',
  'Other',
];

const CENTRES = [
  'Villivakkam, Chennai (Main HQ)',
  'TWINKLEZZ — Valasaravakkam',
  'UNICARE — Chengalpattu',
  'SMINGA — Nungambakkam',
  'Any Centre (Nearest to me)',
];

const TIMES = [
  'Morning (9 AM – 12 PM)',
  'Afternoon (12 PM – 3 PM)',
  'Evening (3 PM – 6 PM)',
  'Saturday Morning',
  'Any Time',
];

const inputCls =
  'w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-white transition-all text-sm placeholder:text-neutral-400';
const selectCls =
  'w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-white transition-all text-sm appearance-none cursor-pointer';
const labelCls = 'block text-sm font-semibold text-neutral-700 mb-1.5';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData(INITIAL);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8"
    >
      <h3 className="text-2xl font-extrabold text-neutral-900 mb-1">Book a Consultation</h3>
      <p className="text-neutral-500 text-sm mb-7">
        Fill in the details below and we'll call back within one working day.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200">
          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-600" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm text-emerald-700">Our team will reach out within one working day.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-600" />
          <p className="text-sm">Something went wrong. Please try calling us directly.</p>
        </div>
      )}

      {/* Row 1 — Parent + Child names */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="parentName" className={labelCls}>Parent / Guardian Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputCls}
            required
          />
        </div>
        <div>
          <label htmlFor="childName" className={labelCls}>Child's Name <span className="text-neutral-400 font-normal text-xs">(optional)</span></label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            placeholder="Child's first name"
            className={inputCls}
          />
        </div>
      </div>

      {/* Row 2 — Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className={labelCls}>Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputCls}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputCls}
            required
          />
        </div>
      </div>

      {/* Row 3 — Age + Concern */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="childAge" className={labelCls}>Child's Age Range <span className="text-red-500">*</span></label>
          <div className="relative">
            <select
              id="childAge"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              className={selectCls}
              required
            >
              <option value="" disabled>Select age range</option>
              {AGE_RANGES.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="concern" className={labelCls}>Primary Concern / Therapy <span className="text-red-500">*</span></label>
          <div className="relative">
            <select
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className={selectCls}
              required
            >
              <option value="" disabled>Select concern</option>
              {CONCERNS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 — Centre + Time */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="preferredCentre" className={labelCls}>Preferred Centre</label>
          <div className="relative">
            <select
              id="preferredCentre"
              name="preferredCentre"
              value={formData.preferredCentre}
              onChange={handleChange}
              className={selectCls}
            >
              <option value="">No preference</option>
              {CENTRES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelCls}>Preferred Call / Visit Time</label>
          <div className="relative">
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={selectCls}
            >
              <option value="">No preference</option>
              {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className={labelCls}>
          Your Message <span className="text-neutral-400 font-normal text-xs">(optional — share any context)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your child's needs, any previous assessments, or anything else we should know…"
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2.5 bg-primary-700 hover:bg-primary-800 disabled:bg-primary-400 text-white font-bold py-3.5 px-6 rounded-xl transition-colors text-base shadow-md shadow-primary-200"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Enquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-neutral-400 mt-4">
        We reply within 1 working day · Your details are kept strictly private.
      </p>
    </form>
  );
};

export default ContactForm;
