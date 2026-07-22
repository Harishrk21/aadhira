import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';
import SeoTechnical from '../seo/SeoTechnical';
import GlobalStructuredData from '../seo/GlobalStructuredData';
import FloatingActionButtons from '../seo-growth/FloatingActionButtons';
import GovernmentResources from '../ui/GovernmentResources';
import GoogleBookingForm from '../ui/GoogleBookingForm';

interface LayoutProps {
  children: ReactNode;
}

const SUCCESS_MESSAGE = 'Your appointment has been booked successfully';

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const hideGovernmentResources = pathname === '/thrive' || pathname.startsWith('/thrive/');
  const hideFloatingActions = hideGovernmentResources;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleBookAppointmentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      const isBookAppointmentLink =
        href === '/book-appointment' ||
        href.endsWith('/book-appointment') ||
        anchor.pathname.endsWith('/book-appointment');

      if (!isBookAppointmentLink) return;

      event.preventDefault();
      setIsFormOpen(true);
      setShowSuccess(false);
    };

    document.addEventListener('click', handleBookAppointmentClick, true);
    return () => {
      document.removeEventListener('click', handleBookAppointmentClick, true);
    };
  }, []);

  useEffect(() => {
    if (!isFormOpen && !showSuccess) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isFormOpen, showSuccess]);

  useEffect(() => {
    if (!showSuccess) return;
    const timer = window.setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [showSuccess]);

  const handleConfirmSubmit = () => {
    setIsFormOpen(false);
    setShowSuccess(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <SeoTechnical />
      <GlobalStructuredData />
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      {!hideGovernmentResources && <GovernmentResources />}
      <Footer />
      {!hideFloatingActions && <FloatingActionButtons />}

      {isFormOpen && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-primary-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-5">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-none border border-primary-100 bg-white shadow-2xl sm:h-[94vh] sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={closeFormModal}
              aria-label="Close booking form"
              className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-700 shadow touch-manipulation sm:right-3 sm:top-3 sm:h-8 sm:w-8"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="shrink-0 border-b border-primary-100 bg-gradient-to-r from-primary-50 via-white to-sky-50 px-4 py-3 pr-12 sm:px-6 sm:py-4">
              <p id="booking-modal-title" className="text-base font-bold text-neutral-900 sm:text-lg">
                Book / Consult Appointment
              </p>
              <p className="text-xs text-neutral-500 sm:text-sm">
                Complete the Google Form below, then press Submit
              </p>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 sm:px-6 sm:py-4">
              <GoogleBookingForm compact onConfirmSubmit={handleConfirmSubmit} />
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-primary-950/70 p-4 backdrop-blur-sm">
          <div
            role="status"
            aria-live="polite"
            className="flex max-w-md flex-col items-center rounded-3xl border border-white/10 bg-primary-950/40 px-6 py-8 text-center shadow-2xl sm:px-8 sm:py-10"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-amber-300/25 blur-2xl" aria-hidden />
              <img
                src="/images/branding/logo.png"
                alt="Arura logo"
                className="relative h-24 w-24 animate-spin sm:h-36 sm:w-36"
              />
            </div>
            <p className="mt-6 text-base font-bold text-white sm:mt-8 sm:text-xl">{SUCCESS_MESSAGE}</p>
            <p className="mt-2 text-sm text-primary-100">Our team will contact you shortly to confirm.</p>
            <p className="mt-4 text-xs text-primary-200/80">Closing automatically…</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
