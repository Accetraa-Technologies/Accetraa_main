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
          title="A product-led technology company built for growth."
          subtitle="Founded in 2026, Accetraa Technologies builds SaaS platforms and delivers AI-driven software solutions for the beauty, wellness, and service industries — combining product engineering expertise with a clear long-term vision."
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
