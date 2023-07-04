import axios from "axios";
import { baseURL } from "../../tmp/config.js";

export const axiosAuth = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosAuth;
