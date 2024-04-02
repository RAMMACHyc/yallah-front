
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryType } from "@/types/category";
import { API_URL } from "@/constants/API_URL"




export const getCategories = createAsyncThunk("category/getCategories", async () => {
    const response = await axios.get(`${API_URL}/category`);
    return response.data;
    }
);

export const createCategory = createAsyncThunk("category/createCategory", async (categoryData: CategoryType) => {
    const response = await axios.post(`${API_URL}/category`, categoryData);
    return response.data;
    }
);


export const deleteCategory = createAsyncThunk("category/deleteCategory", async (id: string) => {
    const response = await axios.delete(`${API_URL}/category/${id}`);
    return response.data;
    }
);