import type { Config, Context } from '@netlify/edge-functions';
import { paths } from './route-manifest.ts';

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

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (ROOT_STATIC.has(path)) {
    return context.next();
  }

  if (ASSET_PREFIXES.some((prefix) => path.startsWith(prefix))) {
    return context.next();
  }

  if (STATIC_FILE.test(path)) {
    return context.next();
  }

  const normalized = normalizePath(path);
  if (VALID_PATHS.has(normalized) || VALID_PATHS.has(path)) {
    return context.next();
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

export const config: Config = {
  path: '/*',
};
