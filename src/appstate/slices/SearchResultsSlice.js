import { createSlice } from "@reduxjs/toolkit";

// SearchResultsSlice used for updating array of results that appear under the search bar. Updated each time search input is changed.
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