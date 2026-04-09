import { Link } from 'react-router-dom';
import { services } from '../../data/servicesData';

interface RelatedServicesProps {
  slugs: string[];
}

const RelatedServices = ({ slugs }: RelatedServicesProps) => {
  const items = services.filter((service) => slugs.includes(service.id));
  if (items.length === 0) return null;
  return (
    <div className="rounded-xl border border-primary-100 bg-white p-5">
      <h3 className="text-lg font-bold text-neutral-900">Related Services</h3>
      <ul className="mt-3 space-y-2">
        {items.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`} className="text-primary-700 font-semibold hover:underline">{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedServices;
