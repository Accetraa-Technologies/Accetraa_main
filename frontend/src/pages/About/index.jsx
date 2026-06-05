import SEO from '@/components/seo';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import { ROUTES } from '@/utils/constants';
import CompanyIntro from './sections/CompanyIntro';
import FounderMessage from './sections/FounderMessage';
import MissionVision from './sections/MissionVision';
import CoreValues from './sections/CoreValues';
import WhyChooseUs from './sections/WhyChooseUs';
import IndustryExpertise from './sections/IndustryExpertise';
import TeamSection from './sections/TeamSection';
import ProcessSection from './sections/ProcessSection';
import StatisticsSection from './sections/StatisticsSection';

const BREADCRUMBS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About Us', path: ROUTES.ABOUT },
];

const About = () => (
  <>
    <SEO
      title="About Us"
      description="Accetraa Technologies is a product-led technology company founded in 2026. We build proprietary SaaS products and deliver software engineering, AI solutions, and digital transformation services for businesses across industries."
    />

    <main>
      <PageHero
        title="About Accetraa Technologies"
        subtitle="Founded in 2026 — a product-led technology company building SaaS platforms, AI solutions, and custom software for businesses across industries."
        breadcrumbs={BREADCRUMBS}
        size="sm"
        align="center"
      />

      <CompanyIntro />
      <FounderMessage />
      <MissionVision />
      <CoreValues />
      <StatisticsSection />
      <WhyChooseUs />
      <IndustryExpertise />
      <TeamSection />
      <ProcessSection />

      <CTABanner
        eyebrow="Work With Us"
        heading="Let's build something meaningful together"
        description="Whether you need a custom software solution, want to explore UrSaloon for your business, or want to discuss a partnership — our team is ready to listen."
        primaryAction={{ label: 'Get in Touch', href: ROUTES.CONTACT }}
        variant="dark"
        align="split"
      />
    </main>
  </>
);

export default About;
