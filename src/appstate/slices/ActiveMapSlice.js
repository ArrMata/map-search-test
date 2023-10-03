import { createSlice } from "@reduxjs/toolkit";

// ActiveMapSlice, state used for determining what map to display. 

export const activeMap = createSlice({
	name: 'activeMap',
	initialState: {
		value: "OpenStreetMap"
	},
	reducers: {
		selectMap: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const { selectMap } = activeMap.actions

export default activeMap.reducer