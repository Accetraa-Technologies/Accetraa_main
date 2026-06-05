// ─── Service listing ──────────────────────────────────────────────────────────
// Shape mirrors GET /api/v1/services/ (ServiceSerializer).
// `category` is a frontend-only field used as an eyebrow label.

export const services = [
  {
    id: 1,
    name: 'Product Engineering',
    slug: 'product-engineering',
    short_description:
      'End-to-end software product development — from concept and UX design through architecture, development, and production deployment.',
    icon: null,
    sort_order: 1,
    category: 'Engineering',
  },
  {
    id: 2,
    name: 'Cloud Architecture & DevOps',
    slug: 'cloud-devops',
    short_description:
      'Cloud-native infrastructure design, migration, and platform operations across AWS, Azure, and GCP with full CI/CD automation.',
    icon: null,
    sort_order: 2,
    category: 'Infrastructure',
  },
  {
    id: 3,
    name: 'AI & Intelligent Automation',
    slug: 'ai-automation',
    short_description:
      'AI-driven automation, LLM integrations, intelligent document processing, and predictive analytics for enterprise workflows.',
    icon: null,
    sort_order: 3,
    category: 'AI / ML',
  },
  {
    id: 4,
    name: 'Data Engineering & Analytics',
    slug: 'data-engineering',
    short_description:
      'End-to-end data pipelines, governed warehouses, and analytics platforms that deliver actionable insight at any scale.',
    icon: null,
    sort_order: 4,
    category: 'Data',
  },
  {
    id: 5,
    name: 'Digital Transformation Consulting',
    slug: 'digital-transformation',
    short_description:
      'Structured transformation programmes that move enterprises from legacy systems to scalable digital platforms with measurable outcomes.',
    icon: null,
    sort_order: 5,
    category: 'Consulting',
  },
];

// ─── Service overview pillars ─────────────────────────────────────────────────
// Used by ServicesOverview section.

export const servicePillars = [
  {
    number: '01',
    title: 'End-to-End Engineering',
    body: 'From requirements to release — we own the full delivery lifecycle. Architecture, development, quality assurance, and production deployment under one roof.',
  },
  {
    number: '02',
    title: 'Technology Consulting',
    body: 'Strategic guidance on platform selection, system modernisation, and cloud migration. We challenge assumptions, validate approaches, and protect your investment.',
  },
  {
    number: '03',
    title: 'Digital Transformation',
    body: 'We help enterprises move from legacy systems to modern, scalable platforms — incrementally and safely, without disrupting ongoing operations.',
  },
  {
    number: '04',
    title: 'Enterprise Integration',
    body: 'API design, third-party integrations, data pipelines, and microservices architecture. We connect your systems and eliminate the silos that slow your business down.',
  },
];

// ─── Service detailed content ─────────────────────────────────────────────────
// Used by ServiceDetails section — expandable cards with benefits, value, tech.

export const serviceDetails = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    category: 'Engineering',
    overview:
      'We design and build enterprise-grade software products from the ground up. Our product engineering service covers the full lifecycle — from user story definition and UX design through backend architecture, frontend development, and production deployment. Every product we build is scalable, maintainable, and tested to enterprise standards.',
    benefits: [
      'Dedicated senior engineering team assigned to your product',
      'Agile delivery with two-week sprint cadence',
      'Architecture reviews at every major milestone',
      'Automated testing from day one',
      'Full source code ownership transferred at project end',
    ],
    businessValue:
      'Partnering with an experienced product engineering team allows you to access senior-level expertise without the overhead of building an in-house team from scratch — accelerating time-to-market while keeping costs predictable and risks manageable.',
    technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    category: 'Infrastructure',
    overview:
      'We design cloud-native infrastructure that is secure, observable, and cost-efficient. Our cloud and DevOps service includes migration planning, infrastructure-as-code implementation, CI/CD pipeline design, container orchestration, and ongoing platform operations. We work across AWS, Azure, and GCP.',
    benefits: [
      'Cloud migration with zero production downtime',
      'Infrastructure-as-code using Terraform and Pulumi',
      'Container orchestration with Kubernetes',
      'Cost optimisation reviews included',
      'Security hardening and compliance readiness',
    ],
    businessValue:
      'Moving to cloud-native infrastructure eliminates the cost and fragility of legacy on-premise systems. Organisations typically see significant improvements in deployment frequency, system reliability, and infrastructure cost efficiency — with full visibility and control at every layer.',
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Prometheus'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    category: 'AI / ML',
    overview:
      'We design and implement AI-driven systems that automate high-volume processes, surface insights from complex data, and augment human decision-making. From LLM integrations and intelligent document processing to predictive analytics and recommendation engines, our AI solutions are practical, explainable, and production-ready.',
    benefits: [
      'Process automation that eliminates manual, repetitive work',
      'LLM integration for enterprise use cases',
      'Explainable AI models that build stakeholder trust',
      'MLOps pipelines for reliable model deployment',
      'Ongoing model monitoring and retraining included',
    ],
    businessValue:
      'AI-driven automation eliminates high-volume manual work, reduces error rates, and frees teams to focus on higher-value activities. Well-designed automation workflows deliver measurable improvements in throughput and accuracy from the first deployment.',
    technologies: ['Python', 'PyTorch', 'LangChain', 'OpenAI API', 'Hugging Face', 'FastAPI', 'MLflow', 'AWS SageMaker'],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Analytics',
    category: 'Data',
    overview:
      'We build the data infrastructure that modern enterprises depend on — reliable pipelines, governed data warehouses, and analytics platforms that deliver actionable insight to every level of the organisation. From real-time event streaming to historical batch processing, we handle data at any scale.',
    benefits: [
      'End-to-end data pipeline design and implementation',
      'Real-time and batch processing capabilities',
      'Data governance and lineage frameworks',
      'Business intelligence dashboards and self-service analytics',
      'Data quality monitoring and alerting',
    ],
    businessValue:
      'Organisations that invest in modern data infrastructure with Accetraa gain the ability to make data-driven decisions at every level — reducing decision latency, uncovering new revenue opportunities, and eliminating costly data quality incidents.',
    technologies: ['Apache Spark', 'dbt', 'Airflow', 'Snowflake', 'BigQuery', 'Kafka', 'Power BI', 'Metabase'],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    category: 'Consulting',
    overview:
      'We help enterprises move from legacy systems and manual processes to modern, scalable digital platforms — safely, incrementally, and with measurable business outcomes at every stage. Our consulting service combines technical depth with strategic thinking to produce a transformation roadmap that is executable, not aspirational.',
    benefits: [
      'Current-state assessment with actionable gap analysis',
      'Phased transformation roadmap with business case',
      'Vendor selection and technology evaluation support',
      'Change management and stakeholder alignment',
      'Ongoing advisory retainer options available',
    ],
    businessValue:
      'Accetraa-led digital transformation programmes consistently deliver within-budget results because we challenge scope, validate assumptions, and prioritise outcomes that create measurable business value rather than technological novelty.',
    technologies: ['Cloud Platforms', 'API-First Architecture', 'Microservices', 'Modern SaaS', 'Data Strategy', 'Security Frameworks'],
  },
];

// ─── Why our services differentiators ────────────────────────────────────────
// Used by WhyOurServices section. `iconKey` maps to local icon components in that file.

export const serviceDifferentiators = [
  {
    iconKey: 'team',
    title: 'Senior-Only Engineering',
    body: 'Every engagement is staffed exclusively with senior engineers. No juniors learning on your project, no hidden ramp-up time.',
  },
  {
    iconKey: 'agile',
    title: 'Agile Without the Theatre',
    body: 'We practise genuine agile delivery — tight feedback loops, working software every sprint, and backlog discipline that keeps projects on track.',
  },
  {
    iconKey: 'security',
    title: 'Security by Design',
    body: 'Security is built into every architecture decision, code review, and deployment pipeline. Not added at the end as an afterthought.',
  },
  {
    iconKey: 'scale',
    title: 'Built to Scale',
    body: 'Every system we design accommodates your next phase of growth. Performance testing, capacity planning, and elastic architecture are standard.',
  },
  {
    iconKey: 'support',
    title: 'Dedicated Post-Launch Support',
    body: 'We do not disappear after go-live. Dedicated support teams, SLA commitments, and proactive monitoring are included in every engagement.',
  },
  {
    iconKey: 'transparency',
    title: 'Full Transparency',
    body: 'Weekly progress reports, open access to delivery metrics, honest risk escalation. You always know exactly where your project stands.',
  },
];
