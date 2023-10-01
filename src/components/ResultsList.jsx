import { useDispatch, useSelector } from "react-redux"
import { dataTrie } from "../constants/Trie";
import { sampleData } from "../constants/sample-data";
import { updateResults } from "../appstate/slices/SearchResultsSlice";
import { useEffect } from "react";
import ResultsCard from "./ResultsCard";

function ResultsList() {
	const searchInput = useSelector(state => state.search.value);
	const searchResults = useSelector(state => state.searchResults.results);
	const dispatch = useDispatch();

	useEffect(() => {
		const filterResults = () => {
			const filteredNames = dataTrie.autoComplete(searchInput);
			const results = [];
			for (let name of filteredNames) {
				results.push(sampleData.find(data => data.name.toLowerCase() === name));
			}
			dispatch(updateResults(results));
		}

		filterResults();
	}, [searchInput, dispatch])

	return (
		<div className="mt-2">
			{searchInput ?
				searchResults.length > 0 ? (
					<p className="px-4 py-2 text-xl font-bold text-white rounded-t bg-blue-700 shadow-xl">
						Found {searchResults.length} Results:
					</p>
				) :
					<p className="px-4 py-2 text-xl font-bold text-white rounded-t bg-blue-700 shadow-xl">
						No Results Found
					</p>
				:
				<></>
			}
			{searchResults.length > 0 && searchInput ?
				searchResults.map(result => (
					<ResultsCard location={result} key={result.id} />
				))
				:
				<></>
			}
		</div>
	)
}
export default ResultsList