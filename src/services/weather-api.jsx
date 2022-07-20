import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://calm-falls-44640.herokuapp.com",
});

export default weatherApi;
