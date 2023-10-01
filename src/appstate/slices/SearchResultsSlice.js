import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
	name: 'searchResults',
	initialState: {
		results: []
	},
	reducers: {
		updateResults: (state, action) => {
			state.results = action.payload;
		},
	}
});

export const { updateResults } = searchResultsSlice.actions

export default searchResultsSlice.reducer