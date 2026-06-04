import SectionHeader from '@/components/shared/SectionHeader';
import TeamMemberCard from '@/components/shared/TeamMemberCard';
import { teamMembers } from '@/data/team';
import styles from './TeamSection.module.scss';

const TeamSection = () => (
  <section className={styles.section} aria-label="Our team">
    <div className="container">
      <SectionHeader
        eyebrow="The Team"
        title="Senior leaders. Proven experience."
        subtitle="Our leadership team combines deep technical expertise with strategic business acumen. Every client engagement benefits directly from their involvement."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid}>
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>

      <p className={styles.footnote}>
        Our full team of engineers, designers, and consultants grows with every engagement.
        We match the right talent to every project — not just who is available.
      </p>
    </div>
  </section>
);

export default TeamSection;
