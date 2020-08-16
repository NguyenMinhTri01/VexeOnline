import axios from "axios";

export const api = axios.create({
  baseURL : "https://vexerevn.herokuapp.com/api"
})