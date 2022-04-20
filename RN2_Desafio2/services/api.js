import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/?&apikey=51e0824a&s=",
});

export default api;