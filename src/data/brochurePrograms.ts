/**
 * Programs and service lines from Arura brochure (English + Tamil categories).
 * Use alongside core service detail routes in servicesData.
 */

export type BrochureCategory = 'therapy' | 'training' | 'specialized';

export interface BrochureProgramLine {
  title: string;
  category: BrochureCategory;
  /** Tamil section title from brochure (for display) */
  categoryLabelTa?: string;
}

export const brochureCategories: { id: BrochureCategory; title: string; titleTa: string }[] = [
  { id: 'therapy', title: 'Therapy services', titleTa: 'தெரபி சேவைகள்' },
  { id: 'training', title: 'Training & education', titleTa: 'பயிற்சி & கல்வி' },
  { id: 'specialized', title: 'Specialized programs', titleTa: 'சிறப்பு திட்டங்கள்' },
];

export const brochurePrograms: BrochureProgramLine[] = [
  { title: 'Occupational Therapy', category: 'therapy', categoryLabelTa: 'தெரபி சேவைகள்' },
  { title: 'Speech & Language Therapy', category: 'therapy' },
  { title: 'Behaviour Therapy (ABA)', category: 'therapy' },
  { title: 'Sensory Integration', category: 'therapy' },
  { title: 'Developmental & Early Intervention', category: 'therapy' },
  { title: 'Special Education', category: 'training' },
  { title: 'School Readiness', category: 'training' },
  { title: 'Parent & Caregiver Training', category: 'training' },
  { title: 'Cognitive & Learning Skills', category: 'training' },
  { title: 'Handwriting & Fine Motor', category: 'training' },
  { title: 'Play Therapy', category: 'specialized' },
  { title: 'Brain Gym', category: 'specialized' },
  { title: 'Mindfulness', category: 'specialized' },
  { title: 'Feeding & Oral Motor', category: 'specialized' },
  { title: 'Assistive Technology Support', category: 'specialized' },
];
