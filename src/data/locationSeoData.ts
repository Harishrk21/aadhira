export interface LocationSeoPage {
  slug: string;
  area: string;
  title: string;
  summary: string;
  nearbyContext: string;
  searchFocus: string[];
}

export const locationSeoPages: LocationSeoPage[] = [
  {
    slug: 'villivakkam',
    area: 'Villivakkam',
    title: 'Paediatric Therapy Centre in Villivakkam',
    summary:
      'Arura Integral Therapy Services is based in Thiru Nagar, Villivakkam, Chennai, providing occupational therapy, speech therapy, ABA, early intervention, special education, sensory integration, and parent guidance for children.',
    nearbyContext:
      'Families from Villivakkam, Korattur, Kolathur, Perambur, Ayanavaram, Anna Nagar, and Ambattur can reach the centre for assessment-led paediatric therapy support.',
    searchFocus: [
      'best child therapy centre in Villivakkam',
      'speech therapy Villivakkam',
      'occupational therapy Villivakkam',
      'ABA therapy Villivakkam',
      'early intervention centre Villivakkam',
    ],
  },
  {
    slug: 'anna-nagar',
    area: 'Anna Nagar',
    title: 'Child Therapy Near Anna Nagar',
    summary:
      'Arura supports families searching for child therapy near Anna Nagar with integrated OT, speech therapy, ABA, school readiness, and behaviour support from the Villivakkam centre.',
    nearbyContext:
      'The Villivakkam centre is positioned for North and Central Chennai families who need coordinated therapy planning near Anna Nagar, Ayanavaram, Korattur, and Kolathur.',
    searchFocus: [
      'child therapy near Anna Nagar',
      'speech therapy near Anna Nagar',
      'occupational therapy near Anna Nagar',
      'autism therapy near Anna Nagar',
      'special education near Anna Nagar',
    ],
  },
  {
    slug: 'korattur',
    area: 'Korattur',
    title: 'Child Development Centre Near Korattur',
    summary:
      'Families near Korattur can access Arura for child development support, speech and language therapy, occupational therapy, sensory integration, ABA, and early intervention.',
    nearbyContext:
      'The Villivakkam location helps families from Korattur, Ambattur, Anna Nagar, Kolathur, and surrounding North Chennai neighbourhoods start therapy with a clear assessment plan.',
    searchFocus: [
      'child development centre near Korattur',
      'speech therapy Korattur',
      'occupational therapy near Korattur',
      'ABA therapy near Korattur',
      'paediatric therapy near Korattur',
    ],
  },
  {
    slug: 'ambattur',
    area: 'Ambattur',
    title: 'Paediatric Therapy Near Ambattur',
    summary:
      'Arura provides therapy support for children from Ambattur and nearby areas, including occupational therapy, speech therapy, ABA, early intervention, handwriting support, and parent training.',
    nearbyContext:
      'Parents from Ambattur can use Arura as a coordinated Chennai therapy option for developmental, behavioural, communication, and learning concerns.',
    searchFocus: [
      'paediatric therapy near Ambattur',
      'autism therapy Ambattur',
      'speech therapy near Ambattur',
      'occupational therapy near Ambattur',
      'early intervention near Ambattur',
    ],
  },
];

