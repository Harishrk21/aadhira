import {
  BRAND_NAME,
  BRAND_TAGLINE,
  ADDRESS_CHENNAI,
  CENTER_LOCATIONS,
  PHONE_PRIMARY_E164,
  PHONE_TERTIARY_E164,
  PHONE_QUATERNARY_E164,
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
    alternateName: 'Arura Therapy',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/branding/branding-logo.png`,
      width: 200,
      height: 200,
    },
    image: `${siteUrl}/images/pages/specialised_therapy.webp`,
    telephone: PHONE_PRIMARY_E164,
    sameAs: [
      'https://www.facebook.com/aruratherapy',
      'https://www.instagram.com/aruratherapy_chennai_49/',
      'https://www.youtube.com/@aruratherapy',
      'https://maps.app.goo.gl/1UPd2Lp9w1kSuSPq9',
    ],
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
    image: `${siteUrl}/images/pages/specialised_therapy.webp`,
    parentOrganization: { '@id': orgId(siteUrl) },
    telephone: PHONE_PRIMARY_E164,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_PRIMARY_E164,
        contactType: 'customer service',
        url: `${siteUrl}/contact`,
        areaServed: 'IN',
        availableLanguage: ['en', 'ta'],
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_TERTIARY_E164,
        contactType: 'customer service',
        areaServed: 'IN',
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_QUATERNARY_E164,
        contactType: 'customer service',
        areaServed: 'IN',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.10027028722701,
      longitude: 80.20060147609612,
    },
    hasMap: 'https://www.google.com/maps/place/ARURA+PAEDIATRIC+THERAPY+SERVICES/@13.10027028722701,80.20060147609612,17z',
    address: postalChennai,
    location: [{ '@type': 'Place', name: 'Chennai — Villivakkam', address: postalChennai }, ...branchPlaces],
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'AdministrativeArea', name: 'Villivakkam' },
      { '@type': 'AdministrativeArea', name: 'North Chennai' },
      { '@type': 'AdministrativeArea', name: 'Korattur' },
      { '@type': 'AdministrativeArea', name: 'Anna Nagar' },
      { '@type': 'AdministrativeArea', name: 'Ambattur' },
      { '@type': 'AdministrativeArea', name: 'Kolathur' },
      { '@type': 'AdministrativeArea', name: 'Perambur' },
      { '@type': 'AdministrativeArea', name: 'Ayanavaram' },
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
    alternateName: 'Arura Therapy',
    url: siteUrl,
    publisher: { '@id': orgId(siteUrl) },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };
}
