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
            title="Transforming businesses through precision engineering"
            subtitle="Founded with a singular focus on enterprise outcomes, Accetraa Technologies combines deep technical expertise with strategic consulting to help organisations navigate digital transformation. We build systems that scale, perform, and endure."
            align="left"
          />

          <p className={styles.body}>
            We are not a staffing agency, and we are not a generic IT consultancy. Accetraa is
            a technology partner that takes end-to-end ownership — from architecture design
            through production deployment and long-term support. Every engagement is led by
            senior engineers who have built systems at scale, for clients who demand the highest
            standards.
          </p>

          <p className={styles.body}>
            Headquartered in Karnataka, India, our team serves enterprise clients across
            industries including FinTech, HealthTech, Manufacturing, and SaaS. Whether you
            need a greenfield platform, a modernisation programme, or an embedded engineering
            capability, Accetraa delivers with rigour and accountability.
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
            <h3 className={styles.infoTitle}>Industries Served</h3>
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
