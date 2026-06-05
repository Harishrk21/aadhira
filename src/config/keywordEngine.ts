import { AREA_KEYWORDS, LOCAL_AREAS } from './localAreas';
import { INSTITUTE_MOTIVATED_KEYWORDS } from './seoContent';
import { services } from '../data/servicesData';
import { additionalPrograms } from '../data/additionalProgramsData';

export interface PageKeywordProfile {
  primary: string;
  secondary: string[];
  local: string[];
}

const COMBINED_LOCAL_KEYWORDS = [...AREA_KEYWORDS, ...INSTITUTE_MOTIVATED_KEYWORDS];
const ALL_AREAS = LOCAL_AREAS.nearby;

const serviceKeywordProfiles = Object.fromEntries(
  services.map((service) => [
    `/services/${service.id}`,
    {
      primary: `best ${service.title.toLowerCase()} in Chennai`,
      secondary: [
        `${service.title.toLowerCase()} Chennai`,
        `${service.title.toLowerCase()} for children Chennai`,
        `pediatric ${service.title.toLowerCase()} Chennai`,
        `${service.title.toLowerCase()} clinic near me`,
        `${service.title.toLowerCase()} therapist near me`,
        `best ${service.title.toLowerCase()} near me`,
        ...ALL_AREAS.map(area => `${service.title.toLowerCase()} near ${area}`),
        ...ALL_AREAS.map(area => `${service.title.toLowerCase()} in ${area}`),
      ],
      local: COMBINED_LOCAL_KEYWORDS,
    },
  ]),
) as Record<string, PageKeywordProfile>;

const programKeywordProfiles = Object.fromEntries(
  additionalPrograms.map((program) => [
    `/programs/${program.id}`,
    {
      primary: `best ${program.title.toLowerCase()} in Chennai`,
      secondary: [
        `${program.title.toLowerCase()} Chennai`,
        `${program.title.toLowerCase()} for children Chennai`,
        `${program.title.toLowerCase()} near me`,
        `${program.title.toLowerCase()} program near me`,
        ...ALL_AREAS.map(area => `${program.title.toLowerCase()} near ${area}`),
      ],
      local: COMBINED_LOCAL_KEYWORDS,
    },
  ]),
) as Record<string, PageKeywordProfile>;

export const keywordEngine: Record<string, PageKeywordProfile> = {
  ...serviceKeywordProfiles,
  ...programKeywordProfiles,

  '/': {
    primary: 'best paediatric therapy centre in Chennai',
    secondary: [
      'best pediatric therapy centre Chennai',
      'best child therapy clinic Chennai',
      'paediatric therapy Villivakkam',
      'paediatric therapy Anna Nagar',
      'paediatric therapy Ayanavaram',
      'paediatric therapy Kolathur',
      'paediatric therapy Korattur',
      'paediatric therapy Padi',
      'therapy clinic near me',
      'therapy services near me',
      'child therapy near me',
      ...ALL_AREAS.map(area => `paediatric therapy near ${area}`),
    ],
    local: COMBINED_LOCAL_KEYWORDS,
  },

  '/services/occupational-therapy': {
    primary: 'best occupational therapy in Chennai',
    secondary: [
      'occupational therapy for children Chennai',
      'pediatric OT Chennai',
      'sensory processing therapy Chennai',
      'fine motor skills therapy Chennai',
      'OT clinic near me',
      ...ALL_AREAS.map(area => `occupational therapy near ${area}`),
    ],
    local: COMBINED_LOCAL_KEYWORDS,
  },

  '/services/speech-therapy': {
    primary: 'best speech therapy in Chennai',
    secondary: [
      'speech delay therapy Chennai',
      'speech therapy for kids Chennai',
      'child language therapy Chennai',
      'communication therapy Chennai',
      'speech therapist near me',
      ...ALL_AREAS.map(area => `speech therapy near ${area}`),
    ],
    local: [...AREA_KEYWORDS, ...INSTITUTE_MOTIVATED_KEYWORDS],
  },

  '/services/aba-therapy': {
    primary: 'best ABA therapy in Chennai',
    secondary: [
      'applied behaviour analysis Chennai',
      'behaviour therapy for autism Chennai',
      'ABA for children Chennai',
      'ABA therapist near me',
      ...ALL_AREAS.map(area => `ABA therapy near ${area}`),
    ],
    local: COMBINED_LOCAL_KEYWORDS,
  },

  '/services/early-intervention': {
    primary: 'best early intervention centre in Chennai',
    secondary: [
      'early intervention for toddlers Chennai',
      'developmental support infants Chennai',
      'early childhood therapy Chennai',
      'early intervention near me',
      ...ALL_AREAS.map(area => `early intervention near ${area}`),
    ],
    local: COMBINED_LOCAL_KEYWORDS,
  },

  '/testimonials': {
    primary: 'best child therapy centre reviews Chennai',
    secondary: [
      'Arura therapy reviews',
      'paediatric therapy testimonials Chennai',
      'best pediatric clinic near me reviews',
      'child therapy success stories Chennai',
      ...ALL_AREAS.map(area => `therapy centre reviews near ${area}`),
    ],
    local: COMBINED_LOCAL_KEYWORDS,
  },

  '/blog/early-signs-speech-therapy': {
    primary: 'early signs of speech delay in children',
    secondary: ['when to start speech therapy', 'speech milestones by age', 'speech delay symptoms'],
    local: ['speech delay help Chennai', ...ALL_AREAS.map(area => `speech therapist near ${area}`)],
  },
};

export function getKeywordProfile(pathname: string): PageKeywordProfile | null {
  return keywordEngine[pathname] ?? null;
}
