import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import PrivacyConsentModal from '../components/ui/PrivacyConsentModal';
import BookingForm from '../components/ui/BookingForm';
import { localSeoTitle, BOOK_APPOINTMENT_KEYWORDS } from '../config/seoContent';
import { PHONE_PRIMARY_E164, PHONE_PRIMARY_DISPLAY } from '../config/brand';

const BookAppointment = () => {
  const [showModal, setShowModal] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false);

  const seoTitle = localSeoTitle('Book Paediatric Therapy Appointment');
  const seoDescription =
    'Book a therapy appointment at Arura Integral Therapy Services in Villivakkam, Chennai for occupational therapy, speech therapy, ABA, early intervention, and child development support.';

  const handleAccept = () => {
    setConsentGiven(true);
    setShowModal(false);
  };

  const handleDecline = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <meta name="keywords" content={BOOK_APPOINTMENT_KEYWORDS.join(', ')} />
      </Helmet>
      {showModal && (
        <PrivacyConsentModal onAccept={handleAccept} onDecline={handleDecline} />
      )}

      <PageHeader
        title="Book an Appointment"
        subtitle="Schedule a consultation or therapy session for your child"
        description="From first assessment to ongoing sessions, we design clear, measurable plans in occupational therapy, speech & language, ABA, early intervention, and learning support so progress continues at home and in school."
        backgroundImage="https://images.pexels.com/photos/5905476/pexels-photo-5905476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaTitle={seoTitle}
        metaDescription={seoDescription}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Book / Consult Appointment"
            subtitle="Complete the booking form below — our team will confirm your appointment"
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {consentGiven ? (
                <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white p-6 shadow-sm sm:p-8">
                  <BookingForm />
                </div>
              ) : (
                <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-2xl border-2 border-dashed border-primary-200 bg-primary-50/40 px-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c0-1.1.9-2 2-2h.01M12 11V7m0 4v4m-4 4h8a2 2 0 002-2V9a2 2 0 00-.586-1.414l-3-3A2 2 0 0013 4H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-neutral-700">Booking form is ready</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Please review and accept our privacy notice to load the form.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary-700 px-6 py-3 font-semibold text-white shadow-md shadow-primary-500/30 transition hover:bg-primary-800"
                  >
                    View Privacy Notice &amp; Continue
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">What to Expect</h3>

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Initial Consultation</h4>
                    <p className="text-neutral-700">
                      Your first visit will include a comprehensive assessment to understand your
                      child&apos;s needs and develop a personalized therapy plan.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Required Documents</h4>
                    <p className="text-neutral-700">
                      Please bring any previous assessment reports, medical records, and school
                      reports that may be relevant to your child&apos;s care.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Duration</h4>
                    <p className="text-neutral-700">
                      Initial consultations typically last 60-90 minutes. Regular therapy sessions
                      are usually 45-60 minutes.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Payment Options</h4>
                    <p className="text-neutral-700">
                      We accept cash, major credit cards, and select insurance plans. Please contact
                      us for specific details regarding your insurance coverage.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Have Questions?</h4>
                  <p className="text-neutral-700 mb-4">
                    If you have any questions about our services or the appointment process, please
                    don&apos;t hesitate to contact us.
                  </p>
                  <a
                    href={`tel:${PHONE_PRIMARY_E164}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
                  >
                    Call us at {PHONE_PRIMARY_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
