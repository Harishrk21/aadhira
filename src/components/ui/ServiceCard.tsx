import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  borderColor?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link,
  borderColor = 'border-primary-500'
}: ServiceCardProps) => {
  return (
    <div className={`service-card ${borderColor} group`}>
      <div className="icon-circle mb-4 group-hover:bg-primary-200 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
      >
        Learn more <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;