import { useState } from 'react';
import { testimonials } from '../data/testimonialsData';
import { MessageSquare, Search } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import TestimonialCard from '../components/ui/TestimonialCard';
import CTASection from '../components/ui/CTASection';

const Testimonials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTestimonials = testimonials.filter(
    testimonial => 
      testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Success stories from families we've helped"
        description="Read how children and families improved communication, behaviour, learning readiness, and independence through consistent therapy, parent involvement, and individualized plans at our centres."
        backgroundImage="https://images.pexels.com/photos/8944024/pexels-photo-8944024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Read success stories from families at Arura Integral Therapy Services — paediatric therapy across Chennai centers including Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam."
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Parent Stories"
            subtitle="Hear from families about their experiences with our therapy services"
          />
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          
          {filteredTestimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-xl text-neutral-600">No testimonials found matching your search.</p>
              <button 
                className="mt-4 text-primary-600 font-medium hover:text-primary-800"
                onClick={() => setSearchTerm('')}
              >
                Clear search and show all testimonials
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Share Your Story</h2>
            <p className="text-lg text-neutral-700 mb-6">
              Has your child benefited from our services? We'd love to hear about your experience and share it with other families who may be on a similar journey.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Submit Your Testimonial</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-neutral-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="relationship" className="block text-neutral-700 mb-2">Relationship to Child *</label>
                  <input
                    type="text"
                    id="relationship"
                    placeholder="e.g., Parent of 5-year-old"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="testimonial" className="block text-neutral-700 mb-2">Your Experience *</label>
                  <textarea
                    id="testimonial"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-neutral-700 mb-2">Services Received *</label>
                  <select
                    id="services"
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Occupational Therapy">Occupational Therapy</option>
                    <option value="Speech Therapy">Speech Therapy</option>
                    <option value="Special Education">Special Education</option>
                    <option value="ABA Therapy">ABA Therapy</option>
                    <option value="Early Intervention">Early Intervention</option>
                    <option value="Brain Gym">Brain Gym Activities</option>
                    <option value="School Readiness Program">School Readiness Program</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
                
                <div className="mt-2">
                  <button type="submit" className="btn-primary w-full">
                    Submit Testimonial
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default Testimonials;