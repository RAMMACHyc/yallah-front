import { createSlice } from "@reduxjs/toolkit";
import { CityType, CityResponse } from "@/types/city";
import {  getCities } from "./cityThunks";


interface cityState {  
    cities: CityType[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CityResponse = {
    cities: [],
    // isLoading: false,
    // error: null,
};


export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(getCities.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.cities = action.payload;
        });
     
    }
});

export default citySlice.reducer;