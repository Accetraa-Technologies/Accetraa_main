import SEO from '@/components/seo';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import { ROUTES } from '@/utils/constants';
import ContactMain from './sections/ContactMain';
import ConsultationForm from './sections/ConsultationForm';
import DemoRequestForm from './sections/DemoRequestForm';
import ContactFAQ from './sections/ContactFAQ';
import LocationSection from './sections/LocationSection';

const BREADCRUMBS = [
  { label: 'Home',       path: ROUTES.HOME },
  { label: 'Contact Us', path: ROUTES.CONTACT },
];

const Contact = () => (
  <>
    <SEO
      title="Contact Us"
      description="Get in touch with Accetraa Technologies. Request a consultation, book a product demo, or send us a message — our team responds within one business day."
    />

    <main>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project. Reach out and our senior team will respond within one business day."
        breadcrumbs={BREADCRUMBS}
        size="sm"
        align="center"
      />

      <ContactMain />
      <ConsultationForm />
      <DemoRequestForm />
      <ContactFAQ />
      <LocationSection />

      <CTABanner
        eyebrow="Not Sure Where to Start?"
        heading="Let's figure it out together"
        description="If you're unsure which form to use, just send us a general message. We'll route it to the right person and get back to you quickly."
        primaryAction={{ label: 'Send a Message', href: '#contact-form' }}
        secondaryAction={{ label: 'Book Consultation', href: `${ROUTES.CONTACT}#consultation` }}
        variant="dark"
        align="center"
      />
    </main>
  </>
);

export default Contact;
