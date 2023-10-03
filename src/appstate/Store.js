import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices/SearchSlice';
import searchResultsReducer from './slices/SearchResultsSlice';
import activeResultReducer from "./slices/ActiveResultSlice";
import activeMapReducer from "./slices/ActiveMapSlice"

// Redux Global AppState, redux used for familiarty and slices help seperate logic into respective files.
// All slices are created in order to prevent prop drilling to components, and allow for easy access to states for reading and updating.

export const appstate = configureStore({
	reducer: {
		search: searchReducer,
		searchResults: searchResultsReducer,
		activeResult: activeResultReducer,
		activeMap: activeMapReducer,
	}
})