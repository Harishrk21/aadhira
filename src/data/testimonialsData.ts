export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The occupational therapy services at Aadhiraa have been transformative for my son. His fine motor skills have improved dramatically, and he's now able to write and draw with much greater confidence. The therapists are patient, skilled, and genuinely care about his progress.",
    author: "Priya R.",
    role: "Parent of 7-year-old",
    image: "https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "After just six months of speech therapy at Aadhiraa, my daughter went from speaking only a few words to communicating in full sentences. The therapists make the sessions fun and engaging, and they've given us so many useful strategies to practice at home.",
    author: "Arun K.",
    role: "Parent of 4-year-old",
    image: "https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "The School Readiness Program was exactly what my child needed before starting kindergarten. Not only did they address his sensory issues, but they also helped with social skills and classroom readiness. The structured routine and caring staff made all the difference.",
    author: "Lakshmi S.",
    role: "Parent of 5-year-old",
    image: "https://images.pexels.com/photos/8944024/pexels-photo-8944024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    quote: "As parents of a child with autism, finding the right support has been challenging. Aadhiraa's comprehensive approach with ABA therapy, speech therapy, and occupational therapy has given our son the tools to thrive. We've seen incredible progress in his communication and behavior.",
    author: "Rajesh and Deepa M.",
    role: "Parents of 6-year-old",
    image: "https://images.pexels.com/photos/5905502/pexels-photo-5905502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    quote: "The early intervention services we received for our daughter with Down syndrome have been invaluable. The therapists at Aadhiraa designed a program specifically for her needs, and they've been alongside us every step of the way. She's now meeting milestones we weren't sure would be possible.",
    author: "Meena T.",
    role: "Parent of 2-year-old",
    image: "https://images.pexels.com/photos/5905628/pexels-photo-5905628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    quote: "The Brain Gym activities have made a remarkable difference in my son's ability to focus and learn. His teachers have noticed the improvement in his classroom participation, and his frustration with learning has decreased significantly.",
    author: "Vijay N.",
    role: "Parent of 9-year-old",
    image: "https://images.pexels.com/photos/5905559/pexels-photo-5905559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];