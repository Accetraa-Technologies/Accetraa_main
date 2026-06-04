import { companyStats } from '@/data/company';
import styles from './StatisticsSection.module.scss';

const StatisticsSection = () => (
  <section className={styles.section} aria-label="Company statistics">
    <div className="container">
      <div className={styles.header}>
        <span className={styles.eyebrow}>By the Numbers</span>
        <h2 className={styles.title}>Consistent delivery, measurable results</h2>
        <p className={styles.subtitle}>
          These numbers reflect not what we aspire to, but what we have already delivered.
          Every metric is earned through client partnerships and verified outcomes.
        </p>
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
