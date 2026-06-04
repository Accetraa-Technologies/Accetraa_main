import SectionHeader from '@/components/shared/SectionHeader';
import { engagementProcess } from '@/data/process';
import styles from './EngagementProcess.module.scss';

const EngagementProcess = () => (
  <section className={styles.section} aria-label="Engagement process">
    <div className="container">
      <SectionHeader
        eyebrow="Engagement Process"
        title="How we deliver — every time"
        subtitle="Our process removes ambiguity and ensures every stakeholder has full visibility from the first call to the final deployment."
        align="center"
        theme="dark"
        className={styles.header}
      />

      <ol className={styles.grid} aria-label="Delivery steps">
        {engagementProcess.map(({ number, title, description, duration }, index) => (
          <li key={number} className={styles.step}>
            <div className={styles.stepTop}>
              <span className={styles.number}>{number}</span>
              {index < engagementProcess.length && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <span className={styles.duration}>{duration}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default EngagementProcess;
