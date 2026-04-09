import {
  BRAND_NAME,
  BRAND_TAGLINE,
  ADDRESS_CHENNAI,
  CENTER_LOCATIONS,
  EMAIL,
  PHONE_PRIMARY_E164,
  PHONE_SECONDARY_E164,
} from './brand';

/** Stable @id fragments for JSON-LD graph linking */
export const orgId = (base: string) => `${base}/#organization`;
export const clinicId = (base: string) => `${base}/#clinic`;
export const websiteId = (base: string) => `${base}/#website`;

export function getOrganizationJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId(siteUrl),
    name: BRAND_NAME,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/specialised_therapy.png`,
    email: EMAIL,
    sameAs: [] as string[],
  };
}

export function getMedicalClinicJsonLd(siteUrl: string) {
  const postalChennai = {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_CHENNAI.street,
    addressLocality: `${ADDRESS_CHENNAI.locality}, ${ADDRESS_CHENNAI.city}`,
    addressRegion: ADDRESS_CHENNAI.region,
    postalCode: ADDRESS_CHENNAI.postalCode,
    addressCountry: ADDRESS_CHENNAI.country,
  };
  const branchPlaces = CENTER_LOCATIONS.map((center) => ({
    '@type': 'Place',
    name: center.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: center.locality,
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': clinicId(siteUrl),
    name: BRAND_NAME,
    description: `${BRAND_TAGLINE}. Paediatric therapy in Chennai centres including Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam: occupational therapy, speech & language therapy, behaviour (ABA), sensory integration, early intervention, special education, school readiness, parent training, play therapy, Brain Gym, mindfulness, feeding & oral motor, assistive technology, and more.`,
    url: siteUrl,
    image: `${siteUrl}/specialised_therapy.png`,
    email: EMAIL,
    parentOrganization: { '@id': orgId(siteUrl) },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_PRIMARY_E164,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'ta'],
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_SECONDARY_E164,
        contactType: 'customer service',
      },
    ],
    address: postalChennai,
    location: [{ '@type': 'Place', name: 'Chennai — Villivakkam', address: postalChennai }, ...branchPlaces],
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'AdministrativeArea', name: 'Villivakkam' },
      { '@type': 'AdministrativeArea', name: 'North Chennai' },
      { '@type': 'AdministrativeArea', name: 'Valasaravakkam' },
      { '@type': 'City', name: 'Chengalpattu' },
      { '@type': 'AdministrativeArea', name: 'Nungambakkam' },
    ],
    medicalSpecialty: [
      'Pediatric Occupational Therapy',
      'Speech-Language Pathology',
      'Applied Behavior Analysis',
      'Special Education',
      'Early Childhood Intervention',
    ],
    priceRange: '$$',
  };
}

export function getWebSiteJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(siteUrl),
    name: BRAND_NAME,
    url: siteUrl,
    publisher: { '@id': orgId(siteUrl) },
  };
}
