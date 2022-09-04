import axios from "axios";

export const endpoints = {
  base: "http://localhost:8000/api",
  post:"/post",
};

export const server = axios.create({
  baseURL:endpoints.base
});