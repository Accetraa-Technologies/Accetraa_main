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
            title="Complete technology services for the modern enterprise"
            subtitle="Accetraa provides end-to-end technology services across the full software delivery lifecycle. Whether you need a new platform built from scratch, an existing system modernised, or strategic technology advice — our senior engineers and consultants deliver with rigour and accountability."
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
