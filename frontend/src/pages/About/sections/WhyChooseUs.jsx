import SectionHeader from '@/components/shared/SectionHeader';
import { aboutDifferentiators } from '@/data/company';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => (
  <section className={styles.section} aria-label="Why choose Accetraa">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <SectionHeader
            eyebrow="Why Accetraa"
            title="Four reasons the best enterprises choose us"
            subtitle="We have earned our clients' trust through consistent delivery, honest communication, and technical rigour — not through sales pitches."
            align="left"
          />
        </div>

        <div className={styles.right}>
          {aboutDifferentiators.map(({ number, title, body, highlight }) => (
            <div key={number} className={styles.item}>
              <div className={styles.numberCol}>
                <span className={styles.number}>{number}</span>
                <div className={styles.numberLine} aria-hidden="true" />
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemBody}>{body}</p>
                <span className={styles.highlight}>{highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default WhyChooseUs;
