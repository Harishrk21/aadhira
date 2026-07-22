import { useState } from 'react';

/** Public Google Form — Contact / Book Appointment */
export const GOOGLE_BOOKING_FORM_EMBED =
  'https://docs.google.com/forms/d/e/1FAIpQLSdyjyvERcZ0WxJMPTDJENQOdCB3A2_TJlkDwvJ93YlIi8DNrA/viewform?embedded=true';

export const GOOGLE_BOOKING_FORM_SHARE =
  'https://docs.google.com/forms/d/e/1FAIpQLSdyjyvERcZ0WxJMPTDJENQOdCB3A2_TJlkDwvJ93YlIi8DNrA/viewform';

type GoogleBookingFormProps = {
  onConfirmSubmit: () => void;
  compact?: boolean;
};

/**
 * Embeds the Arura Google booking form in-site.
 * After submitting the Google Form, the user presses Submit to confirm.
 */
const GoogleBookingForm = ({ onConfirmSubmit, compact = false }: GoogleBookingFormProps) => {
  const [iframeReady, setIframeReady] = useState(false);

  return (
    <div className="flex h-full min-h-0 w-full max-w-full flex-col">
      <div
        className={`relative w-full max-w-full overflow-hidden rounded-xl border border-primary-100 bg-white sm:rounded-2xl ${
          compact ? 'min-h-0 flex-1' : 'shadow-sm'
        }`}
      >
        {!iframeReady && (
          <div className="absolute inset-0 z-[1] flex items-center justify-center bg-primary-50/80 px-4 text-center text-sm text-neutral-600">
            Loading booking form…
          </div>
        )}
        <iframe
          title="Arura Contact Information Form"
          src={GOOGLE_BOOKING_FORM_EMBED}
          className={`block w-full max-w-full border-0 bg-white ${
            compact
              ? 'h-[min(52dvh,480px)] sm:h-[min(58vh,620px)] md:h-[min(62vh,720px)]'
              : 'h-[min(65dvh,560px)] sm:h-[min(70vh,760px)] md:h-[min(75vh,900px)]'
          }`}
          style={{ width: '100%', maxWidth: '100%' }}
          loading="eager"
          allow="storage-access *"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIframeReady(true)}
        >
          Loading…
        </iframe>
      </div>

      <div className="mt-3 w-full shrink-0 rounded-xl border border-primary-100 bg-primary-50/60 p-3 sm:mt-4 sm:rounded-2xl sm:p-5">
        <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Fill out and submit the Google Form above, then press{' '}
          <span className="font-semibold text-neutral-800">Submit</span> to confirm your booking.
        </p>
        <button
          type="button"
          onClick={onConfirmSubmit}
          className="btn-primary mt-3 w-full touch-manipulation sm:w-auto"
        >
          Submit
        </button>
        <p className="mt-2 text-[11px] text-neutral-500 sm:text-xs">
          Form not loading?{' '}
          <a
            href={GOOGLE_BOOKING_FORM_SHARE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-700 underline-offset-2 hover:underline"
          >
            Open in a new tab
          </a>
        </p>
      </div>
    </div>
  );
};

export default GoogleBookingForm;
