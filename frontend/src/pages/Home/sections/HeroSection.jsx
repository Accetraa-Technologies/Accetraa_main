import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/utils/constants';
import { heroStats } from '@/data/company';
import styles from './HeroSection.module.scss';

const HeroSection = () => (
  <section className={styles.hero} aria-label="Welcome to Accetraa">
    <div className="container">
      <div className={styles.inner}>

        <span className={styles.eyebrow}>
          Software Engineering · SaaS · AI · Est. 2026
        </span>

        <h1 className={styles.headline}>
          Great Software<br />
          Doesn't Happen{' '}
          <span className={styles.accent}>by Accident.</span>
        </h1>

        <p className={styles.copy}>
          It takes clear thinking, strong engineering, and a genuine commitment to quality.
          Accetraa Technologies builds cloud-native SaaS platforms, AI-powered solutions,
          and custom enterprise software — for businesses that hold their technology
          to a higher standard.
        </p>

        <div className={styles.actions}>
          <Button as={Link} to={ROUTES.CONTACT} variant="accent" size="lg">
            Book a Consultation
          </Button>
          <Button as={Link} to={ROUTES.SERVICES} variant="ghost" size="lg" className={styles.ghostLight}>
            Explore Our Services →
          </Button>
        </div>

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
