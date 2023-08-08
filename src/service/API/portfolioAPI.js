import { axiosInstance } from './axios';

export const fetchPortfolio = () => {
  return axiosInstance.get(`/portfolio`).then(({ data }) => data);
};

export const fetchProjectById = async id => {
  const response = await axiosInstance.get(`/portfolio/${id}`);
  return response;
};
