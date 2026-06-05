import SectionHeader from '@/components/shared/SectionHeader';
import { investorOverview } from '@/data/investors';
import styles from './InvestorOverview.module.scss';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.checkIcon}>
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InvestorOverview = () => (
  <section className={styles.section} aria-label="Company overview for investors">
    <div className="container">
      <div className={styles.layout}>

        {/* Left — mission, vision, opportunity */}
        <div className={styles.left}>
          <SectionHeader
            eyebrow="Why Accetraa"
            title="A technology company built for enduring enterprise value"
            subtitle="We combine senior engineering talent with a scalable delivery model to serve the enterprise clients who demand the highest standards — and who pay accordingly."
            align="left"
          />

          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>Mission</span>
              <p className={styles.pillarText}>{investorOverview.mission}</p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>Vision</span>
              <p className={styles.pillarText}>{investorOverview.vision}</p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>Market Opportunity</span>
              <p className={styles.pillarText}>{investorOverview.marketOpportunity}</p>
            </div>
          </div>
        </div>

        {/* Right — highlight stat cards */}
        <div className={styles.right}>
          <div className={styles.highlightGrid}>
            {investorOverview.highlights.map(({ value, label }) => (
              <div key={label} className={styles.highlightCard}>
                <CheckIcon />
                <span className={styles.highlightValue}>{value}</span>
                <span className={styles.highlightLabel}>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.trustNote}>
            <p className={styles.trustText}>
              Accetraa's consistent delivery record, high client retention, and growing proprietary
              product portfolio make it a compelling technology investment opportunity at an
              inflection point in its growth trajectory.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default InvestorOverview;
