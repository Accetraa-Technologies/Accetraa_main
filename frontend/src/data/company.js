// ─── Hero stats strip ─────────────────────────────────────────────────────────
// Used by HeroSection.

export const heroStats = [
  { value: 'UrSaloon',    label: 'Flagship Platform' },
  { value: 'Salon & Spa', label: 'Primary Market' },
  { value: 'AI-Powered',  label: 'Smart Automation' },
  { value: '2026',        label: 'Founded' },
];

// ─── Company overview metrics ─────────────────────────────────────────────────
// Used by CompanyOverview section on the Home page.

export const companyMetrics = [
  { value: '2026', label: 'Year Founded' },
  { value: '1',    label: 'Flagship SaaS Platform' },
  { value: '4',    label: 'Core Service Areas' },
  { value: 'Seed', label: 'Investment Stage' },
];

// ─── Company overview differentiators ────────────────────────────────────────
// Used by CompanyOverview section on the Home page.

export const companyDifferentiators = [
  {
    number: '01',
    title: 'Product-Led Growth',
    body: 'We build proprietary SaaS platforms — not just services. UrSaloon, our flagship platform, demonstrates our ability to design, build, and scale products that create lasting market value.',
  },
  {
    number: '02',
    title: 'Cloud-Native from the Ground Up',
    body: 'Every platform we build is designed for scale from day one — multi-tenant SaaS architecture, cloud-native infrastructure, and AI-enhanced features built in from the start.',
  },
  {
    number: '03',
    title: 'Focused Industry Expertise',
    body: 'We are purpose-built for beauty, wellness, and service industries — bringing deep domain knowledge that enables faster decisions, better product fit, and a stronger competitive position.',
  },
];

// ─── About page statistics section heading ────────────────────────────────────
// Used by StatisticsSection on the About page.

export const statsSection = {
  eyebrow: 'Where We Stand',
  title: 'A technology company built for the future',
  subtitle:
    'Accetraa was incorporated in 2026 with a clear mandate — to build scalable SaaS platforms and deliver AI-driven solutions for the beauty, wellness, and service industries.',
};

// ─── Company milestone stats ──────────────────────────────────────────────────
// Used by StatisticsSection on the About page.

export const companyStats = [
  { value: '2026', label: 'Year Founded',        description: 'Incorporated in Karnataka, India with a global product vision' },
  { value: 'SaaS', label: 'Business Model',      description: 'Subscription-based platform revenue — scalable and recurring' },
  { value: '1st',  label: 'Platform Launched',   description: 'UrSaloon — our flagship salon and spa management SaaS platform' },
  { value: 'AI',   label: 'Technology Core',     description: 'AI-enhanced features driving intelligent automation across products' },
  { value: '2029', label: 'Investment Roadmap',  description: 'Seed funding and international expansion planned by 2029' },
  { value: '100%', label: 'Product-Led',         description: 'Every service we offer is backed by proprietary platform capability' },
];

// ─── Portfolio success metrics ────────────────────────────────────────────────
// Used by SuccessMetrics section on the Portfolio page.

export const portfolioMetrics = [
  { value: '2026', label: 'Founded',              sub: 'Incorporated in Karnataka, India' },
  { value: '1',    label: 'SaaS Platform',        sub: 'UrSaloon — beauty and wellness management' },
  { value: '4',    label: 'Core Services',        sub: 'Software, SaaS, AI, and digital transformation' },
  { value: 'Seed', label: 'Investment Stage',     sub: 'Actively building towards our first funding round' },
];

// ─── Core values ──────────────────────────────────────────────────────────────
// Used by CoreValues section on the About page.
// `iconKey` maps to local SVG components defined in CoreValues.jsx.

export const coreValues = [
  {
    iconKey: 'innovation',
    title: 'Innovation',
    body: 'We continuously invest in emerging technologies and modern engineering practices to build platforms that stay ahead of industry needs — not just catch up to them.',
  },
  {
    iconKey: 'integrity',
    title: 'Integrity',
    body: 'We operate with transparency and honesty at every stage — with our clients, our investors, and our team. No inflated claims, no hidden trade-offs.',
  },
  {
    iconKey: 'clientSuccess',
    title: 'Client Success',
    body: 'Every product decision we make is evaluated through the lens of client outcomes. The businesses that use our platforms should grow because of them.',
  },
  {
    iconKey: 'collaboration',
    title: 'Collaboration',
    body: 'Great software is built by teams that communicate clearly and respect each other\'s expertise. We partner deeply with clients and embed ourselves in their success.',
  },
  {
    iconKey: 'quality',
    title: 'Quality',
    body: 'We do not ship software we are not proud of. Rigorous code reviews, automated testing, and architectural discipline are non-negotiable standards in every build.',
  },
  {
    iconKey: 'security',
    title: 'Security',
    body: 'Security is designed into every platform we build — from architecture decisions through deployment pipelines. It is never an afterthought.',
  },
];

// ─── Mission and Vision ───────────────────────────────────────────────────────
// Used by MissionVision section on the About page.

export const missionVision = {
  mission: {
    title: 'Delivering platforms that transform how service businesses operate',
    body: 'Our mission is to build innovative, scalable SaaS platforms that enable beauty, wellness, and service industry businesses to operate more efficiently, serve their customers better, and grow with confidence. We measure success not by lines of code delivered, but by the real impact our products create for every business that uses them.',
    pills: ['Product-first thinking', 'Measurable outcomes', 'Long-term platform value'],
  },
  vision: {
    title: 'To become a leading technology and SaaS company for beauty, wellness, and service industries worldwide',
    body: 'We envision a future where Accetraa-built platforms power millions of beauty and wellness businesses globally — from independent freelancers to multi-location salon chains. A company recognised not for its size, but for the quality of its products and the depth of its impact on the industries it serves.',
    pills: ['SaaS at global scale', 'Industry-defining platforms', 'Beauty & wellness tech leader'],
  },
};

// ─── About page — Why Choose Us differentiators ───────────────────────────────
// Used by WhyChooseUs section on the About page (numbered layout).

export const aboutDifferentiators = [
  {
    number: '01',
    title: 'SaaS-First Engineering Team',
    body: 'Our engineers are experienced in building multi-tenant SaaS platforms — not just project-based software. Every technical decision is made with scalability, maintainability, and long-term product value in mind.',
    highlight: 'Built for product scale',
  },
  {
    number: '02',
    title: 'Modern Technology Stack',
    body: 'We work with proven, contemporary technologies — React, Node.js, Python, Kubernetes, AWS, and beyond. Cloud-native by default, with AI capabilities built into the platform from the start.',
    highlight: 'Cloud-native by default',
  },
  {
    number: '03',
    title: 'Domain-Focused Product Design',
    body: 'We specialise in beauty, wellness, and service industries — which means our product decisions are grounded in deep domain knowledge. We understand the workflows, the customers, and the competitive landscape.',
    highlight: 'Deep domain knowledge',
  },
  {
    number: '04',
    title: 'Long-Term Partnership Model',
    body: 'We build lasting relationships with clients and partners — not one-off transactions. Our engagement model is designed for sustained growth, where every interaction deepens the value we deliver.',
    highlight: 'Growth-focused partnership',
  },
];

// ─── Home page — Why Choose Us benefits ──────────────────────────────────────
// Used by WhyChooseUs section on the Home page (icon card layout).
// `iconKey` maps to local SVG components defined in that section file.

export const homeBenefits = [
  {
    iconKey: 'industry',
    title: 'Industry Expertise',
    body: 'Deep domain knowledge in beauty, wellness, and service industries. We understand the workflows, the customer expectations, and the technology gaps our platforms need to close.',
  },
  {
    iconKey: 'architecture',
    title: 'Scalable Architecture',
    body: 'Every platform we build is cloud-native and multi-tenant by design — built to scale from a handful of clients to thousands without re-architecture.',
  },
  {
    iconKey: 'engagement',
    title: 'Dedicated Partnership',
    body: 'Transparent communication, clear product roadmaps, and responsive support. No black boxes — just honest collaboration at every stage of the journey.',
  },
  {
    iconKey: 'security',
    title: 'Security by Default',
    body: 'Enterprise-grade security practices — OWASP standards, secure-by-design architecture, and continuous vulnerability monitoring — built into every platform we deliver.',
  },
];

// ─── Company expertise list (About — CompanyIntro) ────────────────────────────

export const companyExpertise = [
  'SaaS Product Development',
  'Software Engineering',
  'AI & Intelligent Automation',
  'Digital Transformation',
  'Cloud Architecture & DevOps',
  'Enterprise Application Development',
];
