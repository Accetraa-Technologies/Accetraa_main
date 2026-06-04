import FAQAccordion from '@/components/shared/FAQAccordion';
import SectionHeader from '@/components/shared/SectionHeader';
import { servicesFaqs } from '@/data/faqs';
import styles from './ServicesFAQ.module.scss';

const ServicesFAQ = () => (
  <section className={styles.section} aria-label="Frequently asked questions">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions we hear most often"
            subtitle="If your question is not answered here, contact us directly — we will respond within one business day."
            align="left"
          />
          <div className={styles.contactNote}>
            <p className={styles.contactText}>Have a specific question?</p>
            <a href="/contact" className={styles.contactLink}>
              Contact our team →
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <FAQAccordion items={servicesFaqs} />
        </div>

      </div>
    </div>
  </section>
);

export default ServicesFAQ;
