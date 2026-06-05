export const ROUTES = {
  HOME:      '/',
  ABOUT:     '/about',
  SERVICES:  '/services',
  PORTFOLIO: '/portfolio',
  INVESTORS: '/investors',
  CONTACT:   '/contact',
  CAREERS:   '/careers',
};

export const NAV_LINKS = [
  { label: 'Home',      path: ROUTES.HOME },
  { label: 'About',     path: ROUTES.ABOUT },
  { label: 'Services',  path: ROUTES.SERVICES },
  { label: 'Investors', path: ROUTES.INVESTORS },
  { label: 'Careers',   path: ROUTES.CAREERS },
];

export const NAV_CTA = { label: 'Book Consultation', path: ROUTES.CONTACT };

export const FOOTER_NAV_LINKS = [
  { label: 'Home',      path: ROUTES.HOME },
  { label: 'About',     path: ROUTES.ABOUT },
  { label: 'Services',  path: ROUTES.SERVICES },
  { label: 'Investors', path: ROUTES.INVESTORS },
  { label: 'Careers',   path: ROUTES.CAREERS },
  { label: 'Contact',   path: ROUTES.CONTACT },
];

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
  address: 'Hubbali, Karnataka, India',
};

export const BREAKPOINTS = {
  SM:  480,
  MD:  768,
  LG:  1024,
  XL:  1280,
  XXL: 1440,
};
