import SectionHeader from '@/components/shared/SectionHeader';
import { coreValues } from '@/data/company';
import styles from './CoreValues.module.scss';

const InnovationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 3v3M14 22v3M3 14H6M22 14h3M6.2 6.2l2.1 2.1M19.7 19.7l2.1 2.1M6.2 21.8l2.1-2.1M19.7 8.3l2.1-2.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.75"/>
  </svg>
);

const IntegrityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 3L4 7v8c0 5.5 4.5 10 10 13 5.5-3 10-7.5 10-13V7L14 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClientSuccessIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M5 22l4-4 4 4 4-6 4 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="5" width="22" height="17" rx="2" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M8 5V3M20 5V3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

const CollaborationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M3 24c0-4 3-6 7-6h8c4 0 7 2 7 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

const QualityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 3l2.8 5.7L23 9.8l-4.5 4.4 1.1 6.2L14 17.7 8.4 20.4l1.1-6.2L5 9.8l6.2-.9L14 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
);

const SecurityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="8" y="12" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M11 12V9a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <circle cx="14" cy="17" r="1.5" fill="currentColor"/>
  </svg>
);

const ICON_MAP = {
  innovation:    <InnovationIcon />,
  integrity:     <IntegrityIcon />,
  clientSuccess: <ClientSuccessIcon />,
  collaboration: <CollaborationIcon />,
  quality:       <QualityIcon />,
  security:      <SecurityIcon />,
};

const CoreValues = () => (
  <section className={styles.section} aria-label="Core values">
    <div className="container">
      <SectionHeader
        eyebrow="Our Values"
        title="The principles that shape everything we do"
        subtitle="These are not aspirational statements on a wall. They are the standards we hold ourselves to on every project, for every client, every day."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid} role="list">
        {coreValues.map(({ iconKey, title, body }) => (
          <div key={title} className={styles.card} role="listitem">
            <div className={styles.iconWrap} aria-hidden="true">{ICON_MAP[iconKey]}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
