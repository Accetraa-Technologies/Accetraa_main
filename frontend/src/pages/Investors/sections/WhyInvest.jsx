import SectionHeader from '@/components/shared/SectionHeader';
import { whyInvest } from '@/data/investors';
import styles from './WhyInvest.module.scss';

const ModelIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M4 20l6-6 4 4 8-10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 10h4v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeliveryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 3L4 7v8c0 5.5 4.5 10 10 13 5.5-3 10-7.5 10-13V7L14 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClientsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="20" cy="9" r="3" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M2 24c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M20 17c2.8 0 5 2 5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

const LeadershipIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 3l2.8 5.7L23 9.8l-4.5 4.4 1.1 6.2L14 17.7 8.4 20.4l1.1-6.2L5 9.8l6.2-.9L14 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
);

const IndustryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="3" y="9" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M10 9V7a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
    <path d="M3 15h22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

const VisionIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M14 6C7 6 2 14 2 14s5 8 12 8 12-8 12-8S21 6 14 6z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M14 4v4M14 18v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const ICON_MAP = {
  model:      <ModelIcon />,
  delivery:   <DeliveryIcon />,
  clients:    <ClientsIcon />,
  leadership: <LeadershipIcon />,
  industry:   <IndustryIcon />,
  vision:     <VisionIcon />,
};

const WhyInvest = () => (
  <section className={styles.section} aria-label="Why invest in Accetraa">
    <div className="container">
      <SectionHeader
        eyebrow="Investment Case"
        title="Six reasons this is a compelling investment"
        subtitle="Accetraa combines strong delivery fundamentals with a clear roadmap for scalable, recurring revenue growth."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid}>
        {whyInvest.map(({ iconKey, title, body }) => (
          <div key={title} className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">{ICON_MAP[iconKey]}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyInvest;
