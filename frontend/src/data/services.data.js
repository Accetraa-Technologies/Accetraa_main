// Dummy data — mirrors GET /api/v1/services/ API response shape (ServiceSerializer).
// Extra `category` field is not in the backend model; it drives the eyebrow label in ServicesGrid.
//
// TO SWITCH TO LIVE API: remove this file's usage from services/services.js and
// uncomment the axiosInstance call there.

export const SERVICES_DATA = [
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
