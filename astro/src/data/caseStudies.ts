// ─────────────────────────────────────────────────────────────────────────
// Real client case studies, sourced from biztechcs.com/case-studies.
// Shared by the hub (case-studies.astro) and the detail route ([slug].astro).
// `cardDesc` feeds the hub grid; the rest powers the detail page.
// ─────────────────────────────────────────────────────────────────────────

export interface CaseStudy {
  slug: string
  client: string        // short display name on the cover
  clientFull: string    // full client name
  cats: string          // space-separated filter keys
  industry: string
  tag: string           // chip: "Industry · Capability"
  service: string       // what we delivered (hero meta)
  ic: string            // flaticon class (fi-rr-*)
  metric: string
  metricLabel: string
  title: string         // headline (hub card + detail)
  cardDesc: string      // short description on the hub card
  intro: string         // detail hero sub-headline
  overview: string      // about the client
  challenge: string     // the problem, full paragraph
  solution: { ic: string; title: string; desc: string }[]
  results: { metric: string; label: string }[]
  outcomes: string[]
  tech: string[]
  quote: { q: string; by: string; org: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'afghanistan-international-bank',
    client: 'AIB',
    clientFull: 'Afghanistan International Bank',
    cats: 'finance',
    industry: 'Finance',
    tag: 'Banking · Core Integration',
    service: 'Digital account opening & core-banking integration',
    ic: 'fi-rr-bank',
    metric: '75%',
    metricLabel: 'gain in efficiency',
    title: 'Digitalizing account opening for Afghanistan International Bank.',
    cardDesc: 'Replaced ten paper forms and repeat branch visits with a digital flow wired into core banking — 50% faster processing, 80% fewer branch visits and 65% better data accuracy.',
    intro: 'We replaced a manual, multi-visit account-opening process with a fully digital flow wired into the bank\'s core platform — halving processing time and cutting branch visits by 80%.',
    overview: 'Afghanistan International Bank is one of the country\'s leading financial institutions, serving retail and corporate customers. To stay competitive in a digital-first banking landscape, the bank set out to modernize how new customers open accounts.',
    challenge: 'Account opening was entirely manual. Customers had to visit a branch multiple times and complete more than ten separate forms, while staff verified every document and keyed in data by hand — a process highly prone to error. The result was slow approvals, KYC compliance friction, frustrated customers and a high rate of abandoned applications.',
    solution: [
      { ic: 'fi-rr-form', title: 'Digital account opening', desc: 'A fully online application that removes manual data entry and guides customers step by step.' },
      { ic: 'fi-rr-cloud-upload', title: 'Remote KYC & documents', desc: 'Customers upload identity and KYC documents online — no repeat branch visits.' },
      { ic: 'fi-rr-link', title: 'Core-banking integration', desc: 'Real-time, two-way data flow between the new flow and the bank\'s core systems.' },
      { ic: 'fi-rr-workflow', title: 'Automated approvals', desc: 'Applications move across departments on defined business logic, not manual hand-offs.' },
      { ic: 'fi-rr-shield-check', title: 'Security & compliance', desc: 'Encryption and regulatory safeguards built into every step of the journey.' },
      { ic: 'fi-rr-smile', title: 'Simplified journey', desc: 'A friendly digital experience that reduces drop-off and speeds onboarding.' },
    ],
    results: [
      { metric: '75%', label: 'higher operational efficiency' },
      { metric: '↓50%', label: 'processing time' },
      { metric: '↓80%', label: 'branch visits' },
      { metric: '65%', label: 'better data accuracy' },
      { metric: '↓70%', label: 'approval turnaround' },
      { metric: '60%', label: 'overall efficiency boost' },
    ],
    outcomes: [
      'Eliminated 10+ paper forms and repeat branch visits.',
      'KYC verification and data entry no longer manual or error-prone.',
      'Faster, more reliable account approvals across departments.',
      'Fewer abandoned applications and a stronger acquisition funnel.',
    ],
    tech: ['Digital account opening', 'Core-banking integration', 'Automated KYC', 'Workflow automation', 'Encryption & compliance'],
    quote: { q: 'Account opening went from ten paper forms and several branch visits to a guided digital flow wired straight into our core banking platform.', by: 'Digital Transformation Lead', org: 'Banking sector' },
  },
  {
    slug: 'osho-chemical-field-ops-app',
    client: 'Osho Chemical',
    clientFull: 'Osho Chemical Industries Ltd',
    cats: 'manufacturing',
    industry: 'Manufacturing',
    tag: 'Agrochemicals · Mobile',
    service: 'Custom field-operations mobile app',
    ic: 'fi-rr-marker',
    metric: 'Live',
    metricLabel: 'field-team tracking',
    title: 'A field-ops mobile app that replaced a costly CRM.',
    cardDesc: 'Automated appointment scheduling, route optimization and geofenced check-ins for Africa\'s agrochemical leader — cutting CRM licence costs and lifting field productivity.',
    intro: 'For one of Africa\'s leading agrochemical companies, we built a custom mobile app that automated field scheduling, optimized routes and tracked teams in real time — while cutting CRM licence costs.',
    overview: 'Osho Chemical Industries Ltd is a prominent provider of agrochemical and industrial solutions across Africa, supporting the agricultural sector with field-based sales and service teams.',
    challenge: 'Inefficient manual workflows held back field operations. Customer assignments were unoptimized, appointment scheduling was cumbersome and CRM licensing costs kept climbing. Field teams had no real-time view of their tasks or routes, which slowed customer responsiveness, while manual data entry undermined accuracy and made it hard to draw insight from field activity.',
    solution: [
      { ic: 'fi-rr-calendar-clock', title: 'Automated scheduling', desc: 'Appointment scheduling tied directly into customer-management workflows.' },
      { ic: 'fi-rr-route', title: 'Routes & geofencing', desc: 'Real-time tracking and location-based task assignment for every field rep.' },
      { ic: 'fi-rr-edit', title: 'Real-time data capture', desc: 'On-site capture that removes manual entry errors and keeps data clean.' },
      { ic: 'fi-rr-target', title: 'Opportunity tracking', desc: 'Automated opportunity tracking with approval workflows for timely follow-up.' },
      { ic: 'fi-rr-mobile', title: 'Mobile-first tasks', desc: 'Field teams get actionable operational insight in their pocket.' },
      { ic: 'fi-rr-coins', title: 'Lower CRM cost', desc: 'Streamlined operations that reduced expensive third-party CRM licensing.' },
    ],
    results: [
      { metric: 'Live', label: 'field-team tracking' },
      { metric: '↓ Cost', label: 'CRM licensing' },
      { metric: 'Geo', label: 'fenced check-ins' },
      { metric: 'Faster', label: 'customer response' },
    ],
    outcomes: [
      'Reduced CRM licensing costs through workflow automation.',
      'More efficient appointment scheduling and customer management.',
      'Higher field-team productivity with real-time tracking.',
      'Improved data accuracy and faster customer responsiveness.',
    ],
    tech: ['Custom mobile app', 'Geofencing', 'Route optimization', 'Real-time sync', 'Workflow automation'],
    quote: { q: 'Our field teams finally run on one app — scheduling, routes and check-ins — instead of an expensive CRM nobody fully used.', by: 'Field Operations Head', org: 'Agrochemicals' },
  },
  {
    slug: 'opsctrl-digital-transformation',
    client: 'OpsCTRL',
    clientFull: 'OpsCTRL',
    cats: 'manufacturing',
    industry: 'Manufacturing',
    tag: 'Water Treatment · IoT',
    service: 'Cloud platform with SCADA integration',
    ic: 'fi-rr-cloud',
    metric: 'IoT',
    metricLabel: 'SCADA + cloud',
    title: 'A cloud + SCADA platform for global water-treatment ops.',
    cardDesc: 'A centralized AWS platform integrating SCADA for real-time monitoring, automated workflows and offline-ready mobile + web apps for plant teams.',
    intro: 'OpsCTRL needed to bring distributed water-treatment operations online. We built a centralized AWS platform with SCADA integration, automated workflows and offline-ready apps for plant teams.',
    overview: 'OpsCTRL is a leader in dynamic process modeling and process-control solutions for water treatment, looking to modernize global operations and customer experience through digital innovation.',
    challenge: 'OpsCTRL struggled to manage large datasets across distributed systems and to make timely decisions from fragmented data, while legacy operations resisted automation. Without a centralized system, data access, equipment management and customer onboarding were hard to coordinate — limiting scalability and oversight of treatment facilities.',
    solution: [
      { ic: 'fi-rr-browser', title: 'Centralized platform', desc: 'A unified web hub for data management and real-time accessibility across operations.' },
      { ic: 'fi-rr-dashboard', title: 'SCADA integration', desc: 'Real-time plant monitoring and automated decision-making for treatment processes.' },
      { ic: 'fi-rr-workflow', title: 'Automated workflows', desc: 'Streamlined customer onboarding, equipment assignment and inventory management.' },
      { ic: 'fi-rr-devices', title: 'Mobile & web apps', desc: 'Responsive dual-platform apps with offline functionality for field operations.' },
      { ic: 'fi-rr-cloud-upload', title: 'AWS infrastructure', desc: 'Scalable AWS-based storage and infrastructure built to grow with operations.' },
      { ic: 'fi-rr-shield-check', title: 'Security hardening', desc: 'Regular penetration testing and enhanced data-protection protocols.' },
    ],
    results: [
      { metric: 'Real-time', label: 'plant monitoring' },
      { metric: 'Offline', label: 'ready field apps' },
      { metric: 'AWS', label: 'cloud infrastructure' },
      { metric: '1', label: 'centralized platform' },
    ],
    outcomes: [
      'Streamlined data management and a better customer experience.',
      'Key operational processes automated end to end.',
      'Stronger decision-making and technological infrastructure.',
      'Set a new standard in water-treatment solutions.',
    ],
    tech: ['AWS Cloud', 'SCADA', 'Web & mobile apps', 'Offline-first', 'Penetration testing'],
    quote: { q: 'We finally have one platform that gives our plant teams real-time visibility — even where connectivity drops out.', by: 'Operations Director', org: 'Water treatment' },
  },
  {
    slug: 'dynamic-physical-therapy-platform',
    client: 'Dynamic PT',
    clientFull: 'Dynamic Physical Therapy',
    cats: 'healthcare',
    industry: 'Healthcare',
    tag: 'Healthcare · Platform',
    service: 'Unified practice-management platform',
    ic: 'fi-rr-stethoscope',
    metric: '1',
    metricLabel: 'unified system',
    title: 'One platform for scheduling, billing and claims.',
    cardDesc: 'A patchwork of disconnected tools rebuilt as a single system — patient portal, intake, therapist notes, role-based access and Waystar EDI 835 claims.',
    intro: 'A growing physical-therapy clinic was running on disconnected tools. We consolidated scheduling, intake, billing, documentation and insurance claims into a single integrated platform.',
    overview: 'Dynamic Physical Therapy is a clinic managing patient care across a growing caseload. As volume increased, staff were forced to juggle several separate tools to keep operations running.',
    challenge: 'The clinic ran on fragmented, disconnected systems. Staff constantly switched between platforms to schedule appointments, track insurance authorizations, write therapist notes and process billing. The patchwork led to missed appointments, delayed documentation, slow payment collection and communication bottlenecks — problems that escalated as the clinic grew.',
    solution: [
      { ic: 'fi-rr-apps', title: 'Unified platform', desc: 'Scheduling, intake, billing, insurance, documentation and claims in one system.' },
      { ic: 'fi-rr-calendar-clock', title: 'Automated front desk', desc: 'Auto-scheduling, reminders, waitlist management and streamlined intake.' },
      { ic: 'fi-rr-list-check', title: 'Insurance rules engine', desc: 'Tracks authorizations and visit limits, with automated patient collections.' },
      { ic: 'fi-rr-notebook', title: 'Integrated notes', desc: 'Therapist documentation linked to appointments and billing to speed up claims.' },
      { ic: 'fi-rr-receipt', title: 'Waystar EDI (835) claims', desc: 'Automated claims pulling, denial tracking and statement management.' },
      { ic: 'fi-rr-user', title: 'Patient portal', desc: 'Online forms, booking, payment visibility and bill payment for patients.' },
    ],
    results: [
      { metric: '1', label: 'unified system' },
      { metric: 'EDI 835', label: 'automated claims' },
      { metric: 'Self-serve', label: 'patient portal' },
      { metric: 'Role-based', label: 'access control' },
    ],
    outcomes: [
      'Eliminated manual administrative burden on front-desk staff.',
      'Real-time operational visibility for clinic leadership.',
      'Fewer claims-processing delays and missing records.',
      'Better patient experience through self-service.',
    ],
    tech: ['Waystar EDI (835)', 'Patient portal', 'Dashboards & analytics', 'Role-based access'],
    quote: { q: 'Scheduling, billing, notes and insurance claims used to live in separate tools. Now it\'s a single system the whole clinic trusts.', by: 'Operations Manager', org: 'Healthcare' },
  },
  {
    slug: 'orniversity-birding-app',
    client: 'Orniversity',
    clientFull: 'Orniversity',
    cats: 'education',
    industry: 'Education',
    tag: 'EdTech · Flutter',
    service: 'Cross-platform learning app',
    ic: 'fi-rr-feather',
    metric: '2',
    metricLabel: 'app stores, one codebase',
    title: 'An interactive birding app for Android and iOS.',
    cardDesc: 'A cross-platform Flutter + Drupal app for German bird enthusiasts — offline species library, location-based discovery, daily quizzes and in-app purchases.',
    intro: 'Orniversity wanted to bring bird-species learning to a mobile-first audience. We built a cross-platform Flutter app with a Drupal back end, offline access and location-based discovery.',
    overview: 'Orniversity is an educational platform dedicated to teaching people about bird species across Germany, aiming to make ornithological knowledge accessible to enthusiasts of every age and experience level.',
    challenge: 'Orniversity needed to deliver rich bird-species information to a mobile-first audience — and it had to work reliably outdoors, where connectivity is patchy. They also wanted interactive learning to keep users engaged and a way to monetize premium content to sustain their educational mission.',
    solution: [
      { ic: 'fi-rr-devices', title: 'Cross-platform Flutter', desc: 'One codebase delivering a consistent experience on Android and iOS.' },
      { ic: 'fi-rr-marker', title: 'Location discovery', desc: 'Users discover and learn about bird species native to their area.' },
      { ic: 'fi-rr-download', title: 'Offline access', desc: 'Full content access in remote, low-connectivity environments.' },
      { ic: 'fi-rr-star', title: 'Daily quizzes', desc: 'Interactive quizzes with gamification and rewards to drive engagement.' },
      { ic: 'fi-rr-shopping-cart', title: 'In-app purchases', desc: 'Premium educational content that opens a new revenue stream.' },
      { ic: 'fi-rr-database', title: 'Drupal back end', desc: 'Robust content management built to scale with the catalog.' },
    ],
    results: [
      { metric: '2', label: 'app stores, one codebase' },
      { metric: 'Offline', label: 'first content access' },
      { metric: 'GPS', label: 'location discovery' },
      { metric: 'IAP', label: 'premium content' },
    ],
    outcomes: [
      'Consistent experience across Android and iOS from one Flutter codebase.',
      'Reliable learning even in remote, low-connectivity areas.',
      'Higher engagement through daily quizzes and rewards.',
      'New revenue stream via in-app purchases.',
    ],
    tech: ['Flutter', 'Drupal', 'Android', 'iOS', 'In-app purchases'],
    quote: { q: 'A single Flutter codebase took our birding content to both app stores — and it still works when our users are deep in the field.', by: 'Product Owner', org: 'EdTech' },
  },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
