export interface Condition {
  id: string;
  title: string;
  description: string;
  signs: string[];
  treatments: string[];
  icon: string;
  image: string;
}

export const conditions: Condition[] = [
  {
    id: "autism",
    title: "Autism Spectrum Disorder (ASD)",
    description: "Autism Spectrum Disorder is a neurodevelopmental condition that affects social interaction, communication, behavior, and sensory processing. Children with autism may develop at a different pace and in different ways from typically developing children. Early intervention can make a significant positive impact on development and quality of life.",
    signs: [
      "Delayed speech or language skills",
      "Difficulty with social interaction and understanding social cues",
      "Repetitive behaviors or restricted interests",
      "Sensory sensitivities (to sounds, lights, textures, etc.)",
      "Difficulty with changes in routine",
      "Challenges with nonverbal communication (eye contact, facial expressions)"
    ],
    treatments: [
      "Applied Behavior Analysis (ABA) Therapy",
      "Speech and Language Therapy",
      "Occupational Therapy for sensory processing and daily living skills",
      "Social Skills Training",
      "Special Education support"
    ],
    icon: "Puzzle",
    image: "https://images.pexels.com/photos/8942833/pexels-photo-8942833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "adhd",
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    description: "ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning and development. ADHD can affect a child's success in school, relationships with others, and overall quality of life.",
    signs: [
      "Difficulty sustaining attention in tasks or play activities",
      "Often does not seem to listen when spoken to directly",
      "Easily distracted by external stimuli",
      "Excessive physical movement (fidgeting, running, climbing)",
      "Difficulty waiting turns or interrupting others",
      "Forgetfulness in daily activities and completing tasks"
    ],
    treatments: [
      "Behavioral Therapy",
      "Parent Training and Education",
      "School Accommodations and Support",
      "Occupational Therapy for self-regulation",
      "Brain Gym Activities for focus and attention"
    ],
    icon: "Zap",
    image: "https://images.pexels.com/photos/8943242/pexels-photo-8943242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "learning-disabilities",
    title: "Learning Disabilities",
    description: "Learning disabilities are neurologically-based processing problems that can interfere with learning basic skills such as reading, writing, or math. They can also affect higher level skills like organization, time planning, and abstract reasoning. Learning disabilities are not related to intelligence - children with learning disabilities often have average or above average intelligence.",
    signs: [
      "Difficulty with reading, writing, or mathematics",
      "Problems with attention, memory, or organization",
      "Trouble following directions or sequences",
      "Poor coordination or spatial awareness",
      "Difficulty with time management and planning",
      "Inconsistent school performance"
    ],
    treatments: [
      "Special Education with individualized learning plans",
      "Educational Therapy",
      "Occupational Therapy for visual-motor integration",
      "Assistive Technology",
      "Multisensory teaching approaches"
    ],
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cerebral-palsy",
    title: "Cerebral Palsy",
    description: "Cerebral Palsy (CP) is a group of permanent movement disorders that appear in early childhood. It's caused by damage to or abnormal development of the brain, often before birth. CP affects a person's ability to move and maintain balance and posture. The severity can vary widely, from mild to severe.",
    signs: [
      "Delayed motor milestones (sitting, crawling, walking)",
      "Abnormal muscle tone (too stiff or too floppy)",
      "Abnormal posture or movement patterns",
      "Poor coordination and balance",
      "Difficulty with precise movements",
      "May have associated conditions (seizures, intellectual disability, etc.)"
    ],
    treatments: [
      "Physical Therapy to improve movement and strengthen muscles",
      "Occupational Therapy for daily living activities",
      "Speech Therapy for communication and feeding difficulties",
      "Assistive Devices (braces, wheelchairs, communication aids)",
      "Early Intervention services"
    ],
    icon: "Activity",
    image: "https://images.pexels.com/photos/7088494/pexels-photo-7088494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "down-syndrome",
    title: "Down Syndrome",
    description: "Down syndrome is a genetic condition caused by the presence of an extra copy of chromosome 21. It leads to developmental delays, intellectual disability of varying degrees, and characteristic physical features. Despite these challenges, with appropriate support, children with Down syndrome can lead fulfilling lives and reach important milestones.",
    signs: [
      "Characteristic facial features",
      "Low muscle tone (hypotonia)",
      "Developmental delays in reaching milestones",
      "Intellectual disability (varying degrees)",
      "Heart defects (in some children)",
      "Hearing and vision problems"
    ],
    treatments: [
      "Early Intervention starting from infancy",
      "Speech and Language Therapy",
      "Physical Therapy to build strength and motor skills",
      "Occupational Therapy for daily living skills",
      "Special Education with individualized support"
    ],
    icon: "Heart",
    image: "https://images.pexels.com/photos/7088528/pexels-photo-7088528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "intellectual-developmental-disabilities",
    title: "Intellectual and Developmental Disabilities (IDD)",
    description: "Intellectual and Developmental Disabilities (IDD) include a range of conditions that cause significant limitations in intellectual functioning and adaptive behavior. These disabilities originate before age 18 and can affect cognitive abilities, social skills, and practical life skills.",
    signs: [
      "Delayed developmental milestones",
      "Difficulty learning new skills and concepts",
      "Challenges with problem-solving and logical thinking",
      "Limited adaptive skills (communication, self-care, social skills)",
      "Difficulty understanding abstract concepts",
      "May have associated physical or health conditions"
    ],
    treatments: [
      "Early Intervention services",
      "Special Education with individualized education plans",
      "Speech and Language Therapy",
      "Occupational Therapy for life skills",
      "Social Skills Training"
    ],
    icon: "Brain",
    image: "https://images.pexels.com/photos/8942730/pexels-photo-8942730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];