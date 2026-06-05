import SectionHeader from '@/components/shared/SectionHeader';
import { missionVision } from '@/data/company';
import styles from './MissionVision.module.scss';

const MissionVision = () => (
  <section className={styles.section} aria-label="Mission and vision">
    <div className="container">
      <SectionHeader
        eyebrow="Our Purpose"
        title="Guided by principles. Driven by outcomes."
        align="center"
        theme="dark"
        className={styles.header}
      />

      <div className={styles.grid}>

        <div className={styles.card} data-card="mission">
          <div className={styles.cardIconWrap} aria-hidden="true">
            <MissionIcon />
          </div>
          <span className={styles.cardLabel}>Mission</span>
          <h3 className={styles.cardTitle}>{missionVision.mission.title}</h3>
          <p className={styles.cardBody}>{missionVision.mission.body}</p>
          <ul className={styles.pillList} aria-label="Mission pillars">
            {missionVision.mission.pills.map(pill => (
              <li key={pill} className={styles.pill}>{pill}</li>
            ))}
          </ul>
        </div>

        <div className={styles.card} data-card="vision">
          <div className={styles.cardIconWrap} aria-hidden="true">
            <VisionIcon />
          </div>
          <span className={styles.cardLabel}>Vision</span>
          <h3 className={styles.cardTitle}>{missionVision.vision.title}</h3>
          <p className={styles.cardBody}>{missionVision.vision.body}</p>
          <ul className={styles.pillList} aria-label="Vision pillars">
            {missionVision.vision.pills.map(pill => (
              <li key={pill} className={styles.pill}>{pill}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </section>
);

const MissionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 3L29 10v12L16 29 3 22V10L16 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M16 3v9M16 20v9M3 10l9 6M20 16l9 6M3 22l9-6M20 10l9-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const VisionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 6C9 6 3 16 3 16s6 10 13 10 13-10 13-10S23 6 16 6z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export default MissionVision;
