import { BRAND_NAME } from './brand';

// ── Core geo constants ────────────────────────────────────────────────────────
export const SEO_PRIMARY_CITY  = 'Chennai';
export const SEO_PRIMARY_AREA  = 'Villivakkam';

/** All localities users search from — used in every keyword expansion. */
export const SEO_NEARBY_AREAS = [
  'Villivakkam',
  'Anna Nagar',
  'Ayanavaram',
  'Kolathur',
  'Korattur',
  'Padi',
  'Ambattur',
  'Perambur',
  'Kolathur',
  'Madhavaram',
  'Thirumullaivoyal',
] as const;

/** Multi-centre locations for description copy */
export const SEO_CENTER_AREAS = [
  'Villivakkam',
  'Valasaravakkam',
  'Chengalpattu',
  'Nungambakkam',
];

const locationLine = `${SEO_PRIMARY_AREA}, ${SEO_PRIMARY_CITY}`;
const centerLine   = SEO_CENTER_AREAS.join(', ');
const allAreas     = SEO_NEARBY_AREAS.join(', ');

// ── "Near me" base phrases used by every page ─────────────────────────────────
const NEAR_ME_BASE = [
  'therapy services near me',
  'therapy clinic near me',
  'paediatric therapy near me',
  'pediatric therapy near me',
  'child therapy near me',
  'best therapy centre near me',
  'therapy for children near me',
];

// ── Location × service matrix (applied to every service/program page) ─────────
function locationMatrix(term: string): string[] {
  return [
    `best ${term} in ${SEO_PRIMARY_CITY}`,
    `best ${term} in ${SEO_PRIMARY_AREA}`,
    `${term} in ${SEO_PRIMARY_CITY}`,
    `${term} ${SEO_PRIMARY_AREA}`,
    `${term} near me`,
    `${term} clinic near me`,
    `${term} therapist near me`,
    `${term} therapist in ${SEO_PRIMARY_CITY}`,
    `${term} for children ${SEO_PRIMARY_CITY}`,
    `pediatric ${term} ${SEO_PRIMARY_CITY}`,
    `paediatric ${term} ${SEO_PRIMARY_CITY}`,
    `child ${term} ${SEO_PRIMARY_CITY}`,
    ...SEO_NEARBY_AREAS.map(area => `${term} near ${area}`),
    ...SEO_NEARBY_AREAS.map(area => `${term} in ${area}`),
    ...SEO_NEARBY_AREAS.map(area => `best ${term} near ${area}`),
  ];
}

// ── Sitewide clinic keywords (used on every page) ────────────────────────────
export const DEFAULT_LOCAL_KEYWORDS: string[] = [
  `best paediatric therapy centre in ${SEO_PRIMARY_CITY}`,
  `best pediatric therapy centre in ${SEO_PRIMARY_CITY}`,
  `best child therapy clinic in ${SEO_PRIMARY_CITY}`,
  `best paediatric clinic near me`,
  `best pediatric clinic near me`,
  `paediatric therapy centre ${SEO_PRIMARY_CITY}`,
  `child development centre ${SEO_PRIMARY_CITY}`,
  `therapy centre in ${SEO_PRIMARY_AREA}`,
  `paediatric clinic Villivakkam`,
  `paediatric clinic Anna Nagar`,
  `paediatric clinic Ayanavaram`,
  `paediatric clinic Kolathur`,
  `paediatric clinic Korattur`,
  `paediatric clinic Padi`,
  `child therapy centre Anna Nagar Chennai`,
  `child therapy centre Ayanavaram Chennai`,
  `child therapy centre Kolathur Chennai`,
  `child therapy centre Korattur Chennai`,
  `child therapy centre Padi Chennai`,
  `child therapy centre Villivakkam Chennai`,
  ...NEAR_ME_BASE,
  ...SEO_NEARBY_AREAS.map(area => `child therapy near ${area}`),
  ...SEO_NEARBY_AREAS.map(area => `paediatric therapy near ${area}`),
  ...SEO_NEARBY_AREAS.map(area => `therapy clinic near ${area}`),
];

export const INSTITUTE_MOTIVATED_KEYWORDS: string[] = [
  `therapy diploma programs ${SEO_PRIMARY_CITY}`,
  `allied health diploma courses ${SEO_PRIMARY_CITY}`,
  `speech and language pathology diploma ${SEO_PRIMARY_CITY}`,
  `applied behavior therapy course ${SEO_PRIMARY_CITY}`,
  `sensory integration therapy course ${SEO_PRIMARY_CITY}`,
  `neurodevelopmental rehabilitation diploma ${SEO_PRIMARY_CITY}`,
];

// ── Title helpers ─────────────────────────────────────────────────────────────
export function localSeoTitle(topic: string, suffix = BRAND_NAME): string {
  return `${topic} in ${SEO_PRIMARY_CITY} | ${suffix}`;
}

export function bestLocalSeoTitle(topic: string, suffix = BRAND_NAME): string {
  return `Best ${topic} in ${SEO_PRIMARY_CITY} | ${suffix}`;
}

// ── Description helpers ───────────────────────────────────────────────────────
export function serviceMetaDescription(serviceTitle: string, shortDescription: string): string {
  return `${serviceTitle} at ${BRAND_NAME}, ${locationLine}. ${shortDescription} Evidence-based child therapy serving ${allAreas}.`;
}

export function programMetaDescription(programTitle: string, shortDescription: string): string {
  return `${programTitle} at ${BRAND_NAME}, ${locationLine}. ${shortDescription} Structured paediatric support for children across ${centerLine}.`;
}

export function conditionMetaDescription(conditionTitle: string): string {
  return `${conditionTitle} support at ${BRAND_NAME}, ${locationLine}. Integrated OT, speech, ABA, special education, and early intervention. Serving families across ${allAreas}.`;
}

// ── Per-page keyword functions ────────────────────────────────────────────────

/** /services/[id] — service detail pages */
export function serviceKeywords(serviceTitle: string): string {
  const t = serviceTitle.toLowerCase();
  return [
    ...locationMatrix(t),
    ...locationMatrix(`${t} therapy`),
    `${t} assessment ${SEO_PRIMARY_CITY}`,
    `${t} specialist ${SEO_PRIMARY_CITY}`,
    `${t} for kids ${SEO_PRIMARY_CITY}`,
    `${t} for toddlers ${SEO_PRIMARY_CITY}`,
    `best ${t} specialist near me`,
    ...DEFAULT_LOCAL_KEYWORDS,
    ...INSTITUTE_MOTIVATED_KEYWORDS,
  ].join(', ');
}

/** /programs/[id] — programme detail pages */
export function programKeywords(programTitle: string): string {
  const t = programTitle.toLowerCase();
  return [
    ...locationMatrix(t),
    `${t} program ${SEO_PRIMARY_CITY}`,
    `${t} for children ${SEO_PRIMARY_CITY}`,
    `${t} program near me`,
    `${t} assessment ${SEO_PRIMARY_CITY}`,
    ...DEFAULT_LOCAL_KEYWORDS,
    ...INSTITUTE_MOTIVATED_KEYWORDS,
  ].join(', ');
}

/** /conditions/[id] — condition detail pages */
export function conditionKeywords(conditionTitle: string, relatedServices: string[] = []): string {
  const t = conditionTitle.toLowerCase();
  const serviceTerms = relatedServices.flatMap(s => locationMatrix(s.toLowerCase()));
  return [
    ...locationMatrix(t),
    ...locationMatrix(`${t} treatment`),
    ...locationMatrix(`${t} therapy`),
    `${t} specialist ${SEO_PRIMARY_CITY}`,
    `${t} support ${SEO_PRIMARY_CITY}`,
    `${t} diagnosis ${SEO_PRIMARY_CITY}`,
    `${t} clinic near me`,
    `${t} support near me`,
    `child ${t} ${SEO_PRIMARY_CITY}`,
    `${t} child development ${SEO_PRIMARY_CITY}`,
    ...serviceTerms,
    ...DEFAULT_LOCAL_KEYWORDS,
  ].join(', ');
}

/** /blog/[slug] — blog posts */
export function blogKeywords(topic: string, tags: string[] = []): string {
  const t = topic.toLowerCase();
  return [
    t,
    `${t} ${SEO_PRIMARY_CITY}`,
    `${t} for children`,
    `${t} paediatric`,
    `${t} tips for parents`,
    ...tags.map(tag => tag.toLowerCase()),
    ...tags.map(tag => `${tag.toLowerCase()} ${SEO_PRIMARY_CITY}`),
    ...DEFAULT_LOCAL_KEYWORDS,
  ].join(', ');
}

/** /locations/[slug] — location SEO pages */
export function locationPageKeywords(areaName: string): string {
  return [
    `paediatric therapy ${areaName}`,
    `best paediatric therapy centre near ${areaName}`,
    `child therapy clinic ${areaName}`,
    `occupational therapy near ${areaName}`,
    `speech therapy near ${areaName}`,
    `ABA therapy near ${areaName}`,
    `early intervention near ${areaName}`,
    `sensory integration near ${areaName}`,
    `special education near ${areaName}`,
    `therapy for children near ${areaName}`,
    `best therapy centre near ${areaName}`,
    `child development centre near ${areaName}`,
    `therapy clinic near ${areaName}`,
    `paediatric clinic near ${areaName}`,
    ...NEAR_ME_BASE,
    ...DEFAULT_LOCAL_KEYWORDS,
  ].join(', ');
}

/** /glossary/[slug] — glossary term pages */
export function glossaryKeywords(termTitle: string): string {
  const t = termTitle.toLowerCase();
  return [
    `what is ${t}`,
    `${t} meaning`,
    `${t} for children`,
    `${t} explained`,
    `${t} in paediatrics`,
    `${t} ${SEO_PRIMARY_CITY}`,
    ...DEFAULT_LOCAL_KEYWORDS,
  ].join(', ');
}

// ── Static page keyword exports ───────────────────────────────────────────────

export const HOME_KEYWORDS: string[] = [
  `best paediatric therapy centre in ${SEO_PRIMARY_CITY}`,
  `best pediatric therapy centre in ${SEO_PRIMARY_CITY}`,
  `best child therapy clinic in ${SEO_PRIMARY_CITY}`,
  `top paediatric therapy centre Chennai`,
  `Arura Integral Therapy Services`,
  `paediatric therapy Villivakkam`,
  `paediatric therapy Anna Nagar`,
  `paediatric therapy Ayanavaram`,
  `paediatric therapy Kolathur`,
  `paediatric therapy Korattur`,
  `paediatric therapy Padi`,
  `occupational therapy Chennai`,
  `speech therapy Chennai`,
  `ABA therapy Chennai`,
  `sensory integration Chennai`,
  `early intervention Chennai`,
  `special education Chennai`,
  `best occupational therapy in Chennai`,
  `best speech therapy for kids in Chennai`,
  `best ABA therapy in Chennai`,
  `best sensory integration therapy in Chennai`,
  `best early intervention centre in Chennai`,
  `therapy for children near me`,
  `therapy clinic near me`,
  `therapy services near me`,
  ...SEO_NEARBY_AREAS.map(a => `paediatric therapy near ${a}`),
  ...SEO_NEARBY_AREAS.map(a => `child therapy near ${a}`),
  ...SEO_NEARBY_AREAS.map(a => `therapy clinic near ${a}`),
  ...INSTITUTE_MOTIVATED_KEYWORDS,
];

export const ABOUT_KEYWORDS: string[] = [
  `about Arura Integral Therapy Services`,
  `best paediatric therapy centre ${SEO_PRIMARY_CITY}`,
  `paediatric therapy clinic ${SEO_PRIMARY_AREA}`,
  `child therapy specialists ${SEO_PRIMARY_CITY}`,
  `trusted child therapy ${SEO_PRIMARY_CITY}`,
  `experienced paediatric therapists ${SEO_PRIMARY_CITY}`,
  `child development experts Chennai`,
  `top-rated therapy centre Chennai`,
  ...NEAR_ME_BASE,
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const SERVICES_KEYWORDS: string[] = [
  `paediatric therapy services ${SEO_PRIMARY_CITY}`,
  `child therapy services ${SEO_PRIMARY_CITY}`,
  `occupational therapy services Chennai`,
  `speech therapy services Chennai`,
  `ABA therapy services Chennai`,
  `sensory integration services Chennai`,
  `early intervention services Chennai`,
  `special education services Chennai`,
  `brain gym activities Chennai`,
  `therapy services for children ${SEO_PRIMARY_CITY}`,
  `all therapy services near me`,
  ...SEO_NEARBY_AREAS.map(a => `therapy services near ${a}`),
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const PROGRAMS_KEYWORDS: string[] = [
  `paediatric therapy programs ${SEO_PRIMARY_CITY}`,
  `school readiness program Chennai`,
  `sensory integration program Chennai`,
  `parent caregiver training Chennai`,
  `play therapy program Chennai`,
  `mindfulness program for children Chennai`,
  `feeding therapy program Chennai`,
  `handwriting program for kids Chennai`,
  `cognitive learning skills program Chennai`,
  `assistive technology program Chennai`,
  `therapy programs for children near me`,
  ...SEO_NEARBY_AREAS.map(a => `therapy programs near ${a}`),
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const CONDITIONS_KEYWORDS: string[] = [
  `autism therapy Chennai`,
  `ADHD therapy Chennai`,
  `speech delay treatment Chennai`,
  `developmental delay treatment Chennai`,
  `learning disabilities support Chennai`,
  `cerebral palsy therapy Chennai`,
  `down syndrome therapy Chennai`,
  `autism treatment near me`,
  `ADHD treatment near me`,
  `speech delay therapy near me`,
  `developmental delay support near me`,
  `paediatric conditions treatment Chennai`,
  ...SEO_NEARBY_AREAS.map(a => `autism therapy near ${a}`),
  ...SEO_NEARBY_AREAS.map(a => `speech delay therapy near ${a}`),
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const CONTACT_KEYWORDS: string[] = [
  `contact Arura therapy Chennai`,
  `book paediatric therapy appointment Chennai`,
  `Arura Integral Therapy address Villivakkam`,
  `paediatric therapy clinic phone number Chennai`,
  `book appointment therapy near me`,
  `Arura therapy centre location`,
  `TWINKLEZZ therapy Valasaravakkam`,
  `UNICARE therapy Chengalpattu`,
  `SMINGA therapy Nungambakkam`,
  `therapy centre Villivakkam contact`,
  ...NEAR_ME_BASE,
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const TESTIMONIALS_KEYWORDS: string[] = [
  `Arura therapy reviews Chennai`,
  `paediatric therapy centre reviews Chennai`,
  `best child therapy reviews Chennai`,
  `Arura Integral Therapy testimonials`,
  `therapy centre parent reviews ${SEO_PRIMARY_CITY}`,
  `child therapy success stories Chennai`,
  `top-rated paediatric therapy Chennai`,
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const BLOG_INDEX_KEYWORDS: string[] = [
  `paediatric therapy blog Chennai`,
  `child development tips for parents`,
  `occupational therapy tips for children`,
  `speech therapy activities for kids`,
  `ABA therapy insights`,
  `sensory diet tips for children`,
  `parent guide paediatric therapy`,
  `therapy blog for parents Chennai`,
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const GALLERY_KEYWORDS: string[] = [
  `Arura therapy centre gallery Chennai`,
  `paediatric therapy clinic photos`,
  `child therapy centre Villivakkam photos`,
  `best therapy clinic Chennai gallery`,
  ...DEFAULT_LOCAL_KEYWORDS,
];

export const BOOK_APPOINTMENT_KEYWORDS: string[] = [
  `book paediatric therapy appointment Chennai`,
  `book child therapy appointment near me`,
  `therapy appointment Villivakkam`,
  `therapy appointment Anna Nagar`,
  `therapy appointment Ayanavaram`,
  `therapy appointment Kolathur`,
  `therapy appointment Korattur`,
  `therapy appointment Padi`,
  `book occupational therapy session Chennai`,
  `book speech therapy session Chennai`,
  `book ABA therapy session Chennai`,
  `therapy consultation near me`,
  `paediatric therapy consultation Chennai`,
  ...NEAR_ME_BASE,
];
