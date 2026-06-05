# Arura Therapy SEO Audit and Handoff

Domain: https://aruratherapy.in  
Primary location focus: Villivakkam, Chennai  
Secondary coverage: Valasaravakkam, Chengalpattu, Nungambakkam, Korattur, Anna Nagar, Ambattur, Kolathur, Perambur, Ayanavaram

## Content Extracted From Website

### Core pages

- `/` - Home page for Arura Integral Therapy Services, paediatric therapy centre in Villivakkam, Chennai.
- `/about` - Mission, vision, leadership, facilities, multidisciplinary care model, parent partnership model.
- `/services` - Main service library covering core therapy disciplines and specialised programmes.
- `/programs` - Child development and support programmes.
- `/parent-programs` - Parent guidance, home programme training, child progress reviews.
- `/conditions` - Conditions supported, including autism, ADHD, speech delay, learning disabilities, developmental delay, sensory processing difficulties, and behavioural challenges.
- `/testimonials` - Parent reviews and Google review CTA.
- `/gallery` - Clinic and therapy environment photos.
- `/blog` - Parent guides, therapy checklists, and clinical resource articles.
- `/contact` - Phone, email, appointment, WhatsApp, and centre details.
- `/book-appointment` - Appointment booking page with Google Form embed.
- `/locations/villivakkam` - Primary local landing page for Villivakkam child therapy searches.
- `/locations/anna-nagar` - Nearby-area landing page for Anna Nagar search intent.
- `/locations/korattur` - Nearby-area landing page for Korattur search intent.
- `/locations/ambattur` - Nearby-area landing page for Ambattur search intent.

### Service pages

- `/services/occupational-therapy` - Fine motor, sensory processing, ADL, motor planning, independence.
- `/services/speech-therapy` - Speech clarity, language development, communication, articulation, oral motor support.
- `/services/special-education` - Academic skills, learning disability support, IEP-style learning plans.
- `/services/aba-therapy` - Behaviour support, autism behaviour support, social skills, parent training.
- `/services/early-intervention` - 0-3 developmental support, play-based intervention, parent coaching.
- `/services/brain-gym` - Brain Gym, focus, coordination, memory, movement-based learning support.

### Programme pages

- `/programs/school-readiness` - Classroom routines, attention, communication, pre-academic participation.
- `/programs/sensory-integration` - Sensory processing, regulation, emotional control, daily participation.
- `/programs/parent-caregiver-training` - Parent coaching and home carryover.
- `/programs/cognitive-learning-skills` - Attention, memory, reasoning, academic readiness.
- `/programs/handwriting-fine-motor` - Pencil grip, fine motor control, writing speed, handwriting legibility.
- `/programs/play-therapy` - Emotional expression, social growth, confidence, coping skills.
- `/programs/mindfulness` - Breathing, grounding, calmness, focus, self-regulation.
- `/programs/feeding-oral-motor` - Chewing, swallowing, selective eating, oral motor control.
- `/programs/assistive-technology-support` - AAC, visual schedules, adaptive learning tools.

### Condition pages

- `/conditions/autism` - Autism Spectrum Disorder support with OT, speech, ABA, parent guidance.
- `/conditions/adhd` - ADHD support with behaviour strategies, regulation, OT, Brain Gym.
- `/conditions/speech-delay` - Speech delay signs and speech-language intervention.
- `/conditions/developmental-delay` - Motor, language, social, cognitive milestone support.
- `/conditions/learning-disabilities` - Reading, writing, maths, learning strategy support.
- `/conditions/cerebral-palsy` - Movement, posture, daily living, communication support.
- `/conditions/down-syndrome` - Early intervention, speech, OT, special education support.
- `/conditions/intellectual-developmental-disabilities` - Adaptive skills, communication, learning support.

### Blog pages

The site has 35 blog/resource routes in `src/data/blogPostsData.ts`. The sitemap now includes all of them, including:

- Early speech therapy signs, OT home activities, school readiness preparation.
- Sensory brushing, sensory seeking, sensory diet plans, sensory checklist.
- OT intervention banks, reflex checklists, gross motor, handwriting, visual motor and sitting tolerance checklists.
- Parent questionnaires, observation checklists, emotional regulation and toilet training resources.
- Service overview, welcome post, rapport-building activities, swing protocol guide.

## SEO Work Completed

- Confirmed production canonical domain is `https://aruratherapy.in` in `src/config/site.ts`.
- Fixed canonical generation so query strings are not included in canonical URLs.
- Updated base `index.html` title, description, and keywords from the older Chennai/Nagapattinam wording to Villivakkam/Chennai focused wording.
- Added reusable local SEO helpers in `src/config/seoContent.ts`.
- Added stronger SEO titles such as "Best Paediatric Therapy Centre in Chennai" and "Best [service] in Chennai".
- Expanded local keyword coverage for Villivakkam, Korattur, Anna Nagar, Ambattur, Kolathur, Perambur, and Ayanavaram.
- Expanded `keywordEngine` so all service and programme pages get local keyword profiles instead of only a few routes.
- Added local keyword content blocks on service detail pages.
- Improved service detail meta descriptions and keyword tags with Chennai and Villivakkam intent.
- Improved programme detail meta descriptions and keyword tags with Chennai and Villivakkam intent.
- Improved page header SEO support so each page can keep a custom local SEO title instead of being overwritten by generic titles.
- Improved SEO titles and descriptions for services, programmes, conditions, about, parent programmes, blog, blog detail, testimonials, gallery, contact, and booking pages.
- Expanded MedicalClinic structured data area coverage with nearby Chennai neighbourhoods.
- Expanded `public/sitemap.xml` to include all 35 blog routes, not only the first 3.
- Confirmed `robots.txt` points to `https://aruratherapy.in/sitemap.xml`.
- Added indexed local landing pages for Villivakkam, Anna Nagar, Korattur, and Ambattur.
- Added location route support, breadcrumb labels, sitemap entries, and footer discovery links for local landing pages.
- Added a homepage trust-signal section covering assessment-led planning, multidisciplinary coordination, parent partnership, child-safe environment, and evidence-informed care.
- Removed stale brand/content signals from source, including old Aadhira alt labels, Nagapattinam wording, and education-institute phrasing.
- Removed footer links to privacy/terms routes that did not exist, avoiding avoidable broken internal links.

## Important Notes

- Meta keywords were added because you requested keyword coverage, but Google largely ignores the `keywords` meta tag. The more important SEO work is page titles, descriptions, headings, body copy, internal links, structured data, sitemap coverage, Google Business Profile, reviews, and consistent local citations.
- The site is a client-rendered React app. Google can index this, but the strongest SEO setup would be server-side rendering or static pre-rendering for every page in the future.
- The current sitemap is static. If new blogs, services, or programmes are added later, the sitemap must be updated again or generated automatically during build.

## Still Needed From Your Side

- Confirm the exact official business name to use everywhere: `Arura Integral Therapy Services` or another spelling.
- Confirm whether the primary location is only Villivakkam or whether Valasaravakkam, Chengalpattu, and Nungambakkam should be presented as owned branches, partner centres, or service locations.
- Provide full postal addresses, map links, and opening hours for each centre.
- Provide official Google Business Profile links for each location.
- Provide WhatsApp number, primary phone, alternate phone, and email that should be public.
- Provide therapist names, qualifications, registrations, and specialties for an E-E-A-T section.
- Provide real clinic photos with preferred captions and alt text.
- Provide top priority services to rank first, for example speech therapy, occupational therapy, ABA, early intervention, or autism support.
- Provide real parent testimonials with permission to publish.
- Provide clinic FAQs: pricing, session duration, first assessment process, reports, school coordination, home programmes, and waiting time.
- Confirm whether you want Tamil keyword targeting and Tamil page content.
- Confirm if online therapy, home visits, or only in-centre sessions are offered.
- Confirm insurance/payment details or remove payment claims if not applicable.
- Add Google Search Console and submit `https://aruratherapy.in/sitemap.xml`.
- Add/verify Google Analytics or another analytics tool.
- Set up local citations with the same NAP: business name, address, phone.

## Recommended Next SEO Steps

- Create dedicated location landing pages, starting with:
  - Completed: `/locations/villivakkam`
  - Completed: `/locations/anna-nagar`
  - Completed: `/locations/korattur`
  - Completed: `/locations/ambattur`
- Create deeper service-location pages only for top services, for example:
  - `/services/speech-therapy/chennai`
  - `/services/occupational-therapy/chennai`
  - `/services/aba-therapy/chennai`
- Add a real team/therapist section with credentials and experience.
- Add FAQ schema per high-intent service page.
- Add Review schema only after review content and policy compliance are confirmed.
- Add automatic sitemap generation so future content is never missed.
- Consider static pre-rendering for SEO-heavy routes.
