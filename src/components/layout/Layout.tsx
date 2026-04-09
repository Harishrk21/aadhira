import { ReactNode, useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';
import SeoTechnical from '../seo/SeoTechnical';
import GlobalStructuredData from '../seo/GlobalStructuredData';
import StickyBookButton from '../seo-growth/StickyBookButton';
import WhatsAppFloatingButton from '../seo-growth/WhatsAppFloatingButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const handleBookAppointmentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href="/book-appointment"]') as HTMLAnchorElement | null;

      if (!anchor) return;

      event.preventDefault();
      setIsFormOpen(true);
      setIsSubmitting(false);
      setIsBooked(false);
    };

    document.addEventListener('click', handleBookAppointmentClick, true);
    return () => {
      document.removeEventListener('click', handleBookAppointmentClick, true);
    };
  }, []);

  const handleSubmittedClick = () => {
    setIsSubmitting(true);
    setIsBooked(false);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      window.setTimeout(() => {
        closeFormModal();
      }, 1400);
    }, 1800);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
    setIsSubmitting(false);
    setIsBooked(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <SeoTechnical />
      <GlobalStructuredData />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyBookButton />
      <WhatsAppFloatingButton />

      {isFormOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-primary-950/60 p-3 backdrop-blur-sm sm:p-5">
          <div className="relative flex h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeFormModal}
              aria-label="Close booking form"
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="border-b border-primary-100 bg-gradient-to-r from-primary-50 via-white to-sky-50 px-5 py-4 sm:px-6">
              <p className="text-base font-bold text-neutral-900 sm:text-lg">Book / Consult Appointment</p>
              <p className="text-xs text-neutral-500 sm:text-sm">Fill and submit the form below</p>
            </div>

            <iframe
              title="Book appointment Google Form"
              src="https://forms.gle/4GYRwsD3cvX2B7WF9"
              className="min-h-0 flex-1 w-full"
              loading="lazy"
            >
              Loading...
            </iframe>

            <div className="space-y-3 border-t border-primary-100 bg-white px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={handleSubmittedClick}
                disabled={isSubmitting}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-violet-500/35 disabled:cursor-not-allowed disabled:opacity-75 sm:text-base"
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.35)_50%,transparent_80%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {isSubmitting ? (
                  'Sending your booking...'
                ) : (
                  'Done Submitting? Confirm My Booking'
                )}
              </button>
              {isBooked && (
                <div className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm font-medium text-emerald-700">
                  <img
                    src="/logo.png"
                    alt="Aadhira logo"
                    className="mr-2 h-5 w-5 animate-pulse"
                  />
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Booked successfully! Closing form...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isSubmitting && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-primary-950/65 backdrop-blur-sm">
          <div className="flex flex-col items-center px-6 text-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-amber-300/30 blur-2xl" aria-hidden />
              <img
                src="/logo.png"
                alt="Aadhira logo loading"
                className="relative h-28 w-28 animate-spin sm:h-36 sm:w-36"
              />
            </div>
            <p className="mt-6 text-lg font-bold text-white sm:text-xl">Booking your appointment...</p>
            <p className="mt-1 text-sm text-primary-100">Please wait a moment</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;