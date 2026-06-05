import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/utils/constants';
import { heroStats } from '@/data/company';
import styles from './HeroSection.module.scss';

// UrSaloon dashboard mockup — pure CSS/JSX, no images
const HeroVisual = () => (
  <div className={styles.visual} aria-hidden="true">
    <div className={styles.mockCard}>
      <div className={styles.mockHeader}>
        <div className={styles.mockDots}>
          <span /><span /><span />
        </div>
        <span className={styles.mockCardTitle}>UrSaloon · Salon Dashboard</span>
      </div>

      <div className={styles.mockChart}>
        {[40, 65, 50, 88, 72, 91, 78].map((h, i) => (
          <div key={i} className={styles.mockBar} style={{ '--bar-h': `${h}%` }} />
        ))}
      </div>

      <div className={styles.mockMetrics}>
        {[
          { val: '324',   lbl: 'Bookings' },
          { val: '₹85K',  lbl: 'Revenue' },
          { val: '4.9★',  lbl: 'Rating' },
        ].map(({ val, lbl }) => (
          <div key={lbl} className={styles.mockMetric}>
            <span className={styles.mockMetricVal}>{val}</span>
            <span className={styles.mockMetricLbl}>{lbl}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.floatBadge1}>
      <span className={styles.floatDot} />
      Appointment Confirmed
    </div>
    <div className={styles.floatBadge2}>
      <span className={styles.floatArrow}>↑</span>
      40 New Clients This Week
    </div>
  </div>
);

const HeroSection = () => (
  <section className={styles.hero} aria-label="Welcome to Accetraa">
    <div className="container">
      <div className={styles.inner}>

        {/* Left — text content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Beauty & Wellness Technology — Est. 2026</span>

          <h1 className={styles.headline}>
            The Operating System<br />
            for Modern{' '}
            <span className={styles.accent}>Beauty &amp; Wellness</span>
          </h1>

          <p className={styles.copy}>
            UrSaloon by Accetraa is a complete cloud-based management platform for salons,
            spas, beauty parlours, and independent beauty professionals — with AI-powered
            scheduling, client management, and business analytics built in.
          </p>

          <div className={styles.actions}>
            <Button as={Link} to={ROUTES.CONTACT} variant="accent" size="lg">
              Get Started with UrSaloon
            </Button>
            <Button as={Link} to={ROUTES.SERVICES} variant="ghost" size="lg" className={styles.ghostLight}>
              Our Services →
            </Button>
          </div>
        </div>

        {/* Right — visual */}
        <HeroVisual />

      </div>
    </div>

    {/* Stats strip */}
    <div className={styles.statsWrap}>
      <div className="container">
        <dl className={styles.statsGrid}>
          {heroStats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statValue}>{value}</dt>
              <dd className={styles.statLabel}>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default HeroSection;
