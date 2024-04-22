import axios from "axios";


const BASE_URL = "https://lms-project-backend.onrender.com";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;         // The base URL is prepended to all requests i.e. https://example.com/api/v1/...
axiosInstance.defaults.withCredentials = true;     // This is important for authentication to work properly with cookies

export default axiosInstance;
