import { PostType } from "@/types/post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@/constants/API_URL"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const createPost = createAsyncThunk("post/createPost", async (postData: PostType) => {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
    }
);


export const getPosts = createAsyncThunk("post/getPosts", async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
    }
);

export const deletePost = createAsyncThunk("post/deletePost", async (id: string) => {
    const response = await axios.delete(`${API_URL}/posts/${id}`);
    return response.data;
    }
);

export const updatePost = createAsyncThunk("post/updatePost", async (postData: PostType) => {
    const response = await axios.put(`${API_URL}/posts/${postData.id}`, postData);
    return response.data;
    }
);



