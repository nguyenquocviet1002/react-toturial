import axios from "axios";

const instance = axios.create({
  baseURL: "https://61a1fe86014e1900176de816.mockapi.io",
});

export default instance;
