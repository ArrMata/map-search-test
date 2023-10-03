import { createSlice } from "@reduxjs/toolkit";

export const activeMap = createSlice({
	name: 'activeMap',
	initialState: {
		value: "OpenStreetMap"
	},
	reducers: {
		chooseMap: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const { chooseMap } = activeMap.actions

export default activeMap.reducer