import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_SHORT,
  BRAND_TAGLINE,
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
    <footer className="bg-primary-950 text-neutral-300">
      {/* Top band */}
      <div className="border-b border-primary-900 bg-primary-900/60 py-5">
        <div className="container-custom flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-2 text-sm font-medium text-primary-200">
            <Heart className="h-4 w-4 text-rose-400" aria-hidden />
            Supporting every child's growth across Chennai
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center rounded-xl bg-amber-400 px-6 py-2.5 text-sm font-bold text-primary-950 shadow-md transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
          >
            Book an appointment
          </Link>
        </div>
      </div>

      <div className="container-custom pt-14 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link to="/" className="group flex items-center gap-2.5 mb-5">
              <img
                src="/images/branding/logo.png"
                alt="Arura logo"
                className="h-10 w-10 object-contain brightness-0 invert opacity-90"
                width={40}
                height={40}
                decoding="async"
              />
              <span>
                <span className="block text-base font-black uppercase tracking-widest text-white">{BRAND_SHORT}</span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-primary-300">Integral Therapy Services</span>
              </span>
            </Link>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary-400">{BRAND_NAME}</p>
            <p className="mb-4 text-sm italic text-primary-300">{BRAND_TAGLINE}</p>
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Speech, behaviour, occupational, developmental &amp; sensory support for children across Chennai centers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/aruratherapy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arura on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-300 transition hover:bg-primary-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/aruratherapy_chennai_49/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arura on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-300 transition hover:bg-primary-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@aruratherapy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arura on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-300 transition hover:bg-primary-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                ['Occupational Therapy', '/services/occupational-therapy'],
                ['Speech Therapy', '/services/speech-therapy'],
                ['Special Education', '/services/special-education'],
                ['ABA Therapy', '/services/aba-therapy'],
                ['Early Intervention', '/services/early-intervention'],
                ['Brain Gym Activities', '/services/brain-gym'],
                ['More programs (brochure)', '/services#brochure-programs'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                ['About Us', '/about'],
                ['Conditions We Treat', '/conditions'],
                ['School Readiness Program', '/programs/school-readiness'],
                ['Testimonials', '/testimonials'],
                ['Gallery', '/gallery'],
                ['Blog', '/blog'],
                ['Therapy Glossary', '/glossary'],
                ['Best OT in Chennai', '/best-occupational-therapy-in-chennai'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <div className="space-y-5">
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-primary-400">Chennai</p>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden />
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {ADDRESS_CHENNAI.street}
                    <br />
                    {ADDRESS_CHENNAI.locality}, {ADDRESS_CHENNAI.city}, {ADDRESS_CHENNAI.region} {ADDRESS_CHENNAI.postalCode}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden />
                <div className="space-y-1 text-sm">
                  <a
                    href={`tel:${PHONE_PRIMARY_E164}`}
                    className="block text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                  >
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a
                    href={`tel:${PHONE_SECONDARY_E164}`}
                    className="block text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                  >
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden />
                <Link
                  to="/contact"
                  className="text-sm text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                >
                  Email our team
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="mt-12 rounded-2xl border border-primary-800 bg-primary-900/50 p-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Areas We Serve</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ['Villivakkam', '/locations/villivakkam'],
              ['Anna Nagar', '/locations/anna-nagar'],
              ['Korattur', '/locations/korattur'],
              ['Ambattur', '/locations/ambattur'],
            ].map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="rounded-full border border-primary-700 bg-primary-800/60 px-3 py-1.5 text-xs font-semibold text-primary-200 transition hover:border-primary-500 hover:bg-primary-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Sister centers */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CENTER_LOCATIONS.map((center) => (
            <div key={center.name} className="rounded-xl border border-primary-800 bg-primary-900/40 p-4">
              <p className="text-sm font-black uppercase tracking-wide text-white">{center.name}</p>
              <p className="text-xs text-primary-400">{center.descriptor}</p>
              <p className="mt-1.5 text-sm text-neutral-400">{center.locality}</p>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {center.phones.map((ph) => (
                  <a
                    key={ph}
                    href={`tel:+91${ph}`}
                    className="text-xs font-medium text-primary-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                  >
                    +91 {ph}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs text-neutral-500">
              © {currentYear} {BRAND_NAME}. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600">
              Designed with care for families in Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
