import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and appointments"
        backgroundImage="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Contact Aadhiraa Paediatric Therapy Services in Chennai. Find our location, phone numbers, email address and business hours, or send us a message through our contact form."
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Get in Touch"
            subtitle="We're here to answer your questions and provide support"
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-primary-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-neutral-700">
                        No.89 & 90, 15th Block, 13th Street, Thiru Nagar, Villivakkam, Chennai-600 049
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-neutral-700">
                        <a href="tel:+918248999216" className="hover:text-primary-600 transition-colors">+91 82489 99216</a>
                      </p>
                      <p className="text-neutral-700">
                        <a href="tel:+918073178006" className="hover:text-primary-600 transition-colors">+91 80731 78006</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-neutral-700">
                        <a href="mailto:aadhiraapts@gmail.com" className="hover:text-primary-600 transition-colors">
                          aadhiraapts@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hours</h4>
                      <p className="text-neutral-700">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-neutral-700">
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                      <p className="text-neutral-700">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-primary-100 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-600">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-primary-100 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-600">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-primary-100 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary-600">
                        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.754.966-.924 1.164-.17.199-.34.223-.64.075-.301-.15-1.269-.467-2.419-1.483-.893-.795-1.484-1.77-1.654-2.059-.172-.289-.018-.445.13-.584.134-.124.3-.326.45-.488.149-.162.199-.273.298-.446.099-.174.05-.325-.025-.475-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172 0-.371-.011-.571-.011-.2 0-.523.074-.797.359-.273.285-1.045 1.019-1.045 2.484s1.07 2.883 1.219 3.082c.149.2 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.2-.57-.35m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-neutral-100">
        <div className="container-custom">
          <SectionTitle
            title="Find Us"
            subtitle="Our clinic is conveniently located in Villivakkam, Chennai"
          />
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0851017001037!2d80.19916081464523!3d13.10246869075978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822b9f3%3A0xd8999e6aad7ae91f!2sVillivakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635152086578!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aadhiraa Paediatric Therapy Services location map"
            ></iframe>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Getting Here</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">By Public Transport</h4>
                <p className="text-neutral-700">
                  Villivakkam is well-connected by buses. The nearest bus stop is Villivakkam Bus Station, which is approximately a 10-minute walk from our center.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">By Train</h4>
                <p className="text-neutral-700">
                  Villivakkam Railway Station is about 1.5 km from our center. Auto-rickshaws and taxis are available outside the station.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">By Car</h4>
                <p className="text-neutral-700">
                  We are located on 13th Street in Thiru Nagar. Limited parking is available at our facility.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Landmarks</h4>
                <p className="text-neutral-700">
                  We are near Thiru Nagar Park. Look for the Aadhiraa sign with a blue and purple logo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;