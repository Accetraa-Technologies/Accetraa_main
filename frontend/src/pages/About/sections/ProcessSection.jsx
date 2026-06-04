import SectionHeader from '@/components/shared/SectionHeader';
import { deliveryProcess } from '@/data/process';
import styles from './ProcessSection.module.scss';

const ProcessSection = () => (
  <section className={styles.section} aria-label="How we work">
    <div className="container">
      <SectionHeader
        eyebrow="How We Work"
        title="A proven process built for enterprise delivery"
        subtitle="Our methodology removes uncertainty and ensures every stakeholder knows exactly where the project stands at every point in time."
        align="center"
        className={styles.header}
      />

      <ol className={styles.timeline} aria-label="Delivery process steps">
        {deliveryProcess.map(({ number, title, description, duration }, index) => (
          <li key={number} className={styles.step}>
            <div className={styles.stepLeft}>
              <div className={styles.stepNumber} aria-hidden="true">{number}</div>
              {index < deliveryProcess.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <span className={styles.duration}>{duration}</span>
              </div>
              <p className={styles.stepDescription}>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
