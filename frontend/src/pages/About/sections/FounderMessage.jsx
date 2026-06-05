import { founderMessage } from '@/data/team';
import styles from './FounderMessage.module.scss';

const FounderMessage = () => (
  <section className={styles.section} aria-label="Message from the Co-Founder">
    <div className="container">
      <div className={styles.layout}>

        {/* Left — photo + identity */}
        <div className={styles.left}>
          <div className={styles.photoWrap}>
            {founderMessage.avatar ? (
              <img
                src={founderMessage.avatar}
                alt={founderMessage.name}
                className={styles.photo}
                loading="lazy"
              />
            ) : (
              <div className={styles.photoPlaceholder} aria-hidden="true">
                <span className={styles.initials}>
                  {founderMessage.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          <div className={styles.identity}>
            <span className={styles.name}>{founderMessage.name}</span>
            <span className={styles.role}>{founderMessage.role}</span>
          </div>
        </div>

        {/* Right — message */}
        <div className={styles.right}>
          <span className={styles.eyebrow}>Message from the Co-Founder</span>
          <div className={styles.quoteWrap} aria-hidden="true">
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
              <path d="M0 36V22.5C0 9 7.5 2.5 22.5 0L24 3C15 5 10.5 9.5 10.5 16.5H18V36H0ZM27 36V22.5C27 9 34.5 2.5 49.5 0L51 3C42 5 37.5 9.5 37.5 16.5H45V36H27Z" fill="currentColor" opacity="0.12"/>
            </svg>
          </div>
          <div className={styles.messageBody}>
            {founderMessage.message.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}
          </div>
          <div className={styles.signature}>
            <span className={styles.signatureName}>{founderMessage.name}</span>
            <span className={styles.signatureRole}>{founderMessage.role}</span>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default FounderMessage;
