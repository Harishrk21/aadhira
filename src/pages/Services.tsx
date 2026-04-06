import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import { 
  Activity, 
  MessageSquare, 
  GraduationCap, 
  Lightbulb, 
  Baby, 
  Brain,
  Search
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
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

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredServices = services.filter(
    service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive therapeutic support for children with developmental needs"
        backgroundImage="https://images.pexels.com/photos/8941590/pexels-photo-8941590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Explore Aadhiraa's comprehensive therapy services including occupational therapy, speech therapy, special education, ABA therapy, early intervention, and brain gym activities."
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Specialized Therapy Services"
            subtitle="We offer a range of evidence-based therapies to address various developmental needs"
          />
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.shortDescription}
                  icon={serviceIcons[service.id]}
                  link={`/services/${service.id}`}
                  borderColor={service.borderColor}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-neutral-600">No services found matching your search.</p>
                <button 
                  className="mt-4 text-primary-600 font-medium hover:text-primary-800"
                  onClick={() => setSearchTerm('')}
                >
                  Clear search and show all services
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Therapy Approach</h2>
              <p className="text-lg text-neutral-700 mb-6">
                At Aadhiraa, we believe in a holistic, integrated approach to therapy that addresses each child's unique needs. Our therapy services are designed to work together, creating a comprehensive support system for your child.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary-700">Individualized Assessment</h3>
                  <p className="text-neutral-600">We begin with thorough evaluations to understand your child's specific needs and strengths.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary-700">Goal-Oriented Therapy</h3>
                  <p className="text-neutral-600">We develop clear, measurable goals and track progress throughout the therapy journey.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary-700">Play-Based Interventions</h3>
                  <p className="text-neutral-600">We use play as a powerful tool for learning and development, making therapy engaging and effective.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary-700">Family Collaboration</h3>
                  <p className="text-neutral-600">We partner with parents to ensure therapy benefits extend beyond our clinic and into everyday life.</p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/8943225/pexels-photo-8943225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children in therapy session" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default Services;