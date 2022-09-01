import axios from "axios";

export const endpoints = {
  base: "http://localhost:8000/api",
  post:"/post",
  put:"/put",
  delete:"/delete",
  get:"/get"
};

export const server = axios.create({
  baseURL:endpoints.base
});