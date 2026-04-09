import { MessageCircle } from 'lucide-react';
import { useTracking } from '../../hooks/useTracking';

const WHATSAPP_URL = 'https://wa.me/918248999216';

const WhatsAppFloatingButton = () => {
  const { trackEvent } = useTracking();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating_button' })}
      className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" /> WhatsApp
    </a>
  );
};

export default WhatsAppFloatingButton;
