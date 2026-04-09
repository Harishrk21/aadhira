import { services } from '../data/servicesData';
import { conditions } from '../data/conditionsData';
import { additionalPrograms } from '../data/additionalProgramsData';
import { blogPosts } from '../data/blogPostsData';
import { parentPrograms } from '../data/parentProgramsData';

/** Paths that should be indexed and receive a canonical URL. */
const STATIC_INDEXABLE = new Set([
  '/',
  '/about',
  '/services',
  '/programs',
  '/conditions',
  '/parent-programs',
  '/testimonials',
  '/gallery',
  '/blog',
  '/contact',
  '/book-appointment',
]);

const serviceIds = new Set(services.map((s) => s.id));
const conditionIds = new Set(conditions.map((c) => c.id));
const programIds = new Set(additionalPrograms.map((p) => p.id));
const blogSlugs = new Set(blogPosts.map((post) => post.slug));
const parentProgramSlugs = new Set(parentPrograms.map((program) => program.id));
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

  const parentProgramMatch = /^\/parent-programs\/([^/]+)$/.exec(pathname);
  if (parentProgramMatch && parentProgramSlugs.has(parentProgramMatch[1])) return true;

  return false;
}
