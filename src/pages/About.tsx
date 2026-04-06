import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';
import { Heart, Award, Users, Lightbulb } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, EMAIL } from '../config/brand';

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle={`${BRAND_NAME} — ${BRAND_TAGLINE}`}
        description="We are a child-focused multidisciplinary team serving Chennai centers (Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam), combining structured assessment, family coaching, and practical interventions so every child can build communication, learning, behavioural, and daily-living skills with confidence."
        backgroundImage="https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Arura Integral Therapy Services — paediatric therapy for children in Chennai centers including Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam. Learn our mission, approach, and team."
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our story</h2>
              <p className="text-neutral-700 mb-4">
                {BRAND_NAME} exists for one purpose: to help children grow through skilled, compassionate therapy. We serve
                families at our Chennai (Villivakkam) centre and across our Chennai partner locations — with programmes spanning speech,
                behaviour, occupational, developmental, and sensory needs, plus training and specialised services as
                listed in our official brochure.
              </p>
              <p className="text-neutral-700 mb-4">
                Sessions are child-led and play-friendly: we meet each child where they are, celebrate small wins, and work
                with parents and schools so skills carry over into real life in Tamil Nadu and beyond.
              </p>
              <p className="text-neutral-700 mb-4">
                <strong className="text-neutral-800">Tagline:</strong> <em>{BRAND_TAGLINE}</em> — that guides every assessment,
                therapy block, and conversation with your family.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Therapist with a child during paediatric therapy" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/8943060/pexels-photo-8943060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Therapist supporting a child in session" 
                className="rounded-lg shadow-md mt-6"
              />
              <img 
                src="https://images.pexels.com/photos/8943242/pexels-photo-8943242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children playing in a therapeutic setting" 
                className="rounded-lg shadow-md mt-6"
              />
              <img 
                src="https://images.pexels.com/photos/8943209/pexels-photo-8943209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Therapy and learning materials for children" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary-50 border-y border-primary-100">
        <div className="container-custom max-w-4xl flex flex-col md:flex-row gap-8 items-center justify-center">
          <img
            src="/branding/arura-brochure.png"
            alt="Arura Integral Therapy Services brochure — services and locations"
            className="rounded-lg shadow-md max-w-xs border border-white"
            loading="lazy"
          />
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Official brochure</h3>
            <p className="text-neutral-700 mb-4 text-sm leading-relaxed">
              Our printed brochure lists therapy services, training & education, and specialised programs (Tamil headings
              included). For the full programme list online, see{' '}
              <Link to="/services#brochure-programs" className="font-semibold text-primary-700 hover:underline">
                Services → brochure section
              </Link>
              .
            </p>
            <p className="text-sm text-neutral-600">
              Email: <a href={`mailto:${EMAIL}`} className="text-primary-700 font-medium">{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container-custom">
          <SectionTitle
            title="Our approach"
            subtitle={`What makes ${BRAND_NAME} different for children and families`}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary-600">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Child-centred</h3>
              <p className="text-neutral-700">
                We meet each child where they are, build on strengths, and design therapy around their interests and goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-secondary-600">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family-focused</h3>
              <p className="text-neutral-700">
                Parents and caregivers are part of the plan — with strategies you can use at home and discuss with schools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-accent-600">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evidence-based</h3>
              <p className="text-neutral-700">
                Interventions are grounded in research and adapted for each child&apos;s developmental profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 text-primary-600">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic development</h3>
              <p className="text-neutral-700">
                We look at communication, behaviour, sensory processing, learning, and daily skills together — not in isolation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our team"
            subtitle="Certified professionals in occupational therapy, speech & language, special education, ABA, and related disciplines"
          />
          
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto text-center mb-10">
            {BRAND_NAME} brings together therapists and educators who specialise in working with children. Your child may
            work with one or more specialists depending on their plan — we coordinate care so everyone is aligned.
          </p>
          <div className="text-center">
            <Link to="/book-appointment" className="btn-primary inline-block">
              Meet us at a consultation
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our philosophy</h2>
            <p className="text-xl text-neutral-700 italic mb-8">
              &ldquo;Every child deserves support that respects their pace, culture, and family — therapy should feel safe,
              hopeful, and practical for everyday life in India.&rdquo;
            </p>
            <div className="h-1 w-20 bg-secondary-500 mx-auto"></div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Visit Arura Across Chennai Centers" 
        subtitle="Schedule a consultation to learn how we can support your child."
      />
    </>
  );
};

export default About;
