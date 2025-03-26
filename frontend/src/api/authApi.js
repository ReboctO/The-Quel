import axios from "axios";

const API_BASE_URL = "http://localhost:5156/api/auth";

export const loginUser = async (credentials) => {
  return await axios.post(`${API_BASE_URL}/login`, credentials);
};

export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/register`, userData);
};

export const fetchUserProfile = async (token) => {
  return await axios.get(`${API_BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
