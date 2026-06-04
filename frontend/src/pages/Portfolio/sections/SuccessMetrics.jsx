import { portfolioMetrics } from '@/data/company';
import styles from './SuccessMetrics.module.scss';

const SuccessMetrics = () => (
  <section className={styles.section} aria-label="Success metrics">
    <div className="container">
      <dl className={styles.grid}>
        {portfolioMetrics.map(({ value, label, sub }) => (
          <div key={label} className={styles.metric}>
            <dt className={styles.value}>{value}</dt>
            <dd className={styles.label}>{label}</dd>
            <p className={styles.sub}>{sub}</p>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default SuccessMetrics;
