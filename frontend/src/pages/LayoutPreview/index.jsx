import SEO from '@/components/seo';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { Container, NarrowContainer } from '@/components/layout/Container';
import { ROUTES } from '@/utils/constants';
import styles from './LayoutPreview.module.scss';

const Divider = ({ label }) => (
  <div className={styles.divider}><span className={styles.dividerLabel}>{label}</span></div>
);

const LayoutPreview = () => (
  <>
    <SEO title="Layout Preview" description="Temporary layout component preview." />

    <div className={styles.page}>

      {/* ── PAGE HERO — Gradient (no image) ── */}
      <Divider label="PageHero — gradient, left align, md size" />
      <PageHero
        title="Enterprise Solutions for the Modern Era"
        subtitle="Accetraa partners with forward-thinking organizations to engineer platforms that scale."
        breadcrumbs={[
          { label: 'Home', path: ROUTES.HOME },
          { label: 'Services', path: ROUTES.SERVICES },
        ]}
        size="md"
        align="left"
      />

      {/* ── PAGE HERO — Center align ── */}
      <Divider label="PageHero — gradient, center align, sm size" />
      <PageHero
        title="Our Portfolio"
        subtitle="Case studies across fintech, logistics, and enterprise SaaS."
        size="sm"
        align="center"
      />

      {/* ── PAGE HERO — Large ── */}
      <Divider label="PageHero — gradient, left align, lg size" />
      <PageHero
        title="About Accetraa"
        subtitle="We are a technology and strategy consultancy accelerating digital transformation for enterprises across India and beyond."
        breadcrumbs={[{ label: 'Home', path: ROUTES.HOME }, { label: 'About' }]}
        size="lg"
        align="left"
      />

      {/* ── BREADCRUMB — Standalone ── */}
      <Divider label="Breadcrumb — light theme (standalone)" />
      <div className={styles.block}>
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: ROUTES.HOME },
              { label: 'Services', path: ROUTES.SERVICES },
              { label: 'Digital Transformation' },
            ]}
            theme="light"
          />
        </Container>
      </div>

      {/* ── CTA BANNER — Dark split ── */}
      <Divider label="CTABanner — dark variant, split layout" />
      <CTABanner
        eyebrow="Get Started"
        heading="Ready to accelerate your digital journey?"
        description="Our experts are ready to help you design and deliver transformative technology solutions."
        primaryAction={{ label: 'Book Consultation', href: ROUTES.CONTACT }}
        secondaryAction={{ label: 'View Services', href: ROUTES.SERVICES }}
        variant="dark"
        align="split"
      />

      {/* ── CTA BANNER — Primary, center ── */}
      <Divider label="CTABanner — primary variant, center layout" />
      <CTABanner
        heading="Let's build something remarkable."
        description="Partner with a team that brings enterprise engineering excellence to every engagement."
        primaryAction={{ label: 'Start a Project', href: ROUTES.CONTACT }}
        variant="primary"
        align="center"
      />

      {/* ── CTA BANNER — Accent gradient ── */}
      <Divider label="CTABanner — accent variant, split" />
      <CTABanner
        eyebrow="Now Hiring"
        heading="Join the Accetraa team."
        description="We're growing our engineering and design practice. Come build with us."
        primaryAction={{ label: 'View Openings', href: ROUTES.CAREERS }}
        variant="accent"
        align="split"
      />

      {/* ── CONTAINERS ── */}
      <Divider label="Container variants" />
      <div className={styles.block}>
        <Container>
          <div className={styles.containerDemo}>
            <span>Container (max 1280px)</span>
          </div>
        </Container>
        <NarrowContainer>
          <div className={`${styles.containerDemo} ${styles.containerDemoNarrow}`}>
            <span>NarrowContainer (max 800px)</span>
          </div>
        </NarrowContainer>
      </div>

      {/* ── NAVBAR MOBILE NOTE ── */}
      <Divider label="Mobile Navbar — resize to &lt;1024px to test" />
      <div className={styles.block}>
        <Container>
          <div className={styles.infoBox}>
            <p><strong>Mobile navigation test:</strong> Resize your browser to below 1024px width. The hamburger menu will appear. Click it to open the slide panel. Test:</p>
            <ul>
              <li>Slide-in animation from the right</li>
              <li>Overlay darkens the background</li>
              <li>Clicking overlay or pressing ESC closes the menu</li>
              <li>Body scroll is locked while menu is open</li>
              <li>Clicking a link navigates and closes the menu</li>
              <li>Focus moves to first link on open; returns to hamburger on ESC</li>
            </ul>
          </div>
        </Container>
      </div>

    </div>
  </>
);

export default LayoutPreview;
