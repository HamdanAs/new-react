const axios = require("axios").default;

const instance = axios.create({
  baseURL: "http://localhost:4567/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
