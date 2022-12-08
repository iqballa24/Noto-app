import axios from "axios";

const getAccessToken = () => {
  const data = localStorage.getItem("token");
  return JSON.parse(data);
};

export const API = axios.create({
  baseURL: "https://notes-api.dicoding.dev/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
