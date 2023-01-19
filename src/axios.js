import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokbackend.up.railway.app/",
});

export default instance;
