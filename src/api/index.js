import axios from "axios";

export const api = axios.create({
  baseURL : "https://vexe-online.herokuapp.com/api"
})