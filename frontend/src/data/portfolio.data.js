// Dummy data — mirrors GET /api/v1/portfolio/categories/ and GET /api/v1/portfolio/ response shapes.
// `thumbnail_url` is null and `images` is [] until media is uploaded via Django admin.
// `category` is a nested object (matching PortfolioCategorySerializer) so asString() extracts .name.
//
// TO SWITCH TO LIVE API: remove this file's usage from services/portfolio.js and
// uncomment the axiosInstance calls there.

export const PORTFOLIO_CATEGORIES = [
  { id: 1, name: 'Web Projects',       slug: 'web-projects',       sort_order: 1 },
  { id: 2, name: 'Mobile Apps',         slug: 'mobile-apps',         sort_order: 2 },
  { id: 3, name: 'Enterprise Software', slug: 'enterprise-software', sort_order: 3 },
  { id: 4, name: 'AI & Data',           slug: 'ai-data',             sort_order: 4 },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'UrSaloon — Salon Management Platform',
    slug: 'ursaloon',
    client_name: 'Accetraa Technologies',
    short_description:
      'A full-featured SaaS platform for salon and spa businesses covering bookings, staff management, billing, and customer loyalty.',
    description:
      "UrSaloon is Accetraa's proprietary salon management platform, built to handle the full operational complexity of single-location and multi-branch salon businesses. The platform integrates appointment scheduling, walk-in queue management, staff rostering, commission calculations, inventory tracking, and a customer loyalty engine into a single unified interface. Built on a React frontend with a Django REST API backend, deployed on AWS with full multi-tenancy support.",
    thumbnail_url: null,
    technologies: 'React, Django, PostgreSQL, Redis, AWS, Stripe',
    technologies_list: ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    project_url: null,
    is_featured: true,
    sort_order: 1,
    category: { id: 3, name: 'Enterprise Software', slug: 'enterprise-software', sort_order: 3 },
    images: [],
  },
  {
    id: 2,
    title: 'HRMS — Human Resource Management System',
    slug: 'hrms',
    client_name: 'Accetraa Technologies',
    short_description:
      'An enterprise HRMS covering employee lifecycle management, payroll processing, attendance tracking, and compliance reporting.',
    description:
      "Accetraa HRMS is a comprehensive human resource management solution designed for mid-to-large enterprises. The system handles the complete employee lifecycle from onboarding documentation through payroll, statutory compliance, and offboarding. Key modules include automated payroll with tax computation, biometric attendance integration, leave management with policy enforcement, performance review cycles, and HR analytics dashboards. Built for deployment on-premise or in private cloud environments.",
    thumbnail_url: null,
    technologies: 'React, Django, MySQL, Celery, Docker, AWS',
    technologies_list: ['React', 'Django', 'MySQL', 'Celery', 'Docker', 'AWS'],
    project_url: null,
    is_featured: true,
    sort_order: 2,
    category: { id: 3, name: 'Enterprise Software', slug: 'enterprise-software', sort_order: 3 },
    images: [],
  },
  {
    id: 3,
    title: 'E-Commerce Platform for Retail Chain',
    slug: 'ecommerce-retail-chain',
    client_name: null,
    short_description:
      'A scalable multi-vendor e-commerce platform with real-time inventory, order management, and personalised product recommendations.',
    description:
      "Developed a high-performance e-commerce platform for a regional retail chain expanding to online channels. The platform supports multi-vendor operations with centralised inventory management, real-time stock synchronisation across physical and digital stores, and an ML-powered recommendation engine. The system handles peak traffic of 50,000+ concurrent users and processes over 10,000 transactions daily. Integrated with the client's existing ERP system and payment gateways including Razorpay and PayU.",
    thumbnail_url: null,
    technologies: 'Next.js, Node.js, MongoDB, Redis, Elasticsearch, AWS, Razorpay',
    technologies_list: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS', 'Razorpay'],
    project_url: null,
    is_featured: true,
    sort_order: 3,
    category: { id: 1, name: 'Web Projects', slug: 'web-projects', sort_order: 1 },
    images: [],
  },
  {
    id: 4,
    title: 'Field Service Management App',
    slug: 'field-service-management',
    client_name: null,
    short_description:
      'A cross-platform mobile app for managing field technicians, job dispatch, real-time tracking, and digital job completion reports.',
    description:
      "Built a cross-platform mobile application for a facilities management company to digitise their field operations. The app enables real-time job assignment and dispatch to field engineers, GPS tracking, offline-capable job reporting with photo evidence, and digital customer signatures. The backend processes 2,000+ job completions per day across 8 cities. Integrated with the client's ERP for automatic billing and SLA reporting.",
    thumbnail_url: null,
    technologies: 'React Native, Django, PostgreSQL, WebSockets, Firebase, GCP',
    technologies_list: ['React Native', 'Django', 'PostgreSQL', 'WebSockets', 'Firebase', 'GCP'],
    project_url: null,
    is_featured: false,
    sort_order: 4,
    category: { id: 2, name: 'Mobile Apps', slug: 'mobile-apps', sort_order: 2 },
    images: [],
  },
  {
    id: 5,
    title: 'Document Intelligence Platform',
    slug: 'document-intelligence',
    client_name: null,
    short_description:
      'An AI platform that extracts, classifies, and validates structured data from unstructured business documents at scale.',
    description:
      "Designed and built an AI-driven document processing platform for a financial services company to automate the extraction and validation of data from invoices, purchase orders, contracts, and compliance documents. The platform uses a combination of OCR, layout analysis, and fine-tuned language models to achieve 97% extraction accuracy on a corpus of 200+ document templates. Processing throughput of 15,000 documents per day with full audit trail and human-in-the-loop escalation for edge cases.",
    thumbnail_url: null,
    technologies: 'Python, FastAPI, PyTorch, Hugging Face, Tesseract, PostgreSQL, AWS',
    technologies_list: ['Python', 'FastAPI', 'PyTorch', 'Hugging Face', 'Tesseract', 'PostgreSQL', 'AWS'],
    project_url: null,
    is_featured: false,
    sort_order: 5,
    category: { id: 4, name: 'AI & Data', slug: 'ai-data', sort_order: 4 },
    images: [],
  },
  {
    id: 6,
    title: 'Real-Time Logistics Analytics Dashboard',
    slug: 'realtime-analytics-dashboard',
    client_name: null,
    short_description:
      'A live operational intelligence dashboard processing millions of events per hour with sub-second latency for an enterprise logistics provider.',
    description:
      "Built a real-time operational intelligence platform for a logistics company managing fleet movements and warehouse operations across 12 locations. The system ingests telemetry, delivery events, and warehouse sensor data through a Kafka-based event stream, processes it with Apache Flink for real-time aggregations, and surfaces operational KPIs through a live dashboard. The platform handles 4 million events per hour and delivers p99 dashboard latency under 800ms.",
    thumbnail_url: null,
    technologies: 'React, Apache Kafka, Apache Flink, ClickHouse, Python, Kubernetes, AWS',
    technologies_list: ['React', 'Apache Kafka', 'Apache Flink', 'ClickHouse', 'Python', 'Kubernetes', 'AWS'],
    project_url: null,
    is_featured: false,
    sort_order: 6,
    category: { id: 4, name: 'AI & Data', slug: 'ai-data', sort_order: 4 },
    images: [],
  },
  {
    id: 7,
    title: 'Telemedicine & Patient Portal',
    slug: 'telemedicine-portal',
    client_name: null,
    short_description:
      'A compliant telemedicine platform enabling video consultations, e-prescriptions, and patient health record management across 80 clinics.',
    description:
      "Developed a telemedicine platform for a healthcare provider network enabling remote consultations across 80 clinics. The platform supports HD video consultations with encrypted recording, digital prescription generation with pharmacy integration, lab result sharing, appointment scheduling, and a comprehensive patient health timeline. Built with compliance for Indian healthcare data regulations and integrated with the ABDM health ID framework.",
    thumbnail_url: null,
    technologies: 'React, WebRTC, Django, PostgreSQL, Redis, AWS, Twilio',
    technologies_list: ['React', 'WebRTC', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Twilio'],
    project_url: null,
    is_featured: false,
    sort_order: 7,
    category: { id: 1, name: 'Web Projects', slug: 'web-projects', sort_order: 1 },
    images: [],
  },
  {
    id: 8,
    title: 'Supply Chain Visibility App',
    slug: 'supply-chain-visibility',
    client_name: null,
    short_description:
      'A mobile app giving suppliers, warehouse teams, and buyers real-time visibility into shipment status and inventory levels.',
    description:
      "Delivered a cross-platform supply chain visibility application for a manufacturing conglomerate to replace manual email and spreadsheet-based tracking. The app provides real-time shipment tracking, purchase order management, goods receipt and inspection workflows, and automated alerts for delays or exceptions. Integrated with 6 third-party logistics providers and the client's SAP ERP system. Reduced average purchase order cycle time by 35% in the first six months after go-live.",
    thumbnail_url: null,
    technologies: 'React Native, Node.js, PostgreSQL, AWS, SAP Integration Suite',
    technologies_list: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'SAP Integration Suite'],
    project_url: null,
    is_featured: false,
    sort_order: 8,
    category: { id: 2, name: 'Mobile Apps', slug: 'mobile-apps', sort_order: 2 },
    images: [],
  },
];
