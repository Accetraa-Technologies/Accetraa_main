import SectionHeader from '@/components/shared/SectionHeader';
import { growthMetrics } from '@/data/investors';
import styles from './GrowthMetrics.module.scss';

const GrowthMetrics = () => (
  <section className={styles.section} aria-label="Growth metrics">
    <div className="container">
      <SectionHeader
        eyebrow="By the Numbers"
        title="Strong fundamentals. Consistent growth."
        subtitle="Every metric below reflects verified outcomes from real client engagements — not projections."
        align="center"
        theme="dark"
        className={styles.header}
      />

      <dl className={styles.grid}>
        {growthMetrics.map(({ value, label, description }) => (
          <div key={label} className={styles.metric}>
            <dt className={styles.value}>{value}</dt>
            <dd className={styles.label}>{label}</dd>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default GrowthMetrics;
