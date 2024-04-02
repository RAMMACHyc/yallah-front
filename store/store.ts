import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import authReducer  from '../features/auth/authSlice'
import postReducer from '../features/post/postSlice';
import categoryReducer from '../features/category/categorySlice';
import cityReducer from '../features/city/citySlice';
import placeReducer from '../features/place/placeSlice';


export const store = configureStore({
	reducer: {
		auth: authReducer,
		post: postReducer,
		category: categoryReducer,
		cities: cityReducer,
		place: placeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>