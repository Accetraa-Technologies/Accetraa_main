import SectionHeader from '@/components/shared/SectionHeader';
import { investmentHighlights } from '@/data/investors';
import styles from './InvestmentHighlights.module.scss';

const TAG_COLORS = {
  Foundation:  'teal',
  Milestone:   'blue',
  Growth:      'green',
  Product:     'orange',
  Partnership: 'purple',
  Roadmap:     'primary',
};

const InvestmentHighlights = () => (
  <section className={styles.section} aria-label="Investment highlights and milestones">
    <div className="container">
      <SectionHeader
        eyebrow="Growth Story"
        title="From founding to investment-ready"
        subtitle="A transparent view of Accetraa's journey — key milestones, strategic decisions, and the roadmap ahead."
        align="center"
        theme="dark"
        className={styles.header}
      />

      <ol className={styles.timeline} aria-label="Company milestones">
        {investmentHighlights.map(({ year, title, description, tag }, index) => (
          <li key={year} className={styles.item}>
            <div className={styles.spine} aria-hidden="true">
              <div className={styles.dot} />
              {index < investmentHighlights.length - 1 && (
                <div className={styles.line} />
              )}
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.year}>{year}</span>
                <span className={`${styles.tag} ${styles[`tag--${TAG_COLORS[tag] || 'blue'}`]}`}>
                  {tag}
                </span>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default InvestmentHighlights;
