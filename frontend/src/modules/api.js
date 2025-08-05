import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchDashboardData = async () => {
  const res = await axios.get(`${BASE_URL}/dashboard`, {
    withCredentials: true,
  });
  return res.data;
};

export const fetchLeaderboard = async () => {
  const res = await axios.get(`${BASE_URL}/leaderboard`);
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await axios.post(`${BASE_URL}/auth/login`, credentials, {
    withCredentials: true,
  });
  return res.data;
};

export const signupUser = async (formData) => {
  const res = await axios.post(`${BASE_URL}/auth/signup`, formData, {
    withCredentials: true,
  });
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${BASE_URL}/auth/logout`, {}, {
    withCredentials: true,
  });
  return res.data;
};

export const addNewIntern = async (internData) => {
  const res = await axios.post(`${BASE_URL}/interns`, internData);
  return res.data;
};
