export const config = {
  apiBaseUrl:  import.meta.env.VITE_API_BASE_URL  || 'http://localhost:8000',
  appName:     import.meta.env.VITE_APP_NAME      || 'Accetraa',
  // True when VITE_STAGING_MODE=true is set in the environment (Vercel staging deploy).
  // Replaces live contact/consultation/demo forms with informational notices.
  stagingMode: import.meta.env.VITE_STAGING_MODE  === 'true',
};

