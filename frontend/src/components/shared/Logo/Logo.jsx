import { useId } from 'react';

/**
 * Accetraa logo icon — hexagon + circuit "A" mark.
 *
 * To swap in the real PNG once placed at src/assets/images/brand/logo.png:
 *   import logoSrc from '@/assets/images/brand/logo.png';
 *   return <img src={logoSrc} alt="" width={size} height={size} style={{ display:'block' }} />;
 */
const Logo = ({ size = 36, className = '' }) => {
  // React 18 useId — each instance gets a unique ID so gradient refs
  // never collide when multiple Logos are on the same page (navbar + footer).
  const uid  = useId().replace(/:/g, '');
  const grad = `ac-grad-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient
          id={grad}
          x1="0%" y1="0%"
          x2="100%" y2="100%"
        >
          <stop offset="0%"   stopColor="#4F72F5" />
          <stop offset="50%"  stopColor="#7B4FE8" />
          <stop offset="100%" stopColor="#6320C8" />
        </linearGradient>
      </defs>

      {/* ── Hexagon body (pointy-top) — no filter so it renders at any size ── */}
      <path
        d="M50 4 L88 26 L88 74 L50 96 L12 74 L12 26 Z"
        fill={`url(#${grad})`}
      />

      {/* Subtle inner-edge highlight gives the hex depth */}
      <path
        d="M50 9 L84 29 L84 71 L50 91 L16 71 L16 29 Z"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* ── White "A" ── */}
      <path
        d="M31 77 L50 22 L69 77"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Crossbar */}
      <line
        x1="39" y1="57"
        x2="61" y2="57"
        stroke="white"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* ── Circuit line extending right from crossbar ── */}
      <line
        x1="61" y1="57"
        x2="78" y2="57"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Circuit end-node (white filled circle) */}
      <circle cx="78" cy="57" r="4" fill="white" />

      {/* ── Accent dots (magenta) — circuit junction nodes ── */}
      <circle cx="22" cy="36" r="4.5" fill="#E040FB" />
      <circle cx="61" cy="57" r="4"   fill="#E040FB" />
    </svg>
  );
};

export default Logo;
