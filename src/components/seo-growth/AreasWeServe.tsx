import { Link } from 'react-router-dom';
import { LOCAL_AREAS } from '../../config/localAreas';

const AreasWeServe = () => {
  const allAreas = [LOCAL_AREAS.city, ...LOCAL_AREAS.nearby];
  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-neutral-900">Areas We Serve</h2>
        <p className="mt-2 text-neutral-600">
          We support families across {allAreas.join(', ')} with child development and rehabilitation services.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {allAreas.map((area) => (
            <span key={area} className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm text-primary-700">
              {area}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Future-ready: location-specific pages can be added under `/{LOCAL_AREAS.city.toLowerCase()}/:area`.
        </p>
        <Link to="/contact" className="mt-4 inline-flex text-primary-700 font-semibold hover:underline">Check nearest center</Link>
      </div>
    </section>
  );
};

export default AreasWeServe;
