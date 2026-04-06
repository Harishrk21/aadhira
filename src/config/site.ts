/** Public site origin for canonical URLs, Open Graph, and JSON-LD. Set `VITE_SITE_URL` in `.env` (e.g. https://www.yoursite.com) — no trailing slash. */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined;
  return raw ? raw.replace(/\/$/, '') : '';
}
