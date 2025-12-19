import axios from "axios";

const apiClient = axios.create({
  baseURL: "/",
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API 에러 발생:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
