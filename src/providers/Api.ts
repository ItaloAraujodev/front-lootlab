import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL_BACKEND
    : "http://localhost:3333/v1";

export const Api = axios.create({ baseURL });
