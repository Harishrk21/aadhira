import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';
import { Heart, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn about our mission, approach, and team"
        backgroundImage="https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Aadhiraa Paediatric Therapy Services provides specialized therapy for children with developmental needs in Chennai. Learn about our approach, mission, and dedicated team."
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                Aadhiraa Paediatric Therapy Services was founded in 2015 with a simple yet powerful mission: to provide high-quality, comprehensive therapy services to children with developmental needs in Chennai. 
              </p>
              <p className="text-neutral-700 mb-4">
                We started as a small clinic with just two therapists and have since grown into a comprehensive therapy center with a team of dedicated professionals. What hasn't changed is our commitment to individualized care and helping each child reach their full potential.
              </p>
              <p className="text-neutral-700 mb-4">
                The name "Aadhiraa" means "full moon" in Tamil, symbolizing the complete brightness and potential we see in every child who comes through our doors. We believe that with the right support and intervention, each child can shine brightly in their own unique way.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/8942763/pexels-photo-8942763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Child in therapy session" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/8943060/pexels-photo-8943060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Therapist with child" 
                className="rounded-lg shadow-md mt-6"
              />
              <img 
                src="https://images.pexels.com/photos/8943242/pexels-photo-8943242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children playing" 
                className="rounded-lg shadow-md mt-6"
              />
              <img 
                src="https://images.pexels.com/photos/8943209/pexels-photo-8943209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Therapy materials" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Approach"
            subtitle="What makes Aadhiraa different"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary-600">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Child-Centered</h3>
              <p className="text-neutral-700">
                We believe in meeting each child where they are, building on their strengths, and designing therapy that addresses their specific needs and interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-secondary-600">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family-Focused</h3>
              <p className="text-neutral-700">
                We actively involve parents and caregivers in the therapy process, providing education, resources, and strategies for continuing progress at home.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-accent-600">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evidence-Based</h3>
              <p className="text-neutral-700">
                Our interventions are grounded in research and proven therapeutic approaches, ensuring that each child receives the most effective treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary-600">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
              <p className="text-neutral-700">
                We address the whole child, focusing on physical, cognitive, social, emotional, and functional skills for comprehensive development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Team"
            subtitle="Meet our dedicated professionals"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-primary-100">
                <img 
                  src="https://images.pexels.com/photos/5905459/pexels-photo-5905459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Aadhira Krishnan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Aadhira Krishnan</h3>
              <p className="text-primary-600 mb-3">Founder & Director</p>
              <p className="text-neutral-700">
                With over 15 years of experience in pediatric therapy, Dr. Krishnan founded Aadhiraa with the vision of providing comprehensive care for children with developmental needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-primary-100">
                <img 
                  src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ravi Subramanian" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ravi Subramanian</h3>
              <p className="text-primary-600 mb-3">Lead Occupational Therapist</p>
              <p className="text-neutral-700">
                Specializing in sensory integration and motor development, Ravi brings creativity and expertise to help children overcome physical challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-primary-100">
                <img 
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ananya Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ananya Patel</h3>
              <p className="text-primary-600 mb-3">Speech-Language Pathologist</p>
              <p className="text-neutral-700">
                With specialized training in pediatric communication disorders, Ananya helps children find their voice and connect with others.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-neutral-700 mb-6">
              Our full team includes certified professionals in occupational therapy, speech therapy, special education, ABA therapy, and more. Each team member brings specialized expertise and a passion for helping children thrive.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-xl text-neutral-700 italic mb-8">
              "We believe that every child has unique potential waiting to be discovered and nurtured. Our role is to provide the support, tools, and environment that allows that potential to flourish."
            </p>
            <div className="h-1 w-20 bg-secondary-500 mx-auto"></div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Meet Our Team in Person" 
        subtitle="Schedule a consultation to learn how we can help your child."
      />
    </>
  );
};

export default About;