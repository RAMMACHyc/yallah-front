import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, registerResponse,logintype } from "../../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@/constants/API_URL"



export const register = createAsyncThunk("auth/register",async (userData: User) => {
    const response = await axios.post<registerResponse>(`${API_URL}/user/signup`, userData);
    await AsyncStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
);

export const login = createAsyncThunk("auth/login", async (userData: logintype) => {
  const response = await axios.post(`${API_URL}/user/signin`, userData);
  await AsyncStorage.setItem("user", JSON.stringify(response.data));
  console.log(response.data);
  return response.data;
});


export const logout = createAsyncThunk("auth/logout", async () => {
  await AsyncStorage.removeItem("user");
});

