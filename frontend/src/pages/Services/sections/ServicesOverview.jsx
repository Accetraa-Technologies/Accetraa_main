import SectionHeader from '@/components/shared/SectionHeader';
import { servicePillars } from '@/data/services';
import styles from './ServicesOverview.module.scss';

const ServicesOverview = () => (
  <section className={styles.section} aria-label="Services overview">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <SectionHeader
            eyebrow="What We Deliver"
            title="Technology services that move your business forward"
            subtitle="Accetraa provides software development, SaaS product engineering, AI solutions, and digital transformation services. Whether you need a new platform built from scratch, an existing system modernised, or strategic technology advice — we deliver with clarity and accountability."
            align="left"
          />
        </div>

        <div className={styles.right}>
          {servicePillars.map(({ number, title, body }) => (
            <div key={number} className={styles.pillar}>
              <span className={styles.pillarNumber}>{number}</span>
              <div>
                <h3 className={styles.pillarTitle}>{title}</h3>
                <p className={styles.pillarBody}>{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default ServicesOverview;
