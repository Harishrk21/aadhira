import { Link } from 'react-router-dom';
import { CalendarClock } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const CTASection = ({ 
  title = "Schedule a Consultation Today", 
  subtitle = "Take the first step towards helping your child reach their full potential.",
  backgroundImage = "https://images.pexels.com/photos/3979150/pexels-photo-3979150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}: CTASectionProps) => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-primary-800 opacity-85"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-primary-100 mb-8">{subtitle}</p>
          
          <Link 
            to="/book-appointment" 
            className="btn bg-white text-primary-700 hover:bg-primary-50 inline-flex items-center"
          >
            <CalendarClock className="w-5 h-5 mr-2" />
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;