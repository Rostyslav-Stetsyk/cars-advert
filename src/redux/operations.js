import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const carAxiosInstance = axios.create({
  baseURL: "https://65ab9240fcd1c9dcffc694d3.mockapi.io/api/",
});

export const getCars = createAsyncThunk("cars/getAllCars", async () => {
  const response = carAxiosInstance.get("/cars");
  console.log(response);
});
