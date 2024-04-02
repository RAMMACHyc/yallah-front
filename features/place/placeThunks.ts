import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@/constants/API_URL";

export const getPlaces = createAsyncThunk("place/getPlaces", async () => {
  const response = await axios.get(`${API_URL}/place`);
  return response.data;
});

export const createPlace = createAsyncThunk("place/createPlace", async (place: any) => {
  const response = await axios.post(`${API_URL}/place`, place);
  return response.data;
});

export const deletePlace = createAsyncThunk("place/deletePlace", async (id: string) => {
  await axios.delete(`${API_URL}/place/${id}`);
  return id;
});

