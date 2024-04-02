import { createSlice } from "@reduxjs/toolkit";
import { PlaceType } from "@/types/place";
import { createPlace, deletePlace, getPlaces } from "./placeThunks";

interface PlaceState {
  places: PlaceType[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PlaceState = {
  places: [],
  isLoading: false,
  error: null,
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getPlaces.fulfilled, (state, action) => {
      state.isLoading = false;
      state.places = action.payload;
    });

    builder.addCase(getPlaces.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPlaces.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });


    builder.addCase(createPlace.fulfilled, (state, action) => {
        state.places.push(action.payload);
        }
    );
    builder.addCase(createPlace.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(createPlace.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
    });

    // builder.addCase(deletePlace.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.places = state.places.filter((place) => place.id !== action.payload.id);
    //   });

    builder.addCase(deletePlace.pending, (state) => {
        state.isLoading = true;
    });

    builder.addCase(deletePlace.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
    });
  },
});

export default placeSlice.reducer;