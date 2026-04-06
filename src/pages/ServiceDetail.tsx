import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data/servicesData';
import { 
  Activity, 
  MessageSquare, 
  GraduationCap, 
  Lightbulb, 
  Baby, 
  Brain,
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
  Target
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';

// Map service IDs to Lucide icons
const serviceIcons: Record<string, JSX.Element> = {
  'occupational-therapy': <Activity className="w-6 h-6" />,
  'speech-therapy': <MessageSquare className="w-6 h-6" />,
  'special-education': <GraduationCap className="w-6 h-6" />,
  'aba-therapy': <Lightbulb className="w-6 h-6" />,
  'early-intervention': <Baby className="w-6 h-6" />,
  'brain-gym': <Brain className="w-6 h-6" />,
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = services.find((s) => s.id === serviceId);
  
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);
  
  if (!service) {
    return null;
  }
  
  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
        metaDescription={`${service.title} at Aadhiraa Paediatric Therapy Services. ${service.shortDescription} Learn about our approach, benefits, and process.`}
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link 
              to="/services" 
              className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">About {service.title}</h2>
                  <p className="text-lg text-neutral-700">{service.longDescription}</p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Benefits of {service.title}</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="ml-3 text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Our Process</h3>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                          <p className="text-neutral-700">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Target className="w-6 h-6 text-primary-600 mr-3" />
                      <h4 className="text-lg font-bold">Goals</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Improve functional independence</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Enhance skill development</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>Build confidence and self-esteem</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-secondary-600 mr-3" />
                      <h4 className="text-lg font-bold">Who We Help</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full mr-2"></div>
                        <span>Children with developmental delays</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full mr-2"></div>
                        <span>Special needs children</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full mr-2"></div>
                        <span>Early intervention cases</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12">
                  <Link to="/book-appointment" className="btn-primary">
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary-50 p-6 rounded-lg sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 rounded-lg mr-4">
                    {serviceIcons[service.id]}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold">Age Groups</h4>
                    </div>
                    <p>{service.ageGroups}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold">Session Duration</h4>
                    </div>
                    <p>45-60 minutes per session</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold">Recommended Frequency</h4>
                    </div>
                    <p>2-3 sessions per week</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Contact Us
                  </Link>
                  
                  <Link to="/services" className="btn-outline w-full justify-center">
                    Explore Other Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-primary-50">
        <div className="container-custom">
          <SectionTitle
            title="Related Services"
            subtitle="Explore other therapy options that complement this service"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-100 rounded-lg mr-3">
                        {serviceIcons[relatedService.id]}
                      </div>
                      <h3 className="text-xl font-bold">{relatedService.title}</h3>
                    </div>
                    <p className="text-neutral-700 mb-4">{relatedService.shortDescription}</p>
                    <Link 
                      to={`/services/${relatedService.id}`} 
                      className="text-primary-600 font-medium hover:text-primary-800"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default ServiceDetail;