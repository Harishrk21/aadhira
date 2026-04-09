import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_SHORT,
  BRAND_TAGLINE,
  EMAIL,
  PHONE_PRIMARY_E164,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_E164,
  PHONE_SECONDARY_DISPLAY,
  ADDRESS_CHENNAI,
  CENTER_LOCATIONS,
} from '../../config/brand';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-heading font-bold text-neutral-900">{BRAND_SHORT}</span>
            </Link>
            <p className="text-sm font-medium text-primary-800 mb-1">{BRAND_NAME}</p>
            <p className="text-neutral-700 mb-4 italic text-sm">{BRAND_TAGLINE}</p>
            <p className="text-neutral-700 mb-6 text-sm">
              Speech, behaviour, occupational, developmental & sensory support for children across Chennai centers.
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
              <li>
                <Link to="/services#brochure-programs" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  More programs (brochure)
                </Link>
              </li>
            </ul>
          </div>

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
                <Link to="/programs/school-readiness" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  School Readiness Program
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-700 hover:text-primary-600 transition-colors">
                  Blog
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase text-primary-700 mb-1">Chennai</p>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="ml-3 text-neutral-700 text-sm">
                    {ADDRESS_CHENNAI.street}
                    <br />
                    {ADDRESS_CHENNAI.locality}, {ADDRESS_CHENNAI.city}, {ADDRESS_CHENNAI.region} {ADDRESS_CHENNAI.postalCode}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <p className="ml-3 text-neutral-700 text-sm">
                  <a href={`tel:${PHONE_PRIMARY_E164}`} className="hover:text-primary-600 transition-colors">
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <br />
                  <a href={`tel:${PHONE_SECONDARY_E164}`} className="hover:text-primary-600 transition-colors">
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="ml-3 text-neutral-700 hover:text-primary-600 transition-colors break-all">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {CENTER_LOCATIONS.map((center) => (
            <div key={center.name} className="rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-black tracking-wide text-primary-800">{center.name}</p>
              <p className="text-xs text-neutral-500">{center.descriptor}</p>
              <p className="text-sm text-neutral-700 mt-2">{center.locality}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                {center.phones.map((ph) => (
                  <a
                    key={ph}
                    href={`tel:+91${ph}`}
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
                  >
                    +91 {ph}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 text-sm">
              © {currentYear} {BRAND_NAME}. All rights reserved.
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
