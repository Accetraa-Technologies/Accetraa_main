import { FOOTER_CONTACT } from '@/utils/constants';
import styles from './LocationSection.module.scss';

const LocationSection = () => (
  <section className={styles.section} aria-label="Office location">
    <div className="container">
      <div className={styles.layout}>

        {/* Map placeholder — swap the .mapPlaceholder div for <iframe> or Google Maps component when ready */}
        <div className={styles.mapPlaceholder} aria-label="Office location map placeholder" role="img">
          <div className={styles.mapPin} aria-hidden="true">
            <PinIcon />
          </div>
          <p className={styles.mapLabel}>Hubbali, Karnataka, India</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FOOTER_CONTACT.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Open in Google Maps →
          </a>
        </div>

        {/* Office details */}
        <div className={styles.details}>
          <span className={styles.eyebrow}>Our Location</span>
          <h2 className={styles.title}>Visit our office</h2>

          <div className={styles.addressCard}>
            <div className={styles.addressRow}>
              <div className={styles.addressIcon} aria-hidden="true"><BuildingIcon /></div>
              <div>
                <span className={styles.addressLabel}>Registered Address</span>
                <address className={styles.addressText}>
                  Accetraa Technologies Pvt. Ltd.<br />
                  Hubbali, Karnataka 580029<br />
                  India
                </address>
              </div>
            </div>
          </div>

          <div className={styles.contactList}>
            <a href={`mailto:${FOOTER_CONTACT.email}`} className={styles.contactRow}>
              <div className={styles.contactIcon} aria-hidden="true"><EmailIcon /></div>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{FOOTER_CONTACT.email}</span>
              </div>
            </a>

            <a href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, '')}`} className={styles.contactRow}>
              <div className={styles.contactIcon} aria-hidden="true"><PhoneIcon /></div>
              <div>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>{FOOTER_CONTACT.phone}</span>
              </div>
            </a>

            <div className={styles.contactRow}>
              <div className={styles.contactIcon} aria-hidden="true"><ClockIcon /></div>
              <div>
                <span className={styles.contactLabel}>Business Hours</span>
                <span className={styles.contactValue}>Monday – Friday, 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function PinIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4C11.6 4 8 7.6 8 12c0 7 8 16 8 16s8-9 8-16c0-4.4-3.6-8-8-8z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
      <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="1.75"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 18V7l8-5 8 5v11H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 18v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 7l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M5 2h2.5l1 3.5L7 7a8 8 0 003 3l1.5-1.5L15 9.5V12A2 2 0 0113 14C7 14 4 7 4 4a2 2 0 011-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default LocationSection;
