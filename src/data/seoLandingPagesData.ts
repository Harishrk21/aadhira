export interface SeoLandingPage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  searchIntent: string[];
  primaryLink: { label: string; href: string };
  secondaryLinks: { label: string; href: string }[];
}

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: 'best-occupational-therapy-in-chennai',
    title: 'Best Occupational Therapy in Chennai',
    subtitle: 'Assessment-led paediatric OT support across Chennai families',
    description:
      'Arura provides paediatric occupational therapy in Chennai with structured goals for sensory regulation, fine motor skills, handwriting readiness, and daily living independence.',
    searchIntent: ['best occupational therapy in Chennai', 'pediatric occupational therapy Chennai', 'occupational therapy near me for child'],
    primaryLink: { label: 'View Occupational Therapy Service', href: '/services/occupational-therapy' },
    secondaryLinks: [
      { label: 'Handwriting & Fine Motor Program', href: '/programs/handwriting-fine-motor' },
      { label: 'Book Appointment', href: '/book-appointment' },
    ],
  },
  {
    slug: 'best-speech-therapy-for-kids-in-chennai',
    title: 'Best Speech Therapy for Kids in Chennai',
    subtitle: 'Speech and language support for children across Chennai',
    description:
      'Arura Speech Therapy supports articulation, language development, communication confidence, and social communication through child-friendly structured sessions.',
    searchIntent: ['best speech therapy for kids in Chennai', 'child speech therapy Chennai', 'speech therapist near me for child'],
    primaryLink: { label: 'View Speech Therapy Service', href: '/services/speech-therapy' },
    secondaryLinks: [
      { label: 'Early Intervention Service', href: '/services/early-intervention' },
      { label: 'Book Appointment', href: '/book-appointment' },
    ],
  },
  {
    slug: 'best-aba-therapy-in-chennai',
    title: 'Best ABA Therapy in Chennai',
    subtitle: 'Behavior intervention and parent coaching support',
    description:
      'Arura ABA Therapy uses evidence-based behavior strategies for communication, daily routines, social participation, and reduced challenging behavior.',
    searchIntent: ['best ABA therapy in Chennai', 'behavior therapy for autism Chennai', 'ABA therapy near me'],
    primaryLink: { label: 'View ABA Therapy Service', href: '/services/aba-therapy' },
    secondaryLinks: [
      { label: 'Parent & Caregiver Training', href: '/programs/parent-caregiver-training' },
      { label: 'Book Appointment', href: '/book-appointment' },
    ],
  },
  {
    slug: 'sensory-integration-therapy-in-chennai',
    title: 'Sensory Integration Therapy in Chennai',
    subtitle: 'Regulation-focused support for sensory processing challenges',
    description:
      'Arura Sensory Integration therapy supports children with over-responsivity, under-responsivity, and sensory-seeking patterns with structured therapeutic activities.',
    searchIntent: ['sensory integration therapy in Chennai', 'sensory therapy near me', 'sensory processing support Chennai'],
    primaryLink: { label: 'View Sensory Integration Program', href: '/programs/sensory-integration' },
    secondaryLinks: [
      { label: 'Occupational Therapy Service', href: '/services/occupational-therapy' },
      { label: 'Book Appointment', href: '/book-appointment' },
    ],
  },
  {
    slug: 'child-development-centre-in-chennai',
    title: 'Child Development Centre in Chennai',
    subtitle: 'Integrated OT, Speech, ABA, and developmental support',
    description:
      'Arura functions as an integrated child development centre in Chennai, combining multidisciplinary planning for communication, behavior, learning, and participation outcomes.',
    searchIntent: ['child development centre in Chennai', 'best pediatric clinic near me', 'paediatric therapy centre Chennai'],
    primaryLink: { label: 'Explore All Services', href: '/services' },
    secondaryLinks: [
      { label: 'Location: Villivakkam', href: '/locations/villivakkam' },
      { label: 'Book Appointment', href: '/book-appointment' },
    ],
  },
];
