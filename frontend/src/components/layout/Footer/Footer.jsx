import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, FOOTER_SERVICES, FOOTER_CONTACT, ROUTES } from '@/utils/constants';
import styles from './Footer.module.scss';

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1.5 4A1.5 1.5 0 013 2.5h10A1.5 1.5 0 0114.5 4v8A1.5 1.5 0 0113 13.5H3A1.5 1.5 0 011.5 12V4z" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M1.5 4.5l6.5 4.5 6.5-4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M5.5 2.5h-2A1 1 0 002.5 3.5v1c0 5.523 4.477 10 10 10h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1.5a1 1 0 00-1 .862l-.1.6a7.5 7.5 0 01-4.862-4.862l.6-.1A1 1 0 006.5 6V4.5a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.5A4.5 4.5 0 013.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6A4.5 4.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.25"/>
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.25"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="1.5" y="1.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.25"/>
    <path d="M5 7.5V13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
    <circle cx="5" cy="5.5" r="0.75" fill="currentColor"/>
    <path d="M8.5 13V10a1.5 1.5 0 013 0v3M8.5 7.5V13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">

      {/* Main grid */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>

            {/* Brand column */}
            <div className={styles.brand}>
              <Link to={ROUTES.HOME} className={styles.logo} aria-label="Accetraa – go to homepage">
                Accetraa
              </Link>
              <p className={styles.description}>
                Accelerating digital transformation for forward-thinking enterprises. We engineer
                products, platforms, and intelligent systems that create lasting competitive advantage.
              </p>
              <a
                href="https://linkedin.com/company/accetraa"
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accetraa on LinkedIn (opens in new tab)"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Company links */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <NavLink to={path} className={styles.footerLink}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linkList}>
                {FOOTER_SERVICES.map(({ label, path }) => (
                  <li key={label}>
                    <NavLink to={path} className={styles.footerLink}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.contactList}>
                <li>
                  <a href={`mailto:${FOOTER_CONTACT.email}`} className={styles.contactItem}>
                    <EmailIcon />
                    <span>{FOOTER_CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                    <PhoneIcon />
                    <span>{FOOTER_CONTACT.phone}</span>
                  </a>
                </li>
                <li>
                  <div className={styles.contactItem}>
                    <LocationIcon />
                    <span>{FOOTER_CONTACT.address}</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            &copy; {currentYear} Accetraa. All rights reserved.
          </p>
          <nav className={styles.legalLinks} aria-label="Legal">
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </nav>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
