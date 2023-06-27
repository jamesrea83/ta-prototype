import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Auction } from '@/app/_types/Auction';

export interface SearchState {
	search: string;
	initialAuctions: Auction[];
}

const initialState: SearchState = {
	search: '',
	initialAuctions: [],
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setIniitialAuctions: (state, action: PayloadAction<Auction[]>) => {
			state.initialAuctions = action.payload;
		},
	},
});

export const { setSearch, setIniitialAuctions } = searchSlice.actions;
export default searchSlice.reducer;
