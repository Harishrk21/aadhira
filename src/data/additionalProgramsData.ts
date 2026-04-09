export interface AdditionalProgram {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  ageGroups: string;
  image: string;
  benefits: string[];
  process: { title: string; description: string }[];
}

export const additionalPrograms: AdditionalProgram[] = [
  {
    id: 'school-readiness',
    title: 'School Readiness Program',
    shortDescription: 'Preparing children for classroom routines, communication, attention, and pre-academic participation.',
    longDescription:
      'Our School Readiness Program helps children transition confidently into structured school environments. The program integrates communication support, sensory regulation, early learning tasks, social interaction, and daily routine independence with parent guidance for carryover.',
    ageGroups: '3-7 years',
    image:
      'https://images.pexels.com/photos/8943225/pexels-photo-8943225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved classroom attention and participation',
      'Better self-regulation and transition tolerance',
      'Stronger communication and group interaction',
      'Readiness for pre-writing and pre-academic tasks',
    ],
    process: [
      {
        title: 'Baseline Readiness Assessment',
        description: 'We assess classroom skills including attention, communication, social participation, and routines.',
      },
      {
        title: 'Individualised School Plan',
        description: 'A targeted plan is built around your child’s strengths and school-entry goals.',
      },
      {
        title: 'Structured Readiness Sessions',
        description: 'Children practice classroom behaviors, early learning, and social group skills through guided activities.',
      },
      {
        title: 'Parent Coaching & Transition Support',
        description: 'Families receive practical home strategies to reinforce school-ready habits.',
      },
    ],
  },
  {
    id: 'sensory-integration',
    title: 'Sensory Integration',
    shortDescription: 'Helping children process sensory input for calmer behaviour and better participation.',
    longDescription:
      'Sensory Integration helps children who are over-sensitive or under-responsive to touch, movement, sound, and other sensory inputs. Sessions use structured activities so children can regulate their body, attention, and emotions and participate better at home and school.',
    ageGroups: '2-14 years',
    image:
      'https://images.pexels.com/photos/8943242/pexels-photo-8943242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved attention and body awareness',
      'Better emotional regulation and transitions',
      'Reduced sensory overload and meltdowns',
      'Improved participation in school and daily routines',
    ],
    process: [
      {
        title: 'Sensory Profile',
        description: 'We assess your child’s sensory preferences, triggers, and responses.',
      },
      {
        title: 'Regulation Plan',
        description: 'A tailored plan is created with sensory activities and calming tools.',
      },
      {
        title: 'Therapy Sessions',
        description: 'Play-based sensory activities improve processing and adaptive responses.',
      },
      {
        title: 'Home Program',
        description: 'Parents receive practical sensory strategies for daily routines.',
      },
    ],
  },
  {
    id: 'parent-caregiver-training',
    title: 'Parent & Caregiver Training',
    shortDescription: 'Practical coaching so families can support progress at home every day.',
    longDescription:
      'Parent and caregiver training gives families clear, realistic strategies to support communication, behaviour, and learning goals outside therapy sessions. We focus on routines that fit Indian home and school contexts.',
    ageGroups: 'Parents/caregivers of children 0-18 years',
    image:
      'https://images.pexels.com/photos/5905459/pexels-photo-5905459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Greater confidence for parents and caregivers',
      'Consistency between clinic and home strategies',
      'Faster generalization of skills',
      'Reduced stress during daily routines',
    ],
    process: [
      {
        title: 'Family Goal Setting',
        description: 'We identify goals that matter most for your home and school life.',
      },
      {
        title: 'Demonstration & Practice',
        description: 'Therapists model strategies and coach caregivers in real time.',
      },
      {
        title: 'Routine Integration',
        description: 'Skills are embedded into meals, play, transitions, and homework.',
      },
      {
        title: 'Review & Adjust',
        description: 'Regular reviews ensure the plan remains practical and effective.',
      },
    ],
  },
  {
    id: 'cognitive-learning-skills',
    title: 'Cognitive & Learning Skills',
    shortDescription: 'Building attention, memory, reasoning, and academic readiness skills.',
    longDescription:
      'This program strengthens core learning processes such as attention, working memory, visual perception, and problem-solving. Activities are adapted to your child’s developmental level and school expectations.',
    ageGroups: '4-16 years',
    image:
      'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved concentration and task completion',
      'Better memory and concept retention',
      'Stronger problem-solving and planning skills',
      'Improved classroom readiness and confidence',
    ],
    process: [
      {
        title: 'Learning Assessment',
        description: 'Baseline of cognitive strengths and learning barriers is established.',
      },
      {
        title: 'Skill Building Plan',
        description: 'Targeted activities are planned for attention, memory, and reasoning.',
      },
      {
        title: 'Guided Practice',
        description: 'Structured tasks and games build core learning skills step-by-step.',
      },
      {
        title: 'School Coordination',
        description: 'Recommendations are shared with parents/teachers where needed.',
      },
    ],
  },
  {
    id: 'handwriting-fine-motor',
    title: 'Handwriting & Fine Motor',
    shortDescription: 'Improving pencil control, grip, hand strength, and writing speed.',
    longDescription:
      'Children who struggle with writing often need support in fine motor control, posture, visual-motor integration, and hand endurance. This program uses graded activities to make writing easier and more legible.',
    ageGroups: '4-14 years',
    image:
      'https://images.pexels.com/photos/5905720/pexels-photo-5905720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved handwriting legibility',
      'Better pencil grip and pressure control',
      'Increased hand strength and endurance',
      'Less frustration with schoolwork',
    ],
    process: [
      {
        title: 'Fine Motor Assessment',
        description: 'We evaluate grip, posture, visual-motor skills, and writing patterns.',
      },
      {
        title: 'Motor Readiness Activities',
        description: 'Exercises improve hand strength, bilateral coordination, and control.',
      },
      {
        title: 'Writing Skill Training',
        description: 'Letter formation, spacing, alignment, and speed are trained progressively.',
      },
      {
        title: 'Classroom Carryover',
        description: 'Home and school tips help sustain handwriting improvements.',
      },
    ],
  },
  {
    id: 'play-therapy',
    title: 'Play Therapy',
    shortDescription: 'Therapeutic play to support emotional expression and social growth.',
    longDescription:
      'Play Therapy uses a child’s natural language of play to support emotional regulation, confidence, social interaction, and coping skills. It is especially helpful when children struggle to express feelings verbally.',
    ageGroups: '3-12 years',
    image:
      'https://images.pexels.com/photos/8942714/pexels-photo-8942714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved emotional expression',
      'Better social interaction and sharing',
      'Reduced anxiety and behavioural outbursts',
      'Increased confidence and self-esteem',
    ],
    process: [
      {
        title: 'Emotional Assessment',
        description: 'We understand emotional triggers, coping style, and social needs.',
      },
      {
        title: 'Therapeutic Play Plan',
        description: 'Play goals are set around regulation, communication, and social skills.',
      },
      {
        title: 'Guided Play Sessions',
        description: 'Structured and child-led play activities are used therapeutically.',
      },
      {
        title: 'Parent Guidance',
        description: 'Parents are coached on play-based support strategies at home.',
      },
    ],
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness',
    shortDescription: 'Simple child-friendly practices for focus, calmness, and self-regulation.',
    longDescription:
      'Mindfulness sessions teach children age-appropriate breathing, body awareness, and attention exercises to improve calmness and concentration. These tools can support children with stress, impulsivity, or transition difficulties.',
    ageGroups: '5-16 years',
    image:
      'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved focus and attention control',
      'Better stress and anxiety management',
      'Enhanced emotional regulation',
      'Improved sleep and calm routines',
    ],
    process: [
      {
        title: 'Baseline Check',
        description: 'We identify situations where regulation and focus are challenging.',
      },
      {
        title: 'Skill Teaching',
        description: 'Children learn breathing, grounding, and attention exercises.',
      },
      {
        title: 'Practice Integration',
        description: 'Short routines are built into school and home schedules.',
      },
      {
        title: 'Progress Review',
        description: 'Consistency and outcomes are monitored with family feedback.',
      },
    ],
  },
  {
    id: 'feeding-oral-motor',
    title: 'Feeding & Oral Motor',
    shortDescription: 'Support for chewing, swallowing safety, oral-motor control, and picky eating.',
    longDescription:
      'This program supports children with feeding difficulties, oral-motor weakness, texture aversions, and selective eating. Sessions are designed for safe progression and positive mealtime experiences for children and families.',
    ageGroups: '0-12 years',
    image:
      'https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Safer and more efficient chewing/swallowing patterns',
      'Improved oral-motor control',
      'Expanded food acceptance and textures',
      'Reduced mealtime stress for families',
    ],
    process: [
      {
        title: 'Feeding History & Screening',
        description: 'We evaluate oral skills, food responses, and mealtime routines.',
      },
      {
        title: 'Individual Feeding Plan',
        description: 'A graded plan is created for oral-motor and feeding goals.',
      },
      {
        title: 'Therapy Sessions',
        description: 'Targeted oral-motor and feeding activities are practiced safely.',
      },
      {
        title: 'Caregiver Mealtime Coaching',
        description: 'Parents receive structured steps to continue progress at home.',
      },
    ],
  },
  {
    id: 'assistive-technology-support',
    title: 'Assistive Technology Support',
    shortDescription: 'Using AAC and learning tools to improve communication and independence.',
    longDescription:
      'Assistive Technology Support helps children access communication, learning, and daily tasks through suitable tools, including low-tech and high-tech options such as AAC supports, visual schedules, and adaptive learning aids.',
    ageGroups: '3-18 years',
    image:
      'https://images.pexels.com/photos/5905476/pexels-photo-5905476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Improved functional communication',
      'Better classroom participation',
      'Greater independence in routines',
      'Reduced frustration during tasks',
    ],
    process: [
      {
        title: 'Needs Assessment',
        description: 'We identify communication and learning barriers requiring support.',
      },
      {
        title: 'Tool Selection',
        description: 'Appropriate assistive tools are selected for the child’s profile.',
      },
      {
        title: 'Training & Integration',
        description: 'Child, parents, and caregivers are trained to use tools consistently.',
      },
      {
        title: 'Follow-up Optimization',
        description: 'Tools and strategies are refined based on progress and context.',
      },
    ],
  },
];
