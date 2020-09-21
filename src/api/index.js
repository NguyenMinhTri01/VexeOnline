import axios from "axios";

export const api = axios.create({
  baseURL : "https://vexeonline-api.herokuapp.com/api"
})