import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { serviceDetails } from '@/data/services';
import styles from './ServiceDetails.module.scss';

const ChevronIcon = ({ open }) => (
  <svg
    width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
    className={`${styles.chevron} ${open ? styles['chevron--open'] : ''}`}
  >
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.checkIcon}>
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.12"/>
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceDetailCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const panelId = `detail-${service.id}`;
  const triggerId = `trigger-${service.id}`;

  return (
    <div className={`${styles.card} ${open ? styles['card--open'] : ''}`}>
      <button
        id={triggerId}
        type="button"
        className={styles.cardTrigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(v => !v)}
      >
        <div className={styles.cardHeader}>
          <span className={styles.category}>{service.category}</span>
          <h3 className={styles.cardTitle}>{service.title}</h3>
        </div>
        <span className={styles.toggleWrap}>
          <ChevronIcon open={open} />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`${styles.panelWrap} ${open ? styles['panelWrap--open'] : ''}`}
      >
        <div className={styles.panel}>
          <p className={styles.overview}>{service.overview}</p>

          <div className={styles.detailGrid}>
            <div className={styles.detailBlock}>
              <h4 className={styles.detailHeading}>Key Benefits</h4>
              <ul className={styles.benefitsList}>
                {service.benefits.map((b, i) => (
                  <li key={i} className={styles.benefit}>
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.detailBlock}>
              <h4 className={styles.detailHeading}>Business Value</h4>
              <p className={styles.businessValue}>{service.businessValue}</p>

              <h4 className={`${styles.detailHeading} ${styles['detailHeading--mt']}`}>Technologies Used</h4>
              <div className={styles.techTags}>
                {service.technologies.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetails = () => (
  <section className={styles.section} aria-label="Service details">
    <div className="container">
      <SectionHeader
        eyebrow="Service Details"
        title="Depth behind every service we offer"
        subtitle="Expand any service below to explore the full scope — what we do, what you gain, and the technologies we use."
        align="center"
        className={styles.header}
      />

      <div className={styles.list}>
        {serviceDetails.map(service => (
          <ServiceDetailCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceDetails;
