import FAQAccordion from '@/components/shared/FAQAccordion';
import SectionHeader from '@/components/shared/SectionHeader';
import { careersFaqs } from '@/data/faqs';
import styles from './CareersFAQ.module.scss';

const CareersFAQ = () => (
  <section className={styles.section} aria-label="Careers frequently asked questions">
    <div className="container">
      <div className={styles.layout}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions about working with us"
            subtitle="Can't find what you're looking for? Send us a message and we'll answer directly."
            align="left"
          />
        </div>
        <div className={styles.right}>
          <FAQAccordion items={careersFaqs} />
        </div>
      </div>
    </div>
  </section>
);

export default CareersFAQ;
