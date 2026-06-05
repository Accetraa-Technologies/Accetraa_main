import SectionHeader from '@/components/shared/SectionHeader';
import { cultureStats, cultureValues, photoPlaceholders } from '@/data/careers';
import styles from './LifeAtAccetraa.module.scss';

const PhotoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="22" height="17" rx="2" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M10 6l2-3h4l2 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LifeAtAccetraa = () => (
  <section className={styles.section} aria-label="Life at Accetraa">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <SectionHeader
            eyebrow="Life at Accetraa"
            title="A culture built around doing excellent work"
            subtitle="We are deliberate about how we work. Small teams, clear ownership, honest communication, and a bias towards action over process. This is what our day-to-day looks like."
            align="left"
          />

          <dl className={styles.stats}>
            {cultureStats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <dt className={styles.statValue}>{value}</dt>
                <dd className={styles.statLabel}>{label}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.values}>
            {cultureValues.map(v => (
              <div key={v} className={styles.valueItem}>
                <span className={styles.valueDot} aria-hidden="true" />
                <p className={styles.valueText}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoGrid}>
            {photoPlaceholders.map(({ label, aspect, src }) => (
              <div
                key={label}
                className={`${styles.photo} ${styles[`photo--${aspect}`]}`}
              >
                {src ? (
                  <img
                    src={src}
                    alt={label}
                    className={styles.photoImg}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.photoInner} aria-label={`${label} — photo coming soon`} role="img">
                    <PhotoIcon />
                    <span className={styles.photoLabel}>{label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default LifeAtAccetraa;
