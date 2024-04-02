import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_SOBRUS } from "@/constants/API_SOBRUS";


export const getCities = createAsyncThunk("city/getCities", async () => {
  const response = await axios.get(`${API_SOBRUS}/cities`);
  return response.data;
});