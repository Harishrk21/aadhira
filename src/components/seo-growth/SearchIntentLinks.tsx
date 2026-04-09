import { Link } from 'react-router-dom';

interface SearchIntentLinksProps {
  problemHref: string;
  solutionHref: string;
  trustHref: string;
}

const SearchIntentLinks = ({ problemHref, solutionHref, trustHref }: SearchIntentLinksProps) => (
  <section className="bg-primary-50 py-8">
    <div className="container-custom">
      <h2 className="text-xl font-bold text-neutral-900">Not sure what to read next?</h2>
      <p className="text-neutral-600 mt-1">Explore by intent: problem, solution, and trust.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link to={problemHref} className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700">Problem-based guide</Link>
        <Link to={solutionHref} className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700">Solution-based service</Link>
        <Link to={trustHref} className="rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700">Trust-based proof</Link>
      </div>
    </div>
  </section>
);

export default SearchIntentLinks;
