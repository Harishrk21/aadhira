import { Link } from 'react-router-dom';
import { useTracking } from '../../hooks/useTracking';

const StickyBookButton = () => {
  const { trackEvent } = useTracking();
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        to="/book-appointment"
        onClick={() => trackEvent('sticky_book_click', { source: 'global_sticky_button' })}
        className="rounded-full bg-primary-700 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-primary-800"
      >
        Book Appointment
      </Link>
    </div>
  );
};

export default StickyBookButton;
