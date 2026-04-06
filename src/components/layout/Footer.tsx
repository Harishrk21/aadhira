import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-heading font-bold text-neutral-900">Aadhiraa</span>
            </Link>
            <p className="text-neutral-700 mb-6">
              Dedicated to providing specialized therapy services for children with developmental needs in Chennai.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-primary-600 hover:text-primary-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-primary-600 hover:text-primary-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-primary-600 hover:text-primary-800 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/occupational-therapy" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/speech-therapy" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Speech Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/special-education" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Special Education
                </Link>
              </li>
              <li>
                <Link to="/services/aba-therapy" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  ABA Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/early-intervention" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Early Intervention
                </Link>
              </li>
              <li>
                <Link to="/services/brain-gym" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Brain Gym Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Conditions We Treat
                </Link>
              </li>
              <li>
                <Link to="/school-readiness-program" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  School Readiness Program
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <p className="ml-3 text-neutral-700">
                  No.89 & 90, 15th Block, 13th Street, Thiru Nagar, Villivakkam, Chennai-600 049
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <p className="ml-3 text-neutral-700">
                  <a href="tel:+918248999216" className="hover:text-primary-600 transition-colors">+91 82489 99216</a>,{' '}
                  <a href="tel:+918073178006" className="hover:text-primary-600 transition-colors">+91 80731 78006</a>
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <a href="mailto:aadhiraapts@gmail.com" className="ml-3 text-neutral-700 hover:text-primary-600 transition-colors">
                  aadhiraapts@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 text-sm">
              © {currentYear} Aadhiraa Paediatric Therapy Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;