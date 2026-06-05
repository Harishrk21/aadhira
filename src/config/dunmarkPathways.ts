export interface DunmarkPathway {
  title: string;
  url: string;
  reason: string;
}

const DUNMARK_URLS = {
  courses: 'https://dunmarkedu.com/courses',
  sensoryIntegration: 'https://dunmarkedu.com/courses/sensory-integration',
  appliedBehavior: 'https://dunmarkedu.com/courses/applied-behavior',
  speechLanguage: 'https://dunmarkedu.com/courses/speech-language',
  mindfulness: 'https://dunmarkedu.com/courses/mindfulness',
  brainGym: 'https://dunmarkedu.com/courses/brain-gym',
  neuroDevelopmental: 'https://dunmarkedu.com/courses/neuro-developmental',
  assistiveTech: 'https://dunmarkedu.com/courses/assistive%20tech',
  certification: 'https://dunmarkedu.com/certification',
} as const;

const SERVICE_PATHWAY_MAP: Record<string, DunmarkPathway[]> = {
  'occupational-therapy': [
    { title: 'Diploma in Sensory Integration Therapy', url: DUNMARK_URLS.sensoryIntegration, reason: 'Aligned with sensory modulation and functional participation work.' },
    { title: 'Diploma in Neurodevelopmental Rehabilitation', url: DUNMARK_URLS.neuroDevelopmental, reason: 'Supports OT frameworks for developmental coordination and motor planning.' },
  ],
  'speech-therapy': [
    { title: 'Diploma in Speech & Language Pathology', url: DUNMARK_URLS.speechLanguage, reason: 'Directly aligned with speech, language, and communication intervention.' },
    { title: 'All Courses Overview', url: DUNMARK_URLS.courses, reason: 'Explore related learning pathways for speech and multidisciplinary support.' },
  ],
  'special-education': [
    { title: 'Certification Pathways', url: DUNMARK_URLS.certification, reason: 'Supports structured educational and intervention training progression.' },
    { title: 'Diploma in Neurodevelopmental Rehabilitation', url: DUNMARK_URLS.neuroDevelopmental, reason: 'Relevant for learning support in neurodevelopmental profiles.' },
  ],
  'aba-therapy': [
    { title: 'Diploma in Applied Behavior Therapy', url: DUNMARK_URLS.appliedBehavior, reason: 'Direct course alignment with ABA principles and behavior plans.' },
    { title: 'All Courses Overview', url: DUNMARK_URLS.courses, reason: 'Additional related options for behavior and developmental support.' },
  ],
  'early-intervention': [
    { title: 'Diploma in Neurodevelopmental Rehabilitation', url: DUNMARK_URLS.neuroDevelopmental, reason: 'Strong overlap with early developmental intervention pathways.' },
    { title: 'Diploma in Speech & Language Pathology', url: DUNMARK_URLS.speechLanguage, reason: 'Useful for communication-first early intervention goals.' },
  ],
  'brain-gym': [
    { title: 'Diploma in Brain Gym', url: DUNMARK_URLS.brainGym, reason: 'Matched to movement-based cognitive activation and learning readiness.' },
    { title: 'Diploma in Mindfulness', url: DUNMARK_URLS.mindfulness, reason: 'Complements regulation and attention goals in brain-based interventions.' },
  ],
};

const PROGRAM_PATHWAY_MAP: Record<string, DunmarkPathway[]> = {
  'school-readiness': [
    { title: 'Diploma in Neurodevelopmental Rehabilitation', url: DUNMARK_URLS.neuroDevelopmental, reason: 'Useful for school-entry developmental support.' },
    { title: 'Diploma in Speech & Language Pathology', url: DUNMARK_URLS.speechLanguage, reason: 'Supports communication readiness for classroom participation.' },
  ],
  'sensory-integration': [{ title: 'Diploma in Sensory Integration Therapy', url: DUNMARK_URLS.sensoryIntegration, reason: 'Directly aligned with sensory processing and regulation work.' }],
  'parent-caregiver-training': [{ title: 'Diploma in Applied Behavior Therapy', url: DUNMARK_URLS.appliedBehavior, reason: 'Helps structure behavior coaching and home consistency.' }],
  'cognitive-learning-skills': [
    { title: 'Diploma in Brain Gym', url: DUNMARK_URLS.brainGym, reason: 'Supports cognitive activation, attention, and learning readiness.' },
    { title: 'Diploma in Mindfulness', url: DUNMARK_URLS.mindfulness, reason: 'Supports attention control and emotional regulation goals.' },
  ],
  'handwriting-fine-motor': [{ title: 'Diploma in Neurodevelopmental Rehabilitation', url: DUNMARK_URLS.neuroDevelopmental, reason: 'Aligned with motor planning and developmental skill progression.' }],
  'play-therapy': [
    { title: 'Diploma in Applied Behavior Therapy', url: DUNMARK_URLS.appliedBehavior, reason: 'Complements behavior shaping and social participation goals.' },
    { title: 'Diploma in Mindfulness', url: DUNMARK_URLS.mindfulness, reason: 'Supports emotional regulation outcomes used in play-based work.' },
  ],
  mindfulness: [{ title: 'Diploma in Mindfulness', url: DUNMARK_URLS.mindfulness, reason: 'Direct alignment with mindfulness-based child regulation strategies.' }],
  'feeding-oral-motor': [{ title: 'Diploma in Speech & Language Pathology', url: DUNMARK_URLS.speechLanguage, reason: 'Relevant for oral-motor and communication-related feeding foundations.' }],
  'assistive-technology-support': [{ title: 'Diploma in Assistive Technology', url: DUNMARK_URLS.assistiveTech, reason: 'Direct overlap with AAC, adaptive tools, and participation support.' }],
};

export function getDunmarkPathwaysForService(serviceId: string): DunmarkPathway[] {
  return SERVICE_PATHWAY_MAP[serviceId] ?? [{ title: 'All Courses Overview', url: DUNMARK_URLS.courses, reason: 'Explore Dunmark course pathways related to this therapy area.' }];
}

export function getDunmarkPathwaysForProgram(programId: string): DunmarkPathway[] {
  return PROGRAM_PATHWAY_MAP[programId] ?? [{ title: 'All Courses Overview', url: DUNMARK_URLS.courses, reason: 'Explore Dunmark course pathways related to this programme.' }];
}
