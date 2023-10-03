import { createSlice } from "@reduxjs/toolkit";

// ActiveResultSlice, used for selecting the location to display in details modal.

export const activeResultSlice = createSlice({
	name: 'activeResult',
	initialState: {
		value: {}
	},
	reducers: {
		selectResult: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const { selectResult } = activeResultSlice.actions

export default activeResultSlice.reducer