import { FormEvent, useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { submitNetlifyForm } from '../../lib/submitNetlifyForm';
import { PHONE_PRIMARY_DISPLAY, WHATSAPP_URL } from '../../config/brand';

const FORM_NAME = 'book-appointment';

const SERVICES = [
  'Occupational Therapy',
  'Speech & Language Therapy',
  'ABA Therapy',
  'Special Education',
  'Early Intervention',
  'Brain Gym',
  'Assessment / Consultation',
  'Not Sure — Need Guidance',
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

type FormData = {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  service: string;
  preferredCentre: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const INITIAL: FormData = {
  parentName: '',
  childName: '',
  childAge: '',
  email: '',
  phone: '',
  service: '',
  preferredCentre: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

type BookingFormProps = {
  compact?: boolean;
  onSuccess?: () => void;
  submitLabel?: string;
};

const inputCls =
  'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400';
const selectCls = `${inputCls} cursor-pointer appearance-none`;
const labelCls = 'mb-1.5 block text-sm font-semibold text-neutral-700';

const BookingForm = ({
  compact = false,
  onSuccess,
  submitLabel = 'Confirm My Booking',
}: BookingFormProps) => {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      await submitNetlifyForm(FORM_NAME, {
        'parent-name': formData.parentName,
        'child-name': formData.childName,
        'child-age': formData.childAge,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        'preferred-centre': formData.preferredCentre,
        'preferred-date': formData.preferredDate,
        'preferred-time': formData.preferredTime,
        message: formData.message,
      });

      setStatus('success');
      setFormData(INITIAL);
      onSuccess?.();
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'success' && !onSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <div>
          <p className="text-lg font-bold text-emerald-800">Booking received!</p>
          <p className="mt-1 text-sm text-emerald-700">
            Our team will contact you shortly to confirm your appointment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-4'}>
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Could not send your booking. Please call {PHONE_PRIMARY_DISPLAY} or{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-semibold underline">
              WhatsApp us
            </a>
            .
          </span>
        </div>
      )}

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="parentName" className={labelCls}>
            Parent / Guardian Name *
          </label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            required
            value={formData.parentName}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="childName" className={labelCls}>
            Child&apos;s Name *
          </label>
          <input
            id="childName"
            name="childName"
            type="text"
            required
            value={formData.childName}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="childAge" className={labelCls}>
            Child&apos;s Age *
          </label>
          <input
            id="childAge"
            name="childAge"
            type="text"
            required
            placeholder="e.g. 4 years"
            value={formData.childAge}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputCls}
        />
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="service" className={labelCls}>
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={selectCls}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="preferredCentre" className={labelCls}>
            Preferred Centre *
          </label>
          <select
            id="preferredCentre"
            name="preferredCentre"
            required
            value={formData.preferredCentre}
            onChange={handleChange}
            className={selectCls}
          >
            <option value="">Select a centre</option>
            {CENTRES.map((centre) => (
              <option key={centre} value={centre}>
                {centre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="preferredDate" className={labelCls}>
            Preferred Date *
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.preferredDate}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelCls}>
            Preferred Time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className={selectCls}
          >
            <option value="">Select a time</option>
            {TIMES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Concerns or Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Share any concerns or special requirements"
          value={formData.message}
          onChange={handleChange}
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-75 sm:text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending your booking...
          </>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
};

export default BookingForm;
