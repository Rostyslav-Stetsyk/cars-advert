import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const carAxiosInstance = axios.create({
  baseURL: "https://65ab9240fcd1c9dcffc694d3.mockapi.io/api/",
  params: {
    l: 12,
  },
});

export const getCars = createAsyncThunk(
  "cars/getAllCars",
  async ({ page = 1, signal, ...filters }) => {
    const response = await carAxiosInstance.get("/cars", {
      params: {
        page,
        ...filters,
      },
      signal,
    });
    return response.data;
  }
);
