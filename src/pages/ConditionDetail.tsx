import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { conditions } from '../data/conditionsData';
import { ArrowLeft, CheckCircle, Brain, Activity, MessageSquare } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';

const ConditionDetail = () => {
  const { conditionId } = useParams<{ conditionId: string }>();
  const navigate = useNavigate();
  
  const condition = conditions.find((c) => c.id === conditionId);
  
  useEffect(() => {
    if (!condition) {
      navigate('/conditions');
    }
  }, [condition, navigate]);
  
  if (!condition) {
    return null;
  }
  
  return (
    <>
      <PageHeader
        title={condition.title}
        subtitle="Understanding and treating developmental conditions"
        backgroundImage={condition.image}
        metaDescription={`Learn about ${condition.title} treatment at Aadhiraa Paediatric Therapy Services. Understanding signs, symptoms, and our therapeutic approach.`}
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link 
              to="/conditions" 
              className="flex items-center text-primary-600 hover:text-primary-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Conditions
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">About {condition.title}</h2>
                  <p className="text-lg text-neutral-700">{condition.description}</p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Common Signs and Symptoms</h3>
                  <ul className="space-y-3">
                    {condition.signs.map((sign, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="ml-3 text-neutral-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Our Treatment Approach</h3>
                  <ul className="space-y-3">
                    {condition.treatments.map((treatment, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                        <span className="ml-3 text-neutral-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">Early Intervention</h4>
                    <p className="text-neutral-700">
                      Early intervention is crucial for better outcomes. Our team specializes in identifying and addressing developmental concerns early, providing targeted therapy when it can have the most impact.
                    </p>
                  </div>
                  
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">Family Support</h4>
                    <p className="text-neutral-700">
                      We provide comprehensive support to families, including parent education, home program development, and ongoing guidance throughout the therapy journey.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <Link to="/book-appointment" className="btn-primary">
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Related Services</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Activity className="w-5 h-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold">Occupational Therapy</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      Develops daily living skills and motor functions
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="w-5 h-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold">Speech Therapy</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      Improves communication and language skills
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Brain className="w-5 h-5 text-primary-600 mr-2" />
                      <h4 className="font-semibold">ABA Therapy</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      Behavioral intervention and skill development
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold mb-2">Need More Information?</h4>
                  <p className="text-sm text-neutral-600 mb-4">
                    Our team is here to answer your questions and provide guidance.
                  </p>
                  <Link to="/contact" className="btn-outline w-full justify-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Get Professional Support" 
        subtitle="Schedule a consultation with our experienced therapy team"
      />
    </>
  );
};

export default ConditionDetail;