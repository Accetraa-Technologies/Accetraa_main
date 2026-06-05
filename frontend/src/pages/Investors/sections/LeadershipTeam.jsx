import SectionHeader from '@/components/shared/SectionHeader';
import TeamMemberCard from '@/components/shared/TeamMemberCard';
import { teamMembers } from '@/data/team';
import styles from './LeadershipTeam.module.scss';

const LeadershipTeam = () => (
  <section className={styles.section} aria-label="Leadership team">
    <div className="container">
      <SectionHeader
        eyebrow="Leadership"
        title="Led with purpose and expertise"
        subtitle="Accetraa is guided by a leadership team that brings together technology vision, financial discipline, and a long-term commitment to building lasting value."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid}>
        {teamMembers.map(member => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.avatar}
          />
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipTeam;
