import { useState } from 'react';
import { Loader2, CheckCircle2, ExternalLink } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';

const GOOGLE_FORM_URL = 'https://forms.gle/4GYRwsD3cvX2B7WF9';

const BookAppointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmittedClick = () => {
    setIsSubmitting(true);
    setIsBooked(false);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1600);
  };

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Schedule a consultation or therapy session for your child"
        description="From first assessment to ongoing sessions, we design clear, measurable plans in occupational therapy, speech & language, ABA, early intervention, and learning support so progress continues at home and in school."
        backgroundImage="https://images.pexels.com/photos/5905476/pexels-photo-5905476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Book a therapy session at Arura Integral Therapy Services — Chennai locations: Villivakkam, Valasaravakkam, Chengalpattu, or Nungambakkam. Occupational therapy, speech, ABA, and more."
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Book / Consult Appointment"
            subtitle="Complete the Google Form below and confirm submission"
          />
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
                <iframe
                  title="Book appointment Google Form"
                  src={GOOGLE_FORM_URL}
                  className="h-[980px] w-full"
                  loading="lazy"
                >
                  Loading...
                </iframe>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSubmittedClick}
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-xl bg-primary-700 px-5 py-3 font-semibold text-white transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'I have submitted the form'
                  )}
                </button>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm font-semibold text-primary-700 transition hover:border-primary-300"
                >
                  Open form in new tab
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              {isBooked && (
                <div className="mt-4 inline-flex items-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Booked successfully! Our team will contact you soon.
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
                      Your first visit will include a comprehensive assessment to understand your child's needs and develop a personalized therapy plan.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Required Documents</h4>
                    <p className="text-neutral-700">
                      Please bring any previous assessment reports, medical records, and school reports that may be relevant to your child's care.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Duration</h4>
                    <p className="text-neutral-700">
                      Initial consultations typically last 60-90 minutes. Regular therapy sessions are usually 45-60 minutes.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Payment Options</h4>
                    <p className="text-neutral-700">
                      We accept cash, major credit cards, and select insurance plans. Please contact us for specific details regarding your insurance coverage.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Have Questions?</h4>
                  <p className="text-neutral-700 mb-4">
                    If you have any questions about our services or the appointment process, please don't hesitate to contact us.
                  </p>
                  <a href="tel:+918248999216" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800">
                    Call us at +91 82489 99216
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