import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { investorHero } from '@/data/investors';
import styles from './InvestorHero.module.scss';

const InvestorHero = () => (
  <section className={styles.hero} aria-label="Investor overview">
    <div className="container">
      <div className={styles.inner}>

        <span className={styles.badge}>{investorHero.badge}</span>

        <h1 className={styles.heading}>{investorHero.heading}</h1>

        <p className={styles.description}>{investorHero.description}</p>

        <div className={styles.actions}>
          <Button as={Link} to={investorHero.primaryCTA.href} variant="accent" size="lg">
            {investorHero.primaryCTA.label}
          </Button>
          <Button as={Link} to={investorHero.secondaryCTA.href} variant="ghost" size="lg" className={styles.ghostLight}>
            {investorHero.secondaryCTA.label}
          </Button>
        </div>

      </div>
    </div>
  </section>
);

export default InvestorHero;
