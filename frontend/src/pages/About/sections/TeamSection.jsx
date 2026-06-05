import SectionHeader from '@/components/shared/SectionHeader';
import TeamMemberCard from '@/components/shared/TeamMemberCard';
import { teamMembers } from '@/data/team';
import styles from './TeamSection.module.scss';

const TeamSection = () => (
  <section className={styles.section} aria-label="Our team">
    <div className="container">
      <SectionHeader
        eyebrow="Leadership Team"
        title="Built by people who believe in what we build."
        subtitle="Accetraa is founded and led by a team with deep technical, financial, and operational expertise — united by a clear vision to create software that creates lasting impact."
        align="center"
        className={styles.header}
      />

      <div className={styles.grid}>
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} name={member.name} role={member.role} description={member.description} image={member.avatar} />
        ))}
      </div>

      <p className={styles.footnote}>
        Our engineering and delivery team grows with every engagement.
        We bring in the right expertise for every project.
      </p>
    </div>
  </section>
);

export default TeamSection;
