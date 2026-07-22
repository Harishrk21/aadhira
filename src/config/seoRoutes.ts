import { services } from '../data/servicesData';
import { conditions } from '../data/conditionsData';
import { additionalPrograms } from '../data/additionalProgramsData';
import { blogPosts } from '../data/blogPostsData';
import { locationSeoPages } from '../data/locationSeoData';
import { glossaryTerms } from '../data/glossaryTermsData';
import { seoLandingPages } from '../data/seoLandingPagesData';

/** Paths that should be indexed and receive a canonical URL. */
const STATIC_INDEXABLE = new Set([
  '/',
  '/about',
  '/thrive',
  '/services',
  '/programs',
  '/conditions',
  '/parent-programs',
  '/testimonials',
  '/gallery',
  '/blog',
  '/contact',
  '/glossary',
  '/book-appointment',
]);

const serviceIds = new Set(services.map((s) => s.id));
const conditionIds = new Set(conditions.map((c) => c.id));
const programIds = new Set(additionalPrograms.map((p) => p.id));
const blogSlugs = new Set(blogPosts.map((post) => post.slug));
const locationSlugs = new Set(locationSeoPages.map((location) => location.slug));
const glossarySlugs = new Set(glossaryTerms.map((term) => term.slug));
const seoLandingSlugs = new Set(seoLandingPages.map((page) => page.slug));
const serviceSlugAliases = new Set(['behaviour-therapy']);
const programSlugAliases = new Set(['handwriting-training']);

/**
 * Returns true if this pathname should be indexed (canonical + indexable).
 * Unknown paths (e.g. soft 404) return false → use noindex in SeoTechnical.
 */
export function isIndexablePathname(pathname: string): boolean {
  if (STATIC_INDEXABLE.has(pathname)) return true;

  const serviceMatch = /^\/services\/([^/]+)$/.exec(pathname);
  if (serviceMatch && (serviceIds.has(serviceMatch[1]) || serviceSlugAliases.has(serviceMatch[1]))) return true;

  const conditionMatch = /^\/conditions\/([^/]+)$/.exec(pathname);
  if (conditionMatch && conditionIds.has(conditionMatch[1])) return true;

  const programMatch = /^\/programs\/([^/]+)$/.exec(pathname);
  if (programMatch && (programIds.has(programMatch[1]) || programSlugAliases.has(programMatch[1]))) return true;

  const blogMatch = /^\/blog\/([^/]+)$/.exec(pathname);
  if (blogMatch && blogSlugs.has(blogMatch[1])) return true;

  const locationMatch = /^\/locations\/([^/]+)$/.exec(pathname);
  if (locationMatch && locationSlugs.has(locationMatch[1])) return true;

  const glossaryMatch = /^\/glossary\/([^/]+)$/.exec(pathname);
  if (glossaryMatch && glossarySlugs.has(glossaryMatch[1])) return true;

  const seoLandingMatch = /^\/([^/]+)$/.exec(pathname);
  if (seoLandingMatch && seoLandingSlugs.has(seoLandingMatch[1])) return true;

  return false;
}
