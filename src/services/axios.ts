import axios from "axios";

export const api = axios.create({
  baseURL: "/",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});