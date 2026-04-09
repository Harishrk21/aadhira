export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: 'speech' | 'autism' | 'adhd';
  image: string;
  hooks: string[];
  excerpt: string;
  content: string[];
  relatedServiceSlugs: string[];
  relatedConditionSlugs: string[];
  relatedBlogSlugs: string[];
  sourceUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'early-signs-speech-therapy',
    title: 'Early signs your child may need speech therapy',
    date: 'April 2026',
    category: 'speech',
    image: '/speech_therapy.png',
    hooks: ['Is your child late to start talking?', 'Know the milestones before delays widen.'],
    excerpt: 'Simple communication milestones parents can track at home and when to seek professional support.',
    content: [
      'Many children develop language at different speeds, but there are clear milestones that can help you decide when to seek support.',
      'Common early signs include delayed babbling, very limited words after 18 months, or difficulty following simple instructions.',
      'Early speech therapy can improve communication confidence, reduce frustration, and support social and school readiness.',
    ],
    relatedServiceSlugs: ['speech-therapy', 'occupational-therapy'],
    relatedConditionSlugs: ['speech-delay', 'autism'],
    relatedBlogSlugs: ['ot-activities-15-minutes', 'prepare-for-school-readiness'],
  },
  {
    id: 2,
    slug: 'ot-activities-15-minutes',
    title: 'OT activities parents can do in 15 minutes',
    date: 'April 2026',
    category: 'adhd',
    image: '/occupationa_therapy.png',
    hooks: ['Only 15 minutes a day can help.', 'Easy home OT ideas that actually work.'],
    excerpt: 'Easy fine motor and sensory activities that support your child between sessions.',
    content: [
      'Short daily activities can make a big difference when done consistently at home.',
      'Try simple tasks like peg transfers, playdough squeezing, clothespin games, and obstacle walks for body awareness.',
      'Keep activities playful, short, and predictable. Consistency matters more than intensity.',
    ],
    relatedServiceSlugs: ['occupational-therapy', 'brain-gym'],
    relatedConditionSlugs: ['adhd', 'developmental-delay'],
    relatedBlogSlugs: ['early-signs-speech-therapy', 'prepare-for-school-readiness'],
  },
  {
    id: 3,
    slug: 'prepare-for-school-readiness',
    title: 'How to prepare your child for school readiness',
    date: 'April 2026',
    category: 'autism',
    image: '/brain_gym.png',
    hooks: ['School transition feels overwhelming?', 'Build focus and routine confidence before term starts.'],
    excerpt: 'Practical routines for attention, behavior, and learning confidence before school starts.',
    content: [
      'School readiness includes communication, self-care, attention, social participation, and emotional regulation.',
      'Build routines for sitting tolerance, transitions, following two-step instructions, and simple pre-writing skills.',
      'A structured school readiness program can support children who need additional guidance before classroom entry.',
    ],
    relatedServiceSlugs: ['special-education', 'speech-therapy'],
    relatedConditionSlugs: ['autism', 'adhd'],
    relatedBlogSlugs: ['early-signs-speech-therapy', 'ot-activities-15-minutes'],
  },
  {
    id: 4,
    slug: 'sensory-brushing-parents-easy-guide',
    title: 'Sensory Brushing - A Parent\'s Easy Guide',
    date: 'September 2025',
    category: 'autism',
    image: '/gallery/interior2.png',
    hooks: ['Child gets overwhelmed by touch?', 'Learn safe sensory brushing steps parents can follow.'],
    excerpt: 'A practical parent guide to sensory brushing protocol, pressure technique, areas to avoid, and joint compressions.',
    content: [
      'Sensory Brushing (Wilbarger Protocol) is a structured method used to help children regulate sensory input and improve calmness and attention.',
      'Use only an OT sensory brush. Keep pressure firm but gentle, with smooth one-direction strokes over arms, hands, back, legs, and feet while avoiding sensitive areas.',
      'Back coverage should be even using a W/M pattern so pressure is balanced. Always follow brushing with gentle joint compressions for completion of sensory input.',
      'This should be therapist-guided and monitored for child comfort. It is not a massage routine and should be done only after professional instruction.',
    ],
    relatedServiceSlugs: ['occupational-therapy', 'sensory-integration'],
    relatedConditionSlugs: ['autism', 'developmental-delay'],
    relatedBlogSlugs: ['ot-activities-15-minutes', 'prepare-for-school-readiness'],
    sourceUrl: 'https://arurapts.blogspot.com/2025/09/sensory-brushing-parents-easy-guide.html',
  },
];
