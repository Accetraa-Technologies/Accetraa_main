import FAQAccordion from '@/components/shared/FAQAccordion';
import SectionHeader from '@/components/shared/SectionHeader';
import { contactFaqs } from '@/data/faqs';
import styles from './ContactFAQ.module.scss';

const ContactFAQ = () => (
  <section className={styles.section} aria-label="Frequently asked questions">
    <div className="container">
      <div className={styles.layout}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions about getting started"
            subtitle="Everything you need to know before reaching out. Still have questions? Contact us directly."
            align="left"
          />
        </div>

        <div className={styles.right}>
          <FAQAccordion items={contactFaqs} />
        </div>
      </div>
    </div>
  </section>
);

export default ContactFAQ;
