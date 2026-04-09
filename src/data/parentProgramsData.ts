export interface ParentProgram {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  outcomes: string[];
  duration: string;
  mode: string;
  image: string;
}

export const parentPrograms: ParentProgram[] = [
  {
    id: 'parent-guidance-sessions',
    title: 'Parent Guidance Sessions',
    subtitle: 'Clear weekly direction for home follow-through',
    summary:
      'Structured guidance sessions to help parents understand therapy goals, carry strategies into daily routines, and respond confidently to their child\'s needs.',
    outcomes: [
      'Better understanding of therapy goals and milestones',
      'Practical behavior and communication strategies for home',
      'Improved carryover between clinic sessions and home routines',
    ],
    duration: 'Weekly or bi-weekly',
    mode: 'In-clinic / Online',
    image: '/gallery/interior2.png',
  },
  {
    id: 'home-program-training',
    title: 'Home Program Training',
    subtitle: 'Daily routines that support clinic progress',
    summary:
      'Hands-on parent coaching to implement sensory, speech, motor, and self-help practice plans at home with realistic schedules and measurable goals.',
    outcomes: [
      'Step-by-step activity plan for home',
      'Consistency across weekdays, weekends, and school days',
      'Faster functional gains through repeated natural practice',
    ],
    duration: 'Custom plan by child needs',
    mode: 'In-clinic demonstration + home follow-up',
    image: '/gallery/int3.png',
  },
  {
    id: 'child-progress-reviews',
    title: 'Child Progress Reviews',
    subtitle: 'Track outcomes, refine goals, and plan next steps',
    summary:
      'Periodic review meetings where therapists and parents evaluate progress, adjust intervention priorities, and align school-home-clinic goals.',
    outcomes: [
      'Transparent tracking of strengths and current needs',
      'Updated short-term and long-term intervention goals',
      'Unified planning between family, therapist, and school',
    ],
    duration: 'Every 4-8 weeks',
    mode: 'In-clinic review',
    image: '/gallery/open_nag.png',
  },
];

