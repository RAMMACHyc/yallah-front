import { PostType } from "@/types/post";
import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, getPosts, updatePost } from "./postThunks";




interface PostState {
    posts: PostType[];
    isLoading: boolean;
    error: string | null;
  }
 
  const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: null,
  };


  export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createPost.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts.push(action.payload); 
      });
      builder.addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
      builder.addCase(updatePost.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      });
      builder.addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
      builder.addCase(deletePost.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      });
      builder.addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
      builder.addCase(getPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload; 
      });
      builder.addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
    },
  });

export default postSlice.reducer;