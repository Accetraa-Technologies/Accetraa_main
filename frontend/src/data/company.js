// ─── Hero stats strip ─────────────────────────────────────────────────────────
// Used by HeroSection.

export const heroStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Clients Served' },
  { value: '8+',  label: 'Industries' },
  { value: '5+',  label: 'Years Experience' },
];

// ─── Company overview metrics ─────────────────────────────────────────────────
// Used by CompanyOverview section on the Home page.

export const companyMetrics = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Enterprise Clients' },
  { value: '8+',  label: 'Industries Served' },
  { value: '5+',  label: 'Years of Excellence' },
];

// ─── Company overview differentiators ────────────────────────────────────────
// Used by CompanyOverview section on the Home page.

export const companyDifferentiators = [
  {
    number: '01',
    title: 'We Build, Not Just Advise',
    body: 'Our engineers ship production code. Every engagement ends with working software, not a slide deck.',
  },
  {
    number: '02',
    title: 'Enterprise Architecture from Day One',
    body: 'Systems designed to handle 10x growth — security, scalability, and observability built in from the start.',
  },
  {
    number: '03',
    title: 'End-to-End Accountability',
    body: 'One partner from discovery through to production. No handoff chaos, no accountability gaps.',
  },
];

// ─── Full statistics section ──────────────────────────────────────────────────
// Used by StatisticsSection on the About page.

export const companyStats = [
  { value: '50+',  label: 'Projects Delivered',  description: 'Enterprise-grade systems shipped to production' },
  { value: '30+',  label: 'Clients Served',       description: 'Organisations that trust Accetraa to deliver' },
  { value: '8+',   label: 'Industries Supported', description: 'Verticals where we maintain deep domain expertise' },
  { value: '98%',  label: 'Client Retention',     description: 'Clients who return for subsequent engagements' },
  { value: '100%', label: 'On-Time Delivery',     description: 'Milestones delivered on or ahead of schedule' },
  { value: '5+',   label: 'Years of Excellence',  description: 'Building enterprise technology since 2019' },
];

// ─── Portfolio success metrics ────────────────────────────────────────────────
// Used by SuccessMetrics section on the Portfolio page.

export const portfolioMetrics = [
  { value: '50+', label: 'Projects Delivered',  sub: 'Enterprise-grade systems in production' },
  { value: '12+', label: 'Products Built',       sub: 'Proprietary platforms and SaaS products' },
  { value: '8+',  label: 'Industries Served',    sub: 'Deep domain expertise across verticals' },
  { value: '98%', label: 'Client Satisfaction',  sub: 'Measured across all closed engagements' },
];

// ─── Core values ──────────────────────────────────────────────────────────────
// Used by CoreValues section on the About page.
// `iconKey` maps to local SVG components defined in CoreValues.jsx.

export const coreValues = [
  {
    iconKey: 'innovation',
    title: 'Innovation',
    body: 'We continuously invest in emerging technologies and modern engineering practices to ensure our clients benefit from the best of what technology has to offer.',
  },
  {
    iconKey: 'integrity',
    title: 'Integrity',
    body: 'We operate with transparency and honesty at every stage. Our clients receive accurate progress reports, honest timelines, and candid technical assessments.',
  },
  {
    iconKey: 'clientSuccess',
    title: 'Client Success',
    body: "Every decision we make is evaluated through the lens of client outcomes. We are not successful unless our clients are. Their growth is our benchmark.",
  },
  {
    iconKey: 'collaboration',
    title: 'Collaboration',
    body: "Great software is built by teams that communicate clearly and respect each other's expertise. We embed ourselves in our clients' organisations as genuine partners.",
  },
  {
    iconKey: 'quality',
    title: 'Quality',
    body: 'We do not ship code that we are not proud of. Rigorous code reviews, automated testing, and architectural discipline are non-negotiable standards in every engagement.',
  },
  {
    iconKey: 'security',
    title: 'Security',
    body: 'Security is not an afterthought — it is designed into every system we build. We apply industry best practices and continuous threat modelling across all deliverables.',
  },
];

// ─── About page — Why Choose Us differentiators ───────────────────────────────
// Used by WhyChooseUs section on the About page (numbered layout).

export const aboutDifferentiators = [
  {
    number: '01',
    title: 'Experienced Engineering Team',
    body: 'Our engineers average over eight years of industry experience across enterprise, SaaS, and regulated industries. We bring seniority to every engagement, not just to the account management layer.',
    highlight: '8+ years average experience',
  },
  {
    number: '02',
    title: 'Modern Technology Stack',
    body: 'We work with proven, contemporary technologies — React, Node.js, Python, Kubernetes, AWS, Azure, and beyond. No legacy debt, no framework lock-in, no outdated practices introduced into your systems.',
    highlight: 'Cloud-native by default',
  },
  {
    number: '03',
    title: 'Scalable Solution Design',
    body: 'Every system we design accommodates at least 10x your current load. We engineer for growth from the first architecture review, preventing costly refactors as your business scales.',
    highlight: 'Designed for 10x growth',
  },
  {
    number: '04',
    title: 'Long-Term Partnership Model',
    body: 'We structure our engagements for sustained value — not one-off projects. Clients retain a dedicated team that understands their domain, their codebase, and their business context deeply over time.',
    highlight: 'Sustained, not transactional',
  },
];

// ─── Home page — Why Choose Us benefits ──────────────────────────────────────
// Used by WhyChooseUs section on the Home page (icon card layout).
// `iconKey` maps to local SVG components defined in that section file.

export const homeBenefits = [
  {
    iconKey: 'industry',
    title: 'Industry Expertise',
    body: 'Deep domain knowledge across FinTech, HealthTech, Logistics, and SaaS. We understand your sector before writing the first line of code.',
  },
  {
    iconKey: 'architecture',
    title: 'Scalable Architecture',
    body: 'Every system we build is designed for 10x growth from the start — distributed, observable, and cloud-native by default.',
  },
  {
    iconKey: 'engagement',
    title: 'Dedicated Engagement',
    body: 'Transparent communication, fixed points of contact, and weekly progress reviews. No black boxes, no surprises.',
  },
  {
    iconKey: 'security',
    title: 'Security by Default',
    body: 'Enterprise-grade security practices — OWASP compliance, threat modelling, and security reviews — are built into every delivery.',
  },
];

// ─── Company expertise list (About — CompanyIntro) ────────────────────────────

export const companyExpertise = [
  'Enterprise Product Engineering',
  'Cloud Architecture & DevOps',
  'AI & Intelligent Automation',
  'Data Engineering & Analytics',
  'Digital Transformation',
  'Managed Technology Services',
];
