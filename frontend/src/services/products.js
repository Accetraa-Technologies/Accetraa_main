import { PRODUCTS_DATA } from '@/data/products.data';

// Dummy data active — backend integration preserved below for future use.
// TO GO LIVE: delete the two lines above, uncomment the block below.
//
// import axiosInstance from './axiosInstance';
// export const getProducts = async () => {
//   const response = await axiosInstance.get('/api/v1/products/');
//   return response.data;
// };

export const getProducts = () => Promise.resolve(PRODUCTS_DATA);
