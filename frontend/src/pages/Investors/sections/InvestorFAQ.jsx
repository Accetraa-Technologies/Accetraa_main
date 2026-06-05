import FAQAccordion from '@/components/shared/FAQAccordion';
import SectionHeader from '@/components/shared/SectionHeader';
import { investorFaqs } from '@/data/investorFaq';
import styles from './InvestorFAQ.module.scss';

const InvestorFAQ = () => (
  <section className={styles.section} aria-label="Investor frequently asked questions">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <SectionHeader
            eyebrow="Investor FAQ"
            title="Questions from prospective investors"
            subtitle="Transparent answers to the questions we hear most from investors and strategic partners."
            align="left"
          />
          <div className={styles.contactNote}>
            <p className={styles.contactText}>Have a specific question?</p>
            <a href="/contact" className={styles.contactLink}>
              Speak with leadership →
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <FAQAccordion items={investorFaqs} />
        </div>

      </div>
    </div>
  </section>
);

export default InvestorFAQ;
