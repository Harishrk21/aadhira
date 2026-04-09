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
      className="fixed bottom-20 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40 sm:right-5"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.754.966-.924 1.164-.17.199-.34.223-.64.075-.301-.15-1.269-.467-2.419-1.483-.893-.795-1.484-1.77-1.654-2.059-.172-.289-.018-.445.13-.584.134-.124.3-.326.45-.488.149-.162.199-.273.298-.446.099-.174.05-.325-.025-.475-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172 0-.371-.011-.571-.011-.2 0-.523.074-.797.359-.273.285-1.045 1.019-1.045 2.484s1.07 2.883 1.219 3.082c.149.2 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.2-.57-.35m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatingButton;
