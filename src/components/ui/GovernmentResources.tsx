const resources = [
  {
    id: 'mohfw',
    emoji: '🏥',
    name: 'Ministry of Health & Family Welfare',
    description: 'National health policies, child health programmes and family welfare initiatives (Government of India)',
    url: 'https://www.mohfw.gov.in/',
  },
  {
    id: 'nhm',
    emoji: '🩺',
    name: 'National Health Mission',
    description: 'Government programmes for maternal and child health, immunization and primary care',
    url: 'https://nhm.gov.in/',
  },
  {
    id: 'msje',
    emoji: '🏛️',
    name: 'Ministry of Social Justice & Empowerment',
    description: 'Parent ministry for disability rights, welfare schemes and empowerment programmes in India',
    url: 'https://socialjustice.gov.in/',
  },
  {
    id: 'depwd',
    emoji: '♿',
    name: 'Dept. of Empowerment of Persons with Disabilities (DEPwD)',
    description: 'Central government portal for disability rights, schemes, UDID services and benefits',
    url: 'https://depwd.gov.in/en/',
  },
  {
    id: 'udid',
    emoji: '🪪',
    name: 'UDID – Disability Certificate & Swavlamban Card',
    description: "Apply online for your child's official disability certificate and Unique Disability ID (UDID)",
    url: 'https://www.swavlambancard.gov.in/',
  },
  {
    id: 'rci',
    emoji: '📋',
    name: 'Rehabilitation Council of India (RCI)',
    description: 'Statutory body that certifies and regulates therapists and special educators in India',
    url: 'https://rehabcouncil.nic.in/',
  },
  {
    id: 'national-trust',
    emoji: '🤝',
    name: 'National Trust – Autism, CP & Disability Welfare',
    description: 'Legal guardianship, early intervention and welfare schemes for autism, cerebral palsy and multiple disabilities',
    url: 'https://nationaltrust.nic.in/',
  },
  {
    id: 'niepmd',
    emoji: '🏫',
    name: 'NIEPMD Chennai',
    description: 'National institute on East Coast Road, Chennai for persons with multiple disabilities (assessment, therapy, training)',
    url: 'https://niepmd.nic.in/',
  },
  {
    id: 'niepid',
    emoji: '🧠',
    name: 'NIEPID – Intellectual & Developmental Disabilities',
    description: 'National institute for intellectual disability, autism and developmental disability support (Secunderabad)',
    url: 'https://niepid.nic.in/',
  },
  {
    id: 'samagra',
    emoji: '🎓',
    name: 'Samagra Shiksha – Inclusive Education',
    description: 'Government scheme for inclusive education, aids/appliances and support for children with special needs',
    url: 'https://samagra.education.gov.in/inclusive.html',
  },
  {
    id: 'scholarships',
    emoji: '📚',
    name: 'National Scholarship Portal',
    description: 'Apply for central and state scholarships for students, including schemes for children with disabilities',
    url: 'https://scholarships.gov.in/',
  },
  {
    id: 'tn-scd',
    emoji: '🌐',
    name: 'TN Commissionerate for Differently Abled',
    description: 'Tamil Nadu welfare schemes, assistive devices, allowances and rehabilitation services for families',
    url: 'https://www.scd.tn.gov.in/',
  },
  {
    id: 'tn-dept',
    emoji: '📍',
    name: 'Tamil Nadu – Welfare of Differently Abled Dept.',
    description: 'Official Tamil Nadu government department profile, policies and welfare programme overview',
    url: 'https://www.tn.gov.in/dept_profile.php?dep_id=MzU=',
  },
];

const GovernmentResources = () => {
  return (
    <section className="bg-primary-50 py-16">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Useful Government Resources for Parents
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Official government schemes and portals to support your child's care and rights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition hover:border-primary-300 hover:shadow-md sm:flex-row sm:items-start"
            >
              <span className="text-3xl flex-shrink-0 leading-none" aria-hidden="true">
                {resource.emoji}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-neutral-900 text-sm sm:text-base leading-snug">
                  {resource.name}
                </p>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                  {resource.description}
                </p>
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full shrink-0 items-center justify-center gap-1 rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto sm:py-1.5"
                aria-label={`Visit ${resource.name} (opens in new tab)`}
              >
                Visit&nbsp;→
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentResources;
