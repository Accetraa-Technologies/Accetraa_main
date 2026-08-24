export const config = {
  apiBaseUrl:  import.meta.env.VITE_API_BASE_URL  || 'http://localhost:8000',
  appName:     import.meta.env.VITE_APP_NAME      || 'Accetraa',
  // True when VITE_STAGING_MODE=true is set in the environment (Vercel staging deploy).
  // Replaces live contact/consultation/demo forms with informational notices.
  stagingMode: import.meta.env.VITE_STAGING_MODE  === 'true',
  // Google Analytics 4. Hardcoded default because a measurement ID is public
  // by design -- it ships in the page source either way -- and leaving it to a
  // Vercel dashboard variable means a deploy that silently stops reporting if
  // anyone forgets to set it. The env var stays available to point a preview
  // deploy at a different property.
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-25WLHK7DKW',
};

