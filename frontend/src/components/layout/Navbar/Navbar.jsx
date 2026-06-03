import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useUI } from '@/context/UIContext';
import { NAV_LINKS, NAV_CTA } from '@/utils/constants';
import useScrollLock from '@/hooks/useScrollLock';
import useFocusTrap from '@/hooks/useFocusTrap';
import Button from '@/components/ui/Button';
import Logo from '@/components/shared/Logo';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUI();
  const hamburgerRef   = useRef(null);
  const mobilePanelRef = useRef(null);

  // Lock body scroll while panel is open
  useScrollLock(mobileMenuOpen);

  // Trap Tab/Shift+Tab inside the panel while open
  useFocusTrap(mobilePanelRef, mobileMenuOpen);

  // `inert` on the panel when closed: removes all children from Tab order
  // and the accessibility tree, preventing focus leaking into off-screen panel.
  useEffect(() => {
    const panel = mobilePanelRef.current;
    if (!panel) return;
    if (mobileMenuOpen) {
      panel.removeAttribute('inert');
    } else {
      panel.setAttribute('inert', '');
    }
  }, [mobileMenuOpen]);

  // ESC closes and returns focus to hamburger
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  // Shift focus to first panel element when it opens
  useEffect(() => {
    if (mobileMenuOpen) {
      const firstFocusable = mobilePanelRef.current?.querySelector(
        'a[href], button:not([disabled])'
      );
      // Small timeout so inert removal and paint both settle first
      const id = setTimeout(() => firstFocusable?.focus(), 30);
      return () => clearTimeout(id);
    }
  }, [mobileMenuOpen]);

  // Overlay click: close + return focus to hamburger
  const handleOverlayClick = () => {
    closeMobileMenu();
    hamburgerRef.current?.focus();
  };

  return (
    <>
      {/* Skip link — visible only on keyboard focus */}
      <a href="#main-content" className={styles.skipNav}>
        Skip to main content
      </a>

      {/* Overlay — click closes panel and returns focus */}
      <div
        className={`${styles.overlay} ${mobileMenuOpen ? styles.overlayVisible : ''}`}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Mobile slide panel — id referenced by aria-controls on hamburger */}
      <div
        id="mobile-nav-panel"
        ref={mobilePanelRef}
        className={`${styles.mobilePanel} ${mobileMenuOpen ? styles.mobilePanelOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.mobilePanelHeader}>
          <Link to="/" className={styles.mobileLogo} onClick={closeMobileMenu}>
            <Logo size={32} />
            <span>Accetraa</span>
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => { closeMobileMenu(); hamburgerRef.current?.focus(); }}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                  }
                  onClick={closeMobileMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileCTA}>
          <Button
            as={Link}
            to={NAV_CTA.path}
            variant="primary"
            fullWidth
            onClick={closeMobileMenu}
          >
            {NAV_CTA.label}
          </Button>
        </div>
      </div>

      {/* Fixed header */}
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">

          <Link to="/" className={styles.logo} aria-label="Accetraa — go to homepage">
            <Logo size={34} />
            <span className={styles.logoText}>Accetraa</span>
          </Link>

          {/* Desktop links */}
          <ul id="main-nav-links" className={styles.desktopLinks}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className={styles.desktopCTA}>
            <Button as={Link} to={NAV_CTA.path} variant="primary" size="sm">
              {NAV_CTA.label}
            </Button>
          </div>

          {/* Hamburger — aria-controls points to the mobile panel, not the desktop list */}
          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barBot : ''}`} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
