import { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import Loader from '@/components/ui/Loader';
import { ROUTES } from '@/utils/constants';
import { trackPageView } from '@/utils/analytics';

const Home      = lazy(() => import('@/pages/Home'));
const About     = lazy(() => import('@/pages/About'));
const Services  = lazy(() => import('@/pages/Services'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const Investors = lazy(() => import('@/pages/Investors'));
const Contact   = lazy(() => import('@/pages/Contact'));
const Careers      = lazy(() => import('@/pages/Careers'));
const NotFound     = lazy(() => import('@/pages/NotFound'));
const DesignSystem   = lazy(() => import('@/pages/DesignSystem'));
const LayoutPreview  = lazy(() => import('@/pages/LayoutPreview'));

// Reports every route change to Google Analytics, including the first render.
// The automatic page_view is disabled in analytics.js so this is the single
// place screen views come from — otherwise the landing page is counted twice
// and no later page is counted at all.
//
// Lives inside the layout rather than around the router: useLocation needs a
// router context, which RouterProvider only establishes for its children.
const TrackPageViews = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    trackPageView();
  }, [pathname, search]);
  return null;
};

const MainLayout = () => (
  <>
    <TrackPageViews />
    <Navbar />
    <Suspense fallback={<Loader fullPage />}>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </Suspense>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME,      element: <Home /> },
      { path: ROUTES.ABOUT,     element: <About /> },
      { path: ROUTES.SERVICES,  element: <Services /> },
      { path: ROUTES.PORTFOLIO, element: <Portfolio /> },
      { path: ROUTES.INVESTORS, element: <Investors /> },
      { path: ROUTES.CONTACT,   element: <Contact /> },
      { path: ROUTES.CAREERS,   element: <Careers /> },
      { path: '/_design',         element: <DesignSystem /> },
      { path: '/_layout-preview', element: <LayoutPreview /> },
      { path: '*',               element: <NotFound /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
