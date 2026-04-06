import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/servicesData';

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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <Brain className="w-8 h-8 text-primary-600" />
          <span className="text-xl font-heading font-bold text-neutral-900">Aadhiraa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            About
          </NavLink>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="nav-link flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <NavLink to="/school-readiness-program" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            Programs
          </NavLink>
          <NavLink to="/conditions" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            Conditions
          </NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            Testimonials
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            Contact
          </NavLink>
          <Link to="/book-appointment" className="btn-primary ml-4">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800 focus:outline-none" 
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
            className="md:hidden bg-white shadow-lg"
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
              
              <NavLink to="/school-readiness-program" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={toggleMenu}
              >
                Programs
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