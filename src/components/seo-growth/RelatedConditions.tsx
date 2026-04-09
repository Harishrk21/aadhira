import { Link } from 'react-router-dom';
import { conditions } from '../../data/conditionsData';

interface RelatedConditionsProps {
  slugs: string[];
}

const RelatedConditions = ({ slugs }: RelatedConditionsProps) => {
  const items = conditions.filter((condition) => slugs.includes(condition.id));
  if (items.length === 0) return null;
  return (
    <div className="rounded-xl border border-primary-100 bg-white p-5">
      <h3 className="text-lg font-bold text-neutral-900">Related Conditions</h3>
      <ul className="mt-3 space-y-2">
        {items.map((condition) => (
          <li key={condition.id}>
            <Link to={`/conditions/${condition.id}`} className="text-primary-700 font-semibold hover:underline">{condition.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedConditions;
