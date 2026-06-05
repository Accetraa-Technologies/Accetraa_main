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
            title="A software and SaaS product company built to grow"
            subtitle="Founded in 2026, Accetraa Technologies builds proprietary SaaS platforms and delivers software engineering, AI solutions, and digital transformation services for businesses across industries."
            align="left"
          />

          <p className={styles.body}>
            We are not a staffing agency, and we are not a generic IT consultancy. Accetraa
            is a product-led technology company — we build software that we own, operate,
            and evolve over time. Every service engagement is backed by the same engineering
            standards we apply to our own products.
          </p>

          <p className={styles.body}>
            Headquartered in Karnataka, India, our team combines deep technical expertise
            with a product-first mindset. Whether you need a custom software solution, want
            to partner on a SaaS product, or need AI and digital transformation support —
            Accetraa delivers with clarity, quality, and long-term accountability.
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
