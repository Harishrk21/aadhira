import { AREA_KEYWORDS } from './localAreas';

export interface PageKeywordProfile {
  primary: string;
  secondary: string[];
  local: string[];
}

export const keywordEngine: Record<string, PageKeywordProfile> = {
  '/': {
    primary: 'child development and rehabilitation centre Chennai',
    secondary: ['paediatric therapy', 'speech therapy for kids', 'occupational therapy for children'],
    local: AREA_KEYWORDS,
  },
  '/services/speech-therapy': {
    primary: 'speech therapy Chennai',
    secondary: ['speech delay therapy', 'child language therapy', 'communication therapy for kids'],
    local: ['speech therapy Korattur', 'speech therapy Anna Nagar', 'speech therapy Ambattur'],
  },
  '/blog/early-signs-speech-therapy': {
    primary: 'early signs of speech delay in children',
    secondary: ['when to start speech therapy', 'speech milestones by age'],
    local: ['speech delay help Chennai', 'speech therapist near Anna Nagar'],
  },
  '/testimonials': {
    primary: 'best child therapy centre reviews Chennai',
    secondary: ['parent testimonials therapy', 'child rehab feedback'],
    local: ['therapy centre reviews Korattur', 'therapy centre reviews Ambattur'],
  },
};

export function getKeywordProfile(pathname: string): PageKeywordProfile | null {
  return keywordEngine[pathname] ?? null;
}
