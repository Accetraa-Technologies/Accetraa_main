import SectionHeader from '@/components/shared/SectionHeader';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = () => (
  <section className={styles.section} aria-label="Client testimonials">
    <div className="container">
      <SectionHeader
        eyebrow="Client Voices"
        title="Trusted by engineering leaders"
        subtitle="What our clients say about working with Accetraa."
        align="center"
        className={styles.sectionHeader}
      />

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
