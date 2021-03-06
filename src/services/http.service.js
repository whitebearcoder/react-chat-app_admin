import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  ((response) => {
    return response;
  },
  (error) => {
    console.log("Error: ", error);
    return Promise.reject(error);
  })
);

export default instance;
