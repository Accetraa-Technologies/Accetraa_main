import Breadcrumb from '@/components/shared/Breadcrumb';
import styles from './PageHero.module.scss';

// size: 'sm' (280px) | 'md' (380px) | 'lg' (500px)
// align: 'left' | 'center'
// breadcrumbs: [{ label, path }]  — last item = current page
const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs = [],
  size = 'md',
  align = 'left',
}) => {
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  const classes = [
    styles.hero,
    styles[`hero--${size}`],
    styles[`hero--${align}`],
    backgroundImage ? styles['hero--image'] : styles['hero--gradient'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} style={heroStyle} aria-label={`${title} page header`}>
      {backgroundImage && <div className={styles.overlay} aria-hidden="true" />}

      <div className={styles.inner}>
        <div className="container">
          {breadcrumbs.length > 0 && (
            <Breadcrumb items={breadcrumbs} theme="dark" />
          )}

          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
