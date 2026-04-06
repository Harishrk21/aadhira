import { Link } from 'react-router-dom';
import { Clock, User, CalendarClock, Calendar, Award, Check } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';

const SchoolReadinessProgram = () => {
  return (
    <>
      <PageHeader
        title="School Readiness Program"
        subtitle="Summer camp designed for children with developmental needs"
        backgroundImage="https://images.pexels.com/photos/8943225/pexels-photo-8943225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Aadhiraa's School Readiness Program helps prepare children with developmental needs for school success through a specialized summer camp with integrated therapy and skill development."
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Program Overview"
            subtitle="A comprehensive approach to school preparation for children with diverse needs"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-neutral-700 mb-6">
                Our School Readiness Program is a specialized summer camp designed to prepare children with developmental needs for success in school environments. Through a structured, therapeutic approach, we help children develop the physical, cognitive, social, and emotional skills needed for classroom success.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                This program combines multiple therapy approaches including occupational therapy, speech therapy, and special education to create a comprehensive experience that addresses all aspects of school readiness.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h3 className="text-xl font-bold mb-4">Who This Program Is For</h3>
                <p className="text-neutral-700 mb-4">
                  Our program is designed for children ages 3-7 with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Autism Spectrum Disorder</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">ADHD</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Learning Disabilities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Cerebral Palsy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Down Syndrome</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Intellectual and Developmental Disabilities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/8943242/pexels-photo-8943242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children in classroom setting" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle
            title="Daily Schedule"
            subtitle="A structured day designed for learning and development"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold">1 Hour</h3>
              </div>
              <h3 className="text-xl font-bold mb-3">Gross Motor Sensory Integration</h3>
              <p className="text-neutral-700">
                Activities designed to improve body awareness, coordination, balance, and sensory processing. These foundational skills support classroom participation and physical confidence.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-primary-50 p-2 rounded text-sm">Balance exercises</div>
                <div className="bg-primary-50 p-2 rounded text-sm">Obstacle courses</div>
                <div className="bg-primary-50 p-2 rounded text-sm">Sensory play</div>
                <div className="bg-primary-50 p-2 rounded text-sm">Coordination games</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-500">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-secondary-600 mr-3" />
                <h3 className="text-xl font-bold">30 Minutes</h3>
              </div>
              <h3 className="text-xl font-bold mb-3">ADL Skill Training</h3>
              <p className="text-neutral-700">
                Activities of Daily Living training helps children develop independence in self-care routines such as dressing, eating, and personal hygiene—essential skills for school success.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-secondary-50 p-2 rounded text-sm">Self-feeding</div>
                <div className="bg-secondary-50 p-2 rounded text-sm">Dressing practice</div>
                <div className="bg-secondary-50 p-2 rounded text-sm">Bathroom routines</div>
                <div className="bg-secondary-50 p-2 rounded text-sm">Classroom skills</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-500">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-accent-600 mr-3" />
                <h3 className="text-xl font-bold">30 Minutes</h3>
              </div>
              <h3 className="text-xl font-bold mb-3">Mindfulness Practice</h3>
              <p className="text-neutral-700">
                Age-appropriate mindfulness activities that help children develop emotional regulation, attention, and stress management skills necessary for classroom learning.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-accent-50 p-2 rounded text-sm">Breathing exercises</div>
                <div className="bg-accent-50 p-2 rounded text-sm">Sensory awareness</div>
                <div className="bg-accent-50 p-2 rounded text-sm">Emotion recognition</div>
                <div className="bg-accent-50 p-2 rounded text-sm">Calming techniques</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold">1 Hour</h3>
              </div>
              <h3 className="text-xl font-bold mb-3">Brain Gym</h3>
              <p className="text-neutral-700">
                Specific movement activities designed to integrate brain function and enhance learning potential, focusing on concentration, memory, and cognitive processing.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-primary-50 p-2 rounded text-sm">Cross-lateral movements</div>
                <div className="bg-primary-50 p-2 rounded text-sm">Focus exercises</div>
                <div className="bg-primary-50 p-2 rounded text-sm">Memory activities</div>
                <div className="bg-primary-50 p-2 rounded text-sm">Brain integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Program Details"
                subtitle="Everything you need to know about our summer program"
                alignment="left"
              />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <Calendar className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Duration</h4>
                    <p className="text-neutral-700">4 weeks (May-June annually)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <Clock className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Schedule</h4>
                    <p className="text-neutral-700">Monday to Friday, 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <User className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Group Size</h4>
                    <p className="text-neutral-700">Small groups of 4-6 children with similar needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <Award className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Staff</h4>
                    <p className="text-neutral-700">Certified therapists and special educators</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Program Outcomes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Improved classroom readiness skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Enhanced sensory regulation and focus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Stronger social interaction skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Better self-care independence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Increased confidence in group settings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">Developed pre-academic skills</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-primary-50 p-6 rounded-lg shadow-md border border-primary-100">
                <h3 className="text-2xl font-bold mb-6">Register for Summer 2025</h3>
                
                <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-primary-500">
                  <div className="flex items-center">
                    <CalendarClock className="w-6 h-6 text-primary-600 mr-3" />
                    <div>
                      <h4 className="font-bold">Registration Open</h4>
                      <p className="text-neutral-600">Limited spots available</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-medium">Program Fee:</span>
                    <span>₹35,000 for 4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Early Bird Discount:</span>
                    <span>10% off until March 31, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sibling Discount:</span>
                    <span>15% off for siblings</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Registration Fee:</span>
                      <span>₹5,000 (non-refundable)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Link to="/book-appointment" className="btn-primary w-full justify-center">
                    Register Now
                  </Link>
                  <p className="text-sm text-neutral-600 text-center">
                    For more information, please call us at{' '}
                    <a href="tel:+918248999216" className="text-primary-600 font-medium">
                      +91 82489 99216
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Prepare Your Child for School Success" 
        subtitle="Register for our School Readiness Program today and give your child the best start."
        backgroundImage="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </>
  );
};

export default SchoolReadinessProgram;