import SectionHeader from '@/components/shared/SectionHeader';
import { companyMetrics, companyDifferentiators } from '@/data/company';
import styles from './CompanyOverview.module.scss';

const CompanyOverview = () => (
  <section className={styles.section} aria-label="About Accetraa">
    <div className="container">

      {/* Header + intro */}
      <div className={styles.top}>
        <SectionHeader
          eyebrow="Who We Are"
          title="Built for enterprise. Engineered for impact."
          subtitle="We are a technology partner — not a vendor. Accetraa combines senior engineering talent with strategic thinking to deliver platforms that genuinely move the needle."
          align="left"
        />
      </div>

      {/* Metrics */}
      <dl className={styles.metrics}>
        {companyMetrics.map(({ value, label }) => (
          <div key={label} className={styles.metric}>
            <dt className={styles.metricValue}>{value}</dt>
            <dd className={styles.metricLabel}>{label}</dd>
          </div>
        ))}
      </dl>

      {/* Differentiators */}
      <div className={styles.differentiators}>
        {companyDifferentiators.map(({ number, title, body }) => (
          <div key={number} className={styles.diff}>
            <span className={styles.diffNumber}>{number}</span>
            <div className={styles.diffContent}>
              <h3 className={styles.diffTitle}>{title}</h3>
              <p className={styles.diffBody}>{body}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default CompanyOverview;
