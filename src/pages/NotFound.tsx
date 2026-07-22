import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Phone, Calendar, BookOpen, MapPin } from 'lucide-react';
import { PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_E164 } from '../config/brand';

const helpfulLinks = [
  { to: '/services', label: 'Our services', icon: BookOpen },
  { to: '/book-appointment', label: 'Book appointment', icon: Calendar },
  { to: '/contact', label: 'Contact us', icon: MapPin },
];

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | Arura</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="This page could not be found. Browse Arura Integral Therapy Services — paediatric therapy in Chennai." />
      </Helmet>

      <div className="bg-primary-50 py-16 md:py-24">
        <div className="container-custom max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600">Error 404</p>
          <h1 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">Page not found</h1>
          <p className="mb-10 text-lg text-neutral-600">
            The link may be outdated or the page may have moved. You can return home or explore these helpful pages.
          </p>

          <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary inline-flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Back to home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go back
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {helpfulLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-center gap-2 rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm font-semibold text-primary-800 shadow-sm transition hover:border-primary-300 hover:shadow-md"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            ))}
          </div>

          <p className="mb-4 text-sm text-neutral-600">
            Found a broken link?{' '}
            <Link to="/contact" className="font-semibold text-primary-700 hover:text-primary-900">
              Report it to our team
            </Link>
          </p>
          <p className="text-sm text-neutral-600">
            Need help right away?{' '}
            <a href={`tel:${PHONE_PRIMARY_E164}`} className="inline-flex items-center gap-1 font-semibold text-primary-700 hover:text-primary-900">
              <Phone className="h-4 w-4" />
              Call {PHONE_PRIMARY_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
