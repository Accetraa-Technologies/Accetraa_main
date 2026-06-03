import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import styles from './CTABanner.module.scss';

// variant: 'dark' (navy) | 'primary' (blue) | 'accent' (orange gradient)
const CTABanner = ({
  eyebrow,
  heading,
  description,
  primaryAction,   // { label, href, onClick }
  secondaryAction, // { label, href, onClick } — optional
  variant = 'dark',
  align = 'split', // 'split' (text left, buttons right) | 'center'
}) => {
  const classes = [
    styles.banner,
    styles[`banner--${variant}`],
    styles[`banner--${align}`],
  ]
    .filter(Boolean)
    .join(' ');

  const renderButton = (action, btnVariant, btnSize = 'md') => {
    if (!action) return null;
    if (action.href) {
      return (
        <Button as={Link} to={action.href} variant={btnVariant} size={btnSize} onClick={action.onClick}>
          {action.label}
        </Button>
      );
    }
    return (
      <Button variant={btnVariant} size={btnSize} onClick={action.onClick}>
        {action.label}
      </Button>
    );
  };

  return (
    <section className={classes} aria-label={heading}>
      <div className="container">
        <div className={styles.inner}>

          <div className={styles.text}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h2 className={styles.heading}>{heading}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>

          <div className={styles.actions}>
            {renderButton(
              primaryAction,
              variant === 'dark' || variant === 'primary' ? 'accent' : 'primary',
              'lg'
            )}
            {renderButton(secondaryAction, 'outline', 'lg')}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
