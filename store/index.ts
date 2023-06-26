import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchSlice';
import { auctionsApi } from '@/store/auctionsApi';

export const store = configureStore({
	reducer: {
		search: searchReducer,
		auctionsApi: auctionsApi.reducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(auctionsApi.middleware);
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
