import SectionHeader from '@/components/shared/SectionHeader';
import { techCategories } from '@/data/technologies';
import styles from './TechnologyExpertise.module.scss';

const TechnologyExpertise = () => (
  <section className={styles.section} aria-label="Technology expertise">
    <div className="container">
      <SectionHeader
        eyebrow="Technology Stack"
        title="The tools we use at enterprise scale"
        subtitle="Our engineers are specialists, not generalists. Each technology we use is validated through production deployments at scale — not just side projects."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid}>
        {techCategories.map(({ label, color, techs }) => (
          <div key={label} className={`${styles.category} ${styles[`category--${color}`]}`}>
            <h3 className={styles.catLabel}>{label}</h3>
            <div className={styles.techList}>
              {techs.map(({ name, level }) => (
                <div key={name} className={styles.tech}>
                  <span className={styles.techName}>{name}</span>
                  <span className={`${styles.techLevel} ${styles[`techLevel--${level.toLowerCase()}`]}`}>
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologyExpertise;
