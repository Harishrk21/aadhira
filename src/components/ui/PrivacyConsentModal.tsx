import { useEffect, useState } from 'react';
import { Shield, Lock, EyeOff, UserCheck, X, ChevronRight } from 'lucide-react';

interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

const ASSURANCES = [
  {
    icon: Lock,
    title: 'End-to-End Secure',
    desc: 'Your information is transmitted over an encrypted, HTTPS-secured connection.',
  },
  {
    icon: EyeOff,
    title: 'Never Sold or Shared',
    desc: 'We will never sell, rent, or share your data with any third party for marketing or commercial purposes.',
  },
  {
    icon: UserCheck,
    title: 'Used Only for Booking',
    desc: "Details you provide are used exclusively to schedule and confirm your child's therapy appointment.",
  },
  {
    icon: Shield,
    title: 'You Stay in Control',
    desc: 'You may request deletion of your data at any time by contacting our team.',
  },
];

const PrivacyConsentModal = ({ onAccept, onDecline }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center px-4 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
        onClick={onDecline}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-lg max-h-[90dvh] overflow-y-auto overscroll-contain transform rounded-3xl bg-white shadow-2xl ring-1 ring-neutral-200 transition-all duration-500 ${visible ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'}`}
      >
        {/* Close */}
        <button
          onClick={onDecline}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Hero strip */}
        <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-teal-500 px-8 pt-10 pb-8 text-white">
          {/* Decorative rings */}
          <span className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
          <span className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 ring-2 ring-white/30 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-white" strokeWidth={1.8} />
            </div>
            <h2 className="text-2xl font-bold leading-snug">Your Privacy Matters to Us</h2>
            <p className="mt-2 text-sm text-white/85">
              Before you fill the appointment form, please know how we handle your information.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          <ul className="space-y-4">
            {ASSURANCES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-semibold text-neutral-800">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl bg-neutral-50 px-4 py-3 text-xs leading-relaxed text-neutral-500">
            By clicking <strong className="text-neutral-700">"I Agree & Continue"</strong> you
            acknowledge that you have read and understood our data handling practices for this booking
            form.
          </p>

          {/* Actions */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={onDecline}
              className="order-2 rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50 sm:order-1"
            >
              Go Back
            </button>
            <button
              onClick={onAccept}
              className="order-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-700 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-500/30 transition hover:from-primary-800 hover:to-teal-600 hover:shadow-lg sm:order-2"
            >
              I Agree &amp; Continue
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsentModal;
