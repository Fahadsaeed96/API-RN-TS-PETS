import axios from "axios";

export const api = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com/",
});
