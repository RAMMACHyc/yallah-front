import { createSlice } from "@reduxjs/toolkit";
import { CategoryType } from "@/types/category";
import { createCategory, deleteCategory, getCategories } from "./categoryThunks";


interface categoryState {  
    categories: CategoryType[];
    isLoading: boolean;
    error: string | null;
}

const initialState: categoryState = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });
        builder.addCase(createCategory.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories.push(action.payload);
        });
        builder.addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });
        builder.addCase(deleteCategory.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = state.categories.filter((category) => category.id !== action.payload.id);
        });
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || null;
        });
    }


});

export default categorySlice.reducer;