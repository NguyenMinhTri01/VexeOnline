import axios from "axios";

export const api = axios.create({
  baseURL : "https://vexeonline-api.herokuapp.com/api"
})
//https://vexeonline-api.herokuapp.com/api
//http://localhost:5000/api