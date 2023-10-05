import { useDispatch, useSelector } from "react-redux";
// import { dataTrie } from "../../constants/Trie";
import { sampleData } from "../../constants/sample-data";
import { updateResults } from "../../appstate/slices/SearchResultsSlice";
import { useEffect } from "react";
import ResultsCard from "./ResultsCard";

// Lists all autocompleted results as ResultCards
// Autocomplete entries received from Trie Data Structure everytime search input is updated.
function ResultsList({ map }) {
	const searchInput = useSelector((state) => state.search.value);
	const searchResults = useSelector((state) => state.searchResults.results);
	const dispatch = useDispatch();

	useEffect(() => {
		const filterResults = () => {
			// Original solution used Trie/Prefix Tree Data Structure
			// const filteredNames = dataTrie.autoComplete(searchInput);
			// const results = [];
			// for (let name of filteredNames) {
			// 	results.push(
			// 		sampleData.find((data) => data.name.toLowerCase() === name)
			// 	);
			// }
			// Now uses built in methods to accomplish auto complete.
			const lowercaseSearch = searchInput.toLowerCase();
			const results = sampleData.filter((data) => data.name.toLowerCase().includes(lowercaseSearch))
			dispatch(updateResults(results));
		};

		filterResults();
	}, [searchInput, dispatch]);

	return (
		<div className="mt-2 shadow-lg">
			{searchInput ? (
				searchResults.length > 0 ? (
					<p className="px-4 py-2 text-xl font-bold text-white rounded-t bg-blue-700 shadow-xl">
						Found {searchResults.length} Results:
					</p>
				) : (
					<p className="px-4 py-2 text-xl font-bold text-white rounded-t bg-blue-700 shadow-xl">
						No Results Found
					</p>
				)
			) : null}
			<div className="max-h-96 overflow-y-scroll">
				{searchResults.length > 0 && searchInput
					? searchResults.map((result) => (
						<ResultsCard map={map} location={result} key={result.id} />
					))
					: null}
			</div>
		</div>
	);
}
export default ResultsList;
