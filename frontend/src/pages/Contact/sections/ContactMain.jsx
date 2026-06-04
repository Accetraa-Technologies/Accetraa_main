import { useState } from 'react';
import useForm from '@/hooks/useForm';
import { submitContact } from '@/services/forms';
import FormField from '@/components/ui/FormField';
import Button from '@/components/ui/Button';
import { FOOTER_CONTACT } from '@/utils/constants';
import styles from './ContactMain.module.scss';

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (v) => {
  const e = {};
  if (!v.full_name?.trim())             e.full_name    = 'Full name is required.';
  else if (v.full_name.trim().length < 2) e.full_name  = 'Please enter your full name.';
  if (!v.email?.trim())                  e.email        = 'Email address is required.';
  else if (!EMAIL_RE.test(v.email))      e.email        = 'Please enter a valid email address.';
  if (!v.phone?.trim())                  e.phone        = 'Phone number is required.';
  if (!v.subject?.trim())                e.subject      = 'Subject is required.';
  if (!v.message?.trim())                e.message      = 'Message is required.';
  else if (v.message.trim().length < 10) e.message      = 'Message must be at least 10 characters.';
  return e;
};

const INITIAL = { full_name: '', email: '', phone: '', company_name: '', subject: '', message: '' };

// ─── Info cards ───────────────────────────────────────────────────────────────

const INFO_CARDS = [
  {
    Icon: EmailIcon,
    label: 'Email Us',
    primary: FOOTER_CONTACT.email,
    secondary: 'We respond within one business day',
    href: `mailto:${FOOTER_CONTACT.email}`,
  },
  {
    Icon: PhoneIcon,
    label: 'Call Us',
    primary: FOOTER_CONTACT.phone,
    secondary: 'Monday – Friday, 9 AM – 6 PM IST',
    href: `tel:${FOOTER_CONTACT.phone.replace(/\s/g, '')}`,
  },
  {
    Icon: LocationIcon,
    label: 'Our Office',
    primary: FOOTER_CONTACT.address,
    secondary: 'Hubbali, Karnataka 580029, India',
    href: null,
  },
  {
    Icon: ClockIcon,
    label: 'Business Hours',
    primary: 'Mon – Fri: 9:00 AM – 6:00 PM',
    secondary: 'IST (UTC +5:30)',
    href: null,
  },
];

// ─── Contact form ─────────────────────────────────────────────────────────────

const ContactForm = () => {
  const { values, errors, submitting, handleChange, handleSubmit, reset } = useForm(INITIAL, validate);
  const [serverFieldErrors, setServerFieldErrors] = useState({});
  const [serverError, setServerError]             = useState('');
  const [success, setSuccess]                     = useState(false);

  const fe = (name) => errors[name] || serverFieldErrors[name] || '';

  const onSubmit = async (vals) => {
    setServerError('');
    setServerFieldErrors({});
    try {
      await submitContact(vals);
      setSuccess(true);
      reset();
    } catch (err) {
      if (err.fieldErrors) {
        const mapped = {};
        Object.entries(err.fieldErrors).forEach(([k, msgs]) => {
          mapped[k] = Array.isArray(msgs) ? msgs[0] : String(msgs);
        });
        setServerFieldErrors(mapped);
      } else {
        setServerError(err.message || 'Something went wrong. Please try again.');
      }
    }
  };

  if (success) {
    return (
      <div className={styles.successBox} role="status">
        <div className={styles.successIcon} aria-hidden="true"><SuccessIcon /></div>
        <h3 className={styles.successTitle}>Message sent successfully</h3>
        <p className={styles.successBody}>
          Thank you for reaching out. A member of our team will be in touch within one business day.
        </p>
        <Button variant="outline" size="md" onClick={() => setSuccess(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact form">
      <div className={styles.formRow}>
        <FormField label="Full Name"    name="full_name"    value={values.full_name}    onChange={handleChange} error={fe('full_name')}    required placeholder="Jane Smith" />
        <FormField label="Email Address" name="email"       type="email" value={values.email}    onChange={handleChange} error={fe('email')}        required placeholder="jane@company.com" />
      </div>
      <div className={styles.formRow}>
        <FormField label="Phone Number"  name="phone"       type="tel"   value={values.phone}    onChange={handleChange} error={fe('phone')}        required placeholder="+91 98765 43210" />
        <FormField label="Company Name"  name="company_name"              value={values.company_name} onChange={handleChange} error={fe('company_name')} placeholder="Acme Corporation" />
      </div>
      <FormField label="Subject" name="subject" value={values.subject} onChange={handleChange} error={fe('subject')} required placeholder="How can we help you?" />
      <FormField label="Message" name="message" type="textarea" rows={5} value={values.message} onChange={handleChange} error={fe('message')} required placeholder="Tell us about your project, requirements, or questions..." />

      {serverError && (
        <div className={styles.serverError} role="alert">
          <AlertIcon />
          <p>{serverError}</p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" loading={submitting} disabled={submitting} fullWidth>
        {submitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────

const ContactMain = () => (
  <section className={styles.section} aria-label="Contact us">
    <div className="container">
      <div className={styles.layout}>

        <div className={styles.left}>
          <div className={styles.infoHeader}>
            <span className={styles.eyebrow}>Get in Touch</span>
            <h2 className={styles.infoTitle}>We'd love to hear from you</h2>
            <p className={styles.infoSubtitle}>
              Whether you have a specific project in mind, want to explore how we work, or simply have a question — reach out and we'll respond promptly.
            </p>
          </div>

          <div className={styles.cards}>
            {INFO_CARDS.map(({ Icon, label, primary, secondary, href }) => (
              <div key={label} className={styles.card}>
                <div className={styles.cardIcon} aria-hidden="true"><Icon /></div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{label}</span>
                  {href
                    ? <a href={href} className={styles.cardPrimary}>{primary}</a>
                    : <span className={styles.cardPrimary}>{primary}</span>
                  }
                  <span className={styles.cardSecondary}>{secondary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <p className={styles.formSubtitle}>We'll get back to you within one business day.</p>
            </div>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── Icons ────────────────────────────────────────────────────────────────────

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M6.5 2h3l1.5 4.5-2 1.5a11 11 0 005 5l1.5-2 4.5 1.5v3C20 18.9 17.5 21 15 21 8.4 21 1 13.6 1 7 1 4.5 3.1 2 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2C7.7 2 5 4.7 5 8c0 5.2 6 12 6 12s6-6.8 6-12c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="11" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 5v5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="9" cy="13" r="1" fill="currentColor"/>
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default ContactMain;
