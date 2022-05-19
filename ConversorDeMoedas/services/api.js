import axios from "axios";

const api = axios.create({
  baseURL: "https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=1db6265c78f03ddac2db",
});

export default api;