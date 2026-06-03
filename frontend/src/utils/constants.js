export const ROUTES = {
  HOME:      '/',
  ABOUT:     '/about',
  SERVICES:  '/services',
  PORTFOLIO: '/portfolio',
  CONTACT:   '/contact',
  CAREERS:   '/careers',
};

export const NAV_LINKS = [
  { label: 'Home',      path: ROUTES.HOME },
  { label: 'About',     path: ROUTES.ABOUT },
  { label: 'Services',  path: ROUTES.SERVICES },
  { label: 'Portfolio', path: ROUTES.PORTFOLIO },
  { label: 'Contact',   path: ROUTES.CONTACT },
  { label: 'Careers',   path: ROUTES.CAREERS },
];

export const NAV_CTA = { label: 'Book Consultation', path: ROUTES.CONTACT };

export const FOOTER_SERVICES = [
  { label: 'Digital Transformation', path: ROUTES.SERVICES },
  { label: 'Product Development',    path: ROUTES.SERVICES },
  { label: 'Data & Analytics',       path: ROUTES.SERVICES },
  { label: 'Cloud Solutions',        path: ROUTES.SERVICES },
  { label: 'AI & Automation',        path: ROUTES.SERVICES },
];

export const FOOTER_CONTACT = {
  email:   'contact@accetraa.com',
  phone:   '+91 98765 43210',
  address: 'Mumbai, Maharashtra, India',
};

export const BREAKPOINTS = {
  SM:  480,
  MD:  768,
  LG:  1024,
  XL:  1280,
  XXL: 1440,
};
