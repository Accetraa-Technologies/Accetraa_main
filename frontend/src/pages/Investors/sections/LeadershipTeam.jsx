import SectionHeader from '@/components/shared/SectionHeader';
import TeamMemberCard from '@/components/shared/TeamMemberCard';
import { teamMembers } from '@/data/team';
import styles from './LeadershipTeam.module.scss';

const LeadershipTeam = () => (
  <section className={styles.section} aria-label="Leadership team">
    <div className="container">
      <SectionHeader
        eyebrow="Leadership"
        title="The team behind the results"
        subtitle="Our leadership combines deep technical expertise with commercial acumen. They lead by example — every client engagement benefits from their direct involvement."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid}>
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>

      <p className={styles.footnote}>
        Supported by a full team of senior engineers, solution architects, and client success
        professionals — each selected for expertise, not availability.
      </p>
    </div>
  </section>
);

export default LeadershipTeam;
