import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Brain,
  Hand,
  ChevronDown,
  Activity,
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      // Close mobile drawer when entering desktop nav breakpoint.
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
    { id: 5, label: 'Parent Programs', link: '/parent-programs' },
    { id: 6, label: 'Conditions', link: '/conditions' },
    { id: 7, label: 'Testimonials', link: '/testimonials' },
    { id: 8, label: 'Gallery', link: '/gallery' },
    { id: 9, label: 'Blog', link: '/blog' },
    { id: 10, label: 'Contact', link: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-primary-100 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container-custom grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">
        <Link to="/" className="group flex items-center gap-3 min-w-0" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Arura Integral Therapy Services logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0 drop-shadow-md"
          />
          <span className="min-w-0 leading-tight">
            <span className="brand-arura block text-[1rem] font-black uppercase md:text-[1.22rem]">
              ARURA
            </span>
            <span className="block text-[0.72rem] md:text-[0.84rem] font-heading font-bold tracking-[0.08em] text-neutral-800 truncate">
              INTEGRAL THERAPY SERVICES
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center justify-center justify-self-center min-w-0">
          <DropdownNavigation navItems={desktopNavItems} />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex justify-self-end">
          <Link to="/book-appointment" className="btn-primary whitespace-nowrap">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden text-neutral-800 focus:outline-none justify-self-end" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white shadow-lg"
          >
            <nav className="container-custom py-5 flex flex-col space-y-3">
              <NavLink to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink to="/about" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              
              {/* Mobile Services Menu */}
              <div className="space-y-2">
                <button 
                  className="w-full text-left nav-link flex items-center justify-between"
                  onClick={toggleServices}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block py-2 text-neutral-700 hover:text-primary-600"
                          onClick={toggleMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <NavLink to="/programs" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Programs
              </NavLink>
              <NavLink to="/parent-programs"
                className={({ isActive }) =>
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Parent Programs
              </NavLink>
              <NavLink to="/conditions" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Conditions
              </NavLink>
              <NavLink to="/testimonials" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Testimonials
              </NavLink>
              <NavLink to="/gallery" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
              <NavLink to="/blog" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
              <NavLink to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
              <Link to="/book-appointment" 
                className="btn-primary text-center mt-2" 
                onClick={toggleMenu}
              >
                Book Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;