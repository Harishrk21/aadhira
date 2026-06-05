/** Arura Integral Therapy Services — brand, contact, and locations (aligned with official brochure). */

export const BRAND_NAME = 'Arura Integral Therapy Services';
export const BRAND_SHORT = 'Arura';
export const BRAND_TAGLINE = "Supporting Every Child's Growth";

export const EMAIL = 'info.dunmark@gmail.com';

export const PHONE_PRIMARY_E164 = '+916379262127';
export const PHONE_PRIMARY_DISPLAY = '+91 63792 62127';

export const PHONE_SECONDARY_E164 = '+917200766120';
export const PHONE_SECONDARY_DISPLAY = '+91 72007 66120';

export const PHONE_TERTIARY_E164 = '+917200766143';
export const PHONE_TERTIARY_DISPLAY = '+91 72007 66143';

export const PHONE_QUATERNARY_E164 = '+917200766720';
export const PHONE_QUATERNARY_DISPLAY = '+91 72007 66720';

export const PHONE_ALL = [
  '6379262127',
  '7200766120',
  '7200766143',
  '7200766720',
] as const;

/** Primary clinic — Chennai (Villivakkam) */
export const ADDRESS_CHENNAI = {
  street: 'No. 90, 15th Block, 13th Street, Thiru Nagar',
  locality: 'Villivakkam',
  city: 'Chennai',
  region: 'Tamil Nadu',
  postalCode: '600049',
  country: 'IN',
};

/** Footer centres shown in latest brand banner image */
export const ADDRESS_TWINKLEZZ = {
  name: 'TWINKLEZZ',
  descriptor: 'Multispeciality Therapy Center',
  locality: 'Valasaravakkam, Chennai',
  phones: [...PHONE_ALL],
};

export const ADDRESS_UNICARE = {
  name: 'UNICARE',
  descriptor: 'Multispeciality Therapy Centre',
  locality: 'Chengalpattu',
  phones: [...PHONE_ALL],
};

export const ADDRESS_SMINGA = {
  name: 'SMINGA',
  descriptor: 'Integral Therapy Services',
  locality: 'Nungambakkam',
  phones: [...PHONE_ALL],
};

export const CENTER_LOCATIONS = [ADDRESS_TWINKLEZZ, ADDRESS_UNICARE, ADDRESS_SMINGA] as const;

export const SERVICE_FOCUS_BADGE = ['Speech', 'Behaviour', 'Occupational', 'Developmental', 'Sensory'] as const;
