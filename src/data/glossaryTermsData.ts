export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  explanation: string;
  whoItHelps: string[];
  relatedLinks: { label: string; href: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'what-is-occupational-therapy',
    term: 'What is Occupational Therapy?',
    shortDefinition: 'Occupational Therapy helps children build daily life, school, and self-care skills.',
    explanation:
      'Paediatric Occupational Therapy supports fine motor control, sensory regulation, posture, coordination, and independence in routines like dressing, handwriting, and mealtime participation.',
    whoItHelps: ['Children with sensory challenges', 'Children with fine motor delays', 'Children with autism or ADHD'],
    relatedLinks: [
      { label: 'Occupational Therapy Service', href: '/services/occupational-therapy' },
      { label: 'Handwriting & Fine Motor Program', href: '/programs/handwriting-fine-motor' },
    ],
  },
  {
    slug: 'what-is-speech-therapy',
    term: 'What is Speech Therapy?',
    shortDefinition: 'Speech Therapy supports speech clarity, language understanding, and communication.',
    explanation:
      'Speech and Language Therapy helps children improve articulation, comprehension, vocabulary, sentence structure, and social communication using age-appropriate methods.',
    whoItHelps: ['Children with speech delay', 'Children with language delay', 'Children with communication difficulties'],
    relatedLinks: [{ label: 'Speech Therapy Service', href: '/services/speech-therapy' }],
  },
  {
    slug: 'what-is-aba-therapy',
    term: 'What is ABA Therapy?',
    shortDefinition: 'ABA Therapy uses evidence-based behavioral strategies to improve functional skills.',
    explanation:
      'Applied Behavior Analysis focuses on building communication, learning, and social participation while reducing challenging behaviors through structured reinforcement-based teaching.',
    whoItHelps: ['Children with autism', 'Children with behavior concerns', 'Families needing structured home strategies'],
    relatedLinks: [{ label: 'ABA Therapy Service', href: '/services/aba-therapy' }],
  },
  {
    slug: 'what-is-early-intervention',
    term: 'What is Early Intervention?',
    shortDefinition: 'Early Intervention supports infants and toddlers during critical developmental years.',
    explanation:
      'Early Intervention focuses on motor, communication, social, and cognitive milestones from infancy onward, with parent coaching to improve daily carryover and long-term outcomes.',
    whoItHelps: ['Infants and toddlers', 'Children with developmental risk', 'Families concerned about delayed milestones'],
    relatedLinks: [{ label: 'Early Intervention Service', href: '/services/early-intervention' }],
  },
  {
    slug: 'what-is-sensory-integration-therapy',
    term: 'What is Sensory Integration Therapy?',
    shortDefinition: 'Sensory Integration Therapy helps children process sensory input more effectively.',
    explanation:
      'It addresses hypersensitivity, sensory-seeking, and regulation challenges through structured activities that improve attention, body awareness, and participation.',
    whoItHelps: ['Children with sensory overload', 'Children with meltdowns in busy settings', 'Children with autism/ADHD sensory needs'],
    relatedLinks: [{ label: 'Sensory Integration Program', href: '/programs/sensory-integration' }],
  },
  {
    slug: 'what-is-special-education',
    term: 'What is Special Education?',
    shortDefinition: 'Special Education provides individualized academic support for diverse learners.',
    explanation:
      'It includes tailored teaching approaches for reading, writing, numeracy, comprehension, and classroom participation based on each child’s learning profile.',
    whoItHelps: ['Children with learning disabilities', 'Children with academic delays', 'Children needing individualised learning plans'],
    relatedLinks: [{ label: 'Special Education Service', href: '/services/special-education' }],
  },
  {
    slug: 'what-is-play-therapy',
    term: 'What is Play Therapy?',
    shortDefinition: 'Play Therapy uses structured play to support emotional and social development.',
    explanation:
      'Through therapeutic play activities, children can express feelings, improve coping, and strengthen social interaction and emotional regulation.',
    whoItHelps: ['Children with emotional outbursts', 'Children with social withdrawal', 'Children with anxiety-related behavior'],
    relatedLinks: [{ label: 'Play Therapy Program', href: '/programs/play-therapy' }],
  },
  {
    slug: 'what-is-feeding-therapy',
    term: 'What is Feeding Therapy?',
    shortDefinition: 'Feeding Therapy supports chewing, swallowing safety, and food acceptance.',
    explanation:
      'Feeding and Oral Motor Therapy helps children with selective eating, oral-motor weakness, texture aversion, and mealtime stress through structured progression.',
    whoItHelps: ['Children with picky/selective eating', 'Children with oral-motor difficulties', 'Families facing stressful mealtimes'],
    relatedLinks: [{ label: 'Feeding & Oral Motor Program', href: '/programs/feeding-oral-motor' }],
  },
];
