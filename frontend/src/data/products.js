// Shape mirrors GET /api/v1/products/ (ProductSerializer).
// `badge`, `features`, and `url` are frontend-only fields.
// `thumbnail_url` is null until media is uploaded via Django admin.

export const products = [
  {
    id: 1,
    name: 'UrSaloon',
    slug: 'ursaloon',
    tagline: 'The all-in-one management platform for salons and spas.',
    short_description:
      'UrSaloon streamlines every aspect of salon and spa operations — from appointment scheduling and staff management to inventory, billing, and customer loyalty programmes.',
    thumbnail_url: null,
    is_featured: true,
    sort_order: 1,
    badge: 'Live',
    features: [
      'Online booking & appointment management',
      'Staff scheduling and commission tracking',
      'Inventory and product sales management',
      'Customer loyalty and membership programmes',
      'Business analytics and revenue reports',
    ],
    url: '#',
  },
  {
    id: 2,
    name: 'HRMS',
    slug: 'hrms',
    tagline: 'Enterprise-grade human resource management for growing organisations.',
    short_description:
      'A comprehensive HRMS covering the entire employee lifecycle — from onboarding and attendance tracking to payroll processing, performance reviews, and compliance reporting.',
    thumbnail_url: null,
    is_featured: true,
    sort_order: 2,
    badge: 'Live',
    features: [
      'Employee onboarding and profile management',
      'Attendance, leave, and shift management',
      'Payroll processing and payslip generation',
      'Performance review and goal tracking',
      'Compliance and statutory reporting',
    ],
    url: '#',
  },
];
