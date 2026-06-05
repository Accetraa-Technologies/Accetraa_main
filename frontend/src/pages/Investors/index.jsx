import SEO from '@/components/seo';
import CTABanner from '@/components/shared/CTABanner';
import { ROUTES } from '@/utils/constants';
import InvestorHero from './sections/InvestorHero';
import InvestorOverview from './sections/InvestorOverview';
import GrowthMetrics from './sections/GrowthMetrics';
import WhyInvest from './sections/WhyInvest';
import InvestmentHighlights from './sections/InvestmentHighlights';
import LeadershipTeam from './sections/LeadershipTeam';
import IndustriesServed from './sections/IndustriesServed';
import InvestorFAQ from './sections/InvestorFAQ';

const Investors = () => (
  <>
    <SEO
      title="Investors"
      description="Accetraa Technologies is a high-growth enterprise technology company delivering measurable outcomes across 8+ industries. Explore our investment opportunity, growth metrics, and leadership team."
    />

    <main>
      <InvestorHero />
      <InvestorOverview />
      <GrowthMetrics />
      <WhyInvest />
      <InvestmentHighlights />
      <LeadershipTeam />
      <IndustriesServed />
      <InvestorFAQ />

      <CTABanner
        eyebrow="Start the Conversation"
        heading="Let's Build the Future Together"
        description="We are selectively building relationships with investors and strategic partners who share our long-term vision. Schedule a confidential discussion with our leadership team."
        primaryAction={{ label: 'Schedule Investor Discussion', href: ROUTES.CONTACT }}
        secondaryAction={{ label: 'Contact Leadership Team', href: ROUTES.CONTACT }}
        variant="dark"
        align="split"
      />
    </main>
  </>
);

export default Investors;
