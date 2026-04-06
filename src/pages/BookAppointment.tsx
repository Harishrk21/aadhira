import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import AppointmentForm from '../components/ui/AppointmentForm';

const BookAppointment = () => {
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
            title="Request an Appointment"
            subtitle="Complete the form below and our team will contact you to confirm your appointment"
          />
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AppointmentForm />
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