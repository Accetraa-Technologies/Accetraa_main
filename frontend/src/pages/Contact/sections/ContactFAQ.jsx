import FAQAccordion from '@/components/shared/FAQAccordion';
import SectionHeader from '@/components/shared/SectionHeader';
import styles from './ContactFAQ.module.scss';

const FAQ_ITEMS = [
  {
    question: 'How quickly do you respond to enquiries?',
    answer:
      'We respond to all contact form submissions within one business day. For urgent matters, calling us directly during business hours (Monday to Friday, 9 AM – 6 PM IST) will get you the fastest response. Consultation and demo requests are prioritised and typically receive a response within 4 business hours.',
  },
  {
    question: 'What happens during a free consultation?',
    answer:
      'Our consultations are 60-minute working sessions — not sales presentations. A senior engineer or solution architect will review your current situation, ask structured questions about your goals and constraints, and outline a realistic path forward. You\'ll leave with a clear picture of potential approaches, rough effort, and any risks we\'ve identified. There is no commitment required.',
  },
  {
    question: 'How do product demos work?',
    answer:
      'Demo sessions are personalised to your role, industry, and use case. After you submit a demo request, our team will review your requirements and schedule a one-hour session. We\'ll walk through the product features most relevant to your workflows and allow time for questions. Demos are available via video call on your preferred platform (Zoom, Teams, or Google Meet).',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      'Yes. While our offices are based in Karnataka, India, we work with enterprise clients across Asia, the Middle East, and Europe. All engagements are managed remotely with structured communication protocols. We align to your business timezone for key meetings and delivery milestones.',
  },
  {
    question: 'What is the minimum engagement size you work with?',
    answer:
      'We typically work best with organisations that have a defined technology need and a budget of at least ₹15–20 lakh (approximately $20,000 USD) for initial engagements. This ensures we can dedicate the senior-level resources needed to deliver genuine value. For smaller needs, we\'d be happy to discuss advisory or consulting options during a consultation.',
  },
  {
    question: 'How do you handle NDAs and confidentiality?',
    answer:
      'We sign a mutual non-disclosure agreement before any discovery conversations or technical discussions. Our standard NDA is available for review before the first meeting. If you\'d prefer to use your organisation\'s NDA template, our legal team will review it within two business days.',
  },
];

const ContactFAQ = () => (
  <section className={styles.section} aria-label="Frequently asked questions">
    <div className="container">
      <div className={styles.layout}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions about getting started"
            subtitle="Everything you need to know before reaching out. Still have questions? Contact us directly."
            align="left"
          />
        </div>

        <div className={styles.right}>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </div>
  </section>
);

export default ContactFAQ;
