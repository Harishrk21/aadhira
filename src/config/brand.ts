/** Arura Integral Therapy Services — brand, contact, and locations (aligned with official brochure). */

export const BRAND_NAME = 'Arura Integral Therapy Services';
export const BRAND_SHORT = 'Arura';
export const BRAND_TAGLINE = "Supporting Every Child's Growth";

export const EMAIL = 'reach@aruratherapy.com';

export const PHONE_PRIMARY_E164 = '+918248999216';
export const PHONE_PRIMARY_DISPLAY = '+91 82489 99216';

export const PHONE_SECONDARY_E164 = '+916379262127';
export const PHONE_SECONDARY_DISPLAY = '+91 63792 62127';

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
  phones: ['9952618464', '9080121054'],
};

export const ADDRESS_UNICARE = {
  name: 'UNICARE',
  descriptor: 'Multispeciality Therapy Centre',
  locality: 'Chengalpattu',
  phones: ['9361100776'],
};

export const ADDRESS_SMINGA = {
  name: 'SMINGA',
  descriptor: 'Integral Therapy Services',
  locality: 'Nungambakkam',
  phones: ['7200766143'],
};

export const CENTER_LOCATIONS = [ADDRESS_TWINKLEZZ, ADDRESS_UNICARE, ADDRESS_SMINGA] as const;

export const SERVICE_FOCUS_BADGE = ['Speech', 'Behaviour', 'Occupational', 'Developmental', 'Sensory'] as const;
