import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../appstate/slices/SearchSlice";
import { selectResult } from "../appstate/slices/ActiveResultSlice";

function ResultsCard({ map, location }) {
	const searchResults = useSelector(state => state.searchResults.results);
	const dispatch = useDispatch();

	const select = (location) => {
		const zoom = map.getZoom();
		const selectedResult = searchResults.find(result => result.name === location.name);
		document.getElementById('locationDetailsModal').showModal();

		dispatch(updateSearch(location.name));
		dispatch(selectResult(selectedResult));
		map.setView([location.location.lat, location.location.lon], zoom > 15 ? zoom : 15)
	}

	return (
		<div onClick={() => select(location)}
			className="bg-white p-3 flex items-center border-b border-gray-500 hover:cursor-pointer hover:bg-gray-300 transition-all"
			key={location.id}
		>
			<img src="/icon-pin.svg" alt="Location Pin" className="w-8 aspect-square me-3" />
			<div>
				<p className="text-black font-semibold text-lg">{location.name}</p>
				<div className="flex">
					<p className="text-gray-500 font-semibold text-sm me-2">{location.location.lat}</p>
					<p className="text-gray-500 font-semibold text-sm">{location.location.lon}</p>
				</div>
			</div>
		</div>
	)
}
export default ResultsCard