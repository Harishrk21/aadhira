import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Brain,
  Hand,
  ChevronDown,
  MessageSquare,
  Lightbulb,
  Baby,
  GraduationCap,
  BrainCircuit,
  Sparkles,
  HeartHandshake,
  Pencil,
  Apple,
  Puzzle,
  Utensils,
  MonitorSmartphone,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/servicesData';
import { DropdownNavigation, type DropdownNavItem } from '../ui/dropdown-navigation';

const MOBILE_NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const;

const desktopNavItems: DropdownNavItem[] = [
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'About', link: '/about' },
  {
    id: 3,
    label: 'Services',
    subMenus: [
      {
        title: 'Core therapy',
        items: [
          {
            label: 'Occupational Therapy',
            description: 'Daily living, sensory, and motor development',
            icon: Hand,
            link: '/services/occupational-therapy',
          },
          {
            label: 'Speech & Language',
            description: 'Communication and expressive language support',
            icon: MessageSquare,
            link: '/services/speech-therapy',
          },
          {
            label: 'Behaviour (ABA)',
            description: 'Structured behaviour and learning strategies',
            icon: Lightbulb,
            link: '/services/aba-therapy',
          },
          {
            label: 'Early Intervention',
            description: 'Infant and toddler milestone support',
            icon: Baby,
            link: '/services/early-intervention',
          },
        ],
      },
      {
        title: 'Learning support',
        items: [
          {
            label: 'Special Education',
            description: 'Individualized educational support',
            icon: GraduationCap,
            link: '/services/special-education',
          },
          {
            label: 'School Readiness',
            description: 'Prepare children for classroom routines',
            icon: Apple,
            link: '/programs/school-readiness',
          },
          {
            label: 'Brain Gym Activities',
            description: 'Movement-based cognitive activation',
            icon: BrainCircuit,
            link: '/services/brain-gym',
          },
          {
            label: 'Cognitive & Learning',
            description: 'Attention, memory, and learning skills',
            icon: Puzzle,
            link: '/programs/cognitive-learning-skills',
          },
        ],
      },
      {
        title: 'Specialized programs',
        items: [
          {
            label: 'Sensory Integration',
            description: 'Regulation and sensory processing support',
            icon: Sparkles,
            link: '/programs/sensory-integration',
          },
          {
            label: 'Play Therapy',
            description: 'Emotional and social development through play',
            icon: HeartHandshake,
            link: '/programs/play-therapy',
          },
          {
            label: 'Mindfulness',
            description: 'Calm focus and self-regulation techniques',
            icon: Brain,
            link: '/programs/mindfulness',
          },
          {
            label: 'Feeding & Oral Motor',
            description: 'Chewing, swallowing, and mealtime support',
            icon: Utensils,
            link: '/programs/feeding-oral-motor',
          },
          {
            label: 'Assistive Technology',
            description: 'AAC and adaptive learning tools',
            icon: MonitorSmartphone,
            link: '/programs/assistive-technology-support',
          },
          {
            label: 'Parent & Caregiver Training',
            description: 'Practical home strategies for families',
            icon: HeartHandshake,
            link: '/programs/parent-caregiver-training',
          },
          {
            label: 'Handwriting & Fine Motor',
            description: 'Writing readiness and hand control',
            icon: Pencil,
            link: '/programs/handwriting-fine-motor',
          },
        ],
      },
    ],
  },
  { id: 4, label: 'Programs', link: '/programs' },
  { id: 6, label: 'Conditions', link: '/conditions' },
  { id: 8, label: 'Gallery', link: '/gallery' },
  { id: 9, label: 'Blog', link: '/blog' },
  { id: 10, label: 'Contact', link: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'border-primary-200/80 bg-white py-2 shadow-md'
            : 'border-primary-100 bg-white/95 py-3 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">
          <Link to="/" className="group flex min-w-0 items-center gap-3" onClick={closeMenu}>
            <img
              src="/images/branding/logo.png"
              alt="Arura Integral Therapy Services logo"
              className="h-11 w-11 flex-shrink-0 object-contain drop-shadow-md md:h-14 md:w-14"
              width={52}
              height={52}
              decoding="async"
            />
            <span className="min-w-0 leading-tight">
              <span className="brand-arura block text-[0.95rem] font-black uppercase md:text-[1.15rem]">
                ARURA
              </span>
              <span className="block truncate text-[0.68rem] font-heading font-bold tracking-[0.06em] text-neutral-700 md:text-[0.8rem]">
                INTEGRAL THERAPY SERVICES
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center justify-center justify-self-center xl:flex" aria-label="Main">
            <DropdownNavigation navItems={desktopNavItems} />
          </nav>

          <div className="hidden justify-self-end xl:flex">
            <Link to="/book-appointment" className="btn-primary whitespace-nowrap px-5 py-2.5 text-sm font-bold">
              Book Appointment
            </Link>
          </div>

          <button
            className="justify-self-end rounded-lg p-2 text-neutral-800 transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 xl:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="border-t border-primary-100 bg-white shadow-lg xl:hidden"
            >
              <nav className="container-custom flex flex-col py-4" aria-label="Mobile">
                {MOBILE_NAV_LINKS.slice(0, 2).map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                ))}

                <div className="border-b border-neutral-100 pb-2">
                  <button
                    type="button"
                    className="nav-link flex w-full items-center justify-between"
                    onClick={toggleServices}
                    aria-expanded={isServicesOpen}
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1 space-y-0.5 border-l-2 border-primary-100 pl-4"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block rounded-md py-2 pl-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                            onClick={closeMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block rounded-md py-2 pl-2 text-sm font-semibold text-primary-700 hover:underline"
                          onClick={closeMenu}
                        >
                          View all services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {MOBILE_NAV_LINKS.slice(2).map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                ))}

                <div className="mt-3 border-t border-neutral-100 pt-3">
                  <Link to="/book-appointment" className="btn-primary block text-center" onClick={closeMenu}>
                    Book Appointment
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
