import axios from "axios";

const apiConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiConfig.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiConfig;
