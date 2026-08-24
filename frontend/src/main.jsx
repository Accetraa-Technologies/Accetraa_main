import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initAnalytics } from '@/utils/analytics';

// Loads the Google tag and prepares gtag(). No page_view is sent here — the
// router reports each route change, including the first one.
initAnalytics();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
