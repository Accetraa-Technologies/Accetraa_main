import SectionHeader from '@/components/shared/SectionHeader';
import { portfolioCapabilities } from '@/data/portfolio';
import styles from './PortfolioOverview.module.scss';

const PortfolioOverview = () => (
  <section className={styles.section} aria-label="Portfolio overview">
    <div className="container">
      <div className={styles.layout}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow="Our Work"
            title="Products built. Projects delivered. Impact created."
            subtitle="Accetraa's portfolio represents years of focused enterprise engineering — each project a demonstration of what precision delivery looks like at scale."
            align="left"
          />
        </div>

        <div className={styles.right}>
          {portfolioCapabilities.map(({ title, body }) => (
            <div key={title} className={styles.capability}>
              <div className={styles.dot} aria-hidden="true" />
              <div>
                <h3 className={styles.capTitle}>{title}</h3>
                <p className={styles.capBody}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioOverview;
