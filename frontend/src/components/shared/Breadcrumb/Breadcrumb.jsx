import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

// items: [{ label: 'Home', path: '/' }, { label: 'About' }]
// Last item is the current page — no link, aria-current="page"
const Breadcrumb = ({ items = [], theme = 'dark' }) => {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`${styles.nav} ${styles[`nav--${theme}`]}`}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={styles.item}>
              {!isLast ? (
                <>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                  <span className={styles.separator} aria-hidden="true">/</span>
                </>
              ) : (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
