import { companyStats, statsSection } from '@/data/company';
import styles from './StatisticsSection.module.scss';

const StatisticsSection = () => (
  <section className={styles.section} aria-label="Company milestones">
    <div className="container">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{statsSection.eyebrow}</span>
        <h2 className={styles.title}>{statsSection.title}</h2>
        <p className={styles.subtitle}>{statsSection.subtitle}</p>
      </div>

      <dl className={styles.grid}>
        {companyStats.map(({ value, label, description }) => (
          <div key={label} className={styles.stat}>
            <dt className={styles.statValue}>{value}</dt>
            <dd className={styles.statLabel}>{label}</dd>
            <p className={styles.statDescription}>{description}</p>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default StatisticsSection;
