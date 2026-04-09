/** Production host for canonicals / sitemap (no trailing slash). Override with `VITE_SITE_URL` in `.env`. */
const PRODUCTION_SITE_URL = 'https://aruratherapy.com';

/** Public site origin for canonical URLs, Open Graph, and JSON-LD. */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined;
  if (raw) return raw.replace(/\/$/, '');
  if (import.meta.env.PROD) return PRODUCTION_SITE_URL;
  return '';
}
