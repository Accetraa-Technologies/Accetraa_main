import { services } from '@/data/services';

// Dummy data active — backend integration preserved below for future use.
// TO GO LIVE: delete the two lines above, uncomment the block below.
//
// import axiosInstance from './axiosInstance';
// export const getServices = async () => {
//   const response = await axiosInstance.get('/api/v1/services/');
//   return response.data;
// };

export const getServices = () => Promise.resolve(services);
