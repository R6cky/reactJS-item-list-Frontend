import axios from "axios";
const port = 2000;
export const api = axios.create({
  baseURL: `http://localhost:${port}`,
  timeout: 5000,
});
