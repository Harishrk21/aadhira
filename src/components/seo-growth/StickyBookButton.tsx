import { Link } from 'react-router-dom';
import { CalendarCheck2 } from 'lucide-react';
import { useTracking } from '../../hooks/useTracking';

const StickyBookButton = () => {
  const { trackEvent } = useTracking();
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      <Link
        to="/book-appointment"
        onClick={() => trackEvent('sticky_book_click', { source: 'global_sticky_button' })}
        aria-label="Book appointment"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-primary-800 hover:shadow-xl hover:shadow-primary-500/40"
      >
        <CalendarCheck2 className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      </Link>
    </div>
  );
};

export default StickyBookButton;
