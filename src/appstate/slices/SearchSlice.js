import { createSlice } from "@reduxjs/toolkit";

// SearchSlice, updated and read from in order to updated search results with correct autocompelte results.
export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		value: ""
	},
	reducers: {
		updateSearch: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const { updateSearch } = searchSlice.actions

export default searchSlice.reducer