import { config } from '@/config/env';

/**
 * Google Analytics 4.
 *
 * The snippet Google supplies is written for multi-page sites: it fires one
 * page_view when the document loads. This site is a single-page React router —
 * the document loads once and Home, About, Services, Portfolio, Investors,
 * Contact and Careers are all client-side transitions. Pasted verbatim into
 * index.html it would report a single page_view per visit, credited to whatever
 * URL the visitor first landed on, and every page after that would be invisible.
 *
 * On a marketing site that is the whole measurement: which services people read,
 * whether anyone reaches Careers, how far they get before Contact. So the
 * automatic page_view is disabled at config time and one is sent explicitly on
 * each route change instead (TrackPageViews, mounted in the router layout).
 *
 * Silent by default. No measurement ID, running on localhost, or a staging
 * deploy — nothing loads and every call here is a no-op.
 */

function isEnabled() {
  if (!config.gaMeasurementId) return false;
  // A developer or a staging build is not a prospect. Staging shares this code
  // and would otherwise report into the same property as the live site,
  // inflating exactly the numbers someone is trying to read.
  if (config.stagingMode) return false;
  if (typeof window === 'undefined') return false;
  return window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
}

export function initAnalytics() {
  if (!isEnabled() || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  // Must stay a function declaration using `arguments`: gtag pushes the raw
  // arguments object, and a rest-parameter arrow would push an array instead,
  // which Google's tag does not understand.
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', config.gaMeasurementId, {
    // Route changes are reported by hand — see the note above.
    send_page_view: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.gaMeasurementId)}`;
  document.head.appendChild(script);
}

/**
 * Report a screen view. Called on every completed route change.
 *
 * The title is read at call time rather than passed in, so whatever the page
 * has set by then is what GA records.
 */
export function trackPageView() {
  if (!isEnabled() || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}
