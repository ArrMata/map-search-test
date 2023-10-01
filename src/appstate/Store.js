import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices/SearchSlice'
import searchResultsReducer from './slices/SearchResultsSlice'
import activeResultReducer from "./slices/ActiveResultSlice";

export const appstate = configureStore({
	reducer: {
		search: searchReducer,
		searchResults: searchResultsReducer,
		activeResult: activeResultReducer
	}
})