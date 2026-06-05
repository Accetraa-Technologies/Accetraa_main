import SectionHeader from '@/components/shared/SectionHeader';
import { companyExpertise } from '@/data/company';
import { industryNames } from '@/data/industries';
import styles from './CompanyIntro.module.scss';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.checkIcon}>
    <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.12" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompanyIntro = () => (
  <section className={styles.section} aria-label="Company introduction">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <SectionHeader
            eyebrow="About Accetraa Technologies"
            title="Building the future of beauty and wellness technology"
            subtitle="Founded in 2026, Accetraa Technologies is a product-led technology company focused on building innovative SaaS platforms and AI-driven solutions for the beauty, wellness, and service industries."
            align="left"
          />

          <p className={styles.body}>
            Our flagship platform, UrSaloon, is a comprehensive cloud-based SaaS solution
            for salons, spas, beauty parlours, and independent beauty professionals —
            covering appointment management, staff scheduling, billing, inventory, and customer
            loyalty. We are actively onboarding businesses across India and building the
            foundation for global expansion.
          </p>

          <p className={styles.body}>
            Headquartered in Karnataka, India, Accetraa combines deep technical expertise
            with industry-focused product design. Alongside our SaaS products, we deliver
            software development, AI consulting, and digital transformation services to help
            businesses of all sizes modernise their operations.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Core Expertise</h3>
            <ul className={styles.list}>
              {companyExpertise.map(item => (
                <li key={item} className={styles.listItem}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Industries We Serve</h3>
            <ul className={styles.list}>
              {industryNames.map(item => (
                <li key={item} className={styles.listItem}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default CompanyIntro;
