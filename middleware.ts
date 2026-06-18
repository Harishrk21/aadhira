import { next } from '@vercel/functions';
import { paths } from './lib/valid-routes';

const VALID_PATHS = new Set<string>(paths);

const ROOT_STATIC = new Set([
  '/images/branding/branding-logo.png',
  '/robots.txt',
  '/sitemap.xml',
  '/ads.txt',
  '/llms.txt',
  '/404.html',
  '/index.html',
]);

const ASSET_PREFIXES = ['/assets/', '/images/'];
const STATIC_FILE = /\.(js|mjs|css|png|jpe?g|webp|svg|ico|xml|txt|woff2?|map|json)$/i;

function normalizePath(pathname: string): string {
  if (pathname === '' || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);

  // Redirect www → apex before serving any content. Without this, the HTML loads on
  // www while assets 301 to apex — browsers block CSS/JS cross-origin (CORS).
  if (url.hostname === 'www.aruratherapy.in') {
    url.hostname = 'aruratherapy.in';
    return Response.redirect(url.toString(), 308);
  }

  const path = url.pathname;

  if (ROOT_STATIC.has(path)) {
    return next();
  }

  if (ASSET_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return next();
  }

  if (STATIC_FILE.test(path)) {
    return next();
  }

  const normalized = normalizePath(path);
  if (VALID_PATHS.has(normalized) || VALID_PATHS.has(path)) {
    return next();
  }

  const notFoundResponse = await fetch(new URL('/404.html', url.origin).toString());
  const html = await notFoundResponse.text();

  return new Response(html, {
    status: 404,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}

export const config = {
  matcher: ['/((?!_vercel).*)'],
};
