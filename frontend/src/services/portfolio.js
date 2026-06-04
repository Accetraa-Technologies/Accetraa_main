import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '@/data/portfolio.data';

// Dummy data active — backend integration preserved below for future use.
// TO GO LIVE: delete the four lines above, uncomment the block below.
//
// import axiosInstance from './axiosInstance';
// export const getPortfolio = async (params = {}) => {
//   const response = await axiosInstance.get('/api/v1/portfolio/', { params });
//   return response.data;
// };
// export const getPortfolioFeatured = () => getPortfolio({ featured: true });
// export const getPortfolioCategories = async () => {
//   const response = await axiosInstance.get('/api/v1/portfolio/categories/');
//   return response.data;
// };

export const getPortfolio = ({ featured } = {}) => {
  const items = featured
    ? PORTFOLIO_ITEMS.filter((item) => item.is_featured)
    : PORTFOLIO_ITEMS;
  return Promise.resolve(items);
};

export const getPortfolioFeatured = () => getPortfolio({ featured: true });

export const getPortfolioCategories = () => Promise.resolve(PORTFOLIO_CATEGORIES);
