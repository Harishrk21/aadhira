import { Helmet } from 'react-helmet-async';
import '../styles/thrive-booklet.css';

/**
 * THRIVE organisational booklet — design and content converted from Arura_THRIVE_Booklet.html
 */
const Thrive = () => {
  return (
    <>
      <Helmet>
        <title>THRIVE Child Development Initiative | Arura Integral Therapy Services</title>
        <meta
          name="description"
          content="Arura THRIVE Child Screening, Development & Educational Enhancement Project — organisational profile, founder, services, vision, mission, and district roadmap across Tamil Nadu."
        />
        <meta
          name="keywords"
          content="THRIVE child development, Arura Integral Therapy Services, child screening Tamil Nadu, Brain Gym mindfulness, IEP, Nagapattinam, Dr A K Aravind, Dunmark Institute"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="thrive-booklet">

{/* ══════════════ COVER ══════════════ */}
<div className="cover">
  <div className="cover-pattern"></div>
  <div className="cover-inner">

    <div className="cover-logos">
      <img src="/images/thrive/thrive-01.png" alt="Arura Integral Therapy Services" className="cover-logo arura" />
      <div className="cover-divider-v"></div>
      <img src="/images/thrive/thrive-02.jpg" alt="Dunmark Institute of Medical Sciences" className="cover-logo" />
    </div>

    <div className="cover-badge">Organisational Profile &amp; THRIVE Initiative · 2025–26</div>

    <h1>Building <span className="accent">THRIVE</span>ing Futures<br />for Every Child</h1>

    <p style={{fontFamily: 'Playfair Display,serif', fontSize: 'clamp(15px,2vw,19px)', color: 'rgba(255,255,255,0.78)', marginBottom: '14px', fontWeight: '400'}}>
      Arura Integral Therapy Services — Organisational Profile &amp;<br />the THRIVE Child Screening, Development &amp; Educational Enhancement Project
    </p>

    <div className="cover-rule"></div>

    <p className="cover-subtitle">
      Connecting Child, Family, School and Community — through early screening, Brain Gym®
      &amp; Mindfulness-based regulation, individualised education planning, and a replicable
      district-level model for child development, starting in Tamil Nadu.
    </p>

    <div className="cover-meta">
      <div className="cover-meta-item"><strong>50+</strong>Screening Programs</div>
      <div className="cover-meta-item"><strong>3</strong>Cities Served</div>
      <div className="cover-meta-item"><strong>7-Phase</strong>District Model</div>
      <div className="cover-meta-item"><strong>5-Stage</strong>THRIVE Pathway</div>
    </div>

    <div className="cover-profile">
      <img src="/images/thrive/thrive-03.jpg" alt="Dr. A. K. Aravind" className="cover-photo" />
      <div className="cover-profile-text">
        <div className="cover-name">Dr. A. K. Aravind</div>
        <div className="cover-role">
          Occupational Therapist · Author · Researcher · Educator<br />
          <strong style={{color: 'rgba(232,184,75,0.95)'}}>Founder &amp; Director</strong> — Arura Integral Therapy Services (Chennai · Nagapattinam)<br />
          <strong style={{color: 'rgba(232,184,75,0.95)'}}>CEO</strong> — Dunmark Institute of Medical Sciences
        </div>
        <div className="cover-links">
          <a href="https://aruratherapy.in" className="cover-link" target="_blank" rel="noopener noreferrer">aruratherapy.in</a>
          <a href="https://dunmarkedu.com" className="cover-link" target="_blank" rel="noopener noreferrer">dunmarkedu.com</a>
          <a href="https://arurapts.blogspot.com" className="cover-link" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
      </div>
    </div>

  </div>
  <div className="scroll-cue">Scroll to Explore ↓</div>
</div>

{/* ══════════════ STATS BAR ══════════════ */}
<div className="stats-bar">
  <div className="stats-inner">
    <div className="stat-item"><h2>50+</h2><p>Screening Programs</p></div>
    <div className="stat-item"><h2>6+</h2><p>Years Field Experience</p></div>
    <div className="stat-item"><h2>3</h2><p>Cities Served</p></div>
    <div className="stat-item"><h2>7</h2><p>Phase District Model</p></div>
  </div>
</div>

{/* ══════════════ ABOUT FOUNDER ══════════════ */}
<div className="section alt">
  <div className="container">
    <span className="sec-eyebrow">Meet the Founder</span>
    <div className="sec-title">Dr. A. K. Aravind</div>
    <div className="sec-rule"></div>

    <div className="founder-grid">
      <div className="founder-photo-wrap">
        <img src="/images/thrive/thrive-03.jpg" alt="Dr. A. K. Aravind" className="founder-photo" />
        <div className="founder-badge">OT · Author · Researcher</div>
      </div>
      <div>
        <div className="founder-name">Dr. A. K. Aravind</div>
        <div className="founder-credentials">Occupational Therapist &nbsp;|&nbsp; Clinical Educator &nbsp;|&nbsp; Author &nbsp;|&nbsp; Researcher &nbsp;|&nbsp; Healthcare Entrepreneur</div>

        <div className="founder-orgs">
          <div className="org-chip"><img src="/images/thrive/thrive-01.png" alt="Arura" /> Arura Integral Therapy Services</div>
          <div className="org-chip"><img src="/images/thrive/thrive-02.jpg" alt="Dunmark" /> Dunmark Institute of Medical Sciences</div>
        </div>

        <p className="founder-bio">
          Dr. Aravind is an Occupational Therapist, Clinical Educator, Author, Researcher, and Healthcare Entrepreneur whose work focuses on advancing child development, rehabilitation sciences, allied healthcare education, and inclusive learning systems across India. He is the Founder and Director of Arura Integral Therapy Services and CEO of Dunmark Institute of Medical Sciences.
        </p>
        <p className="founder-bio">
          Over the years, Dr. Aravind has worked extensively in paediatric rehabilitation, neurodevelopmental disorders, sensory integration, learning disabilities, behavioural intervention, educational screening, and community-based healthcare development. He is also the author of <em>General Protocol in Paediatric Occupational Therapy</em> (Amazon India). A native of Nagapattinam, he treats district-level child development not merely as a project location but as a personal responsibility — bringing world-class therapy to rural children.
        </p>

        <div className="expertise-grid">
          <div className="expertise-item">Occupational Therapy</div>
          <div className="expertise-item">Paediatric Rehabilitation</div>
          <div className="expertise-item">Sensory Integration Therapy</div>
          <div className="expertise-item">Neurodevelopmental Disorders</div>
          <div className="expertise-item">ASD &amp; ADHD</div>
          <div className="expertise-item">Learning Disability Assessment</div>
          <div className="expertise-item">Behavioural Intervention</div>
          <div className="expertise-item">Brain Gym® &amp; Mindfulness</div>
          <div className="expertise-item">IEP Design &amp; Implementation</div>
          <div className="expertise-item">Community Health Initiatives</div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ QUOTE ══════════════ */}
<div className="quote-banner">
  <p className="quote-text">"Advancing Child Development, Rehabilitation Sciences, Healthcare Education, and Social Impact Through Innovation, Research, and Service."</p>
  <span className="quote-attr">— Dr. A. K. Aravind</span>
</div>

{/* ══════════════ ABOUT ORGANISATION ══════════════ */}
<div className="section">
  <div className="container">
    <span className="sec-eyebrow">About the Organisation</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>More Than Therapy — An Integrated System</div>
    <div className="sec-rule"></div>
    <p className="sec-intro">Arura Integral Therapy Services is a multidisciplinary child development and rehabilitation organisation, built on a simple conviction: every child deserves to be seen early, understood individually, and supported consistently — regardless of where they happen to be born.</p>

    <div className="about-grid">
      <div className="about-card">
        <div className="icon">🎯</div>
        <h3>Vision</h3>
        <p>Establish a sustainable, scalable district-level child development system starting from Nagapattinam and expanding across all of Tamil Nadu.</p>
      </div>
      <div className="about-card">
        <div className="icon">🤝</div>
        <h3>Approach</h3>
        <p>Not just therapy — we build integrated systems connecting child, family, school, and community for holistic developmental outcomes.</p>
      </div>
      <div className="about-card">
        <div className="icon">📚</div>
        <h3>Education</h3>
        <p>Through Dunmark Institute, we train therapists, educators, and allied health professionals in developmental care and neurorehabilitation.</p>
      </div>
      <div className="about-card">
        <div className="icon">🌱</div>
        <h3>Roots</h3>
        <p>Nagapattinam is not just a project location — it is a personal responsibility. Bringing world-class therapy to rural children.</p>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ SERVICES ══════════════ */}
<div className="section alt">
  <div className="container">
    <span className="sec-eyebrow">What We Offer</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>Our Key Service Areas</div>
    <div className="sec-rule"></div>
    <div className="services-grid">
      <div className="service-chip"><span className="s-icon">🖐️</span><span className="s-label">Occupational Therapy</span></div>
      <div className="service-chip"><span className="s-icon">🗣️</span><span className="s-label">Speech &amp; Language Therapy</span></div>
      <div className="service-chip"><span className="s-icon">🧩</span><span className="s-label">Sensory Integration Therapy</span></div>
      <div className="service-chip"><span className="s-icon">💡</span><span className="s-label">Behaviour Therapy</span></div>
      <div className="service-chip"><span className="s-icon">📖</span><span className="s-label">Special Education</span></div>
      <div className="service-chip"><span className="s-icon">📊</span><span className="s-label">Developmental Assessments</span></div>
      <div className="service-chip"><span className="s-icon">🏫</span><span className="s-label">School Screening Programs</span></div>
      <div className="service-chip"><span className="s-icon">👨‍👩‍👧</span><span className="s-label">Parent Training Modules</span></div>
      <div className="service-chip"><span className="s-icon">👩‍🏫</span><span className="s-label">Teacher Training Programs</span></div>
      <div className="service-chip"><span className="s-icon">🧘</span><span className="s-label">Brain Gym® &amp; Mindfulness</span></div>
      <div className="service-chip"><span className="s-icon">🛠️</span><span className="s-label">Life Skills Training</span></div>
      <div className="service-chip"><span className="s-icon">💼</span><span className="s-label">Vocational Pathways</span></div>
    </div>
  </div>
</div>
{/* ══════════════ VISION & MISSION ══════════════ */}
<div className="section">
  <div className="container">
    <span className="sec-eyebrow">Foundation</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>Vision &amp; Mission</div>
    <div className="sec-rule"></div>

    <div className="vm-grid">
      <div className="vm-card vision">
        <span className="vm-card-icon">🔭</span>
        <h3>Our Vision</h3>
        <p style={{fontSize: '14px', color: 'var(--muted)', lineHeight: '1.8', fontStyle: 'italic'}}>
          Building an India where every child is identified early, understood individually, supported scientifically, and given the opportunity to thrive — without disturbing or duplicating a single part of the existing education and healthcare system.
        </p>
      </div>
      <div className="vm-card mission">
        <span className="vm-card-icon">🎯</span>
        <h3>Our Mission</h3>
        <ul className="vm-list">
          <li>Screen every child for developmental, learning, sensory, emotional and behavioural needs at the earliest possible stage</li>
          <li>Introduce Brain Gym® and Mindfulness-based regulation as a structured add-on to school routines</li>
          <li>Design an IEP for every child who needs one, built around that child's specific profile</li>
          <li>Build a multidisciplinary therapy ecosystem connecting OT, Speech, Behaviour Therapy and Special Education</li>
          <li>Empower parents and teachers through structured training, coaching and awareness programs</li>
          <li>Track every child's progress through a digital monitoring system</li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ GALLERY: INAUGURATION & LAUNCH ══════════════ */}
<div className="section alt">
  <div className="container">
    <span className="sec-eyebrow">Project Launch — On the Ground</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>Light Child's Development Project</div>
    <div className="sec-rule"></div>
    <p className="sec-intro gallery-intro">The Light Child's Development Project was inaugurated at the Arura Integral Therapy Services centre — bringing together community leaders, multidisciplinary therapists, and families to launch a sustained programme of screening, therapy and school-based support.</p>

    <div className="gallery-grid">
      <div className="gallery-item large">
        <img src="/images/thrive/thrive-04.jpg" alt="Inauguration ceremony at Arura Integral Therapy Services" />
        <div className="caption">Inauguration Ceremony at Arura Integral Therapy Services<span className="cap-sub">Light Child's Development Project</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-05.jpg" alt="Traditional lamp-lighting by Dr. A.K. Aravind" />
        <div className="caption">Traditional Lamp-Lighting<span className="cap-sub">Dr. A.K. Aravind with Community Leaders</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-06.jpg" alt="Felicitation of the founder" />
        <div className="caption">Felicitation of the Founder<span className="cap-sub">Community Recognition</span></div>
      </div>
      <div className="gallery-item large">
        <img src="/images/thrive/thrive-07.jpg" alt="Outreach camp team and families" />
        <div className="caption">Community Outreach Camp<span className="cap-sub">Therapists, Children &amp; Families Together</span></div>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ GALLERY: SCHOOL SCREENING ══════════════ */}
<div className="section">
  <div className="container">
    <span className="sec-eyebrow">Stage 1 in Action</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>Inside the Classroom — Early Screening</div>
    <div className="sec-rule"></div>
    <p className="sec-intro gallery-intro">Screening is taken directly to where children already are. Entire classrooms are assessed in a single visit using simplified, visual developmental checklists — no child has to travel, and no class is disrupted for long.</p>

    <div className="gallery-grid">
      <div className="gallery-item large">
        <img src="/images/thrive/thrive-08.jpg" alt="Full classroom developmental screening session" />
        <div className="caption">Whole-Classroom Screening Session<span className="cap-sub">Government School, Rural Outreach</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-09.jpg" alt="Children completing screening worksheets" />
        <div className="caption">Visual Checklist Screening<span className="cap-sub">Motor, Cognitive &amp; Social-Emotional Domains</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-10.jpg" alt="One-on-one functional assessment at school" />
        <div className="caption">One-on-One Functional Assessment<span className="cap-sub">Individualised Follow-Up</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-11.jpg" alt="Digital record-keeping during assessment" />
        <div className="caption">Digital Progress Recording<span className="cap-sub">Building Each Child's Developmental Profile</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-12.jpg" alt="Multidisciplinary team conducting clinical assessment" />
        <div className="caption">Multidisciplinary Assessment Team<span className="cap-sub">Functional Evaluation In Progress</span></div>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ GALLERY: COMMUNITY & SCHOOL PARTNERSHIP ══════════════ */}
<div className="section alt">
  <div className="container">
    <span className="sec-eyebrow">Building the Ecosystem</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>Schools, Families &amp; Community Partners</div>
    <div className="sec-rule"></div>
    <p className="sec-intro gallery-intro">Lasting change needs more than a single visit. Our team works alongside head teachers, parents and local leaders — coordinating school inclusion, celebrating children's progress, and keeping every stakeholder aligned.</p>

    <div className="gallery-grid">
      <div className="gallery-item">
        <img src="/images/thrive/thrive-13.jpg" alt="Coordination meeting with school staff" />
        <div className="caption">Teacher &amp; School Coordination Meeting<span className="cap-sub">Aligning Classroom Support Plans</span></div>
      </div>
      <div className="gallery-item large">
        <img src="/images/thrive/thrive-14.jpg" alt="School felicitation event with students and staff" />
        <div className="caption">School Felicitation Event<span className="cap-sub">Recognising Student &amp; Staff Participation</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-15.jpg" alt="Child receiving recognition outdoors" />
        <div className="caption">Child Recognition Ceremony<span className="cap-sub">Light Child's Development Programme</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-16.jpg" alt="Brain Gym Lazy 8s demonstration outdoors" />
        <div className="caption">Brain Gym® "Lazy 8s" Demonstration<span className="cap-sub">Cross-Lateral Movement for Focus</span></div>
      </div>
      <div className="gallery-item">
        <img src="/images/thrive/thrive-17.jpg" alt="Children with Chess Battle certificates" />
        <div className="caption">Chess Battle Recognition<span className="cap-sub">Cognitive &amp; Life-Skill Enrichment</span></div>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ ROADMAP ══════════════ */}
<div className="section">
  <div className="container">
    <span className="sec-eyebrow">Implementation</span>
    <div className="sec-title" style={{color: 'var(--navy)'}}>Phases &amp; Roadmap</div>
    <div className="sec-rule"></div>

    <div className="roadmap">
      <div className="phase">
        <div className="phase-num-wrap"><div className="phase-circle">1</div><div className="phase-line"></div></div>
        <div className="phase-body"><h4>Phase 1 — Pilot</h4><p>Pilot screening and add-on sessions in a select group of schools and Anganwadis in Chennai and Nagapattinam. Build evidence base, refine tools, document outcomes.</p></div>
      </div>
      <div className="phase">
        <div className="phase-num-wrap"><div className="phase-circle">2</div><div className="phase-line"></div></div>
        <div className="phase-body"><h4>Phase 2 — Expansion</h4><p>Scale to a wider network of schools with full teacher orientation, IEP rollout and structured parent coaching. Establish the digital tracking system.</p></div>
      </div>
      <div className="phase">
        <div className="phase-num-wrap"><div className="phase-circle">3</div><div className="phase-line"></div></div>
        <div className="phase-body"><h4>Phase 3 — District Coverage</h4><p>District-level coverage with digital progress tracking, structured monitoring cycles and coordinated multidisciplinary therapy referral pathways.</p></div>
      </div>
      <div className="phase">
        <div className="phase-num-wrap"><div className="phase-circle">4</div></div>
        <div className="phase-body"><h4>Phase 4 — Regional Scale-Up</h4><p>Wider regional and state-level scale-up in coordination with interested institutions, departments and healthcare partners, building a replicable national model.</p></div>
      </div>
    </div>
  </div>
</div>

{/* ══════════════ CALL TO ACTION ══════════════ */}
<div className="quote-banner" style={{padding: '80px 40px'}}>
  <p className="quote-text" style={{marginBottom: '30px'}}>"Let no child be left unseen, unsupported, or unprepared.<br />A child transformed becomes a society transformed."</p>
  <span className="quote-attr">— Dr. A. K. Aravind</span>
  <p style={{marginTop: '30px', fontSize: '15px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.8'}}>
    We invite district administrations, schools, NGOs, and CSR partners to join hands in creating a replicable model of child development excellence — and we welcome the opportunity to discuss pilot implementation or further collaboration.
  </p>
</div>

{/* ══════════════ FOOTER ══════════════ */}
<footer className="footer">
  <div className="footer-inner">
    <div className="footer-top">
      <div className="footer-col">
        <div className="footer-logo-row">
          <img src="/images/thrive/thrive-01.png" alt="Arura" className="footer-logo" />
          <img src="/images/thrive/thrive-02.jpg" alt="Dunmark" className="footer-logo" />
        </div>
        <p>Arura Integral Therapy Services — Multidisciplinary child development and rehabilitation organisation serving Chennai and Nagapattinam.</p>
        <p style={{marginTop: '10px'}}>Dunmark Institute of Medical Sciences — Dedicated to professional education, skill development and clinical training.</p>
      </div>
      <div className="footer-col">
        <h4>Contact &amp; Links</h4>
        <a href="https://aruratherapy.in" target="_blank" rel="noopener noreferrer">aruratherapy.in</a>
        <a href="https://dunmarkedu.com" target="_blank" rel="noopener noreferrer">dunmarkedu.com</a>
        <a href="https://arurapts.blogspot.com" target="_blank" rel="noopener noreferrer">arurapts.blogspot.com</a>
        <p style={{marginTop: '12px'}}>Chennai · Nagapattinam, Tamil Nadu</p>
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        <p>Occupational Therapy</p>
        <p>Speech &amp; Language Therapy</p>
        <p>Behaviour Therapy</p>
        <p>Special Education</p>
        <p>Brain Gym® &amp; Mindfulness</p>
        <p>IEP Design &amp; Implementation</p>
      </div>
    </div>

    <div className="footer-motto">"Advancing Child Development, Rehabilitation Sciences, Healthcare Education, and Social Impact Through Innovation, Research, and Service."</div>

    <div className="footer-bottom">
      <span>© 2025–26 Arura Integral Therapy Services · Dunmark Institute of Medical Sciences. All Rights Reserved.</span>
      <span>THRIVE Child Development Project</span>
    </div>
  </div>
</footer>


      </div>
    </>
  );
};

export default Thrive;
