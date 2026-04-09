import { services } from '../data/servicesData';
import { conditions } from '../data/conditionsData';
import { additionalPrograms } from '../data/additionalProgramsData';
import { blogPosts } from '../data/blogPostsData';

const STATIC_LABELS: Record<string, string> = {
  about: 'About Us',
  services: 'Services',
  programs: 'Programs',
  conditions: 'Conditions',
  testimonials: 'Testimonials',
  gallery: 'Gallery',
  blog: 'Blog',
  contact: 'Contact',
  'book-appointment': 'Book Appointment',
};

/**
 * BreadcrumbList JSON-LD for the current path (skip home-only — Home page adds its own).
 */
export function getBreadcrumbJsonLd(pathname: string, siteUrl: string): Record<string, unknown> | null {
  if (pathname === '/' || pathname === '') return null;

  const clean = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const segments = clean.split('/').filter(Boolean);

  const items: { name: string; item: string }[] = [{ name: 'Home', item: `${siteUrl}/` }];

  let acc = '';
  for (let i = 0; i < segments.length; i++) {
    acc += `/${segments[i]}`;
    const seg = segments[i];
    let name = STATIC_LABELS[seg] ?? seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    if (i > 0 && segments[i - 1] === 'services') {
      const s = services.find((x) => x.id === seg);
      if (s) name = s.title;
    }
    if (i > 0 && segments[i - 1] === 'conditions') {
      const c = conditions.find((x) => x.id === seg);
      if (c) name = c.title;
    }
    if (i > 0 && segments[i - 1] === 'programs') {
      const p = additionalPrograms.find((x) => x.id === seg);
      if (p) name = p.title;
    }
    if (i > 0 && segments[i - 1] === 'blog') {
      const post = blogPosts.find((x) => x.slug === seg);
      if (post) name = post.title;
    }

    items.push({ name, item: `${siteUrl}${acc}` });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}
