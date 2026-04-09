export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  process: { title: string; description: string }[];
  ageGroups: string;
  borderColor: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    shortDescription: "Helping children develop skills for daily activities and independence.",
    longDescription: "Our occupational therapy services focus on helping children develop the skills they need for daily activities and independence. We address fine motor skills, sensory processing, visual-motor integration, and self-care skills through engaging, play-based interventions tailored to each child's unique needs.",
    icon: "Activity",
    benefits: [
      "Improved fine motor skills for writing, dressing, and eating",
      "Enhanced sensory processing for better focus and regulation",
      "Increased independence in daily living activities",
      "Better coordination and balance",
      "Improved visual perception and hand-eye coordination"
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "A comprehensive evaluation to identify your child's strengths and challenges."
      },
      {
        title: "Goal Setting",
        description: "Developing specific, achievable goals based on your child's needs and your family's priorities."
      },
      {
        title: "Intervention",
        description: "Regular therapy sessions using play-based, goal-directed, and evidence-based activities."
      },
      {
        title: "Group Sessions (When Suitable)",
        description: "Small-group activities to build social participation, peer interaction, and real-world practice."
      },
      {
        title: "Parent Coaching",
        description: "Training parents to implement strategies at home for continued progress."
      },
      {
        title: "Progress Monitoring",
        description: "Regular reassessment to track improvements and adjust goals as needed."
      }
    ],
    ageGroups: "1-18 years",
    borderColor: "border-primary-500",
    image: "/occupationa_therapy.png"
  },
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    shortDescription: "Improving communication skills, articulation, and language development.",
    longDescription: "Our speech therapy services address communication disorders, speech clarity, language comprehension, and expression. Our certified speech therapists use evidence-based approaches to help children communicate effectively, build vocabulary, improve articulation, and develop pragmatic language skills for social interaction.",
    icon: "MessageSquare",
    benefits: [
      "Improved speech clarity and articulation",
      "Enhanced language comprehension and expression",
      "Expanded vocabulary and grammatical skills",
      "Better social communication abilities",
      "Increased confidence in communication"
    ],
    process: [
      {
        title: "Communication Evaluation",
        description: "Comprehensive assessment of speech, language, and communication skills."
      },
      {
        title: "Individualized Planning",
        description: "Creating a therapy plan targeting specific communication goals."
      },
      {
        title: "Therapy Sessions",
        description: "Engaging activities designed to build communication skills through play and structured practice."
      },
      {
        title: "Group Sessions (When Suitable)",
        description: "Peer-based communication groups to improve turn-taking, listening, and social language."
      },
      {
        title: "Family Involvement",
        description: "Teaching parents communication strategies to use at home."
      },
      {
        title: "Ongoing Assessment",
        description: "Regular progress monitoring to ensure advancement toward goals."
      }
    ],
    ageGroups: "1-15 years",
    borderColor: "border-secondary-500",
    image: "/speech_therapy.png"
  },
  {
    id: "special-education",
    title: "Special Education",
    shortDescription: "Customized learning approaches for children with diverse educational needs.",
    longDescription: "Our special education services provide customized learning approaches for children with diverse educational needs. We develop individualized education plans that focus on academic skills, cognitive development, and learning strategies. Our special educators use multisensory techniques and adaptive methods to help children succeed academically.",
    icon: "GraduationCap",
    benefits: [
      "Personalized learning strategies tailored to your child's needs",
      "Improved academic performance and concept understanding",
      "Development of study skills and organization",
      "Increased confidence and motivation for learning",
      "Better preparation for mainstream educational settings"
    ],
    process: [
      {
        title: "Educational Assessment",
        description: "Identifying learning style, strengths, and challenges through comprehensive evaluation."
      },
      {
        title: "Individualized Education Plan",
        description: "Creating targeted learning objectives and strategies."
      },
      {
        title: "Structured Learning Sessions",
        description: "Using multisensory techniques and adaptive methods for academic skill building."
      },
      {
        title: "Group Sessions (When Suitable)",
        description: "Collaborative learning groups to strengthen attention, participation, and classroom readiness."
      },
      {
        title: "Progress Tracking",
        description: "Regular assessment of academic advancement and learning goals."
      },
      {
        title: "School Collaboration",
        description: "Coordinating with schools to ensure consistent educational support."
      }
    ],
    ageGroups: "3-16 years",
    borderColor: "border-accent-500",
    image: "/Learning_disabiliites.png"
  },
  {
    id: "aba-therapy",
    title: "ABA Therapy",
    shortDescription: "Evidence-based behavior intervention strategies for children with autism and behavioral challenges.",
    longDescription: "Applied Behavior Analysis (ABA) therapy is a scientific, evidence-based approach that focuses on understanding and improving behaviors. Our ABA therapy helps children develop social, communication, and learning skills while reducing challenging behaviors. We use positive reinforcement and systematic teaching methods to help children reach their full potential.",
    icon: "Lightbulb",
    benefits: [
      "Reduction in challenging behaviors",
      "Improved social skills and interaction",
      "Enhanced communication abilities",
      "Development of self-help and independence skills",
      "Better attention and focus for learning"
    ],
    process: [
      {
        title: "Behavioral Assessment",
        description: "Detailed evaluation of behaviors, skills, and intervention needs."
      },
      {
        title: "Behavior Intervention Plan",
        description: "Development of specific strategies to address targeted behaviors."
      },
      {
        title: "Structured Intervention",
        description: "Regular sessions using positive reinforcement and systematic teaching."
      },
      {
        title: "Group Sessions (When Suitable)",
        description: "Guided peer interaction sessions to practice social skills, transitions, and shared routines."
      },
      {
        title: "Data Collection",
        description: "Continuous monitoring of progress through detailed behavior tracking."
      },
      {
        title: "Parent Training",
        description: "Teaching parents to implement behavior strategies consistently across environments."
      }
    ],
    ageGroups: "2-15 years",
    borderColor: "border-primary-500",
    image: "/behaviural_challenges.png"
  },
  {
    id: "early-intervention",
    title: "Early Intervention",
    shortDescription: "Proactive therapy for infants and toddlers to support critical developmental milestones.",
    longDescription: "Our early intervention services are designed for children under 3 years old, focusing on supporting development during this critical period. We address delays or concerns in movement, communication, learning, social interaction, and behavior. Early intervention provides the foundation for future development and can significantly improve long-term outcomes.",
    icon: "Baby",
    benefits: [
      "Earlier development of essential skills",
      "Prevention or reduction of developmental delays",
      "Foundation for future learning and development",
      "Parent education on supporting development at home",
      "Better preparation for preschool and educational settings"
    ],
    process: [
      {
        title: "Developmental Screening",
        description: "Identifying any concerns or delays in early development."
      },
      {
        title: "Family-Centered Planning",
        description: "Creating goals and strategies based on family priorities and routines."
      },
      {
        title: "Play-Based Intervention",
        description: "Using natural play activities to build developmental skills."
      },
      {
        title: "Group Sessions (When Suitable)",
        description: "Supported group play sessions to promote social engagement, imitation, and communication."
      },
      {
        title: "Parent Coaching",
        description: "Empowering parents with techniques to support development throughout daily activities."
      },
      {
        title: "Transition Planning",
        description: "Preparing for next steps as the child approaches age 3."
      }
    ],
    ageGroups: "0-3 years",
    borderColor: "border-secondary-500",
    image: "/developmental_Delay.png"
  },
  {
    id: "brain-gym",
    title: "Brain Gym Activities",
    shortDescription: "Physical movement exercises that enhance brain function and learning potential.",
    longDescription: "Brain Gym consists of simple movement exercises designed to promote optimal function of the brain and enhance learning potential. These activities help integrate body and mind, improving focus, memory, organization, communication, and emotional balance. Our Brain Gym program helps children overcome learning challenges through specific physical movements.",
    icon: "Brain",
    benefits: [
      "Improved focus and attention span",
      "Enhanced memory and information retention",
      "Better coordination and physical awareness",
      "Reduced stress and anxiety related to learning",
      "Increased academic performance and learning readiness"
    ],
    process: [
      {
        title: "Learning Profile Assessment",
        description: "Identifying areas where Brain Gym exercises can most benefit the child."
      },
      {
        title: "Movement Introduction",
        description: "Teaching specific Brain Gym movements tailored to the child's needs."
      },
      {
        title: "Guided Practice",
        description: "Regular sessions to practice and refine movements for maximum benefit."
      },
      {
        title: "Group Sessions (When Suitable)",
        description: "Movement-based group activities that build focus, coordination, and shared learning participation."
      },
      {
        title: "Integration With Learning",
        description: "Applying Brain Gym techniques during academic and daily activities."
      },
      {
        title: "Home Program",
        description: "Developing a simple routine of exercises for continued practice at home."
      }
    ],
    ageGroups: "3-18 years",
    borderColor: "border-accent-500",
    image: "/brain_gym.png"
  }
];